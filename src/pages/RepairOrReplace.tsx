import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  InfographicSchemas,
  InfographicHero,
  StatCardsGrid,
  RepairCostTable,
  RepairShopInsightsSection,
  WhenRepairMayNotMakeSenseSection,
  DecisionHelper,
  EmbedSection,
  InfographicCTA,
} from "@/components/infographic";

const CURRENT_YEAR = new Date().getFullYear();

const RepairOrReplace = () => {
  return (
    <>
      <Helmet>
        <title>{`Repair or Replace Your Device? Canadian Statistics (${CURRENT_YEAR})`}</title>
        <meta 
          name="description" 
          content={`${CURRENT_YEAR} Canadian data on smartphone repair costs, e-waste, and replacement cycles. A neutral guide from Mobile Tech Lab.`}
        />
        <link rel="canonical" href="https://mobiletechlab.ca/repair-or-replace-device-canada" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`Repair or Replace Your Device? Canadian Statistics (${CURRENT_YEAR})`} />
        <meta property="og:description" content={`${CURRENT_YEAR} Canadian data on smartphone repair costs, e-waste, and replacement cycles. A neutral guide from Mobile Tech Lab.`} />
        <meta property="og:url" content="https://mobiletechlab.ca/repair-or-replace-device-canada" />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Repair or Replace? Canadian Device Statistics (${CURRENT_YEAR})`} />
        <meta name="twitter:description" content={`${CURRENT_YEAR} Canadian data on smartphone repair costs, e-waste, and replacement cycles.`} />
      </Helmet>
      
      <InfographicSchemas />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          <article>
            <InfographicHero />
            <StatCardsGrid />
            <RepairCostTable />
            <RepairShopInsightsSection />
            <WhenRepairMayNotMakeSenseSection />
            <DecisionHelper />
            <EmbedSection />
            <InfographicCTA />
          </article>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default RepairOrReplace;
