import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StickyQuoteCTA } from "@/components/repair/StickyQuoteCTA";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { 
  Smartphone, 
  Tablet, 
  Gamepad2, 
  Wrench, 
  Shield, 
  Clock, 
  MapPin, 
  CheckCircle,
  ArrowRight,
  ExternalLink
} from "lucide-react";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";

const deviceCards = [
  {
    name: "iPhone Repair",
    description: "Screen, battery, and charging port repairs for all iPhone models.",
    href: "/repair/iphone",
    icon: Smartphone,
  },
  {
    name: "Samsung Repair",
    description: "Galaxy phone and tablet repairs with quality parts.",
    href: "/repair/samsung",
    icon: Smartphone,
  },
  {
    name: "iPad Repair",
    description: "Screen replacements, battery service, and more for all iPads.",
    href: "/repair/ipad",
    icon: Tablet,
  },
  {
    name: "Motorola Repair",
    description: "Fast fixes for Moto G, Edge, and Razr devices.",
    href: "/repair/motorola",
    icon: Smartphone,
  },
  {
    name: "TCL Repair",
    description: "Affordable repairs for TCL smartphones and tablets.",
    href: "/repair/tcl",
    icon: Smartphone,
  },
  {
    name: "Google Pixel Repair",
    description: "Expert repairs for Pixel phones, including screen and battery.",
    href: "/repair/google-pixel",
    icon: Smartphone,
  },
  {
    name: "Nintendo Switch Repair",
    description: "Joy-Con drift, screen, and charging port fixes.",
    href: "/repair/nintendo-switch",
    icon: Gamepad2,
  },
  {
    name: "PS4 Repair",
    description: "HDMI port, disc drive, and overheating repairs.",
    href: "/repair/ps4",
    icon: Gamepad2,
  },
  {
    name: "PS5 Repair",
    description: "Professional repairs for PlayStation 5 consoles.",
    href: "/repair/ps5",
    icon: Gamepad2,
  },
  {
    name: "Xbox Repair",
    description: "HDMI, power, and disc drive repairs for Xbox consoles.",
    href: "/repair/xbox",
    icon: Gamepad2,
  },
  {
    name: "Steam Deck Repair",
    description: "Screen, joystick, and battery service for Steam Deck.",
    href: "/repair/steam-deck",
    icon: Gamepad2,
  },
  {
    name: "MacBook Repair",
    description: "Screen, keyboard, and battery repairs for MacBooks.",
    href: "/repair/macbook",
    icon: Tablet,
  },
];

const benefits = [
  {
    icon: MapPin,
    text: "Winnipeg-based walk-in and mail-in repair",
  },
  {
    icon: Wrench,
    text: "Certified technicians with years of experience",
  },
  {
    icon: Clock,
    text: "Fast turnaround times — most repairs same-day",
  },
  {
    icon: Shield,
    text: "90-day warranty on all repairs",
  },
];

const breadcrumbItems = [
  { name: "Home", url: "https://mobiletechlab.ca/" },
  { name: "Repair Services", url: "https://mobiletechlab.ca/repair/" },
];

const RepairHub = () => {
  return (
    <>
      <Helmet>
        <title>Device Repair Services in Winnipeg | Mobile Tech Lab</title>
        <meta
          name="description"
          content="Expert phone, tablet, and game console repair services in Winnipeg. Fast turnaround, certified technicians, and 90-day warranty on all repairs."
        />
        <link rel="canonical" href="https://mobiletechlab.ca/repair/" />
      </Helmet>
      <BreadcrumbSchema items={breadcrumbItems} />

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary via-background to-secondary py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              Device Repair Services in Winnipeg
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Mobile Tech Lab offers expert repair services for phones, game consoles, tablets, and other devices in Winnipeg. 
              Our certified technicians provide fast, reliable service with a 90-day warranty on all repairs.
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

        {/* Device Cards Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Repair Services We Offer in Winnipeg
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {deviceCards.map((device) => (
                <Link key={device.href} to={device.href} className="group">
                  <Card className="h-full border border-border hover:border-primary/50 hover:shadow-md transition-all duration-200">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                          <device.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                            {device.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {device.description}
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-12 md:py-16 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Why Choose Mobile Tech Lab for Repair Services in Winnipeg?
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

        {/* Additional Links Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Looking to buy devices or accessories?{" "}
                <a
                  href="https://shop.mobiletechlab.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline underline-offset-2 inline-flex items-center gap-1"
                >
                  Visit our online shop
                  <ExternalLink className="h-3 w-3" />
                </a>
              </p>
              <p>
                Want to know more about us?{" "}
                <Link
                  to="/"
                  className="text-primary hover:underline underline-offset-2"
                >
                  Learn about Mobile Tech Lab
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
              Ready to Get Your Device Fixed?
            </h2>
            <p className="text-muted-foreground mb-6">
              Get a free quote online or call us to schedule your repair today.
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

export default RepairHub;
