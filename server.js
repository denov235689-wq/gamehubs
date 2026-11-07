require('dotenv').config();
const express = require('express');
const crypto = require('crypto');
const path = require('path');
const Database = require('better-sqlite3');

const { BOT_TOKEN, WEBAPP_URL, PORT = 3000 } = process.env;
const OWNERS = (process.env.ADMIN_IDS || '').split(',').map(s => Number(s.trim())).filter(Boolean);
if (!BOT_TOKEN || !WEBAPP_URL) { console.error('.env faylda BOT_TOKEN va WEBAPP_URL kerak'); process.exit(1); }

/* ---------- Baza ---------- */
const db = new Database(path.join(__dirname, 'data.db'));
db.pragma('journal_mode = WAL');
db.exec(`
CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, name TEXT, username TEXT, balance INTEGER DEFAULT 0, ref_by INTEGER, created INTEGER);
CREATE TABLE IF NOT EXISTS admins(id INTEGER PRIMARY KEY);
CREATE TABLE IF NOT EXISTS channels(id INTEGER PRIMARY KEY AUTOINCREMENT, chat TEXT, title TEXT, link TEXT, reward INTEGER DEFAULT 0, daily INTEGER DEFAULT 0, required INTEGER DEFAULT 0, active INTEGER DEFAULT 1);
CREATE TABLE IF NOT EXISTS claims(user INTEGER, channel INTEGER, day TEXT, PRIMARY KEY(user, channel, day));
CREATE TABLE IF NOT EXISTS withdrawals(id INTEGER PRIMARY KEY AUTOINCREMENT, user INTEGER, prize TEXT, coins INTEGER, info TEXT, status TEXT DEFAULT 'new', created INTEGER);
CREATE TABLE IF NOT EXISTS payments(charge TEXT PRIMARY KEY, user INTEGER, stars INTEGER, coins INTEGER, created INTEGER);
CREATE TABLE IF NOT EXISTS settings(k TEXT PRIMARY KEY, v TEXT);
`);
const DEFAULTS = {
  coins_per_star: '0.1', // 1 Stars = necha tanga
  min_stars: '10',
  ref_bonus: '5',        // do'st taklif qilganga tanga
  ref_percent: '10',     // referal depoziti %
  stakes: '[1,5,20,100]',  // tikish variantlari (tanga)
  win_mult: '1.8',         // g'olib tikishning necha baravarini oladi
  bot_enabled: '1',        // raqib topilmasa bot bilan o'ynash
  bot_depth: '4',          // bot kuchi (1-7)
  bot_wait: '8',           // raqib kutish (soniya)
  prizes: JSON.stringify([
    { id: 'uc60', title: 'PUBG 60 UC', coins: 30 },
    { id: 'stars50', title: '50 Telegram Stars', coins: 25 },
    { id: 'premium3', title: 'Telegram Premium 3 oy', coins: 150 }
  ])
};
for (const [k, v] of Object.entries(DEFAULTS)) db.prepare('INSERT OR IGNORE INTO settings(k,v) VALUES(?,?)').run(k, v);

const getS = k => db.prepare('SELECT v FROM settings WHERE k=?').get(k)?.v;
const setS = (k, v) => db.prepare('INSERT INTO settings(k,v) VALUES(?,?) ON CONFLICT(k) DO UPDATE SET v=excluded.v').run(k, String(v));
const C = x => Math.round(Number(x) * 100);   // tanga -> butun son (xato bo'lmasligi uchun)
const F = c => c / 100;
const add = (id, c) => db.prepare('UPDATE users SET balance=balance+? WHERE id=?').run(c, id);
const today = () => new Date(Date.now() + 5 * 3600e3).toISOString().slice(0, 10); // UZ vaqti
const sleep = ms => new Promise(r => setTimeout(r, ms));

/* ---------- Telegram API ---------- */
async function tg(method, body = {}) {
  const r = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/${method}`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)
  });
  return r.json();
}
const notify = (id, text, extra = {}) => tg('sendMessage', { chat_id: id, text, ...extra }).catch(() => {});
let BOT_USER = '';

const memCache = new Map();
async function isMember(uid, chat) {
  const key = chat + ':' + uid, hit = memCache.get(key);
  if (hit && Date.now() - hit < 60000) return true;
  const r = await tg('getChatMember', { chat_id: chat, user_id: uid });
  const ok = !!(r.ok && ['member', 'administrator', 'creator'].includes(r.result.status));
  if (ok) memCache.set(key, Date.now());
  return ok;
}
const linkOf = c => c.link || (c.chat.startsWith('@') ? 'https://t.me/' + c.chat.slice(1) : '');
async function missingChannels(uid) {
  const rows = db.prepare('SELECT * FROM channels WHERE active=1 AND required=1').all();
  const res = await Promise.all(rows.map(async c => (await isMember(uid, c.chat)) ? null : { id: c.id, title: c.title, link: linkOf(c) }));
  return res.filter(Boolean);
}

/* ---------- Foydalanuvchi va admin ---------- */
const parseRef = s => { const m = /^r(\d+)$/.exec(s || ''); return m ? Number(m[1]) : null; };
function getUser(tu, refId) {
  let u = db.prepare('SELECT * FROM users WHERE id=?').get(tu.id);
  if (!u) {
    const ok = refId && refId !== tu.id && db.prepare('SELECT 1 FROM users WHERE id=?').get(refId);
    db.prepare('INSERT INTO users(id,name,username,ref_by,created) VALUES(?,?,?,?,?)')
      .run(tu.id, tu.first_name || 'User', tu.username || null, ok ? refId : null, Date.now());
    if (ok) {
      const bonus = C(getS('ref_bonus'));
      add(refId, bonus);
      notify(refId, `🎉 Do'stingiz qo'shildi! +${F(bonus)} tanga`);
    }
    u = db.prepare('SELECT * FROM users WHERE id=?').get(tu.id);
  }
  return u;
}
const adminIds = () => [...new Set([...OWNERS, ...db.prepare('SELECT id FROM admins').all().map(r => r.id)])];
const isAdmin = id => adminIds().includes(id);

/* ---------- initData tekshirish ---------- */
function verify(initData) {
  try {
    const p = new URLSearchParams(initData);
    const hash = p.get('hash'); if (!hash) return null;
    p.delete('hash');
    const str = [...p.entries()].sort(([a], [b]) => (a < b ? -1 : 1)).map(([k, v]) => `${k}=${v}`).join('\n');
    const secret = crypto.createHmac('sha256', 'WebAppData').update(BOT_TOKEN).digest();
    const h = crypto.createHmac('sha256', secret).update(str).digest('hex');
    if (h !== hash) return null;
    if (Date.now() / 1000 - Number(p.get('auth_date')) > 86400) return null;
    return JSON.parse(p.get('user'));
  } catch { return null; }
}

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const auth = (req, res, next) => {
  const init = req.get('x-init') || '';
  const tu = verify(init);
  if (!tu) return res.status(401).json({ error: 'Telegram orqali oching' });
  req.uid = tu.id;
  req.u = getUser(tu, parseRef(new URLSearchParams(init).get('start_param')));
  next();
};
const adminOnly = (req, res, next) => isAdmin(req.uid) ? next() : res.status(403).json({ error: 'Ruxsat yo\'q' });
const wrap = fn => (req, res) => Promise.resolve(fn(req, res)).catch(e => { console.error(e); res.status(500).json({ error: 'Server xatosi' }); });

/* ---------- Foydalanuvchi API ---------- */
app.get('/api/me', auth, wrap(async (req, res) => {
  const u = db.prepare('SELECT * FROM users WHERE id=?').get(req.uid);
  res.json({
    id: u.id, name: u.name, balance: F(u.balance), isAdmin: isAdmin(u.id),
    refLink: `https://t.me/${BOT_USER}?start=r${u.id}`,
    refBonus: Number(getS('ref_bonus')), refPercent: Number(getS('ref_percent')),
    rate: Number(getS('coins_per_star')), minStars: Number(getS('min_stars')),
    prizes: JSON.parse(getS('prizes')),
    stakes: JSON.parse(getS('stakes')), winMult: Number(getS('win_mult')),
    missing: await missingChannels(u.id)
  });
}));

app.get('/api/tasks', auth, (req, res) => {
  const day = today();
  const rows = db.prepare('SELECT * FROM channels WHERE active=1 AND reward>0').all();
  res.json(rows.map(c => ({
    id: c.id, title: c.title, reward: F(c.reward), daily: !!c.daily, link: linkOf(c),
    done: !!db.prepare('SELECT 1 FROM claims WHERE user=? AND channel=? AND day=?').get(req.uid, c.id, c.daily ? day : 'once')
  })));
});

app.get('/api/top', auth, (req, res) => res.json(
  db.prepare('SELECT id,name,balance FROM users ORDER BY balance DESC LIMIT 20').all()
    .map(u => ({ id: u.id, name: u.name, balance: F(u.balance) }))));

app.post('/api/tasks/claim', auth, wrap(async (req, res) => {
  const c = db.prepare('SELECT * FROM channels WHERE id=? AND active=1').get(Number(req.body.id));
  if (!c) return res.status(404).json({ error: 'Vazifa topilmadi' });
  if (!(await isMember(req.uid, c.chat))) return res.status(400).json({ error: 'Avval kanalga obuna bo\'ling' });
  const r = db.prepare('INSERT OR IGNORE INTO claims(user,channel,day) VALUES(?,?,?)').run(req.uid, c.id, c.daily ? today() : 'once');
  if (!r.changes) return res.status(400).json({ error: 'Bu vazifa bajarilgan' });
  add(req.uid, c.reward);
  res.json({ ok: true, reward: F(c.reward) });
}));

app.post('/api/deposit', auth, wrap(async (req, res) => {
  const stars = Math.floor(Number(req.body.stars));
  const min = Number(getS('min_stars'));
  if (!stars || stars < min || stars > 100000) return res.status(400).json({ error: `Kamida ${min} Stars` });
  const r = await tg('createInvoiceLink', {
    title: 'Hisobni to\'ldirish',
    description: `${stars} Stars evaziga tanga olasiz`,
    payload: `dep:${req.uid}:${stars}`,
    currency: 'XTR',
    prices: [{ label: 'Tanga', amount: stars }]
  });
  if (!r.ok) return res.status(500).json({ error: 'To\'lov havolasi yaratilmadi' });
  res.json({ link: r.result });
}));

app.post('/api/withdraw', auth, (req, res) => {
  const p = JSON.parse(getS('prizes')).find(x => x.id === req.body.prize);
  const info = String(req.body.info || '').trim().slice(0, 100);
  if (!p) return res.status(400).json({ error: 'Sovg\'a topilmadi' });
  if (!info) return res.status(400).json({ error: 'PUBG ID yoki @username yozing' });
  const cost = C(p.coins);
  const ok = db.transaction(() => {
    const r = db.prepare('UPDATE users SET balance=balance-? WHERE id=? AND balance>=?').run(cost, req.uid, cost);
    if (!r.changes) return false;
    db.prepare('INSERT INTO withdrawals(user,prize,coins,info,created) VALUES(?,?,?,?,?)').run(req.uid, p.title, cost, info, Date.now());
    return true;
  })();
  if (!ok) return res.status(400).json({ error: 'Tanga yetmaydi' });
  adminIds().forEach(id => notify(id, `💵 Yangi so'rov: ${p.title}\nFoydalanuvchi: ${req.uid}\nMa'lumot: ${info}`));
  res.json({ ok: true });
});

/* ---------- Admin API ---------- */
const A = express.Router();
A.use(auth, adminOnly);

A.get('/stats', (req, res) => res.json({
  users: db.prepare('SELECT COUNT(*) n FROM users').get().n,
  coins: F(db.prepare('SELECT COALESCE(SUM(balance),0) s FROM users').get().s),
  stars: db.prepare('SELECT COALESCE(SUM(stars),0) s FROM payments').get().s,
  pending: db.prepare("SELECT COUNT(*) n FROM withdrawals WHERE status='new'").get().n
}));

A.get('/settings', (req, res) => res.json(Object.fromEntries(
  ['coins_per_star', 'min_stars', 'ref_bonus', 'ref_percent', 'prizes', 'stakes', 'win_mult', 'bot_enabled', 'bot_depth', 'bot_wait']
    .map(k => [k, getS(k)]))));
A.post('/settings', (req, res) => {
  const b = req.body;
  for (const k of ['coins_per_star', 'min_stars', 'ref_bonus', 'ref_percent', 'win_mult', 'bot_enabled', 'bot_depth', 'bot_wait']) {
    if (b[k] !== undefined) {
      const n = Number(b[k]);
      if (!isFinite(n) || n < 0) return res.status(400).json({ error: k + ' noto\'g\'ri' });
      setS(k, n);
    }
  }
  if (b.stakes !== undefined) {
    const arr = String(b.stakes).split(',').map(s => Number(s.trim())).filter(n => n > 0);
    if (!arr.length) return res.status(400).json({ error: 'Tikishlar noto\'g\'ri' });
    setS('stakes', JSON.stringify(arr));
  }
  if (b.prizes !== undefined) {
    try {
      const arr = JSON.parse(b.prizes);
      if (!Array.isArray(arr) || arr.some(x => !x.id || !x.title || !(Number(x.coins) > 0))) throw 0;
      setS('prizes', JSON.stringify(arr));
    } catch { return res.status(400).json({ error: 'Sovg\'alar JSON noto\'g\'ri' }); }
  }
  res.json({ ok: true });
});

A.get('/channels', (req, res) => res.json(db.prepare('SELECT * FROM channels WHERE active=1 ORDER BY id DESC').all()
  .map(c => ({ ...c, reward: F(c.reward) }))));
A.post('/channels', (req, res) => {
  const b = req.body;
  const chat = String(b.chat || '').trim();
  if (!chat) return res.status(400).json({ error: 'Kanal @username yoki ID kerak' });
  db.prepare('INSERT INTO channels(chat,title,link,reward,daily,required) VALUES(?,?,?,?,?,?)')
    .run(chat, String(b.title || chat).slice(0, 60), String(b.link || '').trim(), C(b.reward || 0), b.daily ? 1 : 0, b.required ? 1 : 0);
  res.json({ ok: true });
});
A.delete('/channels/:id', (req, res) => {
  db.prepare('UPDATE channels SET active=0 WHERE id=?').run(Number(req.params.id));
  res.json({ ok: true });
});

A.get('/withdrawals', (req, res) => res.json(db.prepare(
  `SELECT w.*, u.name, u.username FROM withdrawals w LEFT JOIN users u ON u.id=w.user
   WHERE w.status='new' ORDER BY w.id`).all().map(w => ({ ...w, coins: F(w.coins) }))));
A.post('/withdrawals/:id', (req, res) => {
  const w = db.prepare("SELECT * FROM withdrawals WHERE id=? AND status='new'").get(Number(req.params.id));
  if (!w) return res.status(404).json({ error: 'Topilmadi' });
  if (req.body.action === 'done') {
    db.prepare("UPDATE withdrawals SET status='done' WHERE id=?").run(w.id);
    notify(w.user, `✅ So'rovingiz bajarildi: ${w.prize}`);
  } else {
    db.transaction(() => {
      db.prepare("UPDATE withdrawals SET status='rejected' WHERE id=?").run(w.id);
      add(w.user, w.coins); // tanga qaytariladi
    })();
    notify(w.user, `❌ So'rov rad etildi: ${w.prize}. Tangalar hisobingizga qaytarildi.`);
  }
  res.json({ ok: true });
});

A.get('/admins', (req, res) => res.json({ owners: OWNERS, admins: db.prepare('SELECT id FROM admins').all().map(r => r.id) }));
A.post('/admins', (req, res) => {
  const id = Number(req.body.id);
  if (!id) return res.status(400).json({ error: 'ID noto\'g\'ri' });
  db.prepare('INSERT OR IGNORE INTO admins(id) VALUES(?)').run(id);
  res.json({ ok: true });
});
A.delete('/admins/:id', (req, res) => {
  if (!OWNERS.includes(req.uid)) return res.status(403).json({ error: 'Faqat asosiy admin o\'chira oladi' });
  db.prepare('DELETE FROM admins WHERE id=?').run(Number(req.params.id));
  res.json({ ok: true });
});
app.use('/api/admin', A);

/* ---------- Shashka o'yini ---------- */
require('./games')(app, { db, auth, wrap, C, F, add, getS, notify });

/* ---------- Bot (long polling) ---------- */
async function onUpdate(u) {
  if (u.pre_checkout_query) {
    return tg('answerPreCheckoutQuery', { pre_checkout_query_id: u.pre_checkout_query.id, ok: true });
  }
  const m = u.message;
  if (!m) return;

  // Stars to'lovi muvaffaqiyatli
  if (m.successful_payment) {
    const sp = m.successful_payment;
    if (sp.currency !== 'XTR') return;
    const uid = m.from.id, stars = sp.total_amount;
    const coins = C(stars * Number(getS('coins_per_star')));
    const done = db.transaction(() => {
      const r = db.prepare('INSERT OR IGNORE INTO payments(charge,user,stars,coins,created) VALUES(?,?,?,?,?)')
        .run(sp.telegram_payment_charge_id, uid, stars, coins, Date.now());
      if (!r.changes) return null; // ikki marta hisoblanmasin
      add(uid, coins);
      const ref = db.prepare('SELECT ref_by FROM users WHERE id=?').get(uid)?.ref_by;
      let refCoins = 0;
      if (ref) { refCoins = Math.round(coins * Number(getS('ref_percent')) / 100); add(ref, refCoins); }
      return { ref, refCoins };
    })();
    if (done) {
      notify(uid, `✅ Hisob to'ldirildi: +${F(coins)} tanga (${stars} ⭐)`);
      if (done.ref && done.refCoins) notify(done.ref, `💰 Do'stingiz hisob to'ldirdi: +${F(done.refCoins)} tanga`);
    }
    return;
  }

  const text = m.text || '';
  if (text.startsWith('/start')) {
    getUser(m.from, parseRef(text.split(' ')[1]));
    return notify(m.chat.id, '🎮 Shashka o\'ynang, tanga yig\'ing va sovg\'alarga almashtiring!', {
      reply_markup: { inline_keyboard: [[{ text: '🎮 O\'ynash', web_app: { url: WEBAPP_URL } }]] }
    });
  }
  if (text.startsWith('/admin') && isAdmin(m.from.id)) {
    return notify(m.chat.id, '⚙️ Admin panel', {
      reply_markup: { inline_keyboard: [[{ text: 'Ochish', web_app: { url: WEBAPP_URL + '/admin.html' } }]] }
    });
  }
}

async function poll() {
  let offset = 0;
  for (;;) {
    try {
      const r = await tg('getUpdates', { offset, timeout: 30, allowed_updates: ['message', 'pre_checkout_query'] });
      if (!r.ok) { console.error(r); await sleep(3000); continue; }
      for (const u of r.result) { offset = u.update_id + 1; onUpdate(u).catch(console.error); }
    } catch (e) { console.error(e.message); await sleep(3000); }
  }
}

(async () => {
  const me = await tg('getMe');
  if (!me.ok) { console.error('BOT_TOKEN noto\'g\'ri'); process.exit(1); }
  BOT_USER = me.result.username;
  await tg('deleteWebhook');
  app.listen(PORT, () => console.log(`Ishga tushdi: port ${PORT}, bot @${BOT_USER}`));
  poll();
})();
