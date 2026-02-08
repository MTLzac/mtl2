import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Gamepad2, 
  Volume2,
  Wifi,
  Award,
  Zap,
  Wrench,
  Shield
} from "lucide-react";
import heroImage from "@/assets/hero-nintendo-switch.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace cracked LCD or OLED screens on Switch OLED, original, and Lite.",
  },
  {
    icon: Gamepad2,
    name: "Joy-Con Drift Repair",
    description: "Permanent fix for analog stick drift on Joy-Con controllers.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore battery life for longer portable gaming sessions.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Fix USB-C charging port and dock connection issues.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Repair built-in speakers and audio issues.",
  },
  {
    icon: Wifi,
    name: "WiFi/Bluetooth Repair",
    description: "Fix wireless connectivity for online play.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Award,
    title: "Switch Specialists",
    description: "Winnipeg's Nintendo Switch and Joy-Con repair experts.",
  },
  {
    icon: Gamepad2,
    title: "Joy-Con Drift Experts",
    description: "Permanent analog stick fixes—our most common Switch repair.",
  },
  {
    icon: Zap,
    title: "Same-Day Service",
    description: "Most Joy-Con repairs completed in under an hour.",
  },
  {
    icon: Award,
    title: "Warranty on Every Repair",
    description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "Switch Consoles",
    models: ["Switch OLED Model", "Switch V2 (Red Box)", "Switch V1 (Original)", "Switch Lite"],
    description: "All Nintendo Switch console generations.",
  },
  {
    title: "Joy-Con Controllers",
    models: ["Joy-Con (Left)", "Joy-Con (Right)", "Joy-Con Pair"],
    description: "Joy-Con drift and button repairs.",
  },
  {
    title: "Accessories",
    models: ["Pro Controller", "Switch Dock"],
    description: "Pro Controller and dock repairs.",
  },
];

const MODELS = [
  // Nintendo Switch Consoles
  "Nintendo Switch OLED Model",
  "Nintendo Switch (V2 - Red Box)",
  "Nintendo Switch (V1 - Original)",
  "Nintendo Switch Lite",
  // Joy-Con Controllers
  "Joy-Con (Left)", "Joy-Con (Right)", "Joy-Con Pair",
  // Pro Controller
  "Nintendo Switch Pro Controller",
  // Accessories
  "Nintendo Switch Dock",
];

const FAQS = [
  {
    question: "Can you fix Joy-Con drift in Winnipeg?",
    answer: "Yes! Joy-Con drift is our most common Switch repair. We replace the analog stick module for a permanent fix at our St. Vital and Garden City locations, usually within an hour.",
  },
  {
    question: "Do you repair Switch OLED screens?",
    answer: "Yes, we replace both LCD screens on original Switch models and premium OLED screens on the newer Switch OLED model.",
  },
  {
    question: "Can you fix a Switch that won't charge?",
    answer: "Yes, we diagnose and repair charging issues including USB-C port replacement and internal charging chip repairs.",
  },
  {
    question: "Do you repair the Switch dock?",
    answer: "Yes, we repair common dock issues including USB-C connector problems and HDMI output issues.",
  },
  {
    question: "How long does Joy-Con repair take?",
    answer: "Joy-Con drift repair typically takes 30-60 minutes. We often have parts in stock for same-day service in Winnipeg.",
  },
];

const PRICING_MICRO_COPY = {
  costDriver: "Nintendo Switch repair costs depend on the issue—Joy-Con drift repairs are affordable, while Switch OLED screen replacements cost more due to premium displays. Nintendo's <a href='https://www.nintendo.com/en-ca/consumer-support/' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>official consumer support page</a> outlines warranty coverage and troubleshooting steps worth trying before a physical repair.",
  priceShock: "Many customers are pleasantly surprised that Joy-Con repairs are very affordable, but OLED screen replacements can approach a significant portion of the console's value. <a href='https://www.ifixit.com/Search?query=nintendo+switch+joy-con' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>iFixit's Joy-Con teardowns</a> show why drift is so common—the analog stick module is a known wear component across all Joy-Con revisions.",
  advisory: "If the repair cost doesn't make sense for your Switch's condition, we'll explain alternatives including trade-in options.",
  fallback: "Your game saves are typically backed up to Nintendo Switch Online, so data loss is rarely a concern with Switch repairs.",
};

const NintendoSwitchRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Nintendo Switch Repair Winnipeg | Joy-Con Drift Fix | Mobile Tech Lab"
      metaDescription="Nintendo Switch repair in Winnipeg. Joy-Con drift, screen, battery, charging port repair for Switch OLED, Switch Lite & original Switch."
      canonicalUrl="https://mobiletechlab.ca/repair/nintendo-switch"
      slug="nintendo-switch"
      deviceName="Nintendo Switch"
      tagline="Nintendo Switch Repair Experts in Winnipeg"
      heroDescription="Joy-Con drift driving you crazy? Screen cracked? We fix all Nintendo Switch models in Winnipeg—OLED, original, and Lite. Joy-Con and Pro Controller repairs with same-day service."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Nintendo Switch models including OLED, original, and Lite, plus Joy-Con and Pro controllers."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
      pricingMicroCopy={PRICING_MICRO_COPY}
    />
  );
};

export default NintendoSwitchRepair;
