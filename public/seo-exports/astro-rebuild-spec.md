# Mobile Tech Lab — Astro Site Rebuild Specification

**Domain:** https://mobiletechlab.ca
**Business:** Professional phone, tablet, laptop, and console repair in Winnipeg & Thompson, Manitoba, Canada
**Date:** 2026-03-14

---

## Instructions for the Builder

Build this site in **Astro** with static HTML output. Use Astro's file-based routing, built-in `<head>` management, and component islands where interactivity is needed (e.g., mobile nav toggle, accordion FAQs). All pages should render as static HTML — no client-side routing. Use Tailwind CSS for styling. Use the Inter font family (or a similar clean sans-serif).

All internal links must use standard `<a href="/path">` tags (Astro handles this natively — no client-side router needed).

External links (shop, quote widget, Google Maps) should use `target="_blank" rel="noopener noreferrer"`.

The external repair quote widget URL used across the site is: `https://shop.mobiletechlab.ca/pages/repair2`

---

## Business Information

### Company: Mobile Tech Lab
- **Website:** https://mobiletechlab.ca
- **Online Shop:** https://shop.mobiletechlab.ca
- **Repair Quote Widget:** https://shop.mobiletechlab.ca/pages/repair2
- **Social:** Facebook (mobiletechlab), Instagram (mobiletechlab.ca)

### Locations

**1. St. Vital — Winnipeg (PRIMARY)**
- Address: 845 Dakota St #25, Winnipeg, MB R2M 5M3
- Phone: (204) 500-9757 / tel link: `tel:2045009757`
- Hours: Mon-Sat 9AM-7PM, Sun 12PM-7PM
- Google Maps: https://maps.google.com/?q=845+Dakota+St+25+Winnipeg+MB+R2M+5M3
- GMB: https://www.google.com/maps/place/Mobile+Tech+Lab+St.+Vital/data=!4m2!3m1!1s0x0:0x5aee2e35bcc25930

**2. Thompson**
- Address: 300 Mystery Lake Rd #1530, Thompson, MB R8N 0M2 (City Centre Mall)
- Phone: (204) 410-0262 / tel link: `tel:2044100262`
- Hours: Mon-Sat 10AM-6PM, Sun Closed
- Google Maps: https://maps.google.com/?q=300+Mystery+Lake+Rd+1530+Thompson+MB+R8N+0M2

### Key Differentiators
- 4.8/5 Google Rating, 500+ 5-star reviews
- Price Match Guarantee
- Same-day service on most repairs
- Warranty on every repair (30 days to lifetime depending on tier)
- Apple IRP Certified (access to Genuine Apple Parts)
- Repairs devices other shops turn away
- Professional data recovery services
- Trade-in program (working or broken devices)
- Free one-way shipping for B2B and mail-in orders
- Two Manitoba locations (Winnipeg + Thompson)
- Mail-in service across Manitoba and all of Canada/US

---

## Site Architecture & URL Structure

### Routing Hierarchy (by intent)

| Priority | Route Pattern | Intent | Example |
|----------|--------------|--------|---------|
| 1 | `/repairs` | Global repair directory | Repair hub |
| 2 | `/consoles` | Gaming console hub | Console repair hub |
| 3 | `/repair/[device]` | Service/transactional intent | `/repair/iphone` |
| 4 | `/location/[city]` | Local Pack SEO | `/location/winnipeg` |
| 5 | `/service-area/[city]` | Mail-in intent | `/service-area/brandon` |
| 6 | `/devices` | Device guide index | Device hub |
| 7 | `/devices/[model]` | Informational/research | `/devices/iphone-xr` |
| 8 | `/phone-problems/*` | Informational/troubleshooting | `/phone-problems/phone-not-charging` |

---

## Complete Route Table

### Main Pages

| URL | Title (`<title>`) | H1 | Meta Description |
|-----|-------------------|-----|-----------------|
| `/` | Professional Phone, Tablet, Computer & Console Repair in Winnipeg \| Mobile Tech Lab | Professional Phone, Tablet, Computer & Console Repair in Winnipeg | Mobile Tech Lab offers professional phone, tablet, laptop, and console repair in Winnipeg and across Manitoba. Same-day service, certified technicians, and warranty-backed repairs. |
| `/repairs` | Device Repair Services in Winnipeg \| Mobile Tech Lab | Device Repair Services in Winnipeg | Expert phone, tablet, and game console repair services in Winnipeg. Fast turnaround, certified technicians, and 90-day warranty on all repairs. |
| `/consoles` | Console Repair Winnipeg \| Xbox, PS5 & Gaming Console Fix | Console Repair Winnipeg | Console repair in Winnipeg for Xbox, PlayStation, and Nintendo systems. Fix HDMI ports, overheating, disc drive issues, and controller problems. |
| `/trade-in` | Sell Your Phone Winnipeg \| Get Cash for Used Devices \| Mobile Tech Lab | Sell Your Phone, Tablet & Laptop in Winnipeg | Sell your used phone, tablet, or laptop in Winnipeg. Get cash or store credit same-day. Price match guarantee. Free shipping on mail-ins. Working or damaged devices accepted. |
| `/business` | Business & Wholesale Device Repair \| Mobile Tech Lab Winnipeg | Business & Wholesale Repairs | B2B device repair and buyback for schools, IT resellers, and repair shops. Volume pricing, free shipping, and fleet trade-in programs. No minimums. |
| `/contact` | Contact Us \| Mobile Tech Lab Winnipeg & Thompson | Contact Mobile Tech Lab | Contact Mobile Tech Lab for device repair in Winnipeg and Thompson, Manitoba. Call us, visit our stores, or get a free online quote. Walk-ins welcome! |
| `/screen-quality` | Screen Quality Options \| Mobile Tech Lab | (interactive tool page) | Compare screen quality tiers for iPhone, iPad, and Samsung repairs. |
| `/screen-insurance` | (screen insurance comparison) | (screen insurance page) | iPhone screen insurance comparison and alternative coverage options. |
| `/repair-pricing` | Repair Pricing Explained in Winnipeg \| Mobile Tech Lab | (pricing explainer) | Understand how repair pricing works in Winnipeg: why costs vary, screen quality options, warranties, turnaround times, and when repair vs replacement makes sense. |
| `/repair-or-replace-device-canada` | Should You Repair or Replace Your Device? [Current Year] Data | (infographic page) | Infographic-style article with repair statistics and decision helper. |

### Phone Repair Pages (`/repair/[device]`)

| URL | Title | H1 | Meta Description |
|-----|-------|-----|-----------------|
| `/repair/iphone` | iPhone Repair Winnipeg \| Screen & Battery Fix \| Mobile Tech Lab | iPhone Repair in Winnipeg – Fast, Affordable & Trusted | Expert iPhone repair in Winnipeg & Thompson. Same-day screen replacement, battery swap, charging port & back glass repair for all iPhone models. Price match guarantee. |
| `/repair/samsung` | Samsung Phone Repair Winnipeg \| Screen & Battery Fix \| Mobile Tech Lab | Samsung Repair in Winnipeg | Expert Samsung Galaxy repair in Winnipeg. Screen replacement, battery, charging port, water damage repair for all Galaxy S, Z Fold, Z Flip, A series & Note models. |
| `/repair/google-pixel` | Google Pixel Repair Winnipeg \| Screen & Battery Fix \| Mobile Tech Lab | Google Pixel Repair in Winnipeg | Expert Google Pixel repair in Winnipeg. |
| `/repair/motorola` | Motorola Phone Repair Winnipeg \| Screen & Battery Fix \| Mobile Tech Lab | Motorola Repair in Winnipeg | Motorola phone repair in Winnipeg. |
| `/repair/oneplus` | OnePlus Phone Repair Winnipeg \| Screen & Battery Fix \| Mobile Tech Lab | OnePlus Repair in Winnipeg | OnePlus phone repair in Winnipeg. |
| `/repair/lg` | LG Phone Repair Winnipeg \| Screen & Battery Fix \| Mobile Tech Lab | LG Repair in Winnipeg | LG phone repair in Winnipeg. Legacy specialists. |
| `/repair/huawei` | Huawei Phone Repair Winnipeg \| Broken Screens, Bad Batteries \| Mobile Tech Lab | Huawei Repair in Winnipeg | Huawei phone repair in Winnipeg. |
| `/repair/xiaomi` | Xiaomi Repair Winnipeg \| Redmi & POCO Screen Fix \| Mobile Tech Lab | Xiaomi Repair in Winnipeg | Xiaomi, Redmi, and POCO repair in Winnipeg. |
| `/repair/oppo` | Oppo Repair Winnipeg \| Find X & Reno Screen Fix \| Mobile Tech Lab | Oppo Repair in Winnipeg | Oppo phone repair in Winnipeg. |
| `/repair/nothing` | Nothing Phone Repair Winnipeg \| Mobile Tech Lab | Nothing Phone Repair in Winnipeg | Nothing phone repair in Winnipeg. Glyph Interface specialists. |
| `/repair/infinix` | Infinix Repair Winnipeg \| Mobile Tech Lab | Infinix Repair in Winnipeg | Infinix phone repair in Winnipeg. |
| `/repair/tcl` | TCL Repair Winnipeg \| Mobile Tech Lab | TCL Repair in Winnipeg | TCL phone repair in Winnipeg. |
| `/repair/zte` | ZTE Repair Winnipeg \| Mobile Tech Lab | ZTE Repair in Winnipeg | ZTE phone repair in Winnipeg. |
| `/repair/blackberry` | BlackBerry Repair Winnipeg \| Mobile Tech Lab | BlackBerry Repair in Winnipeg | BlackBerry phone repair in Winnipeg. |
| `/repair/sony-xperia` | Sony Xperia Repair Winnipeg \| Mobile Tech Lab | Sony Xperia Repair in Winnipeg | Sony Xperia phone repair in Winnipeg. |
| `/repair/vivo` | Vivo Repair Winnipeg \| Mobile Tech Lab | Vivo Repair in Winnipeg | Vivo phone repair in Winnipeg. |

### Tablet Repair Pages

| URL | Title | H1 |
|-----|-------|-----|
| `/repair/ipad` | iPad Repair Winnipeg \| Screen & Battery Replacement | iPad Repair in Winnipeg |
| `/repair/samsung-galaxy-tab` | Samsung Galaxy Tab Repair Winnipeg \| Screen & Battery Fix \| Mobile Tech Lab | Samsung Galaxy Tab Repair in Winnipeg |
| `/repair/amazon-kindle-fire` | Amazon Kindle & Fire Tablet Repair Winnipeg \| E-Reader Specialists | Amazon Kindle & Fire Tablet Repair in Winnipeg |

**Note:** `/repair/galaxy-tab` should redirect to `/repair/samsung-galaxy-tab`.

### Wearable & Legacy Repair Pages

| URL | Title |
|-----|-------|
| `/repair/apple-watch` | Apple Watch Repair Winnipeg \| Screen & Battery Replacement |
| `/repair/ipod` | iPod Repair Winnipeg \| Screen, Battery & Data Recovery |

### Laptop/Computer Repair Pages

| URL | Title |
|-----|-------|
| `/repair/macbook` | MacBook Repair Services \| Expert Mac Repairs |
| `/repair/laptop` | Laptop Repair Winnipeg \| Asus, Acer, Lenovo, HP, Dell & More |
| `/repair/surface` | Microsoft Surface Repair in Manitoba \| MobileTechLab |

**Note:** `/repair/microsoft-surface` should redirect to `/repair/surface`.

### Console Repair Pages

| URL | Title |
|-----|-------|
| `/repair/nintendo-switch` | Nintendo Switch Repair Winnipeg \| Joy-Con Drift Fix \| Mobile Tech Lab |
| `/repair/ps5` | PS5 Repair Winnipeg \| PlayStation 5 Fix \| Mobile Tech Lab |
| `/repair/ps4` | PS4 Repair Winnipeg \| PlayStation 4 Fix \| Mobile Tech Lab |
| `/repair/xbox` | Xbox Repair Winnipeg \| Series X & Controller Fix \| Mobile Tech Lab |
| `/repair/steam-deck` | Steam Deck Repair Winnipeg \| Screen & Joystick Fix \| Mobile Tech Lab |
| `/repair/controller-repair-winnipeg` | Controller Repair Winnipeg \| Xbox & PS5 Controller Repair |

**Note:** `/repair/playstation-5` redirects to `/repair/ps5`, `/repair/playstation-4` redirects to `/repair/ps4`.

### Niche/Specialty Repair Pages

| URL | Title |
|-----|-------|
| `/repair/water-damage` | Water & Liquid Damage Repair Winnipeg \| Mobile Tech Lab |
| `/repair/cat-s62-charging-port` | CAT S62 Charging Port Repair |
| `/repair/blackmagic-hdmi` | BlackMagic HDMI Repair |

### Location Pages (Physical Stores)

| URL | Title |
|-----|-------|
| `/location/winnipeg` | Visit Our St. Vital Winnipeg Location \| Mobile Tech Lab |
| `/location/thompson` | Visit Our Thompson Repair Location \| Mobile Tech Lab |

**Note:** `/locations/winnipeg` and `/locations/thompson` should 301 redirect to the non-plural versions.

### Service Area Pages (Mail-In)

| URL | Title |
|-----|-------|
| `/service-areas` | Service Areas index (mail-in hub) |
| `/service-area/steinbach` | Steinbach mail-in service area |
| `/service-area/portage-la-prairie` | Portage la Prairie mail-in service area |
| `/service-area/brandon` | Brandon mail-in service area |
| `/service-area/selkirk` | Selkirk mail-in service area |
| `/service-area/the-pas` | The Pas mail-in service area |

**Note:** `/location/brandon` should 301 redirect to `/service-area/brandon`.

### Device Guide Pages (Informational)

| URL | Title |
|-----|-------|
| `/devices` | Device Guides — Is Your Phone Still Worth Repairing? \| Mobile Tech Lab |
| `/devices/iphone-xr` | Is the iPhone XR Still Supported in 2026? Repair Viability, iOS Support & Upgrade Options |
| `/devices/iphone-xs` | Is the iPhone XS Still Supported in 2026? Repair Viability, iOS Support & Upgrade Options |
| `/devices/iphone-xs-max` | Is the iPhone XS Max Still Supported in 2026? Repair Viability & Upgrade Guide |
| `/devices/iphone-11` | Is the iPhone 11 Still Supported in 2026? Repair Viability & Upgrade Guide |
| `/devices/iphone-11-pro` | Is the iPhone 11 Pro Still Supported in 2026? Repair Viability & Upgrade Guide |

### Phone Problems / Troubleshooting Articles

| URL | Title | Meta Description |
|-----|-------|-----------------|
| `/phone-problems/phone-not-charging` | Phone Not Charging? Common Causes & Fixes \| Mobile Tech Lab | Your phone won't charge? Learn the most common reasons — from faulty cables to charging port damage — and how to fix them. |
| `/phone-problems/phone-not-charging/iphone` | iPhone Not Charging? Causes and Fixes \| Mobile Tech Lab | Is your iPhone not charging? Learn the most common causes like faulty cables, dirty Lightning or USB-C ports, and battery issues — and how to fix them. |
| `/phone-problems/phone-not-charging/samsung` | Samsung Phone Not Charging? Causes and Fixes \| Mobile Tech Lab | Is your Samsung Galaxy not charging? Learn the most common causes like faulty USB-C cables, dirty charging ports, and battery problems — and how to fix them. |
| `/phone-problems/phone-not-charging/charging-port` | Phone Charging Port Damage: Signs, Causes & Repair Options \| Mobile Tech Lab | Is your phone's charging port loose or damaged? Learn how to spot charging port problems, what causes them, and when professional repair makes sense. |
| `/phone-problems/phone-not-charging/slow-charging` | Phone Charging Slowly? Causes and Fixes \| Mobile Tech Lab | Is your phone charging slowly? Learn the most common causes like weak chargers, dirty charging ports, and battery problems — and how to fix them. |

### Embed Pages (not in main nav)

| URL | Purpose |
|-----|---------|
| `/embed/repair-or-replace-stats` | Embeddable stats widget for the repair-or-replace infographic |

### Draft Pages (exclude from production build)

These are internal drafts and should NOT be included in the Astro build:
- `/pdp-v2-draft`
- `/samsung-repair-draft`

---

## Navigation Structure

### Header Navigation

**Desktop:** Sticky top nav with logo, primary nav links, and CTAs.

**Primary Nav Items:**
1. **Repairs** (dropdown/mega menu)
   - "All Repairs" → `/repairs`
   - Phone Repairs: iPhone, Samsung, Google Pixel, Motorola, OnePlus, LG, Huawei, Xiaomi, Oppo, Nothing, Infinix, TCL, ZTE, Blackberry
   - Tablets: iPad, Galaxy Tab, Amazon Kindle
   - Consoles & Gaming: Nintendo Switch, PS5, PS4, Xbox, Steam Deck, Controller Repair
   - Computers: MacBook, Laptop, Surface
   - Other: Apple Watch, iPod, Water Damage
2. **Locations** (dropdown)
   - Physical Stores: St. Vital Winnipeg (`/location/winnipeg`), Thompson (`/location/thompson`)
   - Mail-In Areas: Brandon, Steinbach, Portage la Prairie, Selkirk, The Pas, More Areas (`/service-areas`)
3. **Business** → `/business`
4. **Trade-In** → `/trade-in`
5. **Pre-Owned** → `https://shop.mobiletechlab.ca` (external)
6. **Contact** → `/contact`

**CTAs:**
- Call: `tel:2045009757` — "(204) 500-9757"
- Get Quote: `https://shop.mobiletechlab.ca/pages/repair2` (external, opens new tab)

**Mobile:** Hamburger menu (Sheet/drawer pattern) with all the same links.

### Footer Navigation

**Columns:**
1. **Brand** — Logo, tagline: "Manitoba's trusted device repair specialists. Fast, reliable, and affordable repairs for phones, tablets, consoles, and computers."
2. **Quick Links** — Home `/`, Get a Quote (external), Sell Your Phone `/trade-in`, Contact Us `/contact`, Repair Pricing `/repair-pricing`, Service Areas `/service-areas`
3. **Phone Repairs** — iPhone `/repair/iphone`, Samsung `/repair/samsung`, Google Pixel `/repair/google-pixel`, Motorola `/repair/motorola`
4. **Tablets & Computers** — iPad `/repair/ipad`, Galaxy Tab `/repair/samsung-galaxy-tab`, MacBook `/repair/macbook`, Laptop `/repair/laptop`
5. **Gaming & More** — Nintendo Switch `/repair/nintendo-switch`, PS5 `/repair/ps5`, Xbox `/repair/xbox`, Steam Deck `/repair/steam-deck`, Apple Watch `/repair/apple-watch`, Water Damage `/repair/water-damage`
6. **Device Guides** — iPhone XR `/devices/iphone-xr`, iPhone XS `/devices/iphone-xs`, iPhone XS Max `/devices/iphone-xs-max`, iPhone 11 `/devices/iphone-11`, iPhone 11 Pro `/devices/iphone-11-pro`
7. **Phone Problems** — Phone Not Charging `/phone-problems/phone-not-charging`, iPhone Not Charging `/phone-problems/phone-not-charging/iphone`, Samsung Not Charging `/phone-problems/phone-not-charging/samsung`, Charging Port Issues `/phone-problems/phone-not-charging/charging-port`, Slow Charging `/phone-problems/phone-not-charging/slow-charging`
8. **St. Vital Location** — Address, phone, hours
9. **Thompson Location** — Address, phone, hours
10. **Bottom bar** — © {current year} Mobile Tech Lab. All rights reserved.

---

## Shared Components

### Sticky Quote CTA
A fixed bottom bar on mobile (hidden on desktop or shown as floating) with "Get a Free Quote" linking to the external repair widget.

### Breadcrumbs
Visible breadcrumbs on all subpages. Example: Home > Repairs > iPhone Repair

### FAQ Accordion
Collapsible FAQ section used on most pages. Should output `FAQPage` JSON-LD schema.

### Location Cards
Reusable component showing both store locations with address, phone, hours, and map links. Used on many pages.

### Trust Bar
Row of trust signals: "500+ 5-Star Reviews", "4.8★ Google Rating", "2 Manitoba Locations", "Price Match Guarantee"

---

## JSON-LD Structured Data Strategy

Every page should include appropriate JSON-LD:

1. **Organization** — on homepage
2. **LocalBusiness** — on location pages, contact page, repair hub
3. **Service** — on each `/repair/*` page
4. **FAQPage** — on any page with FAQ accordion
5. **BreadcrumbList** — on all subpages
6. **ItemList** — on hub/index pages (repair hub, console hub, device hub)

---

## Canonical URLs

All pages must include `<link rel="canonical" href="https://mobiletechlab.ca{path}" />`.

Base domain: `https://mobiletechlab.ca` (no trailing slash on homepage, no `www`).

---

## Redirects (301)

Implement these as Astro redirects or in hosting config:

| From | To |
|------|----|
| `/locations/winnipeg` | `/location/winnipeg` |
| `/locations/thompson` | `/location/thompson` |
| `/location/brandon` | `/service-area/brandon` |
| `/repair/galaxy-tab` | `/repair/samsung-galaxy-tab` |
| `/repair/microsoft-surface` | `/repair/surface` |
| `/repair/playstation-5` | `/repair/ps5` |
| `/repair/playstation-4` | `/repair/ps4` |
| `/b2b` | `/business` |

---

## SEO Requirements

- Every page: unique `<title>` (under 60 chars with keyword), unique `<meta name="description">` (under 160 chars), single `<h1>`, canonical tag
- Semantic HTML throughout (`<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`)
- Alt text on all images
- Lazy loading on below-fold images
- robots.txt and XML sitemap at `/sitemap.xml`
- `<meta name="robots" content="index, follow" />` on all public pages
- Responsive viewport meta tag

---

## Full Page Content Reference

For the complete content of every page (hero copy, service lists, FAQs, model lists, advantage pillars, reviews, etc.), refer to the companion file:

**`full-site-content.md`** — contains all text content, headings, CTAs, and data for every page on the site.

---

## Sitemap

The XML sitemap should include all public URLs listed in the route table above. See `sitemap.xml` for the current version with change frequencies and priorities.

---

*End of Astro rebuild specification.*
