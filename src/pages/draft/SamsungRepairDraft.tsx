import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GalaxyHero } from "@/components/samsung-draft/GalaxyHero";
import { GlassServiceGrid } from "@/components/samsung-draft/GlassServiceGrid";
import { ModelSeriesCards } from "@/components/samsung-draft/ModelSeriesCards";
import { AdvantageSection } from "@/components/samsung-draft/AdvantageSection";
import { PriceConcerns } from "@/components/samsung-draft/PriceConcerns";
import { GlassLocations } from "@/components/samsung-draft/GlassLocations";
import { GlassFAQ } from "@/components/samsung-draft/GlassFAQ";

const SamsungRepairDraft = () => {
  return (
    <>
      <Helmet>
        <title>Samsung Phone Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab</title>
        <meta name="description" content="Expert Samsung Galaxy repair in Winnipeg. Screen replacement, battery, charging port, water damage repair for all Galaxy S, Z Fold, Z Flip, A series & Note models. Fast same-day service." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          <GalaxyHero />
          <GlassServiceGrid />
          <ModelSeriesCards />
          <AdvantageSection />
          <PriceConcerns />
          <GlassLocations />
          <GlassFAQ />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SamsungRepairDraft;
