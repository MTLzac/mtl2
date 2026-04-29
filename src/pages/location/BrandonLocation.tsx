import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Phone,
  ExternalLink,
  Star,
  BadgeCheck,
  PhoneCall,
  Package,
  Car,
  ClipboardList,
  Wrench,
  Truck,
  Layers,
  Droplets,
  Laptop,
  Repeat,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQSection, FAQ } from "@/components/repair/FAQSection";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";
const PHONE_NUMBER = "+12045009757";
const PHONE_FORMATTED = "(204) 500-9757";

const faqs: FAQ[] = [
  {
    question: "How does the mail-in repair process work for Brandon customers?",
    answer:
      "It's straightforward: (1) Request a quote online or by phone — we'll give you an estimate range within 1-2 business hours. (2) We send you a free prepaid Canada Post shipping label (we cover inbound shipping). (3) Pack your device securely and drop it at any Canada Post in Brandon. (4) We receive your device within 2-3 business days, complete the repair within 24-48 hours, and ship it back. (5) You pay return shipping (typically $15-$25 depending on device size). Total turnaround: 5-7 business days.",
  },
  {
    question: "How does shipping work? Who pays?",
    answer:
      "Honest answer: we split it. We pay inbound shipping (we send you a free prepaid Canada Post label so it's free for you to ship to us). You pay return shipping when your device is sent back (typically $15-$25 via Canada Post depending on device size). This split keeps mail-in repair affordable for both sides — most shops either hide return shipping costs in inflated repair pricing, or charge you for both legs. We're transparent: one leg each.<br/><br/>For trade-ins (selling your device to us, not getting it repaired), we cover full shipping both ways. Different policy, different service.",
  },
  {
    question: "Should I drive in or mail in my repair?",
    answer:
      "Honest take: it depends on the repair.<br/><br/><strong>Drive in if:</strong> your repair needs to be done same-day, you're combining the trip with other Winnipeg errands, you want to walk through options in person, or you have specialty work (foldable, MacBook board work) that may need multi-step inspection.<br/><br/><strong>Mail in if:</strong> your repair isn't urgent, you'd rather not lose 4-5 hours of driving, or you're sending in for trade-in (free shipping both ways for trade-ins).<br/><br/>Call us first at (204) 500-9757. Tell us your device and the issue. We'll give you our honest take on whether driving 2 hours or mailing in 5 days makes sense for your specific situation.",
  },
  {
    question: "How long does mail-in repair take from Brandon?",
    answer:
      "5-7 business days total. Breakdown: 2-3 days for your device to reach us via Canada Post, 24-48 hours to inspect and repair (most repairs), 1-2 days for return shipping back to Brandon. Expedited shipping available if needed (additional cost).",
  },
  {
    question: "How much do repairs cost?",
    answer:
      "Pricing depends on your device and the repair. General ranges:<br/><br/>• iPhone screen: $69-$349 (varies by model)<br/>• Samsung Galaxy screen: $129-$449 (varies by model)<br/>• Galaxy Z Fold inner screen: $499-$699<br/>• MacBook screen: from $349<br/>• iPad screen: from $129<br/>• Battery replacement: $89-$179<br/>• Water damage assessment: $49 diagnostic + $149 repair attempt<br/>• Data recovery: $129 + tax<br/><br/>Plus $15-$25 for return shipping. Call us at (204) 500-9757 with your device details and we'll give you a tighter range over the phone. See our <a href=\"/repair-pricing\" class=\"text-primary hover:underline\">repair pricing page</a> for complete pricing structure.",
  },
  {
    question: "Do you offer a warranty on Brandon mail-in repairs?",
    answer:
      "Yes — same warranty as our in-store work. Premium tier (genuine OEM parts where available): lifetime of the device against manufacturing defects in the replacement part. Value tier (when available): 30 days against manufacturing defects. Batteries: 90 days regardless of tier (batteries naturally degrade). Liquid-damaged devices: NO warranty applies, ever, on any component.<br/><br/>For Brandon customers: we ship return-eligible devices same-day after warranty service if needed. You cover the return shipping for the warranty repair (same as initial repair).",
  },
  {
    question: "What if my device's screen is black and I can't test it before sending?",
    answer:
      "We can still help. For devices that won't power on (smashed screen, dead battery, water damage), we install temporary working components to test functionality once we receive it. Tell us as much as you can about the symptoms when you call — we'll factor it into the estimate. If diagnosis reveals additional issues beyond the original quote, we'll tell you and confirm before any work proceeds.",
  },
  {
    question: "Is shipping safe and secure?",
    answer:
      "Yes. We use Canada Post tracked shipping with insurance. Devices ship in protective packaging — we have specific packing protocols for foldables, laptops, and tablets. We've shipped thousands of devices to and from rural Manitoba with extremely low loss/damage rates. If you're concerned about a specific high-value device, mention it when you call and we can recommend additional packaging.",
  },
  {
    question: "Can I get a quote over the phone before sending my device?",
    answer:
      "Yes — call (204) 500-9757. Tell us your device model, what's wrong, and any context (was dropped, water damage, won't charge, etc.). We can usually give a tight price range over the phone based on common scenarios. Final price is determined after physical inspection, but the phone consultation prevents surprises and helps you decide whether to proceed.",
  },
  {
    question: "What devices do you repair for Brandon customers?",
    answer:
      "Phones (iPhone, Samsung Galaxy, Google Pixel, all Android brands), tablets (iPad, Samsung Galaxy Tab), laptops (Windows laptops, MacBooks, Chromebooks), and game consoles (Nintendo Switch, PS5, Xbox). We don't repair wearables (Apple Watch repair is limited and we cannot guarantee water resistance).",
  },
  {
    question: "Do you buy phones from Brandon customers?",
    answer:
      "Yes. Our trade-in service has free trackable shipping both ways for Brandon customers (different from our repair shipping policy — we cover full shipping for trade-ins). Same-day e-transfer payment after device inspection. We buy phones, tablets, laptops, MacBooks, consoles, video games, and smartwatches. We even buy testable broken devices. See our <a href=\"/trade-in\" class=\"text-primary hover:underline\">trade-in page</a> for details.",
  },
  {
    question: "I need a repair done immediately — is mail-in too slow?",
    answer:
      "Probably yes. If you need same-day or next-day repair: drive 2 hours to our St. Vital Winnipeg location. Walk-ins welcome during business hours. Most repairs done in 1-2 hours when parts are in stock. If our specialized parts aren't in stock for your specific model, we may suggest mail-in to give us time to source parts — call first to confirm.",
  },
];

const manitobaReviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text:
      "Sent my iPhone in from Brandon and had it back within a few days. Screen looks brand new and the price was fair. Highly recommend!",
  },
  {
    name: "Daniel R., Brandon",
    rating: 5,
    text:
      "Mailed my Z Fold5 in from Brandon. They were transparent about timing — said 5 days, got it back in 4. Quality work, professional packaging, fair price. Worth not having to drive into the city.",
  },
  {
    name: "Jennifer K.",
    rating: 5,
    text:
      "My Samsung was fixed faster than expected. The prepaid shipping made it so easy—no hassle at all.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "https://mobiletechlab.ca/" },
  { name: "Service Areas", url: "https://mobiletechlab.ca/service-areas" },
  { name: "Brandon, MB", url: "https://mobiletechlab.ca/location/brandon" },
];

const threeWays = [
  {
    icon: PhoneCall,
    title: "Call First",
    body:
      "Call us at (204) 500-9757 and we'll give you a price range based on your device and symptoms — before you commit to anything.",
  },
  {
    icon: Package,
    title: "Mail-In Repair",
    body:
      "We send you a free prepaid shipping label. You ship to us. We repair. You pay return shipping (typically $15-$25). Total turnaround: 5-7 days.",
  },
  {
    icon: Car,
    title: "Drive-In",
    body:
      "2 hours from Brandon to our St. Vital Winnipeg location. Same-day repair when parts are in stock. Walk-ins welcome during business hours.",
  },
];

const mailInSteps = [
  {
    icon: ClipboardList,
    title: "Request a Quote",
    body:
      "Tell us about your device, the issue, and what you'd like fixed. We'll respond with a repair estimate range within 1-2 business hours. For specific pricing, call us first — we can often give a tighter range based on a phone conversation.",
  },
  {
    icon: Package,
    title: "Ship Your Device",
    body:
      "We send you a free prepaid Canada Post shipping label (we cover inbound shipping). Pack your device securely and drop it off at any Canada Post location. We typically receive devices within 2-3 business days from Brandon.",
  },
  {
    icon: Wrench,
    title: "We Repair It",
    body:
      "Our certified technicians inspect, diagnose, and repair your device with quality parts. We confirm the final price before any work begins — if the actual repair differs from the estimate, you can approve, decline, or pay only the $49 diagnostic fee and have your device returned.",
  },
  {
    icon: Truck,
    title: "Get It Back",
    body:
      "Choose your preferred return shipping option. Customer covers return shipping cost (typically $15-$25 via Canada Post depending on device size). Most repairs sent back within 24-48 hours of completion. Expedited shipping available for urgent needs.",
  },
];

const valueCards = [
  {
    icon: Layers,
    title: "Foldable Phone Repair",
    body:
      "Galaxy Z Fold and Z Flip inner screen repairs. Most Brandon shops don't carry foldable parts. We've repaired hundreds of foldables with OEM Samsung Service Pack parts. Lifetime warranty on Premium tier.",
    linkLabel: "Galaxy Foldable Repair →",
    linkHref: "/repair/samsung",
  },
  {
    icon: Droplets,
    title: "Water Damage & Data Recovery",
    body:
      "Liquid damage diagnostic, repair attempts, and data recovery — even from devices that won't power on. Honest assessment of repair feasibility. $129 data recovery attempts; we recommend cloud backup check first.",
    linkLabel: "Water Damage Service →",
    linkHref: "/repair/water-damage",
  },
  {
    icon: Laptop,
    title: "MacBook & iPad Advanced Repair",
    body:
      "MacBook board work, iPad screen replacement, charging port repair. Apple's official service is mail-in to Texas with 1-2 week turnaround. We're 2 hours away.",
    linkLabel: "MacBook Repair →",
    linkHref: "/repair/macbook",
  },
  {
    icon: Repeat,
    title: "Trade-In with Mail-In Convenience",
    body:
      "Free trackable shipping both ways for trade-ins. Same-day e-transfer payment after inspection. We buy phones, tablets, laptops, MacBooks, consoles, smartwatches — even broken devices we can test.",
    linkLabel: "Sell Your Device →",
    linkHref: "/trade-in",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Phone, Tablet, Laptop & MacBook Repair (Mail-In and Drive-In)",
  provider: {
    "@type": "LocalBusiness",
    name: "Mobile Tech Lab",
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
    { "@type": "City", name: "Brandon" },
    { "@type": "City", name: "Winnipeg" },
    { "@type": "City", name: "Thompson" },
    { "@type": "AdministrativeArea", name: "Manitoba" },
    { "@type": "AdministrativeArea", name: "Westman Region" },
  ],
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Brandon Service Model",
      value:
        "Mail-in repair (we cover inbound shipping; customer covers return) or drive-in to St. Vital Winnipeg (2 hours from Brandon)",
    },
    {
      "@type": "PropertyValue",
      name: "Mail-In Turnaround",
      value:
        "5-7 business days total: 2-3 days inbound, 24-48 hours repair, 1-2 days return shipping",
    },
    {
      "@type": "PropertyValue",
      name: "Phone Consultation",
      value:
        "Phone consultation available at (204) 500-9757 for price range estimate before committing",
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mobile Tech Lab",
  description:
    "Phone, tablet, laptop, and MacBook repair for Brandon, MB and the Westman region. Mail-in service (we cover inbound shipping) or drive-in to our Winnipeg location. Specialized in foldable repair, water damage, MacBook advanced repair, and trade-ins.",
  url: "https://mobiletechlab.ca/location/brandon",
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
    { "@type": "City", name: "Brandon" },
    { "@type": "City", name: "Winnipeg" },
    { "@type": "City", name: "Thompson" },
    { "@type": "AdministrativeArea", name: "Manitoba" },
  ],
};

const BrandonLocation = () => {
  return (
    <>
      <Helmet>
        <title>Phone Repair for Brandon, MB | Mail-In or Drive-In | MTL</title>
        <meta
          name="description"
          content="Phone, tablet, laptop & MacBook repair for Brandon, MB. Mail-in service (we cover inbound shipping) or drive 2hrs to Winnipeg. Specialized foldable & MacBook work."
        />
        <link rel="canonical" href="https://mobiletechlab.ca/location/brandon" />

        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <BreadcrumbSchema items={breadcrumbs} />

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                Cell Phone, Tablet, Laptop & MacBook Repair for Brandon, MB
              </h1>
              <p className="text-lg text-muted-foreground">
                Need phone repair, screen replacement, battery replacement, or specialized device service in
                Brandon? Mobile Tech Lab serves Brandon and the Westman region from our Winnipeg and Thompson
                locations. Two ways to get your device fixed: mail it in (we cover inbound shipping; you cover
                return) or drive 2 hours to our St. Vital Winnipeg location for same-day service. Call us first
                and we'll give you a price range over the phone — no surprises before you commit.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call {PHONE_FORMATTED}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer">
                    Request a Quote Online
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Three ways to get repaired */}
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
              {threeWays.map(({ icon: Icon, title, body }) => (
                <Card key={title} className="border-border/50 shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-3 inline-flex rounded-full bg-primary/10 p-3 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl rounded-xl border border-border/50 bg-muted/40 p-6 md:p-8">
              <h2 className="mb-1 text-2xl font-bold md:text-3xl">Quick Summary</h2>
              <p className="mb-5 text-sm text-muted-foreground">
                Everything Brandon customers need to know in 30 seconds:
              </p>
              <ul className="mb-5 space-y-3 text-sm md:text-base">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    Mobile Tech Lab serves Brandon, MB and the Westman region from our Winnipeg (St. Vital) and
                    Thompson locations. We don't have a physical Brandon shop — we serve Brandon via mail-in or
                    drive-in.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    Mail-in repair: we cover inbound shipping (free prepaid label), customer covers return
                    shipping (typically $15-$25). Total turnaround 5-7 days.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    Drive-in option: 2 hours from Brandon to St. Vital Winnipeg. Same-day repair on most parts
                    when in stock.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    For trade-ins: free trackable shipping both ways. Same-day e-transfer payment after
                    inspection.
                  </span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Call <a href={`tel:${PHONE_NUMBER}`} className="text-primary hover:underline">(204) 500-9757</a>{" "}
                first. We give Brandon customers a price range over the phone before you commit. Most repairs
                $79-$399; foldables and specialty work priced higher.
              </p>
            </div>
          </div>
        </section>

        {/* How Brandon Mail-In Repairs Work */}
        <section className="bg-muted/30 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">How Brandon Mail-In Repairs Work</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Simple, secure, and transparent — get your device repaired without leaving home.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {mailInSteps.map((step, index) => (
                <div key={step.title} className="relative text-center">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    Step {index + 1}
                  </div>
                  <div className="rounded-xl border border-border/50 bg-card p-6 pt-8 transition-all hover:border-primary/50 hover:shadow-lg">
                    <div className="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-4 text-primary">
                      <step.icon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Drive In or Mail In — Honest Guidance */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 text-center">
                <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                  Drive In or Mail In? Honest Guidance for Brandon Customers
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  We're 2 hours from Brandon. Sometimes the drive is worth it. Sometimes mail-in is smarter.
                  Here's our honest take.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="mb-4 inline-block rounded-md bg-muted px-3 py-1 text-sm font-semibold text-foreground">
                      When Mail-In Makes Sense
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2"><span className="text-muted-foreground">•</span><span>Trade-ins (we cover full shipping both ways for trade-ins)</span></li>
                      <li className="flex gap-2"><span className="text-muted-foreground">•</span><span>Repairs that don't need next-day turnaround</span></li>
                      <li className="flex gap-2"><span className="text-muted-foreground">•</span><span>Specialty repairs where you wouldn't find local Brandon options anyway</span></li>
                      <li className="flex gap-2"><span className="text-muted-foreground">•</span><span>Save 4 hours of driving and gas</span></li>
                      <li className="flex gap-2"><span className="text-muted-foreground">•</span><span>You'd rather not commit to a full day for the trip</span></li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-primary/30">
                  <CardContent className="p-6">
                    <h3 className="mb-4 inline-block rounded-md bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                      When Driving In Makes Sense
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Need same-day repair (cracked screen with broken phone in pocket)</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Combining the trip with other Winnipeg errands</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Specialty work that requires multiple inspection visits (water damage, complex board repair)</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Want to walk through repair options in person before committing</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Trade-in higher-value items (foldables, MacBooks) you'd rather hand over directly</span></li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Honest reality:</strong> for a basic cracked iPhone screen
                  or simple battery replacement, you may be able to find local Brandon options that are faster
                  than mail-in. We'd rather tell you that than waste your time and shipping cost. But for
                  specialized work — foldable repair, MacBook board work, water damage data recovery, advanced
                  diagnostics — local Brandon options are typically limited, and we're worth the drive (or
                  mail-in wait).
                </p>
                <p>
                  Call us first at (204) 500-9757 and we'll give you our honest take on whether your situation
                  justifies the drive or mail-in. If we think you'd be better served locally, we'll tell you.
                </p>
              </div>

              <div className="mt-6 text-center">
                <Button size="lg" asChild>
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call {PHONE_FORMATTED} for Honest Advice
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Where We Add the Most Value */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 text-center">
                <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                  Where We Add the Most Value for Brandon Customers
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Specialized repair work that's hard to find in Brandon — we're worth the trip or mail-in for
                  these.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {valueCards.map(({ icon: Icon, title, body, linkLabel, linkHref }) => (
                  <Card key={title} className="border-border/50 transition-all hover:border-primary/50 hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="mb-3 inline-flex rounded-full bg-primary/10 p-3 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
                      <Link to={linkHref} className="text-sm font-medium text-primary hover:underline">
                        {linkLabel}
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-10 rounded-xl border border-border/50 bg-card p-6">
                <h3 className="mb-3 text-lg font-semibold">Common Repairs We Also Handle</h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  We also handle standard repairs for Brandon customers:
                </p>
                <ul className="mb-4 space-y-2 text-sm text-muted-foreground">
                  <li>•{" "}
                    <Link to="/repair/iphone" className="text-primary hover:underline">iPhone screen / battery / charging port</Link>{" "}
                    (all models)
                  </li>
                  <li>•{" "}
                    <Link to="/repair/samsung" className="text-primary hover:underline">Samsung Galaxy screen / battery / camera</Link>
                  </li>
                  <li>•{" "}
                    <Link to="/repair/google-pixel" className="text-primary hover:underline">Google Pixel</Link>{" "}
                    and <Link to="/repair/motorola" className="text-primary hover:underline">Motorola</Link> repair
                  </li>
                  <li>•{" "}
                    <Link to="/repair/ipad" className="text-primary hover:underline">iPad screen and battery</Link>
                  </li>
                  <li>• Laptop screen, keyboard, battery</li>
                  <li>• Game console repair (
                    <Link to="/repair/ps5" className="text-primary hover:underline">PS5</Link>,{" "}
                    <Link to="/repair/xbox" className="text-primary hover:underline">Xbox</Link>,{" "}
                    <Link to="/repair/nintendo-switch" className="text-primary hover:underline">Nintendo Switch</Link>)
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  For these basic repairs, local Brandon options may be faster. Call us first and we'll be
                  honest about whether mail-in or drive-in makes sense for your specific situation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-2xl font-bold md:text-3xl">
                What Our Manitoba Customers Are Saying
              </h2>
              <p className="flex items-center justify-center gap-1.5 text-muted-foreground">
                <Star className="h-4 w-4 fill-primary text-primary" />
                Trusted by customers across Manitoba
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
              {manitobaReviews.map((review) => (
                <Card
                  key={review.name}
                  className="h-full border-border/50 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <CardContent className="flex h-full flex-col items-center p-6 text-center">
                    <div className="mb-4 flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="mb-4 flex-1 text-sm italic text-muted-foreground">"{review.text}"</p>
                    <div className="flex items-center gap-1.5">
                      <p className="font-medium text-foreground">– {review.name}</p>
                      <BadgeCheck className="h-4 w-4 text-primary" aria-label="Verified Review" />
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground/70">Via Google Reviews</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection
          deviceName="Brandon"
          faqs={faqs}
          heading="Frequently Asked Questions"
          subheading="Common questions about phone repair for Brandon customers."
        />

        {/* Final CTA */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                Ready to Get Your Brandon Device Fixed?
              </h2>
              <p className="mb-6 text-muted-foreground">
                Call us first — we'll give you an honest assessment over the phone. Then choose: mail it in (we
                cover inbound shipping), drive 2 hours to our St. Vital Winnipeg location, or sell your device
                to us with free shipping both ways. Whatever works best for your situation. No commitment until
                we confirm the actual repair price after inspection.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call {PHONE_FORMATTED}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer">
                    Get a Quote Online
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BrandonLocation;
