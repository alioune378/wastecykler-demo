# Wastecykler 2.0 — Private Executive Demo

Concept prepared by **Dalal Technologies** for Wastecykler. Private, non-production demonstration. Not the live Wastecykler website.

## What's inside

| Path | Purpose |
|---|---|
| `build.mjs` | Static site generator (Node 18+, **no dependencies**). Renders every page in 9 locales. |
| `src/i18n/*.mjs` | Structured translation dictionaries — `en, tr, fr, ar, de, ja, nl, sv, es`. All UI and content strings live here. |
| `src/media.mjs` | Central asset registry: provenance, status, rights, priority. Alt text is translated per locale (`alt.*`). |
| `src/brand.mjs` | Logo system rebuilt as SVG (lockups, icon, favicon, monochrome). |
| `src/preview.mjs` | Private `/preview/strategy/` presentation and `/preview/leads/` demo CRM. |
| `src/site.css`, `src/site.js` | Design system and client behaviour (menu, tabs, gallery, lightbox, forms → CRM). |
| `src/assets/` | Optimised WebP/AVIF/JPEG variants, organised by `authentic/ technology/ history/ patent/ concepts/ architecture/`. |
| `internal/` | Raw originals and logo reference boards (not in the repository). |
| `dist/` | Build output — deploy this folder. |
| `screenshots/` | Desktop/mobile/RTL/CRM captures. |

## Commands

```bash
node build.mjs                      # build to dist/ (demo mode: noindex everywhere)
npx serve dist                      # or: cd dist && python3 -m http.server 8080
# open http://localhost:8080/en/

SITE_URL=https://www.wastecykler.com DEMO=0 node build.mjs   # production-style build (indexable, sitemap enabled)
```

The build prints any translation keys that fall back to English (currently none).

## Routes

- `/{en|tr|fr|ar|de|ja|nl|sv|es}/` — Home
- `/{lang}/technology/`, `/{lang}/products/` + 5 product pages, `/{lang}/solutions/` + 5 sector pages
- `/{lang}/innovation/`, `/{lang}/partnerships/`, `/{lang}/resources/`, `/{lang}/about/`, `/{lang}/contact/` (`?type=project|partner|distributor`)
- `/preview/strategy/` — executive presentation (English)
- `/preview/leads/` — demo CRM with EXAMPLE DATA
- `/brand/` — logo system sheet

## Deploy (private)

1. Netlify → **Add new project → Deploy manually** → drag the `dist` folder.
2. Project configuration → **Access & security → Visitor access → Password protection** (server-side; not a client-side check).
3. `dist/_headers` already sends `X-Robots-Tag: noindex, nofollow`; every page also has `<meta name="robots" content="noindex,nofollow">` and `robots.txt` disallows all.

## Why not Next.js?

The brief prefers Next.js App Router. This build environment had no package-registry access, so the demo uses a dependency-free generator that produces the same architecture: real localized routes, pre-rendered HTML, per-page metadata, canonical + hreflang, sitemap, structured data and a CMS-ready content model. Migrating to Next.js means moving `src/i18n/*` into `messages/` (next-intl) and each page function into `app/[locale]/…/page.tsx`. See `DEMO_VS_PRODUCTION.md`.
