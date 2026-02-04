

# Service Areas Hub Page Implementation Plan

## Overview

This plan transforms the existing `/service-areas/` page from a combined locations hub into a focused, SEO-optimized mail-in service areas directory for Manitoba. The page will strengthen internal linking, support topical relevance for "Manitoba mail-in repair," and guide users and search engines to town-level service pages.

---

## Architecture Approach

### Current State
- `ServiceAreasIndex.tsx` at `/service-areas` includes both physical stores and mail-in areas
- Location data is duplicated across Header, ServiceAreasIndex, and lib/locations.ts
- No centralized service area data with distance/delivery information

### Proposed Changes
1. Create a new centralized data file `lib/service-areas.ts` for mail-in service areas
2. Rewrite `ServiceAreasIndex.tsx` to focus exclusively on mail-in service areas
3. Update Header navigation to consume the shared data source
4. No changes needed to sitemap (already includes `/service-areas`)

---

## File Changes

### 1. Create `src/lib/service-areas.ts` (New File)

Centralized data source for all mail-in service areas with distance and delivery information:

```text
+------------------------------------------+
|          SERVICE_AREAS Array             |
+------------------------------------------+
| - name: "Steinbach, MB"                  |
| - slug: "steinbach"                      |
| - distance: "~60 km"                     |
| - deliveryTime: "1-day delivery"         |
| - description: "Southeast Manitoba"      |
+------------------------------------------+
| - name: "Brandon, MB"                    |
| - slug: "brandon"                        |
| - distance: "~215 km"                    |
| - deliveryTime: "1-2 day delivery"       |
+------------------------------------------+
| - name: "Portage la Prairie, MB"         |
| - slug: "portage-la-prairie"             |
| - distance: "~85 km"                     |
| - deliveryTime: "1-day delivery"         |
+------------------------------------------+
| - name: "Selkirk, MB"                    |
| - slug: "selkirk"                        |
| - distance: "~35 km"                     |
| - deliveryTime: "1-day delivery"         |
+------------------------------------------+
```

This centralizes data so adding new service areas automatically updates:
- The `/service-areas/` hub page
- The Header navigation "Mail-In Service Areas" dropdown

---

### 2. Rewrite `src/pages/service-area/ServiceAreasIndex.tsx`

Complete redesign with the following structure:

**SEO Metadata:**
- Title: "Mobile Tech Lab | Manitoba Mail-In Phone Repair Service Areas"
- Meta description: As specified
- Canonical: `https://mobiletechlab.ca/service-areas`

**Page Sections:**

```text
+================================================+
|                    HERO                         |
|-------------------------------------------------|
| H1: Mail-In Phone Repair Across Manitoba        |
| Intro: Mobile Tech Lab offers fast, affordable  |
| mail-in phone and device repair...              |
+================================================+

+================================================+
|      SERVICE AREAS GRID (from centralized data) |
|-------------------------------------------------|
| Section H2: Mail-In Service Areas Serviced by   |
|             Our Winnipeg Location               |
|-------------------------------------------------|
|  [Steinbach, MB]    [Brandon, MB]               |
|  ~60 km (1-day)     ~215 km (1-2 day)           |
|  [Link ->]          [Link ->]                   |
|-------------------------------------------------|
|  [Portage, MB]      [Selkirk, MB]               |
|  ~85 km (1-day)     ~35 km (1-day)              |
|  [Link ->]          [Link ->]                   |
|-------------------------------------------------|
| + "More towns coming soon" notice               |
+================================================+

+================================================+
|              HOW IT WORKS SECTION               |
|-------------------------------------------------|
| Reuse existing MailInHowItWorks component       |
| 4-step process with visual icons                |
+================================================+

+================================================+
|               CTA SECTION                       |
|-------------------------------------------------|
| Not listed? We serve all of Manitoba and Canada |
| [Get a Quote Online]  [Call (204) 500-9757]     |
+================================================+
```

**Key Features:**
- Clean grid layout with distance and delivery time per town
- Each town card links to its `/service-area/{slug}/` page
- "More towns coming soon" future-proofing note
- Consistent design with existing service area pages
- LLM-parsable semantic HTML structure

---

### 3. Update `src/components/layout/Header.tsx`

Import and use the centralized `SERVICE_AREAS` from `lib/service-areas.ts`:

```text
Before:
  const MAIL_IN_AREAS = [
    { name: "Steinbach, MB", href: "/service-area/steinbach" },
    ...inline data...
  ];

After:
  import { SERVICE_AREAS } from "@/lib/service-areas";
  // Map SERVICE_AREAS to navigation format
```

This ensures the header dropdown automatically reflects any new service areas added to the centralized data file.

---

### 4. Update Footer (Optional Enhancement)

Update the Footer to link to `/service-area/brandon` instead of `/location/brandon`:

```text
Line 56: Change "/location/brandon" -> "/service-area/brandon"
```

---

## Content Implementation

### Hero Section Content
- **H1:** "Mail-In Phone Repair Across Manitoba"
- **Intro:** "Mobile Tech Lab offers fast, affordable mail-in phone and device repair to customers across Manitoba. All mail-in repairs are handled through our certified Winnipeg repair lab, with most deliveries arriving within 1-2 business days. Below are the towns we commonly serve."

### Service Area Cards
Each card displays:
- Town name (e.g., "Steinbach, MB")
- Distance from Winnipeg (e.g., "~60 km from Winnipeg")
- Delivery time (e.g., "1-day delivery")
- Link button to service area page

### Future Expansion Notice
- Text: "More towns coming soon — we accept mail-in repairs from anywhere in Manitoba and across Canada."

---

## Technical Implementation

### Data Structure (`lib/service-areas.ts`)

```typescript
export interface ServiceArea {
  name: string;           // "Steinbach, MB"
  slug: string;           // "steinbach"
  distance: string;       // "~60 km"
  deliveryTime: string;   // "1-day delivery"
  description?: string;   // Optional region description
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: "Steinbach, MB",
    slug: "steinbach",
    distance: "~60 km",
    deliveryTime: "1-day delivery",
    description: "Southeast Manitoba"
  },
  // ...additional areas
];

// Helper to generate href from slug
export const getServiceAreaHref = (slug: string) => 
  `/service-area/${slug}`;
```

### Adding New Service Areas
When a new town is added (e.g., Winkler), simply add to `SERVICE_AREAS` array:

```typescript
{
  name: "Winkler, MB",
  slug: "winkler",
  distance: "~120 km",
  deliveryTime: "1-2 day delivery"
}
```

This automatically updates:
1. The `/service-areas/` hub grid
2. The Header navigation dropdown
3. Any other components consuming this data

---

## SEO Considerations

| Element | Implementation |
|---------|----------------|
| No commercial keyword optimization | Page focuses on geographic hub, not "phone repair Brandon" |
| Clean internal linking | Each town links to its own service area page |
| Semantic headings | H1 > H2 hierarchy, screen-reader friendly |
| LLM-parsable | Plain HTML, no JavaScript-hidden content |
| Schema.org | BreadcrumbList for navigation path |

---

## Files to Modify

| File | Action |
|------|--------|
| `src/lib/service-areas.ts` | Create new (centralized data) |
| `src/pages/service-area/ServiceAreasIndex.tsx` | Rewrite (focused hub page) |
| `src/components/layout/Header.tsx` | Update (use shared data) |
| `src/components/layout/Footer.tsx` | Minor fix (correct Brandon link) |

---

## Validation Checklist

After implementation, verify:
- [ ] `/service-areas/` displays only mail-in service areas (no physical stores)
- [ ] Each town card shows distance and delivery time
- [ ] Links navigate correctly to `/service-area/{slug}/`
- [ ] Header dropdown reflects centralized data
- [ ] Page is fully crawlable with semantic HTML
- [ ] Mobile responsive layout works correctly

