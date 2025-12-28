import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Gamepad2, 
  Volume2,
  Wifi
} from "lucide-react";
import heroImage from "@/assets/hero-nintendo-switch.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace cracked LCD or OLED screens on your Switch.",
  },
  {
    icon: Gamepad2,
    name: "Joy-Con Drift Repair",
    description: "Fix analog stick drift on Joy-Con controllers.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore battery life for longer gaming sessions.",
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
    description: "Fix wireless connectivity issues.",
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
    question: "Can you fix Joy-Con drift?",
    answer: "Yes! Joy-Con drift is our most common Switch repair. We replace the analog stick module for a permanent fix, usually within an hour.",
  },
  {
    question: "Do you repair Switch OLED screens?",
    answer: "Yes, we can replace both LCD screens on original Switch models and OLED screens on the newer OLED model.",
  },
  {
    question: "Can you fix a Switch that won't charge?",
    answer: "Yes, we diagnose and repair charging issues including USB-C port replacement and internal charging chip repairs.",
  },
  {
    question: "Do you repair the Switch dock?",
    answer: "Yes, we can repair common dock issues including USB-C connector problems and HDMI output issues.",
  },
  {
    question: "How long does Joy-Con repair take?",
    answer: "Joy-Con drift repair typically takes 30-60 minutes. We often have parts in stock for same-day service.",
  },
];

const NintendoSwitchRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Nintendo Switch Repair Winnipeg | Joy-Con Drift Fix | Mobile Tech Lab"
      metaDescription="Nintendo Switch repair in Winnipeg. Joy-Con drift, screen, battery, charging port repair for Switch OLED, Switch Lite & original Switch."
      deviceName="Nintendo Switch"
      tagline="Nintendo Switch Repair Experts in Winnipeg"
      heroDescription="Joy-Con drift driving you crazy? Screen cracked? We fix all Nintendo Switch models and Joy-Con controllers. Get back to gaming fast."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Nintendo Switch models including OLED, original, and Lite, plus Joy-Con and Pro controllers."
      faqs={FAQS}
    />
  );
};

export default NintendoSwitchRepair;
