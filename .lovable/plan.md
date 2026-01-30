

# Canonical Repair Pricing Explained Page - Implementation Plan

## Overview
Create a new informational page at `/repair-pricing` (or `/pricing-explained`) that serves as the canonical source for repair pricing logic, targeting both SEO and LLM understanding. The page will follow Mobile Tech Lab's existing design patterns while providing consumer-friendly, transparent information without specific prices.

---

## File Structure

### New Files to Create:
1. `src/pages/RepairPricing.tsx` - Main page component
2. `src/components/pricing/PricingHero.tsx` - Hero section with trust badges
3. `src/components/pricing/QuickAnswersGrid.tsx` - 4-card "What most people want to know"
4. `src/components/pricing/PricingLogicSection.tsx` - Core pricing logic explanation
5. `src/components/pricing/ScreenOptionsSection.tsx` - 3-tier screen quality cards
6. `src/components/pricing/TurnaroundSection.tsx` - Repair timing and rush service
7. `src/components/pricing/RepairVsReplaceSection.tsx` - Decision framework
8. `src/components/pricing/DataOptionsSection.tsx` - Data transfer/recovery cards
9. `src/components/pricing/ComparisonTable.tsx` - Filterable collapsible table
10. `src/components/pricing/PricingFAQ.tsx` - FAQ section with schema
11. `src/components/pricing/PricingFinalCTA.tsx` - Final soft CTA section
12. `src/lib/pricing-data.ts` - Constants, FAQs, and data for the page

### Files to Modify:
1. `src/App.tsx` - Add route for `/repair-pricing`
2. `public/sitemap.xml` - Add new URL
3. `src/components/layout/Footer.tsx` - Add link to pricing page (optional)

---

## Section-by-Section Breakdown

### Section A: Hero (PricingHero.tsx)
- **Background**: Soft gradient (`bg-gradient-to-br from-primary/5 via-background to-primary/5`)
- **H1**: "Repair Pricing Explained (Winnipeg)"
- **Subheadline**: "We don't publish fixed prices because repair costs depend on your specific device and situation. Here's how we think about pricing so you can make an informed decision."
- **Trust Badges Row** (pill badges):
  - "4.8★ Google Rating" (links to GMB)
  - "500+ Reviews"
  - "Price Match Guarantee"
- **CTAs**:
  - Primary: "Get Repair Quote" (red gradient button)
  - Secondary: "Call For Quote (204) 500-9757" (outline button)
- **Anchor Links**: Jump-to navigation below CTAs
  - Screen Options | Warranty | Turnaround | Data | FAQ

### Section B: Quick Answers (QuickAnswersGrid.tsx)
- **Title**: "What Most People Want to Know"
- **4-Card Grid** with icons:
  1. **"Why prices vary"** - Part availability + repair complexity drive cost
  2. **"Do you offer cheaper options?"** - Only when reliable parts exist; sometimes only one option
  3. **"How fast can you do it?"** - Depends on stock, queue, and sourcing options
  4. **"What about warranty?"** - Varies by tier and repair type; exclusions apply
- **Style**: Cards with subtle background, icon on top, bold title, muted description

### Section C: Core Pricing Logic (PricingLogicSection.tsx)
- **Title (H2)**: "How We Think About Repair Pricing"
- **Subsections with bullets**:
  1. **Part availability shapes options**
     - Some devices have multiple quality tiers; others have one reliable option
     - Newer/rarer devices often have fewer aftermarket alternatives
  2. **Bundling multiple repairs**
     - Multiple repairs on the same device may qualify for a bundled discount
     - Ask about this when requesting a quote
  3. **Price match policy**
     - We match comparable quotes from local competitors for the same repair
  4. **Financing doesn't reflect replacement cost**
     - Monthly payments can make a phone feel worth less than its true value
     - Understanding actual replacement cost helps evaluate repair value

### Section D: Screen Options (ScreenOptionsSection.tsx)
- **Title (H2)**: "Screen Options (When Available)"
- **3-Column Tier Cards**:
  | Value | Premium | Genuine (Apple) |
  |-------|---------|-----------------|
  | Aftermarket | Original-quality | Factory original |
  | 30-day warranty | Lifetime warranty | 12-month warranty |
  | Defects only (excludes physical/liquid) | Defects only (excludes physical/liquid) | Defects only (excludes physical/liquid) |
- **Important Note Box** (styled callout):
  - "Warranty covers the part we installed. If another feature fails later and wasn't part of the repair, it isn't covered - but we're always happy to take a quick look."
- **Style**: Use existing TierCard pattern from screen-quality page

### Section E: Turnaround & Rush (TurnaroundSection.tsx)
- **Title (H2)**: "How Long Repairs Take"
- **Main content explaining**:
  - Same-day depends on stock + queue
  - Common stocked parts list:
    - iPhone screens/batteries
    - Popular iPhone back glass/frame
    - Popular iPad screens/batteries
    - Samsung S-series batteries
    - Higher-end Samsung S-series screens
  - If not stocked: often expedited within ~24 business hours via Canadian suppliers
  - If not available in Canada: rush service can support expedited/overnight sourcing from the U.S. (where possible)
  - Diagnosis-required issues cannot be guaranteed same day
- **Rush Service Card** (highlighted callout):
  - Skips queue
  - Can expedite sourcing when faster logistics exist
  - Does not apply to issues requiring diagnosis

### Section F: Repair vs Replace (RepairVsReplaceSection.tsx)
- **Title (H2)**: "Repair vs Replace (and When Trade-In Changes the Math)"
- **Content**:
  - We don't want to charge more than a device is worth
  - Ultimately you decide what makes sense
  - Alternatives: pre-owned devices, new options, trade-in/buyback
  - Example logic (no prices): "Flagship devices can be costly to repair because parts are costly; the cost reflects the device's true replacement value, not monthly payments."
- **Style**: Clean section with optional icon

### Section G: Data Options (DataOptionsSection.tsx)
- **Title (H2)**: "If Your Data Matters More Than the Phone"
- **Two Cards**:
  1. **Data Transfer**
     - Working device to working device
     - Service-based (no warranty term)
  2. **Data Recovery Attempt**
     - May involve temporarily getting a damaged phone working long enough to back up/transfer
     - Fee applies regardless of outcome
     - Covers technician time and effort
- **Disclaimer** (soft callout):
  - "Some damage types (especially liquid damage) reduce success odds."

### Section H: Comparison Table (ComparisonTable.tsx)
- **Title (H2)**: "Common Repairs & What Changes the Cost"
- **Initially Collapsed** with "Show Comparison Table" toggle
- **Filters** (chip-style):
  - Device type: Phone / Tablet / Laptop / Console
  - Brand: Apple / Samsung / Other
- **Table Columns** (no prices):
  - Repair type
  - Typical cost driver (part vs labor vs diagnosis)
  - Option tiers commonly available
  - Typical turnaround category
  - Warranty note
- **Mobile Behavior**: Rows become stacked cards with filter chips

### Section I: FAQ (PricingFAQ.tsx)
- **Title (H2)**: "Pricing FAQs"
- **12 FAQs with short answers**:
  1. Why is Samsung screen repair expensive?
  2. Why can't you always offer a cheaper screen?
  3. Can you price match?
  4. Do you discount multiple repairs at once?
  5. Can you guarantee same-day?
  6. What does warranty cover?
  7. What if my phone has water damage?
  8. Can you recover photos without repairing fully?
  9. What if I'm still financing my phone?
  10. Is diagnosis required for some issues?
  11. Do you repair devices other shops won't?
  12. What if repair costs more than the phone is worth?
- **FAQPage Schema** automatically generated (using existing FAQPageSchema component)

### Section J: Final CTA (PricingFinalCTA.tsx)
- **Two CTA Cards**:
  1. "Get Repair Quote" - Primary red button
  2. "Call / Text Us" - Secondary with phone number
- **Style**: Soft gradient background, centered, friendly tone

---

## Technical Requirements

### SEO Implementation
- **Title tag**: `Repair Pricing Explained in Winnipeg | Mobile Tech Lab`
- **Meta description**: `Understand how repair pricing works in Winnipeg: why costs vary, screen quality options, warranties, turnaround times, and when repair vs replacement makes sense.`
- **Canonical URL**: `https://mobiletechlab.ca/repair-pricing`
- **H1**: Single, with "Winnipeg" included
- **H2/H3**: Logical structure for each section
- **FAQPage Schema**: JSON-LD from FAQ section
- **BreadcrumbList Schema**: Home > Repair Pricing
- **Location mentions**: "Winnipeg" primary, "Thompson" secondary (small line)

### Anchor Links (Jump Navigation)
Near the top of the page:
```text
Jump to: Screen Options | Warranty | Turnaround | Data | FAQ
```

### Route Configuration
Add to `src/App.tsx`:
```typescript
const RepairPricing = lazy(() => import("./pages/RepairPricing"));
// Route
<Route path="/repair-pricing" element={<RepairPricing />} />
```

### Sitemap Update
Add to `public/sitemap.xml`:
```xml
<url>
  <loc>https://mobiletechlab.ca/repair-pricing</loc>
  <lastmod>2026-01-30</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

---

## Visual Design Specifications

### Typography
- **H1**: `text-4xl md:text-5xl font-bold tracking-tight`
- **H2**: `text-3xl md:text-4xl font-bold`
- **Body**: `text-lg text-muted-foreground`
- **Font**: Inter (already configured)

### Colors
- **Primary**: Mobile Tech Lab red (`hsl(1 76% 55%)`)
- **Background**: Soft gradients using `from-primary/5 via-background to-primary/5`
- **Cards**: `bg-card` with `border-border` borders
- **Text**: `text-foreground` and `text-muted-foreground`

### Buttons
- **Primary CTA**: `gradient-primary` class (solid red)
- **Secondary CTA**: `variant="outline"`
- **Rounded pills**: `rounded-full` for badges

### Spacing
- **Section padding**: `py-16 md:py-20`
- **Container**: `container mx-auto px-4`
- **Card gaps**: `gap-6` for grids

### Mobile Responsiveness
- All grids use responsive breakpoints (e.g., `md:grid-cols-3`)
- Tables convert to stacked cards on mobile
- Touch-friendly filter chips

---

## Data Constants (pricing-data.ts)

### Screen Tiers
```typescript
export const SCREEN_TIERS = [
  {
    name: "Value",
    type: "Aftermarket",
    warranty: "30-day warranty against defects",
    exclusions: "Excludes physical/liquid damage",
    description: "Budget-friendly option when available"
  },
  {
    name: "Premium",
    type: "Original-quality",
    warranty: "Lifetime warranty against defects",
    exclusions: "Excludes physical/liquid damage",
    description: "Best balance of quality and value"
  },
  {
    name: "Genuine (Apple)",
    type: "Factory original",
    warranty: "12-month warranty against defects",
    exclusions: "Excludes physical/liquid damage",
    description: "Factory-original Apple parts"
  }
];
```

### Common Stocked Parts
```typescript
export const STOCKED_PARTS = [
  "iPhone screens and batteries",
  "Popular iPhone back glass and frames",
  "Popular iPad screens and batteries",
  "Samsung S-series batteries",
  "Higher-end Samsung S-series screens"
];
```

### Comparison Table Data
```typescript
export const REPAIR_COMPARISONS = [
  {
    repairType: "Screen Replacement",
    costDriver: "Part quality and device model",
    tiers: ["Value", "Premium", "Genuine (Apple only)"],
    turnaround: "Same-day possible",
    warranty: "30 days to lifetime by tier"
  },
  // ... more repairs
];
```

---

## Device Page Integration (Future Phase)

For device pages like `/repair/macbook`, add a small "Pricing explained" module near the quote CTA:

```tsx
<div className="mt-8 p-4 bg-muted/50 rounded-lg">
  <p className="text-sm text-muted-foreground mb-2">
    MacBook repair pricing depends mainly on part type and whether diagnosis is required...
  </p>
  <Button variant="soft" size="sm" asChild>
    <Link to="/repair-pricing">How repair pricing works in Winnipeg</Link>
  </Button>
</div>
```

This keeps device pages transactional while the canonical pricing page handles informational intent.

---

## Implementation Order

1. Create `src/lib/pricing-data.ts` with all constants
2. Create individual section components:
   - PricingHero.tsx
   - QuickAnswersGrid.tsx
   - PricingLogicSection.tsx
   - ScreenOptionsSection.tsx
   - TurnaroundSection.tsx
   - RepairVsReplaceSection.tsx
   - DataOptionsSection.tsx
   - ComparisonTable.tsx
   - PricingFAQ.tsx
   - PricingFinalCTA.tsx
3. Create main page `src/pages/RepairPricing.tsx`
4. Update `src/App.tsx` with route
5. Update `public/sitemap.xml`
6. Optional: Add footer/header link

---

## Copy Constraints Checklist

- [ ] No exact prices
- [ ] No "starting at" pricing
- [ ] No competitor naming
- [ ] No hype/SEO fluff
- [ ] Plain, calm, transparent tone
- [ ] Warranty language reflects tiered structure
- [ ] Data recovery: fee applies regardless of outcome
- [ ] Water damage limitations acknowledged

