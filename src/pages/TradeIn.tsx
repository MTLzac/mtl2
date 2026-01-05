import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TradeInHero } from "@/components/trade-in/TradeInHero";
import { HowItWorks } from "@/components/trade-in/HowItWorks";
import { DeviceCategories } from "@/components/trade-in/DeviceCategories";
import { WhyTradeIn } from "@/components/trade-in/WhyTradeIn";
import { Requirements } from "@/components/trade-in/Requirements";
import { B2BCallout } from "@/components/trade-in/B2BCallout";
import { LocationCards } from "@/components/repair/LocationCards";
import { FAQSection } from "@/components/repair/FAQSection";
import { StickyQuoteCTA } from "@/components/repair/StickyQuoteCTA";

const TRADE_IN_FAQS = [
  {
    question: "How do I get a trade-in quote?",
    answer: "Submit your device details through our quote form. We'll review the information and respond with a value based on the model and condition.",
  },
  {
    question: "What can I do with my trade-in credit?",
    answer: "Use it toward a repair bill at our shop or apply it to a pre-owned device purchase. The choice is yours.",
  },
  {
    question: "Do you accept damaged devices?",
    answer: "Yes! Cracked screens, battery issues, water damage, and other problems are fine. We'll provide a quote based on the device's current condition.",
  },
  {
    question: "Why won't you accept locked devices?",
    answer: "iCloud-locked or Google FRP-locked devices can't be resold or refurbished. We need devices that you can sign out of and unlock before trading in.",
  },
  {
    question: "How do I ship my device?",
    answer: "After accepting your quote, we'll send you a free prepaid shipping label. Just pack your device securely and drop it off at any Canada Post location.",
  },
  {
    question: "How fast do I get paid?",
    answer: "In-store drop-offs receive same-day payment via cash or E-Transfer. Mail-in devices are processed and paid within 24-48 hours of inspection.",
  },
  {
    question: "Do I need to wipe my device first?",
    answer: "You can, but you don't have to. We securely erase all data during our intake process. Either way, your personal information is protected.",
  },
];

const TradeIn = () => {
  return (
    <>
      <Helmet>
        <title>Trade In Your Device | Get More Than Carrier Trade-Ins | Mobile Tech Lab Winnipeg</title>
        <meta 
          name="description" 
          content="Trade in phones, tablets, laptops, game consoles, and wearables. Get more than carrier programs. Use credit toward repairs or pre-owned devices. Free shipping." 
        />
        <link rel="canonical" href="https://mobiletechlab.ca/trade-in" />
      </Helmet>

      <Header />
      
      <main>
        <TradeInHero />
        <HowItWorks />
        <DeviceCategories />
        <WhyTradeIn />
        <Requirements />
        <B2BCallout />
        <LocationCards serviceAreaNote="Drop off your trade-in at our Winnipeg location for same-day quotes and payment." />
        <FAQSection deviceName="Trade-In" faqs={TRADE_IN_FAQS} />
      </main>

      <Footer />
      <StickyQuoteCTA />
    </>
  );
};

export default TradeIn;
