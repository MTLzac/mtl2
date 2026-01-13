# Mobile Tech Lab - Shopify Dawn Customization

This folder contains all the custom CSS and Liquid files needed to style your Shopify Dawn theme to match the mobiletechlab.ca design system.

## Files Included

### Assets
- `assets/custom.css` - Complete CSS with brand colors, typography, buttons, cards, and component styles

### Sections
- `sections/mtl-trust-bar.liquid` - Trust bar with icons (reviews, rating, locations, guarantees)
- `sections/mtl-trade-in-banner.liquid` - Dark CTA banner for trade-in promotion
- `sections/mtl-repair-services.liquid` - Service cards grid for repair offerings

### Snippets
- `snippets/mtl-product-enhancements.liquid` - Product page additions:
  - Condition selector (Excellent/Good/Fair)
  - Warranty & trust badges
  - Bundle upsell cards (Trade-In, Data Recovery, Repair)
  - Quick specs badges

---

## Installation Instructions

### Step 1: Add Custom CSS

1. In Shopify Admin, go to **Online Store → Themes**
2. Find your Dawn theme and click **Actions → Edit code**
3. In the **Assets** folder, click **Add a new asset**
4. Create a new file called `custom.css`
5. Copy the contents of `assets/custom.css` into this file
6. Save the file

### Step 2: Link the CSS

1. Open `layout/theme.liquid`
2. Find the closing `</head>` tag
3. Add this line just before `</head>`:

```liquid
{{ 'custom.css' | asset_url | stylesheet_tag }}
```

4. Save the file

### Step 3: Add Inter Font (Optional)

If Inter isn't available in your theme's typography settings:

1. In `layout/theme.liquid`, add before `</head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Step 4: Add Custom Sections

For each section file (`mtl-trust-bar.liquid`, `mtl-trade-in-banner.liquid`, `mtl-repair-services.liquid`):

1. In the code editor, go to **Sections**
2. Click **Add a new section**
3. Name it exactly as shown (e.g., `mtl-trust-bar`)
4. Copy the contents from the corresponding file
5. Save

### Step 5: Add Sections to Your Pages

1. Go to **Online Store → Themes → Customize**
2. Navigate to the page where you want the section (e.g., Homepage)
3. Click **Add section**
4. Find your MTL sections in the list
5. Configure the settings and arrange as needed

### Step 6: Product Page Enhancements

1. Open `sections/main-product.liquid` in the code editor
2. Find where you want to add each enhancement:
   - **Condition Selector**: After the price
   - **Trust Badges**: Below Add to Cart button
   - **Bundle Cards**: After the main product block
3. Copy the relevant snippet from `snippets/mtl-product-enhancements.liquid`
4. Paste into the appropriate location
5. Save and test

---

## Design System Reference

### Colors (HSL)
- **Primary (Red)**: `4 74% 56%` → #E53935
- **Primary Hover**: `4 72% 47%` → #C62828
- **Foreground**: `220 18% 15%` → #21252b
- **Muted**: `220 9% 46%` → #6b7280
- **Success**: `142 76% 36%` → #16a34a
- **Amber**: `32 95% 44%` → #d97706

### Typography
- Font Family: Inter
- Headings: 700 weight, -0.025em letter-spacing

### Border Radius
- Standard: 8px
- Large: 12px
- Full: 9999px (pills)

### Button Variants
- `.mtl-btn-primary` - Solid red primary button
- `.mtl-btn-soft` - Light red background with red text (signature style)
- `.mtl-btn-outline` - Border only, dark text
- `.mtl-btn-amber` - Amber variant for data recovery CTAs

---

## Customization Tips

### Changing Colors
Edit the CSS custom properties at the top of `custom.css`:

```css
:root {
  --mtl-primary: 4 74% 56%;  /* Change these HSL values */
}
```

### Adding More Trust Items
In the theme customizer, click on the Trust Bar section and use the "Add block" button to add more trust items.

### Modifying Bundle Cards
Edit the `snippets/mtl-product-enhancements.liquid` file to:
- Change the text and links
- Remove cards you don't need
- Adjust the styling classes

---

## Support

For questions about this customization:
- Visit: mobiletechlab.ca
- Built with: Lovable AI
