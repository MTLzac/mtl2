
# Crawlability Improvement Plan for Mobile Tech Lab

## Problem Summary

After analyzing the codebase, I found several critical issues preventing inner pages from being indexed:

1. **Critical: Canonical Tag Issue in RepairLandingTemplate** - Uses `window.location.href` which causes problems with SPA rendering
2. **Missing Sitemap** - No `sitemap.xml` file exists
3. **Incomplete robots.txt** - Missing sitemap reference
4. **No Structured Data** - Missing LocalBusiness and Organization schema
5. **Limited Internal Linking** - Footer only links to 5 repair pages (of 32+ available)

---

## Issues Found

### Issue 1: Dynamic Canonical Tags (Critical)

**File:** `src/components/repair/RepairLandingTemplate.tsx` (line 60)

```tsx
<link rel="canonical" href={window.location.href} />
```

**Problem:** 
- `window.location.href` can include query parameters, fragments, or inconsistent URLs
- During server-side/prerendering, `window` may not exist or return unexpected values
- Google may see different canonical URLs for the same page

**Affected Pages:** All pages using `RepairLandingTemplate`:
- Samsung Repair, Google Pixel, Motorola, OnePlus, LG, Huawei, Xiaomi, Oppo, Nothing, Infinix, TCL, ZTE, Blackberry, Sony Xperia, Vivo
- iPad, Galaxy Tab, Amazon Kindle
- Apple Watch, iPod
- MacBook, Surface, Laptop
- Nintendo Switch, PS5, PS4, Xbox, Steam Deck
- Water Damage

**Note:** The iPhone Repair page correctly uses a hardcoded canonical: `https://mobiletechlab.ca/repair/iphone`

---

### Issue 2: Missing XML Sitemap

**Current State:** No `sitemap.xml` file exists in the `public/` folder.

**Impact:**
- Search engines rely on sitemaps to discover all URLs
- Without a sitemap, Google depends solely on internal links and external discovery
- Inner pages with few inbound links are less likely to be found

---

### Issue 3: Incomplete robots.txt

**Current (`public/robots.txt`):**
```
User-agent: Googlebot
Allow: /
...
```

**Missing:** Sitemap directive to help crawlers find all URLs.

---

### Issue 4: Limited Footer Internal Links

**Current State:** Footer only links to 5 repair pages:
- iPhone, Samsung, iPad, MacBook, Water Damage

**Missing:** 27+ other repair pages have no footer links, reducing their crawl priority.

---

### Issue 5: No Organization/LocalBusiness Structured Data

**Impact:** 
- Missing LocalBusiness schema for the two physical locations
- No Organization schema for brand identity
- Reduces chances of rich snippets in search results

---

## Implementation Plan

### Step 1: Fix Canonical Tags in RepairLandingTemplate

Update `RepairLandingTemplate` to accept a required `canonicalUrl` prop instead of using `window.location.href`.

**Changes to `src/components/repair/RepairLandingTemplate.tsx`:**
- Add `canonicalUrl: string` to the props interface
- Replace `window.location.href` with the prop value

**Changes to all 27 repair pages using the template:**
Each page will pass its hardcoded canonical URL, for example:
- `canonicalUrl="https://mobiletechlab.ca/repair/samsung"`
- `canonicalUrl="https://mobiletechlab.ca/repair/google-pixel"`
- etc.

---

### Step 2: Create XML Sitemap

Create `public/sitemap.xml` with all 40+ URLs:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mobiletechlab.ca/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://mobiletechlab.ca/repair/iphone</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- All 32+ repair pages -->
  <!-- Trade-in, Business, Contact pages -->
</urlset>
```

---

### Step 3: Update robots.txt

Add sitemap reference:

```
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: *
Allow: /

Sitemap: https://mobiletechlab.ca/sitemap.xml
```

---

### Step 4: Expand Footer Internal Links

Update `src/components/layout/Footer.tsx` to include more repair page links organized by category:

**New Structure:**
- **Phones:** iPhone, Samsung, Google Pixel, Motorola
- **Tablets:** iPad, Galaxy Tab
- **Computers:** MacBook, Surface, Laptop
- **Gaming:** Nintendo Switch, PS5, Xbox, Steam Deck
- **Other:** Apple Watch, Water Damage

This increases the number of footer links from 5 to 15+, improving crawl signals for inner pages.

---

### Step 5: Add LocalBusiness Structured Data

Create `src/components/seo/OrganizationSchema.tsx` and add it to the homepage:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mobile Tech Lab",
  "image": "https://mobiletechlab.ca/favicon.png",
  "telephone": "+1-204-500-9757",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "845 Dakota St #25",
    "addressLocality": "Winnipeg",
    "addressRegion": "MB",
    "postalCode": "R2M 5M3",
    "addressCountry": "CA"
  },
  "geo": {...},
  "openingHours": [...],
  "priceRange": "$$"
}
```

---

## Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `public/sitemap.xml` | Create | 40+ URLs with priority/frequency |
| `public/robots.txt` | Modify | Add Sitemap directive |
| `src/components/repair/RepairLandingTemplate.tsx` | Modify | Add canonicalUrl prop |
| `src/pages/repair/SamsungRepair.tsx` | Modify | Add canonicalUrl prop |
| `src/pages/repair/GooglePixelRepair.tsx` | Modify | Add canonicalUrl prop |
| *(and 25 other repair pages)* | Modify | Add canonicalUrl prop |
| `src/components/layout/Footer.tsx` | Modify | Add more repair links |
| `src/components/seo/OrganizationSchema.tsx` | Create | LocalBusiness JSON-LD |
| `src/pages/Index.tsx` | Modify | Add OrganizationSchema |

---

## Priority Order

1. **Highest:** Fix canonical tags (this is likely blocking indexing)
2. **High:** Create sitemap.xml and update robots.txt
3. **Medium:** Expand footer internal links
4. **Medium:** Add LocalBusiness structured data

---

## Post-Implementation Steps

After these changes are deployed:

1. **Submit sitemap to Google Search Console** - Go to Indexing → Sitemaps → Add your sitemap URL
2. **Request indexing** for key inner pages in Google Search Console
3. **Monitor coverage** in Search Console over the next 1-2 weeks
4. **Check for crawl errors** in the Coverage report

---

## Technical Notes

- All canonical URLs should use the production domain `https://mobiletechlab.ca/`
- Sitemap should be regenerated whenever new repair pages are added
- Consider adding `lastmod` dates to sitemap entries for frequently updated pages
