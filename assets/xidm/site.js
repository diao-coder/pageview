/* XIDM product site: language switch, live segment-map demo, counters, reveals, particle field. */
(function () {
  'use strict';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- i18n (Chinese is in the HTML; English here) ---------------- */
  var EN = {
    'nav.features': 'Features', 'nav.engine': 'Engine', 'nav.privacy': 'Privacy', 'nav.specs': 'Specs',
    'cta.short': 'Download', 'cta.download': 'Download APK', 'cta.explore': 'See what it does',
    'hero.eyebrow': 'ANDROID · BROWSER × DOWNLOAD MANAGER',
    'hero.t1': 'Catch everything', 'hero.t2': 'on the web.',
    'hero.lede': 'XIDM is a browser that detects media and blocks ads, with a built-in multi-connection HTTP, HLS and BitTorrent engine. The videos, audio and files you see go straight to your phone in one tap.',
    'hero.free': 'no ad SDK',
    'tm.speed': 'Speed', 'tm.done': 'Done', 'tm.conn': 'Conns', 'tm.eta': 'ETA',
    'f.kicker': 'Features', 'f.title': 'One app instead of a whole toolbox.',
    'f.sniff.t': 'Media detection',
    'f.sniff.p': 'Open a page and XIDM finds its videos, audio and HLS playlists in the background. A counter at the bottom tells you how many it caught; tap to download. Every tab detects on its own.',
    'f.multi.t': 'Multi-connection downloads',
    'f.multi.p': 'Files are split into Range segments fetched in parallel. Downloads resume after a lost connection or a killed app, and failures retry with back-off.',
    'f.hls.t': 'HLS to a single video',
    'f.hls.p': 'Picks the best variant and its default audio, handles AES-128 and fMP4, then merges everything losslessly with FFmpeg into an MP4 that plays right away.',
    'f.bt.t': 'BitTorrent and magnet links',
    'f.bt.p': 'Built on libtorrent: open a .torrent or paste a magnet link. Seeding after download, IP filtering and separate speed limits included.',
    'f.ad.t': 'Ad blocking on your terms',
    'f.ad.p': 'Ships with the AdAway list; add online Hosts sources or import your own files. A domain and all its subdomains are blocked, and your allow list always wins. Lists are fetched over https only, so they cannot be tampered with.',
    'f.ad.m1': 'Requests blocked', 'f.ad.m2': 'Rules',
    'f.incog.t': 'Incognito windows',
    'f.incog.p': 'Browse in a separate process with separate storage and no history. Closing the window wipes cookies, cache and site data.',
    'f.clip.t': 'Smart clipboard',
    'f.clip.p': 'Copy a file link or a magnet link, come back to XIDM and it offers to download. Only a hash prefix of the link is kept, never the link itself.',
    'f.ctl.t': 'Fine-grained control',
    'f.ctl.p': 'Global or per-task speed limits, Wi-Fi only, pause on low battery, HTTP / SOCKS5 proxies, queue order, copy, move and re-download options.',
    'f.mcp.t': 'Let an AI agent download for you',
    'f.mcp.p': 'Turn it on and XIDM serves an MCP endpoint on the phone, so an AI agent on your computer can list, add and manage downloads. Every connection has its own token and scopes, it listens on 127.0.0.1 by default, and it never returns cookies, credentials or history.',
    'f.fold.t': 'Foldables and tablets',
    'f.fold.p': 'Wide screens get a side tab list and two-pane settings; book posture splits at the hinge, tabletop posture moves the controls to the lower half.',
    'f.lang.t': '10 languages',
    'f.lang.p': 'English, Chinese (Simplified / Traditional), Japanese, Korean, Spanish, French, German, Portuguese and Russian. Follows your system by default.',
    'e.kicker': 'Engine', 'e.title': 'From link to file, every step in view.',
    'e.s1.t': 'Probe', 'e.s1.p': 'Finds the name, size and resume support; a 4xx is treated as final, so no retries are wasted.',
    'e.s2.t': 'Plan', 'e.s2.p': 'Splits the file into Range segments; for HLS, picks the highest-bandwidth variant and its default audio.',
    'e.s3.t': 'Fetch in parallel', 'e.s3.p': 'Segments download at once with an exact token-bucket speed limit; progress is saved often, so even a killed app picks up where it left off.',
    'e.s4.t': 'Merge', 'e.s4.p': 'FFmpeg only copies streams, never re-encodes: timelines aligned, no audio lost, an MP4 that starts instantly.',
    'e.k1': 'connections per task', 'e.k2': 'download protocols', 'e.k3': 'Hosts rules max', 'e.k4': 'UI languages',
    'p.kicker': 'Privacy & security', 'p.title': 'Your downloads are yours alone.',
    'p.lede': 'No ad SDK, no selling data. Downloads, history, bookmarks and settings stay on your device.',
    'p.link': 'Read the privacy policy →',
    'p.c1.t': 'Statistics you can turn off', 'p.c1.p': 'Anonymous usage statistics contain only predefined events, never URLs or file names; one switch turns them off and clears them.',
    'p.c2.t': 'Self-checking app', 'p.c2.p': 'The signing certificate is checked at start-up; a repackaged copy refuses to run.',
    'p.c3.t': 'Pinned updates', 'p.c3.p': 'Updates and config use certificate-pinned HTTPS; size, SHA-256 and signer are verified before installing.',
    'p.c4.t': 'Nothing exposed', 'p.c4.p': 'Inter-process calls use signature-level permissions; other apps cannot drive the download service.',
    'p.c5.t': 'Cookies stay put', 'p.c5.p': 'Page cookies go to the original site only and are dropped on cross-site redirects; HTTPS-to-HTTP downgrades are refused.',
    's.kicker': 'Specs', 's.title': 'Technical specs',
    's.r1': 'System', 's.r2': 'ABI', 's.r3': 'Protocols', 's.r4': 'Merging', 's.r5': 'Network', 's.r6': 'Interface', 's.r7': 'Automation',
    'c.title': 'Turn the web into<br>your folder, now.',
    'nav.download': 'Download', 'd.kicker': 'Download',
    'd.play.soon': 'Coming soon', 'd.play.live': 'Available', 'd.play.t': 'Google Play',
    'd.play.p': 'Install from Google Play to get updates automatically. The right choice for most people.',
    'd.play.btn': 'Get it on Google Play',
    'd.apk.t': 'Download the APK', 'd.apk.p': 'Split by processor architecture for a smaller file; pick the universal one if unsure.',
    'd.help.t': 'Which one do I need?',
    'd.help.1': '<b>arm64-v8a</b>: almost every phone and tablet from recent years (64-bit ARM).',
    'd.help.2': '<b>armeabi-v7a</b>: older 32-bit ARM phones.',
    'd.help.3': '<b>x86_64</b>: emulators, some Chromebooks and Intel tablets.',
    'd.help.4': '<b>Universal</b>: every architecture in one file; installs anywhere, largest download.',
    'd.verify.t': 'How do I verify the file?',
    'd.verify.p': 'Compute the SHA-256 of the download; only a match with the value listed above means the file is complete and untouched.',
    'ft.privacy': 'Privacy policy', 'ft.releases': 'Download', 'ft.note': 'Please only download content you have the right to save.'
  };
  var ZH = {}, nodes = document.querySelectorAll('[data-i18n]');
  nodes.forEach(function (n) { ZH[n.getAttribute('data-i18n')] = n.innerHTML; });
  var ZH_TITLE = document.title, EN_TITLE = 'XIDM — Catch everything on the web · Browser + download manager';

  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function setLang(lang) {
    var dict = lang === 'en' ? EN : ZH;
    nodes.forEach(function (n) { var k = n.getAttribute('data-i18n'); if (dict[k] != null) n.innerHTML = dict[k]; });
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    document.title = lang === 'en' ? EN_TITLE : ZH_TITLE;
    document.getElementById('lang').textContent = lang === 'en' ? '中文' : 'EN';
    current = lang;
    if (window.XIDM_renderDownloads) window.XIDM_renderDownloads();
  }
  var current = 'zh';
  var saved = store('xidm.lang');
  var asked = (location.search.match(/[?&]lang=(en|zh)\b/) || [])[1]; // shareable ?lang=en
  var initial = asked || saved ||((navigator.language || 'zh').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en');
  if (initial === 'en') setLang('en');
  document.getElementById('lang').addEventListener('click', function () {
    setLang(current === 'en' ? 'zh' : 'en');
    store('xidm.lang', current);
  });
  document.getElementById('year').textContent = new Date().getFullYear();


  /* ---------------- downloads (assets/xidm/downloads.js) ---------------- */
  var DL = window.XIDM_DOWNLOADS || { apks: [] };
  var ABI_NAME = {
    zh: { 'universal': '通用包', 'arm64-v8a': 'arm64-v8a', 'armeabi-v7a': 'armeabi-v7a', 'x86_64': 'x86_64' },
    en: { 'universal': 'Universal', 'arm64-v8a': 'arm64-v8a', 'armeabi-v7a': 'armeabi-v7a', 'x86_64': 'x86_64' }
  };
  var ABI_NOTE = {
    zh: { 'universal': '全部架构 · 任何设备', 'arm64-v8a': '64 位 ARM · 绝大多数手机', 'armeabi-v7a': '32 位 ARM · 较老的手机', 'x86_64': '模拟器 · Chromebook' },
    en: { 'universal': 'All architectures · any device', 'arm64-v8a': '64-bit ARM · most phones', 'armeabi-v7a': '32-bit ARM · older phones', 'x86_64': 'Emulators · Chromebooks' }
  };
  var TXT = {
    zh: { get: '下载', soon: '即将提供', rec: '推荐', copy: '复制', copied: '已复制', sha: 'SHA-256', pending: '待发布',
          ver: function (d) { return 'v' + d.version + ' · Android ' + d.minAndroid + '+' + (d.released ? ' · ' + d.released : ''); },
          det: function (a) { return a ? '检测到 ' + a : '未能识别设备架构'; } },
    en: { get: 'Download', soon: 'Coming soon', rec: 'Recommended', copy: 'Copy', copied: 'Copied', sha: 'SHA-256', pending: 'pending',
          ver: function (d) { return 'v' + d.version + ' · Android ' + d.minAndroid + '+' + (d.released ? ' · ' + d.released : ''); },
          det: function (a) { return a ? 'Detected ' + a : 'Device architecture unknown'; } }
  };
  var detected = null; // an ABI from the list, or null

  function guessAbi() {
    var ua = navigator.userAgent || '';
    if (!/Android/i.test(ua) && !/CrOS/i.test(ua)) return Promise.resolve(null);
    var uad = navigator.userAgentData;
    var hint = uad && uad.getHighEntropyValues ? uad.getHighEntropyValues(['architecture', 'bitness']).catch(function () { return {}; }) : Promise.resolve({});
    return hint.then(function (h) {
      var arch = (h.architecture || '').toLowerCase(), bits = h.bitness;
      if (arch === 'arm') return bits === '32' ? 'armeabi-v7a' : 'arm64-v8a';
      if (arch === 'x86') return bits === '32' ? null : 'x86_64';
      if (/aarch64|arm64|armv8/i.test(ua)) return 'arm64-v8a';
      if (/armv7|armeabi/i.test(ua)) return 'armeabi-v7a';
      if (/x86_64|x64|amd64/i.test(ua)) return 'x86_64';
      return /Android/i.test(ua) ? 'arm64-v8a' : null; // nearly every Android device today
    });
  }

  function fmtSize(b) {
    if (!b) return '—';
    return b >= 1048576 ? (b / 1048576).toFixed(1) + ' MB' : Math.round(b / 1024) + ' KB';
  }

  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  window.XIDM_renderDownloads = function () {
    var L = current === 'en' ? 'en' : 'zh', t = TXT[L];
    var ver = document.getElementById('dl-version');
    if (ver) ver.textContent = t.ver(DL);
    var det = document.getElementById('dl-detect');
    if (det) { det.textContent = t.det(detected); det.classList.toggle('on', !!detected); }

    // Google Play: a real link only when the store URL is set
    var playBtn = document.getElementById('dl-play-btn'), tag = document.getElementById('dl-play-tag');
    if (playBtn) {
      var live = /^https:\/\/play\.google\.com\//.test(DL.play || '');
      playBtn.classList.toggle('is-disabled', !live);
      playBtn.setAttribute('aria-disabled', live ? 'false' : 'true');
      playBtn.href = live ? DL.play : '#download';
      if (live) { playBtn.target = '_blank'; playBtn.rel = 'noopener'; }
      tag.setAttribute('data-i18n', live ? 'd.play.live' : 'd.play.soon');
      tag.textContent = live ? (L === 'en' ? EN['d.play.live'] : '已上架') : (L === 'en' ? EN['d.play.soon'] : '即将上架');
      tag.classList.toggle('live', live);
    }

    var list = document.getElementById('dl-list');
    if (!list) return;
    // recommend the detected ABI if it is available, else the safest available one
    var ready = function (abi) { return DL.apks.some(function (a) { return a.abi === abi && a.ready; }); };
    var rec = [detected, 'universal', 'arm64-v8a', 'armeabi-v7a', 'x86_64'].filter(function (x) { return x && ready(x); })[0]
        || detected || 'universal';
    list.innerHTML = DL.apks.map(function (a) {
      var ok = a.ready && a.file;
      var isRec = a.abi === rec;
      var sha = a.sha256 ? a.sha256.toLowerCase() : '';
      return '<li class="apk' + (ok ? '' : ' off') + (isRec ? ' rec' : '') + '">' +
        '<div class="apk-abi"><b class="mono">' + esc(ABI_NAME[L][a.abi] || a.abi) + '</b>' +
        (isRec ? '<span class="badge mono">' + t.rec + '</span>' : '') +
        '<span class="apk-note">' + esc(ABI_NOTE[L][a.abi] || '') + '</span></div>' +
        '<div class="apk-meta mono"><span>' + esc(a.file.split('/').pop()) + '</span>' + (a.size ? '<span>' + fmtSize(a.size) + '</span>' : '') + '</div>' +
        '<div class="apk-sha mono"><span class="lbl">' + t.sha + '</span><code title="' + esc(sha) + '">' +
        (sha ? esc(sha.slice(0, 16) + '…' + sha.slice(-8)) : t.pending) + '</code>' +
        (sha ? '<button type="button" class="copy mono" data-sha="' + esc(sha) + '">' + t.copy + '</button>' : '') + '</div>' +
        (ok ? '<a class="btn btn-small apk-get" href="' + esc(a.file) + '" download>' + t.get + '</a>'
            : '<span class="apk-get soon mono">' + t.soon + '</span>') +
        '</li>';
    }).join('');
    list.querySelectorAll('.copy').forEach(function (b) {
      b.addEventListener('click', function () {
        var done = function () { b.textContent = t.copied; setTimeout(function () { b.textContent = t.copy; }, 1600); };
        if (navigator.clipboard) navigator.clipboard.writeText(b.getAttribute('data-sha')).then(done, function () {});
      });
    });
  };
  window.XIDM_renderDownloads();
  guessAbi().then(function (abi) {
    detected = abi && DL.apks.some(function (a) { return a.abi === abi; }) ? abi : null;
    window.XIDM_renderDownloads();
  });

  /* ---------------- live segment map ---------------- */
  var SEGS = 8, segBox = document.getElementById('segments');
  var segs = [];
  for (var i = 0; i < SEGS; i++) {
    var row = document.createElement('div');
    row.className = 'seg';
    row.innerHTML = '<span>#' + (i + 1) + '</span><div class="track"><div class="fill"></div></div><b>0%</b>';
    segBox.appendChild(row);
    segs.push({ row: row, fill: row.querySelector('.fill'), label: row.querySelector('b'), p: 0, rate: 0 });
  }
  var TOTAL_MB = 1840, el = function (id) { return document.getElementById(id); };
  var stage = el('tm-stage'), speedEl = el('tm-speed'), doneEl = el('tm-done'), etaEl = el('tm-eta'), connEl = el('tm-conn');
  var spark = el('spark'), sctx = spark.getContext('2d'), history = [];
  var phase = 'probe', phaseT = 0, last = performance.now(), visible = true;

  function resetRun() {
    segs.forEach(function (s) { s.p = 0; s.rate = .05 + Math.random() * .09; s.row.classList.remove('done'); });
    history = []; phase = 'probe'; phaseT = 0;
  }
  resetRun();

  function fmtEta(sec) {
    if (!isFinite(sec) || sec <= 0) return '--';
    var m = Math.floor(sec / 60), s = Math.round(sec % 60);
    return (m ? m + 'm ' : '') + s + 's';
  }

  function drawSpark() {
    var w = spark.width, h = spark.height;
    sctx.clearRect(0, 0, w, h);
    if (history.length < 2) return;
    var max = Math.max.apply(null, history.concat([1]));
    var g = sctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, 'rgba(55,242,208,.35)'); g.addColorStop(1, 'rgba(55,242,208,0)');
    sctx.beginPath();
    history.forEach(function (v, i) {
      var x = i / (60 - 1) * w, y = h - 6 - v / max * (h - 14);
      i ? sctx.lineTo(x, y) : sctx.moveTo(x, y);
    });
    sctx.strokeStyle = '#37f2d0'; sctx.lineWidth = 2; sctx.shadowColor = '#37f2d0'; sctx.shadowBlur = 8; sctx.stroke();
    sctx.shadowBlur = 0;
    sctx.lineTo((history.length - 1) / 59 * w, h); sctx.lineTo(0, h); sctx.closePath();
    sctx.fillStyle = g; sctx.fill();
  }

  function tick(now) {
    var dt = Math.min(.1, (now - last) / 1000); last = now;
    if (visible) {
      phaseT += dt;
      if (phase === 'probe') {
        stage.textContent = 'PROBE · HEAD 206 · ' + TOTAL_MB + ' MB';
        if (phaseT > 1.1) { phase = 'fetch'; phaseT = 0; }
      } else if (phase === 'fetch') {
        var active = 0, sum = 0, mbps = 0;
        segs.forEach(function (s) {
          if (s.p < 1) {
            active++;
            var jitter = .6 + Math.random() * .8;
            var step = s.rate * jitter * dt;
            s.p = Math.min(1, s.p + step);
            mbps += step * TOTAL_MB / SEGS / dt;
            if (s.p >= 1) s.row.classList.add('done');
          }
          sum += s.p;
          s.fill.style.width = (s.p * 100).toFixed(1) + '%';
          s.label.textContent = Math.floor(s.p * 100) + '%';
        });
        var done = sum / SEGS;
        history.push(mbps); if (history.length > 60) history.shift();
        speedEl.textContent = mbps.toFixed(1) + ' MB/s';
        doneEl.textContent = Math.floor(done * 100) + '%';
        connEl.textContent = active;
        etaEl.textContent = fmtEta((1 - done) * TOTAL_MB / Math.max(mbps, .1));
        stage.textContent = 'FETCH · ' + active + ' / ' + SEGS + ' RANGE';
        drawSpark();
        if (active === 0) { phase = 'merge'; phaseT = 0; }
      } else if (phase === 'merge') {
        speedEl.textContent = '0.0 MB/s'; etaEl.textContent = '--';
        stage.textContent = 'MERGE · ffmpeg remux → faststart mp4';
        if (phaseT > 1.6) { phase = 'done'; phaseT = 0; }
      } else {
        stage.textContent = 'DONE · ✓ sha-256 ok';
        doneEl.textContent = '100%';
        if (phaseT > 2.2) resetRun();
      }
    }
    if (!reduce) requestAnimationFrame(tick);
  }
  if (reduce) { segs.forEach(function (s) { s.p = 1; s.fill.style.width = '100%'; s.label.textContent = '100%'; s.row.classList.add('done'); }); stage.textContent = 'DONE · ✓'; doneEl.textContent = '100%'; }
  else requestAnimationFrame(tick);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (e) { visible = e[0].isIntersecting; }).observe(document.querySelector('.console'));
  }

  /* ---------------- reveal + counters ---------------- */
  function count(elm) {
    var to = +elm.getAttribute('data-to'), suf = elm.getAttribute('data-suffix') || '', t0 = null;
    if (reduce) { elm.textContent = to + suf; return; }
    function step(t) {
      t0 = t0 || t; var k = Math.min(1, (t - t0) / 1400); k = 1 - Math.pow(1 - k, 3);
      elm.textContent = Math.round(to * k).toLocaleString() + suf;
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var revealables = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        e.target.querySelectorAll('.count').forEach(count);
        if (e.target.classList.contains('count')) count(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: .15 });
    revealables.forEach(function (r) { io.observe(r); });
  } else {
    revealables.forEach(function (r) { r.classList.add('in'); });
    document.querySelectorAll('.count').forEach(count);
  }

  /* cursor glow on cards */
  document.querySelectorAll('.card').forEach(function (c) {
    c.addEventListener('pointermove', function (e) {
      var r = c.getBoundingClientRect();
      c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      c.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  /* ---------------- particle field: drifting data packets ---------------- */
  var field = el('field'), fctx = field.getContext('2d'), dots = [], W = 0, H = 0, dpr = Math.min(2, window.devicePixelRatio || 1);
  function size() {
    W = field.clientWidth; H = field.clientHeight;
    field.width = W * dpr; field.height = H * dpr; fctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var n = Math.round(Math.min(90, W * H / 18000));
    dots = [];
    for (var i = 0; i < n; i++) dots.push({ x: Math.random() * W, y: Math.random() * H, v: .15 + Math.random() * .5, l: 6 + Math.random() * 26, a: .15 + Math.random() * .35, amber: Math.random() < .12 });
  }
  function drawField() {
    fctx.clearRect(0, 0, W, H);
    dots.forEach(function (d) {
      d.y += d.v; if (d.y - d.l > H) { d.y = -d.l; d.x = Math.random() * W; }
      var g = fctx.createLinearGradient(d.x, d.y - d.l, d.x, d.y);
      var c = d.amber ? '255,181,71' : '55,242,208';
      g.addColorStop(0, 'rgba(' + c + ',0)'); g.addColorStop(1, 'rgba(' + c + ',' + d.a + ')');
      fctx.strokeStyle = g; fctx.lineWidth = 1.2;
      fctx.beginPath(); fctx.moveTo(d.x, d.y - d.l); fctx.lineTo(d.x, d.y); fctx.stroke();
    });
    if (!reduce && !document.hidden) requestAnimationFrame(drawField);
  }
  size(); window.addEventListener('resize', size);
  if (!reduce) {
    requestAnimationFrame(drawField);
    document.addEventListener('visibilitychange', function () { if (!document.hidden) requestAnimationFrame(drawField); });
  }
})();
