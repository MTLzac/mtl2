import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InsuranceHero } from "@/components/screen-insurance/InsuranceHero";
import { HowItWorks } from "@/components/screen-insurance/HowItWorks";
import { CoverageDetails } from "@/components/screen-insurance/CoverageDetails";
import { InsuranceComparison } from "@/components/screen-insurance/InsuranceComparison";
import { InsuranceFAQ } from "@/components/screen-insurance/InsuranceFAQ";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { PRIMARY_PHONE } from "@/lib/locations";

const ScreenInsurance = () => {
  return (
    <>
      <Helmet>
        <title>Screen Protection Plans | Mobile Tech Lab</title>
        <meta
          name="description"
          content="Protect your iPhone screen with a one-time payment. Get a free Premium screen replacement whenever you need it. No monthly fees, no deductibles."
        />
        <link rel="canonical" href="https://mobiletechlab.ca/screen-insurance" />
      </Helmet>

      <Header />

      <main>
        <InsuranceHero />
        <HowItWorks />
        <CoverageDetails />
        <InsuranceComparison />
        <InsuranceFAQ />

        {/* Final CTA */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Protect Your Screen?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Select your model above or contact us to get started.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gradient-primary text-lg" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Choose Your Device
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <a href={`tel:${PRIMARY_PHONE}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ScreenInsurance;
