import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Fingerprint
} from "lucide-react";
import heroImage from "@/assets/hero-ipad.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Fix cracked or damaged iPad displays with quality LCD or Retina replacements.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore your iPad's all-day battery life with professional replacement.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Repair Lightning or USB-C ports that won't charge or connect properly.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Fix front and rear cameras for FaceTime calls and photography.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Restore crystal-clear audio for media, calls, and productivity.",
  },
  {
    icon: Fingerprint,
    name: "Button & Sensor Repair",
    description: "Fix Home buttons, power buttons, and Touch ID/Face ID sensors.",
  },
];

const MODELS = [
  // iPad Pro (Latest)
  "iPad Pro 13-inch (M4)", "iPad Pro 11-inch (M4)",
  "iPad Pro 12.9-inch (6th gen)", "iPad Pro 11-inch (4th gen)",
  "iPad Pro 12.9-inch (5th gen)", "iPad Pro 11-inch (3rd gen)",
  "iPad Pro 12.9-inch (4th gen)", "iPad Pro 11-inch (2nd gen)",
  "iPad Pro 12.9-inch (3rd gen)", "iPad Pro 11-inch (1st gen)",
  // iPad Air
  "iPad Air 13-inch (M2)", "iPad Air 11-inch (M2)",
  "iPad Air (5th gen)", "iPad Air (4th gen)",
  "iPad Air (3rd gen)", "iPad Air 2", "iPad Air (1st gen)",
  // iPad (Standard)
  "iPad (10th gen)", "iPad (9th gen)", "iPad (8th gen)",
  "iPad (7th gen)", "iPad (6th gen)", "iPad (5th gen)",
  // iPad mini
  "iPad mini (6th gen)", "iPad mini (5th gen)",
  "iPad mini 4", "iPad mini 3", "iPad mini 2",
];

const FAQS = [
  {
    question: "How long does an iPad screen repair take?",
    answer: "Most iPad screen repairs are completed within 2-4 hours depending on the model. iPad Pro models may require additional time due to their larger displays.",
  },
  {
    question: "Can you fix water-damaged iPads?",
    answer: "Yes, we offer water damage assessment and repair for iPad devices. Success rates vary depending on the extent of damage.",
  },
  {
    question: "Do you repair Apple Pencil functionality?",
    answer: "Yes, we can diagnose and repair Apple Pencil connectivity issues, including digitizer repairs for Apple Pencil-compatible iPads.",
  },
  {
    question: "Will my iPad data be safe during repair?",
    answer: "We prioritize data safety and don't access your personal files. However, we always recommend backing up to iCloud before any repair.",
  },
  {
    question: "How much does iPad repair cost in Winnipeg?",
    answer: "Costs vary by model and repair type. Contact us for a free quote specific to your iPad device and issue.",
  },
];

const iPadRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="iPad Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab"
      metaDescription="Professional iPad repair in Winnipeg. Screen replacement, battery, charging port repair for iPad Pro, iPad Air, iPad mini & all models. Same-day service available."
      deviceName="iPad"
      tagline="Expert iPad Repair in Winnipeg"
      heroDescription="From the powerful iPad Pro to everyday iPad models, we provide expert repairs for Apple's entire tablet lineup. Cracked screens, battery issues, charging problems – we handle it all."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We service all iPad generations including the latest iPad Pro M4 and iPad Air M2 models."
      faqs={FAQS}
    />
  );
};

export default iPadRepair;
