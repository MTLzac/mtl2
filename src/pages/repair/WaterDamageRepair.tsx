import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyQuoteCTA } from "@/components/repair/StickyQuoteCTA";
import { LocationCards } from "@/components/repair/LocationCards";
import { FAQSection } from "@/components/repair/FAQSection";
import {
  WaterDamageHero,
  WaterDamageQuickSummary,
  WaterDamageFirstSteps,
  WaterDamageMyths,
  WaterDamageProcess,
  WaterDamageDataRecovery,
  WaterDamagePricing,
  WaterDamageDevices,
  WaterDamageReplacement,
  WaterDamageHonestTruth,
  WaterDamageTimeline,
  WaterDamageFinalCTA,
  WaterDamageSchema,
} from "@/components/water-damage";

const WaterDamageRepair = () => {
  const faqs = [
    {
      question: "Is water damage repair guaranteed?",
      answer: "No. Liquid damage is unpredictable — corrosion can affect any component on the logic board, and damage often surfaces days or weeks after the initial incident. NO warranty applies to liquid-damaged device repairs, ever, on any component, regardless of whether future failure relates to our work. This is industry-wide, not specific to us. Most repair shops won't tell you this upfront. We do.",
    },
    {
      question: "Can you recover data even if the phone won't turn on?",
      answer: "Often, yes — but with important caveats. Our $129 data recovery process: we install temporary working components (battery, screen, charging port) to attempt to power the device on long enough to extract data through normal means. For more severely damaged boards, we attempt basic board-level recovery in-house. For severe cases (chip-off recovery on damaged boards), we recommend specialty data recovery services. We're honest about which category your case falls into. Outcomes never guaranteed.",
    },
    {
      question: "Should I check my iCloud or Google backup before paying for recovery?",
      answer: "Absolutely yes — and we'll tell you that even if it means we don't get your business. Sign into your iCloud account, Google account, or Microsoft account before bringing your device in. Your most recent backup may have everything you need. If you can restore from a recent backup to a different device, you don't need our data recovery service. We're one of the few shops that will tell you this upfront.",
    },
    {
      question: "What does liquid damage repair cost?",
      answer: "$49 diagnostic fee covers opening the device and assessing damage scope. Liquid damage cleaning + repair attempts from $149+. Data recovery attempts (separate from device repair) are $129 + tax. Replacement parts (screens, batteries, charging ports) quoted separately. The diagnostic fee is credited toward your repair if you proceed; non-refundable if you decide not to proceed.",
    },
    {
      question: "Why don't you warranty liquid damage repairs?",
      answer: "Because outcomes are unpredictable. Liquid damage causes corrosion that develops over time — sometimes months after a \"successful\" repair. We can clean, replace, and restore function, but we cannot honestly guarantee that future failures won't occur. NO honest repair shop warranties liquid damage. The shops that promise warranties on liquid damage either (a) include exclusions that void the warranty in practice, or (b) accept the disputes as a cost of doing business. We don't promise what we can't deliver.",
    },
    {
      question: "Is the liquid damage diagnostic fee refundable?",
      answer: "The $49 diagnostic fee is non-refundable, but it's credited toward your final repair if you proceed. If you decide not to proceed after diagnosis (or if your device is beyond reasonable repair), the diagnostic fee covers the time we spent assessing your device — typically 30–60 minutes of skilled technician work. We never charge beyond the diagnostic fee without explaining the next step and getting your approval.",
    },
    {
      question: "Should I try to dry my phone at home first?",
      answer: "No — bring it in immediately. The DIY drying methods (rice, hairdryers, freezers, sunlight) range from useless to actively harmful. Rice doesn't pull liquid out of phones effectively. Hairdryers warp components. Freezers cause condensation. Sunlight cooks the battery. The best home action is: power off immediately, don't try to charge it, and bring it to us as soon as possible. Every hour increases corrosion damage.",
    },
    {
      question: "Do you warranty liquid-damaged repairs?",
      answer: "No. NO warranty applies to liquid-damaged device repairs, on any component, regardless of whether future failure relates to our work. This applies even to brand-new replacement parts we install in liquid-damaged devices, because the underlying corrosion can affect any board component over time. If your device is liquid-damaged, accept that any repair is a \"best effort\" service with no future guarantees. If you need a warrantied device, replacement is the better path.",
    },
    {
      question: "Can you fix laptop and MacBook liquid damage?",
      answer: "Yes. We assess and attempt repair on liquid-damaged laptops (Windows, all major brands) and MacBooks (all generations including M-series). Laptop liquid damage is often more recoverable than phone liquid damage because laptops have more accessible components and less densely-packed boards. The same honest outcome rules apply: $49 diagnostic, $149+ repair attempt, no warranty on liquid damage outcomes.",
    },
    {
      question: "Can you save my photos / contacts / files even if I drop the phone in water for a long time?",
      answer: "Sometimes. We attempt data recovery for $129 + tax. Even on devices that have been submerged for extended periods, recovery is sometimes possible if the storage chip itself isn't physically damaged. Outcomes are never guaranteed, but our honest assessment will tell you whether your case is a likely candidate or whether you should consider specialty data recovery services.",
    },
    {
      question: "How long does liquid damage assessment take?",
      answer: "Initial diagnostic: typically 1–2 hours during business hours (we can usually have an answer same-day). For repair work after diagnostic: depends on parts availability and damage extent. Simple liquid damage with parts in stock: same-day. Complex board work: 1–3 business days. We'll tell you the exact timeline after diagnostic.",
    },
    {
      question: "Do I need an appointment for liquid damage assessment?",
      answer: "No. Walk-ins are welcome at both St. Vital (Winnipeg) and Thompson locations during business hours. For liquid damage, walking in immediately is actually better than waiting for an appointment — every hour matters for corrosion progression. Just come in.",
    },
    {
      question: "When should I just replace my phone instead of fixing it?",
      answer: "Replacement makes more sense when: (a) the cost of repair approaches the device's trade-in or replacement value, (b) your data is already backed up (no recovery needed), (c) the phone is older than 3 years and not specifically valuable to you, (d) the board damage is severe enough that future failure is highly likely. We'll tell you which category your case falls into during the diagnostic. Sometimes the best advice is \"your data is in cloud backup; sell us this device for parts and buy a working one.\"",
    },
    {
      question: "Why do most shops claim they can fix any water damage but you don't?",
      answer: "Because most shops are willing to attempt repairs that we know are unlikely to succeed long-term. Some shops include warranty exclusions that void coverage when corrosion-related failures appear. Others rely on the warranty period expiring before the corrosion-related failure surfaces. We've chosen a different approach: honest upfront assessment, no false guarantees, transparent pricing, and clear refusal to warranty something we can't reliably stand behind. This costs us some short-term business — but it builds long-term trust with customers who've been burned by promises elsewhere.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Water Damage Repair Winnipeg | Phone, Tablet, Laptop, MacBook | MTL</title>
        <meta
          name="description"
          content="Liquid damage repair Winnipeg. Phones, tablets, laptops, MacBooks. Honest assessment, $129 data recovery attempts, no false guarantees. Walk-ins welcome."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mobiletechlab.ca/repair/water-damage" />
      </Helmet>

      <WaterDamageSchema faqs={faqs} />

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1 pb-20 md:pb-0">
          <WaterDamageHero />
          <WaterDamageQuickSummary />
          <WaterDamageFirstSteps />
          <WaterDamageMyths />
          <WaterDamageProcess />
          <WaterDamageDataRecovery />
          <WaterDamagePricing />
          <WaterDamageDevices />
          <WaterDamageReplacement />
          <WaterDamageHonestTruth />
          <LocationCards heading="Visit Our Liquid Damage Repair Locations" />

          {/* Pricing Micro-Copy Block — preserved citations */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl space-y-3 text-base text-muted-foreground">
                <p>
                  Liquid damage repair costs depend on the extent of damage and what components are affected — cleaning fees are charged regardless of outcome to cover the diagnostic work required. According to <a href="https://support.apple.com/en-ca/102731" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apple's official documentation</a>, liquid damage can cause delayed corrosion even if the device appears functional initially. Many customers are surprised that water damage repair is unpredictable and outcomes cannot be guaranteed.
                </p>
                <p>
                  With liquid damage, our priority is your data first, then the device. Independent teardowns from <a href="https://www.ifixit.com/Search?query=water+damage+phone+repair" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">iFixit</a> show that modern devices are tightly sealed, making internal water damage difficult to detect without proper inspection. If full repair isn't practical, data recovery is often still possible. You can learn more about{" "}
                  <Link to="/repair-pricing" className="text-primary hover:underline">how repair pricing works</Link>.
                </p>
              </div>
            </div>
          </section>

          <FAQSection
            deviceName="Liquid Damage"
            faqs={faqs}
            heading="Liquid Damage Repair FAQs"
            subheading="Common questions about water and liquid damage."
          />

          <WaterDamageTimeline />
          <WaterDamageFinalCTA />
        </main>

        <Footer />
        <StickyQuoteCTA />
      </div>
    </>
  );
};

export default WaterDamageRepair;
