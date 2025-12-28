import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Keyboard, 
  HardDrive,
  Wifi
} from "lucide-react";
import heroImage from "@/assets/hero-blackberry.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace cracked or damaged Blackberry screens.",
  },
  {
    icon: Keyboard,
    name: "Keyboard Repair",
    description: "Fix physical QWERTY keyboard issues on classic Blackberry devices.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Replace aging batteries to restore device life.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Fix micro USB and USB-C charging ports.",
  },
  {
    icon: HardDrive,
    name: "Data Recovery",
    description: "Recover important data from damaged Blackberry devices.",
  },
  {
    icon: Wifi,
    name: "Connectivity Repair",
    description: "Fix WiFi, Bluetooth, and cellular connectivity issues.",
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
    question: "Can you still repair Blackberry phones?",
    answer: "Yes! While Blackberry stopped making phones in 2022, we continue to service and repair all Blackberry models with our legacy parts inventory.",
  },
  {
    question: "Are Blackberry parts still available?",
    answer: "We've stockpiled common Blackberry parts and maintain supplier relationships for legacy components. Availability varies by model.",
  },
  {
    question: "Can you repair Blackberry keyboards?",
    answer: "Yes! We specialize in physical QWERTY keyboard repairs for KEY2, KEYone, Classic, and other keyboard-equipped models.",
  },
  {
    question: "Is it worth repairing my old Blackberry?",
    answer: "If you rely on your Blackberry for work or prefer the physical keyboard, repair is often worthwhile. We'll give you an honest assessment.",
  },
  {
    question: "Can you recover data from a dead Blackberry?",
    answer: "In many cases, yes. We offer data recovery services to retrieve contacts, messages, and files from damaged Blackberry devices.",
  },
];

const BlackberryRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Blackberry Repair Winnipeg | KEY2 & Classic Fix | Mobile Tech Lab"
      metaDescription="Blackberry repair specialists in Winnipeg. Screen, keyboard, battery repair for KEY2, KEYone, Classic, Passport & all legacy models. We keep discontinued devices running!"
      deviceName="Blackberry"
      tagline="Legacy Blackberry Support in Winnipeg"
      heroDescription="Still using a Blackberry? We've got you covered. As Blackberry repair specialists, we maintain parts and expertise for all models – from the KEY2 to classic Bold and Curve devices."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We service all Blackberry models including Android devices (KEY2, KEYone, Priv) and classic Blackberry OS devices."
      faqs={FAQS}
    />
  );
};

export default BlackberryRepair;
