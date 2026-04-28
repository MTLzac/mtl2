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
import { SamsungComparisonStrip } from "@/components/repair/samsung/SamsungComparisonStrip";
import { SamsungPriceMatchBanner } from "@/components/repair/samsung/SamsungPriceMatchBanner";
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
      "Galaxy A from $129. Galaxy S from $199. Ultra from $299. Foldable from $399. Save up to $500 vs Samsung Canada.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description:
      "Galaxy A from $89, Galaxy S from $129, Foldable from $179. 90-day warranty on all batteries (industry standard — batteries degrade naturally).",
  },
  {
    icon: MonitorSmartphone,
    name: "Back Glass Repair",
    description:
      "Rear housing replacement from $129. Glass-back panels on flagship Galaxy devices.",
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
    name: "Liquid Damage / Water Damage Service",
    description:
      "Diagnostic and data recovery attempts from $149 (plus $49 device-opening diagnostic fee). Important: outcomes cannot be guaranteed, and NO warranty applies to liquid-damaged devices, on any component, regardless of whether future failure relates to our work. We often recommend backup-and-replace for severely damaged devices.",
  },
];

// ============================================
// 2. FAQs (16 total)
// ============================================
const FAQS: FAQ[] = [
  {
    question: "How does Mobile Tech Lab Samsung pricing compare to Samsung Canada?",
    answer: `Across the Galaxy lineup, Mobile Tech Lab saves customers $30 to $500+ versus <a href="https://www.samsung.com/ca/support/Out-of-Warranty-Pricing/" target="_blank" rel="noopener noreferrer">Samsung Canada's official out-of-warranty pricing</a>. For example: Galaxy Z Fold5 inner screen repair is $702 at Samsung Canada but starts at $499 at MTL — saving $203. Galaxy A54 screen at Samsung is $225 vs $129 at MTL — saving $96. The complete comparison table above shows Samsung Canada's published pricing for every Galaxy model. All Samsung Canada prices were sourced directly from <a href="https://www.samsung.com/ca/support/Out-of-Warranty-Pricing/" target="_blank" rel="noopener noreferrer">Samsung's official Out-of-Warranty Pricing page</a> on April 27, 2026.`,
  },
  {
    question: "What is the price match guarantee?",
    answer:
      "If you can show us a real, current quote for the same Samsung repair from a verifiable Winnipeg or Thompson repair shop, we'll match their price. The repair must be the same model, same part quality tier, and the competing shop must be a legitimate Manitoba business. We're confident in our pricing and don't want you wasting time shopping around.",
  },
  {
    question: "Why did Samsung stop servicing my Galaxy Note?",
    answer:
      "Samsung Canada discontinued service for the entire Galaxy Note series — including Note 8, 9, 10, 10+, 20, and 20 Ultra. Samsung's official pricing tool no longer lists service options for these models. The phones still work; Samsung has just stopped supporting them. Mobile Tech Lab still repairs all Note models using quality aftermarket and OEM-equivalent parts. For owners of Galaxy Note phones in Manitoba, we may be one of the only legitimate repair options remaining.",
  },
  {
    question: "How much does a Galaxy Z Fold or Z Flip repair cost?",
    answer:
      "Galaxy Z Fold inner screen repairs at Samsung Canada cost between $702 and $902 depending on generation. Mobile Tech Lab's foldable repairs start at $399. Z Flip inner screens at Samsung are $439–$496; ours start at $299. Foldable repairs are specialized work — we're one of the few Manitoba shops that carries foldable parts and has the technique to install them properly. See the Foldable Specialist section above for model-by-model pricing.",
  },
  {
    question: "Are Mobile Tech Lab repairs warrantied?",
    answer: `Yes — with clearly defined scope.<br/><br/><strong>Premium tier</strong> screens, charging ports, cameras, and most non-battery components: lifetime of the device warranty against manufacturing defects in the replacement part.<br/><br/><strong>Value tier</strong> same components: 30-day warranty against manufacturing defects in the replacement part.<br/><br/><strong>Premium AND Value tier batteries:</strong> 90-day warranty against manufacturing defects only. Batteries naturally degrade with use, so longer warranties are not offered by anyone — including Apple and Samsung.<br/><br/><strong>What our warranty covers:</strong> Defects in the specific part we replaced, during the warranty period, when the device hasn't been physically or liquid damaged after our repair.<br/><br/><strong>What our warranty does NOT cover:</strong><ul class="list-disc pl-5 mt-2 space-y-1"><li>Physical damage (drops, cracks, impacts) after repair</li><li>Liquid damage after repair</li><li>Failures of components we did not service</li><li>Devices that were liquid-damaged before our repair (no warranty applies to liquid-damaged devices, ever)</li></ul><br/>For comparison: <a href="https://www.samsung.com/ca/support/warranty/" target="_blank" rel="noopener noreferrer">Samsung Canada's authorized repair service</a> typically carries a 90-day warranty on parts and labour. Our Premium tier offers significantly longer coverage on most non-battery repairs.`,
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
      "For Premium tier repairs, yes — we source genuine Samsung Service Pack parts directly. These are the same parts Samsung Canada uses in their authorized service centres. For Value tier repairs, we use high-quality aftermarket OLED panels that closely match original specifications. Both options are professionally installed. We'll explain your part options when you request a quote.",
  },
  {
    question: "What's the difference between Screen Repair and Screen Module replacement?",
    answer:
      'Samsung Canada offers two repair types. "Screen Repair" replaces only the broken display panel — cheaper and reduces e-waste. "Screen Module" replaces the entire screen plus bezel (metal frame) plus battery — more comprehensive, more expensive. Mobile Tech Lab generally focuses on screen-only replacement to keep costs low; we replace bezels and batteries separately when needed. This approach typically saves customers another $50–$100 vs Samsung\'s bundled module pricing.',
  },
  {
    question: "Do you repair Samsung phones bought from carriers (Rogers, Bell, Telus)?",
    answer:
      "Yes. Carrier-locked Samsung devices repair the same as unlocked devices — the carrier lock has no effect on hardware repair. We work with Galaxies from every major Canadian carrier including Rogers, Bell, Telus, Fido, Koodo, and Freedom Mobile.",
  },
  {
    question: "How long does a Samsung screen repair take?",
    answer:
      "Most screen repairs are completed same-day when parts are in stock — typically 1–2 hours from drop-off. If your specific Galaxy variant isn't in stock, we order parts and complete the repair in 1–3 business days. We'll tell you the exact timeline when you request your quote estimate — no surprises.",
  },
  {
    question: "What if my Samsung phone is older than what Samsung still services?",
    answer:
      "We repair Galaxy devices going back further than Samsung's authorized service network. Samsung's official pricing tool only lists current and recent models — for older Galaxies (S20, S21, A53, etc.) and discontinued models (Note series), we're often the only legitimate repair option in Manitoba. Get a quote estimate for any Samsung Galaxy from Galaxy S6 onward.",
  },
  {
    question: "Should I get my Samsung repaired or replace it?",
    answer:
      "General rule: if the repair cost is more than half the trade-in or replacement value, replacement makes more sense. Galaxy A series budget phones (A14, A15) often aren't worth screen-replacing if you can find a better trade-in deal. Galaxy S Ultra and Z Fold/Flip phones are usually worth repairing because their replacement cost is $1,500+. We'll be honest with you — if your phone isn't worth fixing, we'll tell you and may offer a trade-in deal instead.",
  },
  {
    question: "Do you offer Samsung Care+ alternatives?",
    answer:
      "Mobile Tech Lab doesn't offer recurring insurance plans — we offer transparent per-repair pricing. Samsung Care+ runs $8–$18/month plus $99–$199 deductible per claim. Many customers find paying us once per repair is cheaper than the cumulative cost of Samsung Care+ over a 2–3 year ownership cycle, especially for Galaxy A and standard S series phones.",
  },
  {
    question: "Can a Samsung repair affect my warranty?",
    answer:
      "If your Galaxy is still under Samsung's standard manufacturer warranty (typically 12 months from purchase), having a third-party shop repair the screen will void Samsung's hardware warranty for any future hardware claims. If you're outside the warranty period, you have nothing to lose by going with us — most Samsungs are repaired by us when they're 12+ months old anyway. Samsung Care+ deductibles are also often higher than our repair cost.",
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
      "Samsung wanted $700 to fix my Z Fold5 inner screen. Mobile Tech Lab did it for $499. Two weeks later it's working perfectly. Going back to them next time.",
    author: "Customer, Winnipeg (Google Review)",
    rating: 5,
  },
  {
    quote:
      "Galaxy Note 10 screen smashed and Samsung wouldn't service it anymore. MTL had it fixed same day for half what I expected. These guys saved my phone.",
    author: "Google Review",
    rating: 5,
  },
];

// ============================================
// 4. COPY BLOCKS
// ============================================
const WHY_CHOOSE_PARAGRAPH = `Looking for reliable Samsung Galaxy repair in Winnipeg? Mobile Tech Lab is Manitoba's foldable repair specialist and the trusted local choice for Galaxy A, S, Ultra, Note, and Z Fold/Flip repairs. We offer same-day service for most repairs when parts are in stock — including battery replacement, cracked AMOLED screens, USB-C charging port issues, and back glass damage. Our experienced technicians use genuine Samsung Service Pack parts (Premium tier) or high-quality aftermarket OLED panels (Value tier), and every repair is backed by clearly-scoped warranty terms. We price-match any verifiable local competitor in Winnipeg or Thompson. Visit our main location at St. Vital Centre for walk-in service, or our Thompson, MB shop. From the latest Galaxy S26 Ultra to the discontinued Galaxy Note 8, we've repaired thousands of Samsungs for happy Manitoba customers.`;

const LOCAL_TRUST_PARAGRAPH = `Ready to get your Samsung Galaxy fixed? Walk into our St. Vital Centre location — no appointment needed — and our friendly technicians will inspect your device. Most Samsung repairs are completed same-day while you wait when parts are in stock. We pride ourselves on transparent estimate-then-final-price pricing, our price-match guarantee, foldable expertise, and our continued support for the discontinued Galaxy Note series. Whether you need a quick battery swap or a full Z Fold inner screen replacement, we make Samsung repair easy. Request a free quote estimate online or call our St. Vital location directly!`;

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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Samsung Galaxy Repair Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Samsung Galaxy A Series Screen Repair" },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: "129",
          maxPrice: "229",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Samsung Galaxy S Series Screen Repair" },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: "199",
          maxPrice: "349",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Samsung Galaxy Z Fold Inner Screen Repair" },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: "399",
          maxPrice: "599",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Samsung Galaxy Z Flip Inner Screen Repair" },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: "299",
          maxPrice: "349",
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
    "Samsung Galaxy repair specialists in Winnipeg and Thompson, Manitoba. Galaxy A, S, Ultra, Z Fold, Z Flip repair with same-day service. Manitoba's foldable repair specialist.",
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
        <title>Samsung Repair Winnipeg: Galaxy + Foldable from $129 | MTL</title>
        <meta
          name="description"
          content="Samsung repair Winnipeg from $129. Galaxy A, S, Ultra, Z Fold, Z Flip — save up to $500 vs Samsung Canada. We price-match any local competitor."
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
                      Samsung Repair in <span className="text-primary">Winnipeg</span> — Save Up to $500 vs Samsung Canada
                    </h1>

                    <p className="mb-4 text-xl font-medium text-foreground/90 md:text-2xl">
                      Galaxy A, S, Ultra, Note, Z Fold &amp; Z Flip Repairs
                    </p>

                    <p className="mb-8 max-w-2xl text-lg text-muted-foreground lg:mx-0 mx-auto">
                      Mobile Tech Lab repairs every Samsung Galaxy from Galaxy A series budget phones to the Galaxy Z Fold flagship — at significantly less than Samsung Canada's official out-of-warranty pricing. Galaxy A repairs from $129, Galaxy S Ultra from $299, foldables from $399. Most repairs $179–$299. Same-day service on most parts when in stock. We price-match any local competitor in Winnipeg or Thompson.
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

                  {/* Pricing tiles */}
                  <div aria-hidden="true" className="mx-auto w-full max-w-sm lg:max-w-none">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-border bg-muted/40 p-5 text-center">
                        <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Samsung Canada
                        </div>
                        <div className="text-3xl font-bold text-muted-foreground line-through decoration-destructive decoration-[3px]">
                          $315
                        </div>
                        <div className="mt-2 text-[11px] leading-tight text-muted-foreground">
                          Galaxy S25 Ultra screen repair
                        </div>
                      </div>
                      <div className="relative rounded-2xl border-2 border-primary bg-card p-5 text-center shadow-lg">
                        <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">
                          Mobile Tech Lab
                        </div>
                        <div className="text-3xl font-bold text-primary">$299</div>
                        <div className="mt-2 text-[11px] leading-tight text-muted-foreground">
                          Galaxy S25 Ultra — From
                        </div>
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-success px-3 py-1 text-xs font-bold text-background shadow-md">
                          Save $16+
                        </div>
                      </div>
                    </div>
                    <p className="mt-6 text-center text-xs font-medium text-foreground">
                      Save on Galaxy S25 Ultra. Save $200+ on Galaxy Z Fold inner screens. Get an exact quote in 1–2 hours.
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
                        <Smartphone className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">Pricing</p>
                        <p className="text-sm font-semibold text-foreground">From $129</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Battery className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">Warranty</p>
                        <p className="text-sm font-semibold text-foreground">
                          Lifetime (Premium screens, ports, cameras)
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
                      Mobile Tech Lab repairs every Samsung Galaxy from Galaxy A budget phones to Galaxy Z Fold flagships at our St. Vital and Thompson, MB locations.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>
                      Samsung repair from $129 (Galaxy A) to $399+ (foldables). Most repairs $179–$299. Save up to $500 vs Samsung Canada's official out-of-warranty pricing.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>
                      Manitoba's foldable repair specialist. Galaxy Z Fold inner screens at Samsung Canada cost $702–$902 — we repair them for significantly less.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>
                      We price-match any local competitor in Winnipeg or Thompson. Samsung Canada has discontinued service for Galaxy Note series — we still repair them.
                    </span>
                  </li>
                </ul>
                <p className="mt-5 border-t border-border pt-4 text-sm font-medium text-foreground">
                  Same-day service on most repairs when parts are in stock. Free quote estimate in 1–2 business hours. See FAQ below for warranty terms.
                </p>
              </div>
            </div>
          </section>

          {/* 3-BADGE SUMMARY */}
          <SamsungComparisonStrip />

          {/* PRICE-MATCH BANNER */}
          <SamsungPriceMatchBanner />

          {/* SAMSUNG DISCONTINUED — NOTE SERIES */}
          <SamsungDiscontinuedSection />

          {/* MOST CUSTOMERS PAY UNDER $250 CALLOUT */}
          <section className="py-10 md:py-14">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-background to-success/5 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary md:inline-flex">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
                      Most customers pay under $250
                    </h2>
                    <p className="text-base text-muted-foreground md:text-lg">
                      Our Samsung pricing covers every Galaxy from $129 (Galaxy A series, simple
                      screen repair) to $399+ (Z Fold inner screen). Most repairs we do — Galaxy
                      S, A, and Flip outer screens — fall between $129 and $249. Even on flagship
                      S Ultra and Fold inner screens, you save $30 to $500+ vs Samsung Canada's
                      official pricing.{" "}
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

          {/* COMPLETE PRICING TABLE */}
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
                      Fold). Most repairs same-day when parts are in stock. Battery warranty: 90
                      days against manufacturing defects. Batteries naturally degrade with use;
                      longer warranties are not offered by anyone (including Samsung).
                    </p>
                    <a href="/quote" className="text-sm font-semibold text-primary hover:underline">
                      Get a quote →
                    </a>
                  </div>
                  <div className="rounded-lg border border-border/40 bg-card p-5">
                    <div className="mb-2 font-semibold text-foreground">Charging Port Repair</div>
                    <p className="mb-3 text-sm text-muted-foreground">
                      USB-C charging port repair from $79. Common on devices 2+ years old.
                      Lifetime-of-device warranty (Premium tier) against manufacturing defects in
                      the replacement part.
                    </p>
                    <a href="/quote" className="text-sm font-semibold text-primary hover:underline">
                      Get a quote →
                    </a>
                  </div>
                  <div className="rounded-lg border border-border/40 bg-card p-5">
                    <div className="mb-2 font-semibold text-foreground">Camera Repair</div>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Rear and front camera replacement from $99. Galaxy Ultra cameras priced
                      higher due to complexity. Lifetime-of-device warranty (Premium tier) against
                      manufacturing defects in the replacement part.
                    </p>
                    <a href="/quote" className="text-sm font-semibold text-primary hover:underline">
                      Get a quote →
                    </a>
                  </div>
                  <div className="rounded-lg border-2 border-destructive/30 bg-destructive/[0.03] p-5">
                    <div className="mb-2 font-semibold text-foreground">
                      Liquid Damage / Water Damage Service
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
                      body: "If our estimate matches the actual repair, we proceed. If your device needs different work than expected, we'll tell you the new price first — you can approve, decline, or pay only the $49 diagnostic fee and walk away.",
                    },
                    {
                      icon: CheckCircle2,
                      title: "Same-day repair when parts are in stock",
                      body: "Most repairs done in 1–2 hours. If parts aren't in stock, we tell you upfront and order them in 1–3 business days.",
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
                Lab. Verified April 27, 2026. Samsung Canada pricing sourced directly from
                Samsung's Out-of-Warranty Pricing page.
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
