import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Fingerprint,
  Award,
  TrendingUp,
  Gamepad2,
  Shield
} from "lucide-react";
import heroImage from "@/assets/hero-vivo.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace AMOLED displays on Vivo X100, V30, and all Vivo devices in Winnipeg.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore battery life with FlashCharge compatibility—up to 120W charging preserved.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Fix FlashCharge and USB-C port issues for reliable fast charging.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Repair ZEISS-partnered cameras on flagship Vivo X series devices.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Fix Hi-Res Audio certified speakers and audio quality issues.",
  },
  {
    icon: Fingerprint,
    name: "Fingerprint Sensor",
    description: "Repair in-display fingerprint sensors on Vivo devices.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Award,
    title: "Vivo & iQOO Specialists",
    description: "Winnipeg's experts in Vivo phones and iQOO gaming devices.",
  },
  {
    icon: TrendingUp,
    title: "Growing Brand Specialists",
    description: "Early adopters supporting Vivo's expansion in Canada.",
  },
  {
    icon: Gamepad2,
    title: "iQOO Gaming Experts",
    description: "Specialized in iQOO gaming phone repairs and cooling systems.",
  },
  {
    icon: Award,
    title: "Industry-Leading Warranties",
    description: "Lifetime warranty on screen repairs. 90-day warranty on battery replacements. Quality parts that meet OEM specifications.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "X Series Flagships",
    models: ["X100 Pro", "X100", "X90 Pro+", "X90 Pro", "X90", "X80 Pro", "X80"],
    description: "Premium X series with ZEISS camera partnership.",
  },
  {
    title: "V Series",
    models: ["V30 Pro", "V30", "V29 Pro", "V29"],
    description: "Portrait-focused V series repairs.",
  },
  {
    title: "Y Series",
    models: ["Y100", "Y78", "Y56", "Y36"],
    description: "Budget-friendly Y series repairs.",
  },
  {
    title: "iQOO Gaming",
    models: ["iQOO 12 Pro", "iQOO 12", "iQOO 11", "iQOO Neo 9"],
    description: "High-performance gaming phone repairs.",
  },
  {
    title: "Foldables",
    models: ["X Fold 3 Pro", "X Fold 3", "X Fold 2", "X Flip"],
    description: "Foldable screen and hinge repairs.",
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
    answer: "Yes! We're Winnipeg's Vivo and iQOO specialists. We service all devices from the flagship X100 Pro to budget Y series at our St. Vital and Garden City locations.",
  },
  {
    question: "Can you fix FlashCharge fast charging issues?",
    answer: "Absolutely! We diagnose and repair FlashCharge issues from 44W to 120W. We fix charging ports, cables, and internal components to restore fast charging.",
  },
  {
    question: "Do you repair Vivo foldable phones?",
    answer: "Yes, we service the Vivo X Fold and X Flip foldable devices. Specialized hinge and flexible display repairs available.",
  },
  {
    question: "Are Vivo parts available in Winnipeg?",
    answer: "We can source parts for most Vivo models. Popular X and V series parts are often available quickly; less common models may take 2-4 business days.",
  },
  {
    question: "Do you repair iQOO gaming phones?",
    answer: "Yes! iQOO is Vivo's gaming sub-brand, and we're experts in all iQOO models including cooling system and trigger button repairs.",
  },
];

const VivoRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Vivo Repair Winnipeg | X Series & iQOO Fix | Mobile Tech Lab"
      metaDescription="Vivo phone repair in Winnipeg. Screen, battery, camera repair for Vivo X100, V30, Y series & iQOO gaming phones. Growing brand specialists."
      deviceName="Vivo"
      tagline="Vivo & iQOO Repair in Winnipeg"
      heroDescription="From the ZEISS-equipped X100 flagship to iQOO gaming phones, we repair all Vivo devices in Winnipeg. Growing brand specialists with expert service for X, V, Y series and foldables."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Vivo phones including X series, V series, Y series, X Fold foldables, and iQOO gaming devices."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
    />
  );
};

export default VivoRepair;
