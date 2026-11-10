// v3 — technology-first homepage, annotated product diagram, engineering schematics,
// sector integration drawings, buyer questions, engagement process, heritage timeline.
export function makeV3(H) {
  const { esc, pic, srcset, MEDIA, ARR, PRODUCTS, SOLUTIONS, layout, V2 } = H;
  const COL = { rest: '#7d8da0', pack: '#20B978', glass: '#3b82f6', batt: '#E53935', oil: '#e0a100' };
  const SECTOR_PHOTO = { municipalities: 'community-installation', residential: 'pilot-chute-labels', commercial: 'oil-collection', healthcare: 'inlet-panel', universities: 'control-labels' };
  const SECTOR_BG = { municipalities: 'city-green', residential: 'city-waterfront', commercial: 'city-dusk', healthcare: 'city-towers', universities: 'city-campus' };
  // Callouts on the authentic inlet photo, ordered top-to-bottom; idx = position in t.v2.spots
  const CALLOUTS = [{ x: 24, y: 14, idx: 0 }, { x: 84, y: 23, idx: 2 }, { x: 88, y: 49, idx: 3 }, { x: 50, y: 58, idx: 1 }, { x: 82, y: 81, idx: 4 }];

  const bg = (c, id, eager) => { const m = MEDIA[id]; return `<picture>${m.avif ? `<source type="image/avif" srcset="${srcset(id, 'avif', c)}" sizes="100vw">` : ''}<source type="image/webp" srcset="${srcset(id, 'webp', c)}" sizes="100vw"><img src="${c.asset(m.folder + '/' + id + '-' + m.w[0] + '.jpg')}" alt="" ${eager ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'}></picture>`; };
  const tag = (c, s) => `<span class="tag t-${s}">${esc(c.t.status[s])}</span>`;

  // ---------- Annotated product diagram ----------
  let DG = 0;
  function diagram(c, { eager = false, hero = false } = {}) {
    const sp = c.t.v2.spots, id = 'dg' + (++DG);
    return `<figure class="dg${hero ? ' dg-hero' : ''}" data-dg>
<div class="dg-img">${pic(c, 'inlet-front', { eager, badge: false, sizes: hero ? '(max-width:900px) 94vw, 520px' : '(max-width:900px) 94vw, 640px' })}
${CALLOUTS.map((p, i) => `<button type="button" class="mk" style="left:${p.x}%;top:${p.y}%" data-i="${i}" aria-controls="${id}-${i}" aria-pressed="${i === 2}" aria-label="${i + 1}. ${esc(sp[p.idx].t)}"><span>${i + 1}</span></button>`).join('')}<span class="dg-tag">${tag(c, 'authentic')}</span></div>
<ol class="dg-list">${CALLOUTS.map((p, i) => `<li id="${id}-${i}" data-i="${i}"${i === 2 ? ' class="on"' : ''}><button type="button" class="dg-t" aria-expanded="${i === 2}"><span class="n">${i + 1}</span><span class="tt">${esc(sp[p.idx].t)}</span></button><p class="dg-d">${esc(sp[p.idx].d)}</p></li>`).join('')}</ol>
<svg class="dg-lines" aria-hidden="true"></svg></figure>`;
  }

  // ---------- System schematic (blueprint section) ----------
  function system(c) {
    const v = c.t.v3, floors = 4, streams = [COL.rest, COL.pack, COL.glass, COL.batt];
    const fl = [...Array(floors)].map((_, i) => {
      const y = 30 + i * 62;
      return `<g><line x1="40" y1="${y + 62}" x2="330" y2="${y + 62}" class="bp-l"/><rect x="186" y="${y + 18}" width="26" height="30" rx="2" class="bp-inlet"/>${streams.map((col, j) => `<circle cx="${178}" cy="${y + 22 + j * 7}" r="2.6" fill="${col}"/>`).join('')}<text x="52" y="${y + 40}" class="bp-t">${floors - i}</text></g>`;
    }).join('');
    const comps = streams.map((col, j) => `<rect x="${118 + j * 46}" y="352" width="38" height="46" rx="3" class="bp-comp" stroke="${col}"/><rect x="${121 + j * 46}" y="${378 - j * 4}" width="32" height="${17 + j * 4}" fill="${col}" opacity=".55"/>`).join('');
    const m = (n, x, y) => `<g class="bp-m"><circle cx="${x}" cy="${y}" r="11"/><text x="${x}" y="${y + 4}">${n}</text></g>`;
    const svg = `<svg viewBox="0 0 380 420" class="bp" role="img" aria-label="${esc(v.systemTitle)} — ${esc(c.t.v2.schematic)}">
<defs><pattern id="g-${c.lang}" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" class="bp-grid"/></pattern></defs>
<rect width="380" height="420" fill="url(#g-${c.lang})"/>
<rect x="40" y="30" width="290" height="248" class="bp-b"/>${fl}
<rect x="214" y="30" width="22" height="300" class="bp-chute"/>
<circle class="bp-drop" cx="225" cy="60" r="5" fill="${COL.pack}"/>
<path d="M200 318 L250 318 L272 344 L178 344 Z" class="bp-sep"/>
<line x1="20" y1="402" x2="360" y2="402" class="bp-l"/>${comps}
${m(1, 162, 64)}${m(2, 199, 104)}${m(3, 258, 200)}${m(4, 292, 330)}${m(5, 92, 376)}
</svg>`;
    return `<div class="sysx"><div class="sys-fig">${svg}<p class="cap-s">${esc(c.t.v2.schematic)}</p></div>
<div><ol class="sys-list">${v.sys.map((s, i) => `<li><span class="n">${i + 1}</span><div><strong>${esc(s.t)}</strong><p>${esc(s.d)}</p></div></li>`).join('')}</ol>
<div class="vs"><div class="vs-r no"><strong>${esc(v.withoutT)}</strong><p>${esc(v.without)}</p></div><div class="vs-r yes"><strong>${esc(v.withT)}</strong><p>${esc(v.with)}</p></div></div>
<p class="cap-s">${esc(v.sysNote)}</p></div></div>`;
  }

  // ---------- Sector integration schematics ----------
  function bld(x, w, floors, { base = 250, fh = 22, inlets = true, oil = false, hatch = false, room = true } = {}) {
    const top = base - floors * fh;
    let s = `<rect x="${x}" y="${top}" width="${w}" height="${floors * fh}" class="${hatch ? 'sx-h' : 'sx-b'}"/>`;
    for (let i = 1; i < floors; i++) s += `<line x1="${x}" y1="${top + i * fh}" x2="${x + w}" y2="${top + i * fh}" class="sx-f"/>`;
    if (inlets && !hatch) for (let i = 0; i < floors; i++) s += `<rect x="${x + w - 12}" y="${top + i * fh + 6}" width="6" height="10" class="sx-in"/>`;
    if (oil) s += `<circle cx="${x + 14}" cy="${base - fh / 2}" r="5" fill="${COL.oil}"/>`;
    if (room && !hatch) s += `<rect x="${x + 4}" y="${base + 4}" width="${w - 8}" height="14" class="sx-room"/>${[0, 1, 2, 3].map(j => `<rect x="${x + 7 + j * ((w - 14) / 4)}" y="${base + 7}" width="${(w - 14) / 4 - 3}" height="8" fill="${[COL.rest, COL.pack, COL.glass, COL.batt][j]}" opacity=".7"/>`).join('')}`;
    if (hatch) s += `<path d="M${x} ${top} L${x + w} ${base} M${x + w} ${top} L${x} ${base}" class="sx-x"/>`;
    return s;
  }
  const mk = (n, x, y) => `<g class="bp-m"><circle cx="${x}" cy="${y}" r="10"/><text x="${x}" y="${y + 4}">${n}</text></g>`;
  const SCH = {
    residential: () => bld(150, 100, 8) + `<rect x="226" y="74" width="10" height="176" class="sx-ch"/><path d="M220 252 l22 0 l8 10 l-38 0z" class="bp-sep"/>` + mk(1, 128, 100) + mk(2, 262, 150) + mk(3, 274, 258) + mk(4, 126, 262),
    municipalities: () => bld(40, 80, 6) + bld(150, 70, 4) + bld(250, 100, 5) + `<path d="M30 290 H370" class="sx-route"/><rect x="300" y="280" width="34" height="18" rx="3" class="sx-truck"/>` + mk(1, 80, 100) + mk(2, 185, 146) + mk(3, 300, 228) + mk(4, 250, 300),
    commercial: () => bld(150, 90, 6, { base: 184 }) + bld(90, 210, 3, { base: 250, oil: true }) + mk(1, 128, 80) + mk(2, 270, 200) + mk(3, 104, 244) + mk(4, 196, 278),
    healthcare: () => bld(40, 100, 5) + bld(160, 70, 2, { oil: true }) + bld(250, 110, 5, { hatch: true }) + mk(1, 90, 100) + mk(2, 195, 190) + mk(3, 174, 230) + mk(4, 305, 100),
    universities: () => bld(30, 70, 7) + bld(130, 110, 2, { oil: true }) + bld(270, 90, 4) + `<path d="M65 274 V292 H315 V274 M185 274 V292" class="sx-route"/><rect x="168" y="286" width="34" height="14" class="sx-room"/>` + mk(1, 65, 70) + mk(2, 185, 190) + mk(3, 315, 150) + mk(4, 220, 300)
  };
  function sectorSchematic(c, k, { legend = true } = {}) {
    const v = c.t.v3, vb = { residential: '70 40 260 270' }[k] || '0 0 400 310';
    return `<figure class="sxs"><svg viewBox="${vb}" class="bp sxs-svg" role="img" aria-label="${esc(v.integTitle)}: ${esc(c.t.solutions.items[k].name)} — ${esc(c.t.v2.schematic)}"><defs><pattern id="sg-${k}-${c.lang}" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" class="bp-grid"/></pattern></defs><rect width="400" height="310" fill="url(#sg-${k}-${c.lang})"/><line x1="16" y1="250" x2="384" y2="250" class="bp-l"/>${SCH[k]()}</svg>
${legend ? `<ol class="sxs-leg">${v.sch[k].map((x, i) => `<li><span class="n">${i + 1}</span>${esc(x)}</li>`).join('')}</ol>` : ''}<figcaption class="cap-s">${esc(v.schNote)}</figcaption></figure>`;
  }

  // ---------- Buyer questions, process, conversion paths ----------
  function buyer(c, { open = 0 } = {}) {
    const v = c.t.v3;
    return `<div class="acc2">${v.buyer.map((b, i) => `<details${i === open ? ' open' : ''}><summary><span class="n">0${i + 1}</span><span class="q">${esc(b.q)}</span><span class="pm" aria-hidden="true"></span></summary><p>${esc(b.a)}</p></details>`).join('')}</div>`;
  }
  function process(c) {
    const v = c.t.v3;
    return `<ol class="proc">${v.process.map((p, i) => `<li><span class="n">${i + 1}</span><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p><p class="out"><span>${esc(v.outLabel)}</span>${esc(p.o)}</p></li>`).join('')}</ol><p class="cap-s">${tag(c, 'proposed')} ${esc(v.processNote)}</p>`;
  }
  function paths(c, base) {
    const v = c.t.v3, ic = { consultation: 'M4 5h16v11H8l-4 4z', specifications: 'M6 3h9l4 4v14H6zM14 3v5h5M9 12h7M9 16h7', feasibility: 'M4 20V10M10 20V4M16 20v-8M22 20H2' };
    return `<div class="paths">${v.paths.map(p => `<a class="path" href="${base}?intent=${p.k}#inquiry" data-intent="${p.k}"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="${ic[p.k]}"/></svg><strong>${esc(p.t)}</strong><span>${esc(p.d)}</span><span class="go">${ARR}</span></a>`).join('')}</div>`;
  }
  function convert(c, { preset = '', title, dark = true } = {}) {
    const t = c.t, v = t.v3;
    return `<section class="sec${dark ? ' dark bpbg' : ''} conv" id="inquiry"><div class="wrap"><div class="conv-g"><div><p class="eyebrow">${esc(v.consult)}</p><h2>${esc(title || t.home.finalTitle)}</h2><p class="lead">${esc(t.home.finalText)}</p>${paths(c, '')}</div>${V2.wizard(c, preset)}</div></div></section>`;
  }

  // ---------- Heritage timeline ----------
  function heritage(c) {
    const x = c.t.innov, imgs = [null, 'tr-patent-certificate', 'pilot-chute-labels', 'presentation', null];
    return `<ol class="her">${x.timeline.map((e, i) => `<li><div class="her-y">${esc(e.y)}</div><div class="her-c">${imgs[i] ? `<div class="her-img">${pic(c, imgs[i], { badge: false, zoom: true, cls: imgs[i] === 'tr-patent-certificate' ? 'contain' : '', sizes: '200px' })}</div>` : ''}<h3>${esc(e.t)}</h3><p>${esc(e.d)}</p>${tag(c, e.s)}</div></li>`).join('')}</ol>`;
  }

  // ---------- Home ----------
  function home(c) {
    const { t } = c, h = t.home, v = t.v3, v2 = t.v2;
    const hero = `<section class="h3x"><div class="h3-arch">${bg(c, 'city-bluehour', true)}</div>
<div class="wrap h3-g"><div class="h3-title"><p class="eyebrow">${esc(v.heroEyebrow)}</p><h1>${esc(h.h1)}</h1></div>
<div class="h3-media">${diagram(c, { eager: true, hero: true })}</div>
<div class="h3-text"><p class="lead">${esc(h.sub)}</p><div class="btns"><a class="btn btn-g" href="#inquiry" data-intent="consultation">${esc(v.consult)} ${ARR}</a><a class="btn btn-ghost" href="${c.u('technology')}">${esc(v.system)}</a></div></div></div>
<div class="wrap"><dl class="spec">${v.spec.map(s => `<div><dt>${esc(s.l)}</dt><dd><bdi>${esc(s.v)}</bdi></dd></div>`).join('')}</dl></div><span class="ai-note">${esc(t.status['conceptual-ai'])}</span></section>`;
    const sys = `<section class="sec white"><div class="wrap"><div class="sh"><p class="eyebrow">01</p><h2>${esc(v.systemTitle)}</h2><p class="lead">${esc(h.offer)}</p></div>${system(c)}</div></section>`;
    const tabs = [['controls', 'control-labels'], ['oil', 'oil-collection'], ['configs', 'separator-configurations'], ['inlet', 'inlet-unit']];
    const spot = `<section class="sec dark bpbg"><div class="wrap"><div class="sh"><p class="eyebrow">02</p><h2>${esc(h.spotTitle)}</h2><p class="lead">${esc(h.spotIntro)}</p></div>
<div class="tabs" role="tablist" aria-label="${esc(h.spotTitle)}">${tabs.map(([k], i) => `<button role="tab" id="sp-${k}" aria-controls="spp-${k}" aria-selected="${i === 0}" tabindex="${i ? -1 : 0}">${esc(h.tabs[k])}</button>`).join('')}</div>
${tabs.map(([k, img], i) => `<div role="tabpanel" id="spp-${k}" aria-labelledby="sp-${k}"${i ? ' hidden' : ''} class="spot">${pic(c, img, { zoom: true, cls: k === 'configs' ? 'contain' : '', sizes: '(max-width:800px) 94vw, 640px' })}<div><h3>${esc(h.tabs[k])}</h3><p>${esc(h.spot[k])}</p>${k === 'configs' ? `<p class="cap-s">${esc(t.tech.configs.note)}</p>` : ''}<a class="lnk" href="${c.u('technology')}">${esc(t.cta.explore)} ${ARR}</a></div></div>`).join('')}</div></section>`;
    const keys = Object.keys(SOLUTIONS);
    const sectors = `<section class="sec"><div class="wrap"><div class="sh"><p class="eyebrow">03</p><h2>${esc(v2.sectorsTitle)}</h2><p class="lead">${esc(h.appsIntro)}</p></div>
<div class="sx3"><div class="sx3-list" role="tablist" aria-label="${esc(h.appsTitle)}" aria-orientation="vertical">${keys.map((k, i) => `<button role="tab" id="sx-${k}" aria-controls="sxp-${k}" aria-selected="${i === 0}" tabindex="${i ? -1 : 0}"><span>0${i + 1}</span>${esc(t.solutions.items[k].name)}</button>`).join('')}</div>
${keys.map((k, i) => `<div role="tabpanel" id="sxp-${k}" aria-labelledby="sx-${k}"${i ? ' hidden' : ''} class="sx3-panel"><div class="sx3-fig">${sectorSchematic(c, k, { legend: false })}</div><div class="sx3-txt"><p class="eyebrow">${esc(v2.problem)}</p><h3>${esc(t.solutions.items[k].name)}</h3><p>${esc(v2.sectors[k].problem)}</p><ul class="ticks">${v2.sectors[k].value.map(x => `<li>${esc(x)}</li>`).join('')}</ul><a class="lnk" href="${c.u('solutions/' + k)}">${esc(v2.explore)} ${ARR}</a></div></div>`).join('')}</div></div></section>`;
    const buy = `<section class="sec white"><div class="wrap"><div class="g-buy"><div class="sh"><p class="eyebrow">04</p><h2>${esc(v.buyerTitle)}</h2><p class="lead">${esc(v.buyerIntro)}</p></div>${buyer(c)}</div>
<div class="sh" style="margin-top:56px"><h2 class="h-sm">${esc(v.processTitle)}</h2></div>${process(c)}</div></section>`;
    const her = `<section class="sec"><div class="wrap"><div class="sh sh-row"><div><p class="eyebrow">05</p><h2>${esc(v.heritageTitle)}</h2><p class="lead">${esc(v.heritageIntro)}</p></div><a class="lnk" href="${c.u('innovation')}">${esc(v.heritageLink)} ${ARR}</a></div>${heritage(c)}</div></section>`;
    const part = `<section class="sec-sm white bt"><div class="wrap part3"><div><p class="eyebrow">06</p><h2 class="h-sm">${esc(h.partTitle)}</h2><p>${esc(h.partText)}</p><a class="lnk" href="${c.u('partnerships')}">${esc(t.cta.partner)} ${ARR}</a></div><ol class="nlist3">${h.partList.map((x, i) => `<li><span>0${i + 1}</span>${esc(x)}</li>`).join('')}</ol></div></section>`;
    return layout(c, { title: h.title, desc: h.desc, body: hero + sys + spot + sectors + buy + her + part + convert(c) });
  }

  // ---------- Solutions index ----------
  function solutionsIndex(c) {
    const { t } = c, s = t.solutions, v2 = t.v2;
    const body = `<section class="ph3 bpbg dark"><div class="wrap"><!--crumbs--><p class="eyebrow">${esc(t.nav.solutions)}</p><h1>${esc(s.h1)}</h1><p class="lead">${esc(s.intro)}</p></div></section>
<section class="sec"><div class="wrap ed3">${Object.keys(SOLUTIONS).map((k, i) => `<article class="ed3-row"><div class="ed3-fig">${sectorSchematic(c, k, { legend: false })}</div><div class="ed3-txt"><span class="ed-n">0${i + 1}</span><h2><a href="${c.u('solutions/' + k)}">${esc(s.items[k].name)}</a></h2><p>${esc(v2.sectors[k].problem)}</p><ul class="ticks">${v2.sectors[k].value.slice(0, 2).map(x => `<li>${esc(x)}</li>`).join('')}</ul><a class="lnk" href="${c.u('solutions/' + k)}" aria-hidden="true" tabindex="-1">${esc(v2.explore)} ${ARR}</a></div></article>`).join('')}</div></section>` + convert(c);
    return layout(c, { title: s.title, desc: s.desc, body, crumbs: [{ n: t.nav.solutions, r: 'solutions' }] });
  }

  // ---------- Sector page ----------
  function solution(c, k) {
    const { t } = c, s = t.solutions, it = s.items[k], d = SOLUTIONS[k], v = t.v3, v2 = t.v2, sx = v2.sectors[k];
    const preset = k === 'municipalities' ? 'municipality' : 'developer';
    const ph = SECTOR_PHOTO[k];
    const body = `<section class="sh3 dark"><div class="sh3-arch">${bg(c, SECTOR_BG[k], true)}</div><div class="wrap sh3-g"><div><!--crumbs--><p class="eyebrow">${esc(t.nav.solutions)}</p><h1>${esc(it.name)}</h1><p class="lead">${esc(it.intro)}</p><div class="btns"><a class="btn btn-g" href="#inquiry" data-intent="consultation">${esc(v.consult)} ${ARR}</a><a class="btn btn-ghost" href="#inquiry" data-intent="feasibility">${esc(v.feas)}</a></div></div>
<div class="sh3-photo">${pic(c, ph, { eager: true, badge: false, zoom: true, cls: '', sizes: '(max-width:900px) 92vw, 440px' })}<p class="cap-d">${tag(c, MEDIA[ph].status)}</p></div></div><span class="ai-note">${esc(t.status['conceptual-ai'])}</span></section>
<section class="sec white"><div class="wrap ch3"><div><p class="eyebrow">01 · ${esc(v2.problem)}</p><p class="st-big">${esc(sx.problem)}</p></div><div><ul class="ticks">${it.focus.map(f => `<li>${esc(f)}</li>`).join('')}</ul>${it.note ? `<p class="cap-s warn">${esc(it.note)}</p>` : ''}</div></div></section>
<section class="sec dark bpbg"><div class="wrap"><div class="sh"><p class="eyebrow">02</p><h2>${esc(v.integTitle)}</h2></div><div class="int3">${sectorSchematic(c, k)}</div></div></section>
<section class="sec white"><div class="wrap"><div class="sh"><p class="eyebrow">03 · ${esc(v2.tech)}</p></div><div class="tc3">${d.prods.map(p => `<a class="tc" href="${c.u('products/' + p)}"><div class="tc-img">${pic(c, PRODUCTS[p].imgs[0], { badge: false, cls: ['separator-configurations', 'smart-container-board'].includes(PRODUCTS[p].imgs[0]) ? 'contain' : '', sizes: '(max-width:700px) 80vw, 300px' })}</div><strong>${esc(t.products.items[p].name)}</strong><span>${esc(t.products.items[p].short)}</span>${tag(c, PRODUCTS[p].status)}</a>`).join('')}</div></div></section>
<section class="sec"><div class="wrap g-buy"><div class="sh"><p class="eyebrow">04 · ${esc(v2.value)}</p><ol class="vl3">${sx.value.map((x, i) => `<li><span>0${i + 1}</span>${esc(x)}</li>`).join('')}</ol><p class="cap-s">${esc(v2.valueNote)}</p></div><div><h2 class="h-sm">${esc(v.faqTitle)}</h2>${buyer(c, { open: 1 })}</div></div></section>
<section class="sec white bt"><div class="wrap"><div class="sh"><p class="eyebrow">05</p><h2 class="h-sm">${esc(v.processTitle)}</h2></div>${process(c)}</div></section>` + convert(c, { preset, title: t.cta.discuss });
    return layout(c, { title: `${it.name} — Wastecykler`, desc: `${sx.problem} ${it.intro}`.slice(0, 158), body, crumbs: [{ n: t.nav.solutions, r: 'solutions' }, { n: it.name, r: 'solutions/' + k }] });
  }

  return { diagram, system, sectorSchematic, buyer, process, paths, convert, heritage, home, solutionsIndex, solution, reset: () => { DG = 0; } };
}
