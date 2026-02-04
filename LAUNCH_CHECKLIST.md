# CueForge Labs — Launch Checklist

**Goal:** Get products listed and purchasable TODAY.

---

## 🚀 Fastest Path to Revenue: Gumroad

Gumroad is the fastest way to sell digital products. No code changes needed.

### Step 1: Create Gumroad Account (5 min)
1. Go to [gumroad.com](https://gumroad.com) → Sign up
2. Connect Stripe/PayPal for payouts
3. Set profile name: "CueForge Labs"

### Step 2: Create Products (15 min each)

#### CueRoll — $49
- **Title:** CueRoll — LTC Timecode Note-Taking
- **Price:** $49 (one-time)
- **Description:**
  ```
  Take notes synchronized to live timecode. Perfect for tech rehearsals, show calls, and post-show notes.

  ✓ Real-time LTC decoding (native Rust decoder)
  ✓ Timestamped notes export
  ✓ Session management
  ✓ Multi-format export (CSV, JSON, PDF)

  Built by a touring LD. Tested on Taylor Swift, Harry Styles, Cher, and 100+ live productions.

  macOS only. Requires audio interface with LTC input.
  ```
- **Files:** Upload CueRoll.dmg or .zip
- **Thumbnail:** Use product icon or create in Gemini

#### CueMaker — $79
- **Title:** CueMaker — LTC to grandMA3 Cue Maker
- **Price:** $79 (one-time)
- **Description:**
  ```
  LTC timecode reader with live marker creation and direct grandMA3 XML export.

  ✓ LTC decode + MTC output
  ✓ Waveform visualization
  ✓ Live marker creation (hit M while listening)
  ✓ grandMA3 XML export (drop into your show file)
  ✓ 6-channel audio mixer for monitoring

  Program timecoded shows on the road. No console required.

  macOS only. Requires audio interface.
  ```
- **Files:** Upload CueMaker.dmg or .zip

#### CuePatch — Free / Base $129 / Pro $249
- **Title:** CuePatch — Pixel Map Builder
- **Price:** $0 (free) / $129 (Base) / $249 (Pro)
- **Description:**
  ```
  Generate pixel-perfect test patterns for LED video walls.

  FREE VERSION:
  ✓ Single surface support
  ✓ Basic tile labels
  ✓ PNG export

  BASE VERSION ($129):
  ✓ Multi-surface support
  ✓ Built-in tile database (ROE, Absen, Unilumin, INFiLED)
  ✓ Calibration patterns
  ✓ Batch export
  ✓ NotchLC support

  Stop hand-drawing pixel maps. Generate them in seconds.
  ```

### Step 3: Get Product Links (2 min)
After creating each product, Gumroad gives you links like:
- `https://cueforgelabs.gumroad.com/l/cueroll`
- `https://cueforgelabs.gumroad.com/l/cuemaker`
- `https://cueforgelabs.gumroad.com/l/cuepatch`

### Step 4: Update Website (5 min)
Replace placeholder links in `products.html`:

```html
<!-- CueRoll -->
<a href="https://cueforgelabs.gumroad.com/l/cueroll" class="btn btn-primary">Buy Now →</a>

<!-- CueMaker -->
<a href="https://cueforgelabs.gumroad.com/l/cuemaker" class="btn btn-primary">Buy Now →</a>

<!-- CuePatch -->
<a href="https://cueforgelabs.gumroad.com/l/cuepatch" class="btn btn-primary">Try Free →</a>
```

### Step 5: Deploy Website
```bash
# If using GitHub Pages
git add -A && git commit -m "Add Gumroad buy links" && git push

# If using Vercel
vercel --prod
```

---

## 📦 Product Files — READY TO UPLOAD

| Product | File | Size | Status |
|---------|------|------|--------|
| CueRoll | `~/clawd/repos/CueRoll/dist/CueRoll-0.1.0-arm64.dmg` | 186 MB | ✅ READY |
| CueMaker | `~/clawd/repos/CueMaker/dist/CueMaker-0.1.0-arm64.dmg` | 218 MB | ✅ READY |
| CuePatch | `~/clawd/repos/CuePatch/release/CuePatch-0.1.0-arm64.dmg` | 91 MB | ✅ READY |

To rebuild if needed:
```bash
cd ~/clawd/repos/CueRoll && npm run package:mac
cd ~/clawd/repos/CuePatch && npm run package:mac
```

**Note:** Apps are not code-signed (no Apple Developer ID). Users will see a Gatekeeper warning.
To bypass: Right-click → Open → Open anyway. Document this in product description.

---

## 🎨 Product Images

Gumroad needs:
- **Cover image:** 1280x720 or 1600x900
- **Thumbnail:** 600x600

Quick option: Use Gemini (nano-banana-pro) to generate:
```bash
GEMINI_API_KEY="..." uv run /opt/homebrew/lib/node_modules/clawdbot/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "CueRoll software product cover, timecode display, dark theme, professional production software, 16:9 aspect ratio" \
  --filename "cueroll-cover.png" \
  --resolution 2K
```

---

## ⏱️ Time Estimate

| Task | Time |
|------|------|
| Create Gumroad account | 5 min |
| Create 3 products | 45 min |
| Update website links | 5 min |
| Deploy | 2 min |
| **Total** | **~1 hour** |

---

## 🔥 After Launch

1. **Post in communities:**
   - r/lightingdesign
   - r/VIDEOENGINEERING
   - r/GrandMA3
   - MA Lighting Forum
   - LinkedIn

2. **Email the leads list:**
   - Rhys Kiernan (local connection!)
   - Production contacts from previous tours

3. **Track sales:**
   - Gumroad dashboard shows real-time sales
   - Set up email notifications

---

*Created by Stacy 🪿 | 2026-02-02 2:00 AM*
