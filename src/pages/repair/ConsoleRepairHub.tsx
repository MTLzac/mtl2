import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StickyQuoteCTA } from "@/components/repair/StickyQuoteCTA";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import {
  Gamepad2,
  Wrench,
  Shield,
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Zap,
  Monitor,
} from "lucide-react";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";

const consoleCards = [
  {
    name: "PlayStation 5 Repair",
    seoName: "PS5 Repair in Winnipeg",
    description: "HDMI port replacement, overheating fixes, disc drive repair, and controller drift for PS5.",
    href: "/repair/ps5",
    icon: Gamepad2,
  },
  {
    name: "PlayStation 4 Repair",
    seoName: "PS4 Repair in Winnipeg",
    description: "HDMI port, power supply, disc drive, and overheating repairs for PS4 and PS4 Pro.",
    href: "/repair/ps4",
    icon: Gamepad2,
  },
  {
    name: "Xbox Repair",
    seoName: "Xbox Repair in Winnipeg",
    description: "HDMI port, power issues, disc drive, and controller repairs for Xbox Series X/S and Xbox One.",
    href: "/repair/xbox",
    icon: Gamepad2,
  },
  {
    name: "Nintendo Switch Repair",
    seoName: "Nintendo Switch Repair in Winnipeg",
    description: "Joy-Con drift, screen replacement, charging port, and battery repairs for all Switch models.",
    href: "/repair/nintendo-switch",
    icon: Gamepad2,
  },
  {
    name: "Steam Deck Repair",
    seoName: "Steam Deck Repair in Winnipeg",
    description: "Screen, joystick, battery, and charging port repairs for Valve Steam Deck.",
    href: "/repair/steam-deck",
    icon: Gamepad2,
  },
];

const benefits = [
  {
    icon: Monitor,
    text: "Board-level HDMI port repairs — not just part swaps",
  },
  {
    icon: Zap,
    text: "Same-day HDMI turnaround for early drop-offs",
  },
  {
    icon: Clock,
    text: "Fast turnaround on Joy-Con drift and controller repairs",
  },
  {
    icon: Shield,
    text: "Warranty coverage on all console repairs",
  },
  {
    icon: MapPin,
    text: "Walk-in and mail-in service from Winnipeg",
  },
  {
    icon: Wrench,
    text: "Experienced technicians for all major consoles",
  },
];

const commonRepairs = [
  {
    title: "HDMI Port Repair",
    description: "The most common console repair we perform. Board-level soldering to replace damaged HDMI ports on PS5, PS4, Xbox Series X/S, and Xbox One — restoring video output without replacing the entire board.",
  },
  {
    title: "Overheating & Thermal Paste",
    description: "Dust buildup and dried thermal paste cause consoles to overheat, throttle, or shut down. We deep-clean internals and reapply quality thermal compound.",
  },
  {
    title: "Disc Drive Repair",
    description: "Disc not reading, ejecting randomly, or making grinding noises? We repair and replace disc drive mechanisms for PlayStation and Xbox consoles.",
  },
  {
    title: "Controller Repairs",
    description: "Stick drift, unresponsive buttons, charging issues, and Bluetooth sync problems for DualSense, DualShock, Xbox controllers, Joy-Cons, and Pro Controllers.",
  },
  {
    title: "Power Issues",
    description: "Console won't turn on or keeps shutting off? We diagnose and repair power supply failures, blown fuses, and faulty power circuits.",
  },
];

const breadcrumbItems = [
  { name: "Home", url: "https://mobiletechlab.ca/" },
  { name: "Repairs", url: "https://mobiletechlab.ca/repairs" },
  { name: "Game Console Repair", url: "https://mobiletechlab.ca/consoles" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbItems.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
};

const ConsoleRepairHub = () => {
  return (
    <>
      <Helmet>
        <title>Game Console Repair Winnipeg | PS5, Xbox, Switch | Mobile Tech Lab</title>
        <meta
          name="description"
          content="Professional game console repair in Winnipeg. HDMI port repair, overheating fixes, disc drive and controller repairs for PS5, PS4, Xbox, Nintendo Switch, and Steam Deck."
        />
        <link rel="canonical" href="https://mobiletechlab.ca/consoles" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <BreadcrumbSchema items={breadcrumbItems} />

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary via-background to-secondary py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              Game Console Repair in Winnipeg
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              From HDMI port failures to Joy-Con drift — we repair PlayStation, Xbox, Nintendo Switch, and Steam Deck consoles in Winnipeg. 
              Board-level repairs by experienced technicians with same-day service available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  Get a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:2049001054" className="inline-flex items-center gap-2">
                  Call (204) 900-1054
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Console Cards Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Console Repair Services We Offer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {consoleCards.map((device) => (
                <Link
                  key={device.href}
                  to={device.href}
                  className="group"
                  aria-label={device.seoName}
                >
                  <Card className="h-full border border-border hover:border-primary/50 hover:shadow-md transition-all duration-200">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                          <device.icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                            {device.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {device.description}
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" aria-hidden="true" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Common Repairs Section */}
        <section className="py-12 md:py-16 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Common Game Console Repairs
            </h2>
            <div className="space-y-4">
              {commonRepairs.map((repair) => (
                <div
                  key={repair.title}
                  className="bg-background p-5 rounded-lg border border-border"
                >
                  <h3 className="font-semibold text-foreground mb-2">{repair.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{repair.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Why Choose Mobile Tech Lab for Console Repair?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-background p-4 rounded-lg border border-border"
                >
                  <div className="p-2 rounded-full bg-primary/10 text-primary shrink-0">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <span className="text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Links */}
        <section className="py-12 md:py-16 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Need a different repair?{" "}
                <Link
                  to="/repairs"
                  className="text-primary hover:underline underline-offset-2"
                >
                  View all repair services
                </Link>
              </p>
              <p>
                Curious about pricing?{" "}
                <Link
                  to="/repair-pricing"
                  className="text-primary hover:underline underline-offset-2"
                >
                  How repair pricing works
                </Link>
              </p>
              <p>
                Have a broken device to sell?{" "}
                <Link
                  to="/trade-in"
                  className="text-primary hover:underline underline-offset-2"
                >
                  Trade-in program
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 md:py-16 bg-primary/5 border-t border-border">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <CheckCircle className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              Ready to Get Your Console Fixed?
            </h2>
            <p className="text-muted-foreground mb-6">
              Get a free quote online or call us to schedule your console repair today.
            </p>
            <Button asChild size="lg">
              <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <StickyQuoteCTA />
    </>
  );
};

export default ConsoleRepairHub;
