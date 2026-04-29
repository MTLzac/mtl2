import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TradeInHero } from "@/components/trade-in/TradeInHero";
import { TradeInQuickSummary } from "@/components/trade-in/TradeInQuickSummary";
import { HowItWorks } from "@/components/trade-in/HowItWorks";
import { DeviceCategories } from "@/components/trade-in/DeviceCategories";
import { CarrierComparison } from "@/components/trade-in/CarrierComparison";
import { WhyTradeIn } from "@/components/trade-in/WhyTradeIn";
import { TradeInCaseStudy } from "@/components/trade-in/TradeInCaseStudy";
import { Requirements } from "@/components/trade-in/Requirements";
import { B2BCallout } from "@/components/trade-in/B2BCallout";
import { LocationCards } from "@/components/repair/LocationCards";
import { RuralMailInCallout } from "@/components/trade-in/RuralMailInCallout";
import { WhatHappensNext } from "@/components/trade-in/WhatHappensNext";
import { FAQSection } from "@/components/repair/FAQSection";
import { TradeInFinalCTA } from "@/components/trade-in/TradeInFinalCTA";
import { TradeInSchema } from "@/components/trade-in/TradeInSchema";
import { StickyQuoteCTA } from "@/components/repair/StickyQuoteCTA";

const SELL_PHONE_FAQS = [
  {
    question: "How is selling to Mobile Tech Lab different from a carrier trade-in?",
    answer: "Big difference: major Canadian carrier trade-in programs only give you bill credit toward a new line activation — meaning you're locked into a new contract or device upgrade to access the value. The credit is also typically spread over 24 months as a bill discount.<br/><br/>We buy your device outright. You walk out with cash, e-transfer, or store credit the same visit. No new contract required. No upgrade pressure. No multi-month wait.<br/><br/>We also accept devices carriers typically decline: broken devices that we can test with temporary parts, devices with cosmetic damage that carriers heavily devalue, and older devices that aren't on a carrier's \"approved trade-in list\".<br/><br/>If you're upgrading anyway, you can still take a carrier promotion separately. Bring your old device to us for cash, then go get your upgrade with whichever carrier offers the best deal. You don't have to choose. Carrier trade-in offers and policies vary — verify current terms with your specific carrier.",
  },
  {
    question: "How do I sell my phone in Winnipeg quickly?",
    answer: "Three options: (1) Submit a quote online — we'll text or email you an estimate in 1-2 business hours; (2) Walk into our St. Vital or Thompson location any time during business hours for an instant offer; (3) Call us at (204) 500-9757 with your device details. Same-day payment available when you accept the offer.",
  },
  {
    question: "I live outside Winnipeg — can I still sell to you?",
    answer: "Yes. We offer free trackable mail-in shipping for customers anywhere in Manitoba — Brandon, Portage la Prairie, Steinbach, Selkirk, Dauphin, Morden, Winkler, and rural communities. Submit a quote online, we'll send you shipping instructions, and you can mail your device in safely. Our techs inspect within 1 business day of arrival, confirm the offer, and pay you same-day via e-transfer or send cash by mail.",
  },
  {
    question: "What if my phone is broken — will you still buy it?",
    answer: "Yes, if we can test it. We install temporary working components (battery, screen, charging port) to verify the device functions. For example: a Samsung S24 FE that arrives with a dark screen — we install a working screen to test it, then make an offer based on the actual condition. We do NOT buy completely non-testable devices, devices that cannot be powered on at all (with parts), or devices for \"parts only\" purposes. We also don't buy iCloud or carrier-locked devices.",
  },
  {
    question: "Why won't you buy locked phones?",
    answer: "Locked devices (iCloud-locked, carrier-locked, FRP-locked, financing-locked) cannot be activated by a new buyer — making them effectively unsellable. Even if you sign in to \"approve\" the unlock, hidden carrier financing or Find My iPhone lockouts can re-activate. We can't responsibly buy a device we can't sell. If your device is locked, contact your carrier to verify the lock status before bringing it in. If the lock is removable, we can buy after.",
  },
  {
    question: "Can I get cash for my used phone?",
    answer: "Yes — cash is one of three payment options (cash, e-transfer, or store credit). For cash, walk in to either Winnipeg or Thompson location. We pay you on the spot when you accept the offer. For mail-in trade-ins, payment is via e-transfer same-day after inspection.",
  },
  {
    question: "How fast do I get paid?",
    answer: "Walk-ins: instant offer + payment same visit. Online quotes: 1-2 business hours for estimate, then walk in or ship to receive payment. Mail-ins: 1 business day after device arrives, e-transfer payment same-day after we confirm the offer. Cash hand-out is immediate; e-transfer is typically within minutes; store credit is usable immediately upon offer acceptance.",
  },
  {
    question: "Do I need to erase my phone before selling?",
    answer: "We recommend backing up your data first (iCloud, Google account, or local backup). We securely wipe all data during intake — but starting with a backup means you don't lose anything you care about. If you don't know how to back up, we can help. Need data recovery on a device that won't power on? See our <a href='/repair/water-damage' class='text-primary hover:underline'>data recovery service</a>.",
  },
  {
    question: "Can you recover data from my phone before I sell it?",
    answer: "Yes. Our data recovery service ($129 + tax) attempts to extract photos, contacts, and files even from devices that won't power on. We always recommend checking iCloud or Google backups first — your data may already be saved. See our <a href='/repair/water-damage' class='text-primary hover:underline'>data recovery page</a> for details.",
  },
  {
    question: "Do you buy laptops and MacBooks?",
    answer: "Yes. We buy MacBooks (all generations including M-series), Windows laptops from major brands (Dell, HP, Lenovo, Asus, Microsoft Surface), and Chromebooks. Same payment options apply: cash, e-transfer, or store credit. Devices must be unlocked and free from financing or activation locks.",
  },
  {
    question: "Do you buy game consoles and video games?",
    answer: "Yes. We buy Nintendo Switch (all variants), PlayStation 5, Xbox Series X/S, Steam Deck, controllers, gaming headsets, and physical video games for major platforms. Working condition or testable issues. Same payment options.",
  },
  {
    question: "Should I repair or sell my phone?",
    answer: "It depends on the device's condition and value. Generally: if repair cost is more than half the trade-in value, selling makes more sense. If you want to keep your device long-term, repair makes sense. We'll give you both quotes — repair price AND trade-in offer — so you can compare. See our <a href='/repair-or-replace-device-canada' class='text-primary hover:underline'>repair vs sell guide</a>.",
  },
  {
    question: "I'm upgrading to a new phone with a carrier promotion — can I still sell my old phone to you?",
    answer: "Absolutely. In fact, that's often the best move. Take whatever carrier upgrade promotion works for your new phone, but bring us your old device for same-day cash. You get your upgrade savings AND you walk out with $200-$400+ in your pocket for the old device. You don't have to choose between us and a carrier — you can use both. Carrier trade-in offers vary, so verify current terms with your specific carrier.",
  },
  {
    question: "How is my privacy protected when I sell my phone?",
    answer: "We securely wipe all personal data during intake — your photos, contacts, messages, and accounts are removed. We never access or transmit your data. If you're concerned, we can walk you through factory-resetting your device before drop-off (or before mail-in shipping). Your data privacy is fundamental to our buyback process.",
  },
];

const TradeIn = () => {
  return (
    <>
      <Helmet>
        <title>Sell Phone Winnipeg | Cash, Not Carrier Bill Credit | MTL</title>
        <meta
          name="description"
          content="Sell your phone, tablet, laptop or console in Winnipeg or by mail across Manitoba. Same-day cash, e-transfer, or store credit. Better than carrier bill credit."
        />
        <link rel="canonical" href="https://mobiletechlab.ca/trade-in" />
      </Helmet>

      <TradeInSchema faqs={SELL_PHONE_FAQS} />

      <Header />

      <main>
        <TradeInHero />
        <TradeInQuickSummary />
        <HowItWorks />
        <DeviceCategories />
        <CarrierComparison />
        <WhyTradeIn />
        <TradeInCaseStudy />
        <Requirements />
        <B2BCallout />
        <LocationCards serviceAreaNote="Drop off your trade-in at any Winnipeg location for same-day quotes and payment." />
        <RuralMailInCallout />
        <WhatHappensNext />
        <FAQSection
          deviceName="Sell Your Phone"
          faqs={SELL_PHONE_FAQS}
          heading="Frequently Asked Questions"
          subheading="Common questions about selling your device to Mobile Tech Lab."
        />
        <TradeInFinalCTA />
      </main>

      <Footer />
      <StickyQuoteCTA />
    </>
  );
};

export default TradeIn;
