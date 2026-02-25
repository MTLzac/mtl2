

## Screen Insurance — Revised Dynamic Pricing Model

### Key Change from Previous Plan

Insurance pricing is based on **Premium screen part cost only**. No Value-tier or Genuine-tier plans. The customer gets one insurance product per device — priced as a percentage of the Premium part cost.

### Pricing Architecture

```text
┌─────────────────────────────────────────────────┐
│  PARTS COST TABLE (source of truth)             │
│                                                 │
│  Model              │ Premium Part Cost          │
│  iPhone 15 Pro Max  │  $140                      │
│  iPhone 14 Pro      │  $120                      │
│  iPhone 12          │   $80                      │
│  iPhone SE (3rd)    │   $60                      │
└──────────┬──────────────────────────────────────┘
           │
           ▼  premiumPartCost × MULTIPLIER
┌─────────────────────────────────────────────────┐
│  INSURANCE PRICE (auto-calculated)              │
│                                                 │
│  Formula:  max(premiumCost × 0.50, MIN_PRICE)   │
│                                                 │
│  iPhone 15 Pro Max → $70                        │
│  iPhone 14 Pro     → $60                        │
│  iPhone 12         → $40                        │
│  iPhone SE (3rd)   → $30 (floor applied)        │
└─────────────────────────────────────────────────┘
```

Single multiplier constant + single minimum price floor. One-line edit to reprice everything.

### What the Customer Sees

User selects model → one price card appears showing:
- One-time coverage price (e.g., "$70")
- Covers: 1× Premium screen replacement
- Warranty included on the repair
- CTA: "Get Protected — $70"

No tier comparison cards. Clean single-product display. This simplifies the hero calculator significantly — select model, see price, buy.

### Data Structure

```text
// src/lib/screen-insurance-data.ts

INSURANCE_MULTIPLIER = 0.50
MIN_INSURANCE_PRICE = 29

SCREEN_PART_COSTS: {
  model: string
  family: string          // "iPhone 15 series"
  slug: string            // "iphone-15-pro-max"
  premiumPartCost: number // e.g. 140
}[]

getInsurancePrice(model) →
  max(premiumPartCost × INSURANCE_MULTIPLIER, MIN_INSURANCE_PRICE)
```

### Simplified Component List

Since there's only one plan per device (no tier cards to compare), the hero becomes cleaner:

1. **`src/lib/screen-insurance-data.ts`** — Part costs, multiplier, price function, FAQs, coverage list
2. **`src/components/screen-insurance/InsuranceHero.tsx`** — Model selector + animated silhouette + single price display + CTA
3. **`src/components/screen-insurance/PhoneSilhouette.tsx`** — SVG device outline with transition
4. **`src/components/screen-insurance/HowItWorks.tsx`** — 3-step explainer
5. **`src/components/screen-insurance/CoverageDetails.tsx`** — What's covered / not covered
6. **`src/components/screen-insurance/InsuranceComparison.tsx`** — "With insurance" vs "Without" cost comparison (uses `premiumPartCost` as the "without" price)
7. **`src/components/screen-insurance/InsuranceFAQ.tsx`** — Accordion
8. **`src/pages/ScreenInsurance.tsx`** — Page assembly
9. **Edit `src/App.tsx`** — Add `/screen-insurance` route
10. **Edit `public/sitemap.xml`** — Add URL

### Price Update Workflow

- Change a model's part cost → insurance price updates automatically
- Change the multiplier → all model prices update
- Change the floor → only affects cheap models

