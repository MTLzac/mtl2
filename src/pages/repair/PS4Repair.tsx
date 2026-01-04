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
import heroImage from "@/assets/hero-ps4.png";

const SERVICES = [
  {
    icon: Fan,
    name: "Overheating Repair",
    description: "Clean dust, replace thermal paste, fix PS4 overheating and loud fans.",
  },
  {
    icon: Plug,
    name: "HDMI Port Repair",
    description: "Replace damaged HDMI ports—no signal issues fixed.",
  },
  {
    icon: Power,
    name: "No Power Issues",
    description: "Diagnose and repair PS4 power supply and boot problems.",
  },
  {
    icon: Disc,
    name: "Disc Drive Repair",
    description: "Fix disc reading issues, ejecting problems, and drive replacements.",
  },
  {
    icon: Gamepad2,
    name: "Controller Repair",
    description: "Fix DualShock 4 controller drift, buttons, and triggers.",
  },
  {
    icon: HardDrive,
    name: "Hard Drive Upgrade",
    description: "Upgrade to SSD or larger HDD for better performance and storage.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Award,
    title: "PlayStation Specialists",
    description: "Winnipeg's PS4 Pro, Slim, and Original repair experts.",
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
    icon: Award,
    title: "Industry-Leading Warranties",
    description: "Lifetime warranty on screen repairs. 90-day warranty on battery replacements. Quality parts that meet OEM specifications.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "PS4 Consoles",
    models: ["PlayStation 4 Pro", "PlayStation 4 Slim", "PlayStation 4 (Original/Fat)"],
    description: "All PlayStation 4 console generations.",
  },
  {
    title: "Controllers",
    models: ["DualShock 4 Controller (V1)", "DualShock 4 Controller (V2)"],
    description: "Stick drift and button repairs.",
  },
  {
    title: "Accessories",
    models: ["PlayStation VR (Original)", "PlayStation Camera"],
    description: "VR and accessory repairs.",
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
    question: "Can you fix PS4 overheating in Winnipeg?",
    answer: "Yes! We clean dust buildup, replace thermal paste, and ensure proper cooling at our St. Vital and Garden City locations. This resolves overheating and loud fan issues.",
  },
  {
    question: "Do you repair DualShock 4 controller drift?",
    answer: "Yes, we repair analog stick drift on DualShock 4 controllers, usually within an hour.",
  },
  {
    question: "Can you fix HDMI port issues on PS4?",
    answer: "Yes, HDMI port replacement is a specialty—we use micro-soldering for reliable video output restoration.",
  },
  {
    question: "My PS4 won't turn on—can you fix it?",
    answer: "Yes, we diagnose and repair power issues including power supply replacement and board-level repairs.",
  },
  {
    question: "Can you upgrade my PS4 hard drive?",
    answer: "Yes, we upgrade PS4 to SSD for dramatically faster load times or larger HDD for more storage.",
  },
];

const PS4Repair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="PS4 Repair Winnipeg | PlayStation 4 Fix | Mobile Tech Lab"
      metaDescription="PS4 repair in Winnipeg. Overheating, HDMI port, disc drive, controller repair for PlayStation 4 Pro, Slim & Original. Console repair specialists."
      deviceName="PS4"
      tagline="PlayStation 4 Repair Specialists in Winnipeg"
      heroDescription="PS4 overheating? HDMI not working? No power? We're Winnipeg's PlayStation 4 repair specialists. PS4 Pro, Slim, and Original consoles plus DualShock 4 controllers."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all PlayStation 4 models including PS4 Pro, PS4 Slim, and the original PS4."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
    />
  );
};

export default PS4Repair;
