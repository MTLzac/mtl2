import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Zap
} from "lucide-react";
import heroImage from "@/assets/hero-xiaomi.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace cracked AMOLED displays on Xiaomi and Redmi devices.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore full-day battery life to your Xiaomi device.",
  },
  {
    icon: Zap,
    name: "Fast Charging Repair",
    description: "Fix HyperCharge and Turbo Charge port issues.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Repair Leica-partnered cameras on Xiaomi flagship devices.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Fix speakers, earpieces, and Harman Kardon audio systems.",
  },
  {
    icon: Plug,
    name: "Port & Connector Repair",
    description: "Repair USB-C ports, SIM trays, and headphone jacks.",
  },
];

const MODELS = [
  // Xiaomi Series
  "Xiaomi 17 Pro Max", "Xiaomi 15 Ultra", "Xiaomi 15T Pro 5G", "Xiaomi 15T 5G", "Xiaomi 15S Pro", "Xiaomi 15 Pro", "Xiaomi 15", "Xiaomi 14 Ultra", "Xiaomi 14 Pro", "Xiaomi 14",
  // Mi Series
  "Mi 11 Pro", "Mi 11 Lite 5G", "Mi 11 Lite 5G NE", "Mi 11T", "Mi 11 Lite", "Mi 11 5G", "Mi 10T Pro 5G", "Mi 10T Lite 5G",
  // Redmi Series
  "Redmi Turbo 4", "Redmi 15C 5G", "Redmi 15C 4G", "Redmi 15 5G", "Redmi 15 4G", "Redmi 14R", "Redmi 14C 5G", "Redmi 14C 4G", "Redmi 13R",
  // Redmi A Series
  "Redmi A5 4G", "Redmi A4", "Redmi A3 Pro", "Redmi A3x", "Redmi A3", "Redmi A2 Plus", "Mi A2 Lite", "Redmi A2", "Redmi A1 Plus",
  // Redmi K Series
  "Redmi K80 Pro", "Redmi K80", "Redmi K70 Ultra", "Redmi K70 Pro", "Redmi K70E", "Redmi K70", "Redmi K60 Ultra", "Redmi K60 Pro", "Redmi K60",
  // Redmi Note Series
  "Redmi Note 14 Pro Plus 5G", "Redmi Note 14 Pro Plus", "Redmi Note 14 Pro 5G", "Redmi Note 14 Pro 4G", "Redmi Note 14S", "Redmi Note 14 5G", "Redmi Note 14 4G", "Redmi Note 13R Pro", "Redmi Note 13 Pro+", "Redmi Note 13 Pro", "Redmi Note 13", "Redmi Note 12 Pro+", "Redmi Note 12 Pro", "Redmi Note 12", "Redmi Note 11 Pro+", "Redmi Note 11 Pro", "Redmi Note 11",
  // Poco X Series
  "Poco X7 Pro", "Poco X7", "Poco X6 Pro", "Poco X6", "Poco X5 Pro", "Poco X5", "Poco X4 Pro 5G", "Poco X4 GT", "Poco X3 Pro",
  // Poco M Series
  "Poco M7 Pro 5G", "Poco M7 Pro", "Poco M7", "Poco M6 Pro 4G", "Poco M6 Pro", "Poco M6 5G", "Poco M6 4G", "Poco M5s", "Poco M5",
  // Poco F Series
  "Poco F7 Ultra", "Poco F7 Pro", "Poco F7", "Poco F6 Pro", "Poco F6", "Poco F5 Pro", "Poco F5", "Poco F4 GT", "Poco F4",
  // Black Shark Series
  "Black Shark 5 Pro", "Black Shark 5 RS", "Black Shark 4s Pro", "Black Shark 4s", "Black Shark 4 Pro", "Black Shark 4",
  // Mi Note Series
  "Mi Note 10 Pro", "Mi Note 10 Lite", "Mi Note 10",
  // Civi Series
  "Xiaomi Civi 1S", "Xiaomi Civi",
  // Mix Series
  "Xiaomi Mix Fold 3", "Xiaomi Mix Fold 2", "Xiaomi Mix 4",
];

const FAQS = [
  {
    question: "Do you repair Xiaomi phones in Winnipeg?",
    answer: "Yes! We're one of the few repair shops in Winnipeg that services Xiaomi, Redmi, and POCO devices. No need to ship your phone elsewhere.",
  },
  {
    question: "Are Xiaomi parts available in Canada?",
    answer: "We maintain supplier relationships that allow us to source Xiaomi parts. Most common parts are available within 1-2 days.",
  },
  {
    question: "Can you fix Xiaomi HyperCharge issues?",
    answer: "Yes, we diagnose and repair fast charging problems including HyperCharge 120W and 67W systems.",
  },
  {
    question: "Do you repair POCO and Redmi phones?",
    answer: "Absolutely! POCO and Redmi are Xiaomi sub-brands, and we service all models from both lines.",
  },
  {
    question: "Why choose Mobile Tech Lab for Xiaomi repair?",
    answer: "Most Winnipeg repair shops don't service Xiaomi devices. We've invested in parts sourcing and training to fill this gap in the local market.",
  },
];

const XiaomiRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Xiaomi Repair Winnipeg | Redmi & POCO Screen Fix | Mobile Tech Lab"
      metaDescription="Xiaomi repair specialists in Winnipeg – no local competition! Screen, battery, fast charging repair for Xiaomi 14, 13, Redmi Note, POCO & all models."
      deviceName="Xiaomi"
      tagline="Winnipeg's Xiaomi, Redmi & POCO Specialists"
      heroDescription="Can't find anyone in Winnipeg to repair your Xiaomi? We've got you covered. From flagship Xiaomi 14 to budget Redmi devices, we're the local experts for all Xiaomi ecosystem repairs."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Xiaomi, Redmi, and POCO devices. As Winnipeg's Xiaomi specialists, we service models that other shops turn away."
      faqs={FAQS}
    />
  );
};

export default XiaomiRepair;
