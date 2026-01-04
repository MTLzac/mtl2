import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  HardDrive, 
  Fan, 
  Plug, 
  Gamepad2, 
  Disc,
  Power,
  Award,
  Zap,
  Wrench,
  Shield
} from "lucide-react";
import heroImage from "@/assets/hero-xbox.png";

const SERVICES = [
  {
    icon: Fan,
    name: "Overheating Repair",
    description: "Clean and service cooling systems to fix Xbox overheating.",
  },
  {
    icon: Plug,
    name: "HDMI Port Repair",
    description: "Replace damaged HDMI ports—no signal issues fixed.",
  },
  {
    icon: Power,
    name: "No Power Issues",
    description: "Diagnose and repair Xbox power supply and boot problems.",
  },
  {
    icon: Disc,
    name: "Disc Drive Repair",
    description: "Fix disc reading issues and drive replacements.",
  },
  {
    icon: Gamepad2,
    name: "Controller Repair",
    description: "Fix Elite and standard controller drift, bumpers, and buttons.",
  },
  {
    icon: HardDrive,
    name: "Storage Upgrade",
    description: "Upgrade internal storage for more game capacity.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Award,
    title: "Xbox Specialists",
    description: "Winnipeg's Xbox Series X, Series S, and One repair experts.",
  },
  {
    icon: Gamepad2,
    title: "Elite Controller Pros",
    description: "Specialized in Xbox Elite controller repairs.",
  },
  {
    icon: Zap,
    title: "Console Repair Pros",
    description: "HDMI port micro-soldering and board-level repairs.",
  },
  {
    icon: Award,
    title: "Industry-Leading Warranties",
    description: "Lifetime warranty on screen repairs. 90-day warranty on battery replacements. Quality parts that meet OEM specifications.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "Xbox Series",
    models: ["Xbox Series X", "Xbox Series S"],
    description: "Current generation Xbox consoles.",
  },
  {
    title: "Xbox One",
    models: ["Xbox One X", "Xbox One S", "Xbox One S All-Digital", "Xbox One (Original)"],
    description: "Previous generation Xbox One family.",
  },
  {
    title: "Controllers",
    models: ["Xbox Wireless Controller (Series X|S)", "Xbox Elite Series 2", "Xbox Elite Controller", "Xbox One Controller"],
    description: "Standard and Elite controller repairs.",
  },
  {
    title: "Xbox 360",
    models: ["Xbox 360 E", "Xbox 360 S", "Xbox 360 (Original)"],
    description: "Legacy Xbox 360 repairs.",
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
    answer: "Yes! We clean dust buildup, replace thermal paste, and ensure proper airflow at our St. Vital and Garden City locations to resolve overheating issues.",
  },
  {
    question: "Do you repair Xbox controller drift?",
    answer: "Yes, we repair analog stick drift on all Xbox controllers including Elite controllers, usually within an hour.",
  },
  {
    question: "Can you fix Xbox HDMI port?",
    answer: "Yes, HDMI port replacement is a specialty—we use micro-soldering for reliable video output restoration on all Xbox consoles.",
  },
  {
    question: "Do you repair Xbox Elite controllers?",
    answer: "Yes, we service Elite controllers including stick drift, bumper issues, paddle problems, and trigger repairs.",
  },
  {
    question: "My Xbox won't turn on—can you fix it?",
    answer: "Yes, we diagnose and repair power issues including power supply replacement and board-level repairs for all Xbox models.",
  },
];

const XboxRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Xbox Repair Winnipeg | Series X & Controller Fix | Mobile Tech Lab"
      metaDescription="Xbox repair in Winnipeg. Overheating, HDMI port, disc drive, controller repair for Xbox Series X, Series S, One & 360. Console specialists."
      deviceName="Xbox"
      tagline="Xbox Repair Specialists in Winnipeg"
      heroDescription="Xbox not cooperating? Overheating, HDMI issues, no power, or controller drift—we repair all Xbox consoles in Winnipeg. Series X, Series S, One, and 360."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Xbox consoles including Series X, Series S, One, and 360, plus Elite and standard controllers."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
    />
  );
};

export default XboxRepair;
