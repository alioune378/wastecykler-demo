# Demo vs Production

## Works now (demo)
- 19 page types × 9 locales = 171 pre-rendered pages, desktop/tablet/mobile (tested 375–1440 px, no horizontal overflow).
- Language selector on every page; keeps you on the same page. Arabic is full right-to-left (layout, arrows, tab keyboard order, forms); Japanese line-breaking tuned.
- Interactive: How-it-works steps, technology spotlight tabs, 2/3/4/6-stream configuration switcher, product galleries, image lightbox, accordions, partnership tabs, contact routing (`?type=`).
- Forms: client-side validation and localised messages, consent checkbox, honeypot, distributor/partner-specific fields.
- Lead flow: a submitted form creates a **TEST** lead in `/preview/leads/` (same browser). CRM supports stage changes, owner assignment, next-action date, notes/activity log, filters (buyer type, market, stage, owner), reset of sample data.
- SEO foundations: unique localised titles/descriptions, canonical, hreflang (9 + x-default), Organization + BreadcrumbList JSON-LD, sitemap.xml with alternates, semantic headings (one H1 per page), alt text on all images.
- Demo protection: noindex meta + header + robots.txt.

## Fictional / placeholder
- CRM records marked **EXAMPLE DATA** (companies, names, countries) are invented.
- "Product documentation" and "Planning guides" are labelled placeholders — no official documents are published.
- Product families are provisional groupings of documented hardware, not a confirmed catalogue.
- Logo is a **concept** rebuilt from supplied raster concepts, pending approval.

## Data handling
- Inquiries are stored only in the visitor's browser (`localStorage`, key `wk-demo-leads`). Nothing is transmitted, emailed or shared across devices.

## Requires paid production implementation
- Next.js (App Router) build with headless CMS and editorial workflow.
- Real form backend: server-side validation, spam/bot protection, consent logging, retention policy.
- CRM integration (HubSpot / Pipedrive / Zoho etc.) with regional routing and notifications.
- Native-speaker technical translation review for all 8 non-English locales.
- Analytics with consent management; Search Console per market; content programme.
- Legal pages (privacy, terms, cookies) — GDPR, Québec Law 25, US state laws review.
- Verified product data, specifications, documents and original high-resolution photography.
- Hosting, domain, redirects from the current site, monitoring, accessibility audit.

## Not claimed
No partners (incl. companies in exploratory talks), customers, installations, certifications, performance figures, ROI or pricing are stated. Healthcare content excludes regulated medical waste. Patent is presented as a Türkiye-only historical document with holder as printed.

## v2 — creative & conversion pass
- **Homepage:** cinematic hero with the authentic installed inlet as centrepiece (5 interactive hotspots), animated mixed-vs-source comparison, technology spotlight, vertical sector explorer, labelled evidence wall, partner band and inline inquiry.
- **Solutions:** editorial sector rows with conceptual architectural imagery (labelled on-image); each sector page is a 4-step story — infrastructure challenge → relevant technology → potential value (no results claimed) → inquiry.
- **Technology:** inlet anatomy diagram, schematic 2/3/4/6-stream configurator (animated SVG), comparison layout.
- **Lead generation:** one 3-step qualification journey on home, contact, technology, solution and partnership pages, with role-specific questions (municipality, developer, distributor, manufacturer, engineering partner); `?role=` presets the role. The CRM shows qualification answers and a demo "fit" rule.
- **Credibility:** four evidence labels used site-wide — Authentic hardware, Historical evidence, Official document, Proposed initiative (plus Conceptual AI image). Engineering capabilities grid and proposed expansion band on Innovation & History.
- **Housekeeping:** logo-concept link and internal notes removed from public pages (editorial principles now on /preview/strategy/); discreet private-demo banner; nav switches to the menu button below 1320 px (and below 1520 px in Dutch/German) so no language overflows.
- **QA:** 171 pages × 2 widths with no errors or broken links; no horizontal overflow at 375/390/768/1024/1200/1366/1440 px in all 9 languages; wizard → CRM tested in EN (desktop), AR (375 px) and JA (390 px). Before/after screenshots in `/screenshots` (v1 in `/screenshots/v1-before`).
