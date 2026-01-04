import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Gamepad2, 
  HardDrive,
  Fan,
  Award,
  Zap,
  Monitor,
  Shield
} from "lucide-react";
import heroImage from "@/assets/hero-steam-deck.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace cracked LCD or OLED screens on all Steam Deck models.",
  },
  {
    icon: Gamepad2,
    name: "Joystick Drift Repair",
    description: "Permanent fix for analog stick drift on Steam Deck.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore battery life for extended portable PC gaming.",
  },
  {
    icon: HardDrive,
    name: "SSD Upgrade",
    description: "Upgrade to larger NVMe storage—512GB, 1TB, 2TB options.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Fix USB-C charging and docking issues.",
  },
  {
    icon: Fan,
    name: "Fan Replacement",
    description: "Replace noisy or failing cooling fans for quiet gaming.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Award,
    title: "Steam Deck Specialists",
    description: "Winnipeg's PC gaming handheld repair experts.",
  },
  {
    icon: Monitor,
    title: "OLED & LCD Experts",
    description: "Screen repairs for both Steam Deck OLED and LCD models.",
  },
  {
    icon: HardDrive,
    title: "SSD Upgrade Pros",
    description: "Storage upgrades with system reinstallation included.",
  },
  {
    icon: Award,
    title: "Industry-Leading Warranties",
    description: "Lifetime warranty on screen repairs. 90-day warranty on battery replacements. Quality parts that meet OEM specifications.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "Steam Deck OLED",
    models: ["Steam Deck OLED 1TB", "Steam Deck OLED 512GB"],
    description: "Latest OLED model repairs and upgrades.",
  },
  {
    title: "Steam Deck LCD",
    models: ["Steam Deck 512GB", "Steam Deck 256GB", "Steam Deck 64GB"],
    description: "Original LCD model repairs.",
  },
  {
    title: "Accessories",
    models: ["Steam Deck Dock"],
    description: "Dock repairs and troubleshooting.",
  },
];

const MODELS = [
  // Steam Deck OLED
  "Steam Deck OLED 1TB", "Steam Deck OLED 512GB",
  // Steam Deck LCD
  "Steam Deck 512GB", "Steam Deck 256GB", "Steam Deck 64GB",
  // Accessories
  "Steam Deck Dock",
];

const FAQS = [
  {
    question: "Can you fix Steam Deck stick drift in Winnipeg?",
    answer: "Yes! We replace the analog stick modules for a permanent drift fix at our St. Vital and Garden City locations, usually within 1-2 hours.",
  },
  {
    question: "Do you upgrade Steam Deck storage?",
    answer: "Yes, we upgrade your Steam Deck to larger NVMe SSDs (up to 2TB) so you can install more games. System reinstallation included.",
  },
  {
    question: "Can you replace Steam Deck OLED screens?",
    answer: "Yes, we replace both LCD screens on original models and premium OLED screens on Steam Deck OLED.",
  },
  {
    question: "Do you fix noisy Steam Deck fans?",
    answer: "Yes, fan replacement is a common repair. We use quality fans for quieter operation during gaming sessions.",
  },
  {
    question: "How long does Steam Deck repair take?",
    answer: "Most repairs take 1-2 hours if parts are in stock. SSD upgrades include system reinstallation time.",
  },
];

const SteamDeckRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Steam Deck Repair Winnipeg | Screen & Joystick Fix | Mobile Tech Lab"
      metaDescription="Steam Deck repair in Winnipeg. Screen, joystick drift, battery, SSD upgrade for Steam Deck OLED & LCD models. PC gaming handheld specialists."
      deviceName="Steam Deck"
      tagline="Steam Deck Repair in Winnipeg"
      heroDescription="Steam Deck acting up? Screen cracked, stick drift, or need more storage? We're Winnipeg's PC gaming handheld specialists. Steam Deck OLED and LCD repairs plus SSD upgrades."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Steam Deck models including OLED and LCD versions, plus storage upgrades."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
    />
  );
};

export default SteamDeckRepair;
