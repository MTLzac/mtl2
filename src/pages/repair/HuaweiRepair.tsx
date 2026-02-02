import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Cpu,
  Fingerprint,
  Award,
  Package,
  Shield,
  Zap
} from "lucide-react";
import heroImage from "@/assets/hero-huawei.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "OLED and LCD display replacements for Huawei P series, Mate, and Nova devices. Restore vibrant colors and touch responsiveness. Screen repair costs vary by model and part availability. Many Huawei devices only have one reliable screen option available, which can affect overall repair cost. Aftermarket screens may exist for some models, but they are only offered when the quality is sufficient to be reliably warrantied.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore full-day battery life to your Huawei device. Same-day replacement for most models.",
  },
  {
    icon: Plug,
    name: "SuperCharge Repair",
    description: "USB-C charging port and SuperCharge fast charging diagnosis and repair for all Huawei devices.",
  },
  {
    icon: Camera,
    name: "Leica Camera Repair",
    description: "Leica-engineered camera repairs on Huawei flagships. Front and rear camera replacements for all models.",
  },
  {
    icon: Cpu,
    name: "Motherboard Repair",
    description: "Component-level motherboard diagnostics and micro-soldering repair for complex issues.",
  },
  {
    icon: Fingerprint,
    name: "Fingerprint Sensor",
    description: "In-display and rear fingerprint sensor repairs and calibration for secure unlocking.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Award,
    title: "Huawei Specialists in Winnipeg",
    description: "Specialized knowledge of Huawei devices when most shops turn them away due to parts challenges.",
  },
  {
    icon: Package,
    title: "Hard-to-Find Parts",
    description: "We maintain supplier relationships for Huawei parts that others can't source. Most repairs require parts to be ordered and are typically completed within about one business day once parts arrive.",
  },
  {
    icon: Zap,
    title: "SuperCharge Experts",
    description: "We diagnose and repair SuperCharge, fast charging, and all power delivery systems.",
  },
  {
    icon: Award,
    title: "Warranty on Every Repair",
    description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs. Warranty coverage applies to the part repaired or replaced only and does not extend to unrelated components. If a function cannot be tested prior to repair, its operation cannot be guaranteed afterward.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "Huawei P Series",
    models: ["P60 Pro", "P60 Art", "P60", "P50 Pro", "P50 Pocket", "P50", "P40 Pro+", "P40 Pro", "P40", "P30 Pro", "P30"],
    description: "Premium Huawei phones with Leica cameras. OLED screen replacements and battery service.",
  },
  {
    title: "Huawei Mate Series",
    models: ["Mate 60 Pro", "Mate 60", "Mate 50 Pro", "Mate 50", "Mate 40 Pro", "Mate 40", "Mate 30 Pro", "Mate 20 Pro", "Mate 20 X"],
    description: "Flagship Mate lineup. Screen, battery, and motherboard repairs for all generations.",
  },
  {
    title: "Huawei Nova Series",
    models: ["Nova 11 Pro", "Nova 11", "Nova 10 Pro", "Nova 10", "Nova 9", "Nova 8", "Nova 7", "Nova 5T"],
    description: "Mid-range Nova devices. Affordable screen and battery repairs.",
  },
  {
    title: "Honor Devices",
    models: ["Honor Magic5 Pro", "Honor Magic4 Pro", "Honor 70", "Honor 50", "Honor 20 Pro", "Honor 10"],
    description: "Former Huawei sub-brand. We service all Honor models at our Winnipeg locations.",
  },
];

const MODELS = [
  // Huawei P Series
  "Huawei P60 Pro", "Huawei P60", "Huawei P60 Art",
  "Huawei P50 Pro", "Huawei P50", "Huawei P50 Pocket",
  "Huawei P40 Pro+", "Huawei P40 Pro", "Huawei P40", "Huawei P40 Lite",
  "Huawei P30 Pro", "Huawei P30", "Huawei P30 Lite",
  "Huawei P20 Pro", "Huawei P20", "Huawei P20 Lite",
  // Huawei Mate Series
  "Huawei Mate 60 Pro", "Huawei Mate 60",
  "Huawei Mate 50 Pro", "Huawei Mate 50",
  "Huawei Mate 40 Pro", "Huawei Mate 40",
  "Huawei Mate 30 Pro", "Huawei Mate 30",
  "Huawei Mate 20 Pro", "Huawei Mate 20", "Huawei Mate 20 X",
  // Huawei Nova Series
  "Huawei Nova 11 Pro", "Huawei Nova 11",
  "Huawei Nova 10 Pro", "Huawei Nova 10",
  "Huawei Nova 9", "Huawei Nova 8",
  // Honor (Former Huawei)
  "Honor Magic5 Pro", "Honor Magic4 Pro",
  "Honor 70", "Honor 50",
];

const FAQS = [
  {
    question: "Do you repair Huawei phones in Winnipeg?",
    answer: "Yes! We're one of the few repair shops in Winnipeg that specializes in Huawei devices. No need to ship your phone elsewhere.",
  },
  {
    question: "Are Huawei parts available in Winnipeg?",
    answer: "We maintain supplier relationships for Huawei parts that others can't source. Most parts available within 2-3 days for P series, Mate, and Nova devices.",
  },
  {
    question: "How long does Huawei screen repair take in Winnipeg?",
    answer: "Most Huawei screen replacements are completed same-day at our Winnipeg locations once parts are available, typically within 1-2 hours.",
  },
  {
    question: "Do you repair Honor phones?",
    answer: "Yes, we repair all Honor devices which were formerly part of Huawei, including the Magic series and Honor numbered series.",
  },
  {
    question: "Can you repair Huawei phones without Google services?",
    answer: "Yes! We repair all Huawei hardware regardless of whether the device has Google Mobile Services or Huawei Mobile Services.",
  },
];

const SERVICE_AREA_NOTE = "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online.";

const PRICING_MICRO_COPY = {
  costDriver: "Huawei repair costs depend on parts availability—as a brand with supply chain challenges, some components require specialty sourcing which can affect pricing.",
  priceShock: "Many customers are surprised that Huawei parts can be as expensive as Samsung or Apple parts due to limited supply and specialty sourcing requirements.",
  advisory: "If the repair cost doesn't make sense for your device's value, we'll explain alternatives and help you decide.",
  fallback: "When repair isn't practical, data recovery is often still possible to retrieve your files.",
};

const HuaweiRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Huawei Phone Repair Winnipeg | Broken Screens, Bad Batteries | Mobile Tech Lab"
      metaDescription="Expert Huawei repair in Winnipeg. Screen, battery, motherboard repair for Huawei P60, P50, Mate, Nova & Honor devices. Hard-to-find parts specialists."
      canonicalUrl="https://mobiletechlab.ca/repair/huawei"
      slug="huawei"
      deviceName="Huawei"
      tagline="Huawei Phone Repair Services in Winnipeg"
      heroDescription="Don't let parts availability stop you from repairing your Huawei device. We specialize in sourcing components for Huawei P series, Mate, Nova, and Honor phones in Winnipeg when others can't. Most repairs are reasonably priced, but many customers don't have a baseline for what a repair should cost, so we'll always explain options clearly before moving forward."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Huawei and Honor devices including P series, Mate series, Nova series, and foldable models. As Winnipeg's Huawei specialists, we service models that other shops turn away. Repair cost and part availability can vary between models, even when the repair type is the same."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote={SERVICE_AREA_NOTE}
      pricingMicroCopy={PRICING_MICRO_COPY}
    />
  );
};

export default HuaweiRepair;
