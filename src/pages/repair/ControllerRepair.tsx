import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { StickyQuoteCTA } from "@/components/repair/StickyQuoteCTA";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQPageSchema } from "@/components/seo/FAQPageSchema";
import { StickDriftComparison } from "@/components/repair/StickDriftComparison";
import {
  ArrowRight,
  Phone,
  Gamepad2,
  Crosshair,
  BatteryCharging,
  Usb,
  CircleDot,
  Wifi,
  Wrench,
  Shield,
  Clock,
  DollarSign,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";

const breadcrumbItems = [
  { name: "Home", url: "https://mobiletechlab.ca/" },
  { name: "Console Repair", url: "https://mobiletechlab.ca/consoles" },
  { name: "Controller Repair Winnipeg", url: "https://mobiletechlab.ca/repair/controller-repair-winnipeg" },
];

const faqs = [
  {
    question: "Can you fix controller stick drift?",
    answer: "Yes. Stick drift is one of our most common controller repairs. We replace the worn analog stick module to restore precise input.",
  },
  {
    question: "Do you repair PS5 DualSense controllers?",
    answer: "Yes. We repair DualSense and DualShock controllers including stick drift, trigger issues, and charging port problems.",
  },
  {
    question: "How long does controller repair take?",
    answer: "Most controller repairs can be completed the same day, often within an hour depending on the issue.",
  },
  {
    question: "Is it worth repairing a controller?",
    answer: "In most cases, yes. Replacing a worn analog stick or charging port is significantly cheaper than buying a new controller, especially for Elite or Pro models.",
  },
  {
    question: "Do you repair Xbox Elite controllers?",
    answer: "Yes. We service Xbox Elite Series 2 controllers including stick drift, bumper issues, paddle problems, and trigger repairs.",
  },
];

const controllerRepairs = [
  { icon: Crosshair, label: "Stick drift repair" },
  { icon: Gamepad2, label: "Broken bumper or trigger buttons" },
  { icon: BatteryCharging, label: "Controller not charging" },
  { icon: Usb, label: "USB charging port replacement" },
  { icon: CircleDot, label: "Unresponsive buttons" },
  { icon: Wifi, label: "Controller connection issues" },
];

const whyRepair = [
  { icon: DollarSign, title: "Save Money", text: "Repairing a worn component costs a fraction of a new controller." },
  { icon: Clock, title: "Fast Turnaround", text: "Most repairs completed same day." },
  { icon: Shield, title: "Warranty Included", text: "Warranty coverage on repaired components." },
  { icon: Wrench, title: "Professional Repair", text: "Precise component-level work by experienced technicians." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Controller Repair Winnipeg",
  provider: {
    "@type": "LocalBusiness",
    name: "Mobile Tech Lab",
    url: "https://mobiletechlab.ca",
  },
  areaServed: { "@type": "City", name: "Winnipeg" },
  serviceType: "Controller Repair",
  description: "Professional Xbox and PlayStation controller repair in Winnipeg including stick drift, charging port, and button repairs.",
};

const ControllerRepair = () => {
  return (
    <>
      <Helmet>
        <title>Controller Repair Winnipeg | Xbox & PS5 Controller Repair</title>
        <meta
          name="description"
          content="Need controller repair in Winnipeg? We fix Xbox and PS5 controller issues including stick drift, broken buttons, charging ports, and connectivity problems. Fast diagnostics and professional repair from Mobile Tech Lab."
        />
        <link rel="canonical" href="https://mobiletechlab.ca/repair/controller-repair-winnipeg" />
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
              Controller Repair <span className="text-primary">in Winnipeg</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We repair Xbox and PlayStation controllers in Winnipeg. Common controller problems include stick drift, buttons not responding, broken bumpers, or charging ports that stop working. Our technicians diagnose the issue and replace worn components to restore precise controller input.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  Get Controller Repair Quote
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

        {/* Common Controller Problems + Stick Drift Visual */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Common Controller Problems We Fix
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              Many controller issues start small but quickly make games frustrating or unplayable. One of the most common problems we see is stick drift.
            </p>

            {/* Stick Drift Visual */}
            <div className="max-w-3xl mx-auto mb-8">
              <StickDriftComparison className="mx-auto" />
            </div>

            <div className="max-w-2xl mx-auto space-y-3 text-muted-foreground">
              <p>
                Stick drift happens when worn analog stick components send movement signals even when the joystick is not being touched. This causes characters to move on their own or cameras to slowly drift in games.
              </p>
              <p>
                Our technicians replace the analog stick module to restore precise input control.
              </p>
            </div>
          </div>
        </section>

        {/* Other Controller Repairs */}
        <section className="py-12 md:py-16 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Other Controller Repairs We Offer
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {controllerRepairs.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 bg-background p-4 rounded-lg border border-border"
                >
                  <item.icon className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-center mt-6 text-sm">
              Most controller repairs involve replacing worn internal components such as analog stick modules, charging ports, or button contacts.
            </p>
          </div>
        </section>

        {/* Why Repair */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Why Repair Instead of Replace?
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              Controllers can be expensive to replace. In many cases, repairing worn components such as analog sticks or charging ports is much more affordable. Professional repair restores the controller's functionality and extends its lifespan.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {whyRepair.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 bg-background p-5 rounded-lg border border-border"
                >
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

        {/* Related Repair Pages */}
        <section className="py-12 md:py-16 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Related Console Repair Services
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              We also repair the consoles your controllers connect to. Visit our dedicated repair pages for more information.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" size="lg" asChild>
                <Link to="/repair/ps5">
                  PS5 Repair Winnipeg
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/repair/xbox">
                  Xbox Repair Winnipeg
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/consoles">
                  Console Repair Winnipeg
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Outbound Authority Links */}
        <section className="py-10 md:py-12">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="bg-secondary/30 rounded-xl p-6 border border-border">
              <p className="text-sm text-muted-foreground">
                If you're troubleshooting your controller before bringing it in, official guides from{" "}
                <a
                  href="https://support.playstation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Sony <ExternalLink className="h-3 w-3" />
                </a>{" "}
                and{" "}
                <a
                  href="https://support.xbox.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Microsoft <ExternalLink className="h-3 w-3" />
                </a>{" "}
                may help diagnose certain issues.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 md:py-16 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Controller Repair FAQs
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-background border border-border rounded-lg"
                >
                  <summary className="cursor-pointer p-5 font-semibold text-foreground flex items-center justify-between">
                    {faq.question}
                    <CheckCircle className="h-4 w-4 text-muted-foreground group-open:text-primary transition-colors shrink-0 ml-2" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-muted-foreground">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get Your Controller Fixed
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              If your controller is experiencing stick drift, charging issues, or unresponsive buttons, our technicians can help diagnose and repair the problem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  Get Controller Repair Quote
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

export default ControllerRepair;
