# Mobile Tech Lab - Shopify Dawn Customization

Complete theme customization files for your Dawn theme.

## Files Included

- `assets/custom.css` - Brand styles (already exists)
- `layout/theme.liquid` - With Google Fonts Inter + custom.css linked
- `sections/main-product.liquid` - With MTL blocks (condition selector, trust badges, bundle upsells)
- `sections/mtl-trust-bar.liquid`, `mtl-trade-in-banner.liquid`, `mtl-repair-services.liquid` - Custom sections

## Installation

1. **Upload `custom.css`** to your theme's Assets folder
2. **Replace `theme.liquid`** in your theme's Layout folder
3. **Replace `main-product.liquid`** in your theme's Sections folder
4. **Upload the `mtl-*.liquid` files** to your theme's Sections folder

## New Product Page Blocks

After installing, go to **Theme Customizer → Product Page** and add these blocks:
- **MTL Condition Selector** - Pre-owned device condition (Excellent/Good/Fair)
- **MTL Trust Badges** - 90-Day Warranty, Tested & Certified, Free Shipping
- **MTL Bundle Upsells** - Trade-in, Data Transfer, Repair CTAs

## Design System

- Primary: `#E53935` (red)
- Foreground: `#21252b`
- Font: Inter
- Border radius: 8px
