import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import {
  Smartphone,
  Battery,
  Droplets,
  Watch,
  Zap,
  Shield,
  Clock,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-apple-watch.png";

const SERVICES = [
  {
    icon: Smartphone,
    name: "Screen Replacement",
    description: "Cracked or unresponsive Apple Watch display? We replace OLED and LTPO screens on all Series, SE, and Ultra models.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Apple Watch not lasting all day? Same-day battery replacement to restore full charge capacity.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Zap,
    title: "Same-Day Watch Repairs",
    description: "Most Apple Watch screen and battery repairs completed in 1-2 hours. Walk-ins welcome at both locations.",
  },
  {
    icon: Clock,
    title: "All Sizes Serviced",
    description: "We repair all Apple Watch sizes: 38mm, 40mm, 41mm, 42mm, 44mm, 45mm, and 49mm Ultra.",
  },
  {
    icon: Award,
    title: "Warranty on Every Repair",
    description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "Apple Watch Series",
    models: ["Series 10", "Series 9", "Series 8", "Series 7", "Series 6", "Series 5", "Series 4", "Series 3"],
    description: "Standard Apple Watch lineup. Screen replacements and battery service for all generations.",
  },
  {
    title: "Apple Watch SE",
    models: ["SE (3rd Gen)", "SE (2nd Gen)", "SE (1st Gen)"],
    description: "Budget-friendly Apple Watch repairs. Affordable screen and battery replacements for all SE models.",
  },
  {
    title: "Apple Watch Ultra",
    models: ["Ultra 2", "Ultra"],
    description: "Rugged Apple Watch repairs. 49mm titanium case screen replacements and battery service.",
  },
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
  "Apple Watch Ultra 2",
];

const FAQS = [
  {
    question: "How long does Apple Watch screen replacement take in Winnipeg?",
    answer: "Most Apple Watch screen replacements at our Winnipeg locations take 1-2 hours depending on the model. We'll give you an accurate time estimate when you bring in your device.",
  },
  {
    question: "Is my Apple Watch still water resistant after repair?",
    answer: "We take care to maintain water resistance during repairs using proper seals. We recommend avoiding water exposure for 24-48 hours after repair to allow seals to fully set.",
  },
  {
    question: "How much does Apple Watch battery replacement cost in Winnipeg?",
    answer: "Apple Watch battery replacement costs vary by model and generation. Contact our Winnipeg locations for a free quote specific to your watch.",
  },
  {
    question: "Do you repair Apple Watch Ultra in Winnipeg?",
    answer: "Yes! We repair Apple Watch Ultra and Ultra 2 including the larger 49mm display, battery, and titanium case components.",
  },
  {
    question: "How do I know if my Apple Watch battery needs replacing?",
    answer: "Signs include rapid battery drain, unexpected shutdowns, or if your watch no longer lasts through a full day. Check Battery Health in Settings > Battery on your watch.",
  },
];

const SERVICE_AREA_NOTE = "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online.";

const PRICING_MICRO_COPY = {
  costDriver: "Apple Watch repair costs depend on the model—newer Series and Ultra models have more expensive OLED displays, while older models are more affordable to repair.",
  priceShock: "Many customers are surprised that an Apple Watch screen can cost nearly as much as a new SE model, especially for larger or Ultra variants.",
  advisory: "If the repair cost approaches the value of your Apple Watch, we'll explain your options so you can make the best decision.",
  fallback: "Unlike phones, Apple Watch data is typically synced to your iPhone, so data loss is rarely a concern with watch repairs.",
};

const AppleWatchRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Apple Watch Repair Winnipeg | Screen & Battery Replacement"
      metaDescription="Expert Apple Watch repair in Winnipeg. Screen replacement and battery replacement for all Apple Watch models including Series 10, Ultra 2, and SE. Fast, reliable service."
      canonicalUrl="https://mobiletechlab.ca/repair/apple-watch"
      slug="apple-watch"
      deviceName="Apple Watch"
      tagline="Apple Watch Repair in Winnipeg, MB"
      heroDescription="Cracked screen? Battery draining fast? We repair all Apple Watch models in Winnipeg—from Series 3 to the latest Series 10, SE generations, and Ultra. Same-day service with quality parts and expert technicians. We also repair iPhone, iPad, and MacBook."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Apple Watch models from the original Series 3 to the latest Series 10, SE generations, and Ultra models."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote={SERVICE_AREA_NOTE}
      pricingMicroCopy={PRICING_MICRO_COPY}
    />
  );
};

export default AppleWatchRepair;
