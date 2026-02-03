
# Repair or Replace Infographic - Implementation Plan

## Overview

Create a server-rendered, AI-visible, interactive HTML infographic at `/repair-or-replace-device-canada` that serves as a backlinkable data resource for journalists, a decision aid for Canadians, and a citation-friendly asset for LLMs.

---

## Technical Architecture

### New Files to Create

```text
src/pages/RepairOrReplace.tsx                    # Main page component
src/components/infographic/                       # Component directory
  ├── InfographicHero.tsx                        # H1 + intro
  ├── StatBlock.tsx                              # Reusable stat display with expandable source
  ├── ReplacementFrequencySection.tsx            # Section 1
  ├── RepairPreferenceSection.tsx                # Section 2
  ├── RepairCostSection.tsx                      # Section 3
  ├── RepairShopInsightsSection.tsx              # Section 4
  ├── WhenRepairMayNotMakeSenseSection.tsx       # Section 5
  ├── DecisionHelper.tsx                         # Section 6 - Interactive calculator
  ├── EmbedSection.tsx                           # Section 7 - Embed code
  ├── InfographicCTA.tsx                         # Soft CTA
  ├── InfographicSchemas.tsx                     # Article + Dataset + FAQ schemas
src/pages/embed/RepairStatsEmbed.tsx             # Embeddable stats widget
```

### Route Registration

Add to `src/App.tsx`:
- `/repair-or-replace-device-canada` - Main infographic page
- `/embed/repair-or-replace-stats` - Embeddable iframe version

---

## Component Specifications

### 1. StatBlock Component (Reusable)

A semantic, accessible stat display with expandable source citation:

```text
Structure:
┌─────────────────────────────────────────────────┐
│  [Stat text as plain <p> element]               │
│  ▼ View Source (Collapsible)                    │
│    Source: [Name] | Link | Year                 │
└─────────────────────────────────────────────────┘
```

Features:
- Plain HTML text (not in canvas/image)
- Expandable source using existing `Collapsible` component
- Semantic markup with `<article>` wrapper
- Mobile-first responsive styling

### 2. Section Components

Each section follows consistent structure:

```text
<section>
  <h2>[Section Title]</h2>
  <div>[StatBlock components]</div>
  <p>[Neutral explanation]</p>
</section>
```

#### Section 1: Replacement Frequency
Stats to display:
- "Canadians replace smartphones roughly every 3 years on average"
- "Canadians are holding onto phones and computers longer than in previous decades"

#### Section 2: Repair Preference
Stats to display:
- "45% of consumers prefer repairing devices instead of replacing them"
- "More than 75% of Canadians support Right-to-Repair legislation"

#### Section 3: Repair Costs (Third-Party Only)
Stats to display:
- "Smartphone repairs commonly range from ~$50-$400, depending on damage"
- "Cracked screen repairs average around ~$200"
- "Consumers report an average perceived repair or replacement cost of ~$302"
- Disclaimer: "Actual repair cost varies by device model, damage severity, and parts availability."

#### Section 4: Repair Shop Insights
Labeled as "anonymized Canadian repair data":
- Common failures: Screen damage, Battery degradation, Back glass damage
- Turnaround: "Same day to 3 business days"
- Note: Not presented as guarantee

#### Section 5: When Repair May Not Make Sense
E-waste stats:
- "Canada generates approximately 1 million tonnes of e-waste annually"
- "Only ~20% of Canadian e-waste is formally recycled"
- "14% of Canadian households report having unwanted cellphones"
- Data recovery + trade-in positioning

### 3. Decision Helper (Interactive)

```text
┌─────────────────────────────────────────────────┐
│  How old is your device?                        │
│  ○ Less than 2 years  ○ 2-4 years  ○ 4+ years  │
│                                                 │
│  What's the issue?                              │
│  ○ Screen  ○ Battery  ○ Back glass  ○ Other    │
│                                                 │
│  Does the device power on?                      │
│  ○ Yes  ○ No                                    │
│                                                 │
│  [See Recommendation]                           │
└─────────────────────────────────────────────────┘

Outcomes (exactly three):
1. "Repair often makes sense" + stat-backed rationale
2. "Repair may make sense depending on cost" + explanation
3. "Data recovery and trade-in may be smarter" + explanation
```

Implementation:
- Pure React state (no external dependencies)
- Decision logic visible as plain text in HTML
- Uses existing Radio Group and Button components
- No sales language in outcomes

### 4. Embed Section

Provides:
- Responsive iframe embed code
- Minimal branding (text attribution only)
- Canonical backlink
- Copy-to-clipboard functionality

### 5. Structured Data (JSON-LD)

Three schema types in `InfographicSchemas.tsx`:

```text
Article Schema
├── Publisher: Mobile Tech Lab
├── Geographic scope: Canada
├── dateModified: Current date
└── Update frequency: Quarterly

Dataset Schema
├── Name: Canadian Device Repair & Replacement Statistics
├── Description: Aggregated repair, cost, and e-waste data
├── Temporal coverage: 2026
└── Update cadence: Quarterly

FAQ Schema (Consumer-Style)
├── "Is it worth fixing my phone in Canada?"
├── "How long does phone repair usually take?"
├── "When is a phone not worth repairing?"
└── "Is trading in a damaged phone better than repairing it?"
```

---

## Design System Integration

### Colors (from existing CSS variables)
- Primary: `hsl(1 76% 55%)` - Mobile Tech Lab Red
- Background: `hsl(0 0% 100%)`
- Foreground: `hsl(220 15% 15%)`
- Muted: `hsl(0 0% 94%)`
- Border: `hsl(0 0% 90%)`

### Typography
- Font: Inter (already imported)
- Headings: `font-bold tracking-tight`
- Body: `text-muted-foreground`

### Spacing
- Section padding: `py-16 md:py-20` (matches existing pattern)
- Container: `container mx-auto px-4`
- Max-width for readability: `max-w-3xl` or `max-w-4xl`

### Components to Reuse
- `Header` and `Footer` (layout)
- `Accordion` (expandable sources)
- `Collapsible` (section expansion)
- `RadioGroup` (decision helper)
- `Button` (CTA and interactions)
- `Card` (stat containers)

---

## Accessibility Requirements

- Semantic HTML: `<article>`, `<section>`, `<h1>-<h3>`, `<p>`, `<ul>`
- All stats as plain text (not images/canvas)
- Page readable with JavaScript disabled (core content)
- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast

---

## SEO Considerations

### Meta Tags
- Title: "Repair or Replace Your Device? Canadian Repair, Cost & E-Waste Statistics (2026) | Mobile Tech Lab"
- Description: Neutral, fact-focused summary
- Canonical URL: `https://mobiletechlab.ca/repair-or-replace-device-canada`
- Open Graph tags for social sharing

### Structured Data
- Article schema for search visibility
- Dataset schema for data citation
- FAQ schema for featured snippets

### Internal Linking
- Link to `/repair-pricing` for pricing philosophy
- Link to `/trade-in` for trade-in program
- Link to `/contact` for consultation

---

## Implementation Sequence

### Phase 1: Foundation
1. Create `InfographicSchemas.tsx` with all three JSON-LD schemas
2. Create `StatBlock.tsx` reusable component
3. Create main `RepairOrReplace.tsx` page shell with Header/Footer

### Phase 2: Content Sections
4. Create `InfographicHero.tsx` with H1 and intro
5. Create `ReplacementFrequencySection.tsx` (Section 1)
6. Create `RepairPreferenceSection.tsx` (Section 2)
7. Create `RepairCostSection.tsx` (Section 3)
8. Create `RepairShopInsightsSection.tsx` (Section 4)
9. Create `WhenRepairMayNotMakeSenseSection.tsx` (Section 5)

### Phase 3: Interactive Features
10. Create `DecisionHelper.tsx` (Section 6)
11. Create `EmbedSection.tsx` (Section 7)
12. Create `InfographicCTA.tsx` (soft CTA)

### Phase 4: Embed Widget
13. Create `src/pages/embed/RepairStatsEmbed.tsx`
14. Register embed route in `App.tsx`

### Phase 5: Integration
15. Register main route in `App.tsx`
16. Add footer link to infographic page

---

## Validation Checklist

- [ ] All statistics exist as plain HTML text
- [ ] No stat exists only inside images/canvas/JS-only components
- [ ] Page readable with JavaScript disabled
- [ ] Semantic HTML throughout
- [ ] Mobile-first responsive design
- [ ] Brand colors and typography match existing site
- [ ] All three structured data schemas present
- [ ] Expandable sources for each statistic
- [ ] Decision helper has visible logic
- [ ] Embed code functional with minimal branding
- [ ] Soft CTA with no sales pressure
- [ ] Date-agnostic URL structure

---

## Technical Notes

### Source Citations Structure

Each stat will include expandable source data:

```tsx
interface StatSource {
  name: string;       // "Statistics Canada"
  url?: string;       // Link to source
  year: string;       // "2024"
  note?: string;      // Additional context
}
```

### Decision Logic (Transparent)

The decision helper logic will be documented in the component and visible in the DOM:

```text
IF device_age < 2 years AND powers_on = yes
  THEN "Repair often makes sense"

IF device_age >= 2 AND device_age < 4 AND issue = screen|battery
  THEN "Repair may make sense depending on cost"

IF device_age >= 4 OR powers_on = no
  THEN "Data recovery and trade-in may be smarter"
```

### Quarterly Update Strategy

Content structured for easy updates:
- Stats data centralized in component props
- Year reference only in title/headings
- Schema dateModified set dynamically
