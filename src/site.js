(function () {
  'use strict';
  var T = {};
  try { T = JSON.parse(document.getElementById('i18n').textContent); } catch (e) {}
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  // mobile navigation
  var burger = $('.burger'), mnav = $('#mnav');
  if (burger && mnav) {
    burger.addEventListener('click', function () {
      var open = mnav.getAttribute('data-open') !== 'true';
      mnav.setAttribute('data-open', open); burger.setAttribute('aria-expanded', open);
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && mnav.getAttribute('data-open') === 'true') { mnav.setAttribute('data-open', 'false'); burger.setAttribute('aria-expanded', 'false'); burger.focus(); } });
  }
  // close language menu on outside click / escape
  $$('details.lang').forEach(function (d) {
    document.addEventListener('click', function (e) { if (d.open && !d.contains(e.target)) d.open = false; });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') { d.open = false; d.querySelector('summary').focus(); } });
  });

  // tabs (role=tablist) with arrow-key support
  $$('[role=tablist]').forEach(function (list) {
    var tabs = $$('[role=tab]', list);
    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1;
        var p = document.getElementById(t.getAttribute('aria-controls')); if (p) p.hidden = !on;
      });
      if (focus) tab.focus();
      list.dispatchEvent(new CustomEvent('tabchange', { detail: tab }));
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var rtl = document.dir === 'rtl', n = null;
        if (e.key === (rtl ? 'ArrowLeft' : 'ArrowRight')) n = tabs[(i + 1) % tabs.length];
        if (e.key === (rtl ? 'ArrowRight' : 'ArrowLeft')) n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (n) { e.preventDefault(); select(n, true); }
      });
    });
    list._select = select;
  });

  // how-it-works steps
  $$('.steps').forEach(function (wrap) {
    var steps = $$('.step', wrap), bar = wrap.parentNode.querySelector('.flow i');
    steps.forEach(function (s, i) {
      s.addEventListener('click', function () {
        steps.forEach(function (x) { x.setAttribute('aria-pressed', x === s); });
        if (bar) bar.style.width = ((i + 1) / steps.length * 100) + '%';
      });
    });
  });

  // galleries
  $$('.gal').forEach(function (g) {
    var main = $('.main img', g), src = $('.main source', g), btns = $$('.thumbs button', g);
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        btns.forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
        main.src = b.dataset.src; main.alt = b.dataset.alt; if (src) src.srcset = b.dataset.webp;
        var z = $('.zoom', g); if (z) z.dataset.full = b.dataset.full;
        var bd = $('.main .badge', g); if (bd) { bd.className = 'badge ' + b.dataset.status; bd.textContent = b.dataset.label; }
      });
    });
  });

  // lightbox
  var dlg = document.createElement('dialog'); dlg.className = 'lb';
  dlg.innerHTML = '<button type="button" aria-label="' + (T.close || 'Close') + '">×</button><img alt="">';
  document.body.appendChild(dlg);
  dlg.querySelector('button').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  $$('.zoom').forEach(function (z) {
    z.addEventListener('click', function () {
      var img = dlg.querySelector('img'); img.src = z.dataset.full; img.alt = z.closest('figure').querySelector('img').alt;
      if (dlg.showModal) dlg.showModal(); else window.open(z.dataset.full);
    });
  });

  // contact route tabs from ?type=
  var route = (location.search.match(/[?&]type=(project|partner|distributor)/) || [])[1];
  if (route) { var tl = $('#routes'); var tb = tl && $('[data-route=' + route + ']', tl); if (tl && tb) tl._select(tb); }

  // demo forms -> localStorage CRM
  var KEY = 'wk-demo-leads';
  $$('form.lead').forEach(function (f) {
    f.setAttribute('novalidate', '');
    function err(el, msg) {
      var e = document.getElementById(el.id + '-err');
      el.setAttribute('aria-invalid', msg ? 'true' : 'false');
      if (e) e.textContent = msg || '';
    }
    f.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (f.querySelector('.hp input').value) return; // honeypot
      var first = null;
      $$('[required]', f).forEach(function (el) {
        var msg = '';
        if (el.type === 'checkbox') msg = el.checked ? '' : T.consentReq;
        else if (!el.value.trim()) msg = T.required;
        else if (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(el.value.trim())) msg = T.invalidEmail;
        err(el, msg); if (msg && !first) first = el;
      });
      if (first) { first.focus(); return; }
      var fd = new FormData(f), d = {}; fd.forEach(function (v, k) { d[k] = v; });
      var streams = fd.getAll('streams').join(', ');
      var fit = (d.timeframe === 'now' || /Tender|procurement|construction|İhale|appel|Ausschreib|licitac|aanbested|upphandl|入札|construct|inşaat|مناقص|إنشاء|工事|Bau|bouw|bygg|obra|chantier/i.test(d.stage || '')) ? 'High' : (d.timeframe === 'soon' || d.stage) ? 'Medium' : 'Exploratory';
      var qual = [d.intent && ('Request: ' + d.intent),d.sites && ('Sites: ' + d.sites), d.stage && ('Stage: ' + d.stage), streams && ('Streams: ' + streams), d.experience && ('Experience: ' + d.experience), d.capability && ('Capability: ' + d.capability), d.area && ('Expertise: ' + d.area)].filter(Boolean).join(' · ');
      var lead = {
        id: 'L' + Date.now(), company: d.org, contact: d.name, role: d.role, country: d.country, email: d.email,
        type: d.buyer, project: d.project || qual || '', timeframe: d.timeframe, notes: d.desc || '', territory: d.territory || '', expertise: d.expertise || d.capabilities || '',
        meeting: !!d.meeting, intent: d.intent || '', qual: qual, fit: fit, source: 'Website form — ' + (document.documentElement.lang || 'en').toUpperCase() + ' / ' + (f.dataset.variant || 'project'),
        stage: 'New Inquiry', owner: 'Unassigned', next: new Date(Date.now() + 2 * 864e5).toISOString().slice(0, 10), created: new Date().toISOString(), test: true
      };
      var list = []; try { list = JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) {}
      list.unshift(lead); try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {}
      var box = f.parentNode;
      f.hidden = true; var hd = box.querySelector('.wiz-head'); if (hd) hd.hidden = true;
      var ok = box.querySelector('.ok'); ok.hidden = false; ok.focus();
    });
    var again = f.parentNode.querySelector('.again');
    if (again) again.addEventListener('click', function () { f.reset(); f.hidden = false; f.parentNode.querySelector('.ok').hidden = true; var hd = f.parentNode.querySelector('.wiz-head'); if (hd) hd.hidden = false; if (f._go) f._go(1); });
    $$('input,select,textarea', f).forEach(function (el) { el.addEventListener('input', function () { if (el.getAttribute('aria-invalid') === 'true') err(el, ''); }); });
  });

  // ---- v2: anatomy hotspots ----
  $$('.anat').forEach(function (a) {
    var hs = $$('.hs', a), li = $$('.anat-list li', a);
    function pick(i) { hs.forEach(function (h, j) { h.setAttribute('aria-pressed', j === i); }); li.forEach(function (l, j) { l.classList.toggle('on', j === i); }); }
    hs.forEach(function (h, i) { h.addEventListener('click', function () { pick(i); }); h.addEventListener('mouseenter', function () { pick(i); }); });
    li.forEach(function (l, i) { l.addEventListener('click', function () { pick(i); }); });
  });

  // ---- v2: vertical tablists (up/down keys) ----
  $$('[role=tablist][aria-orientation=vertical]').forEach(function (list) {
    var tabs = $$('[role=tab]', list);
    tabs.forEach(function (t, i) { t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowDown' ? tabs[(i + 1) % tabs.length] : e.key === 'ArrowUp' ? tabs[(i - 1 + tabs.length) % tabs.length] : null;
      if (n) { e.preventDefault(); list._select(n, true); } }); });
  });

  // ---- v2: qualification wizard ----
  var roleQ = (location.search.match(/[?&](?:role|type)=(\w+)/) || [])[1];
  var roleMap = { partner: 'partner', distributor: 'distributor', municipality: 'municipality', developer: 'developer', manufacturer: 'manufacturer', project: '' };
  $$('.wiz').forEach(function (w) {
    var f = $('form', w), steps = $$('.ws', f), marks = $$('.wiz-steps li', w), cur = 1;
    if (!w.dataset.preset && roleQ && roleMap[roleQ]) { var rr = f.querySelector('input[name=buyer][value=' + roleMap[roleQ] + ']'); if (rr) rr.checked = true; }
    function role() { var c = f.querySelector('input[name=buyer]:checked'); return c ? c.value : ''; }
    function go(n) {
      cur = n; steps.forEach(function (s) { s.hidden = +s.dataset.s !== n; });
      marks.forEach(function (m, i) { if (i === n - 1) m.setAttribute('aria-current', 'step'); else m.removeAttribute('aria-current'); m.classList.toggle('done', i < n - 1); });
      if (n === 2) { var r = role(); $$('.qg[data-for]', f).forEach(function (g) { g.hidden = g.dataset.for.split(' ').indexOf(r) < 0; }); }
      var first = steps[n - 1].querySelector('input:not([type=hidden]):not([tabindex="-1"]),button'); if (first && w.getBoundingClientRect().top < 0) w.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    f._go = go;
    $$('.wnext', f).forEach(function (b) { b.addEventListener('click', function () {
      var e = steps[cur - 1].querySelector('.ws-err');
      if (cur === 1 && !role()) { e.textContent = (T.pick || ''); return; }
      if (e) e.textContent = ''; go(cur + 1);
    }); });
    $$('.wback', f).forEach(function (b) { b.addEventListener('click', function () { go(cur - 1); }); });
    $$('input[name=buyer]', f).forEach(function (i) { i.addEventListener('change', function () { var e = steps[0].querySelector('.ws-err'); if (e) e.textContent = ''; }); });
  });


  // ---- v3: annotated product diagram with leader lines ----
  $$('[data-dg]').forEach(function (fig) {
    var mks = $$('.mk', fig), items = $$('.dg-list li', fig), svg = $('.dg-lines', fig), img = $('.dg-img', fig);
    function set(i) {
      mks.forEach(function (m, k) { m.setAttribute('aria-pressed', k === i); });
      items.forEach(function (li, k) { li.classList.toggle('on', k === i); var b = $('.dg-t', li); if (b) b.setAttribute('aria-expanded', k === i); });
      draw();
    }
    function draw() {
      if (!svg) return;
      var list = $('.dg-list', fig), fr = fig.getBoundingClientRect(), side = getComputedStyle(fig).getPropertyValue('--dg-lines').trim();
      if (side !== '1') { svg.innerHTML = ''; return; }
      var rtl = getComputedStyle(fig).direction === 'rtl', ir = img.getBoundingClientRect(), out = '';
      svg.setAttribute('width', fr.width); svg.setAttribute('height', fr.height); svg.setAttribute('viewBox', '0 0 ' + fr.width + ' ' + fr.height);
      mks.forEach(function (m, k) {
        var mr = m.getBoundingClientRect(), lr = $('.n', items[k]).getBoundingClientRect();
        var x1 = mr.left + mr.width / 2 - fr.left, y1 = mr.top + mr.height / 2 - fr.top;
        var x3 = (rtl ? lr.right + 6 : lr.left - 6) - fr.left, y3 = lr.top + lr.height / 2 - fr.top;
        var xm = (rtl ? ir.left - 14 : ir.right + 14) - fr.left;
        out += '<path class="ld' + (items[k].classList.contains('on') ? ' on' : '') + '" d="M' + x1 + ' ' + y1 + ' L' + xm + ' ' + y3 + ' L' + x3 + ' ' + y3 + '"/>';
      });
      svg.innerHTML = out;
    }
    mks.forEach(function (m, k) { m.addEventListener('click', function () { set(k); }); m.addEventListener('mouseenter', function () { set(k); }); });
    items.forEach(function (li, k) { var b = $('.dg-t', li); b.addEventListener('click', function () { set(k); }); li.addEventListener('mouseenter', function () { set(k); }); });
    var im = $('img', img); if (im && !im.complete) im.addEventListener('load', draw);
    window.addEventListener('resize', draw); if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
    draw(); setTimeout(draw, 400);
  });

  // ---- v3: request intent (consultation / specifications / feasibility) ----
  function setIntent(k) {
    var target = document.getElementById('inquiry') || document;
    $$('input[name=intent][value=' + k + ']', target).forEach(function (r) { r.checked = true; });
  }
  var intentQ = (location.search.match(/[?&]intent=(\w+)/) || [])[1];
  if (intentQ) setIntent(intentQ);
  $$('[data-intent]').forEach(function (a) { a.addEventListener('click', function () { setIntent(a.dataset.intent); }); });

  // ---- v3: sticky mobile consultation bar ----
  var bar = $('.mcta');
  if (bar) {
    var inq = document.getElementById('inquiry'), ftr = $('.ftr');
    if (inq) { var ba = $('a', bar); ba.setAttribute('href', '#inquiry'); ba.dataset.intent = 'consultation'; ba.addEventListener('click', function () { setIntent('consultation'); }); }
    var tick = function () {
      var vh = window.innerHeight, past = window.scrollY > vh * 0.9;
      var hide = [inq, ftr].some(function (el) { if (!el) return false; var r = el.getBoundingClientRect(); return r.top < vh && r.bottom > 0; });
      bar.hidden = !(past && !hide);
      document.body.classList.toggle('has-mcta', !bar.hidden);
    };
    window.addEventListener('scroll', tick, { passive: true }); window.addEventListener('resize', tick); tick();
  }

  // ---- v2: reveal on scroll ----
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('rv-on');
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    $$('.rv, .sec h2, .ed-row, .st-step, .cap, .spot, .evi .fig').forEach(function (el) { el.classList.add('rv'); io.observe(el); });
  }
})();
