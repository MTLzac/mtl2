import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Fingerprint
} from "lucide-react";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace AMOLED displays on Vivo devices.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore battery life with FlashCharge compatibility.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Fix FlashCharge and USB-C port issues.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Repair ZEISS-partnered cameras on flagship Vivo devices.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Fix speakers and audio quality issues.",
  },
  {
    icon: Fingerprint,
    name: "Fingerprint Sensor",
    description: "Repair in-display fingerprint sensors.",
  },
];

const MODELS = [
  // Vivo X Series (Flagship)
  "Vivo X100 Pro", "Vivo X100",
  "Vivo X90 Pro+", "Vivo X90 Pro", "Vivo X90",
  "Vivo X80 Pro", "Vivo X80",
  // Vivo X Fold Series
  "Vivo X Fold 3 Pro", "Vivo X Fold 3",
  "Vivo X Fold 2", "Vivo X Flip",
  // Vivo V Series
  "Vivo V30 Pro", "Vivo V30", "Vivo V29 Pro", "Vivo V29",
  // Vivo Y Series
  "Vivo Y100", "Vivo Y78", "Vivo Y56", "Vivo Y36",
  // iQOO (Vivo Gaming Sub-brand)
  "iQOO 12 Pro", "iQOO 12", "iQOO 11", "iQOO Neo 9",
];

const FAQS = [
  {
    question: "Do you repair Vivo phones in Winnipeg?",
    answer: "Yes! We service all Vivo devices including X series flagships, V series, and iQOO gaming phones.",
  },
  {
    question: "Can you fix FlashCharge issues?",
    answer: "Yes, we diagnose and repair FlashCharge fast charging issues including port repairs.",
  },
  {
    question: "Do you repair Vivo foldable phones?",
    answer: "Yes, we service the Vivo X Fold and X Flip foldable devices.",
  },
  {
    question: "Are Vivo parts available?",
    answer: "We can source parts for most Vivo models. Popular models have faster availability; some may take 2-4 days.",
  },
  {
    question: "Do you repair iQOO gaming phones?",
    answer: "Absolutely! iQOO is Vivo's gaming sub-brand, and we service all iQOO models.",
  },
];

const VivoRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Vivo Repair Winnipeg | X Series & iQOO Fix | Mobile Tech Lab"
      metaDescription="Vivo phone repair in Winnipeg. Screen, battery, camera repair for Vivo X100, V30, Y series & iQOO gaming phones. Growing brand specialists."
      deviceName="Vivo"
      tagline="Vivo & iQOO Repair in Winnipeg"
      heroDescription="From the ZEISS-equipped X series flagships to iQOO gaming phones, we repair all Vivo devices. Expert service for this fast-growing brand."
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Vivo phones including X series, V series, Y series, X Fold foldables, and iQOO gaming devices."
      faqs={FAQS}
    />
  );
};

export default VivoRepair;
