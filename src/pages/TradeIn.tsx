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
    question: "Should I repair or sell my phone?",
    answer: "It depends on the damage, device age, and current part costs. Minor issues like cracked screens are often worth repairing—<a href='/repair-pricing#should-i-repair-or-sell-my-device' class='text-primary hover:underline'>compare repair vs. sell</a> to see what makes sense. Our offers are based on current replacement part prices, so you'll always get a fair deal either way.",
  },
  {
    question: "Can you recover data from my phone before I sell it?",
    answer: "Yes! We offer Data Recovery & Transfer services for phones, tablets, and laptops. Bundle it with your trade-in for a discount. We'll transfer your photos, contacts, and files to a USB drive or cloud backup before processing your device.",
  },
  {
    question: "Why won't you buy locked phones?",
    answer: "iCloud-locked or Google FRP-locked devices can't be resold or refurbished legally. We need devices that you can sign out of and unlock before selling. Our payouts are based on current part costs—if parts get cheaper, your payout goes up.",
  },
  {
    question: "How do I ship my phone to sell?",
    answer: "After accepting your quote, we'll send you a free prepaid shipping label with tracking. Pack your device securely (we recommend bubble wrap or the original box) and drop it off at any Canada Post location. Our offers reflect real-time part pricing, so you'll get a fair value.",
  },
  {
    question: "How fast do I get cash for my phone?",
    answer: "Drop off in Winnipeg and get paid same-day via cash or E-Transfer. Mail-in devices are processed and paid within 24-48 hours of inspection. Payouts are based on current part costs—we adjust fairly as market prices change.",
  },
  {
    question: "Do I need to erase my phone before selling?",
    answer: "You can, but you don't have to. Our team securely wipes or destroys all data from every device during intake. Either way, your personal information is fully protected before we refurbish or recycle the device.",
  },
  {
    question: "How do I sell my phone in Winnipeg?",
    answer: "Submit your device details through our <a href='https://shop.mobiletechlab.ca/pages/repair2' target='_blank' class='text-primary hover:underline'>quote form</a> or drop by our Winnipeg location. We'll assess your phone and provide a cash offer based on the model, condition, and current part costs.",
  },
  {
    question: "Can I get cash for my used phone?",
    answer: "Yes! In-store drop-offs receive same-day cash or E-Transfer. You can also use your payout as store credit toward repairs or a <a href='/pre-owned' class='text-primary hover:underline'>pre-owned device</a>. Our offers are based on real replacement part prices and may change over time.",
  },
];

const TradeIn = () => {
  return (
    <>
      <Helmet>
        <title>Sell Your Phone Winnipeg | Get Cash for Used Devices | Mobile Tech Lab</title>
        <meta 
          name="description" 
          content="Sell your used phone, tablet, or laptop in Winnipeg. Get cash or store credit same-day. Price match guarantee. Free shipping on mail-ins. Working or damaged devices accepted." 
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
        <FAQSection 
          deviceName="Sell Your Phone" 
          faqs={SELL_PHONE_FAQS} 
          heading="Frequently Asked Questions"
          subheading="Common questions about selling your device to Mobile Tech Lab"
        />
      </main>

      <Footer />
      <StickyQuoteCTA />
    </>
  );
};

export default TradeIn;
