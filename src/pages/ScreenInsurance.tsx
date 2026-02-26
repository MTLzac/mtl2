import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InsuranceHero } from "@/components/screen-insurance/InsuranceHero";
import { HowItWorks } from "@/components/screen-insurance/HowItWorks";
import { CoverageDetails } from "@/components/screen-insurance/CoverageDetails";
import { InsuranceComparison } from "@/components/screen-insurance/InsuranceComparison";
import { InsuranceFAQ } from "@/components/screen-insurance/InsuranceFAQ";
import { InsuranceFinalCTA } from "@/components/screen-insurance/InsuranceFinalCTA";

const ScreenInsurance = () => {
  return (
    <>
      <Helmet>
        <title>Screen Protection Plans | Mobile Tech Lab</title>
        <meta
          name="description"
          content="Protect your iPhone screen for 12 months with a one-time payment. Get a free Premium screen replacement — no monthly fees, no deductibles."
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
        <InsuranceFinalCTA />
      </main>

      <Footer />
    </>
  );
};

export default ScreenInsurance;