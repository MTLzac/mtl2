

## Savings Clarity — Plan

The current hero already shows the insurance price and a small text line with savings. The comparison section is generic (no model-specific numbers). Here's how to make savings feel like a no-brainer without adding clutter:

### Approach: Enhanced Price Card + Strikethrough Savings

When a user selects a model, the existing price card in the hero gets reworked to show a clear visual comparison:

```text
┌─────────────────────────────────────────┐
│  iPhone 15 Pro Max Screen Protection    │
│                                         │
│  Screen replacement cost:  $140         │
│  You pay today:            $70          │
│  ─────────────────────────────────────  │
│  You save $70 (50% off)                 │
│                                         │
│  ✓ Premium screen  ✓ 12 months          │
│  ✓ 1 device        ✓ No deductible      │
└─────────────────────────────────────────┘
```

Key visual treatments:
- The replacement cost (`$140`) shown with a strikethrough or muted style so the "real price" anchors high
- The insurance price (`$70`) shown large and bold in primary color
- A savings badge: "Save $70 (50%)" in a green/success accent
- Compact bullet row of coverage highlights replaces the plain text line

### Changes

**`src/components/screen-insurance/InsuranceHero.tsx`** — Rework the price display area (lines ~97–113):
- Show `premiumPartCost` as the "Screen replacement value" with strikethrough styling
- Show calculated insurance price large and bold
- Add a savings pill/badge showing dollar amount and percentage saved
- Add a 4-item inline feature grid (Premium screen, 12 months, 1 device, No deductible)
- Remove the small footer text that currently shows savings (it moves into the card itself)

**`src/components/screen-insurance/InsuranceComparison.tsx`** — No changes needed; the hero card now does the heavy lifting for model-specific savings. The comparison section stays as a general "why insurance" explainer.

This keeps the page layout identical — no new sections, no extra scroll depth. The savings story is told right where the user is already looking: the price card.

