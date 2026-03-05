import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StickyQuoteCTA } from "@/components/repair/StickyQuoteCTA";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQPageSchema } from "@/components/seo/FAQPageSchema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Gamepad2,
  Wrench,
  Shield,
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  Zap,
  Monitor,
  MonitorX,
  Thermometer,
  Power,
  Disc3,
  Joystick,
  Phone,
} from "lucide-react";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";

const breadcrumbItems = [
  { name: "Home", url: "https://mobiletechlab.ca/" },
  { name: "Repairs", url: "https://mobiletechlab.ca/repairs" },
  { name: "Console Repair Winnipeg", url: "https://mobiletechlab.ca/consoles" },
];

const consoleCards = [
  {
    name: "Xbox Repair",
    href: "/repair/xbox",
    icon: Gamepad2,
  },
  {
    name: "PlayStation 5 Repair",
    href: "/repair/ps5",
    icon: Gamepad2,
  },
  {
    name: "PlayStation 4 Repair",
    href: "/repair/ps4",
    icon: Gamepad2,
  },
  {
    name: "Nintendo Switch Repair",
    href: "/repair/nintendo-switch",
    icon: Gamepad2,
  },
  {
    name: "Controller Repair",
    href: "/repair/controller-repair-winnipeg",
    icon: Joystick,
  },
];

const commonIssues = [
  { icon: MonitorX, title: "HDMI Port Damage", description: "No signal or broken HDMI port." },
  { icon: Thermometer, title: "Overheating", description: "Dust buildup or cooling issues." },
  { icon: Power, title: "Power Problems", description: "Console will not turn on or shuts off." },
  { icon: Disc3, title: "Disc Drive Issues", description: "Console not reading discs." },
  { icon: Joystick, title: "Controller Problems", description: "Stick drift or connection issues." },
];

const whyChoose = [
  { icon: Gamepad2, title: "Console Repair Specialists", text: "Experienced with Xbox, PlayStation, and Nintendo systems." },
  { icon: Wrench, title: "Board-Level Repairs", text: "We perform HDMI port micro-soldering and internal repairs." },
  { icon: Zap, title: "Fast Turnaround", text: "Many repairs completed same day." },
  { icon: Shield, title: "Warranty on Repairs", text: "Warranty coverage on repaired components." },
];

const neighbourhoods = ["St. Vital", "Garden City", "Transcona", "Fort Garry"];

const faqs = [
  { question: "Can you fix Xbox HDMI ports?", answer: "Yes. HDMI port replacement is one of our most common console repairs." },
  { question: "Do you repair PlayStation consoles?", answer: "Yes. We repair PS5 and PS4 systems including overheating and disc drive issues." },
  { question: "How long does console repair take?", answer: "Many repairs can be completed the same day depending on the issue." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Console Repair Winnipeg",
  description: "Professional gaming console repair in Winnipeg for Xbox, PlayStation, and Nintendo systems. HDMI port repair, overheating fixes, disc drive and controller repairs.",
  provider: {
    "@type": "LocalBusiness",
    name: "Mobile Tech Lab",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "101-604 St Anne's Road",
        addressLocality: "Winnipeg",
        addressRegion: "MB",
        postalCode: "R2M 3C5",
        addressCountry: "CA",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "100-1605 McPhillips St",
        addressLocality: "Winnipeg",
        addressRegion: "MB",
        postalCode: "R2V 0L3",
        addressCountry: "CA",
      },
    ],
    telephone: "+1-204-489-4140",
    url: "https://mobiletechlab.ca",
  },
  areaServed: {
    "@type": "City",
    name: "Winnipeg",
    addressRegion: "MB",
    addressCountry: "CA",
  },
  url: "https://mobiletechlab.ca/consoles",
};

const ConsoleRepairHub = () => {
  return (
    <>
      <Helmet>
        <title>Console Repair Winnipeg | Xbox, PS5 &amp; Gaming Console Fix</title>
        <meta
          name="description"
          content="Console repair in Winnipeg for Xbox, PlayStation, and Nintendo systems. Fix HDMI ports, overheating, disc drive issues, and controller problems."
        />
        <link rel="canonical" href="https://mobiletechlab.ca/consoles" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQPageSchema faqs={faqs} />

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-secondary via-background to-secondary py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              Console Repair Winnipeg
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              If your gaming console stops working, our technicians can help. Mobile Tech Lab repairs Xbox, PlayStation, and Nintendo consoles including HDMI port damage, overheating issues, power problems, disc drive failures, and controller connectivity issues. Many console repairs can be completed the same day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  Get a Free Repair Quote
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+12044894140" className="inline-flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Console Types */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Gaming Consoles We Repair
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {consoleCards.map((device) => (
                <Link key={device.href} to={device.href} className="group">
                  <Card className="h-full border border-border hover:border-primary/50 hover:shadow-md transition-all duration-200">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                          <device.icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {device.name}
                        </h3>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto shrink-0" aria-hidden="true" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="py-12 md:py-16 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Common Console Issues We Fix
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {commonIssues.map((issue) => (
                <Card key={issue.title} className="border border-border">
                  <CardContent className="p-5 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                      <issue.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{issue.title}</h3>
                      <p className="text-sm text-muted-foreground">{issue.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Why Choose Mobile Tech Lab
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {whyChoose.map((item) => (
                <div key={item.title} className="flex items-start gap-3 bg-background p-5 rounded-lg border border-border">
                  <div className="p-2 rounded-full bg-primary/10 text-primary shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-12 md:py-16 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Console Repair Near You
            </h2>
            <p className="text-muted-foreground mb-6">
              Serving Winnipeg including:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {neighbourhoods.map((n) => (
                <span key={n} className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  {n}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground">
              Also serving{" "}
              <Link to="/location/thompson" className="text-primary hover:underline underline-offset-2">
                Thompson, MB
              </Link>.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Console Repair FAQs
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-lg border border-border/50 bg-card px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  Get a Free Repair Quote
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+12044894140" className="inline-flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyQuoteCTA />
    </>
  );
};

export default ConsoleRepairHub;
