
# Further Digestibility Improvements for Repair Pages

## Overview
After analyzing the current implementation, here are actionable improvements to make pages more digestible for users and search engines.

---

## 1. Add Visible Breadcrumb Navigation (High Priority)

Currently, breadcrumb structured data exists (JSON-LD) but users cannot see or click breadcrumbs on the page.

**What to add:**
- A visible breadcrumb component showing: `Home > Repairs > [Device] Repair`
- Placed directly below the header on repair pages
- Clickable links for easy navigation

**Benefits:**
- Improves user orientation and navigation
- Reduces bounce rate by providing clear escape routes
- Complements existing structured data

---

## 2. Add FAQPage Structured Data (High Priority)

The FAQ sections exist on pages but lack FAQPage schema, which can generate rich FAQ snippets in Google search results.

**What to add:**
- Create `FAQPageSchema.tsx` component
- Outputs JSON-LD with `@type: FAQPage` and `mainEntity` array
- Integrate into `FAQSection.tsx` so it auto-generates from existing FAQ data

**Benefits:**
- Potential for expandable FAQ rich snippets in Google
- Increased SERP real estate
- Higher click-through rates

---

## 3. Add Table of Contents / Jump Links (Medium Priority)

Long repair pages have many sections but no quick navigation.

**What to add:**
- Floating or inline table of contents with anchor links:
  - Services
  - Models We Repair
  - Why Choose Us
  - Locations
  - FAQs
- Add `id` attributes to each section

**Benefits:**
- Helps users quickly find information
- Reduces scroll fatigue on mobile
- Google may display jump-to links in search results

---

## 4. Add "Quick Facts" Summary Box (Medium Priority)

Users want to quickly see key info without reading paragraphs.

**What to add:**
A highlighted box near the hero showing:
- Turnaround time (e.g., "Same-day service")
- Starting price (e.g., "From $59")
- Warranty (e.g., "90-day warranty")
- Location count (e.g., "2 Manitoba locations")

**Benefits:**
- Immediately answers common questions
- Reduces cognitive load
- Increases conversion by front-loading value

---

## 5. Improve Model List Scannability (Low Priority)

Current model list can be overwhelming with 30+ models.

**What to improve:**
- Add collapsible/expandable sections for model categories
- Show 3-4 popular models by default, expand to see all
- Add search/filter functionality for large lists

**Benefits:**
- Less overwhelming for users
- Faster to find specific model
- Improved mobile experience

---

## Implementation Priority Order

| Priority | Improvement | Effort | Impact |
|----------|-------------|--------|--------|
| 1 | Visible breadcrumb navigation | Low | High |
| 2 | FAQPage structured data | Low | High |
| 3 | Quick Facts summary box | Medium | High |
| 4 | Table of contents / jump links | Medium | Medium |
| 5 | Collapsible model categories | Medium | Low |

---

## Technical Details

### Visible Breadcrumbs Component
```
Location: src/components/repair/VisibleBreadcrumbs.tsx
Placement: After <Header />, before hero section
Styling: Small text, muted color, horizontal layout
```

### FAQPage Schema Component
```
Location: src/components/seo/FAQPageSchema.tsx
Integration: Add to FAQSection.tsx, auto-generate from faqs array
Schema: @type FAQPage with mainEntity containing Question/Answer pairs
```

### Quick Facts Component
```
Location: src/components/repair/QuickFacts.tsx
Placement: Within hero section or immediately after
Props: turnaround, startingPrice, warranty, locations
```

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/components/repair/VisibleBreadcrumbs.tsx` | Create |
| `src/components/seo/FAQPageSchema.tsx` | Create |
| `src/components/repair/QuickFacts.tsx` | Create |
| `src/components/repair/FAQSection.tsx` | Modify (add schema) |
| `src/components/repair/RepairLandingTemplate.tsx` | Modify (add breadcrumbs, quick facts) |
| `src/components/repair/NicheRepairTemplate.tsx` | Modify (add breadcrumbs) |
| Multiple section components | Modify (add id attributes for anchors) |
