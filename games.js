/* Rus shashkasi (8x8, uchuvchi damka): server tomonida tekshiriladi.
   Tikish, raqib qidirish, bot, taymer, to'lov. */

const DIRS = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
const inb = (r, c) => r >= 0 && r < 8 && c >= 0 && c < 8;

/* 1 = oq (pastda, yuqoriga yuradi), -1 = qora; 2/-2 = damka */
function startBoard() {
  const b = new Array(64).fill(0);
  for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
    if ((r + c) % 2 !== 1) continue;
    if (r < 3) b[r * 8 + c] = -1; else if (r > 4) b[r * 8 + c] = 1;
  }
  return b;
}

/* Urish yo'llari (majburiy, ketma-ket urish, damka uchib urishi) */
function capsFrom(b, r, c, side, king, capSet, path, out) {
  let found = false;
  for (const [dr, dc] of DIRS) {
    let rr = r + dr, cc = c + dc;
    if (king) while (inb(rr, cc) && b[rr * 8 + cc] === 0) { rr += dr; cc += dc; }
    if (!inb(rr, cc)) continue;
    const i = rr * 8 + cc, p = b[i];
    if (p === 0 || Math.sign(p) === side || capSet.has(i)) continue;
    const lands = [];
    let lr = rr + dr, lc = cc + dc;
    while (inb(lr, lc) && b[lr * 8 + lc] === 0) { lands.push([lr, lc]); if (!king) break; lr += dr; lc += dc; }
    if (!lands.length) continue;
    found = true;
    const ns = new Set(capSet); ns.add(i);
    const opts = lands.map(([lr2, lc2]) => {
      const promo = !king && ((side === 1 && lr2 === 0) || (side === -1 && lr2 === 7));
      const sub = [];
      const kk = king || promo;
      const more = capsFrom(b, lr2, lc2, side, kk, ns, [...path, lr2 * 8 + lc2], sub);
      return { lr2, lc2, more, sub, kk };
    });
    const cont = opts.filter(o => o.more);
    if (cont.length) for (const o of cont) out.push(...o.sub);
    else for (const o of opts) out.push({ path: [...path, o.lr2 * 8 + o.lc2], caps: [...ns], k: o.kk });
  }
  return found;
}

function legalMoves(b, side) {
  const caps = [];
  for (let i = 0; i < 64; i++) {
    const p = b[i]; if (Math.sign(p) !== side) continue;
    const bb = b.slice(); bb[i] = 0;
    capsFrom(bb, i >> 3, i & 7, side, Math.abs(p) === 2, new Set(), [i], caps);
  }
  if (caps.length) return caps;
  const q = [];
  for (let i = 0; i < 64; i++) {
    const p = b[i]; if (Math.sign(p) !== side) continue;
    const r = i >> 3, c = i & 7;
    if (Math.abs(p) === 2) {
      for (const [dr, dc] of DIRS) {
        let rr = r + dr, cc = c + dc;
        while (inb(rr, cc) && b[rr * 8 + cc] === 0) { q.push({ path: [i, rr * 8 + cc], caps: [] }); rr += dr; cc += dc; }
      }
    } else {
      const rr = r + (side === 1 ? -1 : 1);
      for (const dc of [-1, 1]) { const cc = c + dc; if (inb(rr, cc) && b[rr * 8 + cc] === 0) q.push({ path: [i, rr * 8 + cc], caps: [] }); }
    }
  }
  return q;
}

function applyMove(b, m) {
  const nb = b.slice();
  const from = m.path[0], to = m.path[m.path.length - 1];
  let p = nb[from]; nb[from] = 0;
  for (const i of m.caps) nb[i] = 0;
  const r = to >> 3;
  if (Math.abs(p) === 1 && (m.k || (p === 1 && r === 0) || (p === -1 && r === 7))) p *= 2;
  nb[to] = p;
  return nb;
}

/* Bot: negamax + alpha-beta */
function evaluate(b, side) {
  let s = 0;
  for (let i = 0; i < 64; i++) {
    const p = b[i]; if (!p) continue;
    const r = i >> 3, c = i & 7;
    let v = Math.abs(p) === 2 ? 320 : 100 + (p === 1 ? 7 - r : r) * 4;
    if (c > 1 && c < 6 && r > 1 && r < 6) v += 3;
    s += Math.sign(p) * v;
  }
  return s * side;
}
function search(b, side, depth, alpha, beta) {
  const moves = legalMoves(b, side);
  if (!moves.length) return -100000 - depth;
  if (depth === 0) return evaluate(b, side);
  let best = -Infinity;
  for (const m of moves) {
    const v = -search(applyMove(b, m), -side, depth - 1, -beta, -alpha);
    if (v > best) best = v;
    if (best > alpha) alpha = best;
    if (alpha >= beta) break;
  }
  return best;
}
function botMove(b, side, depth) {
  const moves = legalMoves(b, side);
  if (!moves.length) return null;
  if (moves.length === 1) return moves[0];
  let best = null, bv = -Infinity;
  for (const m of moves.sort(() => Math.random() - 0.5)) {
    const v = -search(applyMove(b, m), -side, depth - 1, -Infinity, Infinity) + Math.random() * 2;
    if (v > bv) { bv = v; best = m; }
  }
  return best;
}

/* ---------- Server qismi ---------- */
module.exports = function (app, X) {
  const { db, auth, wrap, C, F, add, getS, notify } = X;
  db.exec(`CREATE TABLE IF NOT EXISTS games(
    id INTEGER PRIMARY KEY AUTOINCREMENT, stake INTEGER, w INTEGER, b INTEGER, bot INTEGER DEFAULT 0,
    status TEXT, board TEXT, turn INTEGER DEFAULT 1, cw INTEGER, cb INTEGER, tstart INTEGER,
    noprog INTEGER DEFAULT 0, hist TEXT DEFAULT '[]', result TEXT, reason TEXT, last TEXT,
    bot_at INTEGER DEFAULT 0, created INTEGER, updated INTEGER)`);

  const TOTAL = 6 * 60 * 1000; // har bir o'yinchiga 6 daqiqa
  const now = () => Date.now();
  const mult = () => Number(getS('win_mult')) || 1.8;
  const stakes = () => JSON.parse(getS('stakes')).map(Number);
  const depth = () => Math.min(7, Math.max(1, Math.floor(Number(getS('bot_depth')) || 4)));
  const G = id => db.prepare('SELECT * FROM games WHERE id=?').get(id);
  const myActive = uid => db.prepare("SELECT * FROM games WHERE status IN ('wait','play') AND (w=? OR b=?) ORDER BY id DESC").get(uid, uid);
  const clocks = g => { const t = now() - g.tstart; return { w: g.turn === 1 ? g.cw - t : g.cw, b: g.turn === -1 ? g.cb - t : g.cb }; };
  const nameOf = id => db.prepare('SELECT name FROM users WHERE id=?').get(id)?.name || 'Foydalanuvchi';

  function finish(id, result, reason) {
    const g = G(id);
    if (!g || g.status !== 'play') return;
    db.transaction(() => {
      const r = db.prepare("UPDATE games SET status='done',result=?,reason=?,updated=? WHERE id=? AND status='play'").run(result, reason, now(), id);
      if (!r.changes) return;
      if (result === 'draw') { for (const u of [g.w, g.b]) if (u > 0) add(u, g.stake); }
      else { const win = result === 'w' ? g.w : g.b; if (win > 0) add(win, Math.round(g.stake * mult())); }
    })();
    if (reason === 'timeout') {
      for (const u of [g.w, g.b]) if (u > 0) {
        const won = (result === 'w' ? g.w : g.b) === u;
        notify(u, won ? `🏆 Raqib vaqtida yurmadi. Yutdingiz: +${F(Math.round(g.stake * mult()))} tanga` : '⏱ Vaqt tugadi, o\'yin yutqazildi.');
      }
    }
  }

  function doMove(g, board, m, side, clk) {
    const nb = applyMove(board, m);
    const wasMan = Math.abs(board[m.path[0]]) === 1;
    const noprog = (m.caps.length || wasMan) ? 0 : g.noprog + 1;
    const next = -side;
    const key = nb.map(x => x + 2).join('') + next;
    const hist = JSON.parse(g.hist); hist.push(key);
    const nextIsBot = (next === 1 ? g.w : g.b) === 0;
    db.prepare('UPDATE games SET board=?,turn=?,cw=?,cb=?,tstart=?,noprog=?,hist=?,last=?,bot_at=?,updated=? WHERE id=?')
      .run(JSON.stringify(nb), next,
        Math.max(1, side === 1 ? clk.w : g.cw), Math.max(1, side === -1 ? clk.b : g.cb),
        now(), noprog, JSON.stringify(hist.slice(-200)), JSON.stringify(m.path),
        nextIsBot ? now() + 800 + Math.floor(Math.random() * 1200) : 0, now(), g.id);
    if (!legalMoves(nb, next).length) return finish(g.id, side === 1 ? 'w' : 'b', 'no_moves');
    if (hist.filter(k => k === key).length >= 3) return finish(g.id, 'draw', 'repeat');
    if (noprog >= 60) return finish(g.id, 'draw', 'noprog');
  }

  function botStep(g) {
    const board = JSON.parse(g.board), side = g.turn;
    const m = botMove(board, side, depth());
    if (!m) return finish(g.id, side === 1 ? 'b' : 'w', 'no_moves');
    doMove(g, board, m, side, clocks(g));
  }

  function startBot(g) {
    const humanWhite = Math.random() < 0.5;
    db.prepare("UPDATE games SET w=?,b=?,bot=1,status='play',board=?,turn=1,cw=?,cb=?,tstart=?,bot_at=?,updated=? WHERE id=? AND status='wait'")
      .run(humanWhite ? g.w : 0, humanWhite ? 0 : g.w, JSON.stringify(startBoard()), TOTAL, TOTAL, now(), humanWhite ? 0 : now() + 1200, now(), g.id);
  }

  function view(g, uid) {
    const you = g.w === uid ? 1 : -1;
    const board = g.board ? JSON.parse(g.board) : null;
    const oppId = you === 1 ? g.b : g.w;
    const out = {
      id: g.id, status: g.status, stake: F(g.stake), payout: F(Math.round(g.stake * mult())),
      you, turn: g.turn, result: g.result, reason: g.reason, board,
      last: g.last ? JSON.parse(g.last) : null, bot: !!g.bot,
      me: nameOf(uid), opp: oppId == null ? null : { name: oppId === 0 ? 'Bot' : nameOf(oppId) },
      balance: F(db.prepare('SELECT balance FROM users WHERE id=?').get(uid).balance)
    };
    if (g.status === 'play') {
      const c = clocks(g);
      out.clocks = { w: Math.max(0, c.w), b: Math.max(0, c.b) };
      out.moveMs = now() - g.tstart;
      if (g.turn === you) out.legal = legalMoves(board, you).map(m => m.path);
    }
    return out;
  }

  /* --- API --- */
  app.get('/api/game/active', auth, (req, res) => {
    const g = myActive(req.uid);
    res.json(g ? { id: g.id } : {});
  });

  app.post('/api/game/join', auth, wrap((req, res) => {
    const ex = myActive(req.uid);
    if (ex) return res.json({ id: ex.id });
    const stake = Number(req.body.stake);
    if (!stakes().includes(stake)) return res.status(400).json({ error: 'Tikish noto\'g\'ri' });
    const cost = C(stake);
    const id = db.transaction(() => {
      const r = db.prepare('UPDATE users SET balance=balance-? WHERE id=? AND balance>=?').run(cost, req.uid, cost);
      if (!r.changes) return null;
      const opp = db.prepare("SELECT * FROM games WHERE status='wait' AND stake=? AND w<>? ORDER BY id LIMIT 1").get(cost, req.uid);
      if (opp) {
        const swap = Math.random() < 0.5;
        db.prepare("UPDATE games SET w=?,b=?,status='play',board=?,turn=1,cw=?,cb=?,tstart=?,updated=? WHERE id=? AND status='wait'")
          .run(swap ? req.uid : opp.w, swap ? opp.w : req.uid, JSON.stringify(startBoard()), TOTAL, TOTAL, now(), now(), opp.id);
        return opp.id;
      }
      return Number(db.prepare("INSERT INTO games(stake,w,status,created,updated) VALUES(?,?,'wait',?,?)").run(cost, req.uid, now(), now()).lastInsertRowid);
    })();
    if (id === null) return res.status(400).json({ error: 'Tanga yetmaydi' });
    res.json({ id });
  }));

  app.post('/api/game/cancel', auth, wrap((req, res) => {
    const g = db.prepare("SELECT * FROM games WHERE status='wait' AND w=?").get(req.uid);
    if (g) db.transaction(() => {
      const r = db.prepare("UPDATE games SET status='done',result='cancel',updated=? WHERE id=? AND status='wait'").run(now(), g.id);
      if (r.changes) add(req.uid, g.stake);
    })();
    res.json({ ok: true });
  }));

  app.get('/api/game/:id', auth, wrap((req, res) => {
    let g = G(Number(req.params.id));
    if (!g || (g.w !== req.uid && g.b !== req.uid)) return res.status(404).json({ error: 'O\'yin topilmadi' });
    if (g.status === 'play') {
      const c = clocks(g);
      if (g.turn === 1 && c.w <= 0) { finish(g.id, 'b', 'timeout'); g = G(g.id); }
      else if (g.turn === -1 && c.b <= 0) { finish(g.id, 'w', 'timeout'); g = G(g.id); }
    }
    res.json(view(g, req.uid));
  }));

  app.post('/api/game/:id/move', auth, wrap((req, res) => {
    const g = G(Number(req.params.id));
    if (!g || g.status !== 'play' || (g.w !== req.uid && g.b !== req.uid)) return res.status(400).json({ error: 'O\'yin faol emas' });
    const you = g.w === req.uid ? 1 : -1;
    if (g.turn !== you) return res.status(400).json({ error: 'Navbat sizniki emas' });
    const c = clocks(g);
    if ((you === 1 ? c.w : c.b) <= 0) { finish(g.id, you === 1 ? 'b' : 'w', 'timeout'); return res.status(400).json({ error: 'Vaqt tugadi' }); }
    const board = JSON.parse(g.board);
    const path = (Array.isArray(req.body.path) ? req.body.path : []).map(Number);
    const m = legalMoves(board, you).find(x => x.path.length === path.length && x.path.every((v, i) => v === path[i]));
    if (!m) return res.status(400).json({ error: 'Noto\'g\'ri yurish' });
    doMove(g, board, m, you, c);
    res.json({ ok: true });
  }));

  app.post('/api/game/:id/resign', auth, wrap((req, res) => {
    const g = G(Number(req.params.id));
    if (!g || g.status !== 'play' || (g.w !== req.uid && g.b !== req.uid)) return res.status(400).json({ error: 'O\'yin faol emas' });
    finish(g.id, g.w === req.uid ? 'b' : 'w', 'resign');
    res.json({ ok: true });
  }));

  /* Fon jarayoni: vaqt, bot yurishi, raqib topilmasa bot */
  setInterval(() => {
    try {
      const t = now();
      for (const g of db.prepare("SELECT * FROM games WHERE status='play'").all()) {
        const c = clocks(g);
        if (g.turn === 1 && c.w <= 0) finish(g.id, 'b', 'timeout');
        else if (g.turn === -1 && c.b <= 0) finish(g.id, 'w', 'timeout');
        else if (g.bot_at && t >= g.bot_at && (g.turn === 1 ? g.w : g.b) === 0) botStep(g);
      }
      const botOn = getS('bot_enabled') === '1';
      const waitMs = (Number(getS('bot_wait')) || 8) * 1000;
      for (const g of db.prepare("SELECT * FROM games WHERE status='wait'").all()) {
        if (botOn && t - g.created >= waitMs) startBot(g);
        else if (!botOn && t - g.created >= 180000) {
          db.transaction(() => {
            const r = db.prepare("UPDATE games SET status='done',result='cancel',updated=? WHERE id=? AND status='wait'").run(t, g.id);
            if (r.changes) add(g.w, g.stake);
          })();
        }
      }
    } catch (e) { console.error('games loop:', e); }
  }, 700);
};
