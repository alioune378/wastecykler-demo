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
      var d = {}; new FormData(f).forEach(function (v, k) { d[k] = v; });
      var lead = {
        id: 'L' + Date.now(), company: d.org, contact: d.name, role: d.role, country: d.country, email: d.email,
        type: d.buyer, project: d.project, timeframe: d.timeframe, notes: d.desc || '', territory: d.territory || '', expertise: d.expertise || d.capabilities || '',
        meeting: !!d.meeting, source: 'Website form — ' + (document.documentElement.lang || 'en').toUpperCase() + ' / ' + (f.dataset.variant || 'project'),
        stage: 'New Inquiry', owner: 'Unassigned', next: new Date(Date.now() + 2 * 864e5).toISOString().slice(0, 10), created: new Date().toISOString(), test: true
      };
      var list = []; try { list = JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) {}
      list.unshift(lead); try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {}
      var box = f.parentNode;
      f.hidden = true;
      var ok = box.querySelector('.ok'); ok.hidden = false; ok.focus();
    });
    var again = f.parentNode.querySelector('.again');
    if (again) again.addEventListener('click', function () { f.reset(); f.hidden = false; f.parentNode.querySelector('.ok').hidden = true; });
    $$('input,select,textarea', f).forEach(function (el) { el.addEventListener('input', function () { if (el.getAttribute('aria-invalid') === 'true') err(el, ''); }); });
  });
})();
