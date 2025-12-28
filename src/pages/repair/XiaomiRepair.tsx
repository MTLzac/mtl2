import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Zap
} from "lucide-react";

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
  // Xiaomi 14 Series
  "Xiaomi 14 Ultra", "Xiaomi 14 Pro", "Xiaomi 14",
  // Xiaomi 13 Series
  "Xiaomi 13 Ultra", "Xiaomi 13 Pro", "Xiaomi 13", "Xiaomi 13 Lite", "Xiaomi 13T Pro", "Xiaomi 13T",
  // Xiaomi 12 Series
  "Xiaomi 12 Pro", "Xiaomi 12", "Xiaomi 12 Lite", "Xiaomi 12T Pro", "Xiaomi 12T",
  // Xiaomi Mix Series
  "Xiaomi Mix Fold 3", "Xiaomi Mix Fold 2", "Xiaomi Mix 4",
  // Redmi Note Series
  "Redmi Note 13 Pro+", "Redmi Note 13 Pro", "Redmi Note 13",
  "Redmi Note 12 Pro+", "Redmi Note 12 Pro", "Redmi Note 12",
  "Redmi Note 11 Pro+", "Redmi Note 11 Pro", "Redmi Note 11",
  // Redmi Series
  "Redmi 13", "Redmi 12", "Redmi 11 Prime",
  // POCO Series
  "POCO F5 Pro", "POCO F5", "POCO F4 GT",
  "POCO X5 Pro", "POCO X5", "POCO X4 Pro",
  "POCO M5", "POCO M4 Pro",
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
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Xiaomi, Redmi, and POCO devices. As Winnipeg's Xiaomi specialists, we service models that other shops turn away."
      faqs={FAQS}
    />
  );
};

export default XiaomiRepair;
