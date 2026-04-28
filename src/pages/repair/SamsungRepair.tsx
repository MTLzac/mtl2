import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ServiceGrid, Service } from "@/components/repair/ServiceGrid";
import { FAQSection, FAQ } from "@/components/repair/FAQSection";
import { LocationCards } from "@/components/repair/LocationCards";
import { RepairWaysToSave } from "@/components/repair/RepairWaysToSave";
import { LiveStatusBadge } from "@/components/repair/LiveStatusBadge";
import { WhyChooseUsExtended } from "@/components/repair/WhyChooseUsExtended";
import { GoogleReviewsHighlight } from "@/components/repair/GoogleReviewsHighlight";
import { LocalTrustSection } from "@/components/repair/LocalTrustSection";
import { SamsungPriceMatchBanner } from "@/components/repair/samsung/SamsungPriceMatchBanner";
import { SamsungWarrantyComparison } from "@/components/repair/samsung/SamsungWarrantyComparison";
import { SamsungDiscontinuedSection } from "@/components/repair/samsung/SamsungDiscontinuedSection";
import { SamsungPricingTable } from "@/components/repair/samsung/SamsungPricingTable";
import { SamsungFoldableSection } from "@/components/repair/samsung/SamsungFoldableSection";
import { SamsungPremiumVsValueCards } from "@/components/repair/samsung/SamsungPremiumVsValueCards";
import { SamsungStickyQuoteBar } from "@/components/repair/samsung/SamsungStickyQuoteBar";
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
  ShieldCheck,
  BadgeCheck,
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
      "Galaxy A from $129. Galaxy S $249–$329. Ultra $349–$449. Foldable inner from $349 (Flip) or $499 (Fold). Premium tier carries lifetime-of-device warranty.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description:
      "Galaxy A from $89, Galaxy S from $129, Foldable from $179. 90-day warranty on all batteries.",
  },
  {
    icon: MonitorSmartphone,
    name: "Back Glass Repair",
    description: "Rear housing replacement from $129.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "USB-C port repair from $79. Lifetime-of-device warranty on Premium tier.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description:
      "Rear and front camera modules from $99. Lifetime-of-device warranty on Premium tier.",
  },
  {
    icon: Droplets,
    name: "Liquid Damage Service",
    description:
      "Data recovery attempts from $149 plus $49 diagnostic fee. NO warranty applies to liquid-damaged devices.",
  },
];

// ============================================
// 2. FAQs (16 total)
// ============================================
const FAQS: FAQ[] = [
  {
    question:
      "Why is Mobile Tech Lab Premium tier sometimes priced similar to Samsung's authorized service?",
    answer: `Honest answer: Samsung's authorized service network often subsidizes flagship pricing through their service partner agreements, which means their out-of-warranty pricing on current models is sometimes lower than third-party shops who source genuine Samsung parts independently.<br/><br/><strong>Where we genuinely win:</strong><ul class="list-disc pl-5 mt-2 space-y-1"><li>Lifetime-of-device warranty on Premium tier (vs Samsung's 90-day warranty)</li><li>Same-day local service in Winnipeg and Thompson (vs Samsung's mail-in or limited service centre options)</li><li>Foldable repair specialty (we save customers $200+ on Z Fold inner screens)</li><li>Galaxy A series and older models (where we're significantly cheaper)</li><li>Note series repair (Samsung Canada has discontinued service)</li><li>Price-match guarantee on any verifiable local competitor's quote</li></ul><br/>For current flagship S series Premium repairs, Samsung's authorized service might match or beat our price — but their 90-day warranty expires while ours lasts the lifetime of the device.`,
  },
  {
    question: "What is the price match guarantee?",
    answer:
      "If you can show us a real, current quote for the same Samsung repair from a verifiable Winnipeg or Thompson repair shop, we'll match their price. The repair must be the same model, same part quality tier, and the competing shop must be a legitimate Manitoba business. We may call to verify the quote. We're confident in our pricing and don't want you wasting time shopping around.<br/><br/><strong>Recent example:</strong> A customer brought us a $179 quote for a Galaxy A54 screen repair from another Winnipeg shop. We honoured the price and completed the repair same-day.",
  },
  {
    question: "Why did Samsung stop servicing my Galaxy Note?",
    answer:
      "Samsung Canada discontinued service for the entire Galaxy Note series — Note 8, 9, 10, 10+, 20, and 20 Ultra. The phones still work; Samsung has just stopped supporting them. Mobile Tech Lab still repairs all Note models using quality aftermarket parts (and OEM-equivalent where available). For owners of Galaxy Note phones in Manitoba, we may be one of the only legitimate repair options remaining.",
  },
  {
    question: "How much does a Galaxy Z Fold or Z Flip repair cost?",
    answer: `Foldable repairs are specialized work. Our Premium tier pricing:<ul class="list-disc pl-5 mt-2 space-y-1"><li>Z Fold inner screens: $499–$699</li><li>Z Fold outer screens: $179–$229</li><li>Z Flip inner screens: $349–$449</li><li>Z Flip outer screens: $99–$149</li></ul><br/>For context, <a href="https://www.samsung.com/ca/support/Out-of-Warranty-Pricing/" target="_blank" rel="noopener noreferrer">Samsung Canada's authorized service</a> lists some foldable inner screen repairs at up to $902. We typically save customers $200+ on foldable repairs while delivering OEM Samsung Service Pack quality. See the Foldable Specialist section above for model-by-model pricing.`,
  },
  {
    question: "Are Mobile Tech Lab repairs warrantied?",
    answer: `Yes — with clearly defined scope.<br/><br/><strong>Premium tier</strong> screens, charging ports, cameras, and most non-battery components: lifetime of the device warranty against manufacturing defects in the replacement part.<br/><br/><strong>Value tier</strong> (when available): 30-day warranty against manufacturing defects in the replacement part.<br/><br/><strong>Premium AND Value tier batteries:</strong> 90-day warranty against manufacturing defects only. Batteries naturally degrade with use, so longer warranties are not offered by anyone — including Samsung.<br/><br/><strong>What our warranty covers:</strong> Defects in the specific part we replaced, during the warranty period, when the device hasn't been physically or liquid damaged after our repair.<br/><br/><strong>What our warranty does NOT cover:</strong><ul class="list-disc pl-5 mt-2 space-y-1"><li>Physical damage (drops, cracks, impacts) after repair</li><li>Liquid damage after repair</li><li>Failures of components we did not service</li><li>Devices that were liquid-damaged before our repair (no warranty applies to liquid-damaged devices, ever)</li></ul><br/>For comparison: <a href="https://www.samsung.com/ca/support/warranty/" target="_blank" rel="noopener noreferrer">Samsung Canada's authorized repair service</a> typically carries a 90-day warranty on parts and labour. Our Premium tier offers significantly longer coverage on most non-battery repairs.`,
  },
  {
    question: "How does your quote and diagnostic process work?",
    answer: `Online and phone quotes are estimates based on the symptoms you describe. The actual repair needed and final price are determined after we physically inspect your device.<br/><br/><strong>Our diagnostic process:</strong><ul class="list-disc pl-5 mt-2 space-y-1"><li><strong>Quick external inspection:</strong> free (we can usually identify common issues at the counter)</li><li><strong>Internal diagnostic — opening the device:</strong> $49 fee, credited toward whatever repair resolves the issue. Non-refundable if you decide not to proceed with the repair.</li><li><strong>Final price confirmation:</strong> we always tell you the actual repair cost before starting work. You can approve, decline, or pay only the diagnostic fee and walk away.</li></ul><br/><strong>Why we charge a diagnostic fee for opening devices:</strong> Modern smartphones are complex, and opening a device to identify an issue takes 30–60 minutes of skilled technician time. The $49 fee covers that time. If you proceed with a repair, the fee is fully credited.`,
  },
  {
    question: "Can you repair water-damaged Samsung phones?",
    answer: `We attempt diagnosis and data recovery on water-damaged Galaxy devices, but outcomes cannot be guaranteed. Liquid damage causes unpredictable corrosion that can affect any component on the logic board — and damage often surfaces days or weeks after the initial incident, sometimes long after what looked like a successful repair.<br/><br/><strong>Our process:</strong><ol class="list-decimal pl-5 mt-2 space-y-1"><li>$49 diagnostic fee to open the device and assess damage (credited toward repair if you proceed; non-refundable)</li><li>We give you an honest assessment — often we recommend backing up your data and considering replacement rather than expensive repair attempts</li><li>If we proceed with repair, total cost typically $149–$249</li><li><strong>NO WARRANTY</strong> applies to liquid-damaged device repairs, ever, on any component</li></ol><br/>If your Galaxy has liquid damage, contact us — we'd rather tell you a hard truth upfront than charge you for a repair that may fail again unpredictably.`,
  },
  {
    question: "Are the parts you use genuine Samsung parts?",
    answer:
      "For Premium tier repairs, yes — we source genuine Samsung Service Pack parts directly. These are the same parts Samsung Canada uses in their authorized service centres. For Value tier repairs (when available), we use high-quality aftermarket OLED panels that closely match original specifications. Both options are professionally installed. We'll explain your part options when you request a quote.",
  },
  {
    question: "When is Value tier available?",
    answer:
      "Value tier (aftermarket alternatives to genuine Samsung parts) is offered when our suppliers can source quality aftermarket parts for your specific Galaxy model. Availability varies by model, generation, and supply timing. Some models — particularly current flagships and foldable inner screens — typically only have Premium tier available because aftermarket alternatives either don't exist or don't meet our quality standards. Older models and high-volume devices (S22, S23, S24 standard, A53, A54) more often have Value tier as an option. Get a quote and we'll tell you what's available for your device.",
  },
  {
    question: "Do you repair Samsung phones bought from carriers (Rogers, Bell, Telus)?",
    answer:
      "Yes. Carrier-locked Samsung devices repair the same as unlocked devices — the carrier lock has no effect on hardware repair. We work with Galaxies from every major Canadian carrier including Rogers, Bell, Telus, Fido, Koodo, and Freedom Mobile.",
  },
  {
    question: "How long does a Samsung screen repair take?",
    answer:
      "Most screen repairs are completed same-day when parts are in stock — typically 1–2 hours from drop-off. If your specific Galaxy variant isn't in stock, we order parts and complete the repair in 1–3 business days. Foldable repairs typically take 2–5 business days for parts arrival, then 1–2 hours for installation. We'll tell you the exact timeline when you request your quote estimate.",
  },
  {
    question: "What if my Samsung phone is older than what Samsung still services?",
    answer:
      "We repair Galaxy devices going back further than Samsung's authorized service network. For older Galaxies (S20, S21, A53, etc.) and discontinued models (Note series), we're often the only legitimate repair option in Manitoba. Get a quote estimate for any Samsung Galaxy from Galaxy S6 onward.",
  },
  {
    question: "Should I get my Samsung repaired or replace it?",
    answer:
      "General rule: if the repair cost is more than half the trade-in or replacement value, replacement makes more sense. Galaxy A series budget phones (A14, A15) often aren't worth screen-replacing if you can find a better trade-in deal. Galaxy S Ultra and Z Fold/Flip phones are usually worth repairing because their replacement cost is $1,500+. We'll be honest with you — if your phone isn't worth fixing, we'll tell you and may offer a trade-in deal instead.",
  },
  {
    question: "Do you offer Samsung Care+ alternatives?",
    answer:
      "Mobile Tech Lab doesn't offer recurring insurance plans — we offer transparent per-repair pricing with our price-match guarantee and lifetime warranty on Premium tier. Samsung Care+ runs $8–$18/month plus $99–$199 deductible per claim. Many customers find paying us once per repair is cheaper than the cumulative cost of Samsung Care+ over a 2–3 year ownership cycle.",
  },
  {
    question: "Can a Samsung repair affect my warranty?",
    answer:
      "If your Galaxy is still under Samsung's standard manufacturer warranty (typically 12 months from purchase), having a third-party shop repair the screen will void Samsung's hardware warranty for any future hardware claims. If you're outside the warranty period, you have nothing to lose by going with us — most Samsungs are repaired by us when they're 12+ months old anyway.",
  },
  {
    question: "How quickly can I get a Samsung repair quote?",
    answer:
      "Same business day, usually within 1–2 hours. Submit a quote request through our online form (60 seconds) and we'll text or email your estimate during shop hours. Final price is determined after physical inspection. No phone calls unless you want one. No account required.",
  },
];

// ============================================
// 3. REVIEWS
// ============================================
const REVIEWS = [
  {
    quote:
      "I was nervous handing over my $1,800 Z Fold5 to anyone but Samsung. Mobile Tech Lab walked me through their process upfront — clean inner screen install, working flawlessly two months later. Lifetime warranty made the choice easy.",
    author: "Customer, Winnipeg (Google Review)",
    rating: 5,
  },
  {
    quote:
      "Galaxy Note 10 screen smashed and Samsung wouldn't service it anymore. MTL had it fixed same day for half what I expected. These guys saved my phone.",
    author: "Google Review",
    rating: 5,
  },
  {
    quote:
      "Brought them a $179 screen quote from another shop on my Galaxy A54. They matched it without hassle and had me out the door in 90 minutes. No reason to shop around.",
    author: "Customer, Winnipeg (Google Review)",
    rating: 5,
  },
];

// ============================================
// 4. COPY BLOCKS
// ============================================
const WHY_CHOOSE_PARAGRAPH = `Looking for reliable Samsung Galaxy repair in Winnipeg? Mobile Tech Lab is Manitoba's foldable repair specialist and the trusted local choice for Galaxy A, S, Ultra, Note, and Z Fold/Flip repairs. Our Premium tier carries a lifetime-of-device warranty against manufacturing defects — significantly longer than Samsung's standard 90-day repair warranty. We price-match any verifiable local competitor in Winnipeg or Thompson, and we still repair Galaxy Note series even though Samsung Canada has discontinued service for them. Same-day service for most repairs when parts are in stock. Visit our St. Vital Centre location for walk-in service, or our Thompson, MB shop. From the latest Galaxy S26 Ultra to the discontinued Galaxy Note 8, we've repaired thousands of Samsungs for happy Manitoba customers.`;

const LOCAL_TRUST_PARAGRAPH = `Same-day service on most Samsung repairs when parts are in stock. Lifetime-of-device warranty on Premium tier. We price-match any verifiable local competitor. Manitoba's foldable repair specialist. We repair Galaxy Note series even though Samsung Canada has discontinued service. Get an estimate in 1–2 business hours. No commitment until we physically inspect your device and confirm the final price.`;

// ============================================
// 5. SCHEMAS
// ============================================
const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Samsung Galaxy Repair",
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
    { "@type": "AdministrativeArea", name: "Manitoba" },
  ],
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Price Match Guarantee",
      value:
        "We price-match any verifiable local competitor's quote in Winnipeg and Thompson on Samsung repairs.",
    },
    {
      "@type": "PropertyValue",
      name: "Premium Tier Warranty",
      value:
        "Lifetime of the device against manufacturing defects in the replacement part.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Samsung Galaxy Repair Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Samsung Galaxy A Series Screen Repair (Premium)",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: "129",
          maxPrice: "179",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Samsung Galaxy S Series Screen Repair (Premium)",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: "229",
          maxPrice: "329",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Samsung Galaxy S Ultra Screen Repair (Premium)",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: "349",
          maxPrice: "449",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Samsung Galaxy Z Fold Inner Screen Repair (Premium)",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: "499",
          maxPrice: "699",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Samsung Galaxy Z Fold Outer Screen Repair (Premium)",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: "179",
          maxPrice: "229",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Samsung Galaxy Z Flip Inner Screen Repair (Premium)",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: "349",
          maxPrice: "449",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Samsung Galaxy Z Flip Outer Screen Repair (Premium)",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: "99",
          maxPrice: "149",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Samsung Galaxy Note Series Repair (Vintage Models)",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: "179",
          maxPrice: "329",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Samsung Galaxy Battery Replacement" },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: "89",
          maxPrice: "179",
        },
      },
    ],
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mobile Tech Lab",
  description:
    "Samsung Galaxy repair specialists in Winnipeg and Thompson, Manitoba. Lifetime warranty on Premium repairs. Price-match guarantee. Galaxy A, S, Ultra, Z Fold, Z Flip, and Note series repair. Manitoba's foldable repair specialist.",
  image: "https://mobiletechlab.ca/logo.png",
  url: "https://mobiletechlab.ca/repair/samsung",
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
  geo: { "@type": "GeoCoordinates", latitude: "49.8401", longitude: "-97.0991" },
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
const SamsungRepair = () => {
  return (
    <>
      <Helmet>
        <title>Samsung Repair Winnipeg | Lifetime Warranty + Price Match | MTL</title>
        <meta
          name="description"
          content="Samsung Galaxy repair Winnipeg. Lifetime warranty on Premium repairs (vs Samsung's 90 days). We price-match any local competitor. Foldable specialists."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mobiletechlab.ca/repair/samsung" />
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
                  <div className="text-center lg:text-left">
                    <div className="mb-4 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                      <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                        Manitoba's Samsung &amp; Foldable Repair Specialist
                      </span>
                      <LiveStatusBadge />
                    </div>

                    <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                      Samsung Repair in <span className="text-primary">Winnipeg</span> — Price-Match Guaranteed
                    </h1>

                    <p className="mb-4 text-xl font-medium text-foreground/90 md:text-2xl">
                      Galaxy A, S, Ultra, Note, Z Fold &amp; Z Flip Repairs
                    </p>

                    <p className="mb-8 max-w-2xl text-lg text-muted-foreground lg:mx-0 mx-auto">
                      Mobile Tech Lab repairs every Samsung Galaxy from Galaxy A series to the
                      Galaxy Z Fold flagship at our St. Vital and Thompson locations. We also fix{" "}
                      <Link to="/repair/iphone" className="text-primary hover:underline">
                        iPhones
                      </Link>{" "}
                      and{" "}
                      <Link to="/repair/macbook" className="text-primary hover:underline">
                        MacBooks
                      </Link>
                      . Galaxy A repairs from $129. Galaxy S Ultra from $349. Foldables from $179
                      (outer) or $349 (inner). We price-match any verifiable local competitor's
                      quote — and our Premium tier carries a lifetime-of-device warranty (vs
                      Samsung's 90 days). Same-day service on most parts when in stock.
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

                  {/* Warranty comparison tiles */}
                  <div aria-hidden="false" className="mx-auto w-full max-w-sm lg:max-w-none">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-border bg-muted/40 p-5 text-center">
                        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                          Samsung Authorized Service
                        </div>
                        <div className="text-2xl font-bold text-muted-foreground">
                          90-day
                        </div>
                        <div className="text-xs font-medium text-muted-foreground">warranty</div>
                        <div className="mt-2 text-[11px] leading-tight text-muted-foreground">
                          Industry standard
                        </div>
                      </div>
                      <div className="relative rounded-2xl border-2 border-primary bg-card p-5 text-center shadow-lg">
                        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-primary">
                          Mobile Tech Lab Premium
                        </div>
                        <div className="text-2xl font-bold text-primary">Lifetime</div>
                        <div className="text-xs font-medium text-foreground">of device</div>
                        <div className="mt-2 text-[11px] leading-tight text-muted-foreground">
                          Against manufacturing defects
                        </div>
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-md">
                          Better coverage
                        </div>
                      </div>
                    </div>
                    <p className="mt-6 text-center text-xs font-medium text-foreground">
                      Premium tier covers your screen, charging port, and camera repairs for as
                      long as you own the device. Same-day service. Price-matched if you find
                      lower elsewhere.
                    </p>
                  </div>
                </div>

                {/* Trust badges */}
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
                        <BadgeCheck className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">Pricing</p>
                        <p className="text-sm font-semibold text-foreground">
                          Price Match Guarantee
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">Warranty</p>
                        <p className="text-sm font-semibold text-foreground">
                          Lifetime Warranty (Premium)
                        </p>
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

          {/* QUICK SUMMARY */}
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
                      Mobile Tech Lab repairs every Samsung Galaxy from Galaxy A budget phones to
                      Galaxy Z Fold flagships at our St. Vital and Thompson, MB locations.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>
                      Galaxy A repairs from $129. Galaxy S Ultra from $349. Foldable inner screens
                      from $349 (Z Flip) or $499 (Z Fold). Most repairs $129–$329.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>
                      Premium tier carries a lifetime-of-device warranty against manufacturing
                      defects — significantly longer than Samsung's standard 90-day repair
                      warranty.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>
                      We price-match any verifiable local competitor's quote on Samsung repairs.
                      Manitoba's foldable repair specialist. We repair Galaxy Note series (Samsung
                      Canada has discontinued service for these models).
                    </span>
                  </li>
                </ul>
                <p className="mt-5 border-t border-border pt-4 text-sm font-medium text-foreground">
                  Same-day service on most repairs when parts are in stock. Free quote estimate in
                  1–2 business hours. See FAQ below for warranty terms and diagnostic policy.
                </p>
              </div>
            </div>
          </section>

          {/* PRICE-MATCH BANNER (NEW HEADLINE POSITION) */}
          <SamsungPriceMatchBanner />

          {/* LIFETIME WARRANTY COMPARISON */}
          <SamsungWarrantyComparison />

          {/* SAMSUNG DISCONTINUED — NOTE SERIES */}
          <SamsungDiscontinuedSection />

          {/* FOLDABLE SPECIALIST (with single Samsung Canada citation) */}
          <SamsungFoldableSection />

          {/* MOST REPAIRS $129-$329 CALLOUT */}
          <section className="py-10 md:py-14">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-background to-primary/5 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary md:inline-flex">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
                      Most Samsung repairs $129–$329
                    </h2>
                    <p className="text-base text-muted-foreground md:text-lg">
                      Our Samsung pricing covers every Galaxy from $129 (Galaxy A series, simple
                      screen repair) to $699 (Z Fold7 inner screen Premium). Most repairs we do —
                      Galaxy A, S, S+, and Flip outer screens — fall between $129 and $329.
                      Premium tier uses genuine OEM Samsung Service Pack parts where available,
                      with a lifetime-of-device warranty against manufacturing defects.{" "}
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

          {/* COMPLETE PRICING TABLE — MTL ONLY */}
          <SamsungPricingTable />

          {/* FOLDABLE SPECIALIST */}
          <SamsungFoldableSection />

          {/* OTHER COMMON SAMSUNG REPAIRS */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-5xl">
                <h3 className="mb-6 text-center text-2xl font-bold md:text-3xl">
                  Other Common Samsung Repairs
                </h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg border border-border/40 bg-card p-5">
                    <div className="mb-2 font-semibold text-foreground">Battery Replacement</div>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Samsung Galaxy battery replacement from $89 (Galaxy A) to $179 (Galaxy Z
                      Fold). Same-day when parts are in stock. Battery warranty: 90 days against
                      manufacturing defects (industry standard — batteries degrade naturally with
                      use).
                    </p>
                    <a href="/quote" className="text-sm font-semibold text-primary hover:underline">
                      Get a quote →
                    </a>
                  </div>
                  <div className="rounded-lg border border-border/40 bg-card p-5">
                    <div className="mb-2 font-semibold text-foreground">Charging Port Repair</div>
                    <p className="mb-3 text-sm text-muted-foreground">
                      USB-C charging port repair from $79. Common on devices 2+ years old.
                      Lifetime-of-device warranty (Premium tier) against manufacturing defects.
                    </p>
                    <a href="/quote" className="text-sm font-semibold text-primary hover:underline">
                      Get a quote →
                    </a>
                  </div>
                  <div className="rounded-lg border border-border/40 bg-card p-5">
                    <div className="mb-2 font-semibold text-foreground">Camera Repair</div>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Rear and front camera replacement from $99. Galaxy Ultra cameras priced
                      higher due to complexity. Lifetime-of-device warranty (Premium tier).
                    </p>
                    <a href="/quote" className="text-sm font-semibold text-primary hover:underline">
                      Get a quote →
                    </a>
                  </div>
                  <div className="rounded-lg border-2 border-destructive/30 bg-destructive/[0.03] p-5">
                    <div className="mb-2 font-semibold text-foreground">
                      Liquid Damage Service
                    </div>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Diagnostic and data recovery attempts from $149 (plus $49 device-opening
                      diagnostic fee). Important: outcomes cannot be guaranteed, and{" "}
                      <strong className="text-destructive">
                        NO warranty applies to liquid-damaged devices
                      </strong>
                      , on any component, regardless of whether future failure relates to our
                      work. We often recommend backup-and-replace for severely damaged devices.
                    </p>
                    <a
                      href="/contact"
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      Contact us about liquid damage →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PREMIUM VS VALUE EDUCATION */}
          <SamsungPremiumVsValueCards />

          {/* SERVICES GRID */}
          <ServiceGrid services={SERVICES} deviceName="Samsung" />

          {/* WHY CHOOSE US */}
          <WhyChooseUsExtended
            heading="Winnipeg's Trusted Samsung Repair Shop"
            paragraph={WHY_CHOOSE_PARAGRAPH}
          />

          {/* REVIEWS */}
          <GoogleReviewsHighlight reviews={REVIEWS} heading="What Our Samsung Customers Say" />

          {/* WAYS TO SAVE */}
          <RepairWaysToSave deviceName="Samsung" />

          {/* LOCATION CARDS */}
          <LocationCards
            heading="Visit Our Winnipeg Samsung Repair Shop"
            serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods."
          />

          {/* GOOGLE MAPS */}
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

          {/* FAQ */}
          <FAQSection
            deviceName="Samsung"
            faqs={FAQS}
            heading="Common Questions About Samsung Repairs"
            subheading="Everything you need to know about Samsung Galaxy repair in Winnipeg"
          />

          {/* WHAT HAPPENS NEXT — 5 STEPS */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-5xl">
                <h3 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
                  What happens after you request a quote
                </h3>
                <ol className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
                  {[
                    {
                      icon: ClipboardList,
                      title: "Submit your quote request",
                      body: "One short form, takes under 60 seconds. Tell us your device model and what's wrong.",
                    },
                    {
                      icon: MessageSquare,
                      title: "Get an estimate in 1–2 business hours",
                      body: "We text or email you an ESTIMATE based on your description. Final price is determined after we physically inspect the device.",
                    },
                    {
                      icon: MapPin,
                      title: "Drop off or ship in",
                      body: "Walk into St. Vital or Thompson, or mail it to us. We'll inspect and confirm the actual repair needed.",
                    },
                    {
                      icon: CheckCircle2,
                      title: "We confirm the final price before any work begins",
                      body: "If our estimate matches the actual repair, we proceed. If your device needs different work than expected, we'll tell you the new price first. If internal diagnosis is needed (opening the device), a $49 diagnostic fee applies, credited toward whatever repair resolves the issue. You can approve, decline, or pay only the diagnostic fee and walk away.",
                    },
                    {
                      icon: CheckCircle2,
                      title: "Same-day repair when parts are in stock",
                      body: "Most repairs done in 1–2 hours. Foldable repairs typically 2–5 business days for parts arrival.",
                    },
                  ].map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <li
                        key={step.title}
                        className="relative rounded-2xl border border-border bg-card p-5"
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                            {i + 1}
                          </span>
                          <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                        </div>
                        <h4 className="mb-1 text-base font-semibold text-foreground">
                          {step.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{step.body}</p>
                      </li>
                    );
                  })}
                </ol>
                <p className="mt-6 text-center text-sm font-medium text-foreground">
                  No surprises, no pressure. If our final price isn't right for you after
                  inspection, you only pay the $49 diagnostic fee and we hand your device back.
                </p>
              </div>
            </div>
          </section>

          {/* LOCAL TRUST / FINAL CTA */}
          <div data-sticky-hide-anchor>
            <LocalTrustSection
              heading="Book Your Samsung Repair in Winnipeg Today"
              paragraph={LOCAL_TRUST_PARAGRAPH}
            />
          </div>

          {/* AUTHOR ATTRIBUTION */}
          <section className="border-t border-border/60 bg-muted/30 py-6">
            <div className="container mx-auto px-4">
              <p className="mx-auto max-w-4xl text-center text-xs italic text-muted-foreground">
                Pricing reviewed by the MTL Repair Team, senior repair technicians at Mobile Tech
                Lab. Verified April 27, 2026.
              </p>
            </div>
          </section>
        </main>

        <Footer />
        <SamsungStickyQuoteBar />
      </div>
    </>
  );
};

export default SamsungRepair;
