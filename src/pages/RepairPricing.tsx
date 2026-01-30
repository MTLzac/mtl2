import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PricingHero } from "@/components/pricing/PricingHero";
import { QuickAnswersGrid } from "@/components/pricing/QuickAnswersGrid";
import { PricingLogicSection } from "@/components/pricing/PricingLogicSection";
import { ScreenOptionsSection } from "@/components/pricing/ScreenOptionsSection";
import { TurnaroundSection } from "@/components/pricing/TurnaroundSection";
import { RepairVsReplaceSection } from "@/components/pricing/RepairVsReplaceSection";
import { DataOptionsSection } from "@/components/pricing/DataOptionsSection";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { PricingFinalCTA } from "@/components/pricing/PricingFinalCTA";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const BREADCRUMBS = [
  { name: "Home", url: "https://mobiletechlab.ca/" },
  { name: "Repair Pricing Explained", url: "https://mobiletechlab.ca/repair-pricing" },
];

const RepairPricing = () => {
  return (
    <>
      <Helmet>
        <title>Repair Pricing Explained in Winnipeg | Mobile Tech Lab</title>
        <meta
          name="description"
          content="Understand how repair pricing works in Winnipeg: why costs vary, screen quality options, warranties, turnaround times, and when repair vs replacement makes sense."
        />
        <link rel="canonical" href="https://mobiletechlab.ca/repair-pricing" />
        <meta property="og:title" content="Repair Pricing Explained in Winnipeg | Mobile Tech Lab" />
        <meta
          property="og:description"
          content="Understand how repair pricing works in Winnipeg: why costs vary, screen quality options, warranties, turnaround times, and when repair vs replacement makes sense."
        />
        <meta property="og:url" content="https://mobiletechlab.ca/repair-pricing" />
        <meta property="og:type" content="website" />
      </Helmet>
      <BreadcrumbSchema items={BREADCRUMBS} />
      
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          <PricingHero />
          <QuickAnswersGrid />
          <PricingLogicSection />
          <ScreenOptionsSection />
          <TurnaroundSection />
          <RepairVsReplaceSection />
          <DataOptionsSection />
          <ComparisonTable />
          <PricingFAQ />
          <PricingFinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RepairPricing;
