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
    description: "Replace damaged HDMI ports—no signal issues fixed.",
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
    description: "HDMI port micro-soldering and board-level repairs.",
  },
  {
    icon: Shield,
    title: "90-Day Repair Warranty",
    description: "All PlayStation 5 repairs backed by our warranty.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "PS5 Consoles",
    models: ["PS5 Disc Edition", "PS5 Digital Edition", "PS5 Slim (Disc)", "PS5 Slim Digital", "PS5 Pro"],
    description: "All PlayStation 5 console models.",
  },
  {
    title: "DualSense Controllers",
    models: ["DualSense Controller", "DualSense Edge Controller"],
    description: "Stick drift and trigger repairs.",
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

const PS5Repair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="PS5 Repair Winnipeg | HDMI, Stick Drift, Overheating | Mobile Tech Lab"
      metaDescription="PS5 repair in Winnipeg. Overheating, HDMI port, disc drive, DualSense controller repair for PlayStation 5. Console repair specialists."
      deviceName="PS5"
      tagline="PlayStation 5 Repair in Winnipeg, MB"
      heroDescription="PS5 overheating? HDMI not working? DualSense drifting? We're Winnipeg's PlayStation 5 repair specialists. All PS5 models and DualSense controllers serviced."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all PlayStation 5 models including disc and digital editions, plus DualSense controllers and PSVR2."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
    />
  );
};

export default PS5Repair;
