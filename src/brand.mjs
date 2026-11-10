// Logo system rebuilt as editable SVG (concept direction — pending Wastecykler approval).
// Emblem: recycling loop in a green disc with a red accent dot.
// Wordmark: WASTEC + YK disc + LER, matching the historical YK treatment.
const NAVY = '#071F39', GREEN = '#20B978', MINT = '#40CB94', RED = '#E53935';

function arrows(cx, cy, r, color, sw) {
  let out = '';
  for (let k = 0; k < 3; k++) {
    const a0 = (-90 + k * 120 + 18) * Math.PI / 180, a1 = (-90 + k * 120 + 102) * Math.PI / 180;
    const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0), x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
    // arrowhead at end, tangent direction
    const t = a1 + Math.PI / 2, h = sw * 1.25;
    const bx = x1 - h * Math.cos(t), by = y1 - h * Math.sin(t);
    const nx = Math.cos(a1), ny = Math.sin(a1);
    out += `<path d="M${x0.toFixed(2)} ${y0.toFixed(2)} A${r} ${r} 0 0 1 ${bx.toFixed(2)} ${by.toFixed(2)}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round"/>`;
    out += `<path d="M${(bx + nx * h * .9).toFixed(2)} ${(by + ny * h * .9).toFixed(2)} L${(x1 + h * .55 * Math.cos(t)).toFixed(2)} ${(y1 + h * .55 * Math.sin(t)).toFixed(2)} L${(bx - nx * h * .9).toFixed(2)} ${(by - ny * h * .9).toFixed(2)} Z" fill="${color}"/>`;
  }
  return out;
}

export function emblem(size = 48, { mono, bg = '#fff' } = {}) {
  const g = mono ? 'currentColor' : GREEN;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="${size}" height="${size}" aria-hidden="true" focusable="false">
<circle cx="24" cy="24" r="23" fill="${g}"/>${arrows(24, 24.5, 12.5, mono ? bg : '#fff', 3.6)}
<circle cx="38.5" cy="9.5" r="4.6" fill="${mono ? 'currentColor' : RED}" stroke="${mono ? bg : '#fff'}" stroke-width="1.6"/></svg>`;
}

export function wordmark({ dark = false, height = 28, mono = false } = {}) {
  const ink = mono ? 'currentColor' : (dark ? '#FFFFFF' : NAVY);
  const disc = mono ? 'currentColor' : GREEN;
  const yk = mono ? (dark ? NAVY : '#fff') : '#FFFFFF';
  const ring = mono ? 'none' : RED;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261 40" height="${height}" direction="ltr" style="direction:ltr;unicode-bidi:isolate" role="img" aria-label="WASTECYKLER" focusable="false">
<g font-family="'Arial Black','Helvetica Neue',Arial,sans-serif" font-weight="900" font-size="30" letter-spacing="-.5" fill="${ink}">
<text x="0" y="31" textLength="137" lengthAdjust="spacingAndGlyphs">WASTEC</text><text x="184" y="31" textLength="76" lengthAdjust="spacingAndGlyphs">LER</text></g>
<circle cx="161" cy="20" r="19.5" fill="${disc}"/><circle cx="161" cy="20" r="19.5" fill="none" stroke="${ring}" stroke-width="2" stroke-dasharray="20 103" stroke-dashoffset="-6"/>
<text x="161" y="30.5" text-anchor="middle" font-family="'Arial Black','Helvetica Neue',Arial,sans-serif" font-weight="900" font-size="24" textLength="29" lengthAdjust="spacingAndGlyphs" fill="${yk}">YK</text></svg>`;
}

export function lockup({ dark = false } = {}) {
  return `<span class="logo">${emblem(36)}${wordmark({ dark, height: 22 })}</span>`;
}

export const FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><circle cx="24" cy="24" r="23" fill="${GREEN}"/>${arrows(24, 24.5, 12.5, '#fff', 3.6)}<circle cx="38.5" cy="9.5" r="4.6" fill="${RED}" stroke="#fff" stroke-width="1.6"/></svg>`;

export function brandSheet() {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Wastecykler logo system — concept</title>
<style>body{margin:0;font:15px/1.5 system-ui,sans-serif;background:#F5F8F7;color:#34465B}main{max-width:1000px;margin:auto;padding:32px 20px}h1{color:${NAVY}}.g{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.c{border-radius:12px;padding:28px;display:flex;flex-direction:column;gap:14px;align-items:flex-start;border:1px solid #dde5e2}.c small{font-size:12px;opacity:.8}.d{background:${NAVY};color:#fff}.w{background:#fff}.logo{display:inline-flex;align-items:center;gap:10px}.sw{display:flex;gap:8px;flex-wrap:wrap}.sw span{width:96px;height:64px;border-radius:8px;display:flex;align-items:flex-end;padding:6px;font-size:11px;color:#fff}</style></head><body><main>
<p><a href="../en/">← Back to site</a></p><h1>Logo system — modernisation concept</h1>
<p>Rebuilt as SVG from the supplied raster concept boards and the legacy logo. Retains the WASTECYKLER name, recycling emblem, green identity, the distinctive YK disc and the original red accent. <strong>Concept only — pending approval by Wastecykler.</strong> The long historical tagline is intentionally not used at small sizes.</p>
<div class="g">
<div class="c w"><small>1 · Horizontal lockup — light</small>${lockup()}</div>
<div class="c d"><small>2 · Horizontal lockup — dark</small>${lockup({ dark: true })}</div>
<div class="c w"><small>3 · Compact header wordmark</small>${wordmark({ height: 20 })}</div>
<div class="c w"><small>4 · Mobile icon / app</small>${emblem(64)}</div>
<div class="c w"><small>5 · Favicon (32 / 16 px)</small><span>${emblem(32)} ${emblem(16)}</span></div>
<div class="c d" style="color:#fff"><small>6 · Monochrome (dark)</small><span class="logo" style="color:#fff">${emblem(36, { mono: true, bg: NAVY })}${wordmark({ dark: true, height: 22, mono: true })}</span></div>
<div class="c w" style="color:${NAVY}"><small>7 · Monochrome (light) / footer</small><span class="logo">${emblem(36, { mono: true })}${wordmark({ height: 22, mono: true })}</span></div>
</div>
<h2>Palette</h2><div class="sw"><span style="background:${NAVY}">Navy #071F39</span><span style="background:${GREEN}">Green #20B978</span><span style="background:${MINT}">Mint #40CB94</span><span style="background:${RED}">Red #E53935</span><span style="background:#34465B">Slate #34465B</span><span style="background:#F5F8F7;color:#34465B;border:1px solid #ccc">Off-white #F5F8F7</span></div>
</main></body></html>`;
}
