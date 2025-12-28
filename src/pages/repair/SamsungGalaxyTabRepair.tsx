import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Fingerprint
} from "lucide-react";
import heroImage from "@/assets/hero-samsung-galaxy-tab.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Fix cracked or damaged Galaxy Tab displays with quality LCD/AMOLED replacements.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore your tablet's all-day battery life with professional replacement.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Repair USB-C ports that won't charge or connect properly.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Fix front and rear cameras for video calls and photography.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Restore crystal-clear audio for media, calls, and productivity.",
  },
  {
    icon: Fingerprint,
    name: "Button & Sensor Repair",
    description: "Fix power buttons, volume keys, and fingerprint sensors.",
  },
];

const MODELS = [
  // Galaxy Tab S Series (Flagship)
  "Galaxy Tab S10 Ultra", "Galaxy Tab S10+", "Galaxy Tab S10",
  "Galaxy Tab S9 Ultra", "Galaxy Tab S9+", "Galaxy Tab S9", "Galaxy Tab S9 FE+", "Galaxy Tab S9 FE",
  "Galaxy Tab S8 Ultra", "Galaxy Tab S8+", "Galaxy Tab S8",
  "Galaxy Tab S7 FE", "Galaxy Tab S7+", "Galaxy Tab S7",
  "Galaxy Tab S6 Lite", "Galaxy Tab S6",
  // Galaxy Tab A Series (Mid-Range)
  "Galaxy Tab A9+", "Galaxy Tab A9",
  "Galaxy Tab A8",
  "Galaxy Tab A7 Lite", "Galaxy Tab A7",
  // Galaxy Tab Active Series (Rugged)
  "Galaxy Tab Active5", "Galaxy Tab Active4 Pro", "Galaxy Tab Active3",
  // Older Models
  "Galaxy Tab S5e", "Galaxy Tab S4", "Galaxy Tab S3",
  "Galaxy Tab A 10.1", "Galaxy Tab A 8.0",
];

const FAQS = [
  {
    question: "How long does a Galaxy Tab screen repair take?",
    answer: "Most Galaxy Tab screen repairs are completed within 2-4 hours depending on the model. Tab S Ultra models may require additional time due to their large displays.",
  },
  {
    question: "Can you fix water-damaged Galaxy Tabs?",
    answer: "Yes, we offer water damage assessment and repair for Galaxy Tab devices. Success rates vary depending on the extent of damage.",
  },
  {
    question: "Do you repair Galaxy Tab S Pen functionality?",
    answer: "Yes, we can diagnose and repair S Pen connectivity issues, including digitizer repairs for S Pen-compatible tablets.",
  },
  {
    question: "Will my tablet data be safe during repair?",
    answer: "We prioritize data safety and don't access your personal files. However, we always recommend backing up before any repair.",
  },
  {
    question: "How much does Galaxy Tab repair cost in Winnipeg?",
    answer: "Costs vary by model and repair type. Contact us for a free quote specific to your Galaxy Tab device and issue.",
  },
];

const SamsungGalaxyTabRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Samsung Galaxy Tab Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab"
      metaDescription="Professional Samsung Galaxy Tab repair in Winnipeg. Screen replacement, battery, charging port repair for Tab S10, S9, S8, A9, Active & all models. Same-day service available."
      deviceName="Samsung Galaxy Tab"
      tagline="Expert Tablet Repair in Winnipeg"
      heroDescription="From the powerful Galaxy Tab S10 Ultra to everyday Tab A devices, we provide expert repairs for Samsung's entire tablet lineup. Cracked screens, battery issues, charging problems – we handle it all."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We service all Samsung Galaxy Tab generations including the latest Tab S10 series and rugged Active models."
      faqs={FAQS}
    />
  );
};

export default SamsungGalaxyTabRepair;
