#!/bin/bash
# Strip all pricing from CueForge website HTML files
# Replace with "Coming Soon" / "Join the Beta" messaging
cd "$(dirname "$0")"

echo "Stripping pricing from CueForge Labs website..."

# ============================================
# products.html — JS object pricing data
# ============================================
sed -i '' \
  -e "s/pricing: { prices: \[.*\], note: '.*' }/pricing: { prices: ['Coming Soon'], note: 'Suite pricing launching soon' }/g" \
  products.html
echo "✓ products.html"

# ============================================
# software-circuit.html — JS price fields
# ============================================
sed -i '' \
  -e "s/price: 'Base \$199 \/ Pro \$499'/price: 'Coming Soon'/g" \
  -e "s/price: 'From \$249\/mo'/price: 'Coming Soon'/g" \
  -e "s/price: '\$199 \/ Team \$499'/price: 'Coming Soon'/g" \
  -e "s/price: '\$79'/price: 'Coming Soon'/g" \
  -e "s/price: 'From \$50\/day'/price: 'Coming Soon'/g" \
  -e "s/price: '\$349'/price: 'Coming Soon'/g" \
  software-circuit.html
echo "✓ software-circuit.html"

# ============================================
# docs.html — badge prices
# ============================================
sed -i '' \
  -e 's/<span class="badge badge-lavender">\$49<\/span>/<span class="badge badge-lavender">Coming Soon<\/span>/g' \
  -e 's/<span class="badge badge-green">\$79<\/span>/<span class="badge badge-green">Coming Soon<\/span>/g' \
  -e 's/<span class="badge badge-teal">Free \/ Base \$199 \/ Pro \$499<\/span>/<span class="badge badge-teal">Coming Soon<\/span>/g' \
  -e 's/Base (\$129):/Base:/g' \
  docs.html
echo "✓ docs.html"

echo ""
echo "Done. Individual app pages need manual editing (complex HTML structures)."
echo "Run: git diff --stat to review changes."
