import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyQuoteCTA } from "@/components/repair/StickyQuoteCTA";
import { LocationCards } from "@/components/repair/LocationCards";
import { FAQSection } from "@/components/repair/FAQSection";
import {
  WaterDamageHero,
  WaterDamageFirstSteps,
  WaterDamageProcess,
  WaterDamageDataRecovery,
  WaterDamageCleaningFee,
  WaterDamageRepairVsRecovery,
  WaterDamageDevices,
  WaterDamageReplacement,
  WaterDamageFinalCTA,
} from "@/components/water-damage";

const WaterDamageRepair = () => {
  const faqs = [
    {
      question: "Is water damage repair guaranteed?",
      answer: "No. Liquid damage is unpredictable. We attempt recovery where possible but never guarantee outcomes."
    },
    {
      question: "Can you recover data even if the phone won't turn on?",
      answer: "In many cases, yes. Temporary power-on may be enough to recover data."
    },
    {
      question: "Is the liquid damage cleaning fee refundable?",
      answer: "No. The fee covers the time and effort required to attempt recovery."
    },
    {
      question: "Should I try to dry my phone at home first?",
      answer: "No. Powering on or applying heat can make damage worse."
    },
    {
      question: "Do you warranty liquid-damaged repairs?",
      answer: "No. Liquid damage affects internal components in unpredictable ways."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Water & Liquid Damage Repair Winnipeg | Mobile Tech Lab</title>
        <meta 
          name="description" 
          content="Liquid damage is unpredictable. We focus on honest diagnostics and data recovery first — with no false promises. Phones, tablets, and laptops." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mobiletechlab.ca/repair/water-damage" />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1 pb-20 md:pb-0">
          <WaterDamageHero />
          <WaterDamageFirstSteps />
          <WaterDamageProcess />
          <WaterDamageDataRecovery />
          <WaterDamageCleaningFee />
          <WaterDamageRepairVsRecovery />
          <WaterDamageDevices />
          <WaterDamageReplacement />
          <LocationCards />
          
          {/* Pricing Micro-Copy Block */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl space-y-3 text-base text-muted-foreground">
                <p>
                  Liquid damage repair costs depend on the extent of damage and what components are affected—cleaning fees are charged regardless of outcome to cover the diagnostic work required. Many customers are surprised that water damage repair is unpredictable and outcomes cannot be guaranteed.
                </p>
                <p>
                  With liquid damage, our priority is your data first, then the device. If full repair isn't practical, data recovery is often still possible. You can learn more about{" "}
                  <Link to="/repair-pricing" className="text-primary hover:underline">how repair pricing works</Link>.
                </p>
              </div>
            </div>
          </section>
          
          <FAQSection 
            deviceName="Liquid Damage" 
            faqs={faqs}
            heading="Liquid Damage FAQs"
            subheading="Common questions about water and liquid damage assessment"
          />
          <WaterDamageFinalCTA />
        </main>

        <Footer />
        <StickyQuoteCTA />
      </div>
    </>
  );
};

export default WaterDamageRepair;
