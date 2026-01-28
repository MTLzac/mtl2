

# Brandon, MB Mail-In Repair Landing Page

## Overview

Create a new location page at `/location/brandon` that serves two purposes:
1. **Capture search impressions** from users searching for "phone repair Brandon MB" and similar keywords
2. **Convert visitors** by highlighting mail-in repair options and directing them to get a quote

This page acknowledges Brandon doesn't have a physical location while emphasizing the convenience of mail-in service and proximity to Winnipeg (2-hour drive).

---

## Page Structure

### 1. Hero Section
- **Headline**: "Device Repair for Brandon, MB"
- **Subheadline**: "Mail-In Service or Visit Winnipeg"
- **Description**: Acknowledge no physical location in Brandon, but highlight:
  - Free mail-in service with prepaid shipping labels
  - Winnipeg is just 2 hours away for same-day repairs
  - Same quality service and warranty as in-store repairs

### 2. Two Options Cards
Side-by-side cards presenting clear choices:

**Option A: Mail-In Repairs**
- Ship your device from Brandon
- Free prepaid shipping labels
- 3-5 day turnaround
- Insured return shipping
- CTA: "Get Mail-In Quote"

**Option B: Visit Winnipeg**
- Same-day repairs available
- Walk-ins welcome
- Only 2 hours from Brandon
- Directions/Map link
- CTA: "Get Directions"

### 3. How Mail-In Works
Reuse the step-by-step flow pattern from trade-in:
1. Request a Quote (online form)
2. Ship Your Device (free prepaid label)
3. We Repair It (fast turnaround)
4. Get It Back (insured return shipping)

### 4. Services We Offer
Brief grid of repair categories to reinforce what's available:
- Phone Screen Repair
- Battery Replacement
- Charging Port Repair
- Water Damage Recovery
- Tablet & iPad Repair
- Console Repair

Links to relevant repair landing pages for SEO internal linking.

### 5. Why Brandon Residents Choose Us
Trust pillars adapted for remote customers:
- No local shop? No problem
- Same warranty as in-store
- Real humans answering your calls
- Serving Manitoba since [year]

### 6. FAQ Section
Brandon-specific questions:
- "Do you have a location in Brandon?"
- "How long does mail-in repair take?"
- "Is my device insured during shipping?"
- "Can I drive to Winnipeg for same-day repair?"
- "What devices do you repair?"

### 7. Contact/CTA Section
Final push with phone number and quote button.

---

## Files to Create

| File | Purpose |
|------|---------|
| `src/pages/location/BrandonRepair.tsx` | Main Brandon landing page |
| `src/components/location/MailInHero.tsx` | Hero component for mail-in focused pages (reusable for other cities) |
| `src/components/location/ServiceOptions.tsx` | Two-option cards (Mail-In vs Visit) |
| `src/components/location/MailInHowItWorks.tsx` | 4-step process for mail-in repairs |

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/App.tsx` | Add route: `/location/brandon` |
| `public/sitemap.xml` | Add Brandon URL |

---

## SEO Strategy

### Meta Tags
- **Title**: "Device Repair Brandon MB | Mail-In Phone Repair | Mobile Tech Lab"
- **Description**: "Need phone, tablet, or console repair in Brandon, Manitoba? Mail your device to us for fast, affordable repairs with free shipping. Or drive 2 hours to Winnipeg for same-day service."
- **Canonical**: `https://mobiletechlab.ca/location/brandon`

### Structured Data
- LocalBusiness schema with `areaServed: Brandon, MB`
- Service schema for mail-in repairs
- FAQPage schema for rich snippets

### Internal Links
- Link to main repair pages (iPhone, Samsung, iPad)
- Link to Contact page for quote widget
- Link to Winnipeg location for directions

---

## Technical Details

### Route Structure
```
/location/brandon → BrandonRepair.tsx
```

This pattern allows future expansion:
- `/location/portage-la-prairie`
- `/location/steinbach`
- `/location/selkirk`

### Component Reusability
The mail-in focused components can be reused for:
- Other Manitoba cities without physical locations
- General mail-in landing page (`/mail-in-repairs`)

### Quick Facts Box
```
Turnaround: 3-5 business days
Shipping: Free both ways
Warranty: Same as in-store
Distance to Winnipeg: ~200 km / 2 hours
```

---

## Visual Layout

```text
+--------------------------------------------------+
|  HERO: Device Repair for Brandon, MB             |
|  "Mail-in service or visit Winnipeg"             |
|  [Get a Quote] [Call Now]                        |
+--------------------------------------------------+
|                                                  |
|  +---------------------+  +---------------------+|
|  | MAIL-IN REPAIRS     |  | VISIT WINNIPEG      ||
|  | Ship from anywhere  |  | Same-day repairs    ||
|  | Free shipping       |  | 2 hours from Brandon||
|  | [Get Quote]         |  | [Get Directions]    ||
|  +---------------------+  +---------------------+|
|                                                  |
+--------------------------------------------------+
|  HOW MAIL-IN WORKS                               |
|  1. Quote → 2. Ship → 3. Repair → 4. Return      |
+--------------------------------------------------+
|  SERVICES WE OFFER                               |
|  [Phones] [Tablets] [Consoles] [Laptops]         |
+--------------------------------------------------+
|  WHY CHOOSE US                                   |
|  Trust pillars                                   |
+--------------------------------------------------+
|  FAQs (with FAQPage schema)                      |
+--------------------------------------------------+
|  FINAL CTA                                       |
+--------------------------------------------------+
```

---

## Implementation Priority

1. Create `BrandonRepair.tsx` page with inline components initially
2. Extract reusable components if needed for future city pages
3. Add route and sitemap entry
4. Test structured data with Google Rich Results Test

