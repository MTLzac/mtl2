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
    name: "Hard Drive Upgrade",
    description: "Upgrade to SSD or larger HDD for better performance.",
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
    description: "Fix DualShock 4 controller drift and button issues.",
  },
  {
    icon: Wifi,
    name: "WiFi/Bluetooth Repair",
    description: "Fix wireless connectivity issues.",
  },
];

const MODELS = [
  "PlayStation 4 Pro",
  "PlayStation 4 Slim",
  "PlayStation 4 (Original/Fat)",
  "DualShock 4 Controller (V1)",
  "DualShock 4 Controller (V2)",
  "PlayStation VR (Original)",
];

const FAQS = [
  {
    question: "Can you fix PS4 overheating?",
    answer: "Yes! We clean dust buildup, replace thermal paste, and ensure proper cooling. This often resolves overheating and loud fan issues.",
  },
  {
    question: "Do you repair DualShock 4 controller drift?",
    answer: "Yes, we repair analog stick drift on DualShock 4 controllers, usually within an hour.",
  },
  {
    question: "Can you fix HDMI port issues on PS4?",
    answer: "Yes, HDMI port replacement is a common repair. We use quality ports for reliable video output.",
  },
  {
    question: "Can you upgrade my PS4 hard drive?",
    answer: "Yes, we can upgrade your PS4 to an SSD for faster load times or a larger HDD for more storage.",
  },
  {
    question: "Can you fix disc drive problems?",
    answer: "Yes, we diagnose and repair disc drive issues including cleaning, roller replacement, and full drive replacements.",
  },
];

const PS4Repair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="PS4 Repair Winnipeg | PlayStation 4 Fix | Mobile Tech Lab"
      metaDescription="PS4 repair in Winnipeg. Overheating, HDMI port, disc drive, controller repair for PlayStation 4 Pro, Slim & Original. Console repair specialists."
      deviceName="PS4"
      tagline="PlayStation 4 Repair Specialists in Winnipeg"
      heroDescription="PS4 overheating? HDMI not working? Controller drifting? We repair all PlayStation 4 models and DualShock 4 controllers."
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all PlayStation 4 models including PS4 Pro, PS4 Slim, and the original PS4."
      faqs={FAQS}
    />
  );
};

export default PS4Repair;
