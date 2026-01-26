import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Keyboard, 
  HardDrive,
  Wifi,
  Award,
  Package,
  Shield,
  Wrench
} from "lucide-react";
import heroImage from "@/assets/hero-blackberry.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "LCD and touchscreen replacements for KEY2, KEYone, Passport, and all Blackberry models. Restore display clarity.",
  },
  {
    icon: Keyboard,
    name: "Keyboard Repair",
    description: "Physical QWERTY keyboard repairs for KEY2, KEYone, Classic, Passport, and Bold series. Fix stuck or unresponsive keys.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore full-day battery life to your Blackberry. Same-day replacement for most models.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Micro USB and USB-C charging port diagnosis and repair for all Blackberry devices.",
  },
  {
    icon: HardDrive,
    name: "Data Recovery",
    description: "Recover contacts, messages, and files from damaged or non-booting Blackberry devices.",
  },
  {
    icon: Wifi,
    name: "Connectivity Repair",
    description: "WiFi, Bluetooth, and cellular connectivity diagnosis and repair for all models.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Award,
    title: "Blackberry Specialists",
    description: "We continue to support Blackberry devices long after others have stopped. Your Blackberry deserves expert care.",
  },
  {
    icon: Package,
    title: "Legacy Parts Stockpiled",
    description: "We've stockpiled Blackberry parts and maintain supplier relationships. Most models still serviceable.",
  },
  {
    icon: Wrench,
    title: "QWERTY Keyboard Experts",
    description: "Specialized in physical keyboard repairs for KEY2, KEYone, Classic, Passport, and Bold series.",
  },
  {
    icon: Award,
    title: "Industry-Leading Warranties",
    description: "Lifetime warranty on screen repairs. 90-day warranty on battery replacements. Quality parts that meet OEM specifications.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "Android Blackberry",
    models: ["KEY2", "KEY2 LE", "KEYone", "Motion", "DTEK60", "DTEK50", "Priv"],
    description: "Modern Android-powered Blackberry devices. Screen, keyboard, and battery repairs.",
  },
  {
    title: "Blackberry Classic & Passport",
    models: ["Classic", "Passport", "Passport Silver Edition"],
    description: "Iconic QWERTY devices. Keyboard, screen, and trackpad repairs.",
  },
  {
    title: "Blackberry Bold & Curve",
    models: ["Bold 9900", "Bold 9930", "Bold 9790", "Curve 9360", "Curve 9320", "Curve 9310"],
    description: "Classic Bold and Curve series. Legacy repairs and data recovery.",
  },
  {
    title: "Blackberry Z & Torch",
    models: ["Z30", "Z10", "Torch 9810", "Torch 9800", "Q10", "Q5"],
    description: "Touchscreen and slider models. Screen and component repairs.",
  },
];

const MODELS = [
  // Android Blackberry
  "Blackberry KEY2", "Blackberry KEY2 LE",
  "Blackberry KEYone",
  "Blackberry Motion",
  "Blackberry DTEK60", "Blackberry DTEK50",
  "Blackberry Priv",
  // Classic Blackberry OS
  "Blackberry Classic", "Blackberry Passport",
  "Blackberry Q10", "Blackberry Q5",
  "Blackberry Z30", "Blackberry Z10",
  "Blackberry Bold 9900", "Blackberry Bold 9930",
  "Blackberry Curve 9360", "Blackberry Curve 9320",
  // Enterprise Models
  "Blackberry Torch 9810", "Blackberry Torch 9800",
];

const FAQS = [
  {
    question: "Do you repair Blackberry phones in Winnipeg?",
    answer: "Yes! We're one of the few repair shops in Winnipeg still specializing in Blackberry devices. No need to ship your phone elsewhere.",
  },
  {
    question: "Are Blackberry parts still available in Winnipeg?",
    answer: "We've stockpiled common Blackberry parts and maintain supplier relationships for legacy components. Most models still serviceable.",
  },
  {
    question: "Can you repair Blackberry QWERTY keyboards?",
    answer: "Yes! We specialize in physical QWERTY keyboard repairs for KEY2, KEYone, Classic, Passport, and Bold series at our Winnipeg locations.",
  },
  {
    question: "How long does Blackberry repair take in Winnipeg?",
    answer: "Most Blackberry repairs are completed same-day at our Winnipeg locations, typically within 1-2 hours once parts are available.",
  },
  {
    question: "Can you recover data from a dead Blackberry?",
    answer: "In many cases, yes. We offer data recovery services to retrieve contacts, messages, and files from damaged Blackberry devices.",
  },
];

const SERVICE_AREA_NOTE = "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online.";

const BlackberryRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Blackberry Phone Repair Winnipeg | KEY2 & Classic Fix | Mobile Tech Lab"
      metaDescription="Blackberry repair specialists in Winnipeg. Screen, keyboard, battery repair for KEY2, KEYone, Classic, Passport & all legacy models. We keep discontinued devices running!"
      canonicalUrl="https://mobiletechlab.ca/repair/blackberry"
      slug="blackberry"
      deviceName="Blackberry"
      tagline="Blackberry Phone Repair in Winnipeg, MB"
      heroDescription="Still using a Blackberry? We've got you covered in Winnipeg. As Blackberry repair specialists, we maintain parts and expertise for all models – from the KEY2 to classic Bold and Curve devices."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We service all Blackberry models including Android devices (KEY2, KEYone, Priv) and classic Blackberry OS devices. As Winnipeg's Blackberry specialists, we keep discontinued devices running."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote={SERVICE_AREA_NOTE}
    />
  );
};

export default BlackberryRepair;
