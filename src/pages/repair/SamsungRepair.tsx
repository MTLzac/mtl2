import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  Smartphone, 
  Battery, 
  Plug, 
  Droplets, 
  Camera, 
  Volume2,
  ScreenShare
} from "lucide-react";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Cracked, shattered, or unresponsive Samsung screens replaced with quality parts.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore full-day battery life with a new Samsung battery replacement.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Fix loose or non-working charging ports for reliable power connection.",
  },
  {
    icon: Droplets,
    name: "Water Damage Repair",
    description: "Professional water damage assessment and component-level repair.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Fix blurry, cracked, or non-functional front and rear cameras.",
  },
  {
    icon: Volume2,
    name: "Speaker & Mic Repair",
    description: "Restore clear audio for calls, music, and speakerphone functionality.",
  },
];

const MODELS = [
  // Galaxy S Series
  "Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24",
  "Galaxy S23 Ultra", "Galaxy S23+", "Galaxy S23", "Galaxy S23 FE",
  "Galaxy S22 Ultra", "Galaxy S22+", "Galaxy S22",
  "Galaxy S21 Ultra", "Galaxy S21+", "Galaxy S21", "Galaxy S21 FE",
  "Galaxy S20 Ultra", "Galaxy S20+", "Galaxy S20", "Galaxy S20 FE",
  "Galaxy S10+", "Galaxy S10", "Galaxy S10e",
  // Galaxy Z Series
  "Galaxy Z Fold 5", "Galaxy Z Fold 4", "Galaxy Z Fold 3",
  "Galaxy Z Flip 5", "Galaxy Z Flip 4", "Galaxy Z Flip 3",
  // Galaxy A Series
  "Galaxy A54", "Galaxy A53", "Galaxy A52", "Galaxy A51",
  "Galaxy A34", "Galaxy A33", "Galaxy A32",
  "Galaxy A14", "Galaxy A13", "Galaxy A12",
  // Galaxy Note Series
  "Galaxy Note 20 Ultra", "Galaxy Note 20", "Galaxy Note 10+", "Galaxy Note 10",
];

const FAQS = [
  {
    question: "How long does a Samsung screen replacement take?",
    answer: "Most Samsung screen replacements are completed within 1-2 hours. Complex repairs like the Galaxy Z Fold series may take longer due to their unique folding mechanism.",
  },
  {
    question: "Do you use genuine Samsung parts?",
    answer: "We use high-quality replacement parts that meet or exceed OEM specifications. We can discuss part options with you before beginning any repair.",
  },
  {
    question: "Is my Samsung warranty affected by your repairs?",
    answer: "Third-party repairs may void manufacturer warranties. However, we provide our own warranty on all repairs for your peace of mind.",
  },
  {
    question: "Can you fix my Samsung Galaxy Z Fold or Z Flip?",
    answer: "Yes! We specialize in repairing Samsung's foldable devices including screen replacements, hinge repairs, and internal component fixes.",
  },
  {
    question: "How much does Samsung repair cost in Winnipeg?",
    answer: "Repair costs vary by model and issue. Use our free quote tool or call us for an accurate estimate for your specific Samsung device.",
  },
];

const SamsungRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Samsung Repair Winnipeg | Galaxy Screen & Battery Fix | Mobile Tech Lab"
      metaDescription="Expert Samsung Galaxy repair in Winnipeg. Screen replacement, battery, charging port, water damage repair for all Galaxy S, Z Fold, Z Flip, A series & Note models. Fast same-day service."
      deviceName="Samsung"
      tagline="Expert Samsung Galaxy Repair in Winnipeg"
      heroDescription="From the latest Galaxy S24 Ultra to classic Note models, we fix all Samsung devices. Cracked screens, dead batteries, water damage – we've got you covered with fast, reliable repairs."
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Samsung Galaxy models including the S series, Z Fold, Z Flip, A series, and Note series. Don't see your model? Contact us!"
      faqs={FAQS}
    />
  );
};

export default SamsungRepair;
