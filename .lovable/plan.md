

## Common Issues Section -- Above ServiceGrid

### Approach
Add a new optional `commonIssuesSection` prop to `RepairLandingTemplate` that renders **between the Hero and the ServiceGrid**. This preserves the existing `beforeAfterSection` slot for video/proof content on other pages (like iPad).

### CRO Logic
The page flow becomes:
1. **Hero** -- "We fix Xbox consoles"
2. **Common Issues** -- "Is this your problem? Yes, we fix it." (immediate validation + CTA)
3. **ServiceGrid** -- "Here's everything else we handle"
4. Rest of page (models, trust, FAQs)

This mirrors the Pain > Solution > Proof pattern that performs well for repair intent searches.

### Files to Create/Modify

**1. Create `src/components/repair/CommonIssuesSection.tsx`**
- Reusable component accepting an array of issue objects
- Each issue renders: icon, title, symptom list, solution summary, and a CTA button
- Full-width cards stacked vertically with alternating subtle backgrounds
- Section gets `id="common-issues"` for TOC anchor linking

**2. Edit `src/components/repair/RepairLandingTemplate.tsx`**
- Add optional `commonIssuesSection?: React.ReactNode` prop (separate from `beforeAfterSection`)
- Render it between `HeroSection` and `ServiceGrid`
- Add optional `commonIssuesTocLabel?: string` prop so TOC shows "Common Issues" when present
- Update TOC items array to conditionally include the new entry before "Services"

**3. Edit `src/pages/repair/XboxRepair.tsx`**
- Define the two common issues (HDMI port, power/shutdown) as a data array
- Import and render `CommonIssuesSection`, pass it via the new `commonIssuesSection` prop

### Data Structure (in XboxRepair.tsx)
```text
[
  {
    icon: Plug,
    title: "Broken HDMI Port",
    symptoms: ["No video output", "Loose HDMI connection", "Flickering or static"],
    solution: "Board-level micro-soldering to replace the HDMI port. Often same-day.",
    ctaText: "Get HDMI Repair Quote"
  },
  {
    icon: Power,
    title: "Won't Turn On / Shuts Off Mid-Game",
    symptoms: ["No power at all", "Turns off randomly", "Shuts down during gameplay"],
    solution: "Diagnosis of power supply, thermal system, or board-level fault. We identify the root cause before quoting.",
    ctaText: "Get Power Repair Quote"
  }
]
```

### Extensibility
Adding a third issue later (e.g., "Disc Drive Not Reading") is just appending to the array -- no component or template changes needed.
