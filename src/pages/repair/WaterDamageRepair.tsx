import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyQuoteCTA } from "@/components/repair/StickyQuoteCTA";
import { WhyChooseUs } from "@/components/repair/WhyChooseUs";
import { LocationCards } from "@/components/repair/LocationCards";
import { FAQSection } from "@/components/repair/FAQSection";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Droplets, Clock, HardDrive, ShieldCheck, AlertTriangle, Wrench } from "lucide-react";
import { PRIMARY_PHONE } from "@/lib/locations";
import heroImage from "@/assets/hero-water-damage.png";

const WaterDamageRepair = () => {
  const faqs = [
    {
      question: "Can you fix my water-damaged device?",
      answer: "Water damage is unpredictable—corrosion and short circuits can cause hidden issues. We'll thoroughly assess your device and do everything we can to restore it. While we can't guarantee a full repair, many devices respond well to professional treatment, and we always prioritize recovering your data."
    },
    {
      question: "What should I do immediately after my device gets wet?",
      answer: "Power it off immediately and don't try to charge it. Don't use a hair dryer or put it in rice—these can cause more damage. Bring it to us as soon as possible. The faster we can begin treatment, the better your chances of recovery."
    },
    {
      question: "How much does water damage repair cost?",
      answer: "Costs vary depending on the extent of the damage and the device. We charge a diagnostic fee which goes towards the cost of repair if you proceed. A quick 5-minute assessment over the counter is always a courtesy. We'll give you an honest quote before any work begins."
    },
    {
      question: "Can you recover my photos and data?",
      answer: "Data recovery is often possible even when a device can't be fully repaired. We specialize in extracting photos, contacts, messages, and other important files from water-damaged devices. Bring it in quickly—time is critical for the best recovery chances."
    },
    {
      question: "Why shouldn't I put my phone in rice?",
      answer: "Rice doesn't effectively dry internal components and can introduce dust and starch particles into your device. It also wastes valuable time. Professional ultrasonic cleaning and controlled drying are far more effective at preventing corrosion."
    },
    {
      question: "How long does water damage assessment take?",
      answer: "Initial assessment typically takes 24-48 hours. We need to carefully open the device, clean components, and evaluate the extent of corrosion. We'll contact you with our findings and options as soon as we complete the assessment."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Water Damage Repair & Data Recovery | Manitoba Device Repair</title>
        <meta 
          name="description" 
          content="Spilled liquid on your phone or laptop? Don't panic. Our water damage specialists can assess your device and work to recover your precious data. Fast, honest service in Winnipeg and Brandon." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1 pb-20 md:pb-0">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-sm font-medium text-destructive">
                    <AlertTriangle className="h-4 w-4" />
                    Act Fast – Time Is Critical
                  </div>
                  
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    Water Damage?
                    <span className="block text-primary">We're Here to Help</span>
                  </h1>
                  
                  <p className="text-lg text-muted-foreground">
                    Accidents happen. Whether it's a spilled coffee, a dropped phone, or an unexpected splash, 
                    we understand the panic that comes with water damage. <strong>Don't give up on your device just yet.</strong>
                  </p>
                  
                  <p className="text-muted-foreground">
                    Our technicians specialize in water damage assessment and recovery. While every case is unique 
                    and we can't promise miracles, we've helped countless customers retrieve irreplaceable photos, 
                    messages, and data—even from devices that seemed beyond hope.
                  </p>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button size="lg" className="gap-2" asChild>
                      <a href={`tel:${PRIMARY_PHONE.replace(/[^0-9]/g, '')}`}>
                        <Phone className="h-5 w-5" />
                        Call Now – Free Assessment
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="gap-2" asChild>
                      <a href="/#quote">
                        <MessageSquare className="h-5 w-5" />
                        Get a Quote
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="relative flex justify-center">
                  <img
                    src={heroImage}
                    alt="Water damaged phone illustration showing spilled liquid on mobile devices"
                    className="relative z-10 max-w-2xl w-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />
          </section>

          {/* What We Can Do Section */}
          <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                  How We Can Help
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Water damage requires specialized care. Here's our approach to giving your device the best chance of recovery.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-card rounded-xl p-6 shadow-sm border">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Rapid Response</h3>
                  <p className="text-sm text-muted-foreground">
                    Bring your device in immediately. The sooner we start, the better your chances. We prioritize water damage cases.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-sm border">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Droplets className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Professional Cleaning</h3>
                  <p className="text-sm text-muted-foreground">
                    We use ultrasonic cleaning and specialized solutions to remove corrosion and contaminants—far beyond what rice can do.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-sm border">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Component Repair</h3>
                  <p className="text-sm text-muted-foreground">
                    If specific components are damaged, we can often replace them. We'll give you honest options based on what we find.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-sm border">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <HardDrive className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Data Recovery</h3>
                  <p className="text-sm text-muted-foreground">
                    Even when full repair isn't possible, we can often recover your photos, contacts, and important files.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Honest Expectations Section */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="bg-card rounded-2xl p-8 shadow-lg border">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        Our Honest Promise
                      </h2>
                      <p className="text-muted-foreground">
                        We believe in transparency, especially when you're already stressed.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Here's the truth about water damage:</strong> it's unpredictable. 
                      Corrosion can develop hours or days after exposure, and some damage only reveals itself over time. 
                      No repair shop can honestly guarantee a permanent fix for water damage.
                    </p>
                    <p>
                      <strong className="text-foreground">What we can promise:</strong> We'll thoroughly assess your device, 
                      use professional-grade equipment to clean and dry it properly, and give you an honest evaluation of 
                      your options. If full repair isn't realistic, we'll focus on what matters most—recovering your data.
                    </p>
                    <p>
                      <strong className="text-foreground">Data recovery is our priority:</strong> In about 80% of water damage 
                      cases we see, data recovery is successful. Even if your device can't be fully restored, we can often 
                      retrieve your precious photos, contacts, and files—and transfer them to a new or pre-owned device.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t">
                    <p className="text-center text-foreground font-medium mb-4">
                      Every hour counts with water damage. Don't wait—bring your device in today.
                    </p>
                    <div className="flex justify-center">
                      <Button size="lg" className="gap-2" asChild>
                        <a href={`tel:${PRIMARY_PHONE.replace(/[^0-9]/g, '')}`}>
                          <Phone className="h-5 w-5" />
                          Call {PRIMARY_PHONE}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Devices We Service */}
          <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                  Devices We Service
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We handle water damage across all major device types. Whatever got wet, we're ready to help.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[
                  { name: "iPhones", link: null },
                  { name: "Samsung Galaxy", link: "/repair/samsung" },
                  { name: "Google Pixel", link: "/repair/google-pixel" },
                  { name: "Motorola", link: "/repair/motorola" },
                  { name: "iPads", link: null },
                  { name: "Samsung Tablets", link: "/repair/samsung-galaxy-tab" },
                  { name: "MacBooks", link: "/repair/macbook" },
                  { name: "Windows Laptops", link: "/repair/surface" },
                  { name: "Apple Watch", link: "/repair/apple-watch" },
                  { name: "Nintendo Switch", link: "/repair/nintendo-switch" },
                  { name: "Steam Deck", link: "/repair/steam-deck" },
                ].map((device) => (
                  device.link ? (
                    <Link
                      key={device.name}
                      to={device.link}
                      className="bg-card rounded-lg px-4 py-3 text-center font-medium text-foreground border shadow-sm hover:bg-primary/5 hover:border-primary/30 transition-colors"
                    >
                      {device.name}
                    </Link>
                  ) : (
                    <div 
                      key={device.name}
                      className="bg-card rounded-lg px-4 py-3 text-center font-medium text-foreground border shadow-sm"
                    >
                      {device.name}
                    </div>
                  )
                ))}
              </div>
            </div>
          </section>

          <WhyChooseUs hideWarranty />
          <LocationCards />
          <FAQSection deviceName="Water Damaged Device" faqs={faqs} />
        </main>

        <Footer />
        <StickyQuoteCTA />
      </div>
    </>
  );
};

export default WaterDamageRepair;
