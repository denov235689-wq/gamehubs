<!doctype html>
<html lang="uz">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Shashka</title>
<script src="https://telegram.org/js/telegram-web-app.js"></script>
<style>
:root{--gold:#ffd86b;--ink:#1d3b2c;--muted:#52705e;--amber:#c97a06;--mint:#7fd8a6;--green:#2f9e5a}
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body{margin:0;background:#c6efd2;color:var(--ink);font-family:system-ui,-apple-system,"Segoe UI",sans-serif}
.bg{position:fixed;inset:0;width:100%;height:100%;z-index:0}
#app{position:relative;z-index:1;max-width:520px;margin:0 auto;min-height:100dvh}
.ic{width:56px;height:56px;display:block}.ic.sm{width:30px;height:30px}
.coin{width:44px;height:44px;flex:none}.coin.xs{width:22px;height:22px}
button{font-family:inherit}
button:focus-visible,input:focus-visible{outline:3px solid #ff9f1c;outline-offset:2px}

/* Yog'och (asal rangi) */
.wood{background:repeating-linear-gradient(95deg,rgba(255,255,255,.10) 0 3px,transparent 3px 9px),linear-gradient(#f4cb85,#dc9d4c 55%,#bd7c36);
  border:3px solid #7c4b1a;border-radius:16px;color:#fff;text-shadow:0 2px 0 #7c4b1a99;
  box-shadow:inset 0 2px 0 #fff9,inset 0 -3px 0 #0002,0 4px 0 #8a5522,0 9px 14px #0003;cursor:pointer}
.wood:active{transform:translateY(3px);box-shadow:inset 0 2px 0 #fff9,inset 0 -3px 0 #0002,0 1px 0 #8a5522,0 3px 6px #0003}

/* Bosh sahifa */
.home{min-height:100dvh;display:flex;flex-direction:column;padding:calc(env(safe-area-inset-top) + 14px) 14px calc(env(safe-area-inset-bottom) + 18px)}
.top{display:flex;justify-content:space-between;align-items:flex-start;gap:8px}
.who{display:flex;flex-direction:column;align-items:center;gap:2px;min-width:96px}
.ava{width:72px;height:72px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#d6ffc2,#43b86a);border:5px solid #fff;
  display:grid;place-items:center;font:700 34px Georgia,serif;color:#fff;text-shadow:0 2px 3px #0005;box-shadow:0 0 0 3px var(--gold),0 6px 12px #0003}
.nm{font:700 17px Georgia,serif;color:#fff;text-shadow:0 2px 4px #0008;max-width:110px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.lv{font-size:12px;color:#fff;text-shadow:0 1px 3px #0009}
.balbox{display:flex;flex-direction:column;align-items:flex-end;gap:10px}
.bal{display:flex;align-items:center;gap:8px;font:700 46px/1 Georgia,serif;color:#fffbe8;text-shadow:0 3px 0 #c97a06,0 6px 10px #0004}
.dep{display:flex;align-items:center;gap:8px;padding:10px 16px;min-height:54px;font:800 19px Georgia,serif;letter-spacing:1px}
.mid{flex:1;display:flex;justify-content:space-between;align-items:center;gap:8px;padding:12px 0}
.col{display:flex;flex-direction:column;gap:18px}
.mi{background:none;border:0;display:flex;flex-direction:column;align-items:center;gap:7px;width:100px;color:#fff;font:700 15px Georgia,serif;text-shadow:0 2px 4px #000a;cursor:pointer}
.plaque{width:92px;height:92px;display:grid;place-items:center}
.games{display:flex;justify-content:center;gap:10px;margin-bottom:16px}
.g{display:flex;flex-direction:column;align-items:center;gap:4px;font:700 12px Georgia,serif;text-shadow:0 2px 4px #000a;color:#fff;width:62px;cursor:pointer}
.gi{width:62px;height:62px;border-radius:14px;background:#ffffff55;border:3px solid #ffffffaa;display:grid;place-items:center;font-size:30px;position:relative;box-shadow:0 4px 8px #0002}
.g.on .gi{background:#fff;border-color:#ffc83d;box-shadow:0 0 0 3px #ff9f1c,0 0 16px #ffd86bcc}
.g.off .gi{opacity:.7}
.g.off .gi::after{content:"🔒";position:absolute;right:-6px;bottom:-6px;font-size:16px}
.g .ic{width:42px;height:42px}
.playwrap{position:relative;display:flex;justify-content:center}
.play{width:min(88%,340px);height:100px;font:800 44px Georgia,serif;letter-spacing:6px;color:#fff;
  text-shadow:0 3px 0 #8a5522,0 -1px 0 #0003,0 6px 10px #0003}
.leaf{position:absolute;width:56px;height:56px;pointer-events:none}
.leaf.l{left:calc(50% - min(44%,170px) - 14px);top:-22px;transform:rotate(-25deg)}
.leaf.r{right:calc(50% - min(44%,170px) - 14px);top:-22px;transform:scaleX(-1) rotate(-25deg)}
.hint{text-align:center;font-size:13px;margin:12px 0 0;color:#fff;text-shadow:0 1px 4px #000b}
@media (max-height:780px){.plaque{width:78px;height:78px}.plaque .ic{width:46px;height:46px}.col{gap:10px}.mi{width:88px;font-size:14px}.play{height:86px;font-size:38px}}

/* Ichki sahifalar */
.sub{padding:calc(env(safe-area-inset-top) + 14px) 14px 30px;min-height:100dvh;background:linear-gradient(#f2fff7b3,#d8f5e3e6);color:var(--ink)}
.head{display:flex;align-items:center;gap:12px;margin-bottom:16px}
.back{width:56px;height:56px;font-size:28px;font-weight:700;display:grid;place-items:center;padding:0;flex:none}
.head h2{margin:0;flex:1;font:700 28px Georgia,serif;color:var(--ink);text-shadow:0 1px 0 #fff}
.chip-bal{display:flex;align-items:center;gap:6px;font:700 22px Georgia,serif;background:#fff;border:2px solid var(--mint);border-radius:30px;padding:6px 12px 6px 14px;box-shadow:0 3px 8px #1d3b2c1f}
.card{background:#ffffffeb;border:2px solid #fff;border-radius:18px;padding:16px;margin-bottom:12px;box-shadow:0 6px 16px #1d3b2c26}
.row{display:flex;align-items:center;justify-content:space-between;gap:12px}
.row .grow{flex:1;min-width:0}
.t{font:700 18px Georgia,serif;color:var(--ink)}
.muted{font-size:14px;color:var(--muted)}
.btn{min-height:50px;padding:12px 18px;border:0;border-radius:14px;font:800 17px Georgia,serif;color:#4a2b00;cursor:pointer;
  background:linear-gradient(#ffe685,#ffb62e);box-shadow:inset 0 2px 0 #fffa,0 4px 0 #c77a0a,0 8px 10px #0002;white-space:nowrap}
.btn:active{transform:translateY(3px);box-shadow:inset 0 2px 0 #fffa,0 1px 0 #c77a0a}
.btn.ghost{background:#fff;color:#1f7a4a;border:2px solid #38b26e;box-shadow:none}
.btn.full{width:100%}
.btn[disabled]{opacity:.45;filter:grayscale(.5)}
input{width:100%;min-height:54px;background:#fff;border:2px solid var(--mint);color:var(--ink);border-radius:14px;padding:12px 14px;font-size:17px;margin:10px 0}
input::placeholder{color:#8aa597}
.chips{display:flex;gap:10px;flex-wrap:wrap;margin:8px 0 6px}
.chipb{display:inline-flex;align-items:center;gap:6px;min-height:48px;padding:0 18px;background:#fff;border:2px solid var(--mint);color:var(--ink);border-radius:30px;font:700 17px Georgia,serif;cursor:pointer}
.chipb.sel{background:linear-gradient(#ffe685,#ffb62e);border-color:#c77a0a;color:#4a2b00}
.chipb[disabled]{opacity:.4}
.pgrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.pc{text-align:center;display:flex;flex-direction:column;align-items:center;gap:8px;padding:16px 10px}
.pc .ic{width:76px;height:76px}
.price,.amt{display:flex;align-items:center;gap:6px;font:700 20px Georgia,serif;color:var(--amber)}
.rank{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;font:700 18px Georgia,serif;background:#eafaf0;border:2px solid var(--mint);flex:none}
.rank.r1{background:linear-gradient(#ffe685,#ffb62e);border-color:#c77a0a;color:#4a2b00}
.gate{padding:calc(env(safe-area-inset-top) + 30px) 16px;text-align:center;min-height:100dvh;background:linear-gradient(#f2fffac0,#d8f5e3e6);color:var(--ink)}
.gate h2{font:700 28px Georgia,serif}
.done{color:#1f9a52;font-weight:700}

/* O'yin */
.gm{padding:calc(env(safe-area-inset-top) + 10px) 12px 20px;min-height:100dvh;background:linear-gradient(#f2fffa,#cdeedd);color:var(--ink)}
.pbox{display:flex;flex-direction:column;gap:10px}
.ban{display:flex;justify-content:center;align-items:center;gap:6px;font:800 21px Georgia,serif;color:var(--amber);text-shadow:0 1px 0 #fff}
.pbar{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:18px;background:#fff;border:2px solid #d3efe0;box-shadow:0 4px 10px #1d3b2c1a}
.pbar.mine{border-color:#38b26e}
.pa{width:54px;height:54px;border-radius:13px;background:linear-gradient(#a6efb8,#3fb765);display:grid;place-items:center;font:700 26px Georgia,serif;color:#fff;text-shadow:0 2px 3px #0004;flex:none}
.pa.opp{background:linear-gradient(#a9dcff,#4a90e2)}
.pbar .grow{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.pbar .t{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.clk{font:800 28px Georgia,serif;background:#f1fbf5;border:2px solid #d3efe0;border-radius:14px;padding:6px 14px;min-width:96px;text-align:center}
.clk.low{color:#e0412f;background:#fff1ee;border-color:#ffc2b8}
.board{width:100%;max-width:430px;margin:0 auto;aspect-ratio:1;display:grid;grid-template-columns:repeat(8,1fr);
  border:12px solid #d79a4a;border-radius:16px;background:#d79a4a;box-shadow:0 0 0 2px #8a5522,0 10px 22px #1d3b2c40,inset 0 0 10px #8a552266}
.cell{position:relative;display:grid;place-items:center}
.cell.lt{background:#f8fbe8}.cell.dk{background:#6fc99d}
.cell.last{box-shadow:inset 0 0 0 100px #ffd84d77}
.cell.can{cursor:pointer;box-shadow:inset 0 0 0 3px #ff9f1c}
.cell.sel{box-shadow:inset 0 0 0 4px #2f9e5a}
.cell.tgt{cursor:pointer}
.cell.tgt::after{content:"";width:34%;height:34%;border-radius:50%;background:#ff9f1ccc;box-shadow:0 0 0 3px #fff9}
.cell.cap{cursor:pointer;box-shadow:inset 0 0 0 4px #ff5a4acc}
.pc2{width:78%;height:78%;border-radius:50%;position:relative}
.pc2::before{content:"";position:absolute;inset:17%;border-radius:50%;border:2px solid #ffffffaa}
.pc2.w{background:radial-gradient(circle at 35% 30%,#fff,#fff3cf 55%,#efd78f);box-shadow:0 3px 0 #c9a54a,0 5px 6px #0003}
.pc2.b{background:radial-gradient(circle at 35% 30%,#ffb0a2,#f4513f 55%,#cb2f2f);box-shadow:0 3px 0 #8f1d1d,0 5px 6px #0003}
.pc2.k::after{content:"♛";position:absolute;inset:0;display:grid;place-items:center;font-size:clamp(14px,5vw,26px);text-shadow:0 1px 1px #0004}
.pc2.w.k::after{color:#d98a00}.pc2.b.k::after{color:#fff3c4}
.cp{font-size:clamp(24px,9vw,44px);line-height:1;user-select:none}
.cp.w{color:#fff;text-shadow:0 0 2px #1d3b2c,0 0 3px #1d3b2c,0 2px 3px #0005}
.cp.b{color:#2447c9;text-shadow:0 0 1px #fff,0 2px 3px #0004}
.turn{align-self:center;padding:9px 20px;border-radius:30px;font:700 17px Georgia,serif;background:#eafff2;border:2px solid #38b26e;color:#1f7a4a}
.turn.opp{background:#fff;border-color:#d3efe0;color:var(--muted)}
.res{align-self:center;min-height:52px;padding:0 26px;font:700 18px Georgia,serif}
.ov{position:fixed;inset:0;z-index:5;background:#0a2a1a88;display:grid;place-items:center;padding:20px}
.ov[hidden]{display:none}
.ovc{width:100%;max-width:360px;text-align:center}
.ovt{font:800 30px Georgia,serif;margin-bottom:6px;color:var(--ink)}
.wt{text-align:center;margin-top:40px}
.spin{width:54px;height:54px;border-radius:50%;border:6px solid #d3efe0;border-top-color:#ff9f1c;margin:14px auto;animation:sp 1s linear infinite}
@keyframes sp{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}
</style>
</head>
<body>

<!-- Rasmlar (o'zimiz chizgan) -->
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
<defs>
<linearGradient id="gGold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffeaa5"/><stop offset="1" stop-color="#d89b1d"/></linearGradient>
<linearGradient id="gPaper" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff7e0"/><stop offset="1" stop-color="#ead9ac"/></linearGradient>
<linearGradient id="gGreen" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8ed27a"/><stop offset="1" stop-color="#3d9a4a"/></linearGradient>
<linearGradient id="gBlue" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7cc4ff"/><stop offset="1" stop-color="#2b6fd0"/></linearGradient>
<linearGradient id="gPurple" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6a8ff"/><stop offset="1" stop-color="#7a3fd0"/></linearGradient>
<linearGradient id="gLeaf" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9ee07a"/><stop offset="1" stop-color="#2f8a3c"/></linearGradient>
</defs>
<symbol id="coin" viewBox="0 0 64 64"><circle cx="32" cy="32" r="29" fill="url(#gGold)" stroke="#a8741a" stroke-width="4"/><circle cx="32" cy="32" r="21" fill="none" stroke="#b9831f" stroke-width="2.5"/><text x="32" y="42" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="28" fill="#9a6410">G</text></symbol>
<symbol id="dep" viewBox="0 0 64 64"><use href="#coin" width="64" height="64"/><path d="M34 30h12v-10h10v10h12L51 50z" transform="translate(-12 6) scale(.9)" fill="#5bd16a" stroke="#1f6a2c" stroke-width="3" stroke-linejoin="round"/></symbol>
<symbol id="tasks" viewBox="0 0 64 64"><rect x="12" y="8" width="40" height="50" rx="5" fill="#8a5a2e" stroke="#3f2610" stroke-width="3"/><rect x="17" y="15" width="30" height="38" rx="2" fill="url(#gPaper)"/><rect x="24" y="4" width="16" height="9" rx="3" fill="#d4a361" stroke="#3f2610" stroke-width="2.5"/><path d="M21 27l3 3 6-6M21 40l3 3 6-6" stroke="#3b8b3b" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M34 28h10M34 41h10" stroke="#6b5a40" stroke-width="3" stroke-linecap="round"/></symbol>
<symbol id="trophy" viewBox="0 0 64 64"><path d="M18 8h28v16c0 9-6 15-14 15s-14-6-14-15z" fill="url(#gGold)" stroke="#8a5a14" stroke-width="3"/><path d="M18 14H8c0 10 4 14 11 15M46 14h10c0 10-4 14-11 15" fill="none" stroke="#c18b1c" stroke-width="3.5"/><rect x="28" y="38" width="8" height="10" fill="#c18b1c"/><rect x="18" y="48" width="28" height="9" rx="2" fill="#8a5a2e" stroke="#3f2610" stroke-width="2.5"/></symbol>
<symbol id="friends" viewBox="0 0 64 64"><circle cx="22" cy="22" r="9" fill="#f1c9a0" stroke="#3f2610" stroke-width="2.5"/><path d="M5 56c0-13 7-20 17-20s17 7 17 20z" fill="#4c8c5a" stroke="#3f2610" stroke-width="2.5"/><circle cx="44" cy="25" r="8" fill="#e7b98c" stroke="#3f2610" stroke-width="2.5"/><path d="M30 57c0-11 6-17 14-17s15 6 15 17z" fill="#d07a3c" stroke="#3f2610" stroke-width="2.5"/></symbol>
<symbol id="cash" viewBox="0 0 64 64"><rect x="5" y="15" width="54" height="34" rx="5" fill="url(#gGreen)" stroke="#1f4d27" stroke-width="3"/><circle cx="32" cy="32" r="10" fill="#e3f6cc" stroke="#1f4d27" stroke-width="2.5"/><text x="32" y="38" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="16" fill="#2a6a35">$</text><circle cx="13" cy="32" r="3" fill="#1f4d27"/><circle cx="51" cy="32" r="3" fill="#1f4d27"/></symbol>
<symbol id="board" viewBox="0 0 64 64"><rect x="4" y="4" width="56" height="56" rx="9" fill="#f5e6c6" stroke="#3f2610" stroke-width="3"/><rect x="32" y="4" width="28" height="28" fill="#7a4a22"/><rect x="4" y="32" width="28" height="28" fill="#7a4a22"/><circle cx="18" cy="18" r="10" fill="#fff" stroke="#9a9a9a" stroke-width="2.5"/><circle cx="46" cy="46" r="10" fill="#262626" stroke="#000" stroke-width="2.5"/></symbol>
<symbol id="star" viewBox="0 0 64 64"><polygon points="32,5 40,24 60,25 44,38 50,58 32,46 14,58 20,38 4,25 24,24" fill="url(#gGold)" stroke="#a8741a" stroke-width="3.5" stroke-linejoin="round"/></symbol>
<symbol id="uc" viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" fill="url(#gBlue)" stroke="#1d3f73" stroke-width="4"/><text x="32" y="40" text-anchor="middle" font-family="Georgia,serif" font-weight="800" font-size="24" fill="#fff" stroke="#1d3f73" stroke-width=".8">UC</text></symbol>
<symbol id="gem" viewBox="0 0 64 64"><polygon points="32,6 56,24 32,58 8,24" fill="url(#gPurple)" stroke="#4a1f90" stroke-width="3.5" stroke-linejoin="round"/><path d="M8 24h48M22 24l10-18 10 18-10 34z" fill="none" stroke="#4a1f90" stroke-width="2" opacity=".7"/></symbol>
<symbol id="gift" viewBox="0 0 64 64"><rect x="8" y="26" width="48" height="30" rx="4" fill="#d9503f" stroke="#5a1a12" stroke-width="3"/><rect x="5" y="18" width="54" height="12" rx="3" fill="#ef6a55" stroke="#5a1a12" stroke-width="3"/><rect x="28" y="18" width="8" height="38" fill="#ffd96a" stroke="#5a1a12" stroke-width="2"/><path d="M32 18c-10-12-20-2-8 0zM32 18c10-12 20-2 8 0z" fill="#ffd96a" stroke="#5a1a12" stroke-width="2.5"/></symbol>
<symbol id="gear" viewBox="0 0 64 64"><circle cx="32" cy="32" r="18" fill="none" stroke="#e9e9e9" stroke-width="10" stroke-dasharray="7 5.6"/><circle cx="32" cy="32" r="14" fill="#cfcfcf" stroke="#555" stroke-width="3"/><circle cx="32" cy="32" r="6" fill="#444"/></symbol>
<symbol id="leaf" viewBox="0 0 64 64"><path d="M6 58C6 26 26 6 58 6c0 32-20 52-52 52z" fill="url(#gLeaf)" stroke="#1f5a2a" stroke-width="3"/><path d="M10 54L46 18" stroke="#1f5a2a" stroke-width="3" fill="none"/></symbol>
</svg>

<!-- Yorug' o'rmon foni -->
<svg class="bg" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
<defs>
<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b9e6ff"/><stop offset=".33" stop-color="#e6f8d6"/><stop offset=".68" stop-color="#9fe49b"/><stop offset="1" stop-color="#4cc46a"/></linearGradient>
<linearGradient id="beam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff" stop-opacity=".85"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></linearGradient>
<filter id="blur"><feGaussianBlur stdDeviation="6"/></filter>
</defs>
<rect width="400" height="800" fill="url(#sky)"/>
<circle cx="318" cy="96" r="44" fill="#fff4b0"/><circle cx="318" cy="96" r="62" fill="#fff4b0" opacity=".35"/>
<polygon points="140,0 250,0 345,560 55,560" fill="url(#beam)" opacity=".7"/>
<g fill="#fff" opacity=".9"><ellipse cx="90" cy="84" rx="48" ry="16"/><ellipse cx="122" cy="72" rx="32" ry="16"/><ellipse cx="230" cy="130" rx="40" ry="13"/><ellipse cx="256" cy="120" rx="26" ry="12"/></g>
<g filter="url(#blur)" opacity=".7" fill="#6fd28a"><ellipse cx="120" cy="260" rx="70" ry="110"/><ellipse cx="290" cy="240" rx="75" ry="120"/><ellipse cx="200" cy="340" rx="90" ry="90"/><ellipse cx="60" cy="410" rx="60" ry="100"/><ellipse cx="350" cy="430" rx="60" ry="100"/></g>
<path d="M-20 0h70c14 140 6 300 24 420 8 120 0 260-10 380H-20z" fill="#cf9a5f"/>
<path d="M-20 0h30c10 160 2 320 14 440 6 120 0 250-6 360H-20z" fill="#e2b57c" opacity=".7"/>
<path d="M420 0h-80c-12 150-4 280-24 400-10 130-4 260 6 400h98z" fill="#cf9a5f"/>
<path d="M420 0h-34c-8 160-2 300-16 420-8 120-2 250 2 380h48z" fill="#b8844c" opacity=".5"/>
<g fill="#44c46e"><ellipse cx="20" cy="60" rx="110" ry="85"/><ellipse cx="70" cy="190" rx="70" ry="60"/><ellipse cx="380" cy="50" rx="110" ry="90"/><ellipse cx="335" cy="190" rx="70" ry="60"/></g>
<g fill="#86e58c" opacity=".85"><ellipse cx="40" cy="30" rx="70" ry="45"/><ellipse cx="365" cy="20" rx="70" ry="45"/><ellipse cx="90" cy="170" rx="34" ry="24"/><ellipse cx="320" cy="175" rx="34" ry="24"/></g>
<path d="M0 640c80-30 140-20 200-8s140 20 200-10v178H0z" fill="#63d672"/>
<path d="M0 710c90-24 170-10 220 0s130 14 180-6v96H0z" fill="#3fbe5f"/>
<path d="M130 800c20-60 50-110 70-150 20 40 50 90 70 150z" fill="#f6e3a8" opacity=".85"/>
<g fill="#f3f1e6"><ellipse cx="60" cy="690" rx="38" ry="22"/><ellipse cx="350" cy="700" rx="42" ry="24"/></g>
<g><circle cx="120" cy="676" r="5" fill="#ff8fb3"/><circle cx="140" cy="690" r="4" fill="#ffd84d"/><circle cx="270" cy="684" r="5" fill="#ff8fb3"/><circle cx="296" cy="700" r="4" fill="#fff"/><circle cx="40" cy="740" r="5" fill="#ffd84d"/><circle cx="360" cy="748" r="5" fill="#ff8fb3"/><circle cx="210" cy="760" r="4" fill="#ffd84d"/></g>
</svg>

<div id="app"></div>

<script>
const tg = window.Telegram.WebApp; tg.ready(); tg.expand();
const root = document.getElementById('app');
let me = null;
const NS = 'http://www.w3.org/2000/svg';

function h(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k === 'class') e.className = v;
    else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
    else e.setAttribute(k, v);
  }
  for (const c of kids.flat(3)) if (c !== false && c != null) e.append(c.nodeType ? c : document.createTextNode(c));
  return e;
}
function svg(name, cls = 'ic') {
  const s = document.createElementNS(NS, 'svg'); s.setAttribute('class', cls); s.setAttribute('aria-hidden', 'true');
  const u = document.createElementNS(NS, 'use'); u.setAttribute('href', '#' + name); s.append(u); return s;
}
async function api(path, body, method) {
  const r = await fetch('/api' + path, {
    method: method || (body ? 'POST' : 'GET'),
    headers: { 'Content-Type': 'application/json', 'x-init': tg.initData },
    body: body ? JSON.stringify(body) : undefined
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(j.error || 'Xatolik');
  return j;
}
const fmt = n => String(Number(Number(n).toFixed(2)));
const alertMsg = m => tg.showAlert(m);
const safe = fn => (...a) => Promise.resolve(fn(...a)).catch(e => alertMsg(e.message));
const show = (...n) => { root.replaceChildren(...n.flat(3).filter(x => x !== false && x != null)); window.scrollTo(0, 0); };
const sub = (title, ...content) => h('div', { class: 'sub' },
  h('div', { class: 'head' },
    h('button', { class: 'wood back', 'aria-label': 'Orqaga', onclick: home }, '←'),
    h('h2', {}, title),
    h('div', { class: 'chip-bal' }, fmt(me.balance), svg('coin', 'coin xs'))),
  content);

async function load() {
  try { me = await api('/me'); }
  catch (e) { return show(h('div', { class: 'gate' }, h('h2', {}, 'Ilovani Telegram ichidan oching'), h('p', { class: 'muted' }, e.message))); }
  if (me.missing.length) return gate();
  try { const a = await api('/game/active'); if (a.id) return gameScreen(a.id); } catch (e) { /* o'tkazib yuboramiz */ }
  home();
}

/* Majburiy kanallar */
function gate() {
  show(h('div', { class: 'gate' },
    h('h2', {}, 'Davom etish uchun kanallarga obuna bo\'ling'),
    me.missing.map(c => h('div', { class: 'card row' }, h('b', { class: 't grow' }, c.title),
      h('button', { class: 'btn', onclick: () => tg.openTelegramLink(c.link) }, 'Obuna bo\'lish'))),
    h('button', { class: 'btn full', style: 'margin-top:8px', onclick: load }, 'Tekshirish')));
}

/* Bosh sahifa */
const mi = (icon, text, fn) => h('button', { class: 'mi', onclick: safe(fn) }, h('span', { class: 'wood plaque' }, svg(icon)), text);
let curGame = 'shashka';
const game = (key, emoji, text, locked) => h('div', {
  class: 'g ' + (locked ? 'off' : curGame === key ? 'on' : ''), role: 'button', tabindex: 0,
  onclick: () => { if (locked) return alertMsg('Tez orada qo\'shiladi'); curGame = key; home(); }
}, h('div', { class: 'gi' }, key === 'shashka' ? svg('board', 'ic') : emoji), text);

function home() {
  stopPoll();
  show(h('div', { class: 'home' },
    h('div', { class: 'top' },
      h('div', { class: 'who' }, h('div', { class: 'ava' }, (me.name[0] || '?').toUpperCase()), h('b', { class: 'nm' }, me.name), h('span', { class: 'lv' }, 'Lvl 1 · Yangi')),
      h('div', { class: 'balbox' },
        h('div', { class: 'bal' }, fmt(me.balance), svg('coin', 'coin')),
        h('button', { class: 'wood dep', onclick: deposit }, svg('dep', 'ic sm'), 'DEPOZIT'))),
    h('div', { class: 'mid' },
      h('div', { class: 'col' }, mi('tasks', 'Vazifalar', tasks), mi('trophy', 'Reyting', leaderboard),
        me.isAdmin && mi('gear', 'Admin', () => { location.href = '/admin.html'; })),
      h('div', { class: 'col' }, mi('friends', 'Do\'st bilan', invite), mi('gift', 'Promokod', promoScreen), mi('cash', 'Pul yechish', withdraw))),
    h('div', { class: 'games' }, game('shashka', '', 'Shashka', false), game('chess', '♞\uFE0E', 'Shaxmat', false), game('', '🎱', 'Bilyard', true), game('', '🃏', 'Durak', true)),
    h('div', { class: 'playwrap' },
      svg('leaf', 'leaf l'), svg('leaf', 'leaf r'),
      h('button', { class: 'wood play', onclick: stakeScreen }, 'PLAY')),
    h('p', { class: 'hint' }, 'Do\'st taklif qiling: +' + fmt(me.refBonus) + ' tanga, uning depozitidan ' + me.refPercent + '%'),
    h('p', { class: 'hint', style: 'opacity:.55;margin-top:4px' }, 'v4 · promokod + yangi dizayn')));
}

/* Vazifalar */
async function tasks() {
  show(sub('Vazifalar', h('p', { class: 'muted' }, 'Yuklanmoqda…')));
  const list = await api('/tasks');
  show(sub('Vazifalar',
    list.length ? list.map(t => h('div', { class: 'card' },
      h('div', { class: 'row', style: 'margin-bottom:12px' },
        h('div', { class: 'grow' }, h('div', { class: 't' }, t.title), h('div', { class: 'muted' }, t.daily ? 'Har kuni' : 'Bir marta')),
        h('div', { class: 'amt' }, '+' + fmt(t.reward), svg('coin', 'coin xs'))),
      t.done ? h('div', { class: 'done' }, 'Bajarildi ✓') :
        h('div', { class: 'row' },
          h('button', { class: 'btn ghost grow', onclick: () => tg.openTelegramLink(t.link) }, 'Obuna bo\'lish'),
          h('button', { class: 'btn grow', onclick: async ev => {
            ev.target.disabled = true;
            try { const r = await api('/tasks/claim', { id: t.id }); me.balance += r.reward; tasks(); }
            catch (e) { alertMsg(e.message); ev.target.disabled = false; }
          } }, 'Olish')))) : h('p', { class: 'muted' }, 'Hozircha vazifa yo\'q')));
}

/* Reyting */
async function leaderboard() {
  show(sub('Reyting', h('p', { class: 'muted' }, 'Yuklanmoqda…')));
  const l = await api('/top');
  show(sub('Reyting', l.map((u, i) => h('div', { class: 'card row' },
    h('div', { class: 'rank' + (i === 0 ? ' r1' : '') }, String(i + 1)),
    h('b', { class: 't grow' }, u.name),
    h('div', { class: 'amt' }, fmt(u.balance), svg('coin', 'coin xs'))))));
}

/* Do'st taklif */
function invite() {
  show(sub('Do\'st bilan', h('div', { class: 'card' },
    h('div', { style: 'text-align:center' }, svg('friends', 'ic'), ),
    h('p', { class: 't', style: 'text-align:center' }, 'Do\'stingizni taklif qiling'),
    h('p', { class: 'muted' }, 'Har bir do\'st uchun +' + fmt(me.refBonus) + ' tanga. Do\'stingiz hisob to\'ldirsa, ' + me.refPercent + '% sizga qaytadi.'),
    h('input', { readonly: '', value: me.refLink }),
    h('button', { class: 'btn full', onclick: () =>
      tg.openTelegramLink('https://t.me/share/url?url=' + encodeURIComponent(me.refLink) + '&text=' + encodeURIComponent('Shashka o\'ynab tanga yig\'ing!')) }, 'Do\'stlarga yuborish'))));
}

/* Depozit (Telegram Stars) */
function deposit() {
  let pct = 0;
  const inp = h('input', { type: 'number', inputmode: 'numeric', min: me.minStars, value: Math.max(me.minStars, 50) });
  const code = h('input', { placeholder: 'Promokod (ixtiyoriy)', maxlength: 20, autocapitalize: 'characters', style: 'margin-bottom:6px' });
  const info = h('p', { class: 'muted' }), pinfo = h('p', { class: 'muted', style: 'margin-top:0' });
  const upd = () => {
    const base = (Number(inp.value) || 0) * me.rate;
    info.textContent = '≈ ' + fmt(base + base * pct / 100) + ' tanga' + (pct ? ' (shundan ' + fmt(base * pct / 100) + ' bonus)' : '') + ' · 1 ⭐ = ' + fmt(me.rate) + ' tanga';
  };
  inp.addEventListener('input', upd);
  code.addEventListener('input', () => { pct = 0; pinfo.textContent = ''; upd(); });
  const check = h('button', { class: 'btn ghost full', onclick: async () => {
    if (!code.value.trim()) return;
    try {
      const r = await api('/promo/check', { code: code.value });
      if (r.kind === 'percent') { pct = r.value; pinfo.textContent = '✅ +' + fmt(r.value) + '% bonus qo\'shiladi'; }
      else { pct = 0; pinfo.textContent = 'Bu kod depozit uchun emas. Bosh sahifadagi "Promokod" bo\'limida faollashtiring.'; }
    } catch (e) { pct = 0; pinfo.textContent = '❌ ' + e.message; }
    upd();
  } }, 'Promokodni tekshirish');
  upd();
  const btn = h('button', { class: 'btn full', style: 'margin-top:12px', onclick: async () => {
    btn.disabled = true;
    try {
      const { link } = await api('/deposit', { stars: Number(inp.value), promo: code.value.trim() });
      tg.openInvoice(link, status => {
        if (status === 'paid') {
          alertMsg('To\'lov qabul qilindi!');
          setTimeout(async () => { me = await api('/me'); home(); }, 2000);
        }
        btn.disabled = false;
      });
    } catch (e) { alertMsg(e.message); btn.disabled = false; }
  } }, 'Stars bilan to\'lash');
  show(sub('Depozit', h('div', { class: 'card' },
    h('div', { style: 'text-align:center' }, svg('star', 'ic')),
    h('p', { class: 't', style: 'text-align:center' }, 'Telegram Stars miqdori'),
    h('div', { class: 'chips' }, [10, 50, 100, 500].map(n => h('button', { class: 'chipb', onclick: () => { inp.value = n; upd(); } }, n + ' ⭐'))),
    inp, info,
    h('p', { class: 't', style: 'margin:14px 0 0' }, 'Promokod'),
    code, pinfo, check, btn)));
}

/* Promokod */
function promoScreen() {
  const inp = h('input', { placeholder: 'Promokodni kiriting', maxlength: 20, autocapitalize: 'characters' });
  const btn = h('button', { class: 'btn full', onclick: async () => {
    if (!inp.value.trim()) return;
    btn.disabled = true;
    try {
      const r = await api('/promo/redeem', { code: inp.value });
      me.balance += r.coins; alertMsg('Tabriklaymiz! +' + fmt(r.coins) + ' tanga'); promoScreen();
    } catch (e) { alertMsg(e.message); btn.disabled = false; }
  } }, 'Faollashtirish');
  show(sub('Promokod', h('div', { class: 'card' },
    h('div', { style: 'text-align:center' }, svg('gift', 'ic')),
    h('p', { class: 't', style: 'text-align:center' }, 'Promokod bormi?'),
    h('p', { class: 'muted', style: 'text-align:center' }, 'Tanga sovg\'a qiladigan kodni shu yerda kiriting. Depozitga bonus beradigan kodlar esa Depozit bo\'limida kiritiladi.'),
    inp, btn)));
}

/* Pul yechish */
const prizeIcon = id => id.startsWith('uc') ? 'uc' : id.startsWith('stars') ? 'star' : id.startsWith('premium') ? 'gem' : 'gift';
function withdraw() {
  const who = h('input', { placeholder: 'PUBG ID yoki @username', maxlength: 100 });
  show(sub('Pul yechish',
    h('div', { class: 'card' }, h('p', { class: 'muted', style: 'margin:0' }, 'Sovg\'a qayerga yuborilishini yozing:'), who),
    h('div', { class: 'pgrid' }, me.prizes.map(p => h('div', { class: 'card pc' },
      svg(prizeIcon(p.id), 'ic'),
      h('div', { class: 't' }, p.title),
      h('div', { class: 'price' }, fmt(p.coins), svg('coin', 'coin xs')),
      h('button', { class: 'btn full', disabled: me.balance < p.coins ? '' : null, onclick: async ev => {
        if (!who.value.trim()) return alertMsg('PUBG ID yoki @username yozing');
        ev.target.disabled = true;
        try {
          await api('/withdraw', { prize: p.id, info: who.value });
          me.balance -= p.coins; alertMsg('So\'rov yuborildi. Admin tez orada bajaradi.'); home();
        } catch (e) { alertMsg(e.message); ev.target.disabled = false; }
      } }, 'Yechish'))))));
}

/* ---------- Shashka o'yini ---------- */
let poll = null, tick = null;
function stopPoll() { clearInterval(poll); clearInterval(tick); poll = tick = null; }
const mmss = ms => { const s = Math.max(0, Math.ceil(ms / 1000)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };

const KIND = { shashka: 'Shashka', chess: 'Shaxmat' };
const GLYPH = { k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' };

function stakeScreen() {
  stopPoll();
  let sel = null, vs = 'human', chips = [], vsBtns = [];
  const btn = h('button', { class: 'btn full', disabled: '', onclick: async () => {
    btn.disabled = true;
    try { const r = await api('/game/join', { stake: sel, kind: curGame, vs }); gameScreen(r.id); }
    catch (e) { alertMsg(e.message); btn.disabled = false; }
  } }, 'Boshlash');
  chips = me.stakes.map(s => {
    const b = h('button', { class: 'chipb', disabled: me.balance < s ? '' : null, onclick: () => {
      sel = s; chips.forEach(x => x.classList.remove('sel')); b.classList.add('sel'); btn.disabled = false;
    } }, fmt(s), svg('coin', 'coin xs'));
    return b;
  });
  const opts = [['human', '👥 Odam bilan'], ['bot', '🤖 Bot bilan']].filter(([k]) => k === 'human' || me.botEnabled);
  vsBtns = opts.map(([k, t]) => {
    const b = h('button', { class: 'chipb' + (k === vs ? ' sel' : ''), onclick: () => {
      vs = k; vsBtns.forEach(x => x.classList.remove('sel')); b.classList.add('sel');
    } }, t);
    return b;
  });
  show(sub(KIND[curGame], h('div', { class: 'card' },
    h('p', { class: 't', style: 'text-align:center' }, 'Kim bilan o\'ynaysiz?'),
    h('div', { class: 'chips', style: 'justify-content:center' }, vsBtns),
    h('p', { class: 't', style: 'text-align:center;margin-top:18px' }, 'Nechta tanga tikasiz?'),
    h('div', { class: 'chips', style: 'justify-content:center' }, chips),
    h('p', { class: 'muted', style: 'text-align:center' }, 'G\'olib tikilgan summaning ×' + fmt(me.winMult) + ' oladi. Durangda qaytariladi.'),
    btn)));
}

function gameScreen(id) {
  stopPoll();
  let st = null, got = 0, sel = [], csel = null, lastKey = '';
  const el = {
    banner: h('div', { class: 'ban' }),
    oppAva: h('div', { class: 'pa opp' }), oppName: h('b', { class: 't' }), oppClk: h('div', { class: 'clk' }),
    myAva: h('div', { class: 'pa' }), myName: h('b', { class: 't' }), myMv: h('span', { class: 'muted' }), myClk: h('div', { class: 'clk' }),
    board: h('div', { class: 'board' }), turn: h('div', { class: 'turn' }),
    ov: h('div', { class: 'ov', hidden: '' }), promo: h('div', { class: 'ov', hidden: '' })
  };
  const resign = h('button', { class: 'wood res', onclick: () => tg.showConfirm('Taslim bo\'lasizmi? Tikish yo\'qoladi.', async ok => {
    if (!ok) return;
    try { await api('/game/' + id + '/resign', {}); fetchState(); } catch (e) { alertMsg(e.message); }
  }) }, 'Taslim');
  const cancel = h('button', { class: 'btn ghost full', style: 'margin-top:12px', onclick: async () => {
    try { await api('/game/cancel', {}); me = await api('/me'); home(); } catch (e) { alertMsg(e.message); }
  } }, 'Bekor qilish');
  const botBtn = h('button', { class: 'btn full', style: 'margin-top:12px', hidden: '', onclick: async () => {
    try { await api('/game/bot', {}); fetchState(); } catch (e) { alertMsg(e.message); }
  } }, '🤖 Bot bilan o\'ynash');
  const waitBox = h('div', { class: 'card wt' }, h('div', { class: 't' }, 'Raqib qidirilmoqda…'), h('div', { class: 'spin' }),
    h('p', { class: 'muted' }, 'Tikish saqlab turiladi. Bekor qilsangiz qaytariladi.'), botBtn, cancel);
  const bar = (ava, name, extra, clk, mine) => h('div', { class: 'pbar' + (mine ? ' mine' : '') }, ava, h('div', { class: 'grow' }, name, extra), clk);
  const playBox = h('div', { class: 'pbox', hidden: '' }, el.banner,
    bar(el.oppAva, el.oppName, null, el.oppClk, false), el.board, el.turn,
    bar(el.myAva, el.myName, el.myMv, el.myClk, true), resign);
  show(h('div', { class: 'gm' }, waitBox, playBox, el.ov, el.promo));

  function drawBoard() {
    const chess = st.kind === 'chess', flip = st.you === -1;
    const mineTurn = st.status === 'play' && st.turn === st.you;
    const legal = mineTurn ? (st.legal || []) : [];
    let starts, targets;
    if (chess) {
      starts = new Set(csel === null ? legal.map(m => m.f) : []);
      targets = new Set(csel === null ? [] : legal.filter(m => m.f === csel).map(m => m.t));
    } else {
      const cands = legal.filter(p => sel.every((v, i) => p[i] === v));
      starts = new Set(sel.length ? [] : cands.map(p => p[0]));
      targets = new Set(sel.length ? cands.map(p => p[sel.length]) : []);
    }
    const last = new Set(st.last ? [st.last[0], st.last[st.last.length - 1]] : []);
    const cells = [];
    for (let dr = 0; dr < 8; dr++) for (let dc = 0; dc < 8; dc++) {
      const r = flip ? 7 - dr : dr, c = flip ? 7 - dc : dc, idx = r * 8 + c, p = st.board[idx];
      const cls = ['cell', (r + c) % 2 === 1 ? 'dk' : 'lt'];
      if (last.has(idx)) cls.push('last');
      if (starts.has(idx)) cls.push('can');
      if (chess ? csel === idx : (sel.length && sel[sel.length - 1] === idx)) cls.push('sel');
      if (targets.has(idx)) cls.push(p ? 'cap' : 'tgt');
      let piece = null;
      if (p) piece = chess ? h('div', { class: 'cp ' + p[0] }, GLYPH[p[1]] + '\uFE0E')
        : h('div', { class: 'pc2 ' + (p > 0 ? 'w' : 'b') + (Math.abs(p) === 2 ? ' k' : '') });
      cells.push(h('div', { class: cls.join(' '), onclick: () => onCell(idx) }, piece));
    }
    el.board.replaceChildren(...cells);
  }

  async function sendMove(body) {
    try { await api('/game/' + id + '/move', body); } catch (e) { alertMsg(e.message); }
    return fetchState();
  }
  function askPromo(from, to) {
    el.promo.replaceChildren(h('div', { class: 'card ovc' },
      h('div', { class: 't', style: 'margin-bottom:12px' }, 'Piyoda qaysi donaga aylansin?'),
      h('div', { class: 'chips', style: 'justify-content:center' },
        [['q', 'Farzin ♛'], ['r', 'Ruh ♜'], ['b', 'Fil ♝'], ['n', 'Ot ♞']].map(([k, txt]) =>
          h('button', { class: 'chipb', onclick: () => { el.promo.hidden = true; sendMove({ from, to, promotion: k }); } }, txt)))));
    el.promo.hidden = false;
  }

  function onCell(idx) {
    if (!st || st.status !== 'play' || st.turn !== st.you) return;
    const legal = st.legal || [];
    if (st.kind === 'chess') {
      if (csel === null) { if (legal.some(m => m.f === idx)) csel = idx; }
      else {
        const ms = legal.filter(m => m.f === csel && m.t === idx);
        if (ms.length) {
          const from = csel; csel = null; drawBoard();
          return (ms.length === 1 && !ms[0].p) ? sendMove({ from, to: idx }) : askPromo(from, idx);
        }
        csel = (legal.some(m => m.f === idx) && idx !== csel) ? idx : null;
      }
      return drawBoard();
    }
    if (!sel.length) { if (legal.some(p => p[0] === idx)) sel = [idx]; }
    else if (sel.length === 1 && sel[0] === idx) sel = [];
    else {
      const nxt = legal.filter(p => sel.every((v, i) => p[i] === v) && p[sel.length] === idx);
      if (nxt.length) {
        sel.push(idx);
        if (nxt.some(p => p.length === sel.length)) { const path = sel.slice(); sel = []; return sendMove({ path }); }
      } else if (legal.some(p => p[0] === idx)) sel = [idx];
      else sel = [];
    }
    drawBoard();
  }

  function paintClocks() {
    if (!st || st.status !== 'play') return;
    const d = performance.now() - got, mine = st.you === 1 ? 'w' : 'b', theirs = st.you === 1 ? 'b' : 'w';
    const myT = st.clocks[mine] - (st.turn === st.you ? d : 0), opT = st.clocks[theirs] - (st.turn !== st.you ? d : 0);
    el.myClk.textContent = mmss(myT); el.oppClk.textContent = mmss(opT);
    el.myClk.classList.toggle('low', myT < 30000); el.oppClk.classList.toggle('low', opT < 30000);
    el.myMv.textContent = st.turn === st.you ? '⏱ ' + Math.floor((st.moveMs + d) / 1000) + ' s / yurish' : '';
  }

  function paint() {
    me.balance = st.balance;
    waitBox.hidden = st.status !== 'wait'; playBox.hidden = st.status === 'wait';
    if (st.status === 'wait') { botBtn.hidden = !(me.botEnabled && st.waited >= me.botWait * 1000); return; }
    el.banner.replaceChildren('G\'OLIBGA +' + fmt(st.payout), svg('coin', 'coin xs'));
    el.oppName.textContent = st.opp ? st.opp.name : '…';
    el.oppAva.textContent = st.bot && st.opp && st.opp.name === 'Bot' ? '🤖' : ((st.opp && st.opp.name || '?')[0] || '?').toUpperCase();
    el.myName.textContent = st.me + ' · siz'; el.myAva.textContent = (st.me[0] || '?').toUpperCase();
    drawBoard(); paintClocks();
    const mineTurn = st.status === 'play' && st.turn === st.you;
    el.turn.textContent = st.status !== 'play' ? 'O\'yin tugadi'
      : mineTurn ? (st.check ? 'Shoh! Sizning navbatingiz' : 'Sizning navbatingiz') : 'Raqib o\'ylayapti…';
    el.turn.className = 'turn' + (mineTurn ? '' : ' opp');
    resign.hidden = st.status !== 'play';
    if (st.status === 'done') {
      el.promo.hidden = true;
      const draw = st.result === 'draw', won = !draw && (st.result === 'w' ? 1 : -1) === st.you;
      const why = { timeout: 'Vaqt tugadi', resign: 'Taslim bo\'lindi', no_moves: 'Yurish qolmadi', repeat: 'Pozitsiya takrorlandi',
        noprog: 'Hech kim ustun kelmadi', checkmate: 'Mat', stalemate: 'Pat (durang)', insufficient: 'Material yetarli emas', fifty: '50 yurish qoidasi' }[st.reason] || '';
      el.ov.replaceChildren(h('div', { class: 'card ovc' },
        h('div', { class: 'ovt' }, draw ? 'Durang 🤝' : won ? 'G\'alaba! 🏆' : 'Mag\'lubiyat 😔'),
        h('p', { class: 'muted' }, why),
        h('div', { class: 'amt', style: 'justify-content:center' }, draw ? 'Tikish qaytarildi' : won ? '+' + fmt(st.payout) : '−' + fmt(st.stake), draw ? null : svg('coin', 'coin xs')),
        h('button', { class: 'btn full', style: 'margin-top:14px', onclick: stakeScreen }, 'Yana o\'ynash'),
        h('button', { class: 'btn ghost full', style: 'margin-top:10px', onclick: home }, 'Bosh sahifa')));
      el.ov.hidden = false;
    } else el.ov.hidden = true;
  }

  async function fetchState() {
    try { st = await api('/game/' + id); got = performance.now(); }
    catch (e) {
      if (/topilmadi/i.test(e.message)) {
        stopPoll();
        alertMsg('O\'yin topilmadi. Server yangilangan bo\'lishi mumkin.');
        load();
      }
      return;
    }
    if (st.kind) curGame = st.kind;
    const key = JSON.stringify(st.board) + st.turn + st.status;
    if (key !== lastKey) { sel = []; csel = null; lastKey = key; }
    paint();
    if (st.status === 'done') stopPoll();
  }

  fetchState().then(() => {
    if (st && st.status === 'done') return;
    poll = setInterval(fetchState, 1000);
    tick = setInterval(paintClocks, 250);
  });
}

load();
</script>
</body>
</html>
