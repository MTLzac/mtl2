import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  HardDrive, 
  Fan, 
  Plug, 
  Gamepad2, 
  Disc,
  Wifi
} from "lucide-react";
import heroImage from "@/assets/hero-playstation.png";

const SERVICES = [
  {
    icon: Fan,
    name: "Overheating Repair",
    description: "Clean and replace thermal paste to fix overheating issues.",
  },
  {
    icon: HardDrive,
    name: "SSD Upgrade",
    description: "Install larger NVMe SSD storage for more games.",
  },
  {
    icon: Disc,
    name: "Disc Drive Repair",
    description: "Fix disc reading issues and drive replacements.",
  },
  {
    icon: Plug,
    name: "HDMI Port Repair",
    description: "Replace damaged HDMI ports for video output.",
  },
  {
    icon: Gamepad2,
    name: "DualSense Repair",
    description: "Fix DualSense controller drift, triggers, and buttons.",
  },
  {
    icon: Wifi,
    name: "WiFi/Bluetooth Repair",
    description: "Fix wireless connectivity issues.",
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
    question: "Can you fix PS5 overheating?",
    answer: "Yes! We clean dust buildup, replace thermal paste, and ensure proper cooling. This often resolves overheating and loud fan issues.",
  },
  {
    question: "Do you repair DualSense controller drift?",
    answer: "Yes, we repair analog stick drift and adaptive trigger issues on DualSense controllers, usually within an hour.",
  },
  {
    question: "Can you fix HDMI port issues on PS5?",
    answer: "Yes, HDMI port replacement is a common repair. We use quality ports for reliable video output.",
  },
  {
    question: "Do you upgrade PS5 storage?",
    answer: "Yes, we can install larger NVMe SSDs in your PS5 to expand game storage capacity.",
  },
  {
    question: "Can you fix disc drive problems?",
    answer: "Yes, we diagnose and repair disc drive issues including cleaning, roller replacement, and full drive replacements.",
  },
];

const PS5Repair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="PS5 Repair Winnipeg | PlayStation 5 Fix | Mobile Tech Lab"
      metaDescription="PS5 repair in Winnipeg. Overheating, HDMI port, disc drive, DualSense controller repair for PlayStation 5. Console repair specialists."
      deviceName="PS5"
      tagline="PlayStation 5 Repair Specialists in Winnipeg"
      heroDescription="PS5 overheating? HDMI not working? DualSense drifting? We repair all PlayStation 5 models and controllers. Get back in the game."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all PlayStation 5 models including disc and digital editions, plus DualSense controllers and PSVR2."
      faqs={FAQS}
    />
  );
};

export default PS5Repair;
