
# Add Niche Repair Pages to Sitemap

## Overview
Add the two niche repair pages to the XML sitemap for complete search engine coverage.

## Changes Required

### File: `public/sitemap.xml`

Add two new URL entries in the "Specialty Repair Pages" section (after water-damage):

```xml
<!-- Niche Repair Pages -->
<url>
  <loc>https://mobiletechlab.ca/repair/cat-s62-charging-port</loc>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>
<url>
  <loc>https://mobiletechlab.ca/repair/blackmagic-hdmi</loc>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>
```

## Priority Rationale
- Priority 0.6 chosen because these are niche/specialty pages with lower search volume than main device categories
- `changefreq: monthly` matches other repair pages

## Result
Sitemap will increase from 35 to 37 URLs, providing complete coverage of all repair landing pages.
