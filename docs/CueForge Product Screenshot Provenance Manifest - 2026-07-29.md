# CueForge Product Screenshot Provenance Manifest - 2026-07-29

Authority for every product image published on the CueForge Labs website.

**Rule:** a CueForge product page may only present an image as the software's
interface when that image is a real capture of the current application running
public-safe data. Generated illustrations, mockups and concept renders must
never appear in an evidence slot. Where a compliant capture does not exist yet,
the page shows an explicit *Capture pending* slot instead.

Governing sources:

- `CueForge Individual Product Pages Reimagination Art Direction Brief - 2026-07-29`
- `CueForge Website Product Page Pricing and Screenshot Migration Audit - 2026-07-29`
- `docs/CueForge Website Product Page Overhaul Implementation Brief - 2026-07-29.md`

---

## Published evidence

All evidence below was visually reviewed before inclusion. Source PNGs remain outside the website repository; the published WebP hashes are the release authority. CuePatch is the sole exception and remains Steve's original byte-identical JPEG.

| Product / state | Published asset | Exact source / baseline | Viewport | Public-safety review | Published SHA-256 |
|---|---|---|---|---|---|
| CuePatch — Builder | `images/mockups/cuepatch-screenshot.jpg` | Steve-selected repository asset; preserved unchanged | 1280 × 767 | Generic unnamed local project. No customer, venue, tour, path, network address or licence identifier. | `9bb44a1b3726b17b911f34aedaa5d7026dee1e397f9dad003d062e7d338890da` |
| CuePack — Build workspace | `images/app-screenshots/cuepack/build-workspace.webp` | Exact `BuildStage` / `BuildItStage` components from `ee74544b166cd4d41172746b0ec4871c72407d15`, rendered in an isolated Vite harness | 1440 × 900 | Synthetic lighting, video and audio inventory and containers. No authenticated service, artist, tour, crew, customer or vendor record. | `ea017e8980a8eba13ec35c9844f06ec6f515d0eebd03cd2052bd3854bffdbbe2` |
| CueRoll — Rehearsal notes | `images/app-screenshots/cueroll/cueroll-rehearsal-notes.webp` | Exact runtime `d087a34`; browser-level synthetic setlist/LTC staging only | 1440 × 900 | Synthetic seven-song setlist and four generic notes. No artist, show, audio path, operator, Notion workspace, network address or credential. | `1077dd2d6c88d2958c1fe749b6388ddb375430f85345d75943c8b18496f9e555` |
| CueMaker — Packaged song editor | `images/app-screenshots/cuemaker/cuemaker-song-editor.webp` | Accepted verification evidence at `be67ef2` | 1440 × 900 | Generic Aurora test song; no absolute path, customer or show identity. | `043016f84cd34843b348fd7653202d007c479891855410602e4b247822433be2` |
| CueMaker — Connected roots | `images/app-screenshots/cuemaker/cuemaker-connected-roots.webp` | Accepted verification evidence at `be67ef2` | 1440 × 900 | Generic source labels; no private path, customer or show identity. | `025c49b6f85390186797f3eba6eed27e782455964d921e3137395cbef5e1479d` |
| CueMaker — Offline MA3 export ready | `images/app-screenshots/cuemaker/cuemaker-ma3-export-ready.webp` | Accepted verification evidence at `be67ef2` | 1440 × 900 | Generic Phase 10 setlist; no private path, customer or show identity. | `90e02de5cb1feeb5ee38fce535aa0aba3a6cd8cdd9c925e787a2a1b50f183ca7` |
| CueScale — Export-ready review | `images/app-screenshots/cuescale/cuescale-export-ready.webp` | Accepted visual-QA evidence at `cbf4200` | 960 × 652 | Synthetic grandMA3 XML fixtures; no private identity or network data. | `81183fad3cb2415919460550c05d569ceda1bf9a8f3b1970a412a8eac8cb4e1c` |
| CueSwitcher — PIP layout designer | `images/app-screenshots/cueswitcher/pip-layout-designer.webp` | Exact Vite runtime `d981da09512cecebb0b3708bb2e28a60324b27cc`; localStorage fixture | 1440 × 900 | Synthetic four-camera show. Hardware is explicitly disconnected; no unsupported live-control proof is implied. | `8a03a5ad83696fb31d6a73a054d5d280f5a5df3ea86262771b9016e99d6761c7` |
| CueSwitcher — Signal path reference | `images/app-screenshots/cueswitcher/cueswitcher-signal-path-reference.webp` | Exact Vite runtime `d981da09512cecebb0b3708bb2e28a60324b27cc`; real `SignalReference` route; 80 m local input | 1440 × 900 | Static product reference data only. No customer, venue, device, host, private path or connected hardware. | `80c361a986370699141a2a15eab204133ba3c6e5c75d4ea6032875086b21945b` |
| CueSwitcher — Lens calculator | `images/app-screenshots/cueswitcher/cueswitcher-lens-calculator.webp` | Exact Vite runtime `d981da09512cecebb0b3708bb2e28a60324b27cc`; real `LensCalculator` route; generic 35 mm / 12 m inputs | 1440 × 900 | Generic calculator values and shipped lens-reference data. No venue, project, operator, private path or connected hardware. | `2fb707189a2a766003c1b4c99b15e84c0d18d6c7c605b38d4d90be3db0f34b21` |
| CueSwitcher — Framing guides | `images/app-screenshots/cueswitcher/cueswitcher-framing-guides.webp` | Exact Vite runtime `d981da09512cecebb0b3708bb2e28a60324b27cc`; real `FramingGuides` route, scrolled to Shot Types and Safe Area Reference | 1440 × 900 | Generic shot diagrams and safe-area overlays. The route's static example IP remains outside the captured viewport and is not present in the image. | `1db1cbf5b0035a78d6435cde049e0b6589dc05cec69d370f589f4c2b096e1f60` |
| CueSwitcher — Planned cue timeline | `images/app-screenshots/cueswitcher/cueswitcher-planned-cue-timeline.webp` | Exact Vite runtime `d981da09512cecebb0b3708bb2e28a60324b27cc`; synthetic localStorage show fixture plus shipped shot-sheet reconciliation | 1440 × 900 | Generic Song 01–03 plan. Transport is stopped, every cue is in standby, and the UI explicitly shows no ATEM, no connection and no timecode source; no rehearsal or recording proof is implied. | `27fc91f8b17715b0d4ca5551f5c4936464741c56414a6497c0b1b440db1bfc39` |
| CueCheck — Organization Rules | `images/app-screenshots/cuecheck/organization-rules.webp` | Integrated dashboard source `4d53d57c50afa808fe8013e51edcfe4d4606ff3a`; real FastAPI service and throwaway acceptance DB | 1440 × 900 | Read-only state. No production path, rack hostname, IP address, machine inventory, artist or show name. | `b3e0a5426c04505a10c70b4b1f04eb2bc404f80ab398fb4c074b48b083a940ce` |
| CueNotch — Live Sheet DMX map | `images/app-screenshots/cuenotch/live-sheet-dmx-map.webp` | Exact Electron runtime `079fd1202da951a9a6f8ac79825999b6b4c92f00`; synthetic `.dfxdll` | 1440 × 900 | Synthetic three-layer / 24-parameter block. Sharing server stopped; no customer, show, network or audit identity visible. | `d86af84714b475f411d0423a418576a3abf1d46ed757eb2dc42512e0f2afc2a6` |

### Capture method boundary

Browser or localStorage staging was used only to supply public-safe synthetic data to an exact runtime or exact source component. Product repositories were not edited to manufacture marketing states. No production service, authenticated account, customer record or private dashboard was used. Generated illustrations never appear in an evidence slot.

The four CueSwitcher workflow frames were built from an untouched Git archive of
`d981da09512cecebb0b3708bb2e28a60324b27cc`. The browser harness supplied only
the generic localStorage fixture and an inert `window.electronAPI` shape because
the Timeline route otherwise dereferences the missing Electron audio bridge and
unmounts. The shim exposes no licence, file, database, switcher, OSC or live-link
capability; it reports ATEM disconnected. A no-shim Signal Reference control was
byte-identical to the shimmed frame. Outbound requests were blocked, including
the Google Fonts stylesheet, so the captures use the application's system-font
fallback. Full capture receipt and source PNGs remain under
`/tmp/cueforge-workflow-evidence-t_933939d4/cueswitcher/` for review.

---

## Accepted workflow-capture reels — 2026-07-30

The CuePack, CueSwitcher and CueNotch dossiers previously presented a single
accepted frame per product plus CSS-cropped regions of it. That reel has been
rebuilt from distinct workflow captures: each figure below is its own capture of
a real product surface, not a crop of a neighbour. Canonical capture receipt:

- `CueForge Workflow Capture Handoff - 2026-07-30.md`
- `CueForge Workflow Capture Asset Manifest - 2026-07-30.json`

The governing revision contains seven CuePack positions, five CueSwitcher
positions and four CueNotch positions. Every source frame is 1440 × 900 and was
independently reviewed at full resolution. The six new website derivatives were
encoded with `cwebp -q 88 -m 6 -mt`; source PNGs remain in the commission
workspace. Published WebP hashes below are the local release authority asserted
by `.qa-final.py`.

Two older accepted assets remain in governed roles: `cuepack/build-workspace.webp`
and `cuenotch/live-sheet-dmx-map.webp`. The ordered position map is exact, so a
figure cannot silently change source, repeat a frame, or restore a superseded
truck or Safe Area view.

### CuePack — schedule to field, seven distinct surfaces

Five story-revision captures use exact CuePack source at commit
`06d9f96a9f7defb4ae3ee4398b624261d2f1b0cc` through a disposable external Vite
harness. The product repository stayed read-only with only its pre-existing
untracked `node_modules`. Fixtures contain eight schedule rows, generic venues,
vendors and crew, rounded internal-production amounts, dimensioned cases and one
synthetic show day. No production service, customer, artist, tour, real venue,
private email, host, address or credential appears.

| Published asset | Exact source route / component / state | Published SHA-256 | Visitor claim |
|---|---|---|---|
| `images/app-screenshots/cuepack/schedule-venue-match.webp` | `ScheduleImportWizard.jsx` / `DocumentPicker.jsx`; Schedule Import → Venue Match; 5 matched + 3 new | `5951fbf4416e6c565c41e99d41aa52b4ba9406fe02bf7197494645f5a2049a54` | Eight dates ready after automatic matching and human-reviewable venue decisions. |
| `images/app-screenshots/cuepack/quote-budget-decision.webp` | `QuoteCompare.jsx` → `ComparisonView`, grid, vendors, summary and `BudgetImpactBar`; three-category comparison | `2a681d4272a875a0cf4ff80be551e37fe47a902f331292bc32a682d7bcf183e5` | Two complete options, explicit winner controls and remaining planning basis; fixture costs, never CuePack pricing. |
| `images/app-screenshots/cuepack/build-workspace.webp` *(retained)* | `BuildStage` / `BuildItStage` at `ee74544b166cd4d41172746b0ec4871c72407d15`; separate fixture | `ea017e8980a8eba13ec35c9844f06ec6f515d0eebd03cd2052bd3854bffdbbe2` | Physical gear-to-case work with unresolved items and container dimensions/fill; not the pictured quote having been purchased. |
| `images/app-screenshots/cuepack/multimodal-pack-planner.webp` | `PackPlanner.jsx`; Truck selected with Truck / Air / Sea visible; 16 assigned cases; 53-foot trailer | `e50eb5784be57ac9722a747b4a30bae0ce3c5a1e8d8dd76d44aef0ccd944143a` | Real multimodal controls and an editable container choice; no booking or certification. |
| `images/app-screenshots/cuepack/truck-pack-3d-populated.webp` | `TruckPack3D` → `PackView` → `TruckScene`; corrected 2026-08-03 synthetic pack at exact source `06d9f96…`; 72 compatible declared cases → one trailer, 12 complete three-wide rows × two layers, 17,840 lb and 76% volume; no reserved load-bar gaps | `ac68be24ff4f65ceb55cb5006f438ff210b1dea6b8c95236a7d48fa21c891351` | Dense group-aware 3D pack shown as a human-reviewed editable draft, not a weight certificate, axle check or legal load inspection. |
| `images/app-screenshots/cuepack/pa-operations.webp` | `PADashboard.jsx`; PA Dashboard; 08:00 call, 3/6 here, late/on-way/overdue | `0fd952137d9f7c964b61a692218b237f97c1e1caabb451c052061138b61970a4` | Exception-first production operations view. |
| `images/app-screenshots/cuepack/crew-day-interface.webp` | `CrewApp.jsx` / `CrewDayView.jsx`; real Preview as Touring Crew path; identity header excluded | `cc778550ad9f926ba060d69f725c54ad5485c4e0fec4ac387b8584b0fba72d0f` | Role-bounded call, status, venue and day facts with no email or private identity. |

Position map: Schedule/Venue Match → Quote/Budget Decision → Build Workspace →
Multimodal Pack Planner → Populated 3D Pack → PA Operations → Crew Day Interface.
Venue matching, quote selection, gear materialisation, pack suggestions and status
changes retain human ownership. CuePack remains *In Development — Private Workflow
Validation*; no automatic purchasing, certified loading, booking, customs filing
or public-sale claim is made.

### CueSwitcher — disconnected planning runtime, five distinct surfaces

The first four accepted frames remain pinned to their recorded isolated source.
Camera Plot uses exact CueSwitcher source commit
`d981da09512cecebb0b3708bb2e28a60324b27cc`, real
`app/src/components/camera-plot/CameraPlot.tsx` Builder mode and only normal
localStorage schemas. Its synthetic Production Study has six generic
camera/operator assignments and eight stage elements. No switcher host, port or
connection was seeded; `No ATEM` and `NOT CONNECTED` remain visible.

| Published asset | Exact source component / state | Published SHA-256 | Visitor claim |
|---|---|---|---|
| `images/app-screenshots/cueswitcher/recorded-cue-timeline.webp` | `Timeline.tsx`; isolated synthetic show | `fad62b8ec9f73d88ca19a3342fd2fed6a08adddbfda0f0769fc6a567653b0c43` | Full-song timeline review, transport idle, no timecode source. |
| `images/app-screenshots/cueswitcher/signal-path-reference.webp` | `SignalReference.tsx` | `b4a5dda598318f1d2b15127e9ca206e09431b14e743f0bb7876dc9cd88b719b4` | Shipped reference only; nothing measured, tested or certified. |
| `images/app-screenshots/cueswitcher/lens-calculator.webp` | `LensCalculator.tsx` | `8873f862bddeef95a0e1f95a87a20405140b28ba7f56d78a94ddcf7519c74f2f` | Field-of-view calculation and ranked shipped lens reference. |
| `images/app-screenshots/cueswitcher/shot-types-reference.webp` | `FramingGuides.tsx` → Shot Types | `73fd81df59f98ffe3eb7bd6319e266e1ff84b5ccf6f2a83d174bd7bb6b8f8139` | Seven cards establishing shared shot vocabulary. |
| `images/app-screenshots/cueswitcher/camera-plot-builder.webp` | `CameraPlot.tsx`; Builder, arena-endstage, 4:3; 6 cameras, 8 elements, CAM 5 editor, preflight Ready | `3942f5795c1db04ade67e7090490efdec3a72ff66d7c7dae574b8856213ed2bc` | Vocabulary applied to camera placement, geometry, operators, lenses and framings; planning-ready is not hardware-connected. |

Position map: Show Timeline → Signal Path Reference → Lens Calculator → Shot Types →
Camera Plot Builder. `safe-area-guides.webp` is superseded because it duplicated the
Framing Guides route already represented by Shot Types; `.qa-final.py` bans it
from active routes alongside the earlier withdrawn PIP asset.

### CueNotch — localhost-only runtime, four public-safe surfaces

Source commit `079fd1202da951a9a6f8ac79825999b6b4c92f00`. Runtime was
localhost-only against a synthetic private-validation show and block. The
documentation server served that machine only.

| Published asset | Exact source component | Published SHA-256 | Visitor claim |
|---|---|---|---|
| `images/app-screenshots/cuenotch/crew-docs-hub.webp` | renderer `/` — Live Docs crew/programmer hub | `13009a78231236cacb52f501d0855cc39c6b68c014b20f25866244fc1bca9ce2` | The generated documentation hub — the crew and programmer documents produced from one block, with a block summary of three layers, 93 total and 93 exported parameters and 30 FX parameters. |
| `images/app-screenshots/cuenotch/operator-sheet-fx-detail.webp` | renderer `/operator` — Per-Song FX Detail | `3a6dd5c9cf6be46d98917006e5fa6ac55f2c3bd11cd784ed788fa1c8dd958afb` | The desk operator's per-song FX sheet: slot, DMX channel, console channel, range, default and function, filtered per layer. |
| `images/app-screenshots/cuenotch/director-sheet-quad-routing.webp` | renderer `/director` — Quad Routing / Physical Arrangement | `1dfffeca847cfd561bf0fd5c5201c1ac01915e9698bd369dccc0ad82505965a4` | The video director's sheet: 2×2 quad source routing, screen-panel overlay at source scale, and the physical screen arrangement at true aspect. |
| `images/app-screenshots/cuenotch/live-sheet-dmx-map.webp` *(retained 2026-07-29 asset, position 4)* | Electron runtime `079fd1202da951a9a6f8ac79825999b6b4c92f00`, Live Sheet DMX Usage view, synthetic `.dfxdll` | `d86af84714b475f411d0423a418576a3abf1d46ed757eb2dc42512e0f2afc2a6` | The channel map itself: 24 of 128 channels in use on a synthetic three-layer block, with the unexported channels held back rather than padded, and per-parameter DMX channel, console channel, range, default and bit depth. Live server shown **stopped**. |

Position map (document order): director sheet quad routing → operator sheet FX
detail → crew documentation hub → Live Sheet DMX map. **This dossier fills four
positions, not five.** The recovery contract's conditional fifth position was a
second crop of the hero capture; publishing the same frame twice would breach
the manifest's own no-duplicate-source rule and would present one state as two,
so the authorised alternative was taken — a full-frame treatment of the one
DMX/live-sheet reference, with no invented content. `.qa-final.py` enforces four
distinct sources for `cuenotch.html`.

**Differing block fixtures.** The Live Sheet frame is a separate session on a
smaller synthetic block (three layers, 24 parameters, 24 exported) than the
three 2026-07-30 frames (three layers, 93 parameters, 93 exported, 30 FX). The
counts therefore differ between figures, and `cuenotch.html` states this in its
page-level evidence note rather than implying one continuous session.

**Explicit CueNotch exclusions.** Three captures from the same session were
reviewed and **rejected for public use**. None may be published, and
`.qa-final.py` fails on any `cuenotch.html` image reference containing
`set-list`, `operator-sheet-overview` or `layer-snapshot`, or on any such file
appearing in `images/app-screenshots/cuenotch/`.

| Rejected capture | Reason for exclusion |
|---|---|
| `03-set-list.png` | Rendering defect — visibly renders escaped `<strong ...>` markup in the block hint. |
| `01b-operator-sheet-overview.png` | Layout defect — the capture harness flagged sticky-element overlap. |
| `04-layer-snapshot.png` | Visually valid synthetic output, but exposes more internal parameter vocabulary than the public reel needs. Excluded as unnecessary exposure, not as a defect. |

Availability boundary: `cuenotch.html` states *Private Validation — Not Publicly
Released* in the status chip, the readiness panel and the page-level evidence
note. The page publishes no price, no download, no purchase path and no release
date, and none of the four accepted frames is presented as a released product.
The Live Sheet frame shows a local server that is *stopped*; even a running
localhost document view would not constitute public availability, and the page
says so.

### Superseded but retained

The following previously accepted assets are no longer referenced by any route
after this rebuild. They remain on disk with their original provenance intact
for audit and history, and must not be reintroduced into a reel that is
asserted to be an exact accepted set:

- `images/app-screenshots/cueswitcher/pip-layout-designer.webp`
- `images/app-screenshots/cueswitcher/cueswitcher-signal-path-reference.webp`
- `images/app-screenshots/cueswitcher/cueswitcher-lens-calculator.webp`
- `images/app-screenshots/cueswitcher/cueswitcher-framing-guides.webp`
- `images/app-screenshots/cueswitcher/cueswitcher-planned-cue-timeline.webp`

`pip-layout-designer.webp` is **withdrawn from `cueswitcher.html` specifically**
by the 2026-07-30 recovery contract. `.qa-final.py` fails if the filename appears
on any published route. Its withdrawal is an evidence-surface decision, not a
public-safety rejection, and it does not retract any supported switcher-adapter
claim made elsewhere on the site.

`cuepack/build-workspace.webp` and `cuenotch/live-sheet-dmx-map.webp` were listed
here in the interim state of this rebuild. Both are **published again** as of the
2026-07-30 recovery, at CuePack position 5 and CueNotch position 4 respectively,
with their original hashes and provenance intact.

---

### Capture-pending status

No active dossier route carries a capture-pending placeholder in this release candidate. Every current Software Circuit product page now has reviewed real-interface evidence. CueGrade remains excluded from the public site rather than receiving a placeholder or page.

---

## Business Solutions app evidence

Two Business Solutions modules have accepted public-safe interface evidence and
therefore have dedicated routes: `front-desk-ai.html` and `invoicepack.html`.
The same evidence rule applies — no illustration, mockup or invented state may
occupy an evidence slot, and no crop may be used to imply behaviour the build
does not have.

### Front Desk AI — fictional-data rehearsal captures

Source baseline (sanitized): *Front Desk AI synthetic rehearsal* — accepted
screenshot commit `a23a99b94fb3f1a58f54f192b2c3c1222e19661f`, current clean
handoff `bf3b82d55563ebd6507a92d9fbaf00e0ea49300f`.

Captures come from a private rehearsal workspace running fictional fixture
data with no external tools connected. **The build's own top disclosure is
visible in every published frame; no crop removes it.** Published frames are
the source frames — no cropping, resampling or retouching was applied, so
published dimensions equal source dimensions.

Public-safety review: invented business, callers, addresses and conversations.
No real customer, no authenticated account, no telephony or voice provider
identity, no network address, no credential and no private path is visible.
Visitor-facing captions state `Fictional-data product capture` and name the
private synthetic-data rehearsal. No live-provider acceptance, paying pilot,
self-service signup, automatic quote or guaranteed-result claim is made.

| Published asset | Exact source file | Dimensions | Source SHA-256 | Published SHA-256 | Visitor claim |
|---|---|---|---|---|---|
| `images/app-screenshots/front-desk-ai/structured-call-outcome.webp` | `inbox-desktop-light.png` | 1440 × 1000 | `56cbe97841e000ff54e55c484192b2b49fa99aec5663240a71da05d958fb516f` | `9706d3e473895d0f462388f14ef43a24347c5d1fea80d0756700d7114d76b131` | An inbound call is captured as a structured outcome — intent, disposition, summary, open questions and a recommended next action for the owner. |
| `images/app-screenshots/front-desk-ai/owner-action-desk.webp` | `today-desktop-light.png` | 1440 × 1000 | `6d6c2fb9fcd4898a729d016ee1d7180d68d8adc7e2922dd047fca689a66bb3f4` | `7f421ed998e8a7dac3f145cd7b2ef81195f478523ebd5f7818421731eb1269ed` | Owner action desk with captured / needs-review / escalation counts, a failed owner alert surfaced as a recovery task, an appointment held as requested rather than booked, and a quote draft that has not been sent, accepted or paid. |
| `images/app-screenshots/front-desk-ai/connected-customer-record.webp` | `customers-desktop-light.png` | 1440 × 1000 | `a045c9d2ffd00d0eb5da02cb3e0964f2a030ee3e4162229fe4a17d24feee30c3` | `aaf118a28f7ac2a6ff8961b254573fd36576fe636d0ea713b27246ec2a6e3280` | The call becomes a durable customer record with conversations, current work marked *pricing not set*, an intake document needing review, and an activity trail. |
| `images/app-screenshots/front-desk-ai/jobs-pipeline.webp` | `jobs-desktop-light.png` | 1440 × 1000 | `4a48be5f99aa12666e7e77fc4ff15aa672244286cbfcd97b3422fbfe4d8b50fd` | `e9c9cfb36ce96c0c785817cb4ee1ffa912bd4fb66d37553092c74fac2993bd0d` | Work pipeline from inquiry toward completion, with both open jobs marked *estimate needs owner input* and the later columns empty. |
| `images/app-screenshots/front-desk-ai/structured-inbox-mobile.webp` | `inbox-mobile-light.png` | 390 × 844 | `e4c67f65cdf45c5ad5b15c1ccb7283bdf333602e86bf4a75983a38a21f5466d1` | `475fd7f003878d4cf40163e209b85107466dad0156fd46b7ff83d1e91b5b199d` | The same structured inbox at a true 390 px phone viewport, disclosure banner and status tags intact. |

### InvoicePack — synthetic local-vault acceptance evidence

Source baseline (sanitized): *InvoicePack synthetic local-vault acceptance
evidence* — runtime commit `e272b5610e8b7d7318c7a19764aa597e4e517ab9`, current
brand decision `127987eb016269133684e7e58e76ab0d28728f6d`.

Published frames are **physical crops** of the exact runtime captures. Crop
boxes are recorded below as `(left, top)-(right, bottom)` in source pixels.
Pixels inside the crop box are preserved; nothing is resampled, retouched or
recomposed. The crops remove superseded chrome above the working area; the
resulting frames are the release authority.

Public-safety review: invented client, project, agreement and receipt data in a
throwaway local vault. No real client, contract, receipt, tax or payment
document, no authenticated service, no network address, no credential and no
user-specific filesystem path is visible. Visitor-facing captions disclose that
each view is cropped from exact synthetic local-vault runtime evidence, and the
page publishes no price, no distribution path, no signing claim and no
completed Client Hub handoff claim.

| Published asset | Exact source file | Source dimensions | Source SHA-256 | Crop box | Published dimensions | Published SHA-256 | Visitor claim |
|---|---|---|---|---|---|---|---|
| `images/app-screenshots/invoicepack/accepted-facts-to-draft.webp` | `05-draft-hydrated-from-facts.png` | 1200 × 788 | `316bd2b121a5730bf872fae012a8bb51a1085a0c7edd8923fcf72cf3195afa17` | `(0,58)-(1200,788)` | 1200 × 730 | `eeb98a96f760f7bfbcd47b5bbc6dbc30c92200a0918b7548d7f0d72eb4b5aee5` | Cited facts accepted one at a time, with the draft unchanged until the accepted set is applied, beside deterministic contract attention flags that are explicitly not legal advice. |
| `images/app-screenshots/invoicepack/invoice-preview-detail.webp` | `07-builder-hydrated.png` | 1200 × 788 | `4584d6d91278f24af41f8e050047e689012a4490ae00cb18249454d502f8fde0` | `(548,118)-(1200,788)` | 652 × 670 | `9773e84c0b11812a4251993c14c6ebd889ff87a53517b2176eef1588ff395084` | The branded, neutral live document a client would read, labelled as a preview to verify against the exported PDF before sending. |
| `images/app-screenshots/invoicepack/rate-change-and-preview.webp` | `08-billable-line-added-saved.png` | 1200 × 788 | `52101b07189d7ed8357eb9f917aa8276bb2d4b95a321a3f4bdb2e11b3d81ee50` | `(0,118)-(1200,788)` | 1200 × 670 | `440b9368042e2fb86e5429ade5558a6b2353de31a8e8c9bbcd9ea78b5dbe9db4` | Rate profiles and line items on the left, the live document recomputing on the right, with per-invoice rate edits stated not to change the saved preset. |
| `images/app-screenshots/invoicepack/work-packet-exported.webp` | `09-work-packet-exported.png` | 1200 × 788 | `ba436a78af2616b055f83c257d47b29dfdeb920d5d37dfad4881bb6b09cdc336` | `(0,58)-(1200,788)` | 1200 × 730 | `354dfc36071908032363e5040ca57eaaab9e5eba043aa0ada80b3b9237d29f5b` | Local vault active, a work packet exported with its entry count and content hash, byte-for-byte source preservation, and the persistence summary for the project. |
| `images/app-screenshots/invoicepack/local-vault-mobile.webp` | `10-vault-390x844.png` | 390 × 844 | `15eaa25392579877a4739e717f744eb319984153d1e6e406791f1ebe0a58d8e0` | `(0,52)-(390,844)` | 390 × 792 | `6f03deada707a56b5753732f70cc64bb25a993327e1541c1226585fd3e0e27e3` | The same local vault at a true 390 px phone viewport, with the local-storage statement and vault controls intact. |

### Suite-page previews

`business-solutions.html` presents Front Desk AI and InvoicePack through
CSS-framed regions of `structured-call-outcome.webp` and
`work-packet-exported.webp` respectively. No pixels are redrawn, both cards
disclose the synthetic boundary in body copy, and both route to the dedicated
page. Client Hub and Quote Tracker keep explanatory diagram treatments because
no public-safe interface evidence has been accepted for them.

The previously considered full suite-hub screenshot remains **excluded**: it
contains synthetic module and commercial states plus unapproved prices, and a
cropped top section would still imply Quote Tracker activation.

---

## Non-evidence imagery

These assets are brand and identity artwork. They are never presented as the
software's interface and are not covered by the evidence rule.

| Asset | Role |
|---|---|
| `images/products/invoicepack.png` | Exact approved Forge Mint production icon-ladder asset at 64 × 64, SHA-256 `46234990fac626ba3830a992cb2bd3b44e00fc3662b1fd12458d9887443b1e36`, copied without alteration from accepted InvoicePack I9B commit `367f0822a55530ddc289cd65636fc12e533afc69`. The native small-size fallback preserves the paper bundle and mint binding band while intentionally omitting unreadable band text. Used in Business Solutions and the InvoicePack dossier opening. |
| `images/products/pocketcounsel-mark.png` | PocketCounsel circuit-node mark. Exact 132 × 128 RGBA derivative, SHA-256 `644f87bf693775c3228ee9fdf8b276c745b69d2a03ed2f6dd187d1e24564bfd6`. Built by filling a 132 × 128 canvas with the source's exact `#172836` corner field and pasting the untouched 124 × 124 canonical pixels at `(4,2)`. No resize, resample, sharpen or recolour is applied; the four-pixel source-level right adjustment is Steve's optical-nudge lane, and CSS remains `transform: none`. |
| `images/products/cuenotch.svg` | Exact approved CueNotch Signal Notch master SVG, SHA-256 `d7f9ea276014e108c40ffc652c834fa731273c79e835ded0d820fb2998182241`. |
| `images/products/cuescale.svg` | Exact approved CueScale Single Spine master SVG, SHA-256 `557b7e2bfd1b198378f1ba16af78e433fd24528583b0301d630d2c05d2c404a7`. |
| `images/cueforge-anvil.svg` | Shared CueForge anvil mark used in every dossier header. |
| `images/og-image.png` | Social sharing card. |

## Retired assets

`images/mockups/cuemaker-mockup.*`, `images/mockups/cuepatch-mockup.*` and
`images/mockups/cueroll-mockup.*` are generated concept renders from the
previous site. As of this pass no page in the repository references them, and
they must not be reintroduced into an evidence slot. The files are retained on
disk as historical artefacts only; deleting them is a separate housekeeping
decision.
