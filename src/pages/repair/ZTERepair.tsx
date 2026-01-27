import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Power,
  Award,
  Gamepad2,
  Package,
  Shield
} from "lucide-react";
import heroImage from "@/assets/hero-zte.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace cracked ZTE and nubia screens—including Red Magic gaming displays.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore battery life to your ZTE or nubia device in Winnipeg.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Fix USB-C charging port issues for reliable fast charging.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Repair under-display and traditional cameras on ZTE devices.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Fix dual stereo speakers and audio issues.",
  },
  {
    icon: Power,
    name: "Power Issues",
    description: "Diagnose and fix power, boot, and cooling system problems.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Award,
    title: "ZTE & nubia Specialists",
    description: "Winnipeg's experts in ZTE and nubia gaming devices.",
  },
  {
    icon: Gamepad2,
    title: "Gaming Phone Experts",
    description: "Specialized in Red Magic cooling systems and gaming features.",
  },
  {
    icon: Package,
    title: "Rare Device Parts",
    description: "Sourcing network for hard-to-find ZTE and nubia components.",
  },
  {
    icon: Award,
    title: "Warranty on Every Repair",
    description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "nubia Gaming Series",
    models: ["Red Magic 9 Pro", "Red Magic 8 Pro", "Red Magic 7", "Red Magic 6"],
    description: "Red Magic gaming phones with cooling system expertise.",
  },
  {
    title: "nubia Flagships",
    models: ["nubia Z60 Ultra", "nubia Z50 Ultra", "nubia Z50", "nubia Flip", "nubia Fold"],
    description: "Premium nubia flagships and foldables.",
  },
  {
    title: "Blade Series",
    models: ["Blade V50", "Blade V40", "Blade V30", "Blade A73", "Blade A53 Pro", "Blade A33"],
    description: "Budget-friendly Blade series repairs.",
  },
  {
    title: "Axon Flagships",
    models: ["Axon 40 Ultra", "Axon 40 Pro", "Axon 30 Ultra"],
    description: "Premium Axon series with under-display camera technology.",
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
    answer: "Yes! We're one of the few shops in Winnipeg that services ZTE devices, including nubia gaming phones. Visit us at St. Vital or Garden City.",
  },
  {
    question: "Can you repair ZTE nubia Red Magic gaming phones?",
    answer: "Absolutely! We're gaming phone experts and service the Red Magic series for screen, battery, cooling system, and shoulder trigger repairs.",
  },
  {
    question: "Are ZTE and nubia parts available in Winnipeg?",
    answer: "We can source parts for most ZTE models. Gaming phones and flagships may take a few extra days to source, but we have connections for rare components.",
  },
  {
    question: "Do you repair ZTE foldable phones?",
    answer: "Yes! We service the nubia Fold and nubia Flip foldable devices for screen, hinge, and display crease issues.",
  },
  {
    question: "How long does ZTE repair take?",
    answer: "Most repairs are completed same-day if parts are in stock. Part sourcing for rare models may add 2-4 business days.",
  },
];

const ZTERepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="ZTE Repair Winnipeg | nubia & Blade Screen Fix | Mobile Tech Lab"
      metaDescription="ZTE phone repair in Winnipeg. Screen, battery, charging repair for ZTE nubia, Red Magic, Blade & Axon series. Rare device specialists."
      canonicalUrl="https://mobiletechlab.ca/repair/zte"
      slug="zte"
      deviceName="ZTE"
      tagline="ZTE & nubia Repair Specialists in Winnipeg"
      heroDescription="From nubia Red Magic gaming phones to budget Blade devices, we repair all ZTE phones in Winnipeg. Hard to find parts? We've got the sourcing connections to fix your rare device."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all ZTE devices including nubia gaming phones, Blade series, Axon flagships, and foldables."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
    />
  );
};

export default ZTERepair;
