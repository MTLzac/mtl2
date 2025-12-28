import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  HardDrive, 
  Fan, 
  Plug, 
  Gamepad2, 
  Disc,
  Wifi
} from "lucide-react";

const SERVICES = [
  {
    icon: Fan,
    name: "Overheating Repair",
    description: "Clean and replace thermal paste to fix overheating issues.",
  },
  {
    icon: HardDrive,
    name: "Storage Upgrade",
    description: "Upgrade to larger SSD storage for more games.",
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
    name: "Controller Repair",
    description: "Fix DualSense and DualShock controller drift and buttons.",
  },
  {
    icon: Wifi,
    name: "WiFi/Bluetooth Repair",
    description: "Fix wireless connectivity issues.",
  },
];

const MODELS = [
  // PlayStation 5
  "PlayStation 5 (Disc Edition)", "PlayStation 5 Digital Edition",
  "PlayStation 5 Slim (Disc)", "PlayStation 5 Slim Digital",
  // PlayStation 4
  "PlayStation 4 Pro", "PlayStation 4 Slim", "PlayStation 4 (Original)",
  // PlayStation 3
  "PlayStation 3 Super Slim", "PlayStation 3 Slim", "PlayStation 3 (Original)",
  // Controllers
  "DualSense Controller (PS5)", "DualSense Edge Controller",
  "DualShock 4 Controller (PS4)", "DualShock 3 Controller (PS3)",
  // PlayStation VR
  "PlayStation VR2", "PlayStation VR",
];

const FAQS = [
  {
    question: "Can you fix PS5 overheating?",
    answer: "Yes! We clean dust buildup, replace thermal paste, and ensure proper cooling. This often resolves overheating and loud fan issues.",
  },
  {
    question: "Do you repair DualSense controller drift?",
    answer: "Yes, we repair analog stick drift on DualSense and DualShock controllers, usually within an hour.",
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

const PlayStationRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="PlayStation Repair Winnipeg | PS5 & PS4 Fix | Mobile Tech Lab"
      metaDescription="PlayStation repair in Winnipeg. Overheating, HDMI port, disc drive, controller repair for PS5, PS4 & PS3. Console repair specialists."
      deviceName="PlayStation"
      tagline="PlayStation Repair Specialists in Winnipeg"
      heroDescription="PS5 overheating? HDMI not working? Controller drifting? We repair all PlayStation consoles and controllers. Get back in the game."
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all PlayStation consoles including PS5, PS4, PS3, and all DualSense/DualShock controllers."
      faqs={FAQS}
    />
  );
};

export default PlayStationRepair;
