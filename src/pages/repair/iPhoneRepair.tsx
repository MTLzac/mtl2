import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ServiceGrid, Service } from "@/components/repair/ServiceGrid";
import { ModelCategory } from "@/components/repair/ModelListGrid";
import { FAQSection, FAQ } from "@/components/repair/FAQSection";
import { LocationCards } from "@/components/repair/LocationCards";
import { RepairWaysToSave } from "@/components/repair/RepairWaysToSave";
import { LiveStatusBadge } from "@/components/repair/LiveStatusBadge";
import { WhyChooseUsExtended } from "@/components/repair/WhyChooseUsExtended";
import { GoogleReviewsHighlight } from "@/components/repair/GoogleReviewsHighlight";
import { LocalTrustSection } from "@/components/repair/LocalTrustSection";
// QuickFacts replaced by inline trust badges row in hero
import { AppleComparisonStrip } from "@/components/repair/iphone/AppleComparisonStrip";
import { IPhonePricingTable } from "@/components/repair/iphone/IPhonePricingTable";
import { AppleVintageSection } from "@/components/repair/iphone/AppleVintageSection";
import { PremiumVsValueCards } from "@/components/repair/iphone/PremiumVsValueCards";
import { IPhoneStickyQuoteBar } from "@/components/repair/iphone/IPhoneStickyQuoteBar";
import { PRIMARY_PHONE } from "@/lib/locations";
import {
  Smartphone,
  Battery,
  Plug,
  Camera,
  Droplets,
  MonitorSmartphone,
  ArrowRight,
  Phone,
  Sparkles,
  ClipboardList,
  MessageSquare,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";

// ============================================
// 1. SERVICES
// ============================================
const SERVICES: Service[] = [
  {
    icon: Smartphone,
    name: "Screen Replacement",
    description:
      "Cracked, shattered, or unresponsive iPhone screens repaired same-day with quality displays. All models from iPhone 4 to iPhone 17 Pro Max. Premium $79–$349 / Value $69–$219 by model.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description:
      "Restore your iPhone's battery health with professional replacement. Genuine Apple battery upgrades available for an additional $100. Most replacements $89–$149.",
  },
  {
    icon: MonitorSmartphone,
    name: "Back Glass Repair",
    description:
      "iPhone back glass cracked? We replace rear glass panels for iPhone 8 and newer models with quality parts. Rear housing replacement $129–$249.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description:
      "iPhone not charging? We repair and replace Lightning and USB-C ports for reliable charging on all models.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description:
      "Front or rear camera issues? We fix focus problems, black screens, and cracked camera lenses on all iPhone models.",
  },
  {
    icon: Droplets,
    name: "Water Damage Repair",
    description:
      "Dropped your iPhone in water? Our technicians assess and repair water-damaged devices with ultrasonic cleaning.",
  },
];

// ============================================
// 2. MODEL CATEGORIES (with pricing)
// ============================================
const MODEL_CATEGORIES: ModelCategory[] = [
  {
    title: "iPhone 17, 16 & 15 Series",
    models: [
      "iPhone 17 Pro Max (Quote)",
      "iPhone 17 Pro (Quote)",
      "iPhone 17 Air (Quote)",
      "iPhone 17 (Quote)",
      "iPhone 16 Pro Max ($349)",
      "iPhone 16 Pro ($299)",
      "iPhone 16 Plus ($279)",
      "iPhone 16 ($259)",
      "iPhone 16e ($179)",
      "iPhone 15 Pro Max ($259)",
      "iPhone 15 Pro ($259)",
      "iPhone 15 Plus ($249)",
      "iPhone 15 ($219)",
    ],
    description:
      "Latest generation with USB-C, Dynamic Island, and A17/A18 chips. Screen repair from $129 (Value) or $219 (Premium). iPhone 17 series quote required. Same-day service on most parts. Save $200–$350 vs Apple Canada.",
  },
  {
    title: "iPhone 14 & 13 Series",
    models: [
      "iPhone 14 Pro Max ($249)",
      "iPhone 14 Pro ($249)",
      "iPhone 14 Plus ($189)",
      "iPhone 14 ($179)",
      "iPhone 13 Pro Max ($199)",
      "iPhone 13 Pro ($199)",
      "iPhone 13 ($169)",
      "iPhone 13 mini ($199)",
    ],
    description:
      "Pro camera systems and A15/A16 chips. Screen repair from $99 (Value) or $169 (Premium). Battery $89–$149. Same-day service on most parts. Save $180–$350 vs Apple Canada.",
  },
  {
    title: "iPhone 12, 11 & X Series",
    models: [
      "iPhone 12 Pro Max ($179)",
      "iPhone 12 Pro ($169)",
      "iPhone 12 ($169)",
      "iPhone 12 mini ($169)",
      "iPhone 11 Pro Max ($159)",
      "iPhone 11 Pro ($179)",
      "iPhone 11 ($139, LCD)",
      "iPhone XS Max ($149)",
      "iPhone XS ($149)",
      "iPhone XR ($149, LCD)",
      "iPhone X ($149)",
    ],
    description:
      "Face ID models with OLED and LCD displays. Screen repair from $99 (Value) or $139 (Premium) — our lowest-cost iPhone repairs. Battery $89–$129. Save $160–$300 vs Apple Canada. Note: Apple no longer services iPhone 11 Pro, 11 Pro Max, X, XS, or XS Max — we still do.",
  },
  {
    title: "iPhone SE & Legacy",
    models: [
      "iPhone SE (2022 / 3rd gen)",
      "iPhone SE (2020 / 2nd gen)",
      "iPhone SE (2016 / 1st gen)",
      "iPhone 8 Plus",
      "iPhone 8",
    ],
    description:
      "Touch ID classics still going strong. Budget-friendly repairs from $69 (Value) or $79 (Premium). We repair iPhone SE (all 3 generations) and iPhone 8 series. Apple no longer services iPhone 8 and earlier — but we do.",
  },
];

const MODELS = [
  "iPhone 17 Pro Max", "iPhone 17 Pro", "iPhone 17 Air", "iPhone 17",
  "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16", "iPhone 16e",
  "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15",
  "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14",
  "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13 mini", "iPhone 13",
  "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12 mini", "iPhone 12",
  "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11",
  "iPhone XS Max", "iPhone XS", "iPhone XR", "iPhone X",
  "iPhone SE (2022)", "iPhone SE (2020)", "iPhone SE (2016)",
  "iPhone 8 Plus", "iPhone 8", "iPhone 7 Plus", "iPhone 7", "iPhone 6s Plus", "iPhone 6s",
];

// ============================================
// 3. FAQs (16 total — 4 new + 12 existing)
// ============================================
const FAQS: FAQ[] = [
  {
    question: "How does Mobile Tech Lab pricing compare to Apple Canada?",
    answer: `Across the iPhone lineup, Mobile Tech Lab's Premium tier saves you $30 to $250 versus <a href="https://support.apple.com/en-ca/iphone/repair" target="_blank" rel="noopener noreferrer">Apple Canada's official pricing</a>. Our Value tier saves up to $350 on flagship iPhones. For example: iPhone 15 Pro Max screen repair is $499 at Apple Canada but $149 (Value) or $259 (Premium) at MTL — a savings of up to $350. iPhone 14 Pro Max is $499 at Apple, $249 Premium or $149 Value with us. The complete comparison table above shows every model. All Apple Canada prices were verified individually on April 27, 2026 using <a href="https://support.apple.com/en-ca/iphone/repair" target="_blank" rel="noopener noreferrer">Apple's official Canadian repair pricing tool</a>.`,
  },
  {
    question: "Why won't Apple service my iPhone XS or iPhone 11 Pro?",
    answer: `Apple has classified iPhone XS, XS Max, 11 Pro, 11 Pro Max, X, and SE 1st gen as <a href="https://support.apple.com/en-ca/102772" target="_blank" rel="noopener noreferrer">"vintage"</a> or "obsolete" — meaning Apple Canada and Apple Authorized Service Providers no longer offer repair services for them. The phones still work fine; Apple has just stopped manufacturing parts and supporting them. Mobile Tech Lab still repairs all of these models using quality aftermarket and compatible OEM parts. For owners of these specific iPhones, we may be the only legitimate local repair option in Manitoba. iPhone XR and iPhone 11 (base model) are still currently serviced by Apple at $259 each.`,
  },
  {
    question: "When should I choose Value tier versus Premium tier?",
    answer:
      "Choose Premium if you plan to keep your iPhone for 2+ years and want the lifetime warranty against part defects. Premium screens are factory-equivalent OLED quality and indistinguishable from the original in daily use. Choose Value if your iPhone is older, you're planning to trade in or upgrade soon, or the cost difference is the deciding factor. Value screens have visibly lower color reproduction and a 30-day warranty, but for typical daily use most users don't notice. About 70% of our customers choose Premium for the long-term reliability; 30% choose Value when budget matters most.",
  },
  {
    question: "Are Mobile Tech Lab repairs warrantied?",
    answer: `Yes, but warranty length differs by tier. Premium screens carry a lifetime warranty against part defects (the original screen quality lasts indefinitely as long as you don't physically damage it). Value screens carry a 30-day warranty against defects — limited because aftermarket parts have shorter manufacturer warranties. Both tiers include free re-installation if the part fails due to defect during the warranty period. Apple's official repair carries only a 90-day warranty per their <a href="https://www.apple.com/legal/sales-support/terms/repair/Retail_Repair_US_Terms_Conditions.html" target="_blank" rel="noopener noreferrer">Repair Terms and Conditions</a> — meaning our Premium tier offers significantly longer coverage than Apple itself.`,
  },
  {
    question: "How much does iPhone screen repair cost in Winnipeg?",
    answer:
      "iPhone screen repair at Mobile Tech Lab ranges from $69 (Value tier on older models) to $349 (Premium tier on iPhone 16 Pro Max). Most common repairs land between $99–$259. Our Value screen tier runs up to 50% less than Premium on OLED models, with a 30-day warranty instead of the lifetime warranty on Premium. See the full pricing matrix above for model-by-model prices.",
  },
  {
    question: "How much does iPhone battery replacement cost?",
    answer:
      "iPhone battery replacement costs $89–$149 in Winnipeg, depending on model. Older iPhones (XR, XS, 11, 11 Pro, 12, 13) are typically at the lower end of that range. Newer Pro models run higher. Service includes battery health verification. Same-day turnaround when the battery is in stock.",
  },
  {
    question: "How much does iPhone back glass replacement cost?",
    answer:
      "iPhone rear housing (back glass) replacement costs $129–$249 depending on model and color availability. This uses original Apple parts. Rear housing work typically takes 1–3 business days depending on part availability. We'll confirm the exact quote and turnaround when you request a repair.",
  },
  {
    question: "What's the difference between Value and Premium iPhone screens?",
    answer:
      "Three tiers available, different tradeoffs. Premium screens (the prices shown above) are OLED factory-equivalent with a lifetime warranty on the part. Value screens use aftermarket OLED parts, run up to 50% less than Premium, and carry a 30-day warranty. Both deliver the same brightness and color performance for daily use — the difference is part origin and warranty length. If you need to trade in your iPhone to a carrier like Rogers or Bell after repair, Value aftermarket OLEDs still pass carrier inspections in most cases. Genuine Apple screens are also available on request at a premium. LCD iPhones (XR and 11) use a single screen tier because they're not OLED devices.",
  },
  {
    question: "Do you repair older iPhones like iPhone 8, 7, or SE?",
    answer:
      "We repair iPhone 8 Plus, iPhone SE (2020, 2022), and similar older models on request. For iPhone 8 and earlier (iPhone 7, 7 Plus, 6s), part availability varies — we'll confirm at quote. Apple has moved some of these models to their vintage or obsolete list, which can limit genuine parts supply but doesn't prevent us from completing a repair using quality aftermarket parts. Budget-friendly repairs are usually available starting at $69 for common issues.",
  },
  {
    question: "Is it cheaper to repair or replace my iPhone?",
    answer:
      `Usually repair. The <a href="/devices/iphone-11">iPhone 11</a>, <a href="/devices/iphone-xs">XS</a>, and <a href="/devices/iphone-xr">XR</a> have screen repairs starting at $99 — significantly below carrier trade-in deductions for cracked devices. Even an iPhone 16 Pro Max screen at $349 Premium tier is a fraction of the device's $1,599+ replacement cost. Battery replacements at $89–$149 can add 2–3 more years to an older iPhone's usable life. The main exceptions are: devices with multiple major issues at once (screen + battery + back glass + port), devices where the data matters more than the phone (consider data recovery), or devices so old that Apple has stopped iOS updates. See our device guides below for specific support-status information by model.`,
  },
  {
    question: "How much does iPhone battery replacement cost in Winnipeg?",
    answer:
      "iPhone battery replacement at Mobile Tech Lab Winnipeg starts at $59 for older models and goes up to $99 for newer models like the iPhone 15 and 16 series. We also offer genuine Apple battery upgrades for an additional $100. All battery replacements include a 90-day warranty and are typically completed same-day at our St. Vital location.",
  },
  {
    question: "Do you offer same-day iPhone screen repair?",
    answer:
      "Yes! Most iPhone screen repairs in Winnipeg are completed in 1-2 hours while you wait. Walk into our St. Vital Centre location anytime during business hours, or book an appointment online to guarantee your time slot. We stock screens for all popular iPhone models.",
  },
  {
    question: "Are the parts genuine Apple or equivalent quality?",
    answer:
      "We use high-quality aftermarket parts that meet or exceed OEM standards for cost-effective repairs. For customers who prefer genuine components, we offer Apple battery upgrades for $100 extra. All parts are backed by our repair warranty regardless of type.",
  },
  {
    question: "Can I walk in or do I need to book ahead?",
    answer:
      "Walk-ins are always welcome at our Winnipeg location in St. Vital Centre! No appointment necessary. However, booking online guarantees your time slot and helps us prepare the right parts for your specific iPhone model in advance.",
  },
  {
    question: "What's the warranty on iPhone repairs?",
    answer:
      "All iPhone repairs at Mobile Tech Lab come with a warranty. Screen repair warranties vary by part quality tier (starting at 30 days for budget options, up to lifetime for premium). Battery replacements are covered for 90 days. Most other component repairs include a lifetime warranty. Warranty coverage applies to the part replaced only and does not extend to unrelated components. If a function cannot be tested prior to repair, its operation cannot be guaranteed afterward. If anything goes wrong with our work, we'll make it right—guaranteed.",
  },
  {
    question: "What if I find a cheaper quote in Winnipeg?",
    answer:
      "We offer a price match guarantee! If you find a lower quote for the same iPhone repair from any authorized repair shop in Winnipeg, show us the quote and we'll match it. We're confident our combination of quality, speed, and pricing can't be beat.",
  },
];

// ============================================
// 4. GOOGLE REVIEWS
// ============================================
const REVIEWS = [
  {
    quote:
      "Apple told me they couldn't fix my iPhone XS Max because it was too old. Mobile Tech Lab had it back to me the same day for $99. Working perfectly two months later. Saved me from buying a new phone.",
    author: "Customer, Winnipeg (Google Review — pending verification)",
    rating: 5,
  },
  {
    quote:
      "My iPhone battery was dying by noon every day. Mobile Tech Lab replaced it same-day for way less than Apple quoted me. Phone works like new again!",
    author: "Google Review",
    rating: 5,
  },
];

// ============================================
// 5. SEO COPY BLOCKS
// ============================================
const WHY_CHOOSE_PARAGRAPH = `Looking for reliable iPhone repair in Winnipeg? Mobile Tech Lab is the city's trusted choice for fast, affordable iPhone fixes. We offer same-day service for most repairs—including battery replacements, cracked screens, charging port issues, and back glass damage. Our experienced technicians use high-quality parts that meet or exceed OEM standards, and every repair comes with a warranty for your peace of mind. We're so confident in our pricing that we offer a price match guarantee—if you find a cheaper quote from Apple or any local Winnipeg repair shop, we'll match it. Visit our main location at St. Vital Centre for quick walk-in service, or our secondary shop in Thompson. From the latest iPhone 17 Pro Max to the classic iPhone 6s, we've repaired thousands of iPhones for happy Winnipeg customers.`;

const LOCAL_TRUST_PARAGRAPH = `Ready to get your iPhone fixed? Winnipeg's most trusted repair shop is just a short drive away. Walk into our St. Vital Centre location—no appointment needed—and our friendly technicians will diagnose your issue for free. Most iPhone repairs are completed same-day while you wait. We pride ourselves on transparent pricing with no hidden fees, fast turnaround times, and thousands of satisfied Winnipeg customers. Whether you need a quick battery swap or a full screen replacement, we make iPhone repair easy. Request a free quote online or call our St. Vital location directly!`;

// ============================================
// 6. SERVICE SCHEMA JSON-LD (dual-tier)
// ============================================
const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "iPhone Repair",
  provider: {
    "@type": "LocalBusiness",
    name: "Mobile Tech Lab",
    image: "https://mobiletechlab.ca/logo.png",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "845 Dakota St #25",
        addressLocality: "Winnipeg",
        addressRegion: "MB",
        postalCode: "R2M 5M3",
        addressCountry: "CA",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "300 Mystery Lake Rd #535",
        addressLocality: "Thompson",
        addressRegion: "MB",
        postalCode: "R8N 5M2",
        addressCountry: "CA",
      },
    ],
    telephone: ["(204) 500-9757", "(204) 410-0262"],
    url: "https://mobiletechlab.ca",
  },
  areaServed: [
    { "@type": "City", name: "Winnipeg" },
    { "@type": "City", name: "Thompson" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "iPhone Repair Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "iPhone Screen Repair (Premium Tier — Lifetime Warranty)",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: "79",
          maxPrice: "349",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "iPhone Screen Repair (Value Tier — 30-Day Warranty)",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: "69",
          maxPrice: "219",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "iPhone Battery Replacement" },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: "89",
          maxPrice: "149",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "iPhone Rear Housing Replacement" },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: "129",
          maxPrice: "249",
        },
      },
    ],
  },
};

// ============================================
// 7. LOCAL BUSINESS SCHEMA (Patch 5)
// ============================================
const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mobile Tech Lab",
  description:
    "iPhone repair specialists in Winnipeg and Thompson, Manitoba. Same-day screen repair, battery replacement, and full diagnostic services with lifetime warranty on Premium repairs.",
  image: "https://mobiletechlab.ca/logo.png",
  url: "https://mobiletechlab.ca/repair/iphone",
  telephone: "(204) 500-9757",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "845 Dakota St #25",
    addressLocality: "Winnipeg",
    addressRegion: "MB",
    postalCode: "R2M 5M3",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "49.8401",
    longitude: "-97.0991",
  },
  openingHours: ["Mo-Fr 10:00-19:00", "Sa 10:00-18:00", "Su 12:00-17:00"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
  },
  areaServed: [
    { "@type": "City", name: "Winnipeg" },
    { "@type": "City", name: "Thompson" },
    { "@type": "AdministrativeArea", name: "Manitoba" },
  ],
};

// ============================================
// MAIN COMPONENT
// ============================================
const IPhoneRepair = () => {
  return (
    <>
      <Helmet>
        <title>iPhone Screen Repair Winnipeg: From $69 (Save vs Apple)</title>
        <meta
          name="description"
          content="iPhone screen repair Winnipeg from $69. Save up to $350 vs Apple Canada's official prices. Compare every iPhone model — verified April 2026."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mobiletechlab.ca/repair/iphone" />
        <script type="application/ld+json">{JSON.stringify(SERVICE_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(LOCAL_BUSINESS_SCHEMA)}</script>
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1 pb-20 md:pb-0">
          {/* HERO */}
          <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-6xl">
                <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
                  {/* Left: copy */}
                  <div className="text-center lg:text-left">
                    <div className="mb-4 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                      <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                        Winnipeg's #1 iPhone Repair Shop
                      </span>
                      <LiveStatusBadge />
                    </div>

                    <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                      iPhone Repair in <span className="text-primary">Winnipeg</span> — Save Up to $350 vs Apple
                    </h1>

                    <p className="mb-4 text-xl font-medium text-foreground/90 md:text-2xl">
                      Battery, Screen, Charging Port & Back Glass Repairs
                    </p>

                    <p className="mb-8 max-w-2xl text-lg text-muted-foreground lg:mx-0 mx-auto">
                      Mobile Tech Lab repairs every iPhone from iPhone 4 to iPhone 17 Pro Max — at $30
                      to $350 less than Apple Canada's official prices. Most repairs $99 to $199.
                      Same-day service on most parts. We also repair{" "}
                      <Link to="/repair/ipad" className="text-primary hover:underline">iPads</Link>,{" "}
                      <Link to="/repair/macbook" className="text-primary hover:underline">MacBooks</Link>
                      , and Apple Watches.
                    </p>

                    <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                      <Button size="lg" className="gradient-primary text-lg" asChild>
                        <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer">
                          Get a Free Quote
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                      </Button>
                      <Button size="lg" variant="outline" className="text-lg" asChild>
                        <a href={`tel:${PRIMARY_PHONE}`}>
                          <Phone className="mr-2 h-5 w-5" />
                          Call Now
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Right: pricing tile comparison (Patch 4 — model-context labels) */}
                  <div aria-hidden="true" className="mx-auto w-full max-w-sm lg:max-w-none">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-border bg-muted/40 p-5 text-center">
                        <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Apple Canada
                        </div>
                        <div className="text-3xl font-bold text-muted-foreground line-through decoration-destructive decoration-[3px]">
                          $499
                        </div>
                        <div className="mt-2 text-[11px] leading-tight text-muted-foreground">
                          iPhone 16 Pro Max screen repair
                        </div>
                      </div>
                      <div className="relative rounded-2xl border-2 border-primary bg-card p-5 text-center shadow-lg">
                        <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">
                          Mobile Tech Lab
                        </div>
                        <div className="text-3xl font-bold text-primary">$219</div>
                        <div className="mt-2 text-[11px] leading-tight text-muted-foreground">
                          iPhone 16 Pro Max — Value tier
                        </div>
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-success px-3 py-1 text-xs font-bold text-background shadow-md">
                          $280 saved
                        </div>
                      </div>
                    </div>
                    <p className="mt-6 text-center text-xs font-medium text-foreground">
                      You save $280. Same model. Same repair. Different price.
                    </p>
                  </div>
                </div>

                {/* Trust badges row (Patch 6) */}
                <div className="mt-10 rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">Reviews</p>
                        <p className="text-sm font-semibold text-foreground">★★★★★ 4.9 (500+)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Smartphone className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">Pricing</p>
                        <p className="text-sm font-semibold text-foreground">From $69</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Battery className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">Warranty</p>
                        <p className="text-sm font-semibold text-foreground">Lifetime (Premium)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Plug className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">Speed</p>
                        <p className="text-sm font-semibold text-foreground">Same-Day Service</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-1/4 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
          </section>

          {/* QUICK SUMMARY (Patch 1 — TL;DR for AI search & skim readers) */}
          <section className="py-10 md:py-12">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-muted/40 p-6 md:p-8">
                <h2 className="mb-1 text-xl font-bold text-foreground md:text-2xl">
                  Quick Summary
                </h2>
                <p className="mb-4 text-sm text-muted-foreground">
                  Everything you need to know in 30 seconds:
                </p>
                <ul className="space-y-3 text-base text-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>
                      Mobile Tech Lab repairs every iPhone from iPhone 4 to iPhone 17 Pro Max at our St. Vital and Thompson, MB locations.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>
                      Screen repair from $69 (Value tier) or $79 (Premium tier). Most repairs $99–$199. Save $30–$350 vs Apple Canada.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>
                      Premium screens carry a lifetime warranty against defects (vs Apple's 90 days). Value tier carries a 30-day warranty for budget-conscious customers.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>
                      Apple Canada has discontinued service for iPhone XS, XS Max, 11 Pro, 11 Pro Max, X, and SE 1st gen — we still repair all of them.
                    </span>
                  </li>
                </ul>
                <p className="mt-5 border-t border-border pt-4 text-sm font-medium text-foreground">
                  Same-day service on most repairs. Free quote in 1–2 business hours.
                </p>
              </div>
            </div>
          </section>

          {/* APPLE COMPARISON STRIP — 3 cards */}
          <AppleComparisonStrip />

          {/* APPLE WON'T SERVICE IT (moved up — strongest differentiator) */}
          <AppleVintageSection />

          {/* IMAGE PLACEHOLDER 1 — technician at work */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="mx-auto flex h-[250px] max-w-5xl flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-muted/40">
                <Camera className="h-8 w-8 text-muted-foreground/70" aria-hidden="true" />
                <p className="px-4 text-center text-sm italic text-muted-foreground">
                  Image coming soon: MTL technician at work
                </p>
              </div>
            </div>
          </section>

          {/* "MOST CUSTOMERS PAY UNDER $200" CALLOUT */}
          <section className="py-10 md:py-14">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-background to-success/5 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary md:inline-flex">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
                      Most customers pay under $200
                    </h2>
                    <p className="text-base text-muted-foreground md:text-lg">
                      Our pricing covers every iPhone from $69 (older models, Value tier) to $349
                      (iPhone 16 Pro Max, Premium tier). Most repairs we do — iPhone XR through
                      iPhone 14 — fall between $99 and $199.{" "}
                      <Link to="/trade-in" className="text-primary hover:underline font-medium">
                        Trade-in any old device
                      </Link>{" "}
                      to reduce your repair cost further.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* COMPLETE PRICING COMPARISON TABLE */}
          <IPhonePricingTable />

          {/* OTHER COMMON REPAIRS (preserved from old typical-pricing block) */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl">
                <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
                  Other Common iPhone Repairs
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-border/40 bg-card p-5">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-semibold text-foreground">Battery Replacement</span>
                      <span className="rounded-md bg-secondary px-2.5 py-1 text-sm font-semibold">
                        $89–$149
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Varies by model — older iPhones at the lower end, newer Pro models at the
                      higher end.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border/40 bg-card p-5">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-semibold text-foreground">Rear Housing Replacement</span>
                      <span className="rounded-md bg-secondary px-2.5 py-1 text-sm font-semibold">
                        $129–$249
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Original parts, varies by model and color availability.
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground text-center">
                  For charging port repair, speaker/microphone repair, camera replacement, and
                  water damage, we quote individually — these repairs vary too much by damage
                  extent to publish a range.
                </p>
              </div>
            </div>
          </section>

          {/* PREMIUM VS VALUE CARDS */}
          <PremiumVsValueCards />

          {/* SERVICES GRID */}
          <ServiceGrid services={SERVICES} deviceName="iPhone" />

          {/* WHY CHOOSE US */}
          <WhyChooseUsExtended
            heading="Winnipeg's Trusted iPhone Repair Shop"
            paragraph={WHY_CHOOSE_PARAGRAPH}
          />

          {/* GOOGLE REVIEWS */}
          <GoogleReviewsHighlight reviews={REVIEWS} heading="What Our iPhone Customers Say" />

          {/* WAYS TO SAVE */}
          <RepairWaysToSave deviceName="iPhone" />

          {/* LOCATION CARDS */}
          <LocationCards
            heading="Visit Our Winnipeg iPhone Repair Shop"
            serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods."
          />

          {/* GOOGLE MAPS — both locations (Patch 4) */}
          <section className="bg-secondary/30 pb-16 md:pb-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  <div className="border-b border-border px-4 py-2 text-sm font-semibold text-foreground">
                    St. Vital — 845 Dakota St #25
                  </div>
                  <iframe
                    title="Mobile Tech Lab — St. Vital location map"
                    src="https://www.google.com/maps?q=845+Dakota+St+%2325,+Winnipeg,+MB+R2M+5M3&output=embed"
                    width="100%"
                    height="280"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  <div className="border-b border-border px-4 py-2 text-sm font-semibold text-foreground">
                    Thompson — 300 Mystery Lake Rd #535
                  </div>
                  <iframe
                    title="Mobile Tech Lab — Thompson location map"
                    src="https://www.google.com/maps?q=300+Mystery+Lake+Rd+%23535,+Thompson,+MB+R8N+5M2&output=embed"
                    width="100%"
                    height="280"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* IMAGE PLACEHOLDER 2 — workshop interior */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="mx-auto flex h-[250px] max-w-5xl flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-muted/40">
                <Camera className="h-8 w-8 text-muted-foreground/70" aria-hidden="true" />
                <p className="px-4 text-center text-sm italic text-muted-foreground">
                  Image coming soon: St. Vital workshop interior
                </p>
              </div>
            </div>
          </section>

          {/* PRICING MICRO-COPY (intro before FAQ) */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl space-y-3 text-base text-muted-foreground">
                <p>
                  iPhone repair costs are primarily driven by the screen — newer Pro Max models
                  with ProMotion displays cost more than older or standard models. Many customers
                  are surprised that financing often hides the true replacement cost of an iPhone,
                  making repair a smarter financial choice. Apple provides guidance on{" "}
                  <a
                    href="https://support.apple.com/iphone/battery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    checking your iPhone's battery health
                  </a>
                  , which can help determine whether a battery replacement alone would restore
                  performance. Independent teardowns from{" "}
                  <a
                    href="https://www.ifixit.com/Device/iPhone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    iFixit's iPhone repair guides
                  </a>{" "}
                  also illustrate why certain models cost more to repair. If the repair cost
                  approaches your device's value, we'll explain that clearly so you can make an
                  informed decision. You can learn more about{" "}
                  <Link to="/repair-pricing" className="text-primary hover:underline">
                    how repair pricing works
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* FAQ SECTION (16 items) */}
          <FAQSection
            deviceName="iPhone"
            faqs={FAQS}
            heading="Common Questions About iPhone Repairs"
            subheading="Everything you need to know about iPhone repair in Winnipeg"
          />

          {/* RELATED IPHONE GUIDES */}
          <section className="pb-12">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl">
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Related iPhone guides
                </h2>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                  <Link to="/devices/iphone-xr" className="text-primary hover:underline">
                    iPhone XR support status
                  </Link>
                  <Link to="/devices/iphone-xs" className="text-primary hover:underline">
                    iPhone XS support status
                  </Link>
                  <Link to="/devices/iphone-xs-max" className="text-primary hover:underline">
                    iPhone XS Max support status
                  </Link>
                  <Link to="/devices/iphone-11" className="text-primary hover:underline">
                    iPhone 11 support status
                  </Link>
                  <Link to="/devices/iphone-11-pro" className="text-primary hover:underline">
                    iPhone 11 Pro support status
                  </Link>
                  <Link to="/repair-pricing" className="text-primary hover:underline">
                    How repair pricing works
                  </Link>
                  <Link to="/trade-in" className="text-primary hover:underline">
                    Trade in your iPhone
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* LOCAL TRUST */}
          <div data-sticky-hide-anchor>
            <LocalTrustSection
              heading="Book Your iPhone Repair in Winnipeg Today"
              paragraph={LOCAL_TRUST_PARAGRAPH}
            />
          </div>
        </main>

        <Footer />
        <IPhoneStickyQuoteBar />
      </div>
    </>
  );
};

export default IPhoneRepair;
