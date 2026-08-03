# CueForge Website Feedback Reacceptance Art Direction and Evidence Contract — 2026-07-29

## Verdict

The local candidate at `fd9f827f061a454a7f5db4121c4749faa1916202` is a **rejected design candidate**, not a launch candidate. Its claim/privacy work remains useful, but its visual system does not meet Steve's acceptance bar.

This contract replaces the prior dossier presentation rules where they conflict.

## Steve's binding rejection

1. PocketCounsel must not be enlarged, optically shifted, or cropped to force its icon into the circle. Extend its existing blue field instead.
2. The shared dossier typography is too thin, cramped, and difficult to read.
3. The sticky sub-navigation, cards, and repeated text panels feel generic and stock rather than deliberately designed for CueForge.
4. Product pages need more real interface views, clearer feature explanations, and a stronger sense of moving through the product.
5. Business Solutions must work as a suite/toolkit showroom: explain Client Hub as the connective core, then let visitors enter dedicated app pages. Build dedicated pages now for Front Desk AI and InvoicePack because truthful product evidence exists for both.

## Non-negotiable no-go patterns

- No `font-weight: 300` for headings or body hierarchy.
- No 10–11px all-caps mono text as the primary navigation or primary explanatory language.
- No low-contrast `rgba(..., .36–.54)` text for content a visitor must read.
- No repeating generic card grids as the dominant page rhythm.
- No row of anonymous micro-tabs with only a 2px underline as its identity.
- No fictional dashboard built in HTML to imitate product evidence.
- No product screenshot invented or altered to imply unsupported behavior.
- No PocketCounsel transform, object-position offset, or mark resampling.
- No additional pricing, availability, release, activation, or production claims beyond the canonical contract.
- No public Sales Portal, internal operator surface, local path, private address, private network destination, or real customer data.

## Revised visual language — Forge Field Manual

The experience should feel like opening a well-designed technical field manual: bold chapter markers, large evidence plates, annotated interface details, and confident breathing room. It must remain CueForge — near-black cinematic field, restrained cyan/amber/lavender energy, circuit rails, instrument framing — without becoming another dark SaaS landing-page template.

### Typography

- Display and section headings: `Space Grotesk`, weights 600–700.
- Body and controls: `Inter`, weights 500–700; never 300.
- Technical metadata only: `IBM Plex Mono` or `JetBrains Mono`, weights 500–600.
- Body: 17px desktop / 16px mobile minimum, `line-height: 1.65–1.75`, high-contrast ink at roughly 84–92% white.
- Secondary copy: no lower than roughly 70% white.
- Navigation labels: 14px minimum, weight 700, normal/title case; mono may appear only in the chapter number.
- Headings carry stronger size/weight contrast; avoid squeezing hierarchy into letter spacing and uppercase alone.

### Navigation — chapter deck, not micro-tabs

Replace the anonymous sticky sub-tabs with a designed **chapter deck**:

- substantial 46–50px chapter controls;
- visible two-digit chapter number plus short label;
- filled/outlined surface, corner notch or rail marker, and active energy bar;
- product name and return route stay visually separate from the chapters;
- desktop may use a compact horizontal deck; mobile becomes a readable snap-scrolling deck with 44px+ targets;
- active state uses surface, color, and marker — not underline alone;
- no label smaller than 14px.

### Page rhythm

Each product page uses five experiential movements:

1. **Instrument opening** — concise promise and one large real interface plate. Copy remains short enough that the interface is visible above the fold on desktop.
2. **Feature scenes** — two or three alternating full-width scenes. Each pairs a real screenshot or truthful crop with one job-to-be-done, a specific feature explanation, and an honest boundary.
3. **Workflow rail** — a large, legible sequence rather than a row of tiny equal cards.
4. **Interface detail bench** — two or three cropped views from accepted screenshots, clearly presented as details of the same product state when no separate capture exists.
5. **Readiness and next step** — one grounded status panel and the allowed action only.

### Screenshot composition

- Treat screenshots as the primary visual canvas, not thumbnails inside generic cards.
- Use 16:10 or source-native plates with generous framing and legible size.
- Alternate scene direction and vary crop/scale to avoid a template-repeat feel.
- For products with one accepted screenshot, reuse the exact source as an overview plus truthful CSS detail windows. Captions must say `Interface detail from the accepted view`; do not claim these are separate sessions.
- CueMaker may use its three distinct accepted views.
- Every product page should expose at least three substantial interface views: distinct screenshots where available; otherwise one overview plus two readable detail windows.
- Image captions explain what the visitor is seeing and what the state proves. Provenance/hash metadata remains in the manifest, not visitor-facing body copy.

## PocketCounsel asset repair

Canonical source and current website asset are byte-identical:

- canonical: `PocketCounsel/landing-vercel/public/icon.png`
- source dimensions: `124×124`
- SHA-256: `4cd3e5eb91aae88907cde785eda059f932322cf031b562d1d84ae2792fdc5c67`
- exact blue corner field: `#172836`
- visible mark bounds: `x=12…106`, `y=9…107`
- the mark is already optically centered in the source.

Required derivative:

- create a new `128×128` RGB/RGBA canvas filled with exact `#172836`;
- paste the untouched original `124×124` pixels at `(2,2)`;
- do not resize, resample, sharpen, shift, or recolor the 124×124 source;
- the website circle is `132×132` with a 2px border, leaving an exact `128×128` image area, so the mark displays at its original pixel scale;
- CSS: `width:100%; height:100%; object-fit:cover; object-position:center; transform:none`;
- verify pixel identity by extracting `(2,2)-(126,126)` from the derivative and comparing bytes/pixels to the canonical source;
- verify blue reaches all four circle edges and the mark is visually centered at desktop and 390px mobile.

## Route and state matrix

| Route | Purpose | Required interface treatment | Status/action boundary |
|---|---|---|---|
| `software-circuit.html` | Portfolio and business-line split | Keep Circuit identity; repair PocketCounsel asset/crop; improve venture card typography | No new claims or prices |
| `cuepatch.html` | LED/pixel/cabling/AE workflow | Exact preserved screenshot as overview + two detail windows | No public price |
| `cuepack.html` | Production-package/truck planning | Accepted exact-component capture as overview + workflow/detail windows | No public price |
| `cueroll.html` | Timecode rehearsal notes | Accepted runtime capture as overview + notes/timeline detail windows | `$199/year` only |
| `cuemaker.html` | Audio-to-MA3/MTC workflow | Use all three accepted images as an actual scene sequence | No public price |
| `cuescale.html` | Loudness/Quiet Split workflow | Accepted capture as overview + meter/export detail windows | Evidence-bounded availability only; no public price |
| `cueswitcher.html` | Camera plan/macro/timeline design | Accepted capture as overview + layout/timeline detail windows | Preserve `No ATEM / Not Connected`; no hardware-control claim or price |
| `cuecheck.html` | Production file organization | Accepted capture as overview + rules/audit detail windows | Explicitly in development; no price |
| `cuenotch.html` | Private DMX mapping validation | Accepted capture as overview + map/parameter detail windows | `Private Validation — Not Publicly Released`; no CTA/price/download |
| `business-solutions.html` | Suite showroom | Client Hub connective-core diagram + app selector with visual preview; dedicated links only where evidence exists | Separate business line; no Sales Portal; no unapproved prices |
| `front-desk-ai.html` | Dedicated managed Front Desk AI dossier | Four exact fictional-data interface scenes: Today, Inbox, Customers, Jobs | Guided managed setup; canonical `$149/$299`, `$249` setup, `$0.40/min`; no self-serve/live-provider claim |
| `invoicepack.html` | Dedicated InvoicePack dossier | Four-to-five exact synthetic/local-vault scenes, including conflict review, packet export, invoice preview crop, and mobile proof | Private validation/local candidate; no price, public download, signed-distribution, or cloud-sensitive-data claim |

## Business Solutions suite architecture

### Main page story

The main page leads with the suite promise, then makes **Client Hub the visible center**:

```text
Front Desk AI ─┐
Quote Tracker ─┼─> Client Hub: customer, opportunity, job, task, note, activity history
InvoicePack  ──┘
```

Client Hub is the record continuity layer and is included with any active paid module. It is not currently a standalone CRM SKU and has no separate approved price.

The page then presents the toolkit as a designed app selector:

- Front Desk AI — linked to `front-desk-ai.html`, managed offer.
- InvoicePack — linked to `invoicepack.html`, private validation.
- Client Hub — expanded explanation on the suite page, shared core.
- Quote Tracker — honest in-development card, no dedicated public page until evidence is accepted.
- Calendar & Booking, Landing & Intake, Routes, Job Profitability, Inventory Alerts — roadmap states only; no fake pages or implied purchase.

Do not use the full prior suite-hub screenshot as public evidence: it contains synthetic module/commercial states and unapproved prices. A cropped top section could still imply Quote Tracker activation. Prefer a clearly explanatory HTML/CSS architecture diagram plus real app previews for Front Desk AI and InvoicePack.

## Front Desk AI evidence contract

Exact source worktree baseline: `bf3b82d55563ebd6507a92d9fbaf00e0ea49300f`.

Copy and rename these exact fictional-data images into the website:

1. `today-desktop-dark.png` — command view: next actions, schedule, qualified opportunity.
2. `inbox-desktop-dark.png` — structured call outcome, unanswered questions, owner review.
3. `customers-desktop-dark.png` — durable customer record and connected activity.
4. `jobs-desktop-dark.png` — work pipeline from inquiry toward completion.

The built-in top disclosure (`Prototype data · fictional fixture data`) remains visible. Website captions use `Fictional-data product capture` and must not imply a paying pilot or accepted live Twilio/Vapi path.

## InvoicePack evidence contract

Exact source worktree baseline: `127987eb016269133684e7e58e76ab0d28728f6d`.

Use only synthetic/local-vault evidence:

1. `02-project-created-real-ui.png` — local project and source intake.
2. `04-rate-conflict-surfaced.png` — evidence review and explicit human resolution.
3. `09-work-packet-exported.png` — accepted facts, local persistence, and packet export state.
4. `07-builder-hydrated.png` — create a physical derivative crop of the invoice preview/right side that excludes the visible phrase `Demo values`; preserve pixels otherwise.
5. `10-vault-390x844.png` — mobile local-vault proof.
6. `11-builder-390x844.png` may be used only after creating a crop that excludes the visible `Demo values` phrase; otherwise omit it.

The page must say: local-first candidate/private validation; raw source documents and receipt files stay local by default; packet generation and backup/restore were exercised with synthetic data. It must also say what is not accepted: no public signed download, no public self-serve release, no sensitive cloud workflow, no price.

## Claim and commercial boundaries preserved

- CueRoll: `$199/year` public price.
- Front Desk AI managed plans: `$149/month` Core, `$299/month` Growth, `$249` setup, `$0.40/minute` overage.
- No other active CueForge or Business Solutions product receives a public price.
- PocketCounsel links only to its public marketing site and remains an independent venture.
- CueGrade remains absent from active routes, sitemap, and navigation.
- CueNotch remains private validation with no purchase/download CTA.
- CueCheck remains explicitly in development.
- Front Desk AI is a flagship optional module, not the Business Solutions identity and not a prerequisite.
- Nothing consequential is represented as auto-sent.

## Acceptance checklist

- [ ] PocketCounsel derivative passes source-pixel identity and blue-edge checks; no transform exists.
- [ ] No heading or core navigation uses weight 300; no core nav label is below 14px.
- [ ] Body and captions pass readability at 1440×900 and true 390×844 without zoom.
- [ ] Chapter deck is visually designed, keyboard reachable, active-state semantic, and not underline-only.
- [ ] Every product dossier shows at least three substantial interface views.
- [ ] Distinct screenshots are used wherever accepted evidence exists; repeated crops are disclosed honestly.
- [ ] Business Solutions visibly makes Client Hub the shared core.
- [ ] Front Desk AI and InvoicePack have dedicated HTML pages and are linked from the suite selector.
- [ ] Other suite apps retain honest statuses and do not imply completed pages or purchase.
- [ ] Exact pricing and release/maturity boundaries pass.
- [ ] All new screenshot assets have source commit, source hash, published hash, dimensions, synthetic/privacy note, and visitor claim recorded in the provenance manifest.
- [ ] Desktop/mobile visual QA, overflow, image, link, anchor, keyboard, focus, console, accessibility, private-path, and claim scans pass on one frozen local commit.
- [ ] No push, merge, deployment, publication, Stripe action, or product-repository mutation occurs.
