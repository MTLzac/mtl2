import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import {
  Smartphone,
  Battery
} from "lucide-react";
import heroImage from "@/assets/hero-apple-watch.png";

const SERVICES = [
  {
    icon: Smartphone,
    name: "Screen Replacement",
    description: "Cracked or unresponsive Apple Watch display? We replace screens on all Apple Watch models with quality parts."
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Watch not holding charge? We replace worn batteries to restore all-day battery life to your Apple Watch."
  }
];

const MODELS = [
  "Apple Watch Series 10",
  "Apple Watch Series 9",
  "Apple Watch Series 8",
  "Apple Watch Series 7",
  "Apple Watch Series 6",
  "Apple Watch Series 5",
  "Apple Watch Series 4",
  "Apple Watch Series 3",
  "Apple Watch SE (1st Gen)",
  "Apple Watch SE (2nd Gen)",
  "Apple Watch SE (3rd Gen)",
  "Apple Watch Ultra",
  "Apple Watch Ultra 2"
];

const FAQS = [
  {
    question: "How long does an Apple Watch screen replacement take?",
    answer: "Most Apple Watch screen replacements take 1-2 hours depending on the model. We'll give you an accurate time estimate when you bring in your device."
  },
  {
    question: "Is my Apple Watch still water resistant after repair?",
    answer: "We take care to maintain water resistance during repairs. However, we recommend avoiding water exposure for 24-48 hours after any repair to allow seals to fully set."
  },
  {
    question: "Do you repair all Apple Watch sizes?",
    answer: "Yes! We repair all Apple Watch sizes including 38mm, 40mm, 41mm, 42mm, 44mm, 45mm, and 49mm (Ultra) models."
  },
  {
    question: "How do I know if my Apple Watch battery needs replacing?",
    answer: "Signs include rapid battery drain, unexpected shutdowns, or if your watch no longer lasts through a full day. You can also check Battery Health in Settings on your watch."
  },
  {
    question: "Do you offer a warranty on Apple Watch repairs?",
    answer: "Yes, all our Apple Watch repairs come with a warranty. Screen replacements and battery replacements are covered for defects in parts and workmanship."
  }
];

const AppleWatchRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Apple Watch Repair Winnipeg | Screen & Battery Replacement"
      metaDescription="Expert Apple Watch repair in Winnipeg. Screen replacement and battery replacement for all Apple Watch models including Series 10, Ultra 2, and SE. Fast, reliable service."
      deviceName="Apple Watch"
      tagline="Apple Watch Repair Experts in Winnipeg"
      heroDescription="Need your Apple Watch repaired? We specialize in screen and battery replacements for all Apple Watch models. Fast turnaround, quality parts, expert technicians."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Apple Watch models from the original Series 3 to the latest Series 10, SE generations, and Ultra models."
      faqs={FAQS}
    />
  );
};

export default AppleWatchRepair;
