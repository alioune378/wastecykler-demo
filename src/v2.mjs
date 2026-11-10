// v2 page sections — editorial homepage, anatomy diagram, sector stories, qualification wizard.
export function makeV2(H) {
  const { esc, pic, srcset, MEDIA, ARR, icon, PRODUCTS, SOLUTIONS, layout, pageHero } = H;
  const SECTOR_IMG = { municipalities: 'city-green', residential: 'city-waterfront', commercial: 'city-dusk', healthcare: 'city-towers', universities: 'city-campus' };
  const SPOTS = [[24, 14], [50, 56], [84, 22], [88, 50], [82, 81]];
  const STREAM_COLORS = ['#5b6b7d', '#20B978', '#1f6fd1', '#e0a100', '#8b5cf6', '#E53935'];

  function bg(c, id, eager) {
    const m = MEDIA[id];
    return `<picture>${m.avif ? `<source type="image/avif" srcset="${srcset(id, 'avif', c)}" sizes="100vw">` : ''}<source type="image/webp" srcset="${srcset(id, 'webp', c)}" sizes="100vw"><img src="${c.asset(m.folder + '/' + id + '-' + m.w[0] + '.jpg')}" alt="${esc(c.t.alt[id])}" ${eager ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'}></picture>`;
  }

  function anatomy(c, { compact = false } = {}) {
    const v = c.t.v2;
    return `<div class="anat${compact ? ' compact' : ''}"><div class="anat-img">${pic(c, 'inlet-front', { eager: compact, badge: true, sizes: '(max-width:900px) 94vw, 640px' })}
${SPOTS.map(([x, y], i) => `<button type="button" class="hs" style="left:${x}%;top:${y}%" aria-pressed="${i === 3}" aria-controls="an-${c.lang}-${i}" aria-label="${esc(v.spots[i].t)}"><span>${i + 1}</span></button>`).join('')}</div>
<ol class="anat-list">${v.spots.map((s, i) => `<li id="an-${c.lang}-${i}" data-i="${i}"${i === 3 ? ' class="on"' : ''}><b>${i + 1}</b><div><strong>${esc(s.t)}</strong><span>${esc(s.d)}</span></div></li>`).join('')}</ol></div>`;
  }

  function compare(c) {
    const v = c.t.v2;
    return `<div class="cmpx"><div class="cmp-col bad"><h3>${esc(v.mixed.t)}</h3><svg viewBox="0 0 200 120" class="sch" aria-hidden="true"><rect x="70" y="20" width="60" height="90" rx="6" fill="#e6ebea" stroke="#9aa9b4"/>${[0, 1, 2, 3, 4, 5].map(i => `<circle class="dot d${i}" cx="${82 + (i % 3) * 18}" cy="${70 + Math.floor(i / 3) * 18}" r="6" fill="${STREAM_COLORS[i]}"/>`).join('')}</svg><ul class="xl">${v.mixed.list.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
<div class="cmp-col good"><h3>${esc(v.source.t)}</h3><svg viewBox="0 0 200 120" class="sch" aria-hidden="true">${[0, 1, 2, 3].map(i => `<rect x="${18 + i * 44}" y="20" width="36" height="90" rx="6" fill="#fff" stroke="${STREAM_COLORS[[0, 1, 2, 5][i]]}" stroke-width="2"/><circle class="drop" style="animation-delay:${i * .35}s" cx="${36 + i * 44}" cy="40" r="7" fill="${STREAM_COLORS[[0, 1, 2, 5][i]]}"/>`).join('')}</svg><ul class="list">${v.source.list.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
<p class="small muted cmp-note">${esc(v.compareNote)} · ${esc(v.schematic)}</p></div>`;
  }

  function schematicCfg(c) {
    const x = c.t.tech, n = [2, 3, 4, 6];
    return `<div class="cfg2"><div class="tabs" role="tablist" aria-label="${esc(x.configs.t)}">${n.map((k, i) => `<button role="tab" id="cg-${k}" aria-controls="cgp-${k}" aria-selected="${i === 1}" tabindex="${i === 1 ? 0 : -1}">${k} ${esc(x.cfgLabel)}</button>`).join('')}</div>
${n.map((k, i) => `<div role="tabpanel" id="cgp-${k}" aria-labelledby="cg-${k}"${i === 1 ? '' : ' hidden'} class="cfg-stage"><svg viewBox="0 0 ${k * 70 + 20} 170" class="cfg-svg" role="img" aria-label="${esc(c.t.v2.schematic)}: ${k} ${esc(x.cfgLabel)}"><rect x="6" y="6" width="${k * 70 + 8}" height="22" rx="4" fill="#071F39"/>${x.cfg[k].map((s, j) => `<g><rect x="${10 + j * 70}" y="40" width="60" height="120" rx="6" fill="#fff" stroke="${STREAM_COLORS[k === 2 ? j : j]}" stroke-width="2.5"/><rect class="fill" style="animation-delay:${j * .15}s" x="${12 + j * 70}" y="100" width="56" height="58" rx="4" fill="${STREAM_COLORS[j]}" opacity=".85"/><text x="${40 + j * 70}" y="80" text-anchor="middle" font-size="22" font-weight="800" fill="${STREAM_COLORS[j]}">${j + 1}</text></g>`).join('')}</svg>
<ol class="cfg-legend">${x.cfg[k].map((s, j) => `<li><span style="background:${STREAM_COLORS[j]}">${j + 1}</span>${esc(s)}</li>`).join('')}</ol></div>`).join('')}
<p class="small muted">${esc(c.t.v2.schematic)} · ${esc(x.configs.note)}</p></div>`;
  }

  let WZ = 0;
  function wizard(c, preset = '', { title } = {}) {
    const w = c.t.v2.wiz, f = c.t.form, id = 'wz' + (++WZ), q = w.q;
    const radio = (name, opts) => `<div class="chips" role="radiogroup">${opts.map((o, i) => `<label class="chip"><input type="radio" name="${name}" value="${esc(o)}"${i === 0 && false ? ' checked' : ''}><span>${esc(o)}</span></label>`).join('')}</div>`;
    const multi = (name, opts) => `<div class="chips">${opts.map(o => `<label class="chip"><input type="checkbox" name="${name}" value="${esc(o)}"><span>${esc(o)}</span></label>`).join('')}</div>`;
    const grp = (lab, inner, role) => `<fieldset class="qg" data-for="${role}"><legend>${esc(lab)}</legend>${inner}</fieldset>`;
    const fld = (name, label, type = 'text', req = true, extra = '') => `<div class="field"><label for="${id}-${name}">${esc(label)}${req ? ' *' : ''}</label><input id="${id}-${name}" name="${name}" type="${type}"${req ? ' required' : ''}${extra} aria-describedby="${id}-${name}-err"><span class="err" id="${id}-${name}-err" aria-live="polite"></span></div>`;
    const tf = `<fieldset class="qg"><legend>${esc(f.timeframe)}</legend><div class="chips">${Object.entries(f.timeOpts).map(([k, v]) => `<label class="chip"><input type="radio" name="timeframe" value="${k}"><span>${esc(v)}</span></label>`).join('')}</div></fieldset>`;
    return `<div class="wiz form" data-preset="${preset}"><div class="wiz-head"><h3>${esc(title || w.title)}</h3><p class="small muted">${esc(w.intro)}</p>
<ol class="wiz-steps">${w.steps.map((s, i) => `<li${i === 0 ? ' aria-current="step"' : ''}><span>${i + 1}</span>${esc(s)}</li>`).join('')}</ol></div>
<form class="lead wizf" data-variant="wizard" action="#" method="post" novalidate>
<section class="ws" data-s="1"><fieldset class="qg intent"><legend>${esc(c.t.v3.intentLabel)}</legend><div class="chips">${Object.entries(c.t.v3.intents).map(([k, v]) => `<label class="chip"><input type="radio" name="intent" value="${k}"><span>${esc(v)}</span></label>`).join('')}</div></fieldset><p class="qlab">${esc(f.buyer)}</p><div class="roles" role="radiogroup" aria-label="${esc(f.buyer)}">${Object.entries(w.roles).map(([k, r]) => `<label class="role"><input type="radio" name="buyer" value="${k}"${k === preset ? ' checked' : ''}><span><strong>${esc(r.t)}</strong><small>${esc(r.d)}</small></span></label>`).join('')}</div><p class="err ws-err" aria-live="polite"></p>
<div class="wiz-nav"><button type="button" class="btn btn-g wnext">${esc(w.next)} ${ARR}</button></div></section>
<section class="ws" data-s="2" hidden>
${grp(q.sites, radio('sites', q.sitesOpts), 'municipality developer')}${grp(q.stage, radio('stage', q.stageOpts), 'municipality developer')}${grp(q.streams, multi('streams', q.streamsOpts), 'municipality developer')}
${grp(q.experience, radio('experience', q.expOpts), 'distributor')}<div class="qg" data-for="distributor">${fld('territory', q.territory, 'text', false)}</div>
${grp(q.capability, radio('capability', q.capOpts), 'manufacturer')}${grp(q.area, radio('area', q.areaOpts), 'partner')}
${tf}<p class="err ws-err" aria-live="polite"></p>
<div class="wiz-nav"><button type="button" class="btn btn-o wback">${esc(w.back)}</button><button type="button" class="btn btn-g wnext">${esc(w.next)} ${ARR}</button></div></section>
<section class="ws" data-s="3" hidden><div class="fgrid">${fld('org', f.org)}${fld('name', f.name, 'text', true, ' autocomplete="name"')}${fld('email', f.email, 'email', true, ' autocomplete="email" class="email" dir="ltr"')}${fld('country', f.country, 'text', true, ' autocomplete="country-name"')}${fld('role', f.role, 'text', false)}
<div class="field full"><label for="${id}-desc">${esc(f.desc)}</label><textarea id="${id}-desc" name="desc" aria-describedby="${id}-desc-h"></textarea><span class="hint" id="${id}-desc-h">${esc(f.descHint)}</span></div>
<div class="field full"><label class="check"><input type="checkbox" name="meeting" value="1"> ${esc(f.meeting)}</label></div>
<div class="field full"><label class="check"><input type="checkbox" id="${id}-consent" name="consent" required aria-describedby="${id}-consent-err"> ${esc(f.consent)}</label><span class="err" id="${id}-consent-err" aria-live="polite"></span></div>
<div class="hp" aria-hidden="true"><label>Website<input name="website" tabindex="-1" autocomplete="off"></label></div></div>
<div class="wiz-nav"><button type="button" class="btn btn-o wback">${esc(w.back)}</button><button class="btn btn-g" type="submit">${esc(f.submit)} ${ARR}</button></div></section>
<p class="demo-note">ⓘ ${esc(f.demoNote)}</p></form>
<div class="ok" hidden tabindex="-1" role="status"><div class="tick"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg></div><h3>${esc(f.success)}</h3><p>${esc(f.successText)}</p><button type="button" class="btn btn-o again">${esc(f.again)}</button></div></div>`;
  }

  function evidence(c) {
    const v = c.t.v2, st = c.t.status;
    const items = [['presentation', 'historical'], ['community-installation', 'historical'], ['tr-patent-certificate', 'document'], ['pilot-chute-labels', 'historical']];
    return `<div class="legend">${['authentic', 'historical', 'document', 'proposed'].map(k => `<span class="badge ${k}">${esc(st[k])}</span>`).join('')}</div>
<div class="evi">${items.map(([id]) => pic(c, id, { zoom: true, cls: id === 'tr-patent-certificate' ? 'contain' : '', sizes: '(max-width:700px) 46vw, 280px' })).join('')}</div>`;
  }

  function home(c) {
    const { t } = c, h = t.home, v = t.v2;
    const hero = `<section class="hx"><div class="hx-bg">${bg(c, 'city-bluehour', true)}</div>
<div class="wrap hx-g"><div class="hx-copy rv"><p class="eyebrow">${esc(h.eyebrow)}</p><h1>${esc(h.h1)}</h1><p class="lead">${esc(h.sub)}</p><div class="btns"><a class="btn btn-g" href="${c.u('technology')}">${esc(t.cta.explore)} ${ARR}</a><a class="btn btn-o" href="${c.u('contact')}">${esc(t.cta.discuss)}</a></div></div>
<div class="hx-stage rv">${anatomy(c, { compact: true })}</div></div>
<ul class="wrap hx-facts">${v.facts.map(f => `<li>${esc(f)}</li>`).join('')}</ul><span class="ai-note">${esc(t.status['conceptual-ai'])}</span></section>`;
    const offer = `<section class="sec-sm white"><div class="wrap offer rv"><h2>${esc(h.offerTitle)}</h2><p>${esc(h.offer)}</p><p>${esc(h.offerFor)}</p></div></section>`;
    const cmp = `<section class="sec"><div class="wrap"><p class="eyebrow">01</p><h2 class="rv" style="max-width:24ch">${esc(h.howTitle)}</h2>${compare(c)}</div></section>`;
    const tabs = [['controls', 'control-labels'], ['oil', 'oil-collection'], ['configs', 'separator-configurations'], ['inlet', 'inlet-unit']];
    const spot = `<section class="sec dark"><div class="wrap"><p class="eyebrow">02</p><h2>${esc(h.spotTitle)}</h2><p class="lead" style="margin-bottom:24px">${esc(h.spotIntro)}</p>
<div class="tabs" role="tablist" aria-label="${esc(h.spotTitle)}">${tabs.map(([k], i) => `<button role="tab" id="sp-${k}" aria-controls="spp-${k}" aria-selected="${i === 0}" tabindex="${i ? -1 : 0}">${esc(h.tabs[k])}</button>`).join('')}</div>
${tabs.map(([k, img], i) => `<div role="tabpanel" id="spp-${k}" aria-labelledby="sp-${k}"${i ? ' hidden' : ''} class="spot">${pic(c, img, { zoom: true, cls: k === 'configs' ? 'contain' : '', sizes: '(max-width:800px) 94vw, 700px' })}<div><h3>${esc(h.tabs[k])}</h3><p class="lead">${esc(h.spot[k])}</p>${k === 'configs' ? `<p class="note">${esc(t.tech.configs.note)}</p>` : ''}<a class="btn btn-o" href="${c.u('technology')}">${esc(t.cta.explore)} ${ARR}</a></div></div>`).join('')}</div></section>`;
    const keys = Object.keys(SOLUTIONS);
    const sectors = `<section class="sec"><div class="wrap"><p class="eyebrow">03</p><h2>${esc(v.sectorsTitle)}</h2><p class="lead" style="margin-bottom:24px">${esc(h.appsIntro)}</p>
<div class="sx"><div class="sx-list" role="tablist" aria-label="${esc(h.appsTitle)}" aria-orientation="vertical">${keys.map((k, i) => `<button role="tab" id="sx-${k}" aria-controls="sxp-${k}" aria-selected="${i === 0}" tabindex="${i ? -1 : 0}"><span>0${i + 1}</span>${esc(t.solutions.items[k].name)}</button>`).join('')}</div>
${keys.map((k, i) => `<div role="tabpanel" id="sxp-${k}" aria-labelledby="sx-${k}"${i ? ' hidden' : ''} class="sx-panel"><div class="sx-img">${bg(c, SECTOR_IMG[k])}<span class="ai-note">${esc(t.status['conceptual-ai'])}</span></div><div class="sx-txt"><p class="eyebrow">${esc(v.problem)}</p><h3>${esc(t.solutions.items[k].name)}</h3><p>${esc(v.sectors[k].problem)}</p><a class="btn btn-g" href="${c.u('solutions/' + k)}">${esc(v.explore)} ${ARR}</a></div></div>`).join('')}</div></div></section>`;
    const hist = `<section class="sec white"><div class="wrap"><div class="g2" style="align-items:end;margin-bottom:28px"><div><p class="eyebrow">04</p><h2>${esc(h.histTitle)}</h2></div><div><p class="lead">${esc(h.histText)}</p></div></div>${evidence(c)}<div class="btns" style="margin-top:24px"><a class="btn btn-n" href="${c.u('innovation')}">${esc(t.nav.innovation)} ${ARR}</a></div></div></section>`;
    const part = `<section class="sec dark band"><div class="wrap g2"><div><p class="eyebrow">05</p><h2>${esc(h.partTitle)}</h2><p class="lead">${esc(h.partText)}</p><div class="btns"><a class="btn btn-g" href="${c.u('partnerships')}">${esc(t.cta.partner)} ${ARR}</a></div></div><ol class="nlist">${h.partList.map((x, i) => `<li><span>0${i + 1}</span>${esc(x)}</li>`).join('')}</ol></div></section>`;
    const fin = `<section class="sec" id="inquiry"><div class="wrap g2" style="align-items:start"><div class="rv"><h2>${esc(h.finalTitle)}</h2><p class="lead">${esc(h.finalText)}</p></div>${wizard(c)}</div></section>`;
    return layout(c, { title: h.title, desc: h.desc, body: hero + offer + cmp + spot + sectors + hist + part + fin });
  }

  function solutionsIndex(c) {
    const { t } = c, s = t.solutions, v = t.v2;
    const body = pageHero(c, { eyebrow: t.nav.solutions, h1: s.h1, lead: s.intro, img: 'city-plaza' }) +
      `<section class="sec"><div class="wrap ed-list">${Object.keys(SOLUTIONS).map((k, i) => `<a class="ed-row${i % 2 ? ' rev' : ''}" href="${c.u('solutions/' + k)}"><div class="ed-img">${bg(c, SECTOR_IMG[k])}<span class="ai-note">${esc(t.status['conceptual-ai'])}</span></div><div class="ed-txt"><span class="ed-n">0${i + 1}</span><h2>${esc(s.items[k].name)}</h2><p>${esc(v.sectors[k].problem)}</p><span class="more">${esc(v.explore)} ${ARR}</span></div></a>`).join('')}</div></section>`;
    return layout(c, { title: s.title, desc: s.desc, body, crumbs: [{ n: t.nav.solutions, r: 'solutions' }] });
  }

  function solution(c, k) {
    const { t } = c, s = t.solutions, it = s.items[k], d = SOLUTIONS[k], v = t.v2, sx = v.sectors[k];
    const preset = k === 'municipalities' ? 'municipality' : 'developer';
    const body = `<section class="hero shero"><div class="bg">${bg(c, SECTOR_IMG[k], true)}</div><span class="ai-note">${esc(t.status['conceptual-ai'])}</span><div class="wrap hero-g" style="grid-template-columns:1fr"><div><!--crumbs--><h1>${esc(it.name)}</h1><p class="lead">${esc(it.intro)}</p><div class="btns" style="margin-top:24px"><a class="btn btn-g" href="#inquiry">${esc(t.cta.discuss)} ${ARR}</a></div></div></div></section>
<section class="sec white"><div class="wrap story">
<div class="st-step"><span class="st-n">01</span><div><p class="eyebrow">${esc(v.problem)}</p><p class="lead st-big">${esc(sx.problem)}</p><ul class="list">${it.focus.slice(0, 3).map(f => `<li>${esc(f)}</li>`).join('')}</ul>${it.note ? `<p class="note" style="margin-top:16px">${esc(it.note)}</p>` : ''}</div></div>
<div class="st-step"><span class="st-n">02</span><div><p class="eyebrow">${esc(v.tech)}</p><div class="tcards">${d.prods.map(p => `<a class="tcard" href="${c.u('products/' + p)}">${pic(c, PRODUCTS[p].imgs[0], { badge: false, cls: ['separator-configurations', 'smart-container-board'].includes(PRODUCTS[p].imgs[0]) ? 'contain' : '', sizes: '(max-width:700px) 90vw, 300px' })}<strong>${esc(t.products.items[p].name)}</strong><span class="small">${esc(t.products.items[p].short)}</span><span class="badge ${PRODUCTS[p].status}">${esc(t.status[PRODUCTS[p].status])}</span></a>`).join('')}</div></div></div>
<div class="st-step"><span class="st-n">03</span><div><p class="eyebrow">${esc(v.value)}</p><ol class="vlist">${sx.value.map(x => `<li>${esc(x)}</li>`).join('')}</ol><p class="small muted">${esc(v.valueNote)}</p></div></div>
</div></section>
<section class="sec dark" id="inquiry"><div class="wrap g2" style="align-items:start"><div><span class="st-n">04</span><h2>${esc(t.cta.discuss)}</h2><p class="lead">${esc(t.home.finalText)}</p></div>${wizard(c, preset)}</div></section>`;
    return layout(c, { title: `${it.name} — Wastecykler`, desc: `${sx.problem} ${it.intro}`.slice(0, 158), body, crumbs: [{ n: t.nav.solutions, r: 'solutions' }, { n: it.name, r: 'solutions/' + k }] });
  }

  return { anatomy, compare, schematicCfg, wizard, evidence, home, solutionsIndex, solution, resetWizard: () => { WZ = 0; } };
}
