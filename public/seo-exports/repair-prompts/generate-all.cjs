/**
 * Generate all repair page Astro JSON prompts.
 * 
 * Usage: node public/seo-exports/repair-prompts/generate-all.cjs
 * 
 * Reads source data from each repair page definition and outputs
 * individual JSON files in the same format as oppo-repair-astro-prompt.json.
 */

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname);

const SHARED = {
  meta: {
    version: "1.0",
    generator: "mobiletechlab-lovable-export",
    date: "2026-03-15",
    reference_doc: "/seo-exports/astro-repair-template.md"
  },
  constraints: {
    framework: "Astro (latest stable)",
    rendering: "Static HTML only — zero client-side JavaScript unless explicitly marked as `client:load` island",
    styling: "Tailwind CSS using semantic design tokens from the provided CSS variables. NEVER use raw color values (no `bg-blue-500`, no `text-white`). Use `bg-primary`, `text-foreground`, `bg-muted`, etc.",
    fonts: "Inter via Google Fonts, loaded in <head> with `font-display: swap`",
    icons: "Inline SVG only — no icon library runtime. Copy SVG paths from Lucide (https://lucide.dev). Each icon must have `aria-hidden=\"true\"` and `focusable=\"false\"`.",
    images: "All `<img>` tags MUST have `alt`, `width`, `height`, and `loading=\"lazy\"` (except hero which uses `loading=\"eager\"`). Use Astro `<Image />` component where possible.",
    links_internal: "Standard `<a href=\"/path\">` — NO client-side router. All internal links must start with `/`.",
    links_external: "All external `<a>` tags MUST have `target=\"_blank\"` and `rel=\"noopener noreferrer\"`.",
    accessibility: "All interactive elements must be keyboard-accessible. Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`). Buttons must have visible focus rings.",
    accordions: "Use native `<details>` + `<summary>` elements. NO JavaScript accordions.",
    seo_title_max_chars: 60,
    seo_description_max_chars: 160,
    must_have_single_h1: true,
    canonical_url_required: true,
    structured_data_required: ["BreadcrumbList", "Service", "FAQPage"],
    forbidden: [
      "React or any JSX runtime",
      "useState, useEffect, or any React hooks",
      "Client-side routing (react-router, @astrojs/preact, etc.)",
      "CSS-in-JS libraries",
      "Hardcoded color values in components",
      "JavaScript-based accordions or toggles",
      "Placeholder or lorem ipsum content",
      "Any content not present in this JSON"
    ]
  },
  locations: [
    {
      name: "St. Vital Centre",
      address: "1225 St Mary's Rd, Winnipeg, MB R2M 5E5",
      phone: "(204) 500-9757",
      phoneHref: "tel:2045009757",
      hours: "Mon–Sat 10am–7pm, Sun 12pm–5pm",
      mapUrl: "https://maps.google.com/?q=Mobile+Tech+Lab+St+Vital",
      badge: "Walk-ins Welcome"
    },
    {
      name: "Garden City Shopping Centre",
      address: "2305 McPhillips St, Winnipeg, MB R2V 3E1",
      phone: "(204) 515-7736",
      phoneHref: "tel:2045157736",
      hours: "Mon–Sat 10am–7pm, Sun 12pm–5pm",
      mapUrl: "https://maps.google.com/?q=Mobile+Tech+Lab+Garden+City",
      badge: "Walk-ins Welcome"
    }
  ],
  cta_base: {
    quoteWidgetUrl: "https://shop.mobiletechlab.ca/pages/repair2",
    primaryPhone: "(204) 500-9757",
    primaryPhoneHref: "tel:2045009757",
    smsNumber: "2045009757"
  },
  validation_checklist: [
    "Page has exactly ONE <h1> tag matching the `page.h1` field",
    "All services render with inline SVG icons, not an icon library import",
    "All FAQ items use <details>/<summary>, not JS accordions",
    "All external links have target='_blank' rel='noopener noreferrer'",
    "Canonical URL matches `page.canonicalUrl` exactly",
    "All three JSON-LD blocks are injected in <head>",
    "<meta name='robots' content='index, follow'> is present",
    "No React, Preact, or JSX runtime in the build output",
    "Hero image has loading='eager'; all other images have loading='lazy'",
    "Page renders fully without JavaScript enabled",
    "All color classes use Tailwind semantic tokens (bg-primary, text-foreground, etc.)",
    "Phone links use tel: protocol; SMS links use sms: protocol",
    "Section IDs match table_of_contents entries for anchor navigation",
    "No placeholder content — every string comes from this JSON"
  ],
  section_order: [
    "breadcrumbs", "hero", "services", "models",
    "why_choose_us", "pricing_micro_copy", "locations",
    "faqs", "sticky_mobile_cta", "table_of_contents"
  ],
  file_structure_components: [
    "src/components/repair/VisibleBreadcrumbs.astro",
    "src/components/repair/HeroSection.astro",
    "src/components/repair/ServiceGrid.astro",
    "src/components/repair/ModelListGrid.astro",
    "src/components/repair/WhyChooseUs.astro",
    "src/components/repair/PricingMicroCopy.astro",
    "src/components/repair/LocationCards.astro",
    "src/components/repair/FAQSection.astro",
    "src/components/repair/StickyMobileCTA.astro",
    "src/components/repair/TableOfContents.astro"
  ],
  table_of_contents: [
    { id: "hero", label: "Overview" },
    { id: "services", label: "Services" },
    { id: "models", label: "Models" },
    { id: "why-choose-us", label: "Why Us" },
    { id: "locations", label: "Locations" },
    { id: "faqs", label: "FAQs" }
  ]
};

function buildPrompt(data) {
  const smsMessage = `Hi, I found your site searching for ${data.deviceName} repair. Can you help?`;
  
  return {
    meta: {
      ...SHARED.meta,
      purpose: `LLM prompt to generate an Astro static page for ${data.deviceName} repair services`,
      template: data.template || "RepairLandingTemplate"
    },
    constraints: SHARED.constraints,
    file_structure: {
      layout: "src/layouts/BaseLayout.astro",
      page: `src/pages/repair/${data.slug}.astro`,
      components: SHARED.file_structure_components
    },
    section_order: data.section_order || SHARED.section_order,
    page: {
      slug: data.slug,
      canonicalUrl: `https://mobiletechlab.ca/repair/${data.slug}`,
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      robots: "index, follow",
      deviceName: data.deviceName,
      h1: data.h1 || data.tagline,
      heroDescription: data.heroDescription,
      heroImage: data.heroImage || {
        src: `/assets/hero-${data.slug}.png`,
        alt: `${data.deviceName} repair services in Winnipeg`,
        width: 600,
        height: 400,
        loading: "eager"
      }
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Repairs", href: "/repair" },
      { label: data.deviceName, href: null }
    ],
    services: data.services,
    advantage_pillars: data.advantagePillars,
    model_categories: data.modelCategories,
    models_flat: data.models,
    models_description: data.modelsDescription,
    pricing_micro_copy: data.pricingMicroCopy,
    faqs: data.faqs,
    service_area_note: data.serviceAreaNote,
    locations: SHARED.locations,
    cta: {
      ...SHARED.cta_base,
      smsMessage
    },
    table_of_contents: SHARED.table_of_contents,
    structured_data: {
      breadcrumb_list: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://mobiletechlab.ca/" },
          { "@type": "ListItem", position: 2, name: "Repairs", item: "https://mobiletechlab.ca/repair" },
          { "@type": "ListItem", position: 3, name: data.deviceName }
        ]
      },
      service: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `${data.deviceName} Repair Service`,
        provider: {
          "@type": "LocalBusiness",
          name: "Mobile Tech Lab",
          url: "https://mobiletechlab.ca"
        },
        areaServed: { "@type": "City", name: "Winnipeg" },
        serviceType: data.serviceType || "Phone Repair",
        url: `https://mobiletechlab.ca/repair/${data.slug}`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${data.deviceName} Repair Services`,
          itemListElement: data.services.map(s => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.name }
          }))
        }
      },
      faq_page: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.map(f => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer.replace(/<[^>]*>/g, '') // strip HTML for schema
          }
        }))
      }
    },
    ...(data.extra_sections ? { extra_sections: data.extra_sections } : {}),
    validation_checklist: SHARED.validation_checklist
  };
}

// ===== ALL REPAIR PAGES =====

const pages = [
  // ── PHONES ──
  {
    slug: "iphone",
    deviceName: "iPhone",
    metaTitle: "iPhone Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab",
    metaDescription: "Expert iPhone repair in Winnipeg & Thompson. Same-day screen replacement, battery swap, charging port & back glass repair for all iPhone models. Price match guarantee.",
    tagline: "iPhone Repair in Winnipeg – Fast, Affordable & Trusted",
    h1: "iPhone Repair in Winnipeg – Fast, Affordable & Trusted",
    heroDescription: "Need fast iPhone repair near you? Winnipeg trusts Mobile Tech Lab for same-day battery replacements, cracked screen fixes, charging port repairs, and back glass restoration. Our skilled technicians use high-quality parts and offer affordable pricing on all iPhone models. Walk in today or request a free quote online. We also repair <a href='/repair/ipad'>iPads</a>, <a href='/repair/macbook'>MacBooks</a>, and <a href='/repair/apple-watch'>Apple Watches</a>.",
    template: "CustomIPhonePage",
    services: [
      { icon: "Smartphone", name: "Screen Replacement", description: "Cracked, shattered, or unresponsive iPhone screens repaired same-day with quality displays. All models from iPhone 6s to iPhone 16 Pro Max." },
      { icon: "Battery", name: "Battery Replacement", description: "Restore your iPhone's battery health with professional replacement. Genuine Apple battery upgrades available for an additional $100." },
      { icon: "MonitorSmartphone", name: "Back Glass Repair", description: "iPhone back glass cracked? We replace rear glass panels for iPhone 8 and newer models with quality parts." },
      { icon: "Plug", name: "Charging Port Repair", description: "iPhone not charging? We repair and replace Lightning and USB-C ports for reliable charging on all models." },
      { icon: "Camera", name: "Camera Repair", description: "Front or rear camera issues? We fix focus problems, black screens, and cracked camera lenses on all iPhone models." },
      { icon: "Droplets", name: "Water Damage Repair", description: "Dropped your iPhone in water? Our technicians assess and repair water-damaged devices with ultrasonic cleaning." }
    ],
    advantagePillars: [
      { icon: "Zap", title: "Same-Day Service", description: "Most iPhone repairs completed in 1-2 hours while you wait." },
      { icon: "DollarSign", title: "Price Match Guarantee", description: "Find a cheaper quote from any authorized repair shop in Winnipeg? We'll match it." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs." },
      { icon: "Shield", title: "Apple IRP Certified", description: "Access to Genuine Apple Parts, diagnostics, and specialized tools." }
    ],
    modelCategories: [
      { title: "iPhone 16 & 15 Series", models: ["iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16", "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15"], description: "Latest generation with USB-C, Dynamic Island, and A17/A18 chips." },
      { title: "iPhone 14 & 13 Series", models: ["iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14", "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13 mini", "iPhone 13"], description: "Pro camera systems and A15/A16 chips. Same-day screen and battery repairs." },
      { title: "iPhone 12, 11 & X Series", models: ["iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12 mini", "iPhone 12", "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11", "iPhone XS Max", "iPhone XS", "iPhone XR", "iPhone X"], description: "Face ID models with OLED displays. Affordable screen and battery replacement." },
      { title: "iPhone SE & Legacy", models: ["iPhone SE (2022)", "iPhone SE (2020)", "iPhone 8 Plus", "iPhone 8", "iPhone 7 Plus", "iPhone 7", "iPhone 6s Plus", "iPhone 6s"], description: "Touch ID classics still going strong. Budget-friendly repairs for older models." }
    ],
    models: ["iPhone 16 Pro Max","iPhone 16 Pro","iPhone 16 Plus","iPhone 16","iPhone 15 Pro Max","iPhone 15 Pro","iPhone 15 Plus","iPhone 15","iPhone 14 Pro Max","iPhone 14 Pro","iPhone 14 Plus","iPhone 14","iPhone 13 Pro Max","iPhone 13 Pro","iPhone 13 mini","iPhone 13","iPhone 12 Pro Max","iPhone 12 Pro","iPhone 12 mini","iPhone 12","iPhone 11 Pro Max","iPhone 11 Pro","iPhone 11","iPhone XS Max","iPhone XS","iPhone XR","iPhone X","iPhone SE (2022)","iPhone SE (2020)","iPhone 8 Plus","iPhone 8","iPhone 7 Plus","iPhone 7","iPhone 6s Plus","iPhone 6s"],
    modelsDescription: "We repair every iPhone generation from the iPhone 6s to the latest iPhone 16 Pro Max. Same-day service for most models at our Winnipeg location.",
    faqs: [
      { question: "How much does iPhone battery replacement cost in Winnipeg?", answer: "iPhone battery replacement at Mobile Tech Lab Winnipeg starts at $59 for older models and goes up to $99 for newer models like the iPhone 15 and 16 series. We also offer genuine Apple battery upgrades for an additional $100. All battery replacements include a 90-day warranty and are typically completed same-day at our St. Vital location." },
      { question: "Do you offer same-day iPhone screen repair?", answer: "Yes! Most iPhone screen repairs in Winnipeg are completed in 1-2 hours while you wait. Walk into our St. Vital Centre location anytime during business hours, or book an appointment online to guarantee your time slot. We stock screens for all popular iPhone models." },
      { question: "Are the parts genuine Apple or equivalent quality?", answer: "We use high-quality aftermarket parts that meet or exceed OEM standards for cost-effective repairs. For customers who prefer genuine components, we offer Apple battery upgrades for $100 extra. All parts are backed by our repair warranty regardless of type." },
      { question: "Can I walk in or do I need to book ahead?", answer: "Walk-ins are always welcome at our Winnipeg location in St. Vital Centre! No appointment necessary. However, booking online guarantees your time slot and helps us prepare the right parts for your specific iPhone model in advance." },
      { question: "What's the warranty on iPhone repairs?", answer: "All iPhone repairs at Mobile Tech Lab come with a warranty. Screen repair warranties vary by part quality tier (starting at 30 days for budget options, up to lifetime for premium). Battery replacements are covered for 90 days. Most other component repairs include a lifetime warranty." },
      { question: "What if I find a cheaper quote in Winnipeg?", answer: "We offer a price match guarantee! If you find a lower quote for the same iPhone repair from any authorized repair shop in Winnipeg, show us the quote and we'll match it." }
    ],
    pricingMicroCopy: {
      costDriver: "iPhone repair costs are primarily driven by the screen—newer Pro Max models with ProMotion displays cost more than older or standard models. Apple provides guidance on <a href='https://support.apple.com/en-ca/108057' target='_blank' rel='noopener noreferrer'>checking your iPhone's battery health</a>.",
      priceShock: "Many customers are surprised that financing often hides the true replacement cost of an iPhone, making repair a smarter financial choice. <a href='https://www.ifixit.com/Search?query=iphone+repair' target='_blank' rel='noopener noreferrer'>iFixit's iPhone repair guides</a> illustrate why certain models cost more to repair.",
      advisory: "If the repair cost approaches your device's value, we'll explain that clearly so you can make an informed decision.",
      fallback: "When repair doesn't make sense, data recovery is often still an option."
    },
    serviceAreaNote: "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods.",
    extra_sections: {
      quick_facts: { turnaround: "1-2 hours", startingPrice: "From $59", warranty: "Up to lifetime warranty", locations: "St. Vital & Thompson" },
      reviews: [
        { quote: "Got my iPhone 14 screen replaced in under an hour at the St. Vital location. Super fast, affordable, and the staff were incredibly friendly. Best iPhone repair in Winnipeg!", author: "Google Review", rating: 5 },
        { quote: "My iPhone battery was dying by noon every day. Mobile Tech Lab replaced it same-day for way less than Apple quoted me. Phone works like new again!", author: "Google Review", rating: 5 }
      ],
      why_choose_paragraph: "Looking for reliable iPhone repair in Winnipeg? Mobile Tech Lab is the city's trusted choice for fast, affordable iPhone fixes. We offer same-day service for most repairs—including battery replacements, cracked screens, charging port issues, and back glass damage. Our experienced technicians use high-quality parts that meet or exceed OEM standards, and every repair comes with a warranty for your peace of mind. We're so confident in our pricing that we offer a price match guarantee—if you find a cheaper quote from Apple or any local Winnipeg repair shop, we'll match it.",
      local_trust_paragraph: "Ready to get your iPhone fixed? Winnipeg's most trusted repair shop is just a short drive away. Walk into our St. Vital Centre location—no appointment needed—and our friendly technicians will diagnose your issue for free. Most iPhone repairs are completed same-day while you wait."
    }
  },
  {
    slug: "google-pixel",
    deviceName: "Google Pixel",
    metaTitle: "Google Pixel Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab",
    metaDescription: "Professional Google Pixel repair in Winnipeg. Screen replacement, battery, charging port repair for Pixel 9, 8, 7, 6, Fold & all models. Same-day service available.",
    tagline: "Google Pixel Repair Experts in Winnipeg, MB",
    heroDescription: "From the latest Pixel 9 Pro to Pixel Fold devices, we specialize in Google's flagship phone repairs. Cracked OLED screens, degraded batteries, camera issues, and charging problems—all fixed with quality parts and backed by our repair warranty.",
    services: [
      { icon: "ScreenShare", name: "Screen Replacement", description: "Pixel OLED and LTPO display replacements. Smooth 120Hz scrolling restored for Pixel 7 Pro, 8 Pro, and 9 Pro models." },
      { icon: "Battery", name: "Battery Replacement", description: "Pixel batteries degrade after 2-3 years. Same-day replacement to restore all-day Adaptive Battery life." },
      { icon: "Plug", name: "Charging Port Repair", description: "USB-C port repair for all Pixel phones. Fix charging issues, loose connections, and data transfer problems." },
      { icon: "Camera", name: "Camera Repair", description: "Restore Pixel's renowned computational photography. Rear camera, ultrawide, telephoto, and front camera repairs." },
      { icon: "Volume2", name: "Speaker Repair", description: "Fix muffled audio, crackling speakers, or dead earpieces." },
      { icon: "Fingerprint", name: "Fingerprint Sensor", description: "Under-display fingerprint sensor not working? We repair and calibrate optical sensors on Pixel 6 and newer." }
    ],
    advantagePillars: [
      { icon: "Smartphone", title: "Pure Android Experts", description: "We understand Pixel's unique hardware and software integration. Tensor chip diagnostics and repair expertise." },
      { icon: "Zap", title: "Same-Day Pixel Repairs", description: "Most Pixel screen and battery repairs completed within 2 hours. Walk-ins welcome at both locations." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs." },
      { icon: "DollarSign", title: "Transparent Pricing", description: "Free diagnostics and upfront quotes. No surprises—know your Pixel repair cost before we start." }
    ],
    modelCategories: [
      { title: "Pixel 9 Series", models: ["Pixel 9 Pro XL","Pixel 9 Pro","Pixel 9","Pixel 9 Pro Fold"], description: "Latest generation with Tensor G4." },
      { title: "Pixel 8 Series", models: ["Pixel 8 Pro","Pixel 8","Pixel 8a"], description: "Tensor G3 powered devices." },
      { title: "Pixel 7 Series", models: ["Pixel 7 Pro","Pixel 7","Pixel 7a"], description: "First-gen Tensor G2 phones." },
      { title: "Pixel Fold & Legacy", models: ["Pixel Fold","Pixel 6 Pro","Pixel 6","Pixel 6a","Pixel 5","Pixel 5a","Pixel 4 XL","Pixel 4","Pixel 4a","Pixel 3 XL","Pixel 3","Pixel 3a"], description: "Foldable specialists plus continued support for older Pixel generations." }
    ],
    models: ["Pixel 9 Pro XL","Pixel 9 Pro","Pixel 9","Pixel 9 Pro Fold","Pixel 8 Pro","Pixel 8","Pixel 8a","Pixel 7 Pro","Pixel 7","Pixel 7a","Pixel 6 Pro","Pixel 6","Pixel 6a","Pixel Fold","Pixel 5","Pixel 5a","Pixel 4 XL","Pixel 4","Pixel 4a","Pixel 4a 5G","Pixel 3 XL","Pixel 3","Pixel 3a XL","Pixel 3a"],
    modelsDescription: "We service all Google Pixel generations from the newest Pixel 9 series to legacy Pixel 3 devices.",
    faqs: [
      { question: "How long does Google Pixel screen replacement take?", answer: "Most Pixel screen replacements are completed within 1-2 hours. Pixel Fold and Pixel 9 Pro Fold devices may require 2-4 hours due to their complex folding display assemblies." },
      { question: "Do you repair Pixel Fold devices?", answer: "Yes! We specialize in Pixel Fold and Pixel 9 Pro Fold repairs including inner screen, outer screen, hinge mechanism, and flex cable issues." },
      { question: "Will my Pixel still receive software updates after repair?", answer: "Absolutely. Your Pixel will continue receiving all Google software updates, security patches, and Pixel Feature Drops after our repair." },
      { question: "How much does Pixel repair cost in Winnipeg?", answer: "Costs vary by model and repair type. Pixel a-series repairs are typically more affordable, while Pro models and Fold devices cost more due to premium components." },
      { question: "Do Pixel repairs affect camera quality or AI features?", answer: "No. Our repairs don't affect your Pixel's computational photography, Magic Eraser, or other AI features." }
    ],
    pricingMicroCopy: {
      costDriver: "Pixel repair costs are driven by parts availability and quality—Google uses premium OLED displays. Google's <a href='https://support.google.com/googlepixelphone/answer/6090612' target='_blank' rel='noopener noreferrer'>Pixel phone help center</a> covers troubleshooting steps.",
      priceShock: "Many customers are surprised that Pixel screens can cost as much as or more than iPhone screens. <a href='https://www.ifixit.com/Search?query=google+pixel+teardown' target='_blank' rel='noopener noreferrer'>iFixit's Pixel teardowns</a> show that Google has improved repairability in recent generations.",
      advisory: "If the repair cost approaches the value of your Pixel, we'll explain your options clearly before proceeding.",
      fallback: "When repair doesn't make financial sense, data recovery is often still possible."
    },
    serviceAreaNote: "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Walk-ins welcome or book online."
  },
  {
    slug: "huawei",
    deviceName: "Huawei",
    metaTitle: "Huawei Phone Repair Winnipeg | Broken Screens, Bad Batteries | Mobile Tech Lab",
    metaDescription: "Expert Huawei repair in Winnipeg. Screen, battery, motherboard repair for Huawei P60, P50, Mate, Nova & Honor devices. Hard-to-find parts specialists.",
    tagline: "Huawei Phone Repair Services in Winnipeg",
    heroDescription: "Don't let parts availability stop you from repairing your Huawei device. We specialize in sourcing components for Huawei P series, Mate, Nova, and Honor phones in Winnipeg when others can't.",
    services: [
      { icon: "ScreenShare", name: "Screen Replacement", description: "OLED and LCD display replacements for Huawei P series, Mate, and Nova devices." },
      { icon: "Battery", name: "Battery Replacement", description: "Restore full-day battery life to your Huawei device. Same-day replacement for most models." },
      { icon: "Plug", name: "SuperCharge Repair", description: "USB-C charging port and SuperCharge fast charging diagnosis and repair for all Huawei devices." },
      { icon: "Camera", name: "Leica Camera Repair", description: "Leica-engineered camera repairs on Huawei flagships." },
      { icon: "Cpu", name: "Motherboard Repair", description: "Component-level motherboard diagnostics and micro-soldering repair." },
      { icon: "Fingerprint", name: "Fingerprint Sensor", description: "In-display and rear fingerprint sensor repairs and calibration." }
    ],
    advantagePillars: [
      { icon: "Award", title: "Huawei Specialists in Winnipeg", description: "Specialized knowledge of Huawei devices when most shops turn them away." },
      { icon: "Package", title: "Hard-to-Find Parts", description: "We maintain supplier relationships for Huawei parts that others can't source." },
      { icon: "Zap", title: "SuperCharge Experts", description: "We diagnose and repair SuperCharge, fast charging, and all power delivery systems." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs." }
    ],
    modelCategories: [
      { title: "Huawei P Series", models: ["P60 Pro","P60 Art","P60","P50 Pro","P50 Pocket","P50","P40 Pro+","P40 Pro","P40","P30 Pro","P30"], description: "Premium Huawei phones with Leica cameras." },
      { title: "Huawei Mate Series", models: ["Mate 60 Pro","Mate 60","Mate 50 Pro","Mate 50","Mate 40 Pro","Mate 40","Mate 30 Pro","Mate 20 Pro","Mate 20 X"], description: "Flagship Mate lineup." },
      { title: "Huawei Nova Series", models: ["Nova 11 Pro","Nova 11","Nova 10 Pro","Nova 10","Nova 9","Nova 8","Nova 7","Nova 5T"], description: "Mid-range Nova devices." },
      { title: "Honor Devices", models: ["Honor Magic5 Pro","Honor Magic4 Pro","Honor 70","Honor 50","Honor 20 Pro","Honor 10"], description: "Former Huawei sub-brand." }
    ],
    models: ["Huawei P60 Pro","Huawei P60","Huawei P60 Art","Huawei P50 Pro","Huawei P50","Huawei P50 Pocket","Huawei P40 Pro+","Huawei P40 Pro","Huawei P40","Huawei P40 Lite","Huawei P30 Pro","Huawei P30","Huawei P30 Lite","Huawei P20 Pro","Huawei P20","Huawei P20 Lite","Huawei Mate 60 Pro","Huawei Mate 60","Huawei Mate 50 Pro","Huawei Mate 50","Huawei Mate 40 Pro","Huawei Mate 40","Huawei Mate 30 Pro","Huawei Mate 30","Huawei Mate 20 Pro","Huawei Mate 20","Huawei Mate 20 X","Huawei Nova 11 Pro","Huawei Nova 11","Huawei Nova 10 Pro","Huawei Nova 10","Huawei Nova 9","Huawei Nova 8","Honor Magic5 Pro","Honor Magic4 Pro","Honor 70","Honor 50"],
    modelsDescription: "We repair all Huawei and Honor devices including P series, Mate series, Nova series, and foldable models.",
    faqs: [
      { question: "Do you repair Huawei phones in Winnipeg?", answer: "Yes! We're one of the few repair shops in Winnipeg that specializes in Huawei devices." },
      { question: "Are Huawei parts available in Winnipeg?", answer: "We maintain supplier relationships for Huawei parts that others can't source. Most parts available within 2-3 days." },
      { question: "How long does Huawei screen repair take in Winnipeg?", answer: "Most Huawei screen replacements are completed same-day once parts are available, typically within 1-2 hours." },
      { question: "Do you repair Honor phones?", answer: "Yes, we repair all Honor devices which were formerly part of Huawei." },
      { question: "Can you repair Huawei phones without Google services?", answer: "Yes! We repair all Huawei hardware regardless of whether the device has Google Mobile Services or Huawei Mobile Services." }
    ],
    pricingMicroCopy: {
      costDriver: "Huawei repair costs depend on parts availability—as a brand with supply chain challenges, some components require specialty sourcing. Huawei's <a href='https://consumer.huawei.com/ca/support/' target='_blank' rel='noopener noreferrer'>official support portal</a> provides device diagnostics.",
      priceShock: "Many customers are surprised that Huawei parts can be as expensive as Samsung or Apple parts. <a href='https://www.ifixit.com/Search?query=huawei+teardown' target='_blank' rel='noopener noreferrer'>iFixit's Huawei teardowns</a> show why certain models are difficult to source parts for.",
      advisory: "If the repair cost doesn't make sense for your device's value, we'll explain alternatives and help you decide.",
      fallback: "When repair isn't practical, data recovery is often still possible."
    },
    serviceAreaNote: "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
  },
  {
    slug: "lg",
    deviceName: "LG",
    metaTitle: "LG Phone Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab",
    metaDescription: "LG phone repair specialists in Winnipeg. Screen, battery, charging port repair for LG Velvet, V series, G series, Stylo & all legacy models. We keep your LG running!",
    tagline: "LG Phone Repair in Winnipeg, MB",
    heroDescription: "Even though LG exited the smartphone market, we continue to support all LG devices in Winnipeg. From the innovative LG Wing to the reliable Stylo series, we keep your LG phone running strong.",
    services: [
      { icon: "ScreenShare", name: "Screen Replacement", description: "OLED and LCD display replacements for LG Velvet, V series, G series, and Stylo devices." },
      { icon: "Battery", name: "Battery Replacement", description: "Restore full-day battery life to your LG phone. Same-day replacement for most models." },
      { icon: "Plug", name: "Charging Port Repair", description: "USB-C and micro USB charging port diagnosis and repair for all LG devices." },
      { icon: "Camera", name: "Camera Repair", description: "Front, rear, and wide-angle camera replacements for all LG models." },
      { icon: "Volume2", name: "Speaker Repair", description: "Fix speakers, earpieces, and Boombox audio systems on LG devices." },
      { icon: "Power", name: "Power Button Repair", description: "Repair stuck or non-responsive power and volume buttons on all LG models." }
    ],
    advantagePillars: [
      { icon: "Award", title: "LG Legacy Specialists", description: "We continue to support LG devices long after others have stopped." },
      { icon: "Package", title: "Parts Still Available", description: "We maintain supplier relationships for LG parts that others can't source." },
      { icon: "Wrench", title: "Dual Screen & Wing Experts", description: "We repair unique LG innovations including Dual Screen cases and the LG Wing swivel mechanism." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs." }
    ],
    modelCategories: [
      { title: "LG Velvet & Wing", models: ["LG Velvet 5G","LG Wing 5G"], description: "LG's innovative final flagships." },
      { title: "LG V Series", models: ["V60 ThinQ","V50 ThinQ","V40 ThinQ","V35 ThinQ","V30","V20"], description: "Premium V series with Quad DAC audio." },
      { title: "LG G Series", models: ["G8X ThinQ","G8 ThinQ","G7 ThinQ","G6","G5","G4","G3"], description: "Classic G series flagship lineup." },
      { title: "LG Stylo & K Series", models: ["Stylo 6","Stylo 5","Stylo 4","K92","K71","K62","K51","K42"], description: "Budget-friendly LG devices." }
    ],
    models: ["LG Velvet 5G","LG Wing 5G","LG V60 ThinQ","LG V50 ThinQ","LG V40 ThinQ","LG V35 ThinQ","LG V30","LG G8X ThinQ","LG G8 ThinQ","LG G7 ThinQ","LG G6","LG G5","LG Stylo 6","LG Stylo 5","LG Stylo 4","LG Stylo 3","LG K92","LG K71","LG K62","LG K52","LG K51","LG K42","LG K41S","LG Q70","LG Q60","LG Q Stylus","LG Aristo","LG Phoenix","LG Rebel","LG Tribute"],
    modelsDescription: "We repair all LG smartphone models. As Winnipeg's LG legacy support specialists, we maintain parts for older devices others won't service.",
    faqs: [
      { question: "Do you repair LG phones in Winnipeg?", answer: "Yes! We're one of the few repair shops in Winnipeg still specializing in LG devices." },
      { question: "Can you still get LG phone parts in Winnipeg?", answer: "We maintain supplier relationships for LG parts. Popular Velvet, V series, and Stylo parts are often in stock." },
      { question: "How long does LG screen repair take in Winnipeg?", answer: "Most LG screen replacements are completed same-day, typically within 1-2 hours once parts are available." },
      { question: "Is it worth repairing my LG phone?", answer: "We'll provide an honest assessment. Many LG phones are well-built and worth repairing." },
      { question: "Can you repair LG Dual Screen accessories?", answer: "Yes, we repair LG Dual Screen cases and the unique LG Wing swivel mechanism." }
    ],
    pricingMicroCopy: {
      costDriver: "LG repair costs depend on the model and parts availability—as a discontinued brand, some parts require specialty sourcing. LG's <a href='https://www.lg.com/ca_en/support' target='_blank' rel='noopener noreferrer'>Canadian support portal</a> still provides basic documentation.",
      priceShock: "Many customers are surprised that repairing an older LG device can sometimes cost more than expected due to limited parts supply. <a href='https://www.ifixit.com/Search?query=lg+phone+teardown' target='_blank' rel='noopener noreferrer'>iFixit's LG phone teardowns</a> remain useful for understanding repairability.",
      advisory: "If the repair cost doesn't make sense for your LG's current value, we'll explain alternatives.",
      fallback: "When repair isn't practical, data recovery is often still possible."
    },
    serviceAreaNote: "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
  },
  {
    slug: "motorola",
    deviceName: "Motorola",
    metaTitle: "Motorola Phone Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab",
    metaDescription: "Affordable Motorola repair in Winnipeg. Screen, battery, charging port repair for Moto G, Edge, Razr & all models. Budget-friendly same-day service.",
    tagline: "Affordable Motorola Phone Repairs in Winnipeg",
    heroDescription: "From budget-friendly Moto G and E series to premium Edge flagships and foldable Razr devices, we repair all Motorola phones in Winnipeg.",
    services: [
      { icon: "ScreenShare", name: "Screen Replacement", description: "Moto G, Edge OLED, and Razr foldable screen replacements." },
      { icon: "Battery", name: "Battery Replacement", description: "Motorola batteries degrade after 2-3 years. Same-day replacement to restore full-day battery life." },
      { icon: "Plug", name: "Charging Port Repair", description: "USB-C charging port repair for all Moto devices." },
      { icon: "Camera", name: "Camera Repair", description: "Fix blurry photos, cracked lenses, and autofocus issues on Moto G, Edge, and Razr cameras." },
      { icon: "Volume2", name: "Speaker Repair", description: "Speaker, earpiece, and microphone repairs for all Motorola phones." },
      { icon: "Wifi", name: "Connectivity Issues", description: "WiFi, Bluetooth, and cellular antenna repairs." }
    ],
    advantagePillars: [
      { icon: "DollarSign", title: "Budget-Friendly Repairs", description: "Motorola parts are often more affordable than other brands." },
      { icon: "Smartphone", title: "Razr Foldable Specialists", description: "We repair Motorola Razr foldables including screen, hinge, and flex cable issues." },
      { icon: "Zap", title: "Same-Day Moto Service", description: "Most Motorola repairs completed same day—typically 1-2 hours." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs." }
    ],
    modelCategories: [
      { title: "Motorola Edge Series", models: ["Edge 50 Ultra","Edge 50 Pro","Edge 50","Edge 40 Pro","Edge 40 Neo","Edge 40","Edge 30 Ultra","Edge 30 Pro","Edge 30","Edge+","Edge"], description: "Motorola's flagship phones." },
      { title: "Motorola Razr", models: ["Razr 40 Ultra","Razr 40","Razr+ (2024)","Razr+ (2023)","Razr (2023)","Razr (2022)"], description: "Foldable phone repairs." },
      { title: "Moto G Series", models: ["Moto G Power 5G","Moto G Stylus 5G","Moto G 5G","Moto G Power","Moto G Stylus","Moto G Play","Moto G Pure","Moto G Fast"], description: "Popular mid-range lineup." },
      { title: "Moto E & ThinkPhone", models: ["Moto E","Moto E Power","ThinkPhone by Motorola"], description: "Budget devices and business phones." }
    ],
    models: ["Motorola Edge 50 Ultra","Motorola Edge 50 Pro","Motorola Edge 50","Motorola Edge 40 Pro","Motorola Edge 40 Neo","Motorola Edge 40","Motorola Edge 30 Ultra","Motorola Edge 30 Pro","Motorola Edge 30","Motorola Edge+","Motorola Edge","Motorola Razr 40 Ultra","Motorola Razr 40","Motorola Razr+","Motorola Razr","Moto G Power 5G","Moto G Stylus 5G","Moto G 5G","Moto G Power","Moto G Stylus","Moto G Play","Moto G Pure","Moto G Fast","Moto E","Moto E Power","ThinkPhone by Motorola"],
    modelsDescription: "We service all Motorola devices from the budget-friendly Moto E to the premium Edge series and foldable Razr.",
    faqs: [
      { question: "How much does Motorola screen repair cost in Winnipeg?", answer: "Motorola repairs are often more affordable than Samsung or Apple. Moto G screens are budget-friendly, while Edge and Razr cost more." },
      { question: "Do you repair Motorola Razr foldable phones?", answer: "Yes! We're one of few Winnipeg shops that repair Razr foldables." },
      { question: "How long does Motorola repair take?", answer: "Most Motorola repairs are completed same-day, typically within 1-2 hours." },
      { question: "Is it worth repairing my Moto G or Moto E?", answer: "Often yes! Moto G and E repairs are very affordable." },
      { question: "Do you stock Motorola parts in Winnipeg?", answer: "We stock common Moto G and Edge series parts. Razr parts may require 1-2 days." }
    ],
    pricingMicroCopy: {
      costDriver: "Motorola repair costs vary by model—budget Moto G and E series are very affordable, while Edge flagships and Razr foldables cost more. Motorola's <a href='https://www.motorola.com/ca/en/support' target='_blank' rel='noopener noreferrer'>official support centre</a> provides troubleshooting guides.",
      priceShock: "Moto G repairs are often surprisingly affordable, but Razr foldable screens can approach flagship pricing. <a href='https://www.ifixit.com/Search?query=motorola+razr+teardown' target='_blank' rel='noopener noreferrer'>iFixit's Motorola Razr teardowns</a> illustrate why foldable repairs are significantly more complex.",
      advisory: "For budget Motorola devices, repair almost always makes sense. For Razr foldables, we'll explain the costs clearly.",
      fallback: "When repair doesn't make sense, data recovery is often still possible."
    },
    serviceAreaNote: "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
  },
  {
    slug: "oneplus",
    deviceName: "OnePlus",
    metaTitle: "OnePlus Phone Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab",
    metaDescription: "Premium OnePlus repair in Winnipeg. Screen replacement, Warp Charge port, battery repair for OnePlus 12, 11, Nord & Open. Expert same-day service.",
    tagline: "OnePlus Phone Repair in Winnipeg",
    heroDescription: "From the flagship OnePlus 13 to the innovative OnePlus Open foldable, we provide expert repairs for all OnePlus devices in Winnipeg. Warp Charge issues, screen damage, battery problems – we're your local OnePlus specialists.",
    services: [
      { icon: "ScreenShare", name: "Screen Replacement", description: "Fluid AMOLED and ProXDR display replacements for OnePlus flagships and Nord series." },
      { icon: "Battery", name: "Battery Replacement", description: "Restore full-day battery life to your OnePlus device." },
      { icon: "Zap", name: "Warp Charge Repair", description: "Warp Charge 80W, SUPERVOOC 100W, and all fast charging port diagnosis and repair." },
      { icon: "Camera", name: "Camera Repair", description: "Hasselblad-tuned camera repairs on OnePlus flagships." },
      { icon: "Volume2", name: "Speaker Repair", description: "Fix stereo speakers, earpieces, and Dolby Atmos audio systems." },
      { icon: "Fingerprint", name: "Fingerprint Sensor", description: "In-display fingerprint sensor repairs and calibration." }
    ],
    advantagePillars: [
      { icon: "Award", title: "OnePlus Experts in Winnipeg", description: "Specialized knowledge of OnePlus devices including alert slider, Warp Charge, and Hasselblad cameras." },
      { icon: "Package", title: "Quality Parts Sourced", description: "We maintain supplier relationships for OnePlus parts." },
      { icon: "Zap", title: "Fast Charging Specialists", description: "We diagnose and repair Warp Charge, SUPERVOOC, and all fast charging systems." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs." }
    ],
    modelCategories: [
      { title: "OnePlus Flagship", models: ["OnePlus 13","OnePlus 13R","OnePlus 12","OnePlus 12R","OnePlus 11","OnePlus 10 Pro","OnePlus 10T","OnePlus 9 Pro","OnePlus 9"], description: "Premium OnePlus phones with Hasselblad cameras." },
      { title: "OnePlus Nord Series", models: ["Nord CE 3 Lite","Nord CE 2","Nord CE","Nord N30","Nord N20","Nord 2T","Nord 2","Nord N10","Nord"], description: "Popular mid-range Nord lineup." },
      { title: "OnePlus Open & Pad", models: ["OnePlus Open","OnePlus Pad Pro","OnePlus Pad 2"], description: "Foldable and tablet repairs." },
      { title: "Classic OnePlus", models: ["OnePlus 8T","OnePlus 8 Pro","OnePlus 7T Pro","OnePlus 7 Pro","OnePlus 6T","OnePlus 6","OnePlus 5T"], description: "Legacy OnePlus devices." }
    ],
    models: ["OnePlus Ace 5 Pro 5G","OnePlus Ace 5 5G","OnePlus 13R","OnePlus 13 5G","OnePlus 12R 5G","OnePlus 12 5G","OnePlus 11","OnePlus 10T 5G","OnePlus 10R","OnePlus 10 Pro","OnePlus 9 Pro","OnePlus 9","OnePlus 8T","OnePlus 8 Pro","OnePlus 8","OnePlus 7T Pro","OnePlus 7T","OnePlus 7 Pro","OnePlus 7","OnePlus 6T","OnePlus 6","OnePlus 5T","OnePlus 5","OnePlus 3T","OnePlus 3","OnePlus Open 5G","OnePlus Pad Pro","OnePlus Pad 2"],
    modelsDescription: "We repair all OnePlus models including flagship, Nord series, and the OnePlus Open foldable.",
    faqs: [
      { question: "Do you repair OnePlus phones in Winnipeg?", answer: "Yes! We're one of the few repair shops in Winnipeg that specializes in OnePlus devices." },
      { question: "How long does OnePlus screen repair take in Winnipeg?", answer: "Most OnePlus screen replacements are completed same-day, typically within 1-2 hours once parts are available." },
      { question: "Can you fix OnePlus Warp Charge issues?", answer: "Yes, we diagnose and repair Warp Charge, SUPERVOOC, and all fast charging problems." },
      { question: "Do you repair OnePlus Open foldable?", answer: "Yes, we service the OnePlus Open including inner/outer screen repairs, hinge issues, and component replacements." },
      { question: "Are OnePlus parts available in Winnipeg?", answer: "We maintain supplier relationships for OnePlus parts. Common parts are often in stock." }
    ],
    pricingMicroCopy: {
      costDriver: "OnePlus repair costs vary by model—flagship devices with AMOLED displays cost more than Nord series. OnePlus provides <a href='https://www.oneplus.com/ca_en/support' target='_blank' rel='noopener noreferrer'>official device support</a>.",
      priceShock: "Many customers are surprised that OnePlus repairs can cost as much as Samsung or iPhone repairs. <a href='https://www.ifixit.com/Search?query=oneplus+teardown' target='_blank' rel='noopener noreferrer'>iFixit's OnePlus teardowns</a> show how alert slider, Warp Charge circuitry, and curved displays contribute to complexity.",
      advisory: "If the repair cost doesn't make sense for your device's value, we'll explain alternatives.",
      fallback: "When repair isn't practical, data recovery is often still possible."
    },
    serviceAreaNote: "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
  },
  {
    slug: "infinix",
    deviceName: "Infinix",
    metaTitle: "Infinix Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab",
    metaDescription: "Infinix phone repair in Winnipeg. Screen, battery, charging port repair for Infinix Note, Hot, Zero & GT series. Underserved market specialists.",
    tagline: "Infinix Repair Specialists in Winnipeg",
    heroDescription: "Can't find <a href='https://www.infinixmobility.com/care/repair' target='_blank' rel='noopener noreferrer'>Infinix repair</a> in Winnipeg? We're one of the few shops serving the Infinix community.",
    services: [
      { icon: "ScreenShare", name: "Screen Replacement", description: "Replace cracked Infinix screens affordably in Winnipeg—Note, Hot, and GT series." },
      { icon: "Battery", name: "Battery Replacement", description: "Restore battery life to your Infinix device with quality replacements." },
      { icon: "Plug", name: "Charging Port Repair", description: "Fix USB-C charging port issues for reliable 33W to 100W fast charging." },
      { icon: "Camera", name: "Camera Repair", description: "Repair front and rear cameras on all Infinix devices." },
      { icon: "Volume2", name: "Speaker Repair", description: "Fix DTS speakers, earpieces, and audio quality issues." },
      { icon: "Power", name: "Power Issues", description: "Diagnose and fix power button, boot loops, and startup problems." }
    ],
    advantagePillars: [
      { icon: "Award", title: "Infinix Specialists", description: "One of the few Winnipeg shops with Infinix repair expertise." },
      { icon: "Users", title: "Underserved Market Experts", description: "Filling the gap for Infinix owners who can't find repair elsewhere." },
      { icon: "DollarSign", title: "Affordable Repairs", description: "Budget-friendly pricing matching Infinix's value proposition." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs." }
    ],
    modelCategories: [
      { title: "Note Series", models: ["Note 40 Pro","Note 40","Note 30 Pro","Note 30","Note 30 VIP","Note 12 Pro","Note 12"], description: "Premium Note series." },
      { title: "Hot Series", models: ["Hot 40 Pro","Hot 40","Hot 30","Hot 20"], description: "Popular Hot series budget phones." },
      { title: "Zero Series", models: ["Zero 30","Zero Ultra","Zero 20"], description: "Camera-focused Zero flagships." },
      { title: "GT Gaming Series", models: ["GT 20 Pro","GT 10 Pro"], description: "Gaming-focused GT phones." }
    ],
    models: ["Infinix Zero 30","Infinix Zero Ultra","Infinix Zero 20","Infinix Note 40 Pro","Infinix Note 40","Infinix Note 30 Pro","Infinix Note 30","Infinix Note 30 VIP","Infinix Note 12 Pro","Infinix Note 12","Infinix Hot 40 Pro","Infinix Hot 40","Infinix Hot 30","Infinix Hot 20","Infinix Smart 8","Infinix Smart 7","Infinix GT 20 Pro","Infinix GT 10 Pro"],
    modelsDescription: "We repair all Infinix models including Note, Hot, Zero, Smart, and GT gaming series.",
    faqs: [
      { question: "Do you repair Infinix phones in Winnipeg?", answer: "Yes! We're one of the few shops in Winnipeg that services Infinix devices." },
      { question: "Are Infinix parts available in Winnipeg?", answer: "We can source parts for most Infinix models." },
      { question: "Is Infinix repair affordable?", answer: "Absolutely! As a budget-friendly brand, Infinix repairs are typically very affordable." },
      { question: "Do you repair Infinix GT gaming phones?", answer: "Yes! We service the Infinix GT gaming series." },
      { question: "How long does Infinix repair take in Winnipeg?", answer: "Most repairs are completed same-day if parts are in stock." }
    ],
    pricingMicroCopy: {
      costDriver: "Infinix repair costs are generally affordable. Infinix's <a href='https://www.infinixmobility.com/support' target='_blank' rel='noopener noreferrer'>official support page</a> provides model-specific troubleshooting.",
      priceShock: "Infinix owners are often pleasantly surprised that repairs are more affordable than other brands. <a href='https://www.ifixit.com/Search?query=phone+repair+guide' target='_blank' rel='noopener noreferrer'>iFixit's repair guides</a> can help understand common repairs.",
      advisory: "For budget Infinix devices, repair almost always makes financial sense.",
      fallback: "When repair doesn't make sense, data recovery is often still possible."
    },
    serviceAreaNote: "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
  },
  // ── TABLETS & LAPTOPS ──
  {
    slug: "ipad",
    deviceName: "iPad",
    metaTitle: "iPad Repair Winnipeg | Screen & Battery Replacement",
    metaDescription: "Professional iPad repair in Winnipeg. Screen replacement, battery, charging port repair for iPad Pro, iPad Air, iPad mini & all models. Same-day service available.",
    tagline: "Expert iPad Repair in Winnipeg: Fast, Professional, and Guaranteed",
    heroDescription: "Whether it's a shattered screen on an iPad Pro or a battery that won't hold a charge on an iPad Air, you need more than a quick fix—you need a guarantee. Mobile Tech Lab is Winnipeg's highest-rated destination for tablet repairs.",
    serviceType: "Tablet Repair",
    services: [
      { icon: "ScreenShare", name: "Screen Replacement", description: "Dealing with fused LCD and digitizer assemblies for a factory-quality finish. Glass-only repairs available for iPad Air and Mini to save you money." },
      { icon: "Battery", name: "Battery Replacement", description: "If your iPad dies at 20% or feels sluggish, a fresh battery can add years to its lifespan." },
      { icon: "Plug", name: "Charging Port Repair", description: "We clean before we replace. If damaged, we perform microsoldering to restore Lightning or USB-C connection." },
      { icon: "Droplets", name: "Liquid Damage Recovery", description: "Spilled coffee? Our ultrasonic cleaning process is the best chance your data has for survival." },
      { icon: "Cpu", name: "Software & Boot Issues", description: "Stuck on the Apple logo? Our technicians perform advanced restores and data recovery." },
      { icon: "Camera", name: "Button & Sensor Repair", description: "Home buttons, power buttons, Touch ID, and Face ID sensor repairs." }
    ],
    advantagePillars: [
      { icon: "DollarSign", title: "Transparent Pricing", description: "iPad 9 glass repair from $99+tax. Multiple quality tiers." },
      { icon: "Zap", title: "Same-Day Service", description: "Most repairs completed same day. Rush Service available for urgent needs." },
      { icon: "Shield", title: "Warranty on Every Repair", description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty." },
      { icon: "Award", title: "Apple IRP Certified", description: "Access to Genuine Apple Parts, diagnostics, and specialized tools." }
    ],
    modelCategories: [
      { title: "iPad Pro", models: ["11-inch (M4)","12.9-inch (6th gen)","11-inch (4th gen)","12.9-inch (5th gen)","All Pro models"], description: "ProMotion displays require a delicate touch." },
      { title: "iPad Air & Mini", models: ["Air 13-inch (M2)","Air 11-inch (M2)","Mini (6th gen)","All Air & Mini generations"], description: "Glass-only repairs to save you money." },
      { title: "Standard iPad", models: ["iPad (10th gen)","iPad (9th gen)","iPad (8th gen)","iPad (7th gen)","All standard models"], description: "Winnipeg's most competitive rates." },
      { title: "All Models", models: ["Legacy iPads","Discontinued models","All generations"], description: "Don't see your model? We service all generations." }
    ],
    models: [],
    modelsDescription: "",
    faqs: [
      { question: "How much does iPad repair cost in Winnipeg?", answer: "iPad 9 glass repairs start at $99. Newer iPad Pro or Air models typically cost more. <a href='/repair-pricing'>Learn more about how repair pricing works</a>." },
      { question: "How long does it take to repair a cracked iPad screen?", answer: "Most screen replacements are completed within the same business day." },
      { question: "Do you use Genuine Apple Parts?", answer: "As an IRP-certified shop, we can use Genuine Apple parts for many repairs." },
      { question: "What warranty do you offer on iPad repairs?", answer: "Screen repair warranties vary by part quality tier (30 days to lifetime). Battery replacements come with a 90-day warranty." },
      { question: "Can you fix a water-damaged iPad?", answer: "We offer data recovery services with a high success rate." }
    ],
    pricingMicroCopy: {
      costDriver: "iPad repair costs depend heavily on the model. Apple's <a href='https://support.apple.com/en-ca/111901' target='_blank' rel='noopener noreferrer'>iPad repair service documentation</a> outlines warranty coverage.",
      priceShock: "Many customers are surprised that an iPad Pro screen can cost more than the tablet originally did. <a href='https://www.ifixit.com/Search?query=ipad+teardown' target='_blank' rel='noopener noreferrer'>iFixit's iPad teardowns</a> show the adhesive-sealed designs.",
      advisory: "If the repair cost approaches or exceeds your iPad's current value, we'll explain that.",
      fallback: "When repair isn't practical, data recovery or data transfer to a new device may still be possible."
    },
    serviceAreaNote: "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods.",
    extra_sections: {
      before_after_videos: {
        preRepairSrc: "/videos/ipad-pre-repair.mp4#t=0,2",
        postRepairSrc: "/videos/ipad-post-repair.mp4#t=3,6",
        preRepairCaption: "Cracked iPad screen as received",
        postRepairCaption: "Fully restored with new display"
      }
    }
  },
  {
    slug: "macbook",
    deviceName: "MacBook",
    metaTitle: "MacBook Repair Services | Expert Mac Repairs",
    metaDescription: "Professional MacBook repair services including screen replacement, battery replacement, keyboard repair, liquid damage restoration, and data recovery. Fast turnaround and quality parts.",
    tagline: "Expert MacBook Repair Services",
    serviceType: "Laptop Repair",
    heroDescription: "From cracked Retina displays to liquid damage and keyboard issues, we repair all MacBook Air and Pro models in Winnipeg.",
    services: [
      { icon: "Monitor", name: "Screen Replacement", description: "Cracked Retina display or dead pixels? We replace MacBook Air and Pro screens." },
      { icon: "Battery", name: "Battery Replacement", description: "MacBook battery swelling or not holding charge? Same-day battery replacement for most models." },
      { icon: "Keyboard", name: "Keyboard Replacement", description: "Sticky butterfly keys or unresponsive Magic Keyboard? Complete keyboard replacement." },
      { icon: "HardDrive", name: "Data Recovery", description: "Lost files from a failed SSD or corrupted drive? We recover data from damaged MacBooks." },
      { icon: "Droplets", name: "Liquid Damage Repair", description: "Coffee or water spill? We specialize in liquid damage restoration." },
      { icon: "Plug", name: "Charging Issues", description: "MacBook not charging? We diagnose and repair MagSafe, USB-C ports, battery connectors." }
    ],
    advantagePillars: [
      { icon: "Cpu", title: "M1, M2 & M3 Specialists", description: "Expert repairs for Apple Silicon MacBooks." },
      { icon: "Zap", title: "Fast Turnaround", description: "Most MacBook repairs completed within one business day once parts arrive." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs." },
      { icon: "Clock", title: "Free Diagnostics", description: "Not sure what's wrong? We provide free diagnostics." }
    ],
    modelCategories: [
      { title: "MacBook Air", models: ["MacBook Air M3 (2024)","MacBook Air M2 (2022)","MacBook Air M1 (2020)","MacBook Air Retina (2018-2020)","MacBook Air (2015-2017)"], description: "Ultralight MacBook repairs." },
      { title: "MacBook Pro 14\" & 16\"", models: ["MacBook Pro 16\" M3 (2023)","MacBook Pro 14\" M3 (2023)","MacBook Pro 16\" M2 (2023)","MacBook Pro 14\" M2 (2023)","MacBook Pro 16\" M1 (2021)","MacBook Pro 14\" M1 (2021)","MacBook Pro 16\" (2019)","MacBook Pro 15\" (2015-2019)"], description: "Pro-level MacBook repairs." },
      { title: "MacBook Pro 13\"", models: ["MacBook Pro 13\" M2 (2022)","MacBook Pro 13\" M1 (2020)","MacBook Pro 13\" (2016-2020)"], description: "Compact Pro repairs." },
      { title: "MacBook 12\"", models: ["MacBook 12\" (2015)","MacBook 12\" (2016)","MacBook 12\" (2017)"], description: "Retina MacBook repairs." }
    ],
    models: ["MacBook Air M3 (2024)","MacBook Air M2 (2022)","MacBook Air M1 (2020)","MacBook Air (Retina, 2018-2020)","MacBook Air (2015-2017)","MacBook Pro 16\" M3 (2023)","MacBook Pro 14\" M3 (2023)","MacBook Pro 16\" M2 (2023)","MacBook Pro 14\" M2 (2023)","MacBook Pro 13\" M2 (2022)","MacBook Pro 16\" M1 (2021)","MacBook Pro 14\" M1 (2021)","MacBook Pro 13\" M1 (2020)","MacBook Pro 16\" (2019)","MacBook Pro 15\" (2015-2019)","MacBook Pro 13\" (2016-2020)","MacBook 12\" (2015-2017)"],
    modelsDescription: "We repair all MacBook models from Intel-based machines to the latest M3 Apple Silicon.",
    faqs: [
      { question: "How long does MacBook screen replacement take in Winnipeg?", answer: "Most MacBook screen replacements are completed within 1-3 business days." },
      { question: "Can you recover data from a water-damaged MacBook?", answer: "Yes, in many cases we can recover data from liquid-damaged MacBooks." },
      { question: "Do you repair MacBooks with Apple Silicon (M1, M2, M3)?", answer: "Absolutely! We're experienced with Apple Silicon MacBooks." },
      { question: "How much does MacBook battery replacement cost in Winnipeg?", answer: "Costs vary by model. Contact us for a free quote." },
      { question: "Is my data safe during MacBook repair?", answer: "We prioritize data security. Your files remain untouched during hardware repairs." }
    ],
    pricingMicroCopy: {
      costDriver: "MacBook repair costs are driven by the display and logic board. Apple's <a href='https://support.apple.com/en-ca/102894' target='_blank' rel='noopener noreferrer'>battery service documentation</a> explains when replacement is recommended.",
      priceShock: "Many customers are surprised that a MacBook display can cost more than the original laptop. <a href='https://www.ifixit.com/Search?query=macbook+teardown' target='_blank' rel='noopener noreferrer'>iFixit's MacBook teardowns</a> illustrate the complexity.",
      advisory: "If the repair cost approaches your MacBook's current value, we'll explain that clearly.",
      fallback: "When repair isn't practical, data recovery or data transfer to a new device is often still an option."
    },
    serviceAreaNote: "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
  },
  {
    slug: "laptop",
    deviceName: "Laptop",
    metaTitle: "Laptop Repair Winnipeg | Asus, Acer, Lenovo, HP, Dell & More",
    metaDescription: "Expert Windows laptop and Chromebook repair in Winnipeg. Screen replacement, battery service, keyboard repair, SSD upgrades. All brands serviced. Same-day available.",
    tagline: "Winnipeg's Windows Laptop & Chromebook Repair Experts",
    serviceType: "Laptop Repair",
    heroDescription: "From cracked screens to dead batteries, overheating issues to keyboard failures—we repair all Windows laptops and Chromebooks.",
    heroImage: null,
    services: [
      { icon: "Monitor", name: "Screen Replacement", description: "We replace LCD and LED screens on all laptop brands and sizes." },
      { icon: "Battery", name: "Battery Replacement", description: "Restore your laptop's portability with a new battery." },
      { icon: "Keyboard", name: "Keyboard Replacement", description: "Broken keys, liquid damage, or unresponsive keyboard." },
      { icon: "Zap", name: "Charging Port Repair", description: "Fix loose or damaged DC jacks and USB-C charging ports." },
      { icon: "Fan", name: "Overheating & Fan Repair", description: "Clean, repair, or replace cooling systems." },
      { icon: "HardDrive", name: "SSD & RAM Upgrades", description: "Speed up your laptop with an SSD upgrade or additional RAM." },
      { icon: "Wrench", name: "Hinge Repair", description: "Loose or broken hinges? We repair and reinforce laptop hinges." },
      { icon: "Cpu", name: "Motherboard Repair", description: "Component-level motherboard repair for power issues or no display." }
    ],
    advantagePillars: [
      { icon: "Monitor", title: "All Brands Welcome", description: "We service Asus, Acer, Lenovo, HP, Dell, Toshiba, Chromebooks, and more." },
      { icon: "HardDrive", title: "Upgrade Specialists", description: "SSD and RAM upgrades to breathe new life into your existing laptop." },
      { icon: "Cpu", title: "Component-Level Repair", description: "Advanced motherboard diagnostics and micro-soldering." },
      { icon: "Battery", title: "Warranty on Every Repair", description: "Screen repairs from 30 days to lifetime. 90-day battery warranty. Most other repairs include lifetime warranty." }
    ],
    modelCategories: [
      { title: "Asus", models: ["ROG Zephyrus","ROG Strix","ZenBook","ZenBook Pro","VivoBook","TUF Gaming","ProArt StudioBook","Chromebook"], description: "Gaming, ultrabook, and budget laptop repairs." },
      { title: "Acer", models: ["Aspire","Swift","Spin","Nitro 5","Predator Helios","Predator Triton","TravelMate","Chromebook"], description: "Full range from budget to gaming laptops." },
      { title: "Lenovo", models: ["ThinkPad X1","ThinkPad T Series","ThinkPad L Series","IdeaPad","IdeaPad Flex","Legion","Yoga","Chromebook Duet"], description: "Business, consumer, and gaming laptops." },
      { title: "HP", models: ["Spectre x360","Envy","Pavilion","EliteBook","ProBook","Omen","Victus","Chromebook"], description: "Premium ultrabooks to gaming machines." },
      { title: "Dell", models: ["XPS 13","XPS 15","XPS 17","Inspiron","Latitude","Precision","Alienware","Chromebook"], description: "Consumer, business, and workstation laptops." },
      { title: "Other Brands", models: ["Toshiba/Dynabook","MSI","Razer Blade","Samsung Galaxy Book","LG Gram","Huawei MateBook","Google Pixelbook"], description: "We service virtually any Windows laptop or Chromebook." }
    ],
    models: ["Asus ROG Zephyrus","Asus ROG Strix","Asus ZenBook","Asus VivoBook","Asus TUF Gaming","Acer Aspire","Acer Swift","Acer Nitro 5","Acer Predator Helios","Lenovo ThinkPad","Lenovo IdeaPad","Lenovo Legion","Lenovo Yoga","HP Spectre x360","HP Envy","HP Pavilion","HP Omen","Dell XPS","Dell Inspiron","Dell Latitude","Dell Alienware","Toshiba Dynabook","MSI Gaming","Razer Blade","Samsung Galaxy Book","LG Gram","Chromebook (All Brands)"],
    modelsDescription: "We service all major laptop brands. Don't see your specific model? Contact us.",
    faqs: [
      { question: "How long does a laptop screen replacement take?", answer: "Most laptop screen replacements can be completed within 1-2 hours if we have the part in stock." },
      { question: "Can you upgrade my laptop's RAM and SSD?", answer: "Yes! We perform RAM and SSD upgrades on most laptops." },
      { question: "My laptop won't turn on. Can you fix it?", answer: "We can diagnose power issues ranging from simple battery/charger problems to complex motherboard failures." },
      { question: "Do you repair Chromebooks?", answer: "Absolutely! We service all Chromebook brands." },
      { question: "Is it worth repairing my old laptop?", answer: "It depends on the repair cost vs. the laptop's value. We provide honest assessments." }
    ],
    pricingMicroCopy: {
      costDriver: "Laptop repair costs vary widely based on screen size, resolution, and internal design. Manufacturers like <a href='https://support.lenovo.com/ca/en/' target='_blank' rel='noopener noreferrer'>Lenovo</a> and <a href='https://support.hp.com/ca-en' target='_blank' rel='noopener noreferrer'>HP</a> provide support documentation.",
      priceShock: "Many customers are surprised when a laptop screen replacement costs nearly as much as a budget laptop. <a href='https://www.ifixit.com/Search?query=laptop+repair+guide' target='_blank' rel='noopener noreferrer'>iFixit's laptop repair guides</a> rate repairability across brands.",
      advisory: "If the repair cost approaches or exceeds your laptop's current value, we'll explain that honestly.",
      fallback: "When repair isn't cost-effective, data recovery is often still possible."
    },
    serviceAreaNote: "Serving St. Vital, Thompson, and surrounding Manitoba communities."
  },
  {
    slug: "surface",
    deviceName: "Microsoft Surface",
    metaTitle: "Microsoft Surface Repair in Manitoba | MobileTechLab",
    metaDescription: "Expert Microsoft Surface repair services in Winnipeg and Winkler. Screen replacement, battery replacement, charging issues, data recovery, and liquid damage repair.",
    tagline: "Expert Surface Repair Services",
    serviceType: "Tablet Repair",
    heroDescription: "Professional Microsoft Surface repair services in Winnipeg and Winkler. Screen replacement, battery issues, charging problems, data recovery, and liquid damage repair for all Surface Pro, Laptop, and Book models.",
    services: [
      { icon: "Monitor", name: "Screen Replacement", description: "Fix cracked or malfunctioning Surface Pro, Laptop, and Book displays." },
      { icon: "Battery", name: "Battery Replacement", description: "Restore your Surface's battery life—specialized integrated battery service." },
      { icon: "Plug", name: "Charging Issues", description: "Resolve Surface Connect port, USB-C charging, and power connectivity issues." },
      { icon: "Database", name: "Data Recovery", description: "Professional data recovery from damaged or non-booting Surface devices." },
      { icon: "Droplets", name: "Liquid Damage", description: "Expert liquid damage repair for water-damaged Surface devices." },
      { icon: "PenTool", name: "Surface Pen Issues", description: "Diagnose and resolve Surface Pen connectivity and digitizer problems." }
    ],
    advantagePillars: [
      { icon: "Award", title: "Surface Specialists", description: "Winnipeg and Winkler's Microsoft Surface repair experts." },
      { icon: "Laptop", title: "All Surface Models", description: "From Surface Pro 11 to legacy Surface Pro 3." },
      { icon: "Briefcase", title: "Business & Enterprise", description: "Quick turnaround for business-critical Surface device repairs." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty." }
    ],
    modelCategories: [
      { title: "Surface Pro", models: ["Surface Pro 11","Surface Pro 10","Surface Pro 9","Surface Pro 8","Surface Pro 7+","Surface Pro 7","Surface Pro 6","Surface Pro 5","Surface Pro 4","Surface Pro 3"], description: "All Surface Pro tablet generations." },
      { title: "Surface Laptop", models: ["Surface Laptop 7","Surface Laptop 6","Surface Laptop 5","Surface Laptop 4","Surface Laptop 3","Surface Laptop 2","Surface Laptop Studio 2","Surface Laptop Studio"], description: "Traditional laptop and Studio repairs." },
      { title: "Surface Go", models: ["Surface Go 4","Surface Go 3","Surface Go 2","Surface Go"], description: "Compact Surface Go repairs." },
      { title: "Surface Book", models: ["Surface Book 3","Surface Book 2","Surface Book"], description: "Detachable Surface Book repairs." }
    ],
    models: ["Surface Pro 11","Surface Pro 10","Surface Pro 9","Surface Pro 8","Surface Pro 7+","Surface Pro 7","Surface Pro 6","Surface Pro 5","Surface Pro 4","Surface Pro 3","Surface Pro 2","Surface Pro","Surface Laptop 7","Surface Laptop 6","Surface Laptop 5","Surface Laptop 4","Surface Laptop 3","Surface Laptop 2","Surface Laptop","Surface Laptop Studio 2","Surface Laptop Studio","Surface Laptop Go 3","Surface Laptop Go 2","Surface Laptop Go","Surface Book 3","Surface Book 2","Surface Book","Surface Go 4","Surface Go 3","Surface Go 2","Surface Go","Surface Studio 2+","Surface Studio 2","Surface Studio"],
    modelsDescription: "We repair all Microsoft Surface models and generations.",
    faqs: [
      { question: "How long does a Microsoft Surface screen replacement take?", answer: "Most Surface screen replacements are completed within 2-4 hours." },
      { question: "Can you replace the battery in a Surface device?", answer: "Yes! Surface devices have integrated batteries requiring specialized tools." },
      { question: "Is data recovery possible from a damaged Surface?", answer: "In most cases, yes." },
      { question: "Do you repair Surface Pro and Surface Laptop models?", answer: "Absolutely! We repair all Microsoft Surface models." },
      { question: "What if my Surface has liquid damage?", answer: "Bring it in immediately—quick action increases recovery chances." },
      { question: "Do you offer service in Winkler too?", answer: "Yes! We provide Surface repair in both Winnipeg and Winkler, Manitoba." }
    ],
    pricingMicroCopy: {
      costDriver: "Surface repair costs are driven by the display and integrated design. Microsoft's <a href='https://support.microsoft.com/en-ca/surface' target='_blank' rel='noopener noreferrer'>official Surface support</a> covers battery diagnostics and firmware updates.",
      priceShock: "Many customers are surprised that a Surface screen replacement can cost nearly as much as a budget laptop. <a href='https://www.ifixit.com/Search?query=microsoft+surface+teardown' target='_blank' rel='noopener noreferrer'>iFixit's Surface teardowns</a> show why these are among the most challenging devices to repair.",
      advisory: "If the repair cost approaches your Surface's current value, we'll explain that clearly.",
      fallback: "When repair isn't practical, data recovery or data transfer is often still possible."
    },
    serviceAreaNote: "Serving Winnipeg (St. Vital, Fort Garry, Garden City, Transcona) and Winkler, MB. Walk-ins welcome or book online."
  },
  {
    slug: "samsung-galaxy-tab",
    deviceName: "Samsung Galaxy Tab",
    metaTitle: "Samsung Galaxy Tab Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab",
    metaDescription: "Professional Samsung Galaxy Tab repair in Winnipeg. Screen replacement, battery, charging port repair for Tab S10, S9, S8, A9, Active & all models. Same-day service available.",
    tagline: "Expert Tablet Repair in Winnipeg",
    serviceType: "Tablet Repair",
    heroDescription: "Winnipeg's <a href='https://www.samsung.com/ca/samsung-experience-store/repair-and-support/' target='_blank' rel='noopener noreferrer'>dedicated Galaxy Tab repair</a> specialists. From the powerful Tab S10 Ultra to everyday Tab A devices.",
    services: [
      { icon: "ScreenShare", name: "Screen Replacement", description: "Fix cracked Galaxy Tab S10, S9, or A series displays." },
      { icon: "Battery", name: "Battery Replacement", description: "Restore all-day battery life to your Galaxy Tab." },
      { icon: "Plug", name: "Charging Port Repair", description: "Repair USB-C ports for reliable charging and DeX connectivity." },
      { icon: "PenTool", name: "S Pen & Digitizer", description: "Fix S Pen connectivity issues and digitizer repairs." },
      { icon: "Volume2", name: "Speaker Repair", description: "Restore AKG-tuned quad speakers." },
      { icon: "Camera", name: "Camera Repair", description: "Fix front and rear cameras for video calls and content creation." }
    ],
    advantagePillars: [
      { icon: "Award", title: "Galaxy Tab Specialists", description: "Dedicated Samsung tablet expertise." },
      { icon: "Tablet", title: "All Tab Generations", description: "From Tab S10 Ultra to legacy Tab S3." },
      { icon: "Briefcase", title: "Enterprise & Active", description: "Rugged Active series and enterprise tablet repair." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty." }
    ],
    modelCategories: [
      { title: "Tab S Flagships", models: ["Tab S10 Ultra","Tab S10+","Tab S10","Tab S9 Ultra","Tab S9+","Tab S9","Tab S9 FE+","Tab S9 FE"], description: "Premium AMOLED tablets." },
      { title: "Tab S Legacy", models: ["Tab S8 Ultra","Tab S8+","Tab S8","Tab S7 FE","Tab S7+","Tab S7","Tab S6 Lite","Tab S6"], description: "Previous generation flagship repairs." },
      { title: "Tab A Series", models: ["Tab A9+","Tab A9","Tab A8","Tab A7 Lite","Tab A7","Tab A 10.1","Tab A 8.0"], description: "Budget-friendly tablet repairs." },
      { title: "Tab Active Rugged", models: ["Tab Active5","Tab Active4 Pro","Tab Active3"], description: "Enterprise rugged tablet specialists." }
    ],
    models: ["Galaxy Tab S10 Ultra","Galaxy Tab S10+","Galaxy Tab S10","Galaxy Tab S9 Ultra","Galaxy Tab S9+","Galaxy Tab S9","Galaxy Tab S9 FE+","Galaxy Tab S9 FE","Galaxy Tab S8 Ultra","Galaxy Tab S8+","Galaxy Tab S8","Galaxy Tab S7 FE","Galaxy Tab S7+","Galaxy Tab S7","Galaxy Tab S6 Lite","Galaxy Tab S6","Galaxy Tab A9+","Galaxy Tab A9","Galaxy Tab A8","Galaxy Tab A7 Lite","Galaxy Tab A7","Galaxy Tab Active5","Galaxy Tab Active4 Pro","Galaxy Tab Active3","Galaxy Tab S5e","Galaxy Tab S4","Galaxy Tab S3","Galaxy Tab A 10.1","Galaxy Tab A 8.0"],
    modelsDescription: "We service all Samsung Galaxy Tab generations including the latest Tab S10 series and rugged Active models.",
    faqs: [
      { question: "How long does Galaxy Tab screen repair take in Winnipeg?", answer: "Most Galaxy Tab screen repairs are completed same-day, typically within 2-4 hours." },
      { question: "Can you fix water-damaged Galaxy Tabs?", answer: "Yes, we offer water damage assessment and repair for all Galaxy Tab devices." },
      { question: "Do you repair Galaxy Tab S Pen functionality?", answer: "Absolutely! We diagnose and repair S Pen connectivity issues." },
      { question: "Is this different from your Samsung phone repair?", answer: "Yes! This page is specifically for Galaxy Tab tablets." },
      { question: "How much does Galaxy Tab repair cost?", answer: "Costs vary by model and repair type. Contact us for a free quote." }
    ],
    pricingMicroCopy: {
      costDriver: "Galaxy Tab repair costs depend heavily on the model. Samsung's <a href='https://www.samsung.com/ca/support/' target='_blank' rel='noopener noreferrer'>official tablet support page</a> provides battery diagnostics.",
      priceShock: "Many customers are surprised that a Tab S series screen can cost nearly as much as a new budget tablet. <a href='https://www.ifixit.com/Search?query=samsung+galaxy+tab+teardown' target='_blank' rel='noopener noreferrer'>iFixit's Galaxy Tab teardowns</a> show the adhesive-sealed designs.",
      advisory: "If the repair cost approaches your tablet's current value, we'll explain that clearly.",
      fallback: "When repair doesn't make sense, data recovery or data transfer is often still possible."
    },
    serviceAreaNote: "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
  },
  // ── WEARABLES ──
  {
    slug: "apple-watch",
    deviceName: "Apple Watch",
    metaTitle: "Apple Watch Repair Winnipeg | Screen & Battery Replacement",
    metaDescription: "Expert Apple Watch repair in Winnipeg. Screen replacement and battery replacement for all Apple Watch models including Series 10, Ultra 2, and SE. Fast, reliable service.",
    tagline: "Apple Watch Repair in Winnipeg, MB",
    serviceType: "Wearable Repair",
    heroDescription: "Cracked screen? Battery draining fast? We repair all Apple Watch models in Winnipeg—from Series 3 to the latest Series 10, SE generations, and Ultra.",
    services: [
      { icon: "Smartphone", name: "Screen Replacement", description: "Cracked or unresponsive Apple Watch display? We replace OLED and LTPO screens on all models." },
      { icon: "Battery", name: "Battery Replacement", description: "Apple Watch not lasting all day? Same-day battery replacement." }
    ],
    advantagePillars: [
      { icon: "Zap", title: "Same-Day Watch Repairs", description: "Most Apple Watch screen and battery repairs completed in 1-2 hours." },
      { icon: "Clock", title: "All Sizes Serviced", description: "We repair all sizes: 38mm, 40mm, 41mm, 42mm, 44mm, 45mm, and 49mm Ultra." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty." }
    ],
    modelCategories: [
      { title: "Apple Watch Series", models: ["Series 10","Series 9","Series 8","Series 7","Series 6","Series 5","Series 4","Series 3"], description: "Standard Apple Watch lineup." },
      { title: "Apple Watch SE", models: ["SE (3rd Gen)","SE (2nd Gen)","SE (1st Gen)"], description: "Budget-friendly Apple Watch repairs." },
      { title: "Apple Watch Ultra", models: ["Ultra 2","Ultra"], description: "Rugged Apple Watch repairs." }
    ],
    models: ["Apple Watch Series 10","Apple Watch Series 9","Apple Watch Series 8","Apple Watch Series 7","Apple Watch Series 6","Apple Watch Series 5","Apple Watch Series 4","Apple Watch Series 3","Apple Watch SE (1st Gen)","Apple Watch SE (2nd Gen)","Apple Watch SE (3rd Gen)","Apple Watch Ultra","Apple Watch Ultra 2"],
    modelsDescription: "We repair all Apple Watch models from the original Series 3 to the latest Series 10, SE generations, and Ultra models.",
    faqs: [
      { question: "How long does Apple Watch screen replacement take in Winnipeg?", answer: "Most Apple Watch screen replacements take 1-2 hours." },
      { question: "Is my Apple Watch still water resistant after repair?", answer: "We take care to maintain water resistance during repairs." },
      { question: "How much does Apple Watch battery replacement cost in Winnipeg?", answer: "Costs vary by model. Contact our Winnipeg locations for a free quote." },
      { question: "Do you repair Apple Watch Ultra in Winnipeg?", answer: "Yes! We repair Apple Watch Ultra and Ultra 2." },
      { question: "How do I know if my Apple Watch battery needs replacing?", answer: "Signs include rapid battery drain, unexpected shutdowns, or not lasting a full day." }
    ],
    pricingMicroCopy: {
      costDriver: "Apple Watch repair costs depend on the model. Apple's <a href='https://support.apple.com/en-ca/108055' target='_blank' rel='noopener noreferrer'>battery health documentation</a> explains how to check maximum capacity.",
      priceShock: "Many customers are surprised that an Apple Watch screen can cost nearly as much as a new SE model. <a href='https://www.ifixit.com/Search?query=apple+watch+teardown' target='_blank' rel='noopener noreferrer'>iFixit's Apple Watch teardowns</a> reveal the precision-intensive process.",
      advisory: "If the repair cost approaches the value of your Apple Watch, we'll explain your options.",
      fallback: "Unlike phones, Apple Watch data is typically synced to your iPhone, so data loss is rarely a concern."
    },
    serviceAreaNote: "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
  },
  // ── CONSOLES ──
  {
    slug: "xbox",
    deviceName: "Xbox",
    metaTitle: "Xbox Repair Winnipeg | Series X & Controller Fix | Mobile Tech Lab",
    metaDescription: "Xbox repair in Winnipeg. Overheating, HDMI port, disc drive, controller repair for Xbox Series X, Series S, One & 360. Console specialists.",
    tagline: "Xbox Repair Specialists in Winnipeg",
    h1: "Xbox Repair Winnipeg",
    serviceType: "Console Repair",
    heroDescription: "Xbox not cooperating? We repair a wide range of Xbox issues across all major models, including HDMI port damage, power or no-power problems, overheating, disc drive issues, and common controller repairs such as stick drift, charging port damage, button issues, or sync problems.",
    services: [
      { icon: "Fan", name: "Overheating Repair", description: "Clean and service cooling systems to fix Xbox overheating." },
      { icon: "Plug", name: "HDMI Port Repair", description: "Replace damaged HDMI ports—no signal issues fixed. Xbox HDMI repairs involve board-level work." },
      { icon: "Power", name: "No Power Issues", description: "Diagnose and repair Xbox power supply and boot problems." },
      { icon: "Disc", name: "Disc Drive Repair", description: "Fix disc reading issues and drive replacements." },
      { icon: "Gamepad2", name: "Controller Repair", description: "Fix Xbox controller stick drift, bumper issues, charging ports, button failures, and sync problems." },
      { icon: "HardDrive", name: "Storage Upgrade", description: "Upgrade internal storage for more game capacity." }
    ],
    advantagePillars: [
      { icon: "Award", title: "Xbox Specialists", description: "Winnipeg's Xbox Series X, Series S, and One repair experts." },
      { icon: "Gamepad2", title: "Elite Controller Pros", description: "Specialized in Xbox Elite controller repairs." },
      { icon: "Zap", title: "Console Repair Pros", description: "HDMI port micro-soldering and board-level repairs. Many can be completed same day." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Lifetime warranty on most Xbox and controller repairs." }
    ],
    modelCategories: [
      { title: "Xbox Series", models: ["Xbox Series X","Xbox Series S"], description: "Current generation Xbox consoles." },
      { title: "Xbox One", models: ["Xbox One X","Xbox One S","Xbox One S All-Digital","Xbox One (Original)"], description: "Previous generation Xbox One family." },
      { title: "Controllers", models: ["Xbox Wireless Controller (Series X|S)","Xbox Elite Series 2","Xbox Elite Controller","Xbox One Controller"], description: "Standard and Elite controller repairs." },
      { title: "Xbox 360", models: ["Xbox 360 E","Xbox 360 S","Xbox 360 (Original)"], description: "Legacy Xbox 360 repairs." }
    ],
    models: ["Xbox Series X","Xbox Series S","Xbox One X","Xbox One S","Xbox One S All-Digital","Xbox One (Original)","Xbox 360 E","Xbox 360 S","Xbox 360 (Original)","Xbox Wireless Controller (Series X|S)","Xbox Elite Wireless Controller Series 2","Xbox Elite Wireless Controller","Xbox One Controller"],
    modelsDescription: "We repair all Xbox consoles including Series X, Series S, One, and 360, plus Elite and standard controllers.",
    faqs: [
      { question: "Can you fix Xbox Series X overheating?", answer: "Yes! We clean dust buildup, replace thermal paste, and ensure proper airflow." },
      { question: "Do you repair Xbox controller drift?", answer: "Yes, we repair analog stick drift on all Xbox controllers including Elite controllers." },
      { question: "Can you fix Xbox HDMI port?", answer: "Yes, HDMI port replacement is a specialty—we use micro-soldering." },
      { question: "Do you repair Xbox Elite controllers?", answer: "Yes, we service Elite controllers including stick drift, bumper issues, paddle problems." },
      { question: "My Xbox won't turn on—can you fix it?", answer: "Yes, we diagnose and repair power issues including power supply replacement and board-level repairs." }
    ],
    pricingMicroCopy: {
      costDriver: "Xbox repair costs depend on the issue—simple fixes like thermal paste are affordable, while HDMI port repairs involve board-level soldering. Microsoft's <a href='https://support.xbox.com/en-CA/help/hardware-network/console/console-wont-power-on' target='_blank' rel='noopener noreferrer'>Xbox hardware troubleshooting guide</a> covers power and connectivity issues.",
      priceShock: "Many customers are surprised that console repairs can approach a significant portion of the device's value. <a href='https://www.ifixit.com/Search?query=xbox+teardown' target='_blank' rel='noopener noreferrer'>iFixit's Xbox teardowns</a> show the internal layout differences across generations.",
      advisory: "If the repair cost doesn't make financial sense, we'll explain alternatives including trade-in options.",
      fallback: "Your game saves are typically backed up to Xbox Live, so data loss is rarely a concern."
    },
    serviceAreaNote: "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online.",
    extra_sections: {
      hdmi_section: {
        heading: "Xbox HDMI Port Repair Winnipeg",
        description: "Damaged HDMI ports are one of the most common Xbox repairs we see in Winnipeg.",
        symptoms: ["No signal on the TV","Flickering display","Loose HDMI connection","HDMI cable not seating properly"],
        before_after_image: "/assets/repairs/xbox-hdmi-before-after.png",
        before_label: "Broken HDMI Port",
        after_label: "Repaired HDMI Port"
      },
      related_console_repairs: [
        { label: "PlayStation 5 Repair Winnipeg", href: "/repair/ps5" },
        { label: "PlayStation 4 Repair Winnipeg", href: "/repair/ps4" },
        { label: "Nintendo Switch Repair Winnipeg", href: "/repair/nintendo-switch" },
        { label: "Controller Repair Winnipeg", href: "/repair/controller-repair-winnipeg" }
      ],
      console_hub_link: { label: "See all of our console repair services →", href: "/consoles" }
    }
  },
  {
    slug: "ps5",
    deviceName: "PS5",
    metaTitle: "PS5 Repair Winnipeg | PlayStation 5 Fix | Mobile Tech Lab",
    metaDescription: "PS5 repair in Winnipeg. Overheating, HDMI port, disc drive, DualSense controller repair for PlayStation 5. Console repair specialists.",
    tagline: "PlayStation 5 Repair Specialists in Winnipeg",
    serviceType: "Console Repair",
    heroDescription: "PS5 overheating? HDMI not working? DualSense drifting? We're Winnipeg's PlayStation 5 repair specialists. HDMI port damage is the most common PS5 issue we repair—our technicians perform precision board-level micro-soldering.",
    services: [
      { icon: "Fan", name: "Overheating Repair", description: "PS5 overheating? We fully disassemble, deep clean cooling channels, and apply high-performance thermal paste." },
      { icon: "Plug", name: "HDMI Port Repair", description: "Precision board-level micro-soldering to restore broken HDMI ports, damaged pads, and trace damage." },
      { icon: "Disc", name: "Disc Drive Repair", description: "Fix disc reading issues, stuck discs, and drive replacements." },
      { icon: "Gamepad2", name: "DualSense Repair", description: "Fix stick drift, adaptive trigger issues, and buttons on DualSense." },
      { icon: "HardDrive", name: "SSD Upgrade", description: "Install larger NVMe SSD storage for more PS5 games." },
      { icon: "Wifi", name: "Display & Power Issues", description: "PS5 turns on but no display, blue light blinking, console shuts off randomly, not powering on." }
    ],
    advantagePillars: [
      { icon: "Award", title: "PlayStation Specialists", description: "Winnipeg's PS5 and DualSense controller repair experts." },
      { icon: "Fan", title: "Overheating Experts", description: "Thermal paste replacement and cooling system specialists." },
      { icon: "Zap", title: "Console Repair Pros", description: "HDMI port micro-soldering and board-level repairs. Many can be completed same day." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Lifetime warranty on most PS5 and controller repairs." },
      { icon: "Shield", title: "Precision Board-Level Repair", description: "We perform micro-soldering repairs under magnification." }
    ],
    modelCategories: [
      { title: "PS5 Consoles", models: ["PS5 Disc Edition","PS5 Digital Edition","PS5 Slim (Disc)","PS5 Slim Digital","PS5 Pro"], description: "All PlayStation 5 console models." },
      { title: "DualSense Controllers", models: ["DualSense Controller","DualSense Edge Controller"], description: "Stick drift, trigger, and charging port repairs." },
      { title: "Accessories", models: ["PlayStation VR2","Pulse 3D Headset"], description: "VR and audio accessory repairs." }
    ],
    models: ["PlayStation 5 (Disc Edition)","PlayStation 5 Digital Edition","PlayStation 5 Slim (Disc)","PlayStation 5 Slim Digital","PlayStation 5 Pro","DualSense Controller","DualSense Edge Controller","PlayStation VR2"],
    modelsDescription: "We repair all PlayStation 5 models including disc and digital editions, plus DualSense controllers and PSVR2.",
    faqs: [
      { question: "Can you fix PS5 overheating in Winnipeg?", answer: "Yes! We clean dust buildup, replace thermal paste, and ensure proper cooling." },
      { question: "Do you repair DualSense controller stick drift?", answer: "Yes, we repair analog stick drift and adaptive trigger issues, usually within an hour." },
      { question: "Can you fix HDMI port issues on PS5?", answer: "Yes, HDMI port replacement is a specialty—we use micro-soldering." },
      { question: "Do you upgrade PS5 storage?", answer: "Yes, we install larger NVMe SSDs in your PS5." },
      { question: "Can you fix disc drive problems?", answer: "Yes, we diagnose and repair disc drive issues." },
      { question: "How much does PS5 HDMI repair cost in Winnipeg?", answer: "HDMI repair costs depend on the extent of motherboard damage. We provide a clear quote after diagnosing." },
      { question: "Is PS5 HDMI repair done the same day?", answer: "Many HDMI repairs can be completed the same day. Rush service guarantees same-day turnaround." },
      { question: "Why does my PS5 overheat?", answer: "Dust buildup and degraded thermal compound are the most common causes." },
      { question: "Do you offer warranty on PS5 repairs?", answer: "Yes. We offer a lifetime warranty on most PS5 HDMI and controller repairs." }
    ],
    pricingMicroCopy: {
      costDriver: "PS5 repair costs depend on the issue. Sony's <a href='https://www.playstation.com/en-ca/support/hardware/ps5/' target='_blank' rel='noopener noreferrer'>PS5 support centre</a> provides troubleshooting guides.",
      priceShock: "Many customers are surprised that console repairs can approach a significant portion of the device's value. <a href='https://www.ifixit.com/Search?query=ps5+teardown' target='_blank' rel='noopener noreferrer'>iFixit's PS5 teardown</a> reveals the internal layout.",
      advisory: "If the repair cost doesn't make financial sense, we'll explain alternatives including trade-in options.",
      fallback: "Your game saves are typically backed up, so data loss is rarely a concern."
    },
    serviceAreaNote: "Serving all Winnipeg neighborhoods. Also serving customers from Thompson, MB. Walk-ins welcome or book online."
  },
  {
    slug: "ps4",
    deviceName: "PS4",
    metaTitle: "PS4 Repair Winnipeg | PlayStation 4 Fix | Mobile Tech Lab",
    metaDescription: "PS4 repair in Winnipeg. Overheating, HDMI port, disc drive, controller repair for PlayStation 4 Pro, Slim & Original. Console repair specialists.",
    tagline: "PlayStation 4 Repair Specialists in Winnipeg",
    serviceType: "Console Repair",
    heroDescription: "PS4 overheating? HDMI not working? No power? We're Winnipeg's PlayStation 4 repair specialists. HDMI port damage is the most common PS4 issue we repair—our technicians perform precision board-level micro-soldering.",
    services: [
      { icon: "Fan", name: "Overheating Repair", description: "Full disassembly, deep clean, and thermal paste replacement." },
      { icon: "Plug", name: "HDMI Port Repair", description: "Precision board-level micro-soldering to restore broken HDMI ports." },
      { icon: "Power", name: "Display & Power Issues", description: "PS4 turns on but no display, blinking light, shuts off randomly, not powering on." },
      { icon: "Disc", name: "Disc Drive Repair", description: "Fix disc reading issues, ejecting problems, and drive replacements." },
      { icon: "Gamepad2", name: "Controller Repair", description: "Fix DualShock 4 controller drift, buttons, and triggers." },
      { icon: "HardDrive", name: "Hard Drive Upgrade", description: "Upgrade to SSD or larger HDD." }
    ],
    advantagePillars: [
      { icon: "Award", title: "PlayStation Specialists", description: "Winnipeg's PS4 Pro, Slim, and Original repair experts." },
      { icon: "Fan", title: "Overheating Experts", description: "Thermal paste replacement and cooling system specialists." },
      { icon: "Zap", title: "Console Repair Pros", description: "HDMI port micro-soldering and board-level repairs." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Lifetime warranty on most PS4 and controller repairs." },
      { icon: "Shield", title: "Precision Board-Level Repair", description: "We perform micro-soldering repairs under magnification." }
    ],
    modelCategories: [
      { title: "PS4 Consoles", models: ["PlayStation 4 Pro","PlayStation 4 Slim","PlayStation 4 (Original/Fat)"], description: "All PlayStation 4 console generations." },
      { title: "Controllers", models: ["DualShock 4 Controller (V1)","DualShock 4 Controller (V2)"], description: "Stick drift, button, and charging port repairs." },
      { title: "Accessories", models: ["PlayStation VR (Original)","PlayStation Camera"], description: "VR and accessory repairs." }
    ],
    models: ["PlayStation 4 Pro","PlayStation 4 Slim","PlayStation 4 (Original/Fat)","DualShock 4 Controller (V1)","DualShock 4 Controller (V2)","PlayStation VR (Original)"],
    modelsDescription: "We repair all PlayStation 4 models including PS4 Pro, PS4 Slim, and the original PS4.",
    faqs: [
      { question: "Can you fix PS4 overheating in Winnipeg?", answer: "Yes! We clean dust buildup, replace thermal paste, and ensure proper cooling." },
      { question: "Do you repair DualShock 4 controller drift?", answer: "Yes, we repair analog stick drift, usually within an hour." },
      { question: "Can you fix HDMI port issues on PS4?", answer: "Yes, HDMI port replacement is a specialty." },
      { question: "My PS4 won't turn on—can you fix it?", answer: "Yes, we diagnose and repair power issues." },
      { question: "Can you upgrade my PS4 hard drive?", answer: "Yes, we upgrade PS4 to SSD for faster load times." },
      { question: "How much does PS4 HDMI repair cost in Winnipeg?", answer: "Costs depend on the extent of motherboard damage. We provide a clear quote after diagnosing." },
      { question: "Is PS4 HDMI repair done the same day?", answer: "Many HDMI repairs can be completed the same day." },
      { question: "Do you offer warranty on PS4 repairs?", answer: "Yes. Lifetime warranty on most PS4 HDMI and controller repairs." }
    ],
    pricingMicroCopy: {
      costDriver: "PS4 repair costs depend on the issue. Sony's <a href='https://www.playstation.com/en-ca/support/hardware/ps4/' target='_blank' rel='noopener noreferrer'>PS4 support documentation</a> covers troubleshooting.",
      priceShock: "Given the PS4's age, repairs can approach or exceed the console's value. <a href='https://www.ifixit.com/Search?query=ps4+teardown' target='_blank' rel='noopener noreferrer'>iFixit's PS4 teardowns</a> explain why HDMI port replacement requires micro-soldering.",
      advisory: "If the repair cost doesn't make financial sense, we'll explain alternatives including trade-in toward a PS5.",
      fallback: "We may be able to help recover saved game data or transfer your account to a replacement console."
    },
    serviceAreaNote: "Serving all Winnipeg neighborhoods. Also serving customers from Thompson, MB. Walk-ins welcome or book online."
  },
  {
    slug: "nintendo-switch",
    deviceName: "Nintendo Switch",
    metaTitle: "Nintendo Switch Repair Winnipeg | Joy-Con Drift Fix | Mobile Tech Lab",
    metaDescription: "Nintendo Switch repair in Winnipeg. Joy-Con drift, screen, battery, charging port repair for Switch OLED, Switch Lite & original Switch.",
    tagline: "Nintendo Switch Repair Experts in Winnipeg",
    serviceType: "Console Repair",
    heroDescription: "Joy-Con drift driving you crazy? Screen cracked? We fix all Nintendo Switch models in Winnipeg—OLED, original, and Lite.",
    services: [
      { icon: "ScreenShare", name: "Screen Replacement", description: "Replace cracked LCD or OLED screens on all Switch models." },
      { icon: "Gamepad2", name: "Joy-Con Drift Repair", description: "Permanent fix for analog stick drift on Joy-Con controllers." },
      { icon: "Battery", name: "Battery Replacement", description: "Restore battery life for longer portable gaming sessions." },
      { icon: "Plug", name: "Charging Port Repair", description: "Fix USB-C charging port and dock connection issues." },
      { icon: "Volume2", name: "Speaker Repair", description: "Repair built-in speakers and audio issues." },
      { icon: "Wifi", name: "WiFi/Bluetooth Repair", description: "Fix wireless connectivity for online play." }
    ],
    advantagePillars: [
      { icon: "Award", title: "Switch Specialists", description: "Winnipeg's Nintendo Switch and Joy-Con repair experts." },
      { icon: "Gamepad2", title: "Joy-Con Drift Experts", description: "Permanent analog stick fixes—our most common Switch repair." },
      { icon: "Zap", title: "Same-Day Service", description: "Most Joy-Con repairs completed in under an hour." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Screen repair warranties vary by part tier. Lifetime warranty on most other repairs." }
    ],
    modelCategories: [
      { title: "Switch Consoles", models: ["Switch OLED Model","Switch V2 (Red Box)","Switch V1 (Original)","Switch Lite"], description: "All Nintendo Switch console generations." },
      { title: "Joy-Con Controllers", models: ["Joy-Con (Left)","Joy-Con (Right)","Joy-Con Pair"], description: "Joy-Con drift and button repairs." },
      { title: "Accessories", models: ["Pro Controller","Switch Dock"], description: "Pro Controller and dock repairs." }
    ],
    models: ["Nintendo Switch OLED Model","Nintendo Switch (V2 - Red Box)","Nintendo Switch (V1 - Original)","Nintendo Switch Lite","Joy-Con (Left)","Joy-Con (Right)","Joy-Con Pair","Nintendo Switch Pro Controller","Nintendo Switch Dock"],
    modelsDescription: "We repair all Nintendo Switch models including OLED, original, and Lite, plus Joy-Con and Pro controllers.",
    faqs: [
      { question: "Can you fix Joy-Con drift in Winnipeg?", answer: "Yes! Joy-Con drift is our most common Switch repair. Usually completed within an hour." },
      { question: "Do you repair Switch OLED screens?", answer: "Yes, we replace both LCD and OLED screens." },
      { question: "Can you fix a Switch that won't charge?", answer: "Yes, we diagnose and repair charging issues including USB-C port replacement." },
      { question: "Do you repair the Switch dock?", answer: "Yes, we repair common dock issues." },
      { question: "How long does Joy-Con repair take?", answer: "Joy-Con drift repair typically takes 30-60 minutes." }
    ],
    pricingMicroCopy: {
      costDriver: "Nintendo Switch repair costs depend on the issue. Nintendo's <a href='https://www.nintendo.com/en-ca/consumer-support/' target='_blank' rel='noopener noreferrer'>official consumer support</a> outlines warranty coverage.",
      priceShock: "Joy-Con repairs are very affordable, but OLED screen replacements can approach a significant portion of the console's value. <a href='https://www.ifixit.com/Search?query=nintendo+switch+joy-con' target='_blank' rel='noopener noreferrer'>iFixit's Joy-Con teardowns</a> show why drift is so common.",
      advisory: "If the repair cost doesn't make sense, we'll explain alternatives including trade-in options.",
      fallback: "Your game saves are typically backed up to Nintendo Switch Online."
    },
    serviceAreaNote: "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB."
  },
  {
    slug: "steam-deck",
    deviceName: "Steam Deck",
    metaTitle: "Steam Deck Repair Winnipeg | Screen & Joystick Fix | Mobile Tech Lab",
    metaDescription: "Steam Deck repair in Winnipeg. Screen, joystick drift, battery, SSD upgrade for Steam Deck OLED & LCD models. PC gaming handheld specialists.",
    tagline: "Steam Deck Repair in Winnipeg",
    serviceType: "Console Repair",
    heroDescription: "Steam Deck acting up? Screen cracked, stick drift, or need more storage? We're Winnipeg's PC gaming handheld specialists.",
    services: [
      { icon: "ScreenShare", name: "Screen Replacement", description: "Replace cracked LCD or OLED screens on all Steam Deck models." },
      { icon: "Gamepad2", name: "Joystick Drift Repair", description: "Permanent fix for analog stick drift on Steam Deck." },
      { icon: "Battery", name: "Battery Replacement", description: "Restore battery life for extended portable PC gaming." },
      { icon: "HardDrive", name: "SSD Upgrade", description: "Upgrade to larger NVMe storage—512GB, 1TB, 2TB options." },
      { icon: "Plug", name: "Charging Port Repair", description: "Fix USB-C charging and docking issues." },
      { icon: "Fan", name: "Fan Replacement", description: "Replace noisy or failing cooling fans." }
    ],
    advantagePillars: [
      { icon: "Award", title: "Steam Deck Specialists", description: "Winnipeg's PC gaming handheld repair experts." },
      { icon: "Monitor", title: "OLED & LCD Experts", description: "Screen repairs for both Steam Deck OLED and LCD models." },
      { icon: "HardDrive", title: "SSD Upgrade Pros", description: "Storage upgrades with system reinstallation included." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Screen repair warranties vary by part tier. Lifetime warranty on most other repairs." }
    ],
    modelCategories: [
      { title: "Steam Deck OLED", models: ["Steam Deck OLED 1TB","Steam Deck OLED 512GB"], description: "Latest OLED model repairs and upgrades." },
      { title: "Steam Deck LCD", models: ["Steam Deck 512GB","Steam Deck 256GB","Steam Deck 64GB"], description: "Original LCD model repairs." },
      { title: "Accessories", models: ["Steam Deck Dock"], description: "Dock repairs and troubleshooting." }
    ],
    models: ["Steam Deck OLED 1TB","Steam Deck OLED 512GB","Steam Deck 512GB","Steam Deck 256GB","Steam Deck 64GB","Steam Deck Dock"],
    modelsDescription: "We repair all Steam Deck models including OLED and LCD versions, plus storage upgrades.",
    faqs: [
      { question: "Can you fix Steam Deck stick drift in Winnipeg?", answer: "Yes! We replace the analog stick modules, usually within 1-2 hours." },
      { question: "Do you upgrade Steam Deck storage?", answer: "Yes, we upgrade to larger NVMe SSDs (up to 2TB)." },
      { question: "Can you replace Steam Deck OLED screens?", answer: "Yes, we replace both LCD and OLED screens." },
      { question: "Do you fix noisy Steam Deck fans?", answer: "Yes, fan replacement is a common repair." },
      { question: "How long does Steam Deck repair take?", answer: "Most repairs take 1-2 hours if parts are in stock." }
    ],
    pricingMicroCopy: {
      costDriver: "Steam Deck repair costs depend on the issue and model. Valve provides <a href='https://help.steampowered.com/en/faqs/view/69E3-14AF-9764-4C28' target='_blank' rel='noopener noreferrer'>official troubleshooting documentation</a>.",
      priceShock: "Steam Deck OLED screen replacements can approach a significant portion of the device's value. <a href='https://www.ifixit.com/Search?query=steam+deck+teardown' target='_blank' rel='noopener noreferrer'>iFixit's Steam Deck teardowns</a> highlight Valve's design choices.",
      advisory: "If the repair cost doesn't make sense, we'll explain alternatives clearly.",
      fallback: "Your Steam library and saves sync to the cloud, so data loss is rarely a concern."
    },
    serviceAreaNote: "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB."
  },
  {
    slug: "controller-repair-winnipeg",
    deviceName: "Controller",
    metaTitle: "Controller Repair Winnipeg | Xbox & PS5 Controller Repair",
    metaDescription: "Need controller repair in Winnipeg? We fix Xbox and PS5 controller issues including stick drift, broken buttons, charging ports, and connectivity problems.",
    tagline: "Controller Repair in Winnipeg",
    template: "CustomControllerPage",
    serviceType: "Controller Repair",
    heroDescription: "We repair Xbox and PlayStation controllers in Winnipeg. Common controller problems include stick drift, buttons not responding, broken bumpers, or charging ports that stop working.",
    services: [
      { icon: "Crosshair", name: "Stick Drift Repair", description: "Replace worn analog stick modules to restore precise input." },
      { icon: "Gamepad2", name: "Broken Bumper/Trigger", description: "Repair broken bumper or trigger buttons." },
      { icon: "BatteryCharging", name: "Not Charging Fix", description: "Controller not charging? We diagnose and fix charging issues." },
      { icon: "Usb", name: "USB Port Replacement", description: "Replace damaged USB charging ports." },
      { icon: "CircleDot", name: "Unresponsive Buttons", description: "Fix buttons that don't respond or feel stuck." },
      { icon: "Wifi", name: "Connection Issues", description: "Fix controller connection and sync problems." }
    ],
    advantagePillars: [
      { icon: "DollarSign", title: "Save Money", description: "Repairing a worn component costs a fraction of a new controller." },
      { icon: "Clock", title: "Fast Turnaround", description: "Most repairs completed same day." },
      { icon: "Shield", title: "Warranty Included", description: "Warranty coverage on repaired components." },
      { icon: "Wrench", title: "Professional Repair", description: "Precise component-level work by experienced technicians." }
    ],
    modelCategories: [],
    models: [],
    modelsDescription: "",
    faqs: [
      { question: "Can you fix controller stick drift?", answer: "Yes. Stick drift is one of our most common controller repairs." },
      { question: "Do you repair PS5 DualSense controllers?", answer: "Yes. We repair DualSense and DualShock controllers." },
      { question: "How long does controller repair take?", answer: "Most controller repairs can be completed the same day, often within an hour." },
      { question: "Is it worth repairing a controller?", answer: "In most cases, yes. Replacing a worn analog stick or charging port is significantly cheaper than buying a new controller." },
      { question: "Do you repair Xbox Elite controllers?", answer: "Yes. We service Xbox Elite Series 2 controllers." }
    ],
    pricingMicroCopy: {
      costDriver: "Controller repair costs depend on the issue—stick drift fixes are affordable, while Elite controller repairs may cost more due to premium components.",
      priceShock: "Most controller repairs are surprisingly affordable compared to buying a new controller.",
      advisory: "We'll explain costs clearly before starting any repair.",
      fallback: "If repair doesn't make sense, we offer pre-owned controller swaps with trade-in credit."
    },
    serviceAreaNote: "Serving all Winnipeg neighborhoods. Walk-ins welcome or book online.",
    extra_sections: {
      stick_drift_visual: {
        description: "Stick drift happens when worn analog stick components send movement signals even when the joystick is not being touched."
      },
      repair_or_swap: {
        repair_option: { title: "Repair Your Controller", benefits: ["Professional component replacement","Fully tested after repair","Keep your original controller"] },
        swap_option: { title: "Swap For A Pre-Owned Controller", benefits: ["Faster than waiting for a repair","Tested working controller","Pay only the difference"], link: "/trade-in" }
      },
      related_repairs: [
        { label: "PS5 Repair Winnipeg", href: "/repair/ps5" },
        { label: "Xbox Repair Winnipeg", href: "/repair/xbox" },
        { label: "Console Repair Winnipeg", href: "/consoles" }
      ],
      authority_links: {
        sony: "https://support.playstation.com",
        microsoft: "https://support.xbox.com"
      }
    }
  },
  // ── NICHE / LESS COMMON PHONES ──
  {
    slug: "nothing",
    deviceName: "Nothing Phone",
    metaTitle: "Nothing Phone Repair Winnipeg | Glyph & Screen Fix | Mobile Tech Lab",
    metaDescription: "Nothing Phone repair in Winnipeg. Screen, Glyph interface, battery repair for Nothing Phone (2), Phone (1) & CMF devices. New brand expertise.",
    tagline: "Nothing Phone Specialists in Winnipeg",
    heroDescription: "Got a Nothing Phone with a cracked screen or Glyph interface issues? We're Winnipeg's experts in Carl Pei's innovative devices.",
    services: [
      { icon: "ScreenShare", name: "Screen Replacement", description: "Replace cracked Nothing AMOLED displays while preserving the iconic transparent design." },
      { icon: "Lightbulb", name: "Glyph Interface Repair", description: "Fix LED Glyph lighting issues—restore the signature Nothing experience." },
      { icon: "Battery", name: "Battery Replacement", description: "Restore battery life to your Nothing Phone." },
      { icon: "Plug", name: "Charging Port Repair", description: "Fix USB-C and wireless charging issues." },
      { icon: "Volume2", name: "Speaker Repair", description: "Repair stereo speakers for crystal-clear audio." },
      { icon: "Fingerprint", name: "Fingerprint Sensor", description: "Repair in-display fingerprint sensors." }
    ],
    advantagePillars: [
      { icon: "Award", title: "Nothing Specialists", description: "Winnipeg's experts in Carl Pei's innovative Nothing devices." },
      { icon: "Lightbulb", title: "Glyph Interface Experts", description: "Specialized repair for the unique LED Glyph lighting system." },
      { icon: "Rocket", title: "New Brand Pioneers", description: "Early adopters supporting Nothing devices since day one." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs." }
    ],
    modelCategories: [
      { title: "Nothing Phone Series", models: ["Nothing Phone (2a) Plus","Nothing Phone (2a)","Nothing Phone (2)","Nothing Phone (1)"], description: "Full Nothing Phone lineup." },
      { title: "CMF by Nothing", models: ["CMF Phone 1"], description: "Nothing's affordable sub-brand." },
      { title: "Nothing Ear Series", models: ["Nothing Ear (2)","Nothing Ear (1)","Nothing Ear Stick"], description: "Transparent earbud repairs." }
    ],
    models: ["Nothing Phone (2a) Plus","Nothing Phone (2a)","Nothing Phone (2)","Nothing Phone (1)","CMF Phone 1","Nothing Ear (2)","Nothing Ear (1)","Nothing Ear Stick"],
    modelsDescription: "We service all Nothing devices including Nothing Phone (1), (2), (2a) and CMF Phone 1.",
    faqs: [
      { question: "Can you fix the Glyph interface lights on Nothing phones?", answer: "Yes! We're Winnipeg's Glyph interface experts." },
      { question: "Are Nothing phone parts available in Winnipeg?", answer: "As a newer brand, some parts require sourcing time. We can typically obtain parts within 2-5 business days." },
      { question: "Is Nothing a good brand worth repairing?", answer: "Absolutely! Nothing has earned a reputation for innovative design." },
      { question: "Do you repair CMF phones in Winnipeg?", answer: "Yes! We service the CMF Phone 1." },
      { question: "How long does Nothing Phone repair take?", answer: "If parts are in stock, most repairs take 1-2 hours." }
    ],
    pricingMicroCopy: {
      costDriver: "Nothing Phone repair costs depend on the model and parts availability. Nothing's <a href='https://nothing.tech/pages/support' target='_blank' rel='noopener noreferrer'>official support page</a> provides warranty information.",
      priceShock: "Many customers are surprised that Nothing repairs can cost as much as other premium Android devices. <a href='https://www.ifixit.com/Search?query=nothing+phone+teardown' target='_blank' rel='noopener noreferrer'>iFixit's Nothing Phone teardowns</a> reveal the complexity of the transparent design.",
      advisory: "If the repair cost doesn't make sense, we'll explain alternatives clearly.",
      fallback: "When repair isn't practical, data recovery is often still possible."
    },
    serviceAreaNote: "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB."
  },
  {
    slug: "xiaomi",
    deviceName: "Xiaomi",
    metaTitle: "Xiaomi Repair Winnipeg | Redmi & POCO Screen Fix | Mobile Tech Lab",
    metaDescription: "Xiaomi repair specialists in Winnipeg – no local competition! Screen, battery, fast charging repair for Xiaomi 14, 13, Redmi Note, POCO & all models.",
    tagline: "Xiaomi, Redmi & POCO Repair in Winnipeg",
    heroDescription: "Can't find anyone in Winnipeg to repair your Xiaomi? We've got you covered. From flagship Xiaomi 15 Ultra to budget Redmi devices and performance POCO phones.",
    services: [
      { icon: "ScreenShare", name: "Screen Replacement", description: "AMOLED and LCD display replacements for Xiaomi, Redmi, and POCO devices." },
      { icon: "Battery", name: "Battery Replacement", description: "Restore full-day battery life. Same-day replacement for most models." },
      { icon: "Zap", name: "Fast Charging Repair", description: "HyperCharge 120W, Turbo Charge, and 67W fast charging port repair." },
      { icon: "Camera", name: "Camera Repair", description: "Leica-partnered camera repairs on Xiaomi flagships." },
      { icon: "Volume2", name: "Speaker Repair", description: "Fix speakers, earpieces, and Harman Kardon audio systems." },
      { icon: "Plug", name: "Port & Connector Repair", description: "USB-C port, SIM tray, and headphone jack repairs." }
    ],
    advantagePillars: [
      { icon: "Award", title: "Winnipeg's Xiaomi Specialists", description: "Most local shops turn away Xiaomi devices. We've invested in parts sourcing and training." },
      { icon: "Package", title: "Parts We Can Source", description: "We maintain supplier relationships for Xiaomi, Redmi, and POCO parts." },
      { icon: "Zap", title: "HyperCharge Experts", description: "We diagnose and repair 120W HyperCharge, 67W Turbo Charge, and all fast charging systems." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs." }
    ],
    modelCategories: [
      { title: "Xiaomi Flagship", models: ["Xiaomi 15 Ultra","Xiaomi 15 Pro","Xiaomi 15","Xiaomi 14 Ultra","Xiaomi 14 Pro","Xiaomi 14","Xiaomi 13 Ultra","Xiaomi 13 Pro","Xiaomi 13"], description: "Premium Xiaomi phones with Leica cameras." },
      { title: "Redmi Note Series", models: ["Redmi Note 14 Pro+","Redmi Note 14 Pro","Redmi Note 14","Redmi Note 13 Pro+","Redmi Note 13 Pro","Redmi Note 13","Redmi Note 12 Pro+","Redmi Note 12 Pro","Redmi Note 12","Redmi Note 11 Pro+","Redmi Note 11"], description: "Popular mid-range lineup." },
      { title: "POCO Series", models: ["POCO F7 Ultra","POCO F7 Pro","POCO F7","POCO F6 Pro","POCO F6","POCO X7 Pro","POCO X7","POCO X6 Pro","POCO X6","POCO M7 Pro","POCO M7"], description: "Performance-focused POCO repairs." },
      { title: "Redmi & Mix Fold", models: ["Redmi K80 Pro","Redmi K80","Redmi K70 Ultra","Redmi 15 5G","Redmi 14C","Xiaomi Mix Fold 3","Xiaomi Mix Fold 2","Xiaomi Mix 4"], description: "Budget Redmi devices and foldable Mix repairs." }
    ],
    models: ["Xiaomi 17 Pro Max","Xiaomi 15 Ultra","Xiaomi 15 Pro","Xiaomi 15","Xiaomi 14 Ultra","Xiaomi 14 Pro","Xiaomi 14","Mi 11 Pro","Mi 11 5G","Redmi Note 14 Pro Plus 5G","Redmi Note 14 Pro 5G","Redmi Note 14 5G","Redmi Note 13 Pro+","Redmi Note 13 Pro","Redmi Note 13","Redmi Note 12 Pro+","Redmi Note 12 Pro","Redmi Note 12","Poco F7 Ultra","Poco F7 Pro","Poco F7","Poco F6 Pro","Poco F6","Poco X7 Pro","Poco X7","Poco X6 Pro","Poco M7 Pro","Black Shark 5 Pro","Xiaomi Mix Fold 3","Xiaomi Mix Fold 2"],
    modelsDescription: "We repair all Xiaomi, Redmi, and POCO devices.",
    faqs: [
      { question: "Do you repair Xiaomi phones in Winnipeg?", answer: "Yes! We're one of the few repair shops in Winnipeg that services Xiaomi, Redmi, and POCO devices." },
      { question: "How long does Xiaomi screen repair take in Winnipeg?", answer: "Most Xiaomi screen replacements are completed same-day, typically within 2-3 hours." },
      { question: "Can you fix Xiaomi HyperCharge issues?", answer: "Yes, we diagnose and repair HyperCharge 120W and all fast charging problems." },
      { question: "Are Xiaomi parts available in Winnipeg?", answer: "We maintain supplier relationships for Xiaomi parts." },
      { question: "Do you repair POCO and Redmi phones?", answer: "Absolutely! POCO and Redmi are Xiaomi sub-brands. We service all models." }
    ],
    pricingMicroCopy: {
      costDriver: "Xiaomi repair costs vary widely. Xiaomi's <a href='https://www.mi.com/global/support' target='_blank' rel='noopener noreferrer'>global support portal</a> provides battery health guidance.",
      priceShock: "Many customers expect Xiaomi repairs to be cheap, but flagships can cost as much as Samsung. <a href='https://www.ifixit.com/Search?query=xiaomi+teardown' target='_blank' rel='noopener noreferrer'>iFixit's Xiaomi teardowns</a> show the complexity.",
      advisory: "If the repair cost approaches your device's value, we'll explain that clearly.",
      fallback: "When repair doesn't make sense, data recovery is often still possible."
    },
    serviceAreaNote: "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB."
  },
  {
    slug: "vivo",
    deviceName: "Vivo",
    metaTitle: "Vivo Repair Winnipeg | X Series & iQOO Fix | Mobile Tech Lab",
    metaDescription: "Vivo phone repair in Winnipeg. Screen, battery, camera repair for Vivo X100, V30, Y series & iQOO gaming phones. Growing brand specialists.",
    tagline: "Vivo & iQOO Repair in Winnipeg",
    heroDescription: "From the ZEISS-equipped X100 flagship to iQOO gaming phones, we <a href='https://www.vivo.com/en/support' target='_blank' rel='noopener noreferrer'>repair all Vivo devices</a> in Winnipeg.",
    services: [
      { icon: "ScreenShare", name: "Screen Replacement", description: "Replace AMOLED displays on Vivo X100, V30, and all Vivo devices." },
      { icon: "Battery", name: "Battery Replacement", description: "Restore battery life with FlashCharge compatibility—up to 120W charging preserved." },
      { icon: "Plug", name: "Charging Port Repair", description: "Fix FlashCharge and USB-C port issues." },
      { icon: "Camera", name: "Camera Repair", description: "Repair ZEISS-partnered cameras on flagship Vivo X series." },
      { icon: "Volume2", name: "Speaker Repair", description: "Fix Hi-Res Audio certified speakers." },
      { icon: "Fingerprint", name: "Fingerprint Sensor", description: "Repair in-display fingerprint sensors." }
    ],
    advantagePillars: [
      { icon: "Award", title: "Vivo & iQOO Specialists", description: "Winnipeg's experts in Vivo phones and iQOO gaming devices." },
      { icon: "TrendingUp", title: "Growing Brand Specialists", description: "Early adopters supporting Vivo's expansion in Canada." },
      { icon: "Gamepad2", title: "iQOO Gaming Experts", description: "Specialized in iQOO gaming phone repairs and cooling systems." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs." }
    ],
    modelCategories: [
      { title: "X Series Flagships", models: ["X100 Pro","X100","X90 Pro+","X90 Pro","X90","X80 Pro","X80"], description: "Premium X series with ZEISS camera partnership." },
      { title: "V Series", models: ["V30 Pro","V30","V29 Pro","V29"], description: "Portrait-focused V series." },
      { title: "Y Series", models: ["Y100","Y78","Y56","Y36"], description: "Budget-friendly Y series." },
      { title: "iQOO Gaming", models: ["iQOO 12 Pro","iQOO 12","iQOO 11","iQOO Neo 9"], description: "High-performance gaming phones." },
      { title: "Foldables", models: ["X Fold 3 Pro","X Fold 3","X Fold 2","X Flip"], description: "Foldable screen and hinge repairs." }
    ],
    models: ["Vivo X100 Pro","Vivo X100","Vivo X90 Pro+","Vivo X90 Pro","Vivo X90","Vivo X80 Pro","Vivo X80","Vivo X Fold 3 Pro","Vivo X Fold 3","Vivo X Fold 2","Vivo X Flip","Vivo V30 Pro","Vivo V30","Vivo V29 Pro","Vivo V29","Vivo Y100","Vivo Y78","Vivo Y56","Vivo Y36","iQOO 12 Pro","iQOO 12","iQOO 11","iQOO Neo 9"],
    modelsDescription: "We repair all Vivo phones including X series, V series, Y series, X Fold foldables, and iQOO gaming devices.",
    faqs: [
      { question: "Do you repair Vivo phones in Winnipeg?", answer: "Yes! We're Winnipeg's Vivo and iQOO specialists." },
      { question: "Can you fix FlashCharge fast charging issues?", answer: "Absolutely! We diagnose and repair FlashCharge issues from 44W to 120W." },
      { question: "Do you repair Vivo foldable phones?", answer: "Yes, we service the Vivo X Fold and X Flip foldable devices." },
      { question: "Are Vivo parts available in Winnipeg?", answer: "We can source parts for most Vivo models." },
      { question: "Do you repair iQOO gaming phones?", answer: "Yes! We're experts in all iQOO models." }
    ],
    pricingMicroCopy: {
      costDriver: "Vivo repair costs vary by model. Vivo's <a href='https://www.vivo.com/en/support' target='_blank' rel='noopener noreferrer'>official support centre</a> provides battery care tips.",
      priceShock: "Many customers are surprised that flagship Vivo repairs can cost as much as Samsung or iPhone repairs. <a href='https://www.ifixit.com/Search?query=smartphone+repair+guide' target='_blank' rel='noopener noreferrer'>iFixit's smartphone repair resources</a> help understand AMOLED complexity.",
      advisory: "If the repair cost doesn't make sense, we'll explain alternatives clearly.",
      fallback: "When repair isn't practical, data recovery is often still possible."
    },
    serviceAreaNote: "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB."
  },
  {
    slug: "tcl",
    deviceName: "TCL",
    metaTitle: "TCL Phone Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab",
    metaDescription: "TCL phone repair in Winnipeg. Screen, battery, charging port repair for TCL 50, 40, 30 series & tablets. Budget device specialists.",
    tagline: "TCL Device Repair in Winnipeg",
    heroDescription: "TCL makes great budget phones, and we're here to keep them running in Winnipeg. From the TCL 50 series to tablets, we provide <a href='https://support.tcl.com/us/self-repair-options' target='_blank' rel='noopener noreferrer'>affordable repairs for all TCL devices</a>.",
    services: [
      { icon: "ScreenShare", name: "Screen Replacement", description: "Replace cracked or damaged TCL NXTVISION screens in Winnipeg." },
      { icon: "Battery", name: "Battery Replacement", description: "Restore battery life to your TCL phone or tablet." },
      { icon: "Plug", name: "Charging Port Repair", description: "Fix USB-C charging port issues." },
      { icon: "Camera", name: "Camera Repair", description: "Repair front and rear cameras on TCL devices." },
      { icon: "Volume2", name: "Speaker Repair", description: "Fix speakers and audio quality issues." },
      { icon: "Wifi", name: "Connectivity Repair", description: "Resolve WiFi, Bluetooth, and cellular issues." }
    ],
    advantagePillars: [
      { icon: "Award", title: "TCL Specialists", description: "Winnipeg's experts in TCL phones and tablets." },
      { icon: "DollarSign", title: "Budget Device Experts", description: "Affordable repairs matching TCL's value-focused pricing." },
      { icon: "Tablet", title: "Phone & Tablet Service", description: "We repair both TCL phones and Tab tablets." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs." }
    ],
    modelCategories: [
      { title: "TCL 50 Series", models: ["TCL 50 XL 5G","TCL 50 SE","TCL 50 XE"], description: "Latest TCL 50 series with 5G." },
      { title: "TCL 40 Series", models: ["TCL 40 NxtPaper","TCL 40 XL","TCL 40 XE","TCL 40 SE"], description: "Popular 40 series including NxtPaper display." },
      { title: "TCL 30 Series", models: ["TCL 30 XL","TCL 30 XE 5G","TCL 30 SE","TCL 30 V 5G"], description: "Reliable 30 series budget phones." },
      { title: "TCL Tablets", models: ["TCL Tab 10s","TCL Tab 8"], description: "TCL tablet repairs." }
    ],
    models: ["TCL 50 XL 5G","TCL 50 SE","TCL 50 XE","TCL 40 NxtPaper","TCL 40 XL","TCL 40 XE","TCL 40 SE","TCL 30 XL","TCL 30 XE 5G","TCL 30 SE","TCL 30 V 5G","TCL 20 Pro 5G","TCL 20 SE","TCL 20S","TCL Stylus 5G","TCL Tab 10s","TCL Tab 8","TCL A3X","TCL A3","TCL Ion X"],
    modelsDescription: "We repair all TCL phones and tablets including the 50, 40, 30, and 20 series.",
    faqs: [
      { question: "Do you repair TCL phones in Winnipeg?", answer: "Yes! TCL makes quality budget phones, and we service all models." },
      { question: "Is TCL repair worth it?", answer: "Often yes! TCL devices are budget-friendly, and our repair costs are proportionally affordable." },
      { question: "Are TCL parts available in Winnipeg?", answer: "We can source parts for most TCL models." },
      { question: "Do you repair TCL tablets too?", answer: "Yes! We service TCL Tab devices." },
      { question: "How long does TCL repair take?", answer: "Most repairs are completed same-day if parts are in stock." }
    ],
    pricingMicroCopy: {
      costDriver: "TCL repair costs are generally affordable. TCL's <a href='https://www.tcl.com/ca/en/support' target='_blank' rel='noopener noreferrer'>official support page</a> provides model-specific troubleshooting.",
      priceShock: "TCL owners are often pleasantly surprised that repairs are more affordable than other brands. <a href='https://www.ifixit.com/Right-to-Repair' target='_blank' rel='noopener noreferrer'>iFixit's repairability advocacy</a> highlights why budget devices benefit most from repair.",
      advisory: "For budget TCL devices, repair almost always makes financial sense.",
      fallback: "When repair doesn't make sense, data recovery is often still possible."
    },
    serviceAreaNote: "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB."
  },
  {
    slug: "zte",
    deviceName: "ZTE",
    metaTitle: "ZTE Repair Winnipeg | nubia & Blade Screen Fix | Mobile Tech Lab",
    metaDescription: "ZTE phone repair in Winnipeg. Screen, battery, charging repair for ZTE nubia, Red Magic, Blade & Axon series. Rare device specialists.",
    tagline: "ZTE & nubia Repair Specialists in Winnipeg",
    heroDescription: "From nubia Red Magic gaming phones to budget Blade devices, we repair all ZTE phones in Winnipeg. Hard to find parts? We've got the sourcing connections.",
    services: [
      { icon: "ScreenShare", name: "Screen Replacement", description: "Replace cracked ZTE and nubia screens—including Red Magic gaming displays." },
      { icon: "Battery", name: "Battery Replacement", description: "Restore battery life to your ZTE or nubia device." },
      { icon: "Plug", name: "Charging Port Repair", description: "Fix USB-C charging port issues." },
      { icon: "Camera", name: "Camera Repair", description: "Repair under-display and traditional cameras on ZTE devices." },
      { icon: "Volume2", name: "Speaker Repair", description: "Fix dual stereo speakers and audio issues." },
      { icon: "Power", name: "Power Issues", description: "Diagnose and fix power, boot, and cooling system problems." }
    ],
    advantagePillars: [
      { icon: "Award", title: "ZTE & nubia Specialists", description: "Winnipeg's experts in ZTE and nubia gaming devices." },
      { icon: "Gamepad2", title: "Gaming Phone Experts", description: "Specialized in Red Magic cooling systems and gaming features." },
      { icon: "Package", title: "Rare Device Parts", description: "Sourcing network for hard-to-find ZTE and nubia components." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs." }
    ],
    modelCategories: [
      { title: "nubia Gaming Series", models: ["Red Magic 9 Pro","Red Magic 8 Pro","Red Magic 7","Red Magic 6"], description: "Red Magic gaming phones with cooling system expertise." },
      { title: "nubia Flagships", models: ["nubia Z60 Ultra","nubia Z50 Ultra","nubia Z50","nubia Flip","nubia Fold"], description: "Premium nubia flagships and foldables." },
      { title: "Blade Series", models: ["Blade V50","Blade V40","Blade V30","Blade A73","Blade A53 Pro","Blade A33"], description: "Budget-friendly Blade series." },
      { title: "Axon Flagships", models: ["Axon 40 Ultra","Axon 40 Pro","Axon 30 Ultra"], description: "Premium Axon series with under-display camera." }
    ],
    models: ["ZTE nubia Z60 Ultra","ZTE nubia Z50 Ultra","ZTE nubia Z50","ZTE nubia Red Magic 9 Pro","ZTE nubia Red Magic 8 Pro","ZTE nubia Flip","ZTE nubia Fold","ZTE Blade V50","ZTE Blade V40","ZTE Blade V30","ZTE Blade A73","ZTE Blade A53 Pro","ZTE Blade A33","ZTE Axon 40 Ultra","ZTE Axon 40 Pro","ZTE Axon 30 Ultra","ZTE Avid 589","ZTE Cymbal","ZTE Majesty Pro","ZTE Zmax","ZTE Grand X"],
    modelsDescription: "We repair all ZTE devices including nubia gaming phones, Blade series, Axon flagships, and foldables.",
    faqs: [
      { question: "Do you repair ZTE phones in Winnipeg?", answer: "Yes! We're one of the few shops in Winnipeg that services ZTE devices." },
      { question: "Can you repair ZTE nubia Red Magic gaming phones?", answer: "Absolutely! We service all Red Magic models." },
      { question: "Are ZTE and nubia parts available in Winnipeg?", answer: "We can source parts for most ZTE models." },
      { question: "Do you repair ZTE foldable phones?", answer: "Yes! We service the nubia Fold and nubia Flip." },
      { question: "How long does ZTE repair take?", answer: "Most repairs are completed same-day if parts are in stock." }
    ],
    pricingMicroCopy: {
      costDriver: "ZTE repair costs vary by model. ZTE's <a href='https://www.ztedevices.com/en-gl/support/' target='_blank' rel='noopener noreferrer'>global device support page</a> provides firmware updates.",
      priceShock: "nubia and Red Magic repairs can approach premium device pricing. <a href='https://www.ifixit.com/Search?query=gaming+phone+teardown' target='_blank' rel='noopener noreferrer'>iFixit's gaming phone teardowns</a> illustrate the complexity.",
      advisory: "If the repair cost approaches your device's value, we'll explain alternatives.",
      fallback: "When repair doesn't make sense, data recovery is often still possible."
    },
    serviceAreaNote: "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB."
  },
  {
    slug: "blackberry",
    deviceName: "Blackberry",
    metaTitle: "Blackberry Phone Repair Winnipeg | KEY2 & Classic Fix | Mobile Tech Lab",
    metaDescription: "Blackberry repair specialists in Winnipeg. Screen, keyboard, battery repair for KEY2, KEYone, Classic, Passport & all legacy models. We keep discontinued devices running!",
    tagline: "Blackberry Phone Repair in Winnipeg, MB",
    heroDescription: "Still using a Blackberry? We've got you covered in Winnipeg. As Blackberry repair specialists, we maintain parts and expertise for all models.",
    services: [
      { icon: "ScreenShare", name: "Screen Replacement", description: "LCD and touchscreen replacements for KEY2, KEYone, Passport, and all Blackberry models." },
      { icon: "Keyboard", name: "Keyboard Repair", description: "Physical QWERTY keyboard repairs for KEY2, KEYone, Classic, Passport, and Bold series." },
      { icon: "Battery", name: "Battery Replacement", description: "Restore full-day battery life. Same-day replacement for most models." },
      { icon: "Plug", name: "Charging Port Repair", description: "Micro USB and USB-C charging port diagnosis and repair." },
      { icon: "HardDrive", name: "Data Recovery", description: "Recover contacts, messages, and files from damaged or non-booting devices." },
      { icon: "Wifi", name: "Connectivity Repair", description: "WiFi, Bluetooth, and cellular connectivity diagnosis and repair." }
    ],
    advantagePillars: [
      { icon: "Award", title: "Blackberry Specialists", description: "We continue to support Blackberry devices long after others have stopped." },
      { icon: "Package", title: "Legacy Parts Stockpiled", description: "We've stockpiled Blackberry parts and maintain supplier relationships." },
      { icon: "Wrench", title: "QWERTY Keyboard Experts", description: "Specialized in physical keyboard repairs for KEY2, KEYone, Classic, Passport, and Bold." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs." }
    ],
    modelCategories: [
      { title: "Android Blackberry", models: ["KEY2","KEY2 LE","KEYone","Motion","DTEK60","DTEK50","Priv"], description: "Modern Android-powered Blackberry devices." },
      { title: "Blackberry Classic & Passport", models: ["Classic","Passport","Passport Silver Edition"], description: "Iconic QWERTY devices." },
      { title: "Blackberry Bold & Curve", models: ["Bold 9900","Bold 9930","Bold 9790","Curve 9360","Curve 9320","Curve 9310"], description: "Classic Bold and Curve series." },
      { title: "Blackberry Z & Torch", models: ["Z30","Z10","Torch 9810","Torch 9800","Q10","Q5"], description: "Touchscreen and slider models." }
    ],
    models: ["Blackberry KEY2","Blackberry KEY2 LE","Blackberry KEYone","Blackberry Motion","Blackberry DTEK60","Blackberry DTEK50","Blackberry Priv","Blackberry Classic","Blackberry Passport","Blackberry Q10","Blackberry Q5","Blackberry Z30","Blackberry Z10","Blackberry Bold 9900","Blackberry Bold 9930","Blackberry Curve 9360","Blackberry Curve 9320","Blackberry Torch 9810","Blackberry Torch 9800"],
    modelsDescription: "We service all Blackberry models including Android devices and classic Blackberry OS devices.",
    faqs: [
      { question: "Do you repair Blackberry phones in Winnipeg?", answer: "Yes! We're one of the few repair shops still specializing in Blackberry devices." },
      { question: "Are Blackberry parts still available in Winnipeg?", answer: "We've stockpiled common Blackberry parts and maintain supplier relationships." },
      { question: "Can you repair Blackberry QWERTY keyboards?", answer: "Yes! We specialize in physical QWERTY keyboard repairs." },
      { question: "How long does Blackberry repair take in Winnipeg?", answer: "Most repairs are completed same-day, typically within 1-2 hours." },
      { question: "Can you recover data from a dead Blackberry?", answer: "In many cases, yes." }
    ],
    pricingMicroCopy: {
      costDriver: "Blackberry repair costs depend on parts availability—as a discontinued brand, some components are scarce. <a href='https://www.ifixit.com/Search?query=blackberry+repair' target='_blank' rel='noopener noreferrer'>iFixit's Blackberry repair guides</a> provide useful reference.",
      priceShock: "Many customers are surprised that repairing a legacy Blackberry can cost more than expected due to parts scarcity.",
      advisory: "If the repair cost doesn't make sense, we'll explain alternatives.",
      fallback: "When repair isn't practical, data recovery is often still possible."
    },
    serviceAreaNote: "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB."
  },
  {
    slug: "ipod",
    deviceName: "iPod",
    metaTitle: "iPod Repair Winnipeg | Screen, Battery & Data Recovery",
    metaDescription: "Expert iPod repair in Winnipeg. Screen replacement, battery replacement, charging issues, home button repair, and data recovery for all iPod generations. Fast service.",
    tagline: "iPod Repair Experts in Winnipeg",
    heroDescription: "Still rocking your classic iPod? We repair all generations of iPods including Touch, Classic, Nano, Shuffle, and Mini.",
    services: [
      { icon: "Smartphone", name: "Screen Replacement", description: "Cracked or unresponsive iPod display? We replace screens on all models." },
      { icon: "Battery", name: "Battery Replacement", description: "iPod not holding charge? We replace worn batteries." },
      { icon: "Zap", name: "Charging Issues", description: "iPod won't charge or connect? We fix charging port issues." },
      { icon: "CircleDot", name: "Home Button Replacement", description: "Home button unresponsive? We repair and replace home buttons." },
      { icon: "HardDrive", name: "Data Recovery", description: "Lost access to your music and photos? We offer data recovery services." }
    ],
    advantagePillars: [
      { icon: "Award", title: "Legacy Device Specialists", description: "Experts in discontinued Apple devices." },
      { icon: "Database", title: "Data Recovery Experts", description: "Retrieve your music and photos from damaged or aging iPods." },
      { icon: "Clock", title: "Repair vs Replacement Options", description: "We'll help explain whether repair, replacement, or another option makes sense." },
      { icon: "Shield", title: "Warranty on Every Repair", description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs." }
    ],
    modelCategories: [
      { title: "iPod Touch", models: ["iPod Touch (7th Gen)","iPod Touch (6th Gen)","iPod Touch (5th Gen)","iPod Touch (4th Gen)","iPod Touch (3rd Gen)","iPod Touch (2nd Gen)","iPod Touch (1st Gen)"], description: "All iPod Touch generations." },
      { title: "iPod Classic", models: ["iPod Classic (7th Gen)","iPod Classic (6th Gen)","iPod Classic (5th Gen)"], description: "Click wheel iPods with high-capacity storage." },
      { title: "iPod Nano", models: ["iPod Nano (7th Gen)","iPod Nano (6th Gen)","iPod Nano (5th Gen)","iPod Nano (4th Gen)","iPod Nano (3rd Gen)","iPod Nano (2nd Gen)","iPod Nano (1st Gen)"], description: "Compact click wheel and touchscreen models." },
      { title: "iPod Shuffle & Mini", models: ["iPod Shuffle (4th Gen)","iPod Shuffle (3rd Gen)","iPod Shuffle (2nd Gen)","iPod Shuffle (1st Gen)","iPod Mini (2nd Gen)","iPod Mini (1st Gen)"], description: "Ultra-compact and colorful iPod models." }
    ],
    models: ["iPod Touch (7th Gen)","iPod Touch (6th Gen)","iPod Touch (5th Gen)","iPod Touch (4th Gen)","iPod Touch (3rd Gen)","iPod Touch (2nd Gen)","iPod Touch (1st Gen)","iPod Classic (7th Gen)","iPod Classic (6th Gen)","iPod Classic (5th Gen)","iPod Nano (7th Gen)","iPod Nano (6th Gen)","iPod Nano (5th Gen)","iPod Nano (4th Gen)","iPod Nano (3rd Gen)","iPod Nano (2nd Gen)","iPod Nano (1st Gen)","iPod Shuffle (4th Gen)","iPod Shuffle (3rd Gen)","iPod Shuffle (2nd Gen)","iPod Shuffle (1st Gen)","iPod Mini (2nd Gen)","iPod Mini (1st Gen)"],
    modelsDescription: "We repair most iPod models, including iPod Classic, iPod Nano, iPod Touch, and iPod Shuffle.",
    faqs: [
      { question: "Do you still repair older iPod models?", answer: "Yes! We repair all generations of iPods." },
      { question: "Can you recover music from a broken iPod?", answer: "In many cases, yes." },
      { question: "How long does an iPod repair take?", answer: "Most iPod repairs are completed within 1-3 days." },
      { question: "Is it worth repairing my old iPod?", answer: "Many people love their classic iPods for their dedicated music experience." },
      { question: "Do you offer a warranty on iPod repairs?", answer: "Yes! Screen repair warranties vary by part quality tier." }
    ],
    pricingMicroCopy: {
      costDriver: "iPod repair costs depend on the model and parts availability—as a discontinued line, some parts may be limited. Apple's <a href='https://support.apple.com/en-ca/ipod' target='_blank' rel='noopener noreferrer'>iPod support documentation</a> still provides useful guidance.",
      priceShock: "Repairing a legacy device can sometimes cost more than expected due to parts scarcity. <a href='https://www.ifixit.com/Search?query=ipod+classic+teardown' target='_blank' rel='noopener noreferrer'>iFixit's iPod teardowns</a> remain a valuable reference.",
      advisory: "If the repair cost doesn't make sense, we'll explain alternatives.",
      fallback: "When repair isn't practical, data recovery is often still possible."
    },
    serviceAreaNote: "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB."
  },
  {
    slug: "amazon-kindle",
    deviceName: "Amazon Kindle & Fire",
    metaTitle: "Amazon Kindle & Fire Tablet Repair Winnipeg | E-Reader Specialists",
    metaDescription: "Expert Kindle e-reader and Fire tablet repair in Winnipeg. E-Ink screen replacement, battery service, charging port repair. Same-day service available.",
    tagline: "Winnipeg's Kindle & Fire Tablet Repair Experts",
    serviceType: "Tablet Repair",
    heroDescription: "From cracked E-Ink displays to dead batteries, we specialize in Amazon device repairs.",
    services: [
      { icon: "Monitor", name: "Screen Replacement", description: "We replace E-Ink and LCD displays on all Kindle and Fire models." },
      { icon: "Battery", name: "Battery Replacement", description: "Restore your device's battery life for extended reading or streaming." },
      { icon: "Zap", name: "Charging Port Repair", description: "Fix loose or damaged USB-C and micro-USB charging ports." },
      { icon: "Volume2", name: "Speaker Repair", description: "Restore clear audio on your Fire tablet." },
      { icon: "Droplets", name: "Water Damage Recovery", description: "Liquid exposure? We can assess and recover water-damaged devices." },
      { icon: "Wifi", name: "Wi-Fi & Connectivity Issues", description: "Resolve wireless connectivity problems." }
    ],
    advantagePillars: [
      { icon: "Smartphone", title: "Amazon Device Experts", description: "We specialize in Kindle e-readers and Fire tablets." },
      { icon: "Monitor", title: "E-Ink Display Specialists", description: "Expertise in delicate E-Ink screen technology." },
      { icon: "Battery", title: "Extended Battery Life", description: "Quality battery replacements to restore weeks of reading time." },
      { icon: "Fingerprint", title: "Warranty on Every Repair", description: "Screen repairs from 30 days to lifetime. 90-day battery warranty." }
    ],
    modelCategories: [
      { title: "Kindle E-Readers", models: ["Kindle (11th Gen)","Kindle (10th Gen)","Kindle Paperwhite (11th Gen)","Kindle Paperwhite (10th Gen)","Kindle Paperwhite Signature Edition","Kindle Oasis (10th Gen)","Kindle Oasis (9th Gen)","Kindle Scribe"], description: "E-Ink display repairs and battery replacements." },
      { title: "Fire Tablets", models: ["Fire HD 10 (2023)","Fire HD 10 (2021)","Fire HD 10 Plus","Fire HD 8 (2022)","Fire HD 8 (2020)","Fire HD 8 Plus","Fire 7 (2022)","Fire 7 (2019)","Fire Max 11"], description: "LCD screen and hardware repairs." },
      { title: "Kids Editions", models: ["Kindle Kids (2022)","Fire HD 10 Kids","Fire HD 10 Kids Pro","Fire HD 8 Kids","Fire HD 8 Kids Pro","Fire 7 Kids"], description: "Kid-proof case and internal repairs." }
    ],
    models: ["Kindle (11th Gen)","Kindle (10th Gen)","Kindle Paperwhite (11th Gen)","Kindle Paperwhite (10th Gen)","Kindle Paperwhite Signature Edition","Kindle Oasis (10th Gen)","Kindle Oasis (9th Gen)","Kindle Scribe","Fire HD 10 (2023)","Fire HD 10 (2021)","Fire HD 10 Plus","Fire HD 8 (2022)","Fire HD 8 (2020)","Fire HD 8 Plus","Fire 7 (2022)","Fire 7 (2019)","Fire Max 11","Kindle Kids (2022)","Fire HD 10 Kids","Fire HD 10 Kids Pro","Fire HD 8 Kids","Fire HD 8 Kids Pro","Fire 7 Kids"],
    modelsDescription: "We repair all Amazon Kindle e-readers and Fire tablets, including latest generations and discontinued models.",
    faqs: [
      { question: "Can you replace a cracked E-Ink screen on my Kindle?", answer: "Yes! We can replace damaged E-Ink displays on most Kindle models." },
      { question: "How long does a Kindle battery replacement take?", answer: "Most can be completed within 1-2 hours." },
      { question: "My Fire tablet won't charge. Can you fix it?", answer: "Absolutely. Charging port issues are common and we can repair or replace damaged USB ports." },
      { question: "Do you repair older Kindle models?", answer: "We service most Kindle and Fire models. Contact us." },
      { question: "Will I lose my books and content after repair?", answer: "In most cases, your Amazon account content remains intact." }
    ],
    pricingMicroCopy: {
      costDriver: "Kindle and Fire tablet repair costs depend on the device. Amazon's <a href='https://www.amazon.ca/gp/help/customer/display.html?nodeId=GKMQC26VQQMM8XSW' target='_blank' rel='noopener noreferrer'>device support pages</a> cover troubleshooting.",
      priceShock: "An E-Ink screen replacement can approach the cost of a new Kindle. <a href='https://www.ifixit.com/Search?query=kindle+teardown' target='_blank' rel='noopener noreferrer'>iFixit's Kindle teardowns</a> illustrate why E-Ink displays are costly to replace.",
      advisory: "If the repair cost approaches your device's value, we'll explain that clearly.",
      fallback: "Your content is typically tied to your Amazon account and will sync to a new device."
    },
    serviceAreaNote: "Serving St. Vital, Thompson, and surrounding Manitoba communities."
  },
  {
    slug: "sony-xperia",
    deviceName: "Sony Xperia",
    metaTitle: "Sony Xperia Repair Winnipeg | Screen & Camera Fix | Mobile Tech Lab",
    metaDescription: "Sony Xperia repair in Winnipeg. Screen, battery, camera repair for Xperia 1, 5, 10 series & Pro models. Premium device specialists.",
    tagline: "Sony Xperia Phone Repair in Winnipeg, MB",
    heroDescription: "Own a Sony Xperia? We understand these premium devices with their 4K displays and pro-grade cameras. Expert repairs for all Xperia models in Winnipeg.",
    services: [
      { icon: "ScreenShare", name: "Screen Replacement", description: "4K OLED and HDR display replacements for Xperia 1, 5, and 10 series." },
      { icon: "Battery", name: "Battery Replacement", description: "Restore full-day battery life. Same-day replacement for most models." },
      { icon: "Plug", name: "Charging Port Repair", description: "USB-C charging port diagnosis and repair." },
      { icon: "Camera", name: "Camera Repair", description: "Sony Alpha-engineered camera repairs. ZEISS optics and pro-grade sensors." },
      { icon: "Volume2", name: "Speaker Repair", description: "Front-facing stereo speaker repairs." },
      { icon: "Droplets", name: "Water Damage Repair", description: "IP68-rated Xperia water damage diagnosis and repair." }
    ],
    advantagePillars: [
      { icon: "Award", title: "Xperia Specialists in Winnipeg", description: "One of the few shops servicing Sony Xperia devices." },
      { icon: "Package", title: "Parts We Can Source", description: "We maintain supplier relationships for Xperia parts." },
      { icon: "Film", title: "Pro Camera Experts", description: "We service Sony Alpha-derived camera systems and ZEISS optics." },
      { icon: "Award", title: "Warranty on Every Repair", description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty." }
    ],
    modelCategories: [
      { title: "Xperia 1 Series", models: ["Xperia 1 VI","Xperia 1 V","Xperia 1 IV","Xperia 1 III","Xperia 1 II"], description: "Flagship 4K OLED devices." },
      { title: "Xperia 5 Series", models: ["Xperia 5 V","Xperia 5 IV","Xperia 5 III","Xperia 5 II"], description: "Compact flagship lineup." },
      { title: "Xperia 10 Series", models: ["Xperia 10 VI","Xperia 10 V","Xperia 10 IV","Xperia 10 III","Xperia 10 II"], description: "Mid-range Xperia devices." },
      { title: "Xperia Pro & Legacy", models: ["Xperia Pro-I","Xperia Pro","Xperia XZ3","Xperia XZ2","Xperia XZ Premium"], description: "Professional and legacy models." }
    ],
    models: ["Sony Xperia 1 VI","Sony Xperia 1 V","Sony Xperia 1 IV","Sony Xperia 1 III","Sony Xperia 1 II","Sony Xperia 5 V","Sony Xperia 5 IV","Sony Xperia 5 III","Sony Xperia 5 II","Sony Xperia 10 VI","Sony Xperia 10 V","Sony Xperia 10 IV","Sony Xperia 10 III","Sony Xperia 10 II","Sony Xperia Pro-I","Sony Xperia Pro","Sony Xperia XZ3","Sony Xperia XZ2","Sony Xperia XZ Premium","Sony Xperia XZ1","Sony Xperia XA2"],
    modelsDescription: "We repair all Sony Xperia devices including the flagship 1 series, compact 5 series, and mid-range 10 series.",
    faqs: [
      { question: "Do you repair Sony Xperia phones in Winnipeg?", answer: "Yes! We're one of the few repair shops in Winnipeg that specializes in Sony Xperia devices." },
      { question: "Are Sony Xperia parts available in Winnipeg?", answer: "We maintain supplier relationships for Xperia parts. Most available within 3-5 days." },
      { question: "Can you replace 4K Xperia screens?", answer: "Yes, we replace the high-resolution 4K OLED displays on Xperia 1 series." },
      { question: "How long does Xperia screen repair take in Winnipeg?", answer: "Most are completed same-day once parts are available, typically within 1-2 hours." },
      { question: "Is Xperia repair worth it?", answer: "Xperia phones are premium devices with unique features. Repair is often worthwhile." }
    ],
    pricingMicroCopy: {
      costDriver: "Sony Xperia repair costs depend heavily on the model—4K OLED displays are premium components. Sony's <a href='https://www.sony.ca/en/support/smartphones-tablets' target='_blank' rel='noopener noreferrer'>official Xperia support page</a> provides battery care guidance.",
      priceShock: "Many customers are surprised that Xperia flagship repairs can cost as much as iPhone or Samsung repairs. <a href='https://www.ifixit.com/Search?query=sony+xperia+teardown' target='_blank' rel='noopener noreferrer'>iFixit's Xperia teardowns</a> illustrate the engineering complexity.",
      advisory: "If the repair cost approaches your Xperia's current value, we'll explain that clearly.",
      fallback: "When repair doesn't make sense, data recovery is often still possible."
    },
    serviceAreaNote: "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB."
  }
];

// Generate all files
let count = 0;
for (const page of pages) {
  const prompt = buildPrompt(page);
  const filePath = path.join(OUTPUT_DIR, `${page.slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(prompt, null, 2));
  count++;
  console.log(`✓ Generated ${page.slug}.json`);
}

console.log(`\nDone! Generated ${count} repair page JSON prompts.`);
console.log('Note: oppo.json already exists as oppo-repair-astro-prompt.json in the parent directory.');
