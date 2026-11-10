// Wastecykler 2.0 demo — dependency-free static site generator.
// Usage: node build.mjs            -> dist/
// Env:   SITE_URL (canonical base, default https://www.wastecykler.com)   DEMO=0 to drop noindex for production
import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url';
import { MEDIA } from './src/media.mjs';
import { emblem, wordmark, FAVICON, brandSheet } from './src/brand.mjs';
import { strategyPage, leadsPage } from './src/preview.mjs';
import { makeV2 } from './src/v2.mjs';
import { makeV3 } from './src/v3.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(ROOT, 'dist');
const SITE = (process.env.SITE_URL || 'https://www.wastecykler.com').replace(/\/$/, '');
const DEMO = process.env.DEMO !== '0';
export const LOCALES = ['en', 'tr', 'fr', 'ar', 'de', 'ja', 'nl', 'sv', 'es'];

const dict = {};
function deep(a, b) { if (b === undefined) return a; if (Array.isArray(b) || typeof b !== 'object' || b === null) return b; const o = { ...a }; for (const k of Object.keys(b)) o[k] = deep(a?.[k], b[k]); return o; }
for (const l of LOCALES) { dict[l] = (await import(`./src/i18n/${l}.mjs`)).default; for (const x of ['x', 'x3']) if (fs.existsSync(path.join(ROOT, `src/i18n/${x}/${l}.mjs`))) dict[l] = deep(dict[l], (await import(`./src/i18n/${x}/${l}.mjs`)).default); }
const EN = dict.en;

// ---------- helpers ----------
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
function merge(base, over, trail, missing) {
  if (Array.isArray(base)) return over ?? (missing.push(trail), base);
  if (base && typeof base === 'object') {
    const o = {}; for (const k of Object.keys(base)) o[k] = merge(base[k], over?.[k], trail + '.' + k, missing); return o;
  }
  if (over === undefined || over === '') { if (base !== '') missing.push(trail); return base; }
  return over;
}
const MISSING = {};
const T = {}; for (const l of LOCALES) { MISSING[l] = []; T[l] = merge(EN, dict[l], l, MISSING[l]); }

const PRODUCTS = {
  'building-integrated': { imgs: ['inlet-front', 'inlet-panel', 'control-labels'], apps: ['residential', 'commercial', 'municipalities'], status: 'confirm', ico: 'inlet' },
  'modular': { imgs: ['separator-configurations', 'inlet-unit'], apps: ['residential', 'municipalities', 'universities'], status: 'documented-illustration', ico: 'grid' },
  'smart-container': { imgs: ['smart-container-board'], apps: ['municipalities', 'universities'], status: 'concept', ico: 'box' },
  'specialised-streams': { imgs: ['oil-collection', 'control-labels'], apps: ['commercial', 'healthcare', 'universities'], status: 'confirm', ico: 'drop' },
  'automation': { imgs: ['control-cabinet', 'control-labels', 'inlet-panel'], apps: ['residential', 'commercial'], status: 'confirm', ico: 'chip' }
};
const SOLUTIONS = {
  municipalities: { img: 'pilot-chute-labels', prods: ['building-integrated', 'smart-container', 'modular'], ico: 'city' },
  residential: { img: 'inlet-unit', prods: ['building-integrated', 'modular', 'specialised-streams'], ico: 'tower' },
  commercial: { img: 'oil-collection', prods: ['building-integrated', 'specialised-streams', 'automation'], ico: 'store' },
  healthcare: { img: 'control-labels', prods: ['building-integrated', 'specialised-streams'], ico: 'cross' },
  universities: { img: 'inlet-panel', prods: ['modular', 'smart-container', 'specialised-streams'], ico: 'cap' }
};
const ICONS = {
  inlet: '<rect x="4" y="3" width="16" height="18" rx="2"/><rect x="7" y="6" width="7" height="6" rx="1"/><circle cx="17" cy="8" r="1"/><circle cx="17" cy="12" r="1"/><circle cx="17" cy="16" r="1"/>',
  grid: '<rect x="3" y="4" width="5" height="16" rx="1"/><rect x="9.5" y="4" width="5" height="16" rx="1"/><rect x="16" y="4" width="5" height="16" rx="1"/>',
  box: '<path d="M3 8l9-5 9 5v8l-9 5-9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  drop: '<path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/>',
  chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  city: '<path d="M3 21h18M5 21V10l5-3v14M10 21V4l6 3v14M16 21v-8h3v8"/>',
  tower: '<rect x="6" y="2" width="12" height="20" rx="1"/><path d="M9 6h2M13 6h2M9 10h2M13 10h2M9 14h2M13 14h2M10 22v-4h4v4"/>',
  store: '<path d="M3 9l2-5h14l2 5M4 9v11h16V9M3 9h18M9 20v-6h6v6"/>',
  cross: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/>',
  cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  factory: '<path d="M2 21V10l6 4V10l6 4V6h6v15z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  crane: '<path d="M4 21V5h12M4 5l6-2M16 5v4M14 9h4v3h-4zM2 21h8"/>',
  bank: '<path d="M3 10l9-6 9 6M5 10v9M9 10v9M15 10v9M19 10v9M3 21h18"/>',
  doc: '<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h7M9 17h7"/>'
};
const icon = (k, cls = 'ico') => `<span class="${cls}" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[k]}</svg></span>`;
const ARR = '<span class="arr" aria-hidden="true">→</span>';
const ZOOM = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4M11 8v6M8 11h6"/></svg>';

// ---------- page context ----------
function ctx(lang, route) {
  const depth = route.split('/').filter(Boolean).length + 1; // + lang dir
  const rel = '../'.repeat(depth);
  const t = T[lang];
  const u = (r, l = lang) => rel + l + '/' + (r ? r + '/' : '');
  const asset = p => rel + 'assets/' + p;
  return { lang, route, rel, t, u, asset };
}

function srcset(id, ext, c) { const m = MEDIA[id]; return m.w.map(w => `${c.asset(m.folder + '/' + id + '-' + w + '.' + ext)} ${w}w`).join(', '); }
function pic(c, id, { sizes = '(max-width: 800px) 100vw, 50vw', eager = false, caption = '', badge = true, zoom = false, cls = '' } = {}) {
  const m = MEDIA[id]; const big = m.w[m.w.length - 1], small = m.w[0];
  const [rw, rh] = m.ratio.split('/').map(Number);
  const H = Math.round(big * (rh / rw));
  const avif = m.avif ? `<source type="image/avif" srcset="${srcset(id, 'avif', c)}" sizes="${sizes}">` : '';
  return `<figure class="fig ${cls}">${badge ? `<span class="badge ${m.status}">${esc(c.t.status[m.status])}</span>` : ''}<picture>${avif}<source type="image/webp" srcset="${srcset(id, 'webp', c)}" sizes="${sizes}"><img src="${c.asset(m.folder + '/' + id + '-' + small + '.jpg')}" srcset="${srcset(id, 'jpg', c)}" sizes="${sizes}" width="${big}" height="${H}" alt="${esc(c.t.alt[id])}" ${eager ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'} style="aspect-ratio:${m.ratio}"></picture>${zoom ? `<button type="button" class="zoom" data-full="${c.asset(m.folder + '/' + id + '-' + big + '.jpg')}" aria-label="${esc(c.t.cta.enlarge)}">${ZOOM}</button>` : ''}${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
}

// ---------- layout ----------
const NAV = [['technology', 'technology'], ['products', 'products'], ['solutions', 'solutions'], ['innovation', 'innovation'], ['partnerships', 'partnerships'], ['resources', 'resources'], ['about', 'about']];
function layout(c, { title, desc, body, crumbs = [], active = '' }) {
  const { t, lang } = c; const L = t.meta;
  const top = c.route.split('/')[0];
  const isActive = k => (k === top) ? ' aria-current="page"' : '';
  const nav = NAV.map(([k, r]) => `<a href="${c.u(r)}"${isActive(r)}>${esc(t.nav[k])}</a>`).join('');
  const langs = LOCALES.map(l => `<li><a href="${c.u(c.route, l)}" hreflang="${l}" lang="${l}"${l === lang ? ' aria-current="true"' : ''}>${esc(T[l].meta.name)}<span>${l.toUpperCase()}</span></a></li>`).join('');
  const canon = `${SITE}/${lang}/${c.route ? c.route + '/' : ''}`;
  const alts = LOCALES.map(l => `<link rel="alternate" hreflang="${l}" href="${SITE}/${l}/${c.route ? c.route + '/' : ''}">`).join('') + `<link rel="alternate" hreflang="x-default" href="${SITE}/en/${c.route ? c.route + '/' : ''}">`;
  const bc = [{ n: t.common.home, r: '' }, ...crumbs];
  const ld = [{ '@context': 'https://schema.org', '@type': 'Organization', name: 'Wastecykler', url: 'https://www.wastecykler.com' }];
  if (crumbs.length) ld.push({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: bc.map((b, i) => ({ '@type': 'ListItem', position: i + 1, name: b.n, item: `${SITE}/${lang}/${b.r ? b.r + '/' : ''}` })) });
  const crumbHtml = crumbs.length ? `<nav class="crumbs" aria-label="${esc(t.nav.breadcrumb)}"><ol>${bc.map((b, i) => i === bc.length - 1 ? `<li aria-current="page">${esc(b.n)}</li>` : `<li><a href="${c.u(b.r)}">${esc(b.n)}</a></li>`).join('')}</ol></nav>` : '';
  const js = { required: t.form.required, invalidEmail: t.form.invalidEmail, consentReq: t.form.consentReq, close: t.nav.close, pick: t.v2.wiz.pick };
  return `<!doctype html><html lang="${lang}" dir="${L.dir}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title><meta name="description" content="${esc(desc)}">${DEMO ? '<meta name="robots" content="noindex,nofollow">' : ''}
<link rel="canonical" href="${canon}">${alts}
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:type" content="website"><meta property="og:locale" content="${lang}">
<meta name="theme-color" content="#071F39"><link rel="icon" href="${c.rel}favicon.svg" type="image/svg+xml"><link rel="preload" href="${c.rel}assets/fonts/Inter-Regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="${c.rel}assets/fonts/InterDisplay-ExtraBold.woff" as="font" type="font/woff" crossorigin><link rel="stylesheet" href="${c.rel}assets/site.css">
<script type="application/ld+json">${JSON.stringify(ld.length === 1 ? ld[0] : ld)}</script></head><body>
<a class="skip" href="#main">${esc(t.nav.skip)}</a>
<div class="demo" role="note">${esc(L.demoBanner)}</div>
<header class="hdr"><div class="wrap in"><a class="logo" href="${c.u('')}" aria-label="Wastecykler — ${esc(t.nav.home)}">${emblem(36).replace('<svg', '<svg class="em"')}${wordmark({ height: 21 }).replace('<svg', '<svg class="wm"')}</a>
<nav class="nav" aria-label="${esc(t.nav.menu)}">${nav}</nav>
<div class="tools"><details class="lang"><summary aria-label="${esc(t.nav.language)}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg><span class="lbl">${esc(L.name)}</span> <span aria-hidden="true">▾</span></summary><ul>${langs}</ul></details>
<a class="btn btn-g hcta" href="${c.u('contact')}?intent=consultation"><span class="lc">${esc(t.nav.contact)}</span><span class="ls">${esc(t.v3.consultShort)}</span></a>
<button class="burger" type="button" aria-expanded="false" aria-controls="mnav" aria-label="${esc(t.nav.menu)}"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button></div></div>
<nav class="mnav" id="mnav" data-open="false" aria-label="${esc(t.nav.menu)}"><ul class="wrap">${[['home', '']].concat(NAV).concat([['contact', 'contact']]).map(([k, r]) => `<li><a href="${c.u(r)}"${(r === top && (r || !c.route)) ? ' aria-current="page"' : ''}>${esc(t.nav[k])}</a></li>`).join('')}</ul></nav></header>
<main id="main" tabindex="-1">${crumbHtml ? body.replace('<!--crumbs-->', crumbHtml) : body.replace('<!--crumbs-->', '')}</main>
<div class="mcta" hidden><span>${esc(t.v3.sticky)}</span><a class="btn btn-g" href="${c.u('contact')}?intent=consultation">${esc(t.v3.consultShort)} ${ARR}</a></div>
<footer class="ftr"><div class="wrap"><div class="cols">
<div class="brandcol"><a class="logo" href="${c.u('')}" aria-label="Wastecykler">${emblem(36)}${wordmark({ dark: true, height: 20 })}</a><p style="margin-top:14px">${esc(t.footer.tagline)}</p><p class="small">${esc(t.footer.contactNote)}</p></div>
<div><h3>${esc(t.footer.explore)}</h3><ul>${['technology', 'products', 'solutions', 'resources'].map(k => `<li><a href="${c.u(k)}">${esc(t.nav[k])}</a></li>`).join('')}</ul></div>
<div><h3>${esc(t.footer.company)}</h3><ul>${[['innovation', 'innovation'], ['partnerships', 'partnerships'], ['about', 'about'], ['contact', 'contact']].map(([k, r]) => `<li><a href="${c.u(r)}">${esc(t.nav[k])}</a></li>`).join('')}</ul></div>
<div><h3>${esc(t.nav.language)}</h3><ul>${LOCALES.map(l => `<li><a href="${c.u(c.route, l)}" lang="${l}" hreflang="${l}">${esc(T[l].meta.name)}</a></li>`).join('')}</ul></div>
</div><div class="base"><span>© Wastecykler · ${esc(t.footer.demo)}</span></div></div></footer>
<script type="application/json" id="i18n">${JSON.stringify(js).replace(/</g, '\\u003c')}</script><script src="${c.rel}assets/site.js" defer></script></body></html>`;
}

function pageHero(c, { eyebrow = '', h1, lead, img, extra = '' }) {
  return `<section class="hero phero">${img ? `<div class="bg"><picture>${MEDIA[img].avif ? `<source type="image/avif" srcset="${srcset(img, 'avif', c)}" sizes="100vw">` : ''}<source type="image/webp" srcset="${srcset(img, 'webp', c)}" sizes="100vw"><img src="${c.asset(MEDIA[img].folder + '/' + img + '-' + MEDIA[img].w[0] + '.jpg')}" alt="" fetchpriority="high"></picture></div><span class="ai-note">${esc(c.t.status['conceptual-ai'])}</span>` : ''}
<div class="wrap hero-g"><div><!--crumbs-->${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}<h1>${esc(h1)}</h1>${lead ? `<p class="lead">${esc(lead)}</p>` : ''}${extra}</div></div></section>`;
}

// ---------- form ----------
let FORM_N = 0;
function form(c, variant = 'project', { title } = {}) {
  const f = c.t.form; const id = 'f' + (++FORM_N);
  const fld = (name, label, type = 'text', req = true, full = false, extra = '') => `<div class="field${full ? ' full' : ''}"><label for="${id}-${name}">${esc(label)}${req ? ' *' : ''}</label>${type === 'textarea' ? `<textarea id="${id}-${name}" name="${name}"${req ? ' required' : ''} aria-describedby="${id}-${name}-err ${id}-${name}-h"></textarea><span class="hint" id="${id}-${name}-h">${esc(f.descHint)}</span>` : `<input id="${id}-${name}" name="${name}" type="${type}"${req ? ' required' : ''}${extra} aria-describedby="${id}-${name}-err">`}<span class="err" id="${id}-${name}-err" aria-live="polite"></span></div>`;
  const defaultBuyer = { partner: 'partner', distributor: 'distributor', manufacturing: 'manufacturer', technology: 'partner', developers: 'developer', institutional: 'municipality' }[variant] || '';
  const sel = `<div class="field"><label for="${id}-buyer">${esc(f.buyer)} *</label><select id="${id}-buyer" name="buyer" required aria-describedby="${id}-buyer-err"><option value="">—</option>${Object.entries(f.buyerOpts).map(([k, v]) => `<option value="${k}"${k === defaultBuyer ? ' selected' : ''}>${esc(v)}</option>`).join('')}</select><span class="err" id="${id}-buyer-err" aria-live="polite"></span></div>`;
  const tf = `<div class="field"><label for="${id}-timeframe">${esc(f.timeframe)}</label><select id="${id}-timeframe" name="timeframe">${Object.entries(f.timeOpts).map(([k, v]) => `<option value="${k}">${esc(v)}</option>`).join('')}</select></div>`;
  let extra = '';
  if (variant === 'distributor') extra = fld('territory', f.territory) + fld('capabilities', f.capabilities, 'text', false);
  if (['partner', 'technology', 'manufacturing'].includes(variant)) extra = fld('expertise', f.expertise, 'text', true, true);
  return `<div class="form"><h3>${esc(title || f.title)}</h3><form class="lead" data-variant="${variant}" action="#" method="post">
<div class="fgrid">${fld('org', f.org)}${fld('name', f.name, 'text', true, false, ' autocomplete="name"')}${fld('role', f.role, 'text', false)}${fld('country', f.country, 'text', true, false, ' autocomplete="country-name"')}${fld('email', f.email, 'email', true, false, ' autocomplete="email" class="email" dir="ltr"')}${sel}${extra}${fld('project', f.project, 'text', variant === 'project', true)}${tf}
${fld('desc', f.desc, 'textarea', false, true)}
<div class="field full"><label class="check"><input type="checkbox" name="meeting" value="1"> ${esc(f.meeting)}</label></div>
<div class="field full"><label class="check"><input type="checkbox" id="${id}-consent" name="consent" required aria-describedby="${id}-consent-err"> ${esc(f.consent)}</label><span class="err" id="${id}-consent-err" aria-live="polite"></span></div>
<div class="hp" aria-hidden="true"><label>Website<input name="website" tabindex="-1" autocomplete="off"></label></div>
<div class="full"><button class="btn btn-g" type="submit">${esc(f.submit)} ${ARR}</button></div></div>
<p class="demo-note">ⓘ ${esc(f.demoNote)}</p></form>
<div class="ok" hidden tabindex="-1" role="status"><div class="tick"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg></div><h3>${esc(f.success)}</h3><p>${esc(f.successText)}</p><button type="button" class="btn btn-o again">${esc(f.again)}</button></div></div>`;
}

// ---------- pages ----------
function home(c) {
  const { t } = c, h = t.home;
  const hero = `<section class="hero"><div class="bg"><picture><source type="image/avif" srcset="${srcset('city-bluehour', 'avif', c)}" sizes="100vw"><source type="image/webp" srcset="${srcset('city-bluehour', 'webp', c)}" sizes="100vw"><img src="${c.asset('architecture/city-bluehour-800.jpg')}" alt="${esc(t.alt['city-bluehour'])}" fetchpriority="high"></picture></div>
<div class="wrap hero-g"><div><p class="eyebrow">${esc(h.eyebrow)}</p><h1>${esc(h.h1)}</h1><p class="lead">${esc(h.sub)}</p><div class="btns" style="margin-top:28px"><a class="btn btn-g" href="${c.u('technology')}">${esc(t.cta.explore)} ${ARR}</a><a class="btn btn-o" href="${c.u('contact')}">${esc(t.cta.discuss)}</a></div></div>
<div class="panel">${pic(c, 'inlet-front', { eager: true, caption: esc(h.panelCaption), sizes: '(max-width:900px) 92vw, 480px' })}</div></div><span class="ai-note">${esc(t.status['conceptual-ai'])}</span></section>`;
  const offer = `<section class="sec-sm white"><div class="wrap offer"><h2>${esc(h.offerTitle)}</h2><p>${esc(h.offer)}</p><p>${esc(h.offerFor)}</p></div></section>`;
  const how = `<section class="sec"><div class="wrap"><p class="eyebrow">01</p><h2 style="max-width:22ch">${esc(h.howTitle)}</h2>
<div class="steps" style="margin-top:32px">${h.how.map((s, i) => `<button type="button" class="step" aria-pressed="${i === 0}"><b>0${i + 1}</b><h3>${esc(s.t)}</h3><span>${esc(s.d)}</span></button>`).join('')}</div><div class="flow" aria-hidden="true"><i></i></div><p class="small muted" style="margin-top:12px">${esc(h.howNote)}</p></div></section>`;
  const tabs = [['inlet', 'inlet-panel'], ['controls', 'control-labels'], ['oil', 'oil-collection'], ['configs', 'separator-configurations']];
  const spot = `<section class="sec dark"><div class="wrap"><p class="eyebrow">02</p><h2>${esc(h.spotTitle)}</h2><p class="lead" style="margin-bottom:28px">${esc(h.spotIntro)}</p>
<div class="tabs" role="tablist" aria-label="${esc(h.spotTitle)}">${tabs.map(([k], i) => `<button role="tab" id="sp-${k}" aria-controls="spp-${k}" aria-selected="${i === 0}" tabindex="${i ? -1 : 0}">${esc(h.tabs[k])}</button>`).join('')}</div>
${tabs.map(([k, img], i) => `<div role="tabpanel" id="spp-${k}" aria-labelledby="sp-${k}"${i ? ' hidden' : ''} class="g2">${pic(c, img, { zoom: true, cls: k === 'configs' ? 'contain' : '' })}<div><h3>${esc(h.tabs[k])}</h3><p class="lead">${esc(h.spot[k])}</p>${k === 'configs' ? `<p class="note">${esc(t.tech.configs.note)}</p>` : ''}<a class="btn btn-o" href="${c.u('technology')}">${esc(t.cta.explore)} ${ARR}</a></div></div>`).join('')}</div></section>`;
  const apps = `<section class="sec"><div class="wrap"><p class="eyebrow">03</p><h2>${esc(h.appsTitle)}</h2><p class="lead" style="margin-bottom:28px">${esc(h.appsIntro)}</p><div class="g5">${Object.entries(SOLUTIONS).map(([k, s]) => `<a class="card" href="${c.u('solutions/' + k)}">${icon(s.ico)}<h3>${esc(t.solutions.items[k].name)}</h3><span class="small">${esc(t.solutions.items[k].short)}</span><span class="more">${esc(t.cta.view)} ${ARR}</span></a>`).join('')}</div></div></section>`;
  const hist = `<section class="sec white"><div class="wrap g2"><div>${pic(c, 'presentation', { caption: esc(t.alt.presentation) })}</div><div><p class="eyebrow">04</p><h2>${esc(h.histTitle)}</h2><p class="lead">${esc(h.histText)}</p><p class="note">${esc(h.histNote)}</p><a class="btn btn-n" href="${c.u('innovation')}">${esc(t.nav.innovation)} ${ARR}</a></div></div></section>`;
  const part = `<section class="sec"><div class="wrap g2"><div><p class="eyebrow">05</p><h2>${esc(h.partTitle)}</h2><p class="lead">${esc(h.partText)}</p><div class="btns"><a class="btn btn-n" href="${c.u('partnerships')}">${esc(t.cta.partner)} ${ARR}</a><a class="btn btn-o" href="${c.u('contact')}?role=distributor">${esc(t.cta.distributor)}</a></div></div><ul class="list">${h.partList.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div></section>`;
  const fin = `<section class="sec dark"><div class="wrap g2" style="align-items:start"><div><h2>${esc(h.finalTitle)}</h2><p class="lead">${esc(h.finalText)}</p><div class="btns" style="flex-direction:column;align-items:flex-start"><a class="btn btn-g" href="${c.u('contact')}">${esc(t.cta.briefing)} ${ARR}</a><a class="btn btn-o" href="${c.u('contact')}">${esc(t.cta.discuss)}</a><a class="btn btn-o" href="${c.u('partnerships')}">${esc(t.cta.partner)}</a></div></div>${form(c, 'project')}</div></section>`;
  return layout(c, { title: h.title, desc: h.desc, body: hero + offer + how + spot + apps + hist + part + fin });
}

function technology(c) {
  const { t } = c, x = t.tech;
  const colors = ['#5b6b7d', '#20B978', '#1f6fd1', '#e0a100', '#8b5cf6', '#E53935'];
  const cfgTabs = [2, 3, 4, 6];
  const body = pageHero(c, { eyebrow: t.nav.technology, h1: x.h1, lead: x.intro, img: 'city-bluehour', extra: `<div class="btns" style="margin-top:24px"><a class="btn btn-g" href="${c.u('contact')}">${esc(t.cta.briefing)} ${ARR}</a></div>` }) +
    `<section class="sec white"><div class="wrap"><div class="sh"><p class="eyebrow">${esc(t.status.authentic)}</p><h2>${esc(t.v3.diagramTitle)}</h2><p class="lead">${esc(t.v3.diagramIntro)}</p></div>${V3.diagram(c)}</div></section>
<section class="sec"><div class="wrap"><div class="sh"><h2>${esc(t.v3.systemTitle)}</h2><p class="lead">${esc(t.v3.systemIntro)}</p></div>${V3.system(c)}</div></section>
<section class="sec" id="configurations"><div class="wrap"><h2>${esc(x.configs.t)}</h2><p class="lead">${esc(x.configs.p)}</p>${pic(c, 'separator-configurations', { cls: 'contain', zoom: true })}
<div style="margin-top:28px">${V2.schematicCfg(c)}</div></section>
<section class="sec white"><div class="wrap g2">${pic(c, 'inlet-panel', { zoom: true })}<div><h2>${esc(x.interface.t)}</h2><p class="lead">${esc(x.interface.p)}</p></div></div></section>
<section class="sec"><div class="wrap g2"><div><h2>${esc(x.controls.t)}</h2><p class="lead">${esc(x.controls.p)}</p></div>${pic(c, 'control-labels', { zoom: true })}</div></section>
<section class="sec dark" id="used-oil"><div class="wrap g2">${pic(c, 'oil-collection', { zoom: true })}<div><p class="eyebrow">${esc(t.home.tabs.oil)}</p><h2>${esc(x.oil.t)}</h2><p class="lead">${esc(x.oil.p)}</p><a class="btn btn-g" href="${c.u('products/specialised-streams')}">${esc(t.products.items['specialised-streams'].name)} ${ARR}</a></div></div></section>
<section class="sec white"><div class="wrap g2"><div><h2>${esc(x.eng.t)}</h2><p>${esc(x.eng.p)}</p><ul class="list">${x.eng.list.map(i => `<li>${esc(i)}</li>`).join('')}</ul><p class="note" style="margin-top:20px">${esc(x.engNote)}</p></div>${pic(c, 'control-cabinet', { zoom: true })}</div></section>
<section class="sec"><div class="wrap g2" style="align-items:start"><div><h2>${esc(x.docs.t)}</h2><p>${esc(x.docs.p)}</p>${x.docs.items.map((d, i) => `<details class="acc"${i === 0 ? ' open' : ''}><summary>${esc(d.t)}</summary><div><p>${esc(d.d)}</p><span class="badge historical">${esc(t.v2.docOnRequest)}</span>${i === 4 ? `<p style="margin-top:12px"><a href="${c.u('contact')}">${esc(t.cta.briefing)} ${ARR}</a></p>` : ''}</div></details>`).join('')}</div>
<div><h2>${esc(x.faqTitle)}</h2>${x.faq.map(q => `<details class="acc"><summary>${esc(q.q)}</summary><div><p>${esc(q.a)}</p></div></details>`).join('')}</div></div></section>
${V3.convert(c, { title: t.cta.briefing })}`;
  return layout(c, { title: x.title, desc: x.desc, body, crumbs: [{ n: t.nav.technology, r: 'technology' }] });
}

function productsIndex(c) {
  const { t } = c, p = t.products;
  const body = pageHero(c, { eyebrow: t.nav.products, h1: p.h1, lead: p.intro }) +
    `<section class="sec"><div class="wrap g3">${Object.entries(PRODUCTS).map(([k, d]) => `<a class="card" href="${c.u('products/' + k)}">${pic(c, d.imgs[0], { sizes: '(max-width:640px) 92vw, 380px', cls: d.imgs[0] === 'separator-configurations' || d.imgs[0] === 'smart-container-board' ? 'contain' : '' })}<span class="badge ${d.status}">${esc(t.status[d.status])}</span><h3>${esc(p.items[k].name)}</h3><span>${esc(p.items[k].short)}</span><span class="more">${esc(t.cta.view)} ${ARR}</span></a>`).join('')}</div></div></section>`;
  return layout(c, { title: p.title, desc: p.desc, body, crumbs: [{ n: t.nav.products, r: 'products' }] });
}

function product(c, k) {
  const { t } = c, p = t.products, it = p.items[k], d = PRODUCTS[k], L = p.labels;
  const m0 = MEDIA[d.imgs[0]];
  const thumbs = d.imgs.length > 1 ? `<div class="thumbs">${d.imgs.map((id, i) => { const m = MEDIA[id]; return `<button type="button" aria-pressed="${i === 0}" aria-label="${esc(t.alt[id])}" data-src="${c.asset(m.folder + '/' + id + '-' + m.w[0] + '.jpg')}" data-webp="${srcset(id, 'webp', c)}" data-full="${c.asset(m.folder + '/' + id + '-' + m.w[m.w.length - 1] + '.jpg')}" data-alt="${esc(t.alt[id])}" data-status="${m.status}" data-label="${esc(t.status[m.status])}"><img src="${c.asset(m.folder + '/' + id + '-' + m.w[0] + '.jpg')}" alt="" loading="lazy"></button>`; }).join('')}</div>` : '';
  const gallery = `<div class="gal"><div class="main">${pic(c, d.imgs[0], { eager: true, zoom: true, cls: ['separator-configurations', 'smart-container-board'].includes(d.imgs[0]) ? 'contain' : '', sizes: '(max-width:800px) 92vw, 560px' })}</div>${thumbs}</div>`;
  const related = Object.keys(PRODUCTS).filter(x => x !== k).slice(0, 3);
  const body = `<section class="sec-sm white"><div class="wrap"><!--crumbs--><div class="g2" style="align-items:start">${gallery}<div><span class="badge ${d.status}">${esc(t.status[d.status])}</span><h1 style="font-size:clamp(1.9rem,1.3rem + 2vw,2.9rem);margin-top:12px">${esc(it.name)}</h1><p class="lead">${esc(it.overview)}</p>
<h2 style="font-size:1.1rem;margin-top:24px">${esc(L.features)}</h2><ul class="list">${it.features.map(f => `<li>${esc(f)}</li>`).join('')}</ul>
<dl class="kv" style="margin-top:20px"><dt>${esc(L.configuration)}</dt><dd>${esc(it.config)}</dd></dl>
<div class="btns" style="margin-top:28px"><a class="btn btn-g" href="${c.u('contact')}">${esc(t.cta.briefing)} ${ARR}</a><a class="btn btn-o" href="${c.u('contact')}">${esc(t.cta.installation)}</a></div></div></div></div></section>
<section class="sec"><div class="wrap g2" style="align-items:start"><div><h2>${esc(L.applications)}</h2><div style="display:grid;gap:10px">${d.apps.map(a => `<a class="card" style="flex-direction:row;align-items:center" href="${c.u('solutions/' + a)}">${icon(SOLUTIONS[a].ico)}<strong style="color:var(--navy)">${esc(t.solutions.items[a].name)}</strong><span class="more" style="margin-inline-start:auto">${ARR}</span></a>`).join('')}</div></div>
<div><h2>${esc(L.documentation)}</h2><p>${esc(L.docNote)}</p>${t.tech.docs.items.slice(0, 4).map(x => `<details class="acc"><summary>${esc(x.t)}</summary><div><p>${esc(x.d)}</p><span class="badge historical">${esc(t.v2.docOnRequest)}</span></div></details>`).join('')}</div></div></section>
<section class="sec white"><div class="wrap"><h2>${esc(t.nav.products)}</h2><div class="g3">${related.map(r => `<a class="card" href="${c.u('products/' + r)}">${icon(PRODUCTS[r].ico)}<h3>${esc(p.items[r].name)}</h3><span>${esc(p.items[r].short)}</span><span class="more">${esc(t.cta.view)} ${ARR}</span></a>`).join('')}</div></div></section>`;
  return layout(c, { title: `${it.name} — Wastecykler`, desc: `${it.short} ${it.overview}`.slice(0, 158), body, crumbs: [{ n: t.nav.products, r: 'products' }, { n: it.name, r: 'products/' + k }] });
}

function solutionsIndex(c) {
  const { t } = c, s = t.solutions;
  const body = pageHero(c, { eyebrow: t.nav.solutions, h1: s.h1, lead: s.intro, img: 'city-green' }) +
    `<section class="sec"><div class="wrap g3">${Object.entries(SOLUTIONS).map(([k, d]) => `<a class="card" href="${c.u('solutions/' + k)}">${icon(d.ico)}<h3>${esc(s.items[k].name)}</h3><span>${esc(s.items[k].intro)}</span><span class="more">${esc(t.cta.view)} ${ARR}</span></a>`).join('')}</div></div></section>`;
  return layout(c, { title: s.title, desc: s.desc, body, crumbs: [{ n: t.nav.solutions, r: 'solutions' }] });
}

function solution(c, k) {
  const { t } = c, s = t.solutions, it = s.items[k], d = SOLUTIONS[k];
  const body = `<section class="hero phero"><div class="wrap hero-g" style="grid-template-columns:1.1fr .9fr"><div><!--crumbs-->${icon(d.ico)}<h1 style="margin-top:16px">${esc(it.name)}</h1><p class="lead">${esc(it.intro)}</p><div class="btns" style="margin-top:24px"><a class="btn btn-g" href="${c.u('contact')}">${esc(t.cta.discuss)} ${ARR}</a></div></div><div class="panel">${pic(c, d.img, { eager: true, sizes: '(max-width:900px) 92vw, 460px' })}</div></div></section>
<section class="sec white"><div class="wrap g2" style="align-items:start"><div><h2>${esc(s.labels.focus)}</h2><ul class="list">${it.focus.map(f => `<li>${esc(f)}</li>`).join('')}</ul>${it.note ? `<p class="note" style="margin-top:20px">${esc(it.note)}</p>` : ''}</div>
<div><h2>${esc(s.labels.products)}</h2><div style="display:grid;gap:10px">${d.prods.map(p => `<a class="card" style="flex-direction:row;align-items:center" href="${c.u('products/' + p)}">${icon(PRODUCTS[p].ico)}<span><strong style="color:var(--navy);display:block">${esc(t.products.items[p].name)}</strong><span class="small">${esc(t.products.items[p].short)}</span></span></a>`).join('')}</div></div></div></section>
<section class="sec"><div class="wrap g2" style="align-items:start"><div><h2>${esc(s.labels.next)}</h2><p class="lead">${esc(t.home.finalText)}</p><ul class="list">${t.tech.faq.map(q => `<li>${esc(q.q)}</li>`).join('')}</ul></div>${form(c, k === 'municipalities' ? 'institutional' : 'project', { title: t.cta.discuss })}</div></section>`;
  return layout(c, { title: `${it.name} — Wastecykler`, desc: `${it.intro}`.slice(0, 158), body, crumbs: [{ n: t.nav.solutions, r: 'solutions' }, { n: it.name, r: 'solutions/' + k }] });
}

function innovation(c) {
  const { t } = c, x = t.innov;
  const imgs = [null, null, ['pilot-chute-labels', 'community-installation'], 'presentation', null];
  const body = pageHero(c, { eyebrow: t.nav.innovation, h1: x.h1, lead: x.intro, extra: `<div class="legend" style="margin-top:20px">${['authentic', 'historical', 'document', 'proposed'].map(k => `<span class="badge ${k}">${esc(t.status[k])}</span>`).join('')}</div>` }) +
    `<section class="sec white"><div class="wrap g2" style="align-items:start"><div><h2>${esc(x.timelineTitle)}</h2><ol class="tl">${x.timeline.map((e, i) => `<li><span class="y">${esc(e.y)}</span><div><span class="badge ${e.s}">${esc(t.status[e.s])}</span><h3 style="margin-top:8px">${esc(e.t)}</h3><p>${esc(e.d)}</p>${imgs[i] ? `<div style="display:grid;grid-template-columns:repeat(${[].concat(imgs[i]).length},1fr);gap:10px">${[].concat(imgs[i]).map(id => pic(c, id, { badge: false, zoom: true, sizes: '(max-width:800px) 45vw, 240px' })).join('')}</div>` : ''}</div></li>`).join('')}</ol></div>
<div style="position:sticky;top:96px">${pic(c, 'municipal-sheet', { zoom: true, caption: esc(t.alt['municipal-sheet']), sizes: '(max-width:800px) 92vw, 520px' })}</div></div></section>
<section class="sec" id="patent"><div class="wrap g2" style="align-items:start"><div style="max-width:440px">${pic(c, 'tr-patent-certificate', { zoom: true, cls: 'contain', sizes: '(max-width:800px) 92vw, 440px' })}</div><div><h2>${esc(x.patentTitle)}</h2><p>${esc(x.patentText)}</p><dl class="kv">${x.patentFacts.map(([a, b]) => `<dt>${esc(a)}</dt><dd${/TR 2013|Karaca|ayrıştırma/.test(b) ? ' lang="tr"' : ''}>${esc(b)}</dd>`).join('')}</dl><p class="note" style="margin-top:20px">${esc(x.patentNote)}</p>
</div></div></section>
<section class="sec white"><div class="wrap"><h2>${esc(t.v2.engTitle)}</h2><div class="capg">${t.v2.eng.map((e, i) => `<div class="cap">${pic(c, ['inlet-front', 'control-cabinet', 'separator-configurations', 'control-labels'][i], { badge: false, cls: i === 2 ? 'contain' : '', sizes: '(max-width:700px) 46vw, 280px' })}<h3>${esc(e.t)}</h3><p class="small">${esc(e.d)}</p></div>`).join('')}</div></div></section>
<section class="sec dark band"><div class="wrap g2"><div><span class="badge proposed">${esc(t.status.proposed)}</span><h2 style="margin-top:12px">${esc(t.v2.expTitle)}</h2><p class="lead">${esc(t.v2.expNote)}</p><a class="btn btn-g" href="${c.u('partnerships')}">${esc(t.cta.partner)} ${ARR}</a></div><ol class="nlist">${t.v2.exp.map((x, i) => `<li><span>0${i + 1}</span>${esc(x)}</li>`).join('')}</ol></div></section>
<section class="sec dark"><div class="wrap g2">${pic(c, 'smart-container-board', { zoom: true, cls: 'contain' })}<div><h2>${esc(t.products.items['smart-container'].name)}</h2><p class="lead">${esc(t.products.items['smart-container'].overview)}</p><a class="btn btn-g" href="${c.u('products/smart-container')}">${esc(t.cta.view)} ${ARR}</a></div></div></section>`;
  return layout(c, { title: x.title, desc: x.desc, body, crumbs: [{ n: t.nav.innovation, r: 'innovation' }] });
}

function partnerships(c) {
  const { t } = c, x = t.partners; const ic = { technology: 'gear', manufacturing: 'factory', distribution: 'globe', developers: 'crane', institutional: 'bank' };
  const keys = Object.keys(x.items);
  const body = pageHero(c, { eyebrow: t.nav.partnerships, h1: x.h1, lead: x.intro, img: 'city-green' }) +
    `<section class="sec"><div class="wrap"><div class="tabs" role="tablist" aria-label="${esc(x.h1)}">${keys.map((k, i) => `<button role="tab" id="pt-${k}" aria-controls="pp-${k}" aria-selected="${i === 0}" tabindex="${i ? -1 : 0}">${esc(x.items[k].name)}</button>`).join('')}</div>
${keys.map((k, i) => `<div role="tabpanel" id="pp-${k}" aria-labelledby="pt-${k}"${i ? ' hidden' : ''}><div class="g2" style="align-items:start"><div>${icon(ic[k])}<h2 style="margin-top:16px">${esc(x.items[k].name)}</h2><p class="lead">${esc(x.items[k].intro)}</p><ul class="list">${x.items[k].list.map(l => `<li>${esc(l)}</li>`).join('')}</ul></div>${V2.wizard(c, { technology: 'partner', manufacturing: 'manufacturer', distribution: 'distributor', developers: 'developer', institutional: 'municipality' }[k], { title: k === 'distribution' ? t.cta.distributor : k === 'manufacturing' ? t.cta.manufacturing : t.cta.partner })}</div></div>`).join('')}</div></section>`;
  return layout(c, { title: x.title, desc: x.desc, body, crumbs: [{ n: t.nav.partnerships, r: 'partnerships' }] });
}

function resources(c) {
  const { t } = c, x = t.resources;
  const body = pageHero(c, { eyebrow: t.nav.resources, h1: x.h1, lead: x.intro }) +
    `<section class="sec white"><div class="wrap"><h2>${esc(x.docsTitle)}</h2><div class="g3">${t.tech.docs.items.map(d => `<div class="card">${icon('doc')}<h3>${esc(d.t)}</h3><span>${esc(d.d)}</span><span class="badge historical" style="align-self:flex-start">${esc(t.v2.docOnRequest)}</span><a class="more" href="${c.u('contact')}">${esc(t.cta.briefing)} ${ARR}</a></div>`).join('')}</div></div></section>
<section class="sec"><div class="wrap"><h2>${esc(x.articlesTitle)}</h2><div class="g3">${x.articles.map(a => `<article class="card"><span class="badge historical" style="align-self:flex-start">${esc(t.v2.comingSoon)}</span><h3>${esc(a.t)}</h3><span>${esc(a.d)}</span></article>`).join('')}</div></div></section>`;
  return layout(c, { title: x.title, desc: x.desc, body, crumbs: [{ n: t.nav.resources, r: 'resources' }] });
}

function about(c) {
  const { t } = c, x = t.about;
  const body = pageHero(c, { eyebrow: t.nav.about, h1: x.h1, lead: x.story[0] }) +
    `<section class="sec white"><div class="wrap g2"><div>${x.story.slice(1).map(p => `<p class="lead">${esc(p)}</p>`).join('')}<h2 style="margin-top:28px">${esc(x.verifyTitle)}</h2><p class="note">${esc(x.verify)}</p><div class="btns" style="margin-top:20px"><a class="btn btn-n" href="${c.u('innovation')}">${esc(t.nav.innovation)} ${ARR}</a><a class="btn btn-o" href="${c.u('partnerships')}">${esc(t.nav.partnerships)}</a></div></div>${pic(c, 'presentation', { zoom: true })}</div></section>`;
  return layout(c, { title: x.title, desc: x.desc, body, crumbs: [{ n: t.nav.about, r: 'about' }] });
}

function contact(c) {
  const { t } = c, x = t.contact;
  const body = pageHero(c, { eyebrow: t.nav.contact, h1: x.h1, lead: x.intro }) +
    `<section class="sec"><div class="wrap" style="max-width:860px">${V2.wizard(c, '')}<p class="small muted" style="margin-top:20px">${esc(t.footer.contactNote)}</p></div></section>`;
  return layout(c, { title: x.title, desc: x.desc, body, crumbs: [{ n: t.nav.contact, r: 'contact' }] });
}

const V2 = makeV2({ esc, pic, srcset, MEDIA, ARR, icon, PRODUCTS, SOLUTIONS, layout, pageHero });
const V3 = makeV3({ esc, pic, srcset, MEDIA, ARR, PRODUCTS, SOLUTIONS, layout, V2 });
// ---------- write ----------
function write(rel, html) { const f = path.join(OUT, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, html); }
fs.rmSync(OUT, { recursive: true, force: true });
fs.cpSync(path.join(ROOT, 'src/assets'), path.join(OUT, 'assets'), { recursive: true });
fs.copyFileSync(path.join(ROOT, 'src/site.css'), path.join(OUT, 'assets/site.css'));
fs.copyFileSync(path.join(ROOT, 'src/site.js'), path.join(OUT, 'assets/site.js'));
fs.writeFileSync(path.join(OUT, 'favicon.svg'), FAVICON);
const routes = [];
for (const lang of LOCALES) {
  const P = (route, fn) => { FORM_N = 0; V2.resetWizard(); V3.reset(); write(`${lang}/${route ? route + '/' : ''}index.html`, fn(ctx(lang, route))); if (lang === 'en') routes.push(route); };
  P('', V3.home); P('technology', technology); P('products', productsIndex);
  for (const k of Object.keys(PRODUCTS)) P('products/' + k, c => product(c, k));
  P('solutions', V3.solutionsIndex); for (const k of Object.keys(SOLUTIONS)) P('solutions/' + k, c => V3.solution(c, k));
  P('innovation', innovation); P('partnerships', partnerships); P('resources', resources); P('about', about); P('contact', contact);
}
write('index.html', `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Wastecykler</title><link rel="icon" href="favicon.svg"><meta http-equiv="refresh" content="0;url=en/"><script>var l=(navigator.language||'en').slice(0,2),L=${JSON.stringify(LOCALES)};location.replace((L.indexOf(l)>-1?l:'en')+'/')</script></head><body><p><a href="en/">Continue to the Wastecykler demo</a></p>${LOCALES.map(l => `<a href="${l}/" hreflang="${l}">${T[l].meta.name}</a>`).join(' · ')}</body></html>`);
write('brand/index.html', brandSheet());
write('preview/strategy/index.html', strategyPage({ LOCALES, T }));
write('preview/leads/index.html', leadsPage());
write('robots.txt', DEMO ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\nDisallow: /preview/\nSitemap: ${SITE}/sitemap.xml\n`);
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${LOCALES.flatMap(l => routes.map(r => `<url><loc>${SITE}/${l}/${r ? r + '/' : ''}</loc>${LOCALES.map(a => `<xhtml:link rel="alternate" hreflang="${a}" href="${SITE}/${a}/${r ? r + '/' : ''}"/>`).join('')}</url>`)).join('\n')}\n</urlset>\n`);
write('_headers', `/*\n  X-Robots-Tag: noindex, nofollow\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: SAMEORIGIN\n/assets/*\n  Cache-Control: public, max-age=604800\n/*.html\n  Cache-Control: public, max-age=0, must-revalidate\n`);
write('404.html', `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Page not found — Wastecykler</title><link rel="stylesheet" href="/assets/site.css"></head><body><main class="wrap sec"><h1>Page not found</h1><p><a class="btn btn-g" href="/en/">Go to homepage</a></p></main></body></html>`);
fs.writeFileSync(path.join(OUT, 'media-manifest.json'), JSON.stringify(MEDIA, null, 2));
const miss = Object.fromEntries(Object.entries(MISSING).filter(([l, v]) => v.length && l !== 'en'));
console.log(`Built ${LOCALES.length} locales × ${routes.length} pages = ${LOCALES.length * routes.length} pages → dist/`);
if (Object.keys(miss).length) { console.log('Missing translation keys (fell back to English):'); for (const [l, v] of Object.entries(miss)) console.log(' ', l, v.length, v.slice(0, 8).join(', ')); }

// Cache-busting: version CSS/JS URLs by content hash so new HTML never pairs with stale assets.
{
  const crypto = await import('node:crypto');
  const h = f => crypto.createHash('sha256').update(fs.readFileSync(path.join(OUT, 'assets', f))).digest('hex').slice(0, 10);
  const V = { css: h('site.css'), js: h('site.js') };
  const walk = d => { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p); else if (f.endsWith('.html')) { const s = fs.readFileSync(p, 'utf8'); const t = s.replace(/assets\/site\.css(?=")/g, `assets/site.css?v=${V.css}`).replace(/assets\/site\.js(?=")/g, `assets/site.js?v=${V.js}`); if (t !== s) fs.writeFileSync(p, t); } } };
  walk(OUT);
  console.log('Asset versions', V);
}
