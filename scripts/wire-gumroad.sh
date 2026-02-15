#!/bin/bash
# Wire Gumroad buy links into CueForge Labs website
# Usage: ./scripts/wire-gumroad.sh
#
# Steve: Create your Gumroad products first, then paste the URLs below.
# Each product URL looks like: https://yourname.gumroad.com/l/ABCDEF
#
# After running this script, commit and push to deploy.

set -euo pipefail
cd "$(dirname "$0")/.."

# ============================================================
# 🔧 CONFIGURE THESE — Paste your Gumroad product URLs
# ============================================================
CUEROLL_URL=""        # e.g. https://cueforge.gumroad.com/l/cueroll
CUEMAKER_URL=""       # e.g. https://cueforge.gumroad.com/l/cuemaker
CUEPATCH_BASE_URL=""  # e.g. https://cueforge.gumroad.com/l/cuepatch
CUEPATCH_PRO_URL=""   # e.g. https://cueforge.gumroad.com/l/cuepatch-pro
SUITE_URL=""          # e.g. https://cueforge.gumroad.com/l/cueforge-suite

# ============================================================
# Validate
# ============================================================
missing=0
for var in CUEROLL_URL CUEMAKER_URL CUEPATCH_BASE_URL CUEPATCH_PRO_URL; do
  if [[ -z "${!var}" ]]; then
    echo "❌ $var is empty — edit this script first"
    missing=1
  fi
done
if [[ $missing -eq 1 ]]; then
  echo ""
  echo "Steps:"
  echo "1. Go to https://gumroad.com and create an account"
  echo "2. Create products: CueRoll ($79), CueMaker ($79), CuePatch Base ($129), CuePatch Pro ($249)"
  echo "3. Upload the DMGs for each product"
  echo "4. Copy each product URL and paste it above"
  echo "5. Run this script again"
  exit 1
fi

echo "🔗 Wiring Gumroad links..."

# ============================================================
# Add Gumroad overlay JS to pages that don't have it
# ============================================================
add_gumroad_js() {
  local file="$1"
  if ! grep -q "gumroad.com/js/gumroad" "$file" 2>/dev/null; then
    # Insert before </head>
    sed -i '' 's|</head>|  <script src="https://gumroad.com/js/gumroad.js"></script>\n</head>|' "$file"
    echo "  ✅ Added Gumroad JS to $file"
  fi
}

for page in cueroll.html cuemaker.html cuepatch.html products.html suite.html; do
  [[ -f "$page" ]] && add_gumroad_js "$page"
done

# ============================================================
# Replace mailto: buy links with Gumroad links
# ============================================================

# CueRoll
if [[ -n "$CUEROLL_URL" ]]; then
  sed -i '' "s|mailto:steve@cueforgelabs.com?subject=CueRoll%20Purchase[^\"]*|${CUEROLL_URL}|g" cueroll.html products.html 2>/dev/null || true
  echo "  ✅ CueRoll buy links → $CUEROLL_URL"
fi

# CueMaker
if [[ -n "$CUEMAKER_URL" ]]; then
  sed -i '' "s|mailto:steve@cueforgelabs.com?subject=CueMaker%20Purchase[^\"]*|${CUEMAKER_URL}|g" cuemaker.html products.html 2>/dev/null || true
  echo "  ✅ CueMaker buy links → $CUEMAKER_URL"
fi

# CuePatch Base
if [[ -n "$CUEPATCH_BASE_URL" ]]; then
  sed -i '' "s|mailto:steve@cueforgelabs.com?subject=CuePatch%20Base%20Purchase[^\"]*|${CUEPATCH_BASE_URL}|g" cuepatch.html products.html 2>/dev/null || true
  echo "  ✅ CuePatch Base buy links → $CUEPATCH_BASE_URL"
fi

# CuePatch Pro
if [[ -n "$CUEPATCH_PRO_URL" ]]; then
  sed -i '' "s|mailto:steve@cueforgelabs.com?subject=CuePatch%20Pro%20Purchase[^\"]*|${CUEPATCH_PRO_URL}|g" cuepatch.html products.html 2>/dev/null || true
  echo "  ✅ CuePatch Pro buy links → $CUEPATCH_PRO_URL"
fi

# Suite deal (if configured)
if [[ -n "${SUITE_URL:-}" ]]; then
  sed -i '' "s|mailto:steve@cueforgelabs.com?subject=CueForge%20Suite[^\"]*|${SUITE_URL}|g" suite.html products.html 2>/dev/null || true
  echo "  ✅ Suite buy links → $SUITE_URL"
fi

# Add gumroad-overlay class to buy buttons for overlay checkout
for page in cueroll.html cuemaker.html cuepatch.html products.html suite.html; do
  if [[ -f "$page" ]]; then
    sed -i '' 's|class="btn-primary" >Buy|class="btn-primary gumroad-overlay" >Buy|g' "$page" 2>/dev/null || true
    sed -i '' 's|class="btn-primary">Buy|class="btn-primary gumroad-overlay">Buy|g' "$page" 2>/dev/null || true
  fi
done

echo ""
echo "✅ All buy links wired to Gumroad!"
echo ""
echo "Next steps:"
echo "  1. Open the pages locally to verify links"
echo "  2. git add -A && git commit -m 'feat: wire Gumroad buy links'"
echo "  3. git push (auto-deploys to GitHub Pages)"
echo ""
echo "Customers will get an overlay checkout experience — no redirect needed."
