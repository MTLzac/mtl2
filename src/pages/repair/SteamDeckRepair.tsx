import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Gamepad2, 
  HardDrive,
  Fan
} from "lucide-react";
import heroImage from "@/assets/hero-steam-deck.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace cracked LCD or OLED screens on Steam Deck.",
  },
  {
    icon: Gamepad2,
    name: "Joystick Repair",
    description: "Fix analog stick drift and button issues.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore battery life for extended portable gaming.",
  },
  {
    icon: HardDrive,
    name: "SSD Upgrade",
    description: "Upgrade to larger NVMe storage for more games.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Fix USB-C charging and docking issues.",
  },
  {
    icon: Fan,
    name: "Fan Replacement",
    description: "Replace noisy or failing cooling fans.",
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
    question: "Can you fix Steam Deck stick drift?",
    answer: "Yes! We replace the analog stick modules to permanently fix drift issues, usually within 1-2 hours.",
  },
  {
    question: "Do you upgrade Steam Deck storage?",
    answer: "Yes, we can upgrade your Steam Deck to a larger NVMe SSD so you can install more games.",
  },
  {
    question: "Can you replace Steam Deck OLED screens?",
    answer: "Yes, we can replace both LCD and OLED screens on all Steam Deck models.",
  },
  {
    question: "Do you fix noisy Steam Deck fans?",
    answer: "Yes, fan replacement is a common repair. We use quality fans for quieter operation.",
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
      heroDescription="Steam Deck acting up? From stick drift to screen damage, we repair all Steam Deck models. Plus SSD upgrades for more game storage."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Steam Deck models including OLED and LCD versions, plus storage upgrades."
      faqs={FAQS}
    />
  );
};

export default SteamDeckRepair;
