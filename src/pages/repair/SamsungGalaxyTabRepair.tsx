import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  PenTool,
  Award,
  Tablet,
  Briefcase,
  Shield
} from "lucide-react";
import heroImage from "@/assets/hero-samsung-galaxy-tab.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Fix cracked Galaxy Tab S10, S9, or A series displays with quality AMOLED/LCD replacements.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore all-day battery life to your Galaxy Tab—same-day service available.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Repair USB-C ports for reliable charging and DeX connectivity.",
  },
  {
    icon: PenTool,
    name: "S Pen & Digitizer",
    description: "Fix S Pen connectivity issues and digitizer repairs for drawing tablets.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Restore AKG-tuned quad speakers for immersive media playback.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Fix front and rear cameras for video calls and content creation.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Award,
    title: "Galaxy Tab Specialists",
    description: "Dedicated Samsung tablet expertise—separate from our phone service.",
  },
  {
    icon: Tablet,
    title: "All Tab Generations",
    description: "From Tab S10 Ultra to legacy Tab S3, we service every generation.",
  },
  {
    icon: Briefcase,
    title: "Enterprise & Active",
    description: "Rugged Active series and enterprise tablet repair specialists.",
  },
  {
    icon: Award,
    title: "Industry-Leading Warranties",
    description: "Lifetime warranty on screen repairs. 90-day warranty on battery replacements. Quality parts that meet OEM specifications.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "Tab S Flagships",
    models: ["Tab S10 Ultra", "Tab S10+", "Tab S10", "Tab S9 Ultra", "Tab S9+", "Tab S9", "Tab S9 FE+", "Tab S9 FE"],
    description: "Premium AMOLED tablets with S Pen support.",
  },
  {
    title: "Tab S Legacy",
    models: ["Tab S8 Ultra", "Tab S8+", "Tab S8", "Tab S7 FE", "Tab S7+", "Tab S7", "Tab S6 Lite", "Tab S6"],
    description: "Previous generation flagship repairs.",
  },
  {
    title: "Tab A Series",
    models: ["Tab A9+", "Tab A9", "Tab A8", "Tab A7 Lite", "Tab A7", "Tab A 10.1", "Tab A 8.0"],
    description: "Budget-friendly tablet repairs.",
  },
  {
    title: "Tab Active Rugged",
    models: ["Tab Active5", "Tab Active4 Pro", "Tab Active3"],
    description: "Enterprise rugged tablet specialists.",
  },
];

const MODELS = [
  // Galaxy Tab S Series (Flagship)
  "Galaxy Tab S10 Ultra", "Galaxy Tab S10+", "Galaxy Tab S10",
  "Galaxy Tab S9 Ultra", "Galaxy Tab S9+", "Galaxy Tab S9", "Galaxy Tab S9 FE+", "Galaxy Tab S9 FE",
  "Galaxy Tab S8 Ultra", "Galaxy Tab S8+", "Galaxy Tab S8",
  "Galaxy Tab S7 FE", "Galaxy Tab S7+", "Galaxy Tab S7",
  "Galaxy Tab S6 Lite", "Galaxy Tab S6",
  // Galaxy Tab A Series (Mid-Range)
  "Galaxy Tab A9+", "Galaxy Tab A9",
  "Galaxy Tab A8",
  "Galaxy Tab A7 Lite", "Galaxy Tab A7",
  // Galaxy Tab Active Series (Rugged)
  "Galaxy Tab Active5", "Galaxy Tab Active4 Pro", "Galaxy Tab Active3",
  // Older Models
  "Galaxy Tab S5e", "Galaxy Tab S4", "Galaxy Tab S3",
  "Galaxy Tab A 10.1", "Galaxy Tab A 8.0",
];

const FAQS = [
  {
    question: "How long does Galaxy Tab screen repair take in Winnipeg?",
    answer: "Most Galaxy Tab screen repairs are completed same-day, typically within 2-4 hours. Tab S Ultra models may require additional time due to their large 14.6\" displays.",
  },
  {
    question: "Can you fix water-damaged Galaxy Tabs?",
    answer: "Yes, we offer water damage assessment and repair for all Galaxy Tab devices. Success rates vary by extent of damage—bring it in for a free diagnostic.",
  },
  {
    question: "Do you repair Galaxy Tab S Pen functionality?",
    answer: "Absolutely! We diagnose and repair S Pen connectivity issues, including digitizer replacements for S Pen-compatible tablets like Tab S10 and S9 series.",
  },
  {
    question: "Is this different from your Samsung phone repair?",
    answer: "Yes! This page is specifically for Galaxy Tab tablets. For Samsung Galaxy phones (S24, Z Fold, etc.), visit our dedicated Samsung phone repair page.",
  },
  {
    question: "How much does Galaxy Tab repair cost?",
    answer: "Costs vary by model and repair type—Tab S Ultra screens cost more than Tab A repairs. Contact us for a free quote at our St. Vital or Garden City location.",
  },
];

const SamsungGalaxyTabRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Samsung Galaxy Tab Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab"
      metaDescription="Professional Samsung Galaxy Tab repair in Winnipeg. Screen replacement, battery, charging port repair for Tab S10, S9, S8, A9, Active & all models. Same-day service available."
      deviceName="Samsung Galaxy Tab"
      tagline="Expert Tablet Repair in Winnipeg"
      heroDescription="Winnipeg's dedicated Galaxy Tab repair specialists. From the powerful Tab S10 Ultra to everyday Tab A devices, we provide expert tablet repairs—screens, batteries, S Pen issues, and more. Same-day service available."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We service all Samsung Galaxy Tab generations including the latest Tab S10 series and rugged Active models."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
    />
  );
};

export default SamsungGalaxyTabRepair;
