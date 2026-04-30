import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  MessageSquare,
  Star,
  Smartphone,
  Tablet,
  Laptop,
  Apple,
  ShieldCheck,
  BatteryCharging,
  CheckCircle2,
  AlertTriangle,
  Lock,
  Settings,
  Search,
  Info,
  Clock,
  Activity,
  Zap,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyQuoteCTA } from "@/components/repair/StickyQuoteCTA";
import { LocationCards } from "@/components/repair/LocationCards";
import { FAQSection } from "@/components/repair/FAQSection";
import { PRIMARY_PHONE, PRIMARY_PHONE_FORMATTED } from "@/lib/locations";
import { BatterySchema } from "@/components/battery-replacement/BatterySchema";
import heroBatteryImage from "@/assets/hero-battery-replacement.jpg";

const BatteryReplacement = () => {
  const faqs = [
    {
      question: "How do I know if I need a new battery?",
      answer:
        "Common signs: phone shuts down at 20-30% battery, charging takes much longer than it used to, phone gets unusually hot during normal use, or battery drains rapidly even with light use. For iPhone, check Settings → Battery → Battery Health — Apple recommends replacement when health drops below 80%. For Samsung and Android, we use diagnostic tools to check. Walk in for a free battery health check — no commitment.",
    },
    {
      question: "Do you use Genuine Apple batteries?",
      answer:
        "Yes. Mobile Tech Lab is an authorized Apple Independent Repair Provider (IRP), which means we have direct access to Genuine Apple batteries through Apple's official channels. We pair them to your iPhone using Apple's GSX system, so Battery Health displays normally with Maximum Capacity percentage and no 'Important Battery Message' warning. We also offer a third-party battery option for customers who want to save $20-30+ — we'll explain the trade-offs before installation so you can choose.",
    },
    {
      question: "What's the difference between Genuine Apple battery and third-party battery?",
      answer:
        "Functionally, they're nearly identical — same chemistry, same charging behavior, same lifespan. The differences are: (1) Cost — third-party is $20-30+ less. (2) iOS Notification — Genuine displays Battery Health normally; third-party triggers an 'Important Battery Message' notification that follows a graduated visibility timeline (lock screen for 4 days, main Settings menu for 15 days, then permanent only in Parts and Service History). (3) Resale value — Genuine maintains higher resale value if you plan to sell or trade in your iPhone. Both carry our same 90-day warranty.",
    },
    {
      question: "How long does the third-party battery notification stay on my screen?",
      answer:
        "The notification follows a 3-phase visibility timeline: Days 1-4: Appears on your lock screen. Days 5-19: Disappears from lock screen, moves to main Settings menu. Day 20 onwards: Only visible if you manually navigate to Settings → General → About → Parts and Service History. Most customers report that after the first 19 days, they barely notice it. The notification does not affect battery performance, charging, or device functionality at any point.",
    },
    {
      question: "How much does battery replacement cost?",
      answer:
        "Pricing depends on your device. Approximate ranges: iPhone (Genuine Apple): $129-$199 depending on model. iPhone (Third-Party): $89-$179 depending on model ($20-30+ less than Genuine). iPad: $129-$229. Samsung Galaxy: $89-$199. Android: $89-$179. MacBook: $179-$299. Final price determined after physical inspection. Diagnostic fee $49 (credited toward repair) only applies if we need to order specific parts.",
    },
    {
      question: "How long does battery replacement take?",
      answer:
        "iPhone (both Genuine and Third-Party): 30-60 minutes when parts in stock, otherwise within 24-48 hours. Samsung Galaxy: same, with foldable models taking 1-2 days. Android: 30-60 minutes when parts in stock. iPad: 2-3 hours due to glued construction. MacBook: 2-4 hours, may require parts ordering. Walk in to confirm parts availability for your specific model.",
    },
    {
      question: "What's your warranty on battery replacements?",
      answer:
        "90 days against manufacturing defects on ALL battery replacements — whether Genuine Apple or third-party, regardless of device. This applies because batteries naturally degrade with use. Even Apple only warranties batteries against defects, not natural capacity loss. What's covered: battery doesn't hold charge from day one, abnormal swelling within 90 days, complete charging failure within 90 days. What's not covered: natural capacity reduction, drop/water damage after installation, devices with prior liquid damage history.",
    },
    {
      question: "Why is battery warranty shorter than your screen warranty?",
      answer:
        "Honest answer: batteries are consumables that degrade with use; screens are not. A screen we install today should function the same in 5 years (against manufacturing defects). A battery we install today will lose ~5-10% capacity per year through normal use — that's physics, not a defect. Our 90-day warranty matches industry standard for battery replacement (Apple, Samsung, and most reputable shops use similar terms). Lifetime warranty on screens reflects the difference: screens don't degrade, batteries do.",
    },
    {
      question: "Will replacing my battery void my Apple warranty?",
      answer:
        "For Genuine Apple battery installations through us (as an Apple IRP), AppleCare+ coverage typically remains valid because we use Apple's official parts and pairing process. For third-party battery installations, Apple may consider this an unauthorized modification that voids AppleCare+ on remaining coverage. If your iPhone is still under Apple's 1-year warranty or AppleCare+, we recommend choosing the Genuine Apple option to preserve coverage. We'll discuss your specific warranty status before any work.",
    },
    {
      question: "Can you replace my iPad or MacBook battery, or do I need to go to Apple?",
      answer:
        "Yes, we replace iPad and MacBook batteries. Apple's official service often involves device replacement (iPad) or shipping to a facility (MacBook). We do in-house replacement on-site, typically faster than Apple's mail-in turnaround. Pricing is competitive — see device-specific sections above. Note: iPad battery replacement requires careful screen removal (we do NOT recommend DIY) and may take 2-3 hours.",
    },
    {
      question: "My phone won't charge at all. Is that a battery problem?",
      answer:
        "Maybe, maybe not. Common causes: faulty charging port (often a separate $49-$129 repair), bad charging cable, damaged charging IC on the logic board, or a completely dead battery. Walk in for diagnosis — we test the charging port, cable, and battery separately to identify the actual cause. Don't replace the battery if it's actually a charging port issue.",
    },
    {
      question: "My phone is hot and the back is bulging. What should I do?",
      answer:
        "Stop using the device immediately and bring it in as soon as possible. A swollen battery is a serious safety issue — it can rupture, leak, or in rare cases, ignite. Do NOT attempt to charge the device further. Do NOT puncture or compress the battery. We can safely replace a swollen battery, but the longer it sits, the higher the risk. Same-day service typically available for swollen battery replacement.",
    },
    {
      question: "How long should a new battery last?",
      answer:
        "With normal use, a quality replacement battery (Genuine or third-party) should retain 80%+ capacity for 2-3 years (matching original Apple/Samsung specs). Heavy gaming, frequent fast-charging, and extreme temperatures shorten battery life. Most customers see 3-5 years of usable life from a replacement battery before considering another replacement. Charging habits matter — keeping batteries between 20-80% extends lifespan vs constantly charging to 100%.",
    },
    {
      question: "Do you offer battery replacement for customers in Brandon, Portage, or rural Manitoba?",
      answer:
        'Yes — see our <a href="/location/brandon">Brandon location page</a> for service options. For battery replacement specifically, we recommend driving in for same-day service when possible (most batteries replaced in 30-60 minutes). For rural customers who can\'t drive in, our mail-in service works (we cover inbound shipping; customer covers return). Total turnaround: 5-7 business days. Both Genuine Apple and third-party iPhone battery options are available via mail-in.',
    },
  ];

  const trustBadges = [
    { icon: Star, label: "4.9 from 500+ Google reviews" },
    { icon: Apple, label: "Apple Independent Repair Provider" },
    { icon: Zap, label: "Same Apple Price, Often Faster" },
    { icon: BatteryCharging, label: "Free Battery Health Check" },
  ];

  const deviceCategories = [
    { icon: Smartphone, label: "iPhone & Android" },
    { icon: Tablet, label: "iPad & Tablets" },
    { icon: Laptop, label: "MacBook & Laptops" },
  ];

  return (
    <>
      <Helmet>
        <title>Phone Battery Replacement Winnipeg | Genuine Apple Parts | MTL</title>
        <meta
          name="description"
          content="iPhone, iPad, Samsung, Android & MacBook battery replacement in Winnipeg. Apple Independent Repair Provider — Genuine Apple parts available. Free health check. 90-day warranty."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mobiletechlab.ca/repair/battery-replacement" />
      </Helmet>

      <BatterySchema faqs={faqs} />

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1 pb-20 md:pb-0">
          {/* SECTION 1 — HERO */}
          <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    <BatteryCharging className="h-4 w-4" />
                    Free Battery Health Check
                  </div>

                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    Phone, Tablet & Laptop{" "}
                    <span className="block text-primary">Battery Replacement in Winnipeg</span>
                  </h1>

                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                      iPhone, iPad, Samsung Galaxy, Android, and MacBook battery replacement at Mobile Tech Lab. As an{" "}
                      <strong className="text-foreground">Apple Independent Repair Provider</strong>, we offer Genuine
                      Apple batteries for iPhone repair — at the same price as Apple's official service. Free battery
                      health check on the spot — we'll tell you honestly whether you need a new battery or if there's
                      another issue. <strong className="text-foreground">90-day warranty.</strong> Walk in to our St.
                      Vital or Thompson location, or get a quote online.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                    <Button size="lg" className="gap-2" asChild>
                      <a href="/#quote">
                        <MessageSquare className="h-5 w-5" />
                        Get Battery Quote
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="gap-2" asChild>
                      <a href="/#quote">
                        <Activity className="h-5 w-5" />
                        Check Battery Health (Free)
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Or call{" "}
                    <a href={`tel:${PRIMARY_PHONE}`} className="font-medium text-primary hover:underline">
                      {PRIMARY_PHONE_FORMATTED}
                    </a>
                  </p>

                  {/* Trust badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {trustBadges.map((badge, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground"
                      >
                        <badge.icon className="h-3.5 w-3.5 text-primary" />
                        {badge.label}
                      </div>
                    ))}
                  </div>

                  {/* Device category icons */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {deviceCategories.map((cat, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                      >
                        <cat.icon className="h-4 w-4 text-primary" />
                        {cat.label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hero image */}
                <div className="relative order-first lg:order-last">
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/40 blur-2xl" aria-hidden="true" />
                  <img
                    src={heroBatteryImage}
                    alt="Mobile Tech Lab certified technician performing an iPhone battery health diagnostic in Winnipeg, with the device opened on a static mat and battery health software showing Maximum Capacity at 78%."
                    width={1536}
                    height={1024}
                    className="relative w-full rounded-2xl border border-border object-cover shadow-2xl"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />
          </section>

          {/* SECTION 2 — APPLE IRP CALLOUT */}
          <section className="bg-muted/40 py-16 lg:py-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Apple className="h-6 w-6 text-primary" />
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground">
                    <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                    Authorized Program
                  </div>
                </div>
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                  Apple Independent Repair Provider
                </h2>
                <div className="space-y-4 text-base text-muted-foreground md:text-lg">
                  <p>
                    Mobile Tech Lab is an authorized Apple Independent Repair Provider (IRP). This authorization means
                    we have direct access to Genuine Apple parts — including batteries — and use Apple's GSX system to
                    pair them correctly to your device.
                  </p>
                  <p className="font-medium text-foreground">What this means for you:</p>
                  <ul className="space-y-2">
                    {[
                      "When you choose a Genuine Apple battery, your iPhone displays Battery Health normally with Maximum Capacity percentage",
                      "No 'Important Battery Message' notification appears at any time",
                      "Same Genuine Apple parts that Apple's own Service Centres use",
                      "Same pricing as Apple's official Service Centre repair",
                      "We diagnose and service in-shop — typically faster than Apple's mail-in or appointment-only service",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    Most independent repair shops in Winnipeg are NOT IRP-authorized — meaning they cannot install
                    Genuine Apple batteries that pair correctly with iOS. We're one of the few who can.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2.5 — APPLE STORE COMPARISON CALLOUT */}
          <section className="bg-secondary/30 py-16 lg:py-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <Apple className="h-3.5 w-3.5" />
                  Apple IRP Advantage
                </div>
                <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                  Same Genuine Apple Battery. Same Price. Often Faster Than Apple Store.
                </h2>
                <div className="space-y-4 text-base text-muted-foreground md:text-lg">
                  <p>
                    Apple Store battery service in Winnipeg requires booking an appointment — sometimes days or weeks
                    out. Even after your appointment, parts may need ordering. Total turnaround can be 3-7 days from
                    booking to repair completion.
                  </p>
                  <p>
                    As an Apple Independent Repair Provider, we install the same Genuine Apple battery at the same
                    Apple Service Centre price — typically same-day or within 24-48 hours. No appointment required for
                    walk-ins. No parts-ordering wait.
                  </p>
                  <p className="font-medium text-foreground">What this means in practice:</p>
                  <ul className="space-y-2">
                    {[
                      "Same Genuine Apple part Apple's own Service Centres use",
                      "Same pricing as Apple's official Service Centre repair",
                      "Walk in any time during business hours — no booking required",
                      "Most Genuine Apple battery replacements completed same-day if parts in stock",
                      "24-48 hour turnaround if specific model parts need to be pulled",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    We're not here to undercut Apple. We match their price exactly on Genuine Apple batteries. We're
                    just usually quicker.
                  </p>
                </div>
                <div className="mt-8">
                  <Button size="lg" className="gap-2" asChild>
                    <a href="/#quote">
                      <MessageSquare className="h-5 w-5" />
                      Get Quote — Walk-In Welcome
                    </a>
                  </Button>
                </div>
              </div>

              {/* PATCH 1 — Apple Store pricing comparison (moved here) */}
              <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-border bg-card p-6 sm:p-8">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">iPhone Battery Pricing vs Apple Store</h3>
                <p className="mb-6 text-sm text-muted-foreground md:text-base">
                  We charge exactly what Apple charges for Genuine Apple battery replacement. No markup. No premium.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/40 text-left">
                        <th className="p-3 font-semibold text-foreground">iPhone Model</th>
                        <th className="p-3 font-semibold text-foreground">Apple Store (Genuine)</th>
                        <th className="p-3 font-semibold text-foreground">MTL (Genuine)</th>
                        <th className="p-3 font-semibold text-blue-600">MTL (Third-Party)</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground">
                      {[
                        ["iPhone 8 / SE", "$129", "$129", "from $89 (save $40)"],
                        ["iPhone X / XR / XS / XS Max", "$129", "$129", "from $99 (save $30)"],
                        ["iPhone 11 series", "$129", "$129", "from $99 (save $30)"],
                        ["iPhone 12 / 13 series", "$129–$149", "$129–$149", "from $109 (save $20–$40)"],
                        ["iPhone 14 / 15 series", "$149–$169", "$149–$169", "from $129 (save $20–$40)"],
                        ["iPhone 16 / 17 series", "$179–$199", "$179–$199", "from $149 (save $30–$50)"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-border/60">
                          <td className="p-3 font-medium">{row[0]}</td>
                          <td className="p-3 text-muted-foreground">{row[1]}</td>
                          <td className="p-3">{row[2]}</td>
                          <td className="p-3 font-medium text-blue-600">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-6 text-sm text-muted-foreground md:text-base">
                  Apple's posted prices for iPhone battery service are the same as ours when you choose Genuine
                  Apple. Where we add value: walk-in availability, same-day service in most cases, and the option to
                  save $20–$50 with our quality third-party battery if you prefer.
                </p>
                <p className="mt-3 text-sm">
                  <a
                    href="https://support.apple.com/en-ca/iphone/repair"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    See Apple's official iPhone repair pricing
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </p>
                <p className="mt-4 text-xs text-muted-foreground">
                  Apple Service pricing verified October 2025. Apple may update pricing — we update ours to match
                  Genuine Apple service pricing. Final price determined after physical inspection.
                </p>
              </div>

              {/* PATCH 4 — Why Customers Choose Us Over Apple Store */}
              <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-border bg-card p-6 sm:p-8">
                <h3 className="mb-2 text-2xl font-bold md:text-3xl">
                  Why Winnipeg Customers Choose Us Over Apple Store
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Same Genuine Apple battery. Same Apple price. Here's what's different:
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      title: "Walk-in welcome",
                      body: "No appointment booking required. Apple Store typically requires booking 1-2 weeks in advance for battery service.",
                    },
                    {
                      title: "Same-day service",
                      body: "Most Genuine Apple battery replacements completed same-day if parts in stock. Apple Store may need to order parts, extending turnaround to 3-7 days from booking to completion.",
                    },
                    {
                      title: "Two Manitoba locations",
                      body: "St. Vital (Winnipeg) and Thompson, MB. Apple's only authorized Service Centre in Manitoba is at Polo Park — a longer drive for many customers and the only option for the entire province.",
                    },
                    {
                      title: "Same Genuine Apple part",
                      body: "As an Apple Independent Repair Provider, we install the exact same Genuine Apple battery Apple's Service Centres use, paired correctly via Apple's GSX system.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-foreground">
                  We respect Apple Store and the work they do. We're an Apple Independent Repair Provider — we work
                  within their ecosystem using their parts and pairing systems. The only difference is convenience:
                  we're closer to most Winnipeg neighbourhoods, no booking required, and typically faster end-to-end.
                  Same Genuine Apple part. Same Apple price. Less waiting.
                </p>
                <p className="mt-3 text-xs text-muted-foreground">
                  Apple Store appointment availability and turnaround vary by season and demand. Verify current Apple
                  Store wait times directly with Apple if relevant to your decision.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 3 — QUICK SUMMARY */}
          <section className="py-12 lg:py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-muted/40 p-6 sm:p-8">
                <h2 className="mb-1 text-2xl font-bold text-foreground">Quick Summary</h2>
                <p className="mb-5 text-muted-foreground">Battery replacement at Mobile Tech Lab in 30 seconds:</p>
                <ul className="space-y-3">
                  {[
                    "Mobile Tech Lab is an authorized Apple Independent Repair Provider — we offer Genuine Apple batteries for iPhone at the same price as Apple's official service.",
                    "For iPhone, two options: Genuine Apple battery (no iOS notification, same price as Apple) OR quality third-party battery ($20-30+ less, with iOS notification).",
                    "We also replace batteries for iPad, Samsung Galaxy, Android phones, and MacBook at our St. Vital (Winnipeg) and Thompson, MB locations.",
                    "Free battery health check on the spot — we tell you honestly whether you need a new battery, with no pressure.",
                    "90-day warranty against manufacturing defects on ALL battery replacements (Genuine or third-party). Note: ALL shops, including Apple, limit battery warranty because batteries naturally degrade.",
                  ].map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span className="text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-medium text-foreground">
                    Walk-ins welcome at both locations during business hours. Most batteries replaced same-day or
                    within 24-48 hours.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4 — WHEN TO REPLACE */}
          <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-5xl">
                <div className="mb-12 text-center">
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">When Should You Replace Your Battery?</h2>
                  <p className="mx-auto max-w-2xl text-muted-foreground">
                    Honest signs it's time — and signs it might be a different problem.
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-primary/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <BatteryCharging className="h-5 w-5 text-primary" />
                        Signs It's Time for a New Battery
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        {[
                          "Phone/tablet shuts down at 20-30% battery (or higher)",
                          "Battery health below 80% (iPhone Settings → Battery → Battery Health)",
                          "Phone gets unusually hot during normal use",
                          "Charging takes much longer than it used to",
                          "Battery drains rapidly even with light use",
                          "Phone won't hold a charge overnight in standby mode",
                        ].map((item, i) => (
                          <li key={i} className="flex gap-2">
                            <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <AlertTriangle className="h-5 w-5 text-destructive" />
                        Signs It Might NOT Be the Battery
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>
                          Phone won't charge at all (could be charging port — see{" "}
                          <Link to="/repair/iphone" className="text-primary hover:underline">
                            iPhone repair
                          </Link>
                          )
                        </li>
                        <li>
                          Phone is hot AND swollen on the back (could be battery failure — bring in immediately, don't
                          charge further)
                        </li>
                        <li>
                          Phone died after liquid exposure (could be water damage — see{" "}
                          <Link to="/repair/water-damage" className="text-primary hover:underline">
                            water damage repair
                          </Link>
                          )
                        </li>
                        <li>Phone shuts down only after using specific apps (could be software, not hardware)</li>
                        <li>
                          Phone is over 5 years old AND running latest iOS (could be performance throttling — battery
                          replacement helps but doesn't fix everything)
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <p className="mx-auto mt-8 max-w-3xl text-center text-base text-muted-foreground">
                  Not sure? Walk in — we'll do a free battery health check, no commitment. We'd rather tell you honestly
                  that your battery is fine than sell you a replacement you don't need.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4.5 — HOW TO CHECK BATTERY HEALTH */}
          <section className="bg-muted/40 py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl">
                <div className="mb-10 text-center">
                  <h2 className="mb-3 text-3xl font-bold md:text-4xl">
                    How to Check Your iPhone Battery Health (Before Walking In)
                  </h2>
                  <p className="mx-auto max-w-2xl text-muted-foreground">
                    Takes 30 seconds. Helps you decide if you actually need a replacement.
                  </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
                  <div className="space-y-5">
                    <p className="text-muted-foreground">
                      Apple includes a built-in battery health diagnostic on every iPhone. Here's how to check yours:
                    </p>
                    <ol className="space-y-3">
                      {[
                        "Open the Settings app",
                        "Tap Battery",
                        "Tap Battery Health & Charging",
                        "Look at 'Maximum Capacity'",
                      ].map((step, i) => (
                        <li key={i} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                            {i + 1}
                          </div>
                          <p className="pt-1 text-foreground">
                            <strong>Step {i + 1}:</strong> {step}
                          </p>
                        </li>
                      ))}
                    </ol>
                    <div className="rounded-lg border border-border bg-card p-5">
                      <p className="mb-3 font-semibold text-foreground">What the number means:</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                          <strong className="text-foreground">100% — 90%:</strong> Battery is healthy. Replacement not
                          needed.
                        </li>
                        <li>
                          <strong className="text-foreground">89% — 80%:</strong> Battery is degraded but still
                          functional. Apple's threshold for replacement recommendation is 80%. Worth considering
                          replacement if you're noticing performance issues.
                        </li>
                        <li>
                          <strong className="text-foreground">Below 80%:</strong> Apple recommends replacement. You'll
                          likely see degraded performance and shorter battery life.
                        </li>
                        <li>
                          <strong className="text-foreground">'Service' Message:</strong> Battery is significantly
                          degraded or has a defect. Replacement strongly recommended.
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">For Samsung and Android:</strong> Battery health is harder to
                      check natively. We use AccuBattery and similar diagnostic tools at our shop — bring it in for a
                      free check.
                    </p>
                    <p className="text-foreground">
                      If your iPhone shows below 80%, walk in any time for a quote.
                    </p>
                    <Button size="lg" className="gap-2" asChild>
                      <a href="/#quote">
                        <MessageSquare className="h-5 w-5" />
                        Battery Below 80%? Get Your Quote
                      </a>
                    </Button>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="flex h-full w-full items-center justify-center rounded-2xl border border-dashed border-border bg-card p-8 text-center text-sm text-muted-foreground">
                      [Image placeholder — Battery Health navigation screenshot showing Settings → Battery → Battery
                      Health & Charging → Maximum Capacity percentage highlighted]
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5 — DEVICE-SPECIFIC */}
          <section className="bg-secondary/20 py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Battery Replacement by Device</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Pricing and process for each device category.
                </p>
              </div>

              {/* 5A — iPhone */}
              <div id="iphone" className="mx-auto mb-16 max-w-5xl scroll-mt-24">
                <h3 className="mb-4 text-2xl font-bold md:text-3xl">iPhone Battery Replacement</h3>
                <p className="mb-8 text-muted-foreground">
                  Apple recommends battery replacement when battery health drops below 80%. We replace iPhone batteries
                  on all models from iPhone 8 through the latest iPhone 17 Pro Max. As an Apple Independent Repair
                  Provider, we offer two options for iPhone battery replacement — and we're upfront about the trade-offs
                  of each so you can decide what's right for you.
                </p>

                {/* Two-option comparison */}
                <div className="mb-10 grid gap-6 lg:grid-cols-2">
                  {/* Option A — Genuine */}
                  <Card className="border-2 border-primary/40 bg-card">
                    <CardHeader>
                      <div className="mb-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        <Apple className="h-3.5 w-3.5" />
                        Apple IRP
                      </div>
                      <CardTitle className="text-2xl">Option A: Genuine Apple Battery</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Same price as Apple's official service. No iOS notification.
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        OEM Apple battery sourced through our Apple IRP authorization and paired to your iPhone via
                        Apple's GSX system.
                      </p>
                      <ul className="space-y-2 text-sm">
                        {[
                          "Battery Health displays normally with Maximum Capacity %",
                          "No 'Important Battery Message' notification — ever",
                          "Same Genuine Apple part Apple's own Service Centres use",
                          "Same pricing as Apple's official Service Centre repair",
                          "Same-day or 24-48 hour turnaround",
                          "90-day warranty against manufacturing defects",
                        ].map((item, i) => (
                          <li key={i} className="flex gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <span className="text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="rounded-lg border border-border bg-muted/40 p-4">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Pricing (Genuine)
                        </p>
                        <ul className="space-y-1 text-sm text-foreground">
                          <li>iPhone 8 / SE: ~$129</li>
                          <li>iPhone X / XR / XS / XS Max: ~$129</li>
                          <li>iPhone 11 series: ~$129</li>
                          <li>iPhone 12 / 13 series: ~$129–$149</li>
                          <li>iPhone 14 / 15 series: ~$149–$169</li>
                          <li>iPhone 16 / 17 series: ~$179–$199</li>
                        </ul>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Best for:</strong> Customers who want zero compromise on iOS
                        integration and don't want any notification or warning messages on their device.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Option B — Third-party */}
                  <Card className="relative overflow-hidden border-2 border-blue-500/60 bg-card shadow-lg">
                    {/* Full-width ribbon */}
                    <div className="flex items-center justify-center gap-2 bg-blue-600 px-4 py-2 text-sm font-bold uppercase tracking-wide text-white">
                      <Star className="h-4 w-4 fill-white" />
                      Most Customers Choose This
                    </div>
                    <CardHeader className="pt-5">
                      <p className="mb-2 text-sm font-semibold text-blue-600">
                        Most customers save $20–$50 with this option.
                      </p>
                      <div className="mb-2 inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground">
                        Save $20–30+
                      </div>
                      <CardTitle className="text-2xl">Option B: Quality Third-Party Battery</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        $20-30+ less than Genuine. Cosmetic iOS indicator only.
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="rounded-md border border-blue-500/20 bg-blue-500/5 p-3 text-sm italic text-foreground">
                        Trusted by hundreds of MTL customers — third-party batteries are functionally identical to
                        Genuine in everyday use.
                      </p>
                      <p className="text-muted-foreground">
                        Quality replacement battery (not bargain-bin parts) with the same chemistry and capacity as
                        Genuine. Functional performance is identical.
                      </p>
                      <ul className="space-y-2 text-sm">
                        {[
                          "Same charging behavior, lifespan, and capacity as Genuine",
                          "No impact on Face ID, water resistance, or other features",
                          "$20-30+ less than Genuine Apple option",
                          "Same-day or 24-48 hour turnaround",
                          "90-day warranty against manufacturing defects (same as Genuine)",
                        ].map((item, i) => (
                          <li key={i} className="flex gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <span className="text-foreground">{item}</span>
                          </li>
                        ))}
                        <li className="flex gap-2">
                          <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                          <span className="text-foreground">
                            iOS shows a non-Apple battery indicator after install (cosmetic only — see timeline below)
                          </span>
                        </li>
                      </ul>
                      <div className="rounded-lg border border-border bg-muted/40 p-4">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Pricing (Third-Party)
                        </p>
                        <ul className="space-y-1 text-sm text-foreground">
                          <li>iPhone 8 / SE: from $89–$109</li>
                          <li>iPhone X / XR / XS / XS Max: from $99–$109</li>
                          <li>iPhone 11 series: from $99–$109</li>
                          <li>iPhone 12 / 13 series: from $109–$129</li>
                          <li>iPhone 14 / 15 series: from $129–$149</li>
                          <li>iPhone 16 / 17 series: from $149–$179</li>
                        </ul>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Best for:</strong> Customers who want to save money and
                        don't mind a cosmetic notification in iOS Settings.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Apple price comparison moved to Section 2.5 (above) */}

                {/* Notification timeline callout */}
                <div className="mb-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
                  <h4 className="mb-1 text-xl font-bold">Worried About the Notification? Here's How It Actually Works</h4>
                  <p className="mb-6 text-sm text-muted-foreground">
                    Here's exactly what to expect — and when it disappears.
                  </p>
                  <p className="mb-6 text-muted-foreground">
                    If you choose the Third-Party option, iOS displays an 'Important Battery Message' notification per
                    Apple's detection system. The notification follows a graduated visibility timeline that we want you
                    to understand upfront:
                  </p>
                  <div className="grid gap-4 md:grid-cols-3">
                    {[
                      {
                        icon: Lock,
                        title: "Days 1–4",
                        subtitle: "Lock Screen Notification",
                        body: "The notification appears on your lock screen immediately after installation. You'll see it each time you wake the screen.",
                      },
                      {
                        icon: Settings,
                        title: "Days 5–19",
                        subtitle: "Main Settings Menu",
                        body: "The notification disappears from the lock screen and moves to the main Settings app menu. You'll see it when you open Settings.",
                      },
                      {
                        icon: Search,
                        title: "Day 20+",
                        subtitle: "Parts & Service History (Permanent)",
                        body: "After approximately 19 days, the notification only appears if you manually navigate to Settings → General → About → Parts and Service History.",
                      },
                    ].map((step, i) => (
                      <div key={i} className="rounded-lg border border-border bg-muted/30 p-5">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <step.icon className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{step.title}</p>
                        <p className="mb-2 text-base font-semibold text-foreground">{step.subtitle}</p>
                        <p className="text-sm text-muted-foreground">{step.body}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-foreground">
                    <strong>Important:</strong> This notification does NOT affect battery performance, charging speed,
                    lifespan, or any device functionality at any point. It's purely Apple's way of identifying
                    non-Apple parts. Your phone works identically to one with a Genuine Apple battery.
                  </p>
                </div>

                {/* Which option — scannable 5-second decision */}
                <div className="mb-8 rounded-2xl border border-border bg-muted/40 p-6 sm:p-8">
                  <h4 className="mb-1 text-xl font-bold">Which Option Should You Choose?</h4>
                  <p className="mb-6 text-muted-foreground">Honest take in 5 seconds:</p>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-xl border border-primary/30 bg-card p-5">
                      <p className="mb-3 flex items-center gap-2 text-base font-bold text-foreground">
                        <Apple className="h-5 w-5 text-primary" />
                        Genuine Apple
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" /><span>You sell or trade your iPhone often (maintains higher resale value)</span></li>
                        <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" /><span>You have AppleCare+ remaining and want to preserve coverage</span></li>
                        <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" /><span>You don't want any iOS notification messages</span></li>
                      </ul>
                    </div>
                    <div className="rounded-xl border-2 border-blue-500/40 bg-card p-5">
                      <p className="mb-3 flex items-center gap-2 text-base font-bold text-foreground">
                        <span aria-hidden="true">💰</span>
                        Quality Third-Party
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" /><span>You want to save $20–$50</span></li>
                        <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" /><span>You'll keep this iPhone until you're ready to upgrade</span></li>
                        <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" /><span>You're okay with a cosmetic iOS notification (visible only in Settings after 19 days)</span></li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-foreground">
                    <strong>Bottom line:</strong> Most customers choose Quality Third-Party for the savings. Choose
                    Genuine Apple if you sell/trade your iPhone often, have AppleCare+, or simply prefer no
                    notification messages. Both come with the same 90-day warranty.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button size="lg" asChild>
                    <a href="/#quote">Get iPhone Battery Quote</a>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    See our full{" "}
                    <Link to="/repair/iphone" className="text-primary hover:underline">
                      iPhone repair page
                    </Link>{" "}
                    for screen, charging port, and other repairs.
                  </p>
                </div>
              </div>

              {/* MID-PAGE CTA #1 — After iPhone section */}
              <div className="mx-auto mb-12 max-w-5xl">
                <div className="rounded-xl border border-border bg-card p-6 text-center sm:p-8">
                  <p className="mb-4 text-lg font-semibold text-foreground">
                    Ready for Your iPhone Battery Replacement? Walk in or get an instant quote.
                  </p>
                  <div className="flex flex-col justify-center gap-3 sm:flex-row">
                    <Button size="lg" className="gap-2" asChild>
                      <a href="/#quote">
                        <MessageSquare className="h-5 w-5" />
                        Get iPhone Battery Quote
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="gap-2" asChild>
                      <a href={`tel:${PRIMARY_PHONE}`}>
                        <Phone className="h-5 w-5" />
                        Call {PRIMARY_PHONE_FORMATTED}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* 5B–5E shared layout helper */}
              {[
                {
                  id: "ipad",
                  title: "iPad Battery Replacement",
                  body: "iPad batteries can last 5-7 years with normal use, but eventually degrade. We replace iPad batteries on most models — from iPad mini to iPad Pro M-series.",
                  pricing: [
                    "iPad mini (older models): from $129",
                    "iPad Air / standard iPad: from $149",
                    "iPad Pro 11-inch: from $179",
                    "iPad Pro 12.9-inch / 13-inch: from $199–$229",
                    "iPad Pro M4 (newest models, 2024+) — please call (204) 500-9757 for current pricing and parts availability",
                  ],
                  process: [
                    "iPad batteries are glued in place — replacement is more involved than iPhone (typically 2-3 hours)",
                    "We may need to order specific iPad battery parts (not always in stock)",
                    "Diagnostic fee $49 if parts need ordering, credited toward repair",
                    "90-day warranty against manufacturing defects",
                  ],
                  note: "iPad battery replacement is more complex than iPhone due to internal construction. We do NOT recommend iPad battery replacement at home — high risk of damage to the screen during separation. Apple's official iPad battery service typically replaces the entire device for ~$200 USD; we offer in-house replacement at competitive Canadian pricing.",
                  cta: "Get iPad Battery Quote",
                  crosslink: { to: "/repair/ipad", label: "iPad repair service" },
                  crosslinkSuffix: " for screen and other repairs.",
                },
                {
                  id: "samsung",
                  title: "Samsung Galaxy Battery Replacement",
                  body: "Samsung Galaxy batteries can be replaced on most flagship and mid-range models. We use OEM Samsung Service Pack parts where available for Premium tier replacement.",
                  pricing: [
                    "Samsung Galaxy A series: from $89",
                    "Samsung Galaxy S series (S20–S24): from $129",
                    "Samsung Galaxy S25 / current flagships: from $149–$179",
                    "Samsung Galaxy Note series: from $129",
                    "Samsung Galaxy Z Fold (battery): from $179",
                    "Samsung Galaxy Z Flip (battery): from $149",
                  ],
                  process: [
                    "Free battery health check using diagnostic tools (AccuBattery or equivalent)",
                    "Most Galaxy battery replacements completed same-day when parts in stock",
                    "Foldable batteries (Z Fold/Flip) require special handling — typically 1-2 day turnaround",
                    "90-day warranty against manufacturing defects",
                  ],
                  note: "Samsung doesn't expose battery health as transparently as Apple. We use third-party diagnostic tools to assess battery condition. If your Galaxy is shutting down at 30%+ battery, charging slowly, or running warm, it's likely time.",
                  cta: "Get Samsung Battery Quote",
                  crosslink: { to: "/repair/samsung", label: "Samsung Galaxy repair page" },
                  crosslinkSuffix: " for screen, foldable, and other repairs.",
                },
                {
                  id: "android",
                  title: "Android Battery Replacement",
                  body: "We replace batteries on most major Android brands — Google Pixel, OnePlus, Motorola, Sony Xperia, and others.",
                  pricing: [
                    "Google Pixel (3–9 series): from $99–$179",
                    "OnePlus: from $99–$169",
                    "Motorola: from $89–$149",
                    "Other Android brands: contact for quote",
                  ],
                  process: [
                    "Battery diagnostic on the spot",
                    "Most Android batteries replaced same-day when parts in stock",
                    "For less common models, parts may need 2-3 days to arrive",
                    "Diagnostic fee $49 if parts need ordering, credited toward repair",
                    "90-day warranty against manufacturing defects",
                  ],
                  note: "Some Android manufacturers (especially newer Pixel and Sony models) use heavily glued construction that increases repair time and complexity. We'll quote accurately based on your specific model.",
                  cta: "Get Android Battery Quote",
                  crosslink: null,
                  crosslinkSuffix: "",
                },
                {
                  id: "macbook",
                  title: "MacBook Battery Replacement",
                  body: "MacBook batteries are designed for ~1000 charge cycles. After heavy use, expect 4-6 years before noticeable degradation. We replace MacBook batteries on most models from 2015 onward.",
                  pricing: [
                    "MacBook Air (2015–2019, Intel): from $179",
                    "MacBook Air (M1/M2/M3): from $199",
                    "MacBook Pro 13-inch (Intel/M-series): from $199",
                    "MacBook Pro 14-inch / 16-inch (M-series): from $249–$299",
                  ],
                  process: [
                    "Free battery cycle count check (we use coconutBattery or similar diagnostic)",
                    "MacBook batteries are bonded with adhesive — replacement requires careful removal (typically 2-4 hour service)",
                    "May require parts ordering for specific MacBook models",
                    "Diagnostic fee $49 if parts need ordering, credited toward repair",
                    "90-day warranty against manufacturing defects",
                  ],
                  note: "Apple charges $129-$329 USD for battery service depending on model. Our pricing is competitive in Canadian dollars with faster turnaround than Apple's mail-in service.",
                  cta: "Get MacBook Battery Quote",
                  crosslink: { to: "/repair/macbook", label: "MacBook repair service" },
                  crosslinkSuffix: " for screen, keyboard, and other repairs.",
                },
              ].map((dev) => (
                <div key={dev.id} id={dev.id} className="mx-auto mb-12 max-w-5xl scroll-mt-24 last:mb-0">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl md:text-3xl">{dev.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground">{dev.body}</p>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-lg border border-border bg-muted/40 p-5">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            Pricing
                          </p>
                          <ul className="space-y-1 text-sm text-foreground">
                            {dev.pricing.map((p, i) => (
                              <li key={i}>• {p}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-lg border border-border bg-muted/40 p-5">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            Process
                          </p>
                          <ul className="space-y-1 text-sm text-foreground">
                            {dev.process.map((p, i) => (
                              <li key={i}>• {p}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Note:</strong> {dev.note}
                      </p>
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Button asChild>
                          <a href="/#quote">{dev.cta}</a>
                        </Button>
                        {dev.crosslink && (
                          <p className="text-sm text-muted-foreground">
                            See our full{" "}
                            <Link to={dev.crosslink.to} className="text-primary hover:underline">
                              {dev.crosslink.label}
                            </Link>
                            {dev.crosslinkSuffix}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 6 — WARRANTY POLICY */}
          <section className="bg-muted/40 py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl">
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  Our Battery Warranty: Why It's 90 Days, Not Lifetime
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Most repairs we do (screens, charging ports, cameras) carry a lifetime warranty on Premium tier
                    parts against manufacturing defects.{" "}
                    <strong className="text-foreground">Battery replacements are different.</strong>
                  </p>
                  <p>
                    All battery replacements we do — whether Genuine Apple or quality third-party, regardless of device
                    or tier — carry a{" "}
                    <strong className="text-foreground">90-day warranty against manufacturing defects</strong>.
                  </p>
                  <p className="font-semibold text-foreground">Why? Batteries naturally degrade with use.</p>
                  <p>
                    Even Apple's own battery service only warranties against defects, not against natural capacity
                    loss. A battery installed today is at 100% health; after 6 months of use, it's normal for it to be
                    at 95-98%. After a year, 90-93%. This is physics, not a defect.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border border-primary/30 bg-card p-5">
                      <p className="mb-2 font-semibold text-foreground">What our 90-day warranty covers:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Battery does not hold any meaningful charge from day one</li>
                        <li>• Battery shows abnormal swelling within 90 days</li>
                        <li>• Battery completely fails to charge within 90 days</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-5">
                      <p className="mb-2 font-semibold text-foreground">What our 90-day warranty does NOT cover:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Natural capacity reduction over time (this is normal)</li>
                        <li>• Damage from drops, water, or impact after installation</li>
                        <li>
                          • Liquid damage to the device — devices that have ever experienced liquid damage carry NO
                          warranty on any component, including batteries
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    We're upfront about this because we'd rather you understand exactly what you're buying. A new
                    battery will give your device meaningful life back — but it's not a permanent fix. Batteries are
                    consumables.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* MID-PAGE CTA #2 — After warranty */}
          <section className="bg-secondary/30 py-10">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-6 text-center sm:p-8">
                <p className="mb-4 text-lg font-semibold text-foreground">
                  Questions? We're happy to walk you through your options before you commit.
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                  <Button size="lg" className="gap-2" asChild>
                    <a href="/#quote">
                      <MessageSquare className="h-5 w-5" />
                      Get Battery Quote
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2" asChild>
                    <a href={`tel:${PRIMARY_PHONE}`}>
                      <Phone className="h-5 w-5" />
                      Call {PRIMARY_PHONE_FORMATTED}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7 — PROCESS */}
          <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">What to Expect When You Bring Your Device In</h2>
                </div>
                <ol className="space-y-4">
                  {[
                    {
                      title: "Free battery health check",
                      body: "We connect your device to diagnostic tools and show you your actual battery health. Takes 5 minutes. No commitment.",
                    },
                    {
                      title: "Honest recommendation",
                      body: "If your battery is fine, we'll tell you. If a different repair is needed, we'll explain. We don't sell batteries customers don't need.",
                    },
                    {
                      title: "Quote and confirmation",
                      body: "For iPhone, we quote BOTH Genuine Apple and Third-Party prices so you can choose. For other devices, we provide pricing based on your specific model. You decide whether to proceed.",
                    },
                    {
                      title: "Battery replacement",
                      body: "Most iPhone/Android batteries replaced in 30-60 minutes. iPad/MacBook may take 2-4 hours or require parts ordering.",
                    },
                    {
                      title: "Functional testing + warranty registration",
                      body: "We test the device, confirm proper charging behavior, and register your 90-day warranty.",
                    },
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4 rounded-lg border border-border bg-card p-5">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground">
                        {i + 1}
                      </div>
                      <div>
                        <p className="mb-1 font-semibold text-foreground">{step.title}</p>
                        <p className="text-sm text-muted-foreground">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-8 text-center text-base text-muted-foreground">
                  Walk in any time during business hours, or book a quote online for your specific device.
                </p>
              </div>
            </div>
          </section>

          <div id="locations" className="scroll-mt-24">
            <LocationCards heading="Visit Our Battery Replacement Locations" />
          </div>

          {/* MID-PAGE CTA #3 — Before FAQ */}
          <section className="bg-secondary/30 py-10">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-6 text-center sm:p-8">
                <p className="mb-4 text-lg font-semibold text-foreground">
                  Most batteries replaced same-day. Walk in or schedule online.
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                  <Button size="lg" className="gap-2" asChild>
                    <a href="/#quote">
                      <MessageSquare className="h-5 w-5" />
                      Get Battery Quote
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2" asChild>
                    <a href="#locations">
                      Visit Our Locations
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 8 — FAQ */}
          <FAQSection
            deviceName="Battery Replacement"
            faqs={faqs}
            heading="Frequently Asked Questions"
            subheading="Common questions about battery replacement at Mobile Tech Lab."
          />

          {/* SECTION 9 — FINAL CTA */}
          <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Get Your Battery Replaced?</h2>
                <p className="mb-8 text-base text-muted-foreground md:text-lg">
                  Walk in for a free battery health check at our St. Vital or Thompson location — no commitment. We'll
                  show you your actual battery health, explain your options honestly (including both Genuine Apple and
                  third-party for iPhone), and quote pricing based on your specific device. Most batteries replaced
                  same-day or within 24-48 hours. If you're not sure your device needs a battery, or if you want a
                  quote first, get a quote online or call us.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Button size="lg" className="gap-2" asChild>
                    <a href="/#quote">
                      <MessageSquare className="h-5 w-5" />
                      Get Battery Quote
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2" asChild>
                    <a href={`tel:${PRIMARY_PHONE}`}>
                      <Phone className="h-5 w-5" />
                      Call {PRIMARY_PHONE_FORMATTED}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <StickyQuoteCTA />
      </div>
    </>
  );
};

export default BatteryReplacement;
