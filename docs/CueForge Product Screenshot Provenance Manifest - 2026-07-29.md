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
| CueCheck — Organization Rules | `images/app-screenshots/cuecheck/organization-rules.webp` | Integrated dashboard source `4d53d57c50afa808fe8013e51edcfe4d4606ff3a`; real FastAPI service and throwaway acceptance DB | 1440 × 900 | Read-only state. No production path, rack hostname, IP address, machine inventory, artist or show name. | `b3e0a5426c04505a10c70b4b1f04eb2bc404f80ab398fb4c074b48b083a940ce` |
| CueNotch — Live Sheet DMX map | `images/app-screenshots/cuenotch/live-sheet-dmx-map.webp` | Exact Electron runtime `079fd1202da951a9a6f8ac79825999b6b4c92f00`; synthetic `.dfxdll` | 1440 × 900 | Synthetic three-layer / 24-parameter block. Sharing server stopped; no customer, show, network or audit identity visible. | `d86af84714b475f411d0423a418576a3abf1d46ed757eb2dc42512e0f2afc2a6` |

### Capture method boundary

Browser or localStorage staging was used only to supply public-safe synthetic data to an exact runtime or exact source component. Product repositories were not edited to manufacture marketing states. No production service, authenticated account, customer record or private dashboard was used. Generated illustrations never appear in an evidence slot.

### Capture-pending status

No active dossier route carries a capture-pending placeholder in this release candidate. Every current Software Circuit product page now has reviewed real-interface evidence. CueGrade remains excluded from the public site rather than receiving a placeholder or page.

---

## Non-evidence imagery

These assets are brand and identity artwork. They are never presented as the
software's interface and are not covered by the evidence rule.

| Asset | Role |
|---|---|
| `images/products/*.png` | Product marks used at ~62 px in page headers and in the Software Circuit nodes. |
| `images/products/cuenotch.svg` | CueNotch product mark, authored 2026-07-29 for this pass in the CueForge circuit idiom. |
| `images/cueforge-anvil.svg` | Shared CueForge anvil mark used in every dossier header. |
| `images/og-image.png` | Social sharing card. |

## Retired assets

`images/mockups/cuemaker-mockup.*`, `images/mockups/cuepatch-mockup.*` and
`images/mockups/cueroll-mockup.*` are generated concept renders from the
previous site. As of this pass no page in the repository references them, and
they must not be reintroduced into an evidence slot. The files are retained on
disk as historical artefacts only; deleting them is a separate housekeeping
decision.
