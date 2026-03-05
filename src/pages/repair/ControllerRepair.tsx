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

        {/* Repair or Swap */}
        <section className="py-12 md:py-16 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Repair or Swap — Two Ways To Fix Your Controller
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              Choose the option that works best for you.
            </p>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
              {/* Repair Card */}
              <div className="flex flex-col bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Repair Your Controller</h3>
                <p className="text-muted-foreground text-center mb-4 leading-relaxed">
                  We repair controller issues such as stick drift, broken buttons, and charging problems.
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {["Professional component replacement", "Fully tested after repair", "Keep your original controller"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button size="lg" variant="outline" className="w-full" asChild>
                  <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer">
                    Get Repair Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Swap Card — highlighted */}
              <div className="relative flex flex-col bg-card border-2 border-primary/40 rounded-2xl p-6 md:p-8 shadow-md ring-1 ring-primary/10">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                  Faster Option
                </span>
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Gamepad2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Swap For A Pre-Owned Controller</h3>
                <p className="text-muted-foreground text-center mb-4 leading-relaxed">
                  Trade in your damaged controller and apply its value toward a fully tested pre-owned replacement.
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {["Faster than waiting for a repair", "Tested working controller", "Pay only the difference"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="w-full" asChild>
                  <Link to="/trade-in">
                    Check Replacement Options
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Visual flow */}
            <div className="flex items-center justify-center gap-3 md:gap-5 flex-wrap">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10 border border-destructive/20">
                  <Gamepad2 className="h-6 w-6 text-destructive" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Broken Controller</span>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground/60 shrink-0" />
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Trade-In Credit</span>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground/60 shrink-0" />
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-chart-2/10 border border-chart-2/20">
                  <CheckCircle className="h-6 w-6 text-chart-2" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Working Controller</span>
              </div>
            </div>
          </div>
        </section>

        {/* Related Repair Pages */}
        <section className="py-12 md:py-16">
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
