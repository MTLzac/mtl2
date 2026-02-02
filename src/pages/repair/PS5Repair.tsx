import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  HardDrive, 
  Fan, 
  Plug, 
  Gamepad2, 
  Disc,
  Wifi,
  Award,
  Zap,
  Wrench,
  Shield
} from "lucide-react";
import heroImage from "@/assets/hero-playstation.png";

const SERVICES = [
  {
    icon: Fan,
    name: "Overheating Repair",
    description: "Clean dust, replace thermal paste, fix PS5 overheating and loud fans.",
  },
  {
    icon: Plug,
    name: "HDMI Port Repair",
    description: "Replace damaged HDMI ports—no signal issues fixed. PS5 HDMI repairs involve board-level work and are not comparable to simple part swaps.",
  },
  {
    icon: Disc,
    name: "Disc Drive Repair",
    description: "Fix disc reading issues, stuck discs, and drive replacements.",
  },
  {
    icon: Gamepad2,
    name: "DualSense Repair",
    description: "Fix stick drift, adaptive trigger issues, and buttons on DualSense.",
  },
  {
    icon: HardDrive,
    name: "SSD Upgrade",
    description: "Install larger NVMe SSD storage for more PS5 games.",
  },
  {
    icon: Wifi,
    name: "WiFi/Bluetooth Repair",
    description: "Fix wireless connectivity for online gaming.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Award,
    title: "PlayStation Specialists",
    description: "Winnipeg's PS5 and DualSense controller repair experts.",
  },
  {
    icon: Fan,
    title: "Overheating Experts",
    description: "Thermal paste replacement and cooling system specialists.",
  },
  {
    icon: Zap,
    title: "Console Repair Pros",
    description: "HDMI port micro-soldering and board-level repairs. Many PS5 HDMI repairs can be completed the same day when the console is dropped off early enough. Rush service can guarantee same-day completion regardless of timing or repair queue.",
  },
  {
    icon: Award,
    title: "Warranty on Every Repair",
    description: "Lifetime warranty on most PS5 and controller repairs. Warranty coverage applies to the part repaired or replaced only and does not extend to unrelated components. If a function cannot be tested prior to repair, its operation cannot be guaranteed afterward. Damage caused by liquid exposure or power surges is not warrantied.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "PS5 Consoles",
    models: ["PS5 Disc Edition", "PS5 Digital Edition", "PS5 Slim (Disc)", "PS5 Slim Digital", "PS5 Pro"],
    description: "All PlayStation 5 console models. PS5 model variants, including standard, digital, and slim editions, do not significantly change the repair process for most common issues.",
  },
  {
    title: "DualSense Controllers",
    models: ["DualSense Controller", "DualSense Edge Controller"],
    description: "Stick drift, trigger, and charging port repairs. If a PS5 or controller cannot be reliably fixed or repaired in a cost-effective way, we'll explain alternative options, including trade-in credit toward another console.",
  },
  {
    title: "Accessories",
    models: ["PlayStation VR2", "Pulse 3D Headset"],
    description: "VR and audio accessory repairs.",
  },
];

const MODELS = [
  "PlayStation 5 (Disc Edition)",
  "PlayStation 5 Digital Edition",
  "PlayStation 5 Slim (Disc)",
  "PlayStation 5 Slim Digital",
  "PlayStation 5 Pro",
  "DualSense Controller",
  "DualSense Edge Controller",
  "PlayStation VR2",
];

const FAQS = [
  {
    question: "Can you fix PS5 overheating in Winnipeg?",
    answer: "Yes! We clean dust buildup, replace thermal paste, and ensure proper cooling at our St. Vital and Garden City locations. This resolves overheating and loud fan issues.",
  },
  {
    question: "Do you repair DualSense controller stick drift?",
    answer: "Yes, we repair analog stick drift and adaptive trigger issues on DualSense controllers, usually within an hour.",
  },
  {
    question: "Can you fix HDMI port issues on PS5?",
    answer: "Yes, HDMI port replacement is a specialty—we use micro-soldering for reliable video output restoration.",
  },
  {
    question: "Do you upgrade PS5 storage?",
    answer: "Yes, we install larger NVMe SSDs in your PS5 so you can store more games without deleting.",
  },
  {
    question: "Can you fix disc drive problems?",
    answer: "Yes, we diagnose and repair disc drive issues including cleaning, roller replacement, and full drive replacements.",
  },
];

const PRICING_MICRO_COPY = {
  costDriver: "PS5 repair costs depend on the issue—simple fixes like thermal paste are affordable, while HDMI port repairs involve board-level soldering and cost more.",
  priceShock: "Many customers are surprised that console repairs can approach a significant portion of the device's value, especially for complex board-level work.",
  advisory: "If the repair cost doesn't make financial sense for your console's age and condition, we'll explain alternatives including trade-in options.",
  fallback: "When repair isn't practical, we may be able to help recover saved game data or transfer your account to a replacement console.",
};

const PS5Repair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="PS5 Repair Winnipeg | PlayStation 5 Fix | Mobile Tech Lab"
      metaDescription="PS5 repair in Winnipeg. Overheating, HDMI port, disc drive, DualSense controller repair for PlayStation 5. Console repair specialists."
      canonicalUrl="https://mobiletechlab.ca/repair/ps5"
      slug="ps5"
      deviceName="PS5"
      tagline="PlayStation 5 Repair Specialists in Winnipeg"
      heroDescription="PS5 overheating? HDMI not working? DualSense drifting? We're Winnipeg's PlayStation 5 repair specialists. We repair a wide range of PS5 issues, including HDMI port damage, power or no-power problems, overheating, disc drive and power supply issues, software problems, and common controller repairs such as stick drift or charging port damage."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all PlayStation 5 models including disc and digital editions, plus DualSense controllers and PSVR2."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
      pricingMicroCopy={PRICING_MICRO_COPY}
    />
  );
};

export default PS5Repair;
