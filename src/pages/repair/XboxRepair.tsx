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
    description: "Clean and service cooling systems to fix overheating.",
  },
  {
    icon: HardDrive,
    name: "Storage Upgrade",
    description: "Upgrade internal storage for more game capacity.",
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
    description: "Fix Elite and standard controller drift and buttons.",
  },
  {
    icon: Wifi,
    name: "WiFi/Bluetooth Repair",
    description: "Fix wireless connectivity issues.",
  },
];

const MODELS = [
  // Xbox Series
  "Xbox Series X", "Xbox Series S",
  // Xbox One
  "Xbox One X", "Xbox One S", "Xbox One S All-Digital", "Xbox One (Original)",
  // Xbox 360
  "Xbox 360 E", "Xbox 360 S", "Xbox 360 (Original)",
  // Controllers
  "Xbox Wireless Controller (Series X|S)",
  "Xbox Elite Wireless Controller Series 2",
  "Xbox Elite Wireless Controller",
  "Xbox One Controller",
];

const FAQS = [
  {
    question: "Can you fix Xbox Series X overheating?",
    answer: "Yes! We clean dust buildup, replace thermal paste, and ensure proper airflow to resolve overheating issues.",
  },
  {
    question: "Do you repair Xbox controller drift?",
    answer: "Yes, we repair analog stick drift on all Xbox controllers including Elite controllers, usually within an hour.",
  },
  {
    question: "Can you fix Xbox HDMI port?",
    answer: "Yes, HDMI port replacement is a common repair for Xbox consoles. We ensure reliable video output.",
  },
  {
    question: "Do you repair Xbox Elite controllers?",
    answer: "Yes, we service Elite controllers including stick drift, bumper issues, and paddle problems.",
  },
  {
    question: "Can you fix disc drive issues?",
    answer: "Yes, we diagnose and repair disc drive problems including cleaning and full drive replacements.",
  },
];

const XboxRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Xbox Repair Winnipeg | Series X & Controller Fix | Mobile Tech Lab"
      metaDescription="Xbox repair in Winnipeg. Overheating, HDMI port, disc drive, controller repair for Xbox Series X, Series S, One & 360. Console specialists."
      deviceName="Xbox"
      tagline="Xbox Repair Specialists in Winnipeg"
      heroDescription="Xbox not cooperating? Whether it's overheating, HDMI issues, or controller drift, we repair all Xbox consoles and controllers."
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Xbox consoles including Series X, Series S, One, and 360, plus Elite and standard controllers."
      faqs={FAQS}
    />
  );
};

export default XboxRepair;
