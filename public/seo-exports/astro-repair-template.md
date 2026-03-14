# Astro Repair Service Page — Full HTML Template Extraction

> Extracted from `mobiletechlab.ca` React codebase. All React dependencies removed.
> Ready for Astro static rendering with `<a href>` links, no client-side routing.

---

## Table of Contents

1. [Base Layout](#1-base-layout)
2. [Repair Service Page Template](#2-repair-service-page-template)
3. [Reusable Components](#3-reusable-components)
4. [JSON-LD Structured Data Templates](#4-json-ld-structured-data-templates)
5. [Data Contracts (Frontmatter Props)](#5-data-contracts-frontmatter-props)
6. [CSS / Tailwind Token Reference](#6-css--tailwind-token-reference)

---

## 1. Base Layout

**File:** `src/layouts/BaseLayout.astro`

All pages wrap in this shell. Includes sticky header, footer, and mobile sticky CTA.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{metaTitle}</title>
  <meta name="description" content="{metaDescription}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="{canonicalUrl}" />
  <link rel="icon" href="/favicon.png" />

  <!-- JSON-LD slots injected per page (BreadcrumbList, Service, FAQPage) -->
  <slot name="structured-data" />
</head>
<body class="flex min-h-screen flex-col">

  <!-- ═══ HEADER ═══ -->
  <header class="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
    <div class="container mx-auto flex h-16 items-center justify-between px-4">

      <!-- Logo -->
      <a href="/" class="flex items-center">
        <img src="/assets/logo.png" alt="Mobile Tech Lab" class="h-10 w-auto" />
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-1" aria-label="Main navigation">
        <a href="/" class="px-4 py-2 text-sm font-medium hover:text-primary">Home</a>

        <!-- Repairs Mega Menu (CSS-only dropdown or JS toggle) -->
        <div class="relative group">
          <a href="/repairs" class="px-4 py-2 text-sm font-medium hover:text-primary">Repairs ▾</a>
          <div class="absolute left-0 top-full hidden group-hover:grid w-[600px] gap-3 p-4 md:grid-cols-3 border border-border bg-background rounded-lg shadow-lg z-50">

            <!-- All Repairs link -->
            <div class="col-span-full mb-2 border-b border-border pb-3">
              <a href="/repairs" class="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                <!-- Wrench icon (inline SVG or icon font) -->
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                View All Repair Services
              </a>
            </div>

            <!-- Phone Repairs -->
            <div>
              <div class="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">Phone Repairs</div>
              <ul class="space-y-1">
                <li><a href="/repair/iphone" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">iPhone</a></li>
                <li><a href="/repair/samsung" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Samsung</a></li>
                <li><a href="/repair/google-pixel" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Google Pixel</a></li>
                <li><a href="/repair/motorola" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Motorola</a></li>
                <li><a href="/repair/oneplus" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">OnePlus</a></li>
                <li><a href="/repair/lg" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">LG</a></li>
                <li><a href="/repair/huawei" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Huawei</a></li>
                <li><a href="/repair/xiaomi" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Xiaomi</a></li>
                <li><a href="/repair/oppo" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Oppo</a></li>
                <li><a href="/repair/nothing" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Nothing</a></li>
                <li><a href="/repair/infinix" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Infinix</a></li>
                <li><a href="/repair/tcl" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">TCL</a></li>
                <li><a href="/repair/zte" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">ZTE</a></li>
                <li><a href="/repair/blackberry" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Blackberry</a></li>
              </ul>
            </div>

            <!-- Tablets -->
            <div>
              <div class="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">Tablets</div>
              <ul class="space-y-1">
                <li><a href="/repair/ipad" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">iPad</a></li>
                <li><a href="/repair/galaxy-tab" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Galaxy Tab</a></li>
                <li><a href="/repair/amazon-kindle-fire" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Amazon Kindle/Fire</a></li>
              </ul>

              <div class="mt-4 mb-2 flex items-center gap-2 text-sm font-semibold text-primary">Gaming Consoles</div>
              <ul class="space-y-1">
                <li><a href="/consoles" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">All Console Repairs</a></li>
                <li><a href="/repair/nintendo-switch" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Nintendo Switch</a></li>
                <li><a href="/repair/playstation-5" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">PlayStation 5</a></li>
                <li><a href="/repair/playstation-4" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">PlayStation 4</a></li>
                <li><a href="/repair/xbox" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Xbox</a></li>
                <li><a href="/repair/steam-deck" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Steam Deck</a></li>
              </ul>
            </div>

            <!-- Computers & Other -->
            <div>
              <div class="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">Computers</div>
              <ul class="space-y-1">
                <li><a href="/repair/macbook" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">MacBook</a></li>
                <li><a href="/repair/microsoft-surface" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Microsoft Surface</a></li>
                <li><a href="/repair/laptop" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Laptop Repair</a></li>
              </ul>

              <div class="mt-4 mb-2 flex items-center gap-2 text-sm font-semibold text-primary">Other Devices</div>
              <ul class="space-y-1">
                <li><a href="/repair/apple-watch" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Apple Watch</a></li>
                <li><a href="/repair/ipod" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">iPod</a></li>
                <li><a href="/repair/water-damage" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Water Damage</a></li>
              </ul>

              <div class="mt-4 mb-2 flex items-center gap-2 text-sm font-semibold text-primary">Specialty</div>
              <ul class="space-y-1">
                <li><a href="/repair/cat-s62-charging-port" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">CAT S62 Charging Port</a></li>
                <li><a href="/repair/blackmagic-hdmi" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">BlackMagic HDMI</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Locations Dropdown -->
        <div class="relative group">
          <button class="px-4 py-2 text-sm font-medium hover:text-primary">Locations ▾</button>
          <div class="absolute left-0 top-full hidden group-hover:grid w-[400px] gap-4 p-4 md:grid-cols-2 border border-border bg-background rounded-lg shadow-lg z-50">
            <div>
              <div class="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">Physical Stores</div>
              <ul class="space-y-1">
                <li><a href="/location/winnipeg" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Winnipeg (St. Vital), MB</a></li>
                <li><a href="/location/thompson" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Thompson, MB</a></li>
              </ul>
            </div>
            <div>
              <div class="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">Mail-In Service Areas</div>
              <ul class="space-y-1">
                <li><a href="/service-area/brandon" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Brandon</a></li>
                <li><a href="/service-area/steinbach" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Steinbach</a></li>
                <li><a href="/service-area/portage-la-prairie" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Portage la Prairie</a></li>
                <li><a href="/service-area/selkirk" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Selkirk</a></li>
                <li><a href="/service-area/the-pas" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">The Pas</a></li>
                <li><a href="/service-areas" class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">More Areas</a></li>
              </ul>
            </div>
          </div>
        </div>

        <a href="/business" class="px-4 py-2 text-sm font-medium hover:text-primary">Business</a>
        <a href="/trade-in" class="px-4 py-2 text-sm font-medium hover:text-primary">Trade-In</a>
        <a href="https://shop.mobiletechlab.ca" target="_blank" rel="noopener noreferrer" class="px-4 py-2 text-sm font-medium hover:text-primary">Pre-Owned</a>
        <a href="/contact" class="px-4 py-2 text-sm font-medium hover:text-primary">Contact</a>
      </nav>

      <!-- Desktop CTA -->
      <div class="hidden items-center gap-3 md:flex">
        <a href="tel:2045009757" class="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium hover:text-primary">
          <!-- Phone icon -->
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          (204) 500-9757
        </a>
        <a href="https://shop.mobiletechlab.ca/pages/repair2" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Get Quote
        </a>
      </div>

      <!-- Mobile hamburger (requires minimal JS toggle) -->
      <button id="mobile-menu-toggle" class="lg:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-accent" aria-label="Open menu">
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </button>
    </div>
  </header>

  <!-- ═══ MAIN CONTENT ═══ -->
  <main class="flex-1 pb-20 md:pb-0">
    <slot />
  </main>

  <!-- ═══ FOOTER ═══ -->
  <footer class="border-t border-border bg-secondary/30">
    <div class="container mx-auto px-4 py-12">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-6">

        <!-- Brand -->
        <div>
          <a href="/" class="mb-4 inline-block">
            <img src="/assets/logo.png" alt="Mobile Tech Lab" class="h-10 w-auto" />
          </a>
          <p class="text-sm text-muted-foreground">
            Manitoba's trusted device repair specialists. Fast, reliable, and affordable repairs for phones, tablets, consoles, and computers.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="mb-4 font-semibold">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="/" class="text-muted-foreground hover:text-primary">Home</a></li>
            <li><a href="https://shop.mobiletechlab.ca/pages/repair2" target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-primary">Get a Quote</a></li>
            <li><a href="/trade-in" class="text-muted-foreground hover:text-primary">Sell Your Phone</a></li>
            <li><a href="/contact" class="text-muted-foreground hover:text-primary">Contact Us</a></li>
            <li><a href="/repair-pricing" class="text-muted-foreground hover:text-primary">Repair Pricing</a></li>
            <li><a href="/service-areas" class="text-muted-foreground hover:text-primary">Service Areas</a></li>
          </ul>
        </div>

        <!-- Phone Repairs -->
        <div>
          <h3 class="mb-4 font-semibold">Phone Repairs</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="/repair/iphone" class="text-muted-foreground hover:text-primary">iPhone Repair</a></li>
            <li><a href="/repair/samsung" class="text-muted-foreground hover:text-primary">Samsung Repair</a></li>
            <li><a href="/repair/google-pixel" class="text-muted-foreground hover:text-primary">Google Pixel Repair</a></li>
            <li><a href="/repair/motorola" class="text-muted-foreground hover:text-primary">Motorola Repair</a></li>
          </ul>
        </div>

        <!-- Tablets & Computers -->
        <div>
          <h3 class="mb-4 font-semibold">Tablets & Computers</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="/repair/ipad" class="text-muted-foreground hover:text-primary">iPad Repair</a></li>
            <li><a href="/repair/samsung-galaxy-tab" class="text-muted-foreground hover:text-primary">Galaxy Tab Repair</a></li>
            <li><a href="/repair/macbook" class="text-muted-foreground hover:text-primary">MacBook Repair</a></li>
            <li><a href="/repair/laptop" class="text-muted-foreground hover:text-primary">Laptop Repair</a></li>
          </ul>
        </div>

        <!-- Gaming & More -->
        <div>
          <h3 class="mb-4 font-semibold">Gaming & More</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="/repair/nintendo-switch" class="text-muted-foreground hover:text-primary">Nintendo Switch</a></li>
            <li><a href="/repair/ps5" class="text-muted-foreground hover:text-primary">PS5 Repair</a></li>
            <li><a href="/repair/xbox" class="text-muted-foreground hover:text-primary">Xbox Repair</a></li>
            <li><a href="/repair/steam-deck" class="text-muted-foreground hover:text-primary">Steam Deck Repair</a></li>
            <li><a href="/repair/apple-watch" class="text-muted-foreground hover:text-primary">Apple Watch Repair</a></li>
            <li><a href="/repair/water-damage" class="text-muted-foreground hover:text-primary">Water Damage</a></li>
          </ul>
        </div>

        <!-- Device Guides -->
        <div>
          <h3 class="mb-4 font-semibold">Device Guides</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="/devices/iphone-xr" class="text-muted-foreground hover:text-primary">iPhone XR</a></li>
            <li><a href="/devices/iphone-xs" class="text-muted-foreground hover:text-primary">iPhone XS</a></li>
            <li><a href="/devices/iphone-xs-max" class="text-muted-foreground hover:text-primary">iPhone XS Max</a></li>
            <li><a href="/devices/iphone-11" class="text-muted-foreground hover:text-primary">iPhone 11</a></li>
            <li><a href="/devices/iphone-11-pro" class="text-muted-foreground hover:text-primary">iPhone 11 Pro</a></li>
          </ul>
        </div>

        <!-- Phone Problems -->
        <div>
          <h3 class="mb-4 font-semibold">Phone Problems</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="/phone-problems/phone-not-charging" class="text-muted-foreground hover:text-primary">Phone Not Charging</a></li>
            <li><a href="/phone-problems/phone-not-charging/iphone" class="text-muted-foreground hover:text-primary">iPhone Not Charging</a></li>
            <li><a href="/phone-problems/phone-not-charging/samsung" class="text-muted-foreground hover:text-primary">Samsung Not Charging</a></li>
            <li><a href="/phone-problems/phone-not-charging/charging-port" class="text-muted-foreground hover:text-primary">Charging Port Issues</a></li>
            <li><a href="/phone-problems/phone-not-charging/slow-charging" class="text-muted-foreground hover:text-primary">Slow Charging</a></li>
          </ul>
        </div>

        <!-- St. Vital Location -->
        <div>
          <h3 class="mb-4 font-semibold">St. Vital Location</h3>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li class="flex items-start gap-2">
              <!-- MapPin icon -->
              <span class="mt-0.5 h-4 w-4 shrink-0 text-primary">📍</span>
              <span>845 Dakota St #25, Winnipeg, MB R2M 5M3</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="h-4 w-4 text-primary">📞</span>
              <a href="tel:2045009757" class="hover:text-primary">(204) 500-9757</a>
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-0.5 h-4 w-4 shrink-0 text-primary">🕒</span>
              <span>Mon-Sat: 9AM - 7PM / Sun: 12PM - 7PM</span>
            </li>
          </ul>
        </div>

        <!-- Thompson Location -->
        <div>
          <h3 class="mb-4 font-semibold">Thompson Location</h3>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li class="flex items-start gap-2">
              <span class="mt-0.5 h-4 w-4 shrink-0 text-primary">📍</span>
              <span>300 Mystery Lake Rd #1530, Thompson, MB R8N 0M2</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="h-4 w-4 text-primary">📞</span>
              <a href="tel:2044100262" class="hover:text-primary">(204) 410-0262</a>
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-0.5 h-4 w-4 shrink-0 text-primary">🕒</span>
              <span>Mon-Sat: 10AM - 6PM / Sun: Closed</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
        <p>© 2026 Mobile Tech Lab. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <!-- ═══ STICKY MOBILE CTA ═══ -->
  <div class="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 p-4 backdrop-blur-sm md:hidden">
    <div class="flex gap-2">
      <a href="tel:2049001054" class="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground">
        📞 Call
      </a>
      <a href="sms:+12045009757?body=Hi%2C%20I%20found%20your%20site%20and%20need%20a%20repair.%20Can%20you%20help%3F" class="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-medium">
        💬 Text
      </a>
    </div>
  </div>

</body>
</html>
```

---

## 2. Repair Service Page Template

**File:** `src/pages/repair/[slug].astro`

This is the full page template. Each `{variable}` maps to frontmatter data (see §5).

### Section Order

1. Visible Breadcrumbs
2. Hero Section (with Quick Facts)
3. Common Issues (optional slot)
4. Service Grid
5. Before/After (optional slot)
6. Model List Grid
7. Why Choose Us
8. Ways To Save
9. Location Cards
10. Pricing Micro Copy (optional)
11. FAQ Section

```html
<!-- Visible Breadcrumbs -->
<nav class="border-b border-border/50 bg-muted/30" aria-label="Breadcrumb">
  <div class="container mx-auto px-4 py-3">
    <ol class="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
      <li class="inline-flex items-center gap-1.5">
        <a href="/" class="flex items-center gap-1.5 hover:text-foreground">
          <!-- Home icon -->
          <svg class="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span>Home</span>
        </a>
      </li>
      <li class="text-muted-foreground/60">/</li>
      <li><a href="/repairs" class="hover:text-foreground">Repairs</a></li>
      <li class="text-muted-foreground/60">/</li>
      <li class="font-medium text-foreground" aria-current="page">{deviceName} Repair</li>
    </ol>
  </div>
</nav>

<!-- ═══ HERO SECTION ═══ -->
<section id="hero" class="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-12 md:py-20">
  <div class="container mx-auto px-4">
    <div class="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

      <!-- Left Content -->
      <div>
        <div class="mb-4 flex flex-wrap items-center gap-3">
          <span class="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Professional {deviceName} Repair
          </span>
          <!-- Live Status Badge (static fallback — or use small JS for live hours) -->
          <span class="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
            <span class="h-1.5 w-1.5 rounded-full bg-success animate-pulse"></span>
            St. Vital · Open
          </span>
        </div>

        <h1 class="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          {deviceName} Repair <span class="text-primary">Winnipeg</span> &amp; Manitoba
        </h1>

        <p class="mb-2 text-xl font-medium text-foreground/90 md:text-2xl">
          {tagline}
        </p>

        <p class="mb-8 text-lg text-muted-foreground">
          {heroDescription}
        </p>

        <div class="flex flex-col gap-4 sm:flex-row">
          <a href="https://shop.mobiletechlab.ca/pages/repair2" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90">
            Get a Free Quote
            <!-- ArrowRight icon -->
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="tel:2045009757" class="inline-flex items-center justify-center gap-2 rounded-md border border-border px-8 py-3 text-lg font-medium hover:bg-accent">
            <!-- Phone icon -->
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call Now
          </a>
        </div>

        <!-- Pricing clarity link -->
        <p class="mt-4 text-sm text-muted-foreground">
          Not sure what affects the cost?
          <a href="/repair-pricing" class="underline underline-offset-2 hover:text-primary">How repair pricing works</a>
        </p>

        <!-- Quick Facts (optional) -->
        <div class="mt-8 rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm">
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="flex items-center gap-3">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">🕒</div>
              <div class="min-w-0">
                <p class="text-xs text-muted-foreground">Turnaround</p>
                <p class="text-sm font-semibold text-foreground">{turnaround || "Same-day available"}</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">💲</div>
              <div class="min-w-0">
                <p class="text-xs text-muted-foreground">Starting</p>
                <p class="text-sm font-semibold text-foreground">{startingPrice || "From $59"}</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">🛡️</div>
              <div class="min-w-0">
                <p class="text-xs text-muted-foreground">Warranty</p>
                <p class="text-sm font-semibold text-foreground">{warranty || "Up to lifetime warranty"}</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">📍</div>
              <div class="min-w-0">
                <p class="text-xs text-muted-foreground">Locations</p>
                <p class="text-sm font-semibold text-foreground">{locations || "2 Manitoba locations"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Image -->
      <div class="relative hidden lg:flex items-center justify-end">
        <img
          src="{heroImage}"
          alt="{deviceName} repair service at Mobile Tech Lab Manitoba"
          class="w-full max-w-xl object-contain"
          loading="lazy"
        />
      </div>
    </div>
  </div>

  <!-- Background decorative elements -->
  <div class="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
  <div class="pointer-events-none absolute -bottom-20 left-1/4 h-56 w-56 rounded-full bg-primary/5 blur-3xl"></div>
</section>


<!-- ═══ SERVICE GRID ═══ -->
<section id="services" class="bg-secondary/30 py-16 md:py-20">
  <div class="container mx-auto px-4">
    <div class="mb-12 text-center">
      <h2 class="mb-4 text-3xl font-bold md:text-4xl">
        {deviceName} Repair Services in Winnipeg
      </h2>
      <p class="mx-auto max-w-2xl text-muted-foreground">
        Expert repairs for all {deviceName} issues. Fast turnaround, quality parts, and warranty included.
      </p>
    </div>

    <div class="flex flex-wrap justify-center gap-6">
      <!-- Repeat for each service -->
      <div class="group w-full border border-border/50 bg-card rounded-lg transition-all duration-300 hover:border-primary/30 hover:shadow-lg sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
        <div class="p-6">
          <div class="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <!-- Service icon (inline SVG) -->
          </div>
          <h3 class="mb-2 text-lg font-semibold">{service.name}</h3>
          <p class="text-sm text-muted-foreground">{service.description}</p>
          <!-- Optional deep link -->
          <a href="{service.linkHref}" class="mt-2 inline-block text-sm font-medium text-primary hover:underline">
            {service.linkText}
          </a>
        </div>
      </div>
      <!-- /Repeat -->
    </div>

    <div class="mt-10 text-center">
      <a href="https://shop.mobiletechlab.ca/pages/repair2" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90">
        Request Repair
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>


<!-- ═══ MODEL LIST (Category Cards variant) ═══ -->
<section id="models" class="py-16 md:py-20">
  <div class="container mx-auto px-4">
    <div class="mb-12 text-center">
      <h2 class="mb-4 text-3xl font-bold md:text-4xl">
        All {deviceName} Models We Repair in Winnipeg
      </h2>
      <p class="mx-auto max-w-2xl text-muted-foreground">
        We specialize in the unique architecture of each {deviceName} generation
      </p>
    </div>

    <div class="mx-auto flex max-w-5xl flex-wrap justify-center gap-6">
      <!-- Repeat for each category -->
      <div class="group border border-border/50 bg-card rounded-lg transition-all hover:border-primary/50 hover:shadow-lg">
        <div class="pb-3 text-center p-6">
          <div class="mb-2 inline-flex rounded-full bg-primary/10 p-3 text-primary mx-auto">
            <!-- Category icon -->
          </div>
          <h3 class="text-lg font-semibold">{category.title}</h3>
        </div>
        <div class="space-y-4 text-center px-6 pb-6">
          <p class="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
          <div class="flex flex-wrap justify-center gap-1.5">
            <!-- First 3 models as badges -->
            <span class="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-normal">{model}</span>
            <!-- +N more badge -->
            <span class="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-normal">+{N} more</span>
          </div>
          <a href="https://shop.mobiletechlab.ca/pages/repair2" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 w-full mt-2 rounded-md px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
            Get Quote →
          </a>
        </div>
      </div>
      <!-- /Repeat -->
    </div>
  </div>
</section>


<!-- ═══ MODEL LIST (Badge variant — flat list) ═══ -->
<!--
  Alternative: if no categories, render a flat badge list.
  Use `<details>` for the expand/collapse toggle (no JS needed).
-->
<section id="models" class="py-16 md:py-20">
  <div class="container mx-auto px-4">
    <div class="mb-12 text-center">
      <h2 class="mb-4 text-3xl font-bold md:text-4xl">{deviceName} Models We Repair</h2>
      <p class="mx-auto max-w-2xl text-muted-foreground">
        We service all {deviceName} models. Don't see yours listed? Contact us — we can likely help!
      </p>
    </div>
    <div class="mx-auto max-w-4xl">
      <div class="flex flex-wrap justify-center gap-3">
        <!-- Repeat for each model (first 12) -->
        <span class="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground">
          ✓ {model}
        </span>
        <!-- /Repeat -->
      </div>
      <!-- Expand toggle (Astro-native, no JS needed) -->
      <details class="mt-6 text-center">
        <summary class="inline-flex items-center gap-2 cursor-pointer text-muted-foreground hover:text-foreground text-sm">
          Show {N} More Models ▾
        </summary>
        <div class="mt-4 flex flex-wrap justify-center gap-3">
          <!-- Remaining models -->
          <span class="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium">✓ {model}</span>
        </div>
      </details>
    </div>
  </div>
</section>


<!-- ═══ WHY CHOOSE US ═══ -->
<section id="why-choose-us" class="py-16 md:py-20">
  <div class="container mx-auto px-4">
    <div class="mb-12 text-center">
      <h2 class="mb-4 text-3xl font-bold md:text-4xl">Why Choose Mobile Tech Lab?</h2>
      <p class="mx-auto max-w-2xl text-muted-foreground">
        Winnipeg's trusted device repair specialists since day one
      </p>
    </div>

    <div class="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <!-- Pillar 1: Fast Turnaround -->
      <div class="text-center">
        <div class="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-4 text-primary">🕒</div>
        <h3 class="mb-2 text-lg font-semibold">Fast Turnaround</h3>
        <p class="text-sm text-muted-foreground">Most repairs completed same-day or within 24-48 hours</p>
      </div>
      <!-- Pillar 2: Warranty Included -->
      <div class="text-center">
        <div class="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-4 text-primary">🛡️</div>
        <h3 class="mb-2 text-lg font-semibold">Warranty Included</h3>
        <p class="text-sm text-muted-foreground">All repairs backed by warranty—screen repairs from 30 days to lifetime, batteries 90 days, most other repairs lifetime.</p>
      </div>
      <!-- Pillar 3: Quality Parts -->
      <div class="text-center">
        <div class="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-4 text-primary">🏆</div>
        <h3 class="mb-2 text-lg font-semibold">Quality Parts</h3>
        <p class="text-sm text-muted-foreground">We use high-quality replacement parts for lasting repairs</p>
      </div>
      <!-- Pillar 4: Expert Technicians -->
      <div class="text-center">
        <div class="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-4 text-primary">🔧</div>
        <h3 class="mb-2 text-lg font-semibold">Expert Technicians</h3>
        <p class="text-sm text-muted-foreground">Skilled technicians with years of device repair experience</p>
      </div>
    </div>
  </div>
</section>


<!-- ═══ WAYS TO SAVE ═══ -->
<section class="relative py-16 md:py-20">
  <div class="absolute inset-0 bg-muted/30"></div>
  <div class="absolute inset-x-0 top-0 h-px bg-border/50"></div>

  <div class="container relative mx-auto px-4">
    <div class="mb-10 text-center md:mb-14">
      <h2 class="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        Worried About Repair Cost? <span class="text-primary">You Have Options.</span>
      </h2>
      <p class="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">
        Most customers use one of these options to lower their repair cost.
      </p>
    </div>

    <div class="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 md:gap-8">
      <!-- Price Match Card -->
      <div class="border border-border/50 bg-card rounded-2xl shadow-sm p-6 md:p-8 flex flex-col h-full transition-shadow duration-200 hover:shadow-md">
        <div class="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">🛡️</div>
        <h3 class="mb-3 text-xl font-bold leading-tight md:text-2xl">We'll Match Any Local Repair Price</h3>
        <p class="mb-6 flex-1 text-muted-foreground leading-relaxed">
          Found a lower price at another Winnipeg repair shop? We'll match it — so you don't overpay. No pressure. No hassle.
        </p>
        <a href="tel:2045009757" class="inline-flex items-center justify-center gap-2 w-full h-12 rounded-lg border border-border/80 bg-background text-foreground font-medium shadow-sm hover:bg-accent hover:border-primary/50">
          📞 Check If We Can Match Your Price
        </a>
      </div>

      <!-- Trade-In Card -->
      <div class="border border-border/50 bg-card rounded-2xl shadow-sm p-6 md:p-8 flex flex-col h-full transition-shadow duration-200 hover:shadow-md">
        <div class="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">♻️</div>
        <h3 class="mb-3 text-xl font-bold leading-tight md:text-2xl">Lower Your {deviceName} Repair Cost With a Trade-In</h3>
        <p class="mb-2 text-muted-foreground leading-relaxed">
          Trade in phones, tablets, consoles, or laptops — even broken ones — to reduce today's repair cost.
        </p>
        <p class="mb-6 flex-1 text-sm text-muted-foreground/80">Get paid via Cash, E-Transfer, or Store Credit</p>
        <a href="/trade-in" class="inline-flex items-center justify-center gap-2 w-full h-12 rounded-lg border border-primary/40 bg-primary/10 text-primary font-medium hover:bg-primary/15">
          Lower My {deviceName} Repair Cost →
        </a>
      </div>
    </div>
  </div>
</section>


<!-- ═══ LOCATION CARDS ═══ -->
<section id="locations" class="bg-secondary/30 py-16 md:py-20">
  <div class="container mx-auto px-4">
    <div class="mb-12 text-center">
      <h2 class="mb-4 text-3xl font-bold md:text-4xl">
        Device Repair Locations in Winnipeg &amp; Manitoba
      </h2>
      <p class="mx-auto max-w-2xl text-muted-foreground">
        Two convenient locations to serve you. Walk-ins welcome or book your appointment online.
      </p>
      <!-- Optional service area note -->
      <div class="mt-4 mx-auto max-w-2xl flex items-center justify-center gap-2 text-sm text-muted-foreground">
        🚚 <span>{serviceAreaNote}</span>
      </div>
    </div>

    <div class="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">

      <!-- St. Vital -->
      <div class="border border-border/50 bg-card rounded-lg overflow-hidden">
        <div class="p-6">
          <h3 class="flex items-center gap-2 text-xl font-semibold">
            <span class="text-primary">📍</span> St. Vital Location
          </h3>
        </div>
        <div class="px-6 pb-6 space-y-4">
          <p class="text-sm text-muted-foreground">845 Dakota St #25, Winnipeg, MB R2M 5M3</p>
          <div class="flex items-center gap-2">
            <span class="text-primary">📞</span>
            <a href="tel:2045009757" class="font-medium hover:text-primary">(204) 500-9757</a>
          </div>
          <div class="flex items-start gap-2">
            <span class="mt-0.5 text-primary">🕒</span>
            <div class="space-y-1">
              <p class="text-sm text-muted-foreground">Mon-Sat: 9AM - 7PM</p>
              <p class="text-sm text-muted-foreground">Sun: 12PM - 7PM</p>
            </div>
          </div>
          <a href="https://maps.google.com/?q=845+Dakota+St+25+Winnipeg+MB+R2M+5M3" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 w-full rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-accent">
            🧭 Get Directions
          </a>
        </div>
      </div>

      <!-- Thompson -->
      <div class="border border-border/50 bg-card rounded-lg overflow-hidden">
        <div class="p-6">
          <h3 class="flex items-center gap-2 text-xl font-semibold">
            <span class="text-primary">📍</span> Thompson Location
          </h3>
        </div>
        <div class="px-6 pb-6 space-y-4">
          <p class="text-sm text-muted-foreground">300 Mystery Lake Rd #1530, Thompson, MB R8N 0M2</p>
          <div class="flex items-center gap-2">
            <span class="text-primary">📞</span>
            <a href="tel:2044100262" class="font-medium hover:text-primary">(204) 410-0262</a>
          </div>
          <div class="flex items-start gap-2">
            <span class="mt-0.5 text-primary">🕒</span>
            <div class="space-y-1">
              <p class="text-sm text-muted-foreground">Mon-Sat: 10AM - 6PM</p>
              <p class="text-sm text-muted-foreground">Sun: Closed</p>
            </div>
          </div>
          <a href="https://maps.google.com/?q=300+Mystery+Lake+Rd+1530+Thompson+MB+R8N+0M2" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 w-full rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-accent">
            🧭 Get Directions
          </a>
        </div>
      </div>

    </div>
  </div>
</section>


<!-- ═══ PRICING MICRO COPY (optional) ═══ -->
<section class="py-12 md:py-16">
  <div class="container mx-auto px-4">
    <div class="mx-auto max-w-3xl space-y-3 text-base text-muted-foreground">
      <p>{costDriver} {priceShock}</p>
      <p>
        {advisory} {fallback}
        You can learn more about
        <a href="/repair-pricing" class="text-primary hover:underline">how repair pricing works</a>.
      </p>
    </div>
  </div>
</section>


<!-- ═══ FAQ SECTION ═══ -->
<section id="faqs" class="py-16 md:py-20">
  <div class="container mx-auto px-4">
    <div class="mb-12 text-center">
      <h2 class="mb-4 text-3xl font-bold md:text-4xl">{deviceName} Repair FAQs</h2>
      <p class="mx-auto max-w-2xl text-muted-foreground">
        Common questions about {deviceName} repair at Mobile Tech Lab
      </p>
    </div>

    <div class="mx-auto max-w-3xl space-y-4">
      <!-- Repeat for each FAQ — uses native <details> for zero-JS accordion -->
      <details class="group rounded-lg border border-border/50 bg-card px-6 open:border-primary/30">
        <summary class="flex cursor-pointer items-center justify-between py-4 font-semibold text-left [&::-webkit-details-marker]:hidden">
          {faq.question}
          <svg class="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </summary>
        <div class="pb-4 text-muted-foreground">
          {faq.answer}  <!-- supports HTML: links, lists, etc. -->
        </div>
      </details>
      <!-- /Repeat -->
    </div>
  </div>
</section>
```

---

## 3. Reusable Components

### 3a. Visible Breadcrumbs

```html
<!-- Component: VisibleBreadcrumbs.astro -->
<!-- Props: deviceName, slug -->
<nav class="border-b border-border/50 bg-muted/30" aria-label="Breadcrumb">
  <div class="container mx-auto px-4 py-3">
    <ol class="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
      <li class="inline-flex items-center gap-1.5">
        <a href="/" class="flex items-center gap-1.5 hover:text-foreground">🏠 Home</a>
      </li>
      <li class="text-muted-foreground/60">/</li>
      <li><a href="/repairs" class="hover:text-foreground">Repairs</a></li>
      <li class="text-muted-foreground/60">/</li>
      <li class="font-medium text-foreground" aria-current="page">{deviceName} Repair</li>
    </ol>
  </div>
</nav>
```

### 3b. Quick Facts Bar

```html
<!-- Component: QuickFacts.astro -->
<!-- Props: turnaround, startingPrice, warranty, locations -->
<div class="mt-8 rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm">
  <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
    <div class="flex items-center gap-3">
      <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">🕒</div>
      <div><p class="text-xs text-muted-foreground">Turnaround</p><p class="text-sm font-semibold">{turnaround}</p></div>
    </div>
    <div class="flex items-center gap-3">
      <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">💲</div>
      <div><p class="text-xs text-muted-foreground">Starting</p><p class="text-sm font-semibold">{startingPrice}</p></div>
    </div>
    <div class="flex items-center gap-3">
      <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">🛡️</div>
      <div><p class="text-xs text-muted-foreground">Warranty</p><p class="text-sm font-semibold">{warranty}</p></div>
    </div>
    <div class="flex items-center gap-3">
      <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">📍</div>
      <div><p class="text-xs text-muted-foreground">Locations</p><p class="text-sm font-semibold">{locations}</p></div>
    </div>
  </div>
</div>
```

### 3c. Service Card

```html
<!-- Component: ServiceCard.astro -->
<!-- Props: name, description, linkText?, linkHref? -->
<div class="group w-full border border-border/50 bg-card rounded-lg transition-all duration-300 hover:border-primary/30 hover:shadow-lg sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
  <div class="p-6">
    <div class="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
      <!-- Icon slot -->
      <slot name="icon" />
    </div>
    <h3 class="mb-2 text-lg font-semibold">{name}</h3>
    <p class="text-sm text-muted-foreground">{description}</p>
    <!-- Optional link -->
    {linkHref && <a href="{linkHref}" class="mt-2 inline-block text-sm font-medium text-primary hover:underline">{linkText}</a>}
  </div>
</div>
```

### 3d. Location Card

```html
<!-- Component: LocationCard.astro -->
<!-- Props: name, address, phone, phoneFormatted, hours[], mapsUrl -->
<div class="border border-border/50 bg-card rounded-lg overflow-hidden">
  <div class="p-6">
    <h3 class="flex items-center gap-2 text-xl font-semibold">
      <span class="text-primary">📍</span> {name}
    </h3>
  </div>
  <div class="px-6 pb-6 space-y-4">
    <p class="text-sm text-muted-foreground">{address}</p>
    <div class="flex items-center gap-2">
      <span class="text-primary">📞</span>
      <a href="tel:{phone}" class="font-medium hover:text-primary">{phoneFormatted}</a>
    </div>
    <div class="flex items-start gap-2">
      <span class="mt-0.5 text-primary">🕒</span>
      <div class="space-y-1">
        <!-- Repeat hours -->
        <p class="text-sm text-muted-foreground">{hour}</p>
      </div>
    </div>
    <a href="{mapsUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 w-full rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-accent">
      🧭 Get Directions
    </a>
  </div>
</div>
```

### 3e. FAQ Accordion Item

```html
<!-- Component: FAQItem.astro -->
<!-- Props: question, answer (HTML string) -->
<details class="group rounded-lg border border-border/50 bg-card px-6 open:border-primary/30">
  <summary class="flex cursor-pointer items-center justify-between py-4 font-semibold text-left [&::-webkit-details-marker]:hidden">
    {question}
    <svg class="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  </summary>
  <div class="pb-4 text-muted-foreground prose-a:text-primary prose-a:hover:underline">
    {answer}
  </div>
</details>
```

### 3f. Sticky Mobile CTA

```html
<!-- Component: StickyMobileCTA.astro -->
<div class="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 p-4 backdrop-blur-sm md:hidden">
  <div class="flex gap-2">
    <a href="tel:2049001054" class="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground">
      📞 Call
    </a>
    <a href="sms:+12045009757?body=Hi%2C%20I%20found%20your%20site%20and%20need%20a%20repair.%20Can%20you%20help%3F" class="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-medium">
      💬 Text
    </a>
  </div>
</div>
```

### 3g. Ways To Save Section

```html
<!-- Component: WaysToSave.astro -->
<!-- Props: deviceName -->
<!-- See full HTML in §2 above under "WAYS TO SAVE" -->
```

---

## 4. JSON-LD Structured Data Templates

Inject these into `<head>` via the `structured-data` slot.

### 4a. BreadcrumbList

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mobiletechlab.ca/" },
    { "@type": "ListItem", "position": 2, "name": "Repairs", "item": "https://mobiletechlab.ca/" },
    { "@type": "ListItem", "position": 3, "name": "{deviceName} Repair", "item": "https://mobiletechlab.ca/repair/{slug}" }
  ]
}
</script>
```

### 4b. Service

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "{deviceName} Repair Services",
  "description": "Professional {deviceName} repair services in Winnipeg, Manitoba. Screen replacement, battery replacement, charging port repair, and more.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Mobile Tech Lab",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "845 Dakota St #25",
        "addressLocality": "Winnipeg",
        "addressRegion": "MB",
        "postalCode": "R2M 5M3",
        "addressCountry": "CA"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "300 Mystery Lake Rd #1530",
        "addressLocality": "Thompson",
        "addressRegion": "MB",
        "postalCode": "R8N 0M2",
        "addressCountry": "CA"
      }
    ],
    "telephone": "+1-204-500-9757",
    "url": "https://mobiletechlab.ca"
  },
  "areaServed": {
    "@type": "City",
    "name": "Winnipeg",
    "addressRegion": "MB",
    "addressCountry": "CA"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "{deviceName} Repair Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "{service.name}",
          "description": "{service.description}"
        }
      }
    ]
  },
  "url": "https://mobiletechlab.ca/repair/{slug}"
}
</script>
```

### 4c. FAQPage

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{faq.question}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{faq.answer}"
      }
    }
  ]
}
</script>
```

---

## 5. Data Contracts (Frontmatter Props)

Each repair page should define these in Astro frontmatter or a content collection:

```yaml
# Required
metaTitle: "iPhone Repair Winnipeg | Screen, Battery & More | Mobile Tech Lab"
metaDescription: "Professional iPhone repair in Winnipeg..."
canonicalUrl: "https://mobiletechlab.ca/repair/iphone"
slug: "iphone"
deviceName: "iPhone"
tagline: "Expert iPhone repairs, done right"
heroDescription: "From cracked screens to dead batteries..."
heroImage: "/assets/hero-iphone.png"

# Services array
services:
  - name: "Screen Replacement"
    description: "Professional screen replacement..."
    icon: "screen"  # map to SVG
    linkText: ""     # optional
    linkHref: ""     # optional

# Model categories (or flat models list)
modelCategories:
  - title: "iPhone 15 Series"
    models: ["iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max"]
    description: "Latest generation with..."

# FAQs
faqs:
  - question: "How long does an iPhone screen repair take?"
    answer: "Most iPhone screen repairs are completed within 30-60 minutes..."

# Optional
quickFacts:
  turnaround: "Same-day available"
  startingPrice: "From $59"
  warranty: "Up to lifetime warranty"
  locations: "2 Manitoba locations"

pricingMicroCopy:
  costDriver: "..."
  priceShock: "..."
  advisory: "..."
  fallback: "..."

advantagePillars: []  # Override default 4 pillars
serviceAreaNote: "We also serve Brandon, Steinbach..."
```

---

## 6. CSS / Tailwind Token Reference

The site uses semantic CSS custom properties. Map these in your Tailwind config:

```css
/* Key design tokens used across all components */
--background       /* Page background */
--foreground       /* Primary text */
--primary          /* Brand accent (buttons, links, badges) */
--primary-foreground /* Text on primary bg */
--secondary        /* Secondary surfaces */
--muted            /* Muted backgrounds */
--muted-foreground /* Secondary text */
--accent           /* Hover states */
--accent-foreground
--border           /* Borders */
--card             /* Card backgrounds */
--success          /* Open status, checkmarks */
--destructive      /* Urgent badges */
```

All values are HSL. The `.gradient-primary` utility class applies a branded gradient to CTA buttons.

---

## Notes for Astro Implementation

1. **No client-side routing** — all `<a href>` links, no `<Link to>`.
2. **Native `<details>` elements** replace React accordion components (FAQ, model expand).
3. **Mobile menu** needs a tiny JS snippet (`<script>` tag) for toggle — or use Astro's `client:load` on an island.
4. **Live Status Badge** can either be static ("Open Mon–Sat") or use a small `<script>` for real-time calculation.
5. **Icons** — replace Lucide React components with inline SVGs or an icon sprite. Emoji placeholders shown above for clarity.
6. **Quote widget URL** — always `https://shop.mobiletechlab.ca/pages/repair2` (external, `target="_blank"`).
