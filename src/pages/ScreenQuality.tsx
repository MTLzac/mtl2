import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Phone, Shield, Clock, Award } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DeviceSelector } from "@/components/screen-quality/DeviceSelector";
import { QualityComparison } from "@/components/screen-quality/QualityComparison";
import { FAQ_ITEMS } from "@/lib/screen-quality-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function ScreenQuality() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  return (
    <>
      <Helmet>
        <title>Screen Quality Options | Mobile Tech Lab</title>
        <meta
          name="description"
          content="Compare screen quality options for iPhone, iPad, and Samsung repairs. Choose from Value, Premium, or Genuine screens with warranties up to lifetime coverage."
        />
      </Helmet>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Choose Your Screen Quality
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                We offer multiple quality options so you get exactly what you need —
                from budget-friendly to factory-original
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Warranty on all repairs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Same-day service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Genuine parts available</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Device Selector Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Select Your Device
              </h2>
              <p className="text-muted-foreground">
                Choose your brand and model to see available screen options
              </p>
            </div>

            <DeviceSelector
              selectedBrand={selectedBrand}
              selectedModel={selectedModel}
              onBrandChange={setSelectedBrand}
              onModelChange={setSelectedModel}
            />
          </div>
        </section>

        {/* Quality Comparison Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <QualityComparison
              selectedBrand={selectedBrand}
              selectedModel={selectedModel}
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-8">
                Frequently Asked Questions
              </h2>

              <Accordion type="single" collapsible className="w-full">
                {FAQ_ITEMS.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Your Screen Fixed?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today for a free quote. Our expert technicians are ready to help
              you choose the perfect screen quality for your device.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Get a Free Quote
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+1234567890">Call Us Now</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
