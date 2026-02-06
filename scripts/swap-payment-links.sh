#!/bin/bash
# Swap mailto links → Gumroad checkout links
# Run this after creating Gumroad products

# EDIT THESE after creating products on Gumroad:
CUEROLL_URL="https://cueforgelabs.gumroad.com/l/cueroll"
CUEMAKER_URL="https://cueforgelabs.gumroad.com/l/cuemaker"
CUEPATCH_FREE_URL="https://cueforgelabs.gumroad.com/l/cuepatch-free"
CUEPATCH_BASE_URL="https://cueforgelabs.gumroad.com/l/cuepatch-base"
CUEPATCH_PRO_URL="https://cueforgelabs.gumroad.com/l/cuepatch-pro"

cd ~/clawd/repos/cueforge-labs-website

# CueRoll
sed -i '' "s|mailto:steve@cueforgelabs.com?subject=CueRoll.*\"|$CUEROLL_URL\"|g" cueroll.html
sed -i '' "s|mailto:steve@cueforgelabs.com?subject=CueRoll.*\"|$CUEROLL_URL\"|g" products.html

# CueMaker
sed -i '' "s|mailto:steve@cueforgelabs.com?subject=CueMaker.*\"|$CUEMAKER_URL\"|g" cuemaker.html
sed -i '' "s|mailto:steve@cueforgelabs.com?subject=CueMaker.*\"|$CUEMAKER_URL\"|g" products.html

# CuePatch Free
sed -i '' "s|mailto:steve@cueforgelabs.com?subject=CuePatch%20Free.*\"|$CUEPATCH_FREE_URL\"|g" cuepatch.html
sed -i '' "s|mailto:steve@cueforgelabs.com?subject=CuePatch%20Free.*\"|$CUEPATCH_FREE_URL\"|g" products.html

# CuePatch Base
sed -i '' "s|mailto:steve@cueforgelabs.com?subject=CuePatch%20Base.*\"|$CUEPATCH_BASE_URL\"|g" cuepatch.html
sed -i '' "s|mailto:steve@cueforgelabs.com?subject=CuePatch%20Base.*\"|$CUEPATCH_BASE_URL\"|g" products.html

# CuePatch Pro
sed -i '' "s|mailto:steve@cueforgelabs.com?subject=CuePatch%20Pro.*\"|$CUEPATCH_PRO_URL\"|g" cuepatch.html
sed -i '' "s|mailto:steve@cueforgelabs.com?subject=CuePatch%20Pro.*\"|$CUEPATCH_PRO_URL\"|g" products.html

echo "✅ Payment links updated!"
echo ""
echo "Deploy with: vercel --prod"
