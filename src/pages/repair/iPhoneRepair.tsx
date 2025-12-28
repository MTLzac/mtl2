import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Droplets
} from "lucide-react";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace cracked iPhone screens with quality displays.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore battery health and eliminate unexpected shutdowns.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Fix Lightning or USB-C charging port issues.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Repair front and rear cameras, including Face ID components.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Fix speakers, earpieces, and microphone issues.",
  },
  {
    icon: Droplets,
    name: "Water Damage Repair",
    description: "Professional water damage assessment and recovery.",
  },
];

const MODELS = [
  // iPhone 16 Series
  "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16",
  // iPhone 15 Series
  "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15",
  // iPhone 14 Series
  "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14",
  // iPhone 13 Series
  "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13 mini", "iPhone 13",
  // iPhone 12 Series
  "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12 mini", "iPhone 12",
  // iPhone 11 Series
  "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11",
  // iPhone SE & Older
  "iPhone SE (3rd gen)", "iPhone SE (2nd gen)",
  "iPhone XS Max", "iPhone XS", "iPhone XR",
  "iPhone X", "iPhone 8 Plus", "iPhone 8",
];

const FAQS = [
  {
    question: "Do you use genuine Apple parts?",
    answer: "We use high-quality OEM-compatible parts that meet or exceed Apple specifications. We can discuss part options during your quote.",
  },
  {
    question: "Will my warranty be affected?",
    answer: "Third-party repairs may affect your Apple warranty. If your device is still under AppleCare+, we recommend using Apple's service first.",
  },
  {
    question: "Can you fix Face ID issues?",
    answer: "Yes, we can diagnose and repair many Face ID issues. Some require specialized parts that may take extra time to source.",
  },
  {
    question: "How long does iPhone screen repair take?",
    answer: "Most iPhone screen replacements are completed within 1-2 hours if parts are in stock.",
  },
  {
    question: "Do you repair water-damaged iPhones?",
    answer: "Yes, we offer water damage assessment and repair. Success rates vary depending on the extent of damage and how quickly you bring it in.",
  },
];

const iPhoneRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="iPhone Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab"
      metaDescription="iPhone repair in Winnipeg. Screen, battery, charging port repair for iPhone 16, 15, 14, 13, 12, SE & older models. Fast, reliable service."
      deviceName="iPhone"
      tagline="Expert iPhone Repair in Winnipeg"
      heroDescription="Cracked screen? Dead battery? We fix all iPhone models from the latest iPhone 16 to older classics. Quality repairs at competitive prices."
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all iPhone models from the latest iPhone 16 series to older devices like iPhone 8."
      faqs={FAQS}
    />
  );
};

export default iPhoneRepair;
