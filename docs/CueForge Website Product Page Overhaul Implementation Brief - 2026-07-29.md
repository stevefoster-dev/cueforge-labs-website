# CueForge Website Product Page Overhaul Implementation Brief - 2026-07-29

## Commission

Rebuild the individual CueForge Labs app pages as one coherent premium product system while preserving the existing CueForge forge/circuit identity. Replace stale generated mockups with real current software screenshots, keep Steve's chosen CuePatch screenshot unchanged, add a dedicated Business Solutions suite page, add CueNotch based on its audit, and hold CueGrade.

This is a **local website candidate only**. Do not push, open a PR, merge, deploy, alter product runtimes, change live pricing/Stripe, send external messages, or delete/archive source pages.

## Governing sources — read in full before implementation

1. Art direction:
   `/Users/stevefoster/Documents/Vesper Vault/10 Projects/CueForge/CueForge Individual Product Pages Reimagination Art Direction Brief - 2026-07-29.md`
2. Product/pricing/screenshot audit:
   `/Users/stevefoster/Documents/Vesper Vault/10 Projects/CueForge/CueForge Website Product Page Pricing and Screenshot Migration Audit - 2026-07-29.md`
3. Portfolio decision:
   `/Users/stevefoster/Documents/Vesper Vault/10 Projects/CueForge/CueForge Software Circuit Portfolio Curation Decision - 2026-07-28.md`
4. Canonical CueForge commercial registry:
   `/Users/stevefoster/Documents/Vesper Vault/10 Projects/CueForge/CueForge Master Sales Models and Pricing Source of Truth - 2026-07-28.md`
5. Approved operational pricing mirror:
   `/Users/stevefoster/clawd/PRICING.md`
6. Business Solutions architecture:
   `/Users/stevefoster/Documents/Vesper Vault/10 Projects/Business Solutions/Business Solutions Unified Suite Reference Architecture - 2026-07-27.md`
7. Business Solutions commercial plan:
   `/Users/stevefoster/Documents/Vesper Vault/10 Projects/Business Solutions/Business Solutions Sales Reframing Pricing and Packaging Plan - 2026-07-27.md`
8. Repo instructions:
   `AGENTS.md`

If a current page, product repo, fixture, old README, test seed, or existing website price conflicts with these sources, the governing sources win.

## Required public route set

Rebuild or create:

- `cuepatch.html`
- `cuepack.html`
- `cueroll.html`
- `cuemaker.html`
- `cuescale.html` — new
- `cueswitcher.html` — new
- `cuecheck.html`
- `cuenotch.html` — new
- `business-solutions.html` — new separate branch page
- `software-circuit.html` — update index routes/card data and Business Solutions destination

Do **not** add CueGrade. Do **not** redesign removed concept pages as active products.

## Shared implementation system

Create and use shared maintainable assets rather than copying a full page framework into every HTML file. Suggested structure:

- `css/product-dossier.css`
- `js/product-dossier.js`
- static semantic product HTML in each route for SEO, no-JS comprehension, and accessibility
- `images/app-screenshots/<product>/...`
- `docs/CueForge Product Screenshot Provenance Manifest - 2026-07-29.md`

The shared system must provide:

- product-local subnav;
- evidence hero with real screenshot;
- status/platform/integration chips;
- workflow strip;
- capability chapters;
- real screenshot gallery with keyboard and touch controls;
- field-fit, requirements, availability/pricing truth, related approved products;
- reduced-motion behavior;
- exact 390px topology and minimum 44px controls;
- stable return-to-Circuit navigation.

The pages must still feel unmistakably CueForge: near-black forge field, anvil/circuit geometry, teal/cyan/lavender/amber roles, Inter + JetBrains Mono, restrained glow, real production-tool density. Do not produce a generic SaaS card wall, glassmorphism dashboard, floaty marketing template, emoji-led UI, or Apple/Blackmagic imitation.

## Product truth and pricing

- **CuePatch:** private validation/beta interest; no price; preserve `images/mockups/cuepatch-screenshot.jpg` unchanged; remove Base/Pro/Production Suite fiction.
- **CuePack:** public listing remains; layered commercial model approved but exact prices pending; no numeric price; use membership + production packs + scale add-ons + standby as model language only.
- **CueRoll:** show `$199/year Individual` only. Do not show the `$149` pilot until eligibility exists; do not show a Team price.
- **CueMaker:** private validation; no price.
- **CueScale:** private validation/in development; no price.
- **CueSwitcher:** in development/private validation; no price.
- **CueCheck:** in development; no numeric price and no approved-pilot claim.
- **CueNotch:** `Private Validation — Not Publicly Released`; no download/purchase/price; compatibility and buyer validation remain open.
- **CueGrade:** no page/card.
- **Front Desk AI on Business Solutions:** approved Core `$149/month` with 300 included minutes; Growth `$299/month` with 800 included minutes; `$0.40/minute` overage; `$249` setup. Clearly label guided managed setup and keep live checkout/Stripe absent.
- **Other Business Solutions modules:** no prices.

## Real screenshot contract

Every indexed Production Tool page must show at least one real, current, public-safe software screenshot. The gallery may use more when evidence is strong.

### Preserve

- CuePatch: keep `images/mockups/cuepatch-screenshot.jpg` byte-identical.

### Copy accepted evidence

- CueMaker:
  - `/Users/stevefoster/clawd/worktrees/CueMaker-final-closeout-20260727/_ship/verification/CueMaker Phase 3 Packaged Loaded Song Editor - 1440x900 - 2026-07-23.png`
  - `/Users/stevefoster/clawd/worktrees/CueMaker-final-closeout-20260727/_ship/verification/CueMaker Multi-Source P1 Two Connected Roots - 1440x900 - 2026-07-28.png`
  - `/Users/stevefoster/clawd/worktrees/CueMaker-final-closeout-20260727/_ship/verification/CueMaker Phase 10 Offline MA3 Export Ready - 1440x900 - 2026-07-25.png`
- CueScale:
  - `/Users/stevefoster/clawd/worktrees/CueScale-production-20260727/_ship/evidence/CueScale Phase 1 Visual QA — 2026-07-27/CueScale Export Ready Top 960x680 — 2026-07-27.png`
  - one secondary accepted CueScale state if it adds buyer value.

### Fresh sanitized captures required

- CuePack from `/Users/stevefoster/clawd/repos/CuePack` at committed baseline `ee74544` using fictional/local data only.
- CueRoll from `/Users/stevefoster/clawd/worktrees/CueRoll-github-origin-main-audit-20260728` at `d087a34` using generic setlist/notes and no real Notion/audio/show data.
- CueSwitcher from `/Users/stevefoster/.hermes/profiles/vesper/worktrees/cueswitcher-promo-capture-20260725` at `d981da0` using generic show data and without implying unsupported hardware proof.
- CueCheck from a clean disposable worktree at committed baseline `2660ff6`, using built-in generic mock/sample data; never show real rack hostnames, IPs, artist/show names, or machine inventory.
- CueNotch from `/Users/stevefoster/.hermes/profiles/vesper/worktrees/cuenotch-production-readiness-audit-2026-07-28` at `079fd12`, using a temporary HOME/dev profile and synthetic block/show data. Show a populated Live Sheet and/or generated output. No IPs, audit filenames, customer/show data, unsupported status claims, or circuit decoration crossing operational data.

Do not alter product repos to make marketing screenshots. Use disposable runtime state, browser/CDP injection, existing fixture modes, or existing accepted evidence. If a safe current screenshot cannot be captured without product-source edits or real/private data, stop and report that exact product as blocked rather than presenting generated UI as real.

For every copied or captured image, record:

- product;
- source repo/worktree;
- exact commit;
- capture/copy date;
- runtime route/state;
- viewport;
- whether data is synthetic, generic sample, or accepted evidence;
- public-safety review notes.

Optimize website copies without changing what the UI depicts. Keep source evidence untouched.

## Business Solutions page

Create `business-solutions.html` with:

1. modular-platform promise;
2. lifecycle: Inquiry → Opportunity → Quote → Work → Invoice → Owner action;
3. Managed offer: Front Desk AI with exact approved plans and guided-setup boundary;
4. In development: Client Hub and Quote Tracker;
5. Private validation: InvoicePack;
6. Roadmap/validate first: Job Profitability, Calendar & Booking, Landing & Intake, Routes, Inventory Alerts;
7. trust boundaries: dashboard/manual authority, no auto-send, local raw-document privacy, guided integrations, module-specific readiness;
8. contact-led CTA only.

Never expose or link:

- internal Sales Portal;
- private fixture-backed demos;
- customer/admin/provider routes;
- Payroll Pilot;
- SheetBridge;
- Mike consulting/ERP lanes;
- credentials, prospect data, fixture data, or live provider controls.

Update the Business Solutions card on `software-circuit.html` to route to `business-solutions.html`.

## CueNotch index/page copy

Safe job:

> Turn Notch block files into reviewable DMX/FX documentation and console-ready fixture/profile outputs for the crew handoff.

Safe claims:

- for Notch programmers, media-server operators, and production crews;
- operator documentation, DMX/personality references, and MA fixture/profile outputs;
- private compatibility and buyer validation;
- no public download.

Do not claim production-ready, public beta, available now, secure, unattended-show safe, universal `.dfxdll` compatibility, notarized distribution, customer-ready activation/recovery, authenticated LAN sharing, or price.

## Exact acceptance

Before parent handoff:

- `git diff --check` passes;
- every required route returns HTTP 200 locally;
- all local links/assets resolve;
- no removed product is reintroduced into Circuit data/meta/links;
- CueGrade is absent from public routes/index;
- CuePatch chosen screenshot hash remains unchanged;
- current screenshot provenance manifest is complete;
- no real/private names, network addresses, absolute paths, credentials, or customer data appear in website assets/text;
- no unapproved prices or stale suite tiers remain on required routes;
- JavaScript syntax passes;
- desktop 1440×900 and true mobile 390×844 screenshots are captured and reviewed for every required route;
- zero horizontal overflow on 390px;
- keyboard/focus/gallery/reduced-motion checks pass;
- no broken images or console errors;
- copied assets are web-optimized;
- final local commit is clean and reported.

No push or deployment.
