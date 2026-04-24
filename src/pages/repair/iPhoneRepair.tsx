import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ServiceGrid, Service } from "@/components/repair/ServiceGrid";
import { ModelListGrid, ModelCategory } from "@/components/repair/ModelListGrid";
import { FAQSection, FAQ } from "@/components/repair/FAQSection";
import { LocationCards } from "@/components/repair/LocationCards";
import { StickyQuoteCTA } from "@/components/repair/StickyQuoteCTA";
import { RepairWaysToSave } from "@/components/repair/RepairWaysToSave";
import { LiveStatusBadge } from "@/components/repair/LiveStatusBadge";
import { WhyChooseUsExtended } from "@/components/repair/WhyChooseUsExtended";
import { GoogleReviewsHighlight } from "@/components/repair/GoogleReviewsHighlight";
import { LocalTrustSection } from "@/components/repair/LocalTrustSection";
import { QuickFacts } from "@/components/repair/QuickFacts";
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
      "Cracked, shattered, or unresponsive iPhone screens repaired same-day with quality displays. All models from iPhone 8s to iPhone 16 Pro Max. Premium tier $99–$349 depending on model. Value tier available up to 50% less on OLED models.",
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
    title: "iPhone 16 & 15 Series",
    models: [
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
      "Latest generation with USB-C, Dynamic Island, and A17/A18 chips. Screen repair $219–$349 (Premium tier — Value up to 50% less). Battery $89–$149. Same-day service on most parts.",
  },
  {
    title: "iPhone 14 & 13 Series",
    models: [
      "iPhone 14 Pro Max ($249)",
      "iPhone 14 Pro ($249)",
      "iPhone 14 Plus ($179)",
      "iPhone 14 ($179)",
      "iPhone 13 Pro Max ($169)",
      "iPhone 13 Pro ($169)",
      "iPhone 13 ($169)",
      "iPhone 13 mini ($169)",
    ],
    description:
      "Pro camera systems and A15/A16 chips. Screen repair $169–$249 (Premium tier — Value up to 50% less). Battery $89–$149. Same-day service on most parts.",
  },
  {
    title: "iPhone 12, 11 & X Series",
    models: [
      "iPhone 12 Pro Max ($169)",
      "iPhone 12 Pro ($169)",
      "iPhone 12 ($169)",
      "iPhone 12 mini ($169)",
      "iPhone 11 Pro Max ($129)",
      "iPhone 11 Pro ($129)",
      "iPhone 11 ($99–$139, LCD)",
      "iPhone XS Max ($99)",
      "iPhone XS ($99)",
      "iPhone XR ($99–$139, LCD)",
    ],
    description:
      "Face ID models with OLED and LCD displays. Screen repair $99–$169 (Premium tier on OLED — Value up to 50% less). Battery $89–$129. Same-day service on most parts. Our lowest-cost iPhone repairs.",
  },
  {
    title: "iPhone SE & Legacy",
    models: [
      "iPhone SE (2022 / 3rd gen)",
      "iPhone SE (2020 / 2nd gen)",
      "iPhone 8 Plus",
    ],
    description:
      "Touch ID classics still going strong. Budget-friendly LCD screen repairs starting at $89. Battery $89. We repair iPhone SE (1st/2nd/3rd gen) and iPhone 8 Plus. Note: some very old iPhones (iPhone 8 and earlier) may have limited part availability — we'll let you know at quote.",
  },
];

const MODELS = [
  "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16", "iPhone 16e",
  "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15",
  "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14",
  "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13 mini", "iPhone 13",
  "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12 mini", "iPhone 12",
  "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11",
  "iPhone XS Max", "iPhone XS", "iPhone XR", "iPhone X",
  "iPhone SE (2022)", "iPhone SE (2020)",
  "iPhone 8 Plus", "iPhone 8", "iPhone 7 Plus", "iPhone 7", "iPhone 6s Plus", "iPhone 6s",
];

// ============================================
// 3. PRICING MATRIX DATA
// ============================================
const TIER_1_LCD = [
  { model: "iPhone XR", price: "$99–$139" },
  { model: "iPhone 11", price: "$99–$139" },
];

const TIER_2_CLASSIC_OLED = [
  { model: "iPhone XS", price: "$99" },
  { model: "iPhone 11 Pro", price: "$129" },
  { model: "iPhone 12 (all variants)", price: "$169" },
  { model: "iPhone 13 (all variants)", price: "$169" },
  { model: "iPhone 14 / 14 Plus", price: "$179" },
  { model: "iPhone 16e", price: "$179" },
];

const TIER_3_MODERN_OLED = [
  { model: "iPhone 14 Pro", price: "$249" },
  { model: "iPhone 14 Pro Max", price: "$249" },
  { model: "iPhone 15", price: "$219" },
  { model: "iPhone 15 Plus", price: "$249" },
  { model: "iPhone 15 Pro", price: "$259" },
  { model: "iPhone 15 Pro Max", price: "$259" },
  { model: "iPhone 16", price: "$259" },
  { model: "iPhone 16 Plus", price: "$279" },
  { model: "iPhone 16 Pro", price: "$299" },
  { model: "iPhone 16 Pro Max", price: "$349" },
];

// ============================================
// 4. FAQs (12 total — 6 new + 6 existing)
// ============================================
const FAQS: FAQ[] = [
  {
    question: "How much does iPhone screen repair cost in Winnipeg?",
    answer:
      "iPhone screen repair at Mobile Tech Lab ranges from $99 for iPhone XS, XR, and iPhone 11 to $349 for iPhone 16 Pro Max (Premium screen tier, April 2026). Most common repairs land between $129–$259. Our Value screen tier runs up to 50% less on OLED models, with a 30-day warranty instead of the lifetime warranty on Premium. See the full pricing matrix above for model-by-model prices.",
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
      "We repair iPhone 8 Plus, iPhone SE (2020, 2022), and similar older models on request. For iPhone 8 and earlier (iPhone 7, 7 Plus, 6s), part availability varies — we'll confirm at quote. Apple has moved some of these models to their vintage or obsolete list, which can limit genuine parts supply but doesn't prevent us from completing a repair using quality aftermarket parts. Budget-friendly repairs are usually available starting at $89 for common issues.",
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
// 5. GOOGLE REVIEWS
// ============================================
const REVIEWS = [
  {
    quote:
      "Got my iPhone 14 screen replaced in under an hour at the St. Vital location. Super fast, affordable, and the staff were incredibly friendly. Best iPhone repair in Winnipeg!",
    author: "Google Review",
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
// 6. SEO COPY BLOCKS
// ============================================
const WHY_CHOOSE_PARAGRAPH = `Looking for reliable iPhone repair in Winnipeg? Mobile Tech Lab is the city's trusted choice for fast, affordable iPhone fixes. We offer same-day service for most repairs—including battery replacements, cracked screens, charging port issues, and back glass damage. Our experienced technicians use high-quality parts that meet or exceed OEM standards, and every repair comes with a warranty for your peace of mind. We're so confident in our pricing that we offer a price match guarantee—if you find a cheaper quote from Apple or any local Winnipeg repair shop, we'll match it. Visit our main location at St. Vital Centre for quick walk-in service, or our secondary shop in Thompson. From the latest iPhone 16 Pro Max to the classic iPhone 6s, we've repaired thousands of iPhones for happy Winnipeg customers.`;

const LOCAL_TRUST_PARAGRAPH = `Ready to get your iPhone fixed? Winnipeg's most trusted repair shop is just a short drive away. Walk into our St. Vital Centre location—no appointment needed—and our friendly technicians will diagnose your issue for free. Most iPhone repairs are completed same-day while you wait. We pride ourselves on transparent pricing with no hidden fees, fast turnaround times, and thousands of satisfied Winnipeg customers. Whether you need a quick battery swap or a full screen replacement, we make iPhone repair easy. Request a free quote online or call our St. Vital location directly!`;

// ============================================
// 7. SERVICE SCHEMA JSON-LD
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
          name: "iPhone Screen Repair (Premium Tier)",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: "99",
          maxPrice: "349",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "iPhone Battery Replacement",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: "89",
          maxPrice: "149",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "iPhone Rear Housing Replacement",
        },
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
// MAIN COMPONENT
// ============================================
const IPhoneRepair = () => {
  return (
    <>
      <Helmet>
        <title>iPhone Repair Winnipeg: Screens $99–$349, Battery $89–$149</title>
        <meta
          name="description"
          content="Fast iPhone repair Winnipeg. Screens $99–$349 (Value up to 50% less). Battery $89–$149. Same-day service, lifetime warranty, price match."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mobiletechlab.ca/repair/iphone" />
        <script type="application/ld+json">{JSON.stringify(SERVICE_SCHEMA)}</script>
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1 pb-20 md:pb-0">
          {/* ============================================ */}
          {/* HERO SECTION */}
          {/* ============================================ */}
          <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl text-center">
                <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
                  <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                    Winnipeg's #1 iPhone Repair Shop
                  </span>
                  <LiveStatusBadge />
                </div>

                <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  iPhone Repair in <span className="text-primary">Winnipeg</span> – Fast, Affordable & Trusted
                </h1>

                <p className="mb-4 text-xl font-medium text-foreground/90 md:text-2xl">
                  Battery, Screen, Charging Port & Back Glass Repairs
                </p>

                <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                  Need fast iPhone repair near you? iPhone screen repair in Winnipeg starts at $99 for iPhone XS, XR,
                  and iPhone 11 and ranges up to $349 for iPhone 16 Pro Max. Battery replacement runs $89–$149
                  depending on model. Mobile Tech Lab offers same-day battery replacements, cracked screen fixes,
                  charging port repairs, and back glass restoration on all iPhone models from iPhone 8s to iPhone 16
                  Pro Max. Every repair uses high-quality parts and is backed by our price match guarantee and
                  warranty. Walk in today or request a free quote online. We also repair{" "}
                  <Link to="/repair/ipad" className="text-primary hover:underline">iPads</Link>,{" "}
                  <Link to="/repair/macbook" className="text-primary hover:underline">MacBooks</Link>, and Apple
                  Watches.
                </p>

                <div className="flex flex-col justify-center gap-4 sm:flex-row">
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

                <QuickFacts
                  facts={{
                    turnaround: "1-2 hours",
                    startingPrice: "From $89",
                    warranty: "Up to lifetime warranty",
                    locations: "St. Vital & Thompson",
                  }}
                />
              </div>
            </div>

            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-1/4 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
          </section>

          {/* ============================================ */}
          {/* SERVICES GRID */}
          {/* ============================================ */}
          <ServiceGrid services={SERVICES} deviceName="iPhone" />

          {/* ============================================ */}
          {/* WHY CHOOSE US */}
          {/* ============================================ */}
          <WhyChooseUsExtended
            heading="Winnipeg's Trusted iPhone Repair Shop"
            paragraph={WHY_CHOOSE_PARAGRAPH}
          />

          {/* ============================================ */}
          {/* GOOGLE REVIEWS */}
          {/* ============================================ */}
          <GoogleReviewsHighlight reviews={REVIEWS} heading="What Our iPhone Customers Say" />

          {/* ============================================ */}
          {/* MODEL LIST GRID */}
          {/* ============================================ */}
          <ModelListGrid
            deviceName="iPhone"
            models={MODELS}
            description="We repair every iPhone generation from the iPhone 6s to the latest iPhone 16 Pro Max. Same-day service for most models at our Winnipeg location."
            categories={MODEL_CATEGORIES}
            categoryButtonLabel="View Pricing & Get Quote"
          />

          {/* ============================================ */}
          {/* TYPICAL iPHONE REPAIR PRICING — NEW SECTION */}
          {/* ============================================ */}
          <section id="pricing-matrix" className="bg-secondary/30 py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto mb-10 max-w-3xl text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Typical iPhone Repair Pricing — Current April 2026
                </h2>
                <div className="rounded-xl border border-border/50 bg-card p-5 text-left text-sm text-muted-foreground md:text-base">
                  <p>
                    Prices below are for our <span className="font-semibold text-foreground">Premium screen tier</span> —
                    OLED factory-equivalent with lifetime warranty on the part. Our{" "}
                    <span className="font-semibold text-foreground">Value screen tier</span> uses aftermarket OLED parts
                    at up to 50% less, with a 30-day warranty. Value screens deliver the same brightness and color
                    performance for daily use; the difference is part origin and warranty length. iPhone XR and iPhone
                    11 are LCD devices, so they have a single screen tier. Prices change as part costs change — these
                    ranges are current as of April 2026.
                  </p>
                </div>
              </div>

              <div className="mx-auto max-w-5xl space-y-8">
                {/* Tier 1 — LCD */}
                <Card className="border-border/50 bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">Tier 1 — LCD iPhones (Single Tier)</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      XR and 11 use LCD displays, so there's no Value/Premium split. One tier, one price range.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {TIER_1_LCD.map((row) => (
                        <div
                          key={row.model}
                          className="flex items-center justify-between rounded-lg border border-border/40 bg-background px-4 py-3"
                        >
                          <span className="font-medium text-foreground">{row.model}</span>
                          <Badge variant="secondary" className="text-sm font-semibold">
                            {row.price}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Tier 2 — Classic OLED */}
                <Card className="border-border/50 bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">Tier 2 — Classic OLED iPhones</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Pre-Dynamic Island OLED models. Premium prices shown. Value tier available up to 50% less.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {TIER_2_CLASSIC_OLED.map((row) => (
                        <div
                          key={row.model}
                          className="flex items-center justify-between rounded-lg border border-border/40 bg-background px-4 py-3"
                        >
                          <span className="font-medium text-foreground">{row.model}</span>
                          <Badge variant="secondary" className="text-sm font-semibold">
                            {row.price}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Tier 3 — Modern OLED */}
                <Card className="border-border/50 bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">Tier 3 — Modern OLED iPhones</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Dynamic Island models and Pro tier. Premium prices shown. Value tier available up to 50% less.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {TIER_3_MODERN_OLED.map((row) => (
                        <div
                          key={row.model}
                          className="flex items-center justify-between rounded-lg border border-border/40 bg-background px-4 py-3"
                        >
                          <span className="font-medium text-foreground">{row.model}</span>
                          <Badge variant="secondary" className="text-sm font-semibold">
                            {row.price}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Other Common Repairs */}
                <Card className="border-border/50 bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">Other Common iPhone Repairs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg border border-border/40 bg-background p-4">
                        <div className="mb-1 flex items-center justify-between">
                          <span className="font-semibold text-foreground">Battery Replacement</span>
                          <Badge variant="secondary" className="text-sm font-semibold">$89–$149</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Varies by model — older iPhones at the lower end, newer Pro models at the higher end.
                        </p>
                      </div>
                      <div className="rounded-lg border border-border/40 bg-background p-4">
                        <div className="mb-1 flex items-center justify-between">
                          <span className="font-semibold text-foreground">Rear Housing Replacement</span>
                          <Badge variant="secondary" className="text-sm font-semibold">$129–$249</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Original parts, varies by model and color availability.
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      For charging port repair, speaker/microphone repair, camera replacement, and water damage, we
                      quote individually — these repairs vary too much by damage extent to publish a range. Use the
                      quote button above for a current estimate.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* WAYS TO SAVE */}
          {/* ============================================ */}
          <RepairWaysToSave deviceName="iPhone" />

          {/* ============================================ */}
          {/* LOCATION CARDS */}
          {/* ============================================ */}
          <LocationCards
            heading="Visit Our Winnipeg iPhone Repair Shop"
            serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods."
          />

          {/* ============================================ */}
          {/* PRICING MICRO-COPY (intro before FAQ) */}
          {/* ============================================ */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl space-y-3 text-base text-muted-foreground">
                <p>
                  iPhone repair costs are primarily driven by the screen — newer Pro Max models with ProMotion displays
                  cost more than older or standard models. Many customers are surprised that financing often hides the
                  true replacement cost of an iPhone, making repair a smarter financial choice. Apple provides guidance
                  on{" "}
                  <a
                    href="https://support.apple.com/iphone/battery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    checking your iPhone's battery health
                  </a>
                  , which can help determine whether a battery replacement alone would restore performance. Independent
                  teardowns from{" "}
                  <a
                    href="https://www.ifixit.com/Device/iPhone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    iFixit's iPhone repair guides
                  </a>{" "}
                  also illustrate why certain models cost more to repair due to increasingly integrated component
                  designs. If the repair cost approaches your device's value, we'll explain that clearly so you can
                  make an informed decision. When repair doesn't make sense, data recovery is often still an option.
                  You can learn more about{" "}
                  <Link to="/repair-pricing" className="text-primary hover:underline">
                    how repair pricing works
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* FAQ SECTION (12 items) */}
          {/* ============================================ */}
          <FAQSection
            deviceName="iPhone"
            faqs={FAQS}
            heading="Common Questions About iPhone Repairs"
            subheading="Everything you need to know about iPhone repair in Winnipeg"
          />

          {/* ============================================ */}
          {/* RELATED iPHONE GUIDES — link strip */}
          {/* ============================================ */}
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

          {/* ============================================ */}
          {/* LOCAL TRUST & CONTACT */}
          {/* ============================================ */}
          <LocalTrustSection
            heading="Book Your iPhone Repair in Winnipeg Today"
            paragraph={LOCAL_TRUST_PARAGRAPH}
          />
        </main>

        <Footer />
        <StickyQuoteCTA />
      </div>
    </>
  );
};

export default IPhoneRepair;
