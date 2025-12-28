import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Cpu,
  Fingerprint
} from "lucide-react";
import heroImage from "@/assets/hero-huawei.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace damaged Huawei OLED and LCD screens with quality parts.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore battery performance with a new Huawei battery.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Fix USB-C charging and SuperCharge port issues.",
  },
  {
    icon: Camera,
    name: "Leica Camera Repair",
    description: "Repair Leica-engineered cameras on Huawei flagship devices.",
  },
  {
    icon: Cpu,
    name: "Motherboard Repair",
    description: "Component-level motherboard diagnostics and repair.",
  },
  {
    icon: Fingerprint,
    name: "Fingerprint Sensor",
    description: "Repair in-display and rear fingerprint sensors.",
  },
];

const MODELS = [
  // Huawei P Series
  "Huawei P60 Pro", "Huawei P60", "Huawei P60 Art",
  "Huawei P50 Pro", "Huawei P50", "Huawei P50 Pocket",
  "Huawei P40 Pro+", "Huawei P40 Pro", "Huawei P40", "Huawei P40 Lite",
  "Huawei P30 Pro", "Huawei P30", "Huawei P30 Lite",
  "Huawei P20 Pro", "Huawei P20", "Huawei P20 Lite",
  // Huawei Mate Series
  "Huawei Mate 60 Pro", "Huawei Mate 60",
  "Huawei Mate 50 Pro", "Huawei Mate 50",
  "Huawei Mate 40 Pro", "Huawei Mate 40",
  "Huawei Mate 30 Pro", "Huawei Mate 30",
  "Huawei Mate 20 Pro", "Huawei Mate 20", "Huawei Mate 20 X",
  // Huawei Nova Series
  "Huawei Nova 11 Pro", "Huawei Nova 11",
  "Huawei Nova 10 Pro", "Huawei Nova 10",
  "Huawei Nova 9", "Huawei Nova 8",
  // Honor (Former Huawei)
  "Honor Magic5 Pro", "Honor Magic4 Pro",
  "Honor 70", "Honor 50",
];

const FAQS = [
  {
    question: "Are Huawei parts hard to find in Canada?",
    answer: "Some Huawei parts can be challenging to source due to trade restrictions, but we maintain supplier relationships that allow us to obtain quality parts for most models.",
  },
  {
    question: "Can you repair Huawei phones without Google services?",
    answer: "Yes! We repair all Huawei hardware regardless of whether the device has Google Mobile Services or Huawei Mobile Services.",
  },
  {
    question: "Do you repair Honor phones?",
    answer: "Yes, we repair Honor devices which were formerly part of Huawei. This includes the latest Magic series and Honor numbered series.",
  },
  {
    question: "How long does Huawei repair take?",
    answer: "Repairs typically take 1-2 hours if parts are in stock. Some parts may need 2-3 days to source for less common models.",
  },
  {
    question: "Is it worth repairing my older Huawei phone?",
    answer: "We'll provide an honest assessment. Many Huawei phones are well-built and worth repairing, especially flagship P and Mate series devices.",
  },
];

const HuaweiRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Huawei Repair Winnipeg | P Series & Mate Screen Fix | Mobile Tech Lab"
      metaDescription="Expert Huawei repair in Winnipeg. Screen, battery, motherboard repair for Huawei P60, P50, Mate, Nova & Honor devices. Hard-to-find parts specialists."
      deviceName="Huawei"
      tagline="Hard-to-Find Huawei Parts Specialists"
      heroDescription="Don't let parts availability stop you from repairing your Huawei device. We specialize in sourcing components for Huawei P series, Mate, Nova, and Honor phones when others can't."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Huawei and Honor devices including P series, Mate series, Nova series, and foldable models."
      faqs={FAQS}
    />
  );
};

export default HuaweiRepair;
