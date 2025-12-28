import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Zap
} from "lucide-react";
import heroImage from "@/assets/hero-oppo.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace cracked AMOLED displays on Oppo and Realme devices.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore battery performance with a new Oppo battery.",
  },
  {
    icon: Zap,
    name: "SUPERVOOC Repair",
    description: "Fix SUPERVOOC and VOOC fast charging port issues.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Repair Hasselblad-partnered cameras on flagship Oppo devices.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Fix speakers, earpieces, and audio quality issues.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Repair USB-C ports for reliable charging and data transfer.",
  },
];

const MODELS = [
  // Oppo Find Series
  "Oppo Find X7 Ultra", "Oppo Find X7",
  "Oppo Find X6 Pro", "Oppo Find X6",
  "Oppo Find X5 Pro", "Oppo Find X5",
  "Oppo Find N3", "Oppo Find N2", "Oppo Find N2 Flip",
  // Oppo Reno Series
  "Oppo Reno 11 Pro", "Oppo Reno 11",
  "Oppo Reno 10 Pro+", "Oppo Reno 10 Pro", "Oppo Reno 10",
  "Oppo Reno 8 Pro", "Oppo Reno 8",
  // Oppo A Series
  "Oppo A98", "Oppo A78", "Oppo A58", "Oppo A38",
  "Oppo A17", "Oppo A16", "Oppo A15",
  // Realme (Oppo Sub-brand)
  "Realme GT 5 Pro", "Realme GT 3",
  "Realme 11 Pro+", "Realme 11 Pro", "Realme 11",
  "Realme 10 Pro+", "Realme 10 Pro",
  "Realme C55", "Realme C53",
];

const FAQS = [
  {
    question: "Do you repair Oppo phones in Winnipeg?",
    answer: "Yes! We service all Oppo and Realme devices, from budget A-series to flagship Find X models.",
  },
  {
    question: "Can you fix SUPERVOOC fast charging?",
    answer: "Yes, we diagnose and repair SUPERVOOC and VOOC charging issues including port repairs and internal component fixes.",
  },
  {
    question: "Do you repair Oppo foldable phones?",
    answer: "Yes, we service the Oppo Find N series including the Find N3 and N2 Flip foldables.",
  },
  {
    question: "Are Oppo parts available?",
    answer: "We can source parts for most Oppo and Realme models. Popular models have faster availability; some may take 2-3 days.",
  },
  {
    question: "Do you repair Realme phones?",
    answer: "Absolutely! Realme is part of the BBK family (along with Oppo and OnePlus), and we service all Realme models.",
  },
];

const OppoRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Oppo Repair Winnipeg | Find X & Reno Screen Fix | Mobile Tech Lab"
      metaDescription="Oppo repair in Winnipeg. Screen, battery, SUPERVOOC charging repair for Oppo Find X, Reno, A series & Realme devices. Growing market specialists."
      deviceName="Oppo"
      tagline="Oppo & Realme Repair Specialists in Winnipeg"
      heroDescription="From the flagship Find X series to the affordable A-series, we repair all Oppo devices. Plus Realme phones too! Fast SUPERVOOC charging issues, screen damage, and more."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Oppo and Realme devices including Find X flagships, Reno series, A-series, and foldables."
      faqs={FAQS}
    />
  );
};

export default OppoRepair;
