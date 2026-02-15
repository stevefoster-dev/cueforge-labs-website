#!/bin/bash
# Wire Stripe Payment Links into CueForge Labs website
# Usage: ./scripts/wire-checkout.sh
#
# Steve: Create Stripe Payment Links first, then paste the URLs below.
# Payment Links are created at: https://dashboard.stripe.com/payment-links
#
# After running this script, commit and push to deploy.

set -euo pipefail
cd "$(dirname "$0")/.."

# ============================================================
# 🔧 CONFIGURE THESE — Paste your Stripe Payment Link URLs
# ============================================================

# CueRoll - $79 one-time
CUEROLL_URL=""

# CueMaker - $79 one-time  
CUEMAKER_URL=""

# CuePatch Base - $129 one-time (2 machines, personal/freelance)
CUEPATCH_BASE_URL=""

# CuePatch Pro - $249 one-time (5 machines, commercial)
CUEPATCH_PRO_URL=""

# CueForge Suite - $199 one-time (all tools bundle, save $88)
SUITE_URL=""

# ============================================================
# Validate
# ============================================================
check_url() {
  local name="$1"
  local url="$2"
  if [[ -z "$url" ]]; then
    echo "⚠️  $name is empty (optional)"
    return 1
  elif [[ ! "$url" =~ ^https:// ]]; then
    echo "❌ $name doesn't look like a URL: $url"
    return 1
  else
    echo "✅ $name: $url"
    return 0
  fi
}

echo "🔗 Checking checkout URLs..."
echo ""

valid=0
check_url "CUEROLL_URL" "$CUEROLL_URL" && ((valid++)) || true
check_url "CUEMAKER_URL" "$CUEMAKER_URL" && ((valid++)) || true
check_url "CUEPATCH_BASE_URL" "$CUEPATCH_BASE_URL" && ((valid++)) || true
check_url "CUEPATCH_PRO_URL" "$CUEPATCH_PRO_URL" && ((valid++)) || true
check_url "SUITE_URL" "$SUITE_URL" && ((valid++)) || true

echo ""

if [[ $valid -eq 0 ]]; then
  echo "❌ No URLs configured. Edit this script first."
  echo ""
  echo "Steps to create Stripe Payment Links:"
  echo "1. Go to https://dashboard.stripe.com/payment-links"
  echo "2. Click '+ New' to create a payment link"
  echo "3. For each product:"
  echo "   • CueRoll: \$49 one-time"
  echo "   • CueMaker: \$79 one-time"
  echo "   • CuePatch Base: \$129 one-time (mention: 2 machine license)"
  echo "   • CuePatch Pro: \$249 one-time (mention: 5 machine license, commercial)"
  echo "   • CueForge Suite: \$199 one-time (all tools, save \$58)"
  echo "4. Copy each payment link URL"
  echo "5. Paste them into this script"
  echo "6. Run ./scripts/wire-checkout.sh again"
  exit 1
fi

echo "Wiring $valid checkout URLs into pages..."

# ============================================================
# Replace buy links in HTML files
# ============================================================

# CuePatch page - Base and Pro buttons
if [[ -n "$CUEPATCH_BASE_URL" ]]; then
  echo "  → Wiring CuePatch Base..."
  # Replace mailto: buy links for CuePatch Base
  sed -i '' "s|href=\"mailto:steve@cueforgelabs.com?subject=CuePatch%20Base[^\"]*\"|href=\"$CUEPATCH_BASE_URL\" target=\"_blank\"|g" cuepatch.html
fi

if [[ -n "$CUEPATCH_PRO_URL" ]]; then
  echo "  → Wiring CuePatch Pro..."
  # Replace mailto: buy links for CuePatch Pro
  sed -i '' "s|href=\"mailto:steve@cueforgelabs.com?subject=CuePatch%20Pro[^\"]*\"|href=\"$CUEPATCH_PRO_URL\" target=\"_blank\"|g" cuepatch.html
fi

# CueRoll page
if [[ -n "$CUEROLL_URL" ]] && [[ -f "cueroll.html" ]]; then
  echo "  → Wiring CueRoll..."
  # Replace mailto: buy links
  sed -i '' "s|href=\"mailto:steve@cueforgelabs.com?subject=CueRoll[^\"]*\"|href=\"$CUEROLL_URL\" target=\"_blank\"|g" cueroll.html
fi

# CueMaker page
if [[ -n "$CUEMAKER_URL" ]] && [[ -f "cuemaker.html" ]]; then
  echo "  → Wiring CueMaker..."
  sed -i '' "s|href=\"mailto:steve@cueforgelabs.com?subject=CueMaker[^\"]*\"|href=\"$CUEMAKER_URL\" target=\"_blank\"|g" cuemaker.html
fi

# Suite page
if [[ -n "$SUITE_URL" ]] && [[ -f "suite.html" ]]; then
  echo "  → Wiring Suite bundle..."
  sed -i '' "s|href=\"mailto:steve@cueforgelabs.com?subject=CueForge%20Suite[^\"]*\"|href=\"$SUITE_URL\" target=\"_blank\"|g" suite.html
fi

# Products overview page - update all buy links
if [[ -f "software-circuit.html" ]]; then
  echo "  → Wiring products page..."
  [[ -n "$CUEROLL_URL" ]] && sed -i '' "s|href=\"mailto:steve@cueforgelabs.com?subject=CueRoll[^\"]*\"|href=\"$CUEROLL_URL\" target=\"_blank\"|g" software-circuit.html
  [[ -n "$CUEMAKER_URL" ]] && sed -i '' "s|href=\"mailto:steve@cueforgelabs.com?subject=CueMaker[^\"]*\"|href=\"$CUEMAKER_URL\" target=\"_blank\"|g" software-circuit.html
  [[ -n "$CUEPATCH_BASE_URL" ]] && sed -i '' "s|href=\"mailto:steve@cueforgelabs.com?subject=CuePatch[^\"]*\"|href=\"$CUEPATCH_BASE_URL\" target=\"_blank\"|g" software-circuit.html
fi

echo ""
echo "✅ Done! Checkout links wired."
echo ""
echo "Next steps:"
echo "1. Test locally: open cuepatch.html in browser, click Buy buttons"
echo "2. Commit: git add -A && git commit -m 'feat: wire Stripe checkout links'"
echo "3. Deploy: npx vercel --prod --yes"
