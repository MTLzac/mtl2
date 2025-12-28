import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Power
} from "lucide-react";
import heroImage from "@/assets/hero-infinix.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace cracked or damaged Infinix screens affordably.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore battery life to your Infinix device.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Fix charging port issues for reliable power.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Repair front and rear cameras on Infinix devices.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Fix speakers and earpiece audio issues.",
  },
  {
    icon: Power,
    name: "Power Issues",
    description: "Diagnose and fix power button and boot problems.",
  },
];

const MODELS = [
  // Infinix Zero Series
  "Infinix Zero 30", "Infinix Zero Ultra", "Infinix Zero 20",
  // Infinix Note Series
  "Infinix Note 40 Pro", "Infinix Note 40",
  "Infinix Note 30 Pro", "Infinix Note 30", "Infinix Note 30 VIP",
  "Infinix Note 12 Pro", "Infinix Note 12",
  // Infinix Hot Series
  "Infinix Hot 40 Pro", "Infinix Hot 40",
  "Infinix Hot 30", "Infinix Hot 20",
  // Infinix Smart Series
  "Infinix Smart 8", "Infinix Smart 7",
  // Infinix GT Series
  "Infinix GT 20 Pro", "Infinix GT 10 Pro",
];

const FAQS = [
  {
    question: "Do you repair Infinix phones in Winnipeg?",
    answer: "Yes! We're one of the few shops in Winnipeg that services Infinix devices. No need to go elsewhere.",
  },
  {
    question: "Are Infinix parts available?",
    answer: "We can source parts for most Infinix models. Common models have faster availability; gaming models may take a few extra days.",
  },
  {
    question: "Is Infinix repair affordable?",
    answer: "Yes! As a budget-friendly brand, Infinix repairs are typically very affordable, making repair more economical than replacement.",
  },
  {
    question: "Do you repair Infinix GT gaming phones?",
    answer: "Yes, we service the Infinix GT gaming series including screen, battery, and charging port repairs.",
  },
  {
    question: "How long does Infinix repair take?",
    answer: "Most repairs are completed same-day if parts are in stock. Part sourcing may add 2-3 days for less common models.",
  },
];

const InfinixRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Infinix Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab"
      metaDescription="Infinix phone repair in Winnipeg. Screen, battery, charging port repair for Infinix Note, Hot, Zero & GT series. Underserved market specialists."
      deviceName="Infinix"
      tagline="Infinix Repair Specialists in Winnipeg"
      heroDescription="Can't find Infinix repair in Winnipeg? We service all Infinix devices from the Note series to gaming GT phones. Affordable repairs for budget-friendly devices."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Infinix models including Note, Hot, Zero, Smart, and GT gaming series."
      faqs={FAQS}
    />
  );
};

export default InfinixRepair;
