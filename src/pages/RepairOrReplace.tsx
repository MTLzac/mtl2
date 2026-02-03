import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  InfographicSchemas,
  InfographicHero,
  ReplacementFrequencySection,
  RepairPreferenceSection,
  RepairCostSection,
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
        <title>Repair or Replace Your Device? Canadian Repair, Cost & E-Waste Statistics ({CURRENT_YEAR}) | Mobile Tech Lab</title>
        <meta 
          name="description" 
          content="Neutral, fact-based data on device repair costs, replacement frequency, and e-waste in Canada. Interactive decision helper and embeddable statistics for journalists and publishers." 
        />
        <link rel="canonical" href="https://mobiletechlab.ca/repair-or-replace-device-canada" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`Repair or Replace Your Device? Canadian Statistics (${CURRENT_YEAR})`} />
        <meta property="og:description" content="Comprehensive repair, cost, and e-waste data for Canadian consumers. Free to cite and embed." />
        <meta property="og:url" content="https://mobiletechlab.ca/repair-or-replace-device-canada" />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Repair or Replace? Canadian Device Statistics (${CURRENT_YEAR})`} />
        <meta name="twitter:description" content="Neutral data on repair costs, e-waste, and consumer preferences in Canada." />
      </Helmet>
      
      <InfographicSchemas />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          <article>
            <InfographicHero />
            <ReplacementFrequencySection />
            <RepairPreferenceSection />
            <RepairCostSection />
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
