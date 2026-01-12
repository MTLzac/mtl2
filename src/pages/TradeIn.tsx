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

const SELL_PHONE_FAQS = [
  {
    question: "How do I sell my phone in Winnipeg?",
    answer: "Submit your device details through our quote form or <a href='/contact' class='text-primary hover:underline'>drop by our Winnipeg location</a>. We'll assess your phone and provide a cash offer based on the model and condition.",
  },
  {
    question: "Can I get cash for my used phone?",
    answer: "Yes! In-store drop-offs receive same-day cash or E-Transfer. You can also use your payout as store credit toward repairs or browse our <a href='/pre-owned' class='text-primary hover:underline'>pre-owned devices</a>.",
  },
  {
    question: "Do you buy broken phones?",
    answer: "Absolutely! Cracked screens, battery issues, water damage—we buy phones in any condition. If you'd rather fix it, check out our <a href='/repair/samsung' class='text-primary hover:underline'>Samsung repair</a> or <a href='/repair/ipad' class='text-primary hover:underline'>iPad repair</a> services.",
  },
  {
    question: "Should I repair or sell my phone?",
    answer: "It depends on the damage and your device's value. Minor issues like cracked screens are often worth repairing—<a href='/screen-quality' class='text-primary hover:underline'>compare screen quality options</a> to see pricing. For older devices or major damage, selling may get you more value. <a href='/repair/samsung' class='text-primary hover:underline'>Get a repair quote</a> to compare.",
  },
  {
    question: "Can you recover data from my phone before I sell it?",
    answer: "Yes! We offer data recovery for phones, tablets, and laptops. Normally $129, but when bundled with a trade-in, it's just $49. We'll transfer your photos, contacts, and files to a USB drive or cloud backup before processing your device.",
  },
  {
    question: "Why won't you buy locked phones?",
    answer: "iCloud-locked or Google FRP-locked devices can't be resold or refurbished. We need devices that you can sign out of and unlock before selling.",
  },
  {
    question: "How do I ship my phone to sell?",
    answer: "After accepting your quote, we'll send you a free prepaid shipping label. Pack your device securely and drop it off at any Canada Post location.",
  },
  {
    question: "How fast do I get cash for my phone?",
    answer: "Drop off in Winnipeg and get paid same-day via cash or E-Transfer. Mail-in devices are processed and paid within 24-48 hours of inspection.",
  },
  {
    question: "Do I need to erase my phone before selling?",
    answer: "You can, but you don't have to. We securely erase all data during our intake process. Either way, your personal information is protected.",
  },
];

const TradeIn = () => {
  return (
    <>
      <Helmet>
        <title>Sell Your Phone Winnipeg | Get Cash for Used Devices | Mobile Tech Lab</title>
        <meta 
          name="description" 
          content="Sell your used phone, tablet, or laptop in Winnipeg. Get cash or store credit same-day. We pay more than carriers. Free shipping on mail-ins. Working or damaged devices accepted." 
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
        <FAQSection deviceName="Sell Your Phone" faqs={SELL_PHONE_FAQS} />
      </main>

      <Footer />
      <StickyQuoteCTA />
    </>
  );
};

export default TradeIn;
