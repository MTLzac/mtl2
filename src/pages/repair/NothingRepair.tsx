import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Lightbulb,
  Volume2,
  Fingerprint,
  Award,
  Sparkles,
  Rocket,
  Shield
} from "lucide-react";
import heroImage from "@/assets/hero-nothing.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace cracked Nothing AMOLED displays while preserving the iconic transparent design. Repair costs and timelines vary by model and part availability. For less common devices like these, parts availability can differ by model and supplier, but repairs are often still possible after evaluation. Aftermarket parts are only offered when the quality is sufficient to be reliably warrantied.",
  },
  {
    icon: Lightbulb,
    name: "Glyph Interface Repair",
    description: "Fix LED Glyph lighting issues—restore the signature Nothing experience.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore battery life to your Nothing Phone in Winnipeg.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Fix USB-C and wireless charging issues on Nothing devices.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Repair stereo speakers for crystal-clear Nothing OS audio.",
  },
  {
    icon: Fingerprint,
    name: "Fingerprint Sensor",
    description: "Repair in-display fingerprint sensors on Nothing phones.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Award,
    title: "Nothing Specialists",
    description: "Winnipeg's experts in Carl Pei's innovative Nothing devices. Repairs for these devices typically require at least one business day due to part sourcing. If you need a working phone while we complete the repair, loaner phones may be available.",
  },
  {
    icon: Lightbulb,
    title: "Glyph Interface Experts",
    description: "Specialized repair for the unique LED Glyph lighting system. If a repair is outside your budget or parts are not readily available, we can also attempt data recovery to help you retrieve important information.",
  },
  {
    icon: Rocket,
    title: "New Brand Pioneers",
    description: "Early adopters supporting Nothing devices since day one. Most repairs for these devices are reasonably priced, but many customers don't have a baseline for what a repair should cost, so we'll explain options clearly before proceeding.",
  },
  {
    icon: Award,
    title: "Warranty on Every Repair",
    description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs. Warranty coverage applies to the part repaired or replaced only and does not extend to unrelated components. If a function cannot be tested prior to repair, its operation cannot be guaranteed afterward.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "Nothing Phone Series",
    models: ["Nothing Phone (2a) Plus", "Nothing Phone (2a)", "Nothing Phone (2)", "Nothing Phone (1)"],
    description: "Full Nothing Phone lineup with transparent design expertise.",
  },
  {
    title: "CMF by Nothing",
    models: ["CMF Phone 1"],
    description: "Nothing's affordable sub-brand with modular accessories.",
  },
  {
    title: "Nothing Ear Series",
    models: ["Nothing Ear (2)", "Nothing Ear (1)", "Nothing Ear Stick"],
    description: "Transparent earbud repairs and battery replacements.",
  },
];

const MODELS = [
  // Nothing Phone Series
  "Nothing Phone (2a) Plus", "Nothing Phone (2a)",
  "Nothing Phone (2)", "Nothing Phone (1)",
  // CMF by Nothing
  "CMF Phone 1",
  // Nothing Ear
  "Nothing Ear (2)", "Nothing Ear (1)", "Nothing Ear Stick",
];

const FAQS = [
  {
    question: "Can you fix the Glyph interface lights on Nothing phones?",
    answer: "Yes! We're Winnipeg's Glyph interface experts. We diagnose and repair individual LEDs, the controller, and restore full Glyph functionality to your Nothing Phone.",
  },
  {
    question: "Are Nothing phone parts available in Winnipeg?",
    answer: "As a newer brand, some Nothing parts require sourcing time. We can typically obtain parts within 2-5 business days. Popular models like Phone (2) have better availability.",
  },
  {
    question: "Is Nothing a good brand worth repairing?",
    answer: "Absolutely! Nothing has earned a reputation for innovative design and clean software. The transparent design and Glyph interface make these phones unique and definitely worth repairing.",
  },
  {
    question: "Do you repair CMF phones in Winnipeg?",
    answer: "Yes! CMF by Nothing is the company's affordable sub-brand, and we service the CMF Phone 1 for screen, battery, and charging repairs.",
  },
  {
    question: "How long does Nothing Phone repair take?",
    answer: "If parts are in stock, most repairs take 1-2 hours. Part sourcing for this newer brand may add 2-5 business days depending on the model.",
  },
];

const PRICING_MICRO_COPY = {
  costDriver: "Nothing Phone repair costs depend on the model and parts availability—as a newer brand, some components require specialty sourcing.",
  priceShock: "Many customers are surprised that Nothing repairs can cost as much as other premium Android devices due to unique parts and limited supply.",
  advisory: "If the repair cost doesn't make sense for your device's value, we'll explain alternatives clearly.",
  fallback: "When repair isn't practical, data recovery is often still possible to retrieve your files.",
};

const NothingRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Nothing Phone Repair Winnipeg | Glyph & Screen Fix | Mobile Tech Lab"
      metaDescription="Nothing Phone repair in Winnipeg. Screen, Glyph interface, battery repair for Nothing Phone (2), Phone (1) & CMF devices. New brand expertise."
      canonicalUrl="https://mobiletechlab.ca/repair/nothing"
      slug="nothing"
      deviceName="Nothing Phone"
      tagline="Nothing Phone Specialists in Winnipeg"
      heroDescription="Got a Nothing Phone with a cracked screen or Glyph interface issues? We're Winnipeg's experts in Carl Pei's innovative devices, preserving the iconic transparent design and LED lighting system."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We service all Nothing devices including Nothing Phone (1), (2), (2a) and CMF Phone 1. Repair cost and part availability can vary between models, even within the same brand."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
      pricingMicroCopy={PRICING_MICRO_COPY}
    />
  );
};

export default NothingRepair;
