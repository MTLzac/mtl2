import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Power
} from "lucide-react";
import heroImage from "@/assets/hero-zte.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace cracked or damaged ZTE screens.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore battery life to your ZTE device.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Fix USB-C charging port issues.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Repair front and rear cameras on ZTE devices.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Fix speakers and audio issues.",
  },
  {
    icon: Power,
    name: "Power Issues",
    description: "Diagnose and fix power and boot problems.",
  },
];

const MODELS = [
  // ZTE nubia Series
  "ZTE nubia Z60 Ultra", "ZTE nubia Z50 Ultra", "ZTE nubia Z50",
  "ZTE nubia Red Magic 9 Pro", "ZTE nubia Red Magic 8 Pro",
  "ZTE nubia Flip", "ZTE nubia Fold",
  // ZTE Blade Series
  "ZTE Blade V50", "ZTE Blade V40", "ZTE Blade V30",
  "ZTE Blade A73", "ZTE Blade A53 Pro", "ZTE Blade A33",
  // ZTE Axon Series
  "ZTE Axon 40 Ultra", "ZTE Axon 40 Pro", "ZTE Axon 30 Ultra",
  // Carrier Models
  "ZTE Avid 589", "ZTE Cymbal", "ZTE Majesty Pro",
  // Legacy Models
  "ZTE Zmax", "ZTE Grand X",
];

const FAQS = [
  {
    question: "Do you repair ZTE phones in Winnipeg?",
    answer: "Yes! We're one of the few shops that services ZTE devices in Winnipeg, including nubia gaming phones.",
  },
  {
    question: "Can you repair ZTE nubia gaming phones?",
    answer: "Yes, we service the Red Magic gaming series for screen, battery, and cooling system issues.",
  },
  {
    question: "Are ZTE parts available?",
    answer: "We can source parts for most ZTE models. Gaming phones and flagships may take a few extra days to source.",
  },
  {
    question: "Do you repair ZTE foldable phones?",
    answer: "Yes, we service the nubia Fold and nubia Flip foldable devices.",
  },
  {
    question: "How long does ZTE repair take?",
    answer: "Most repairs are completed same-day if parts are in stock. Part sourcing may add 2-4 days for rare models.",
  },
];

const ZTERepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="ZTE Repair Winnipeg | nubia & Blade Screen Fix | Mobile Tech Lab"
      metaDescription="ZTE phone repair in Winnipeg. Screen, battery, charging repair for ZTE nubia, Red Magic, Blade & Axon series. Rare device specialists."
      deviceName="ZTE"
      tagline="ZTE & nubia Repair Specialists in Winnipeg"
      heroDescription="From nubia gaming phones to budget Blade devices, we repair all ZTE phones. Hard to find parts? We've got the connections to source what you need."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all ZTE devices including nubia gaming phones, Blade series, Axon flagships, and foldables."
      faqs={FAQS}
    />
  );
};

export default ZTERepair;
