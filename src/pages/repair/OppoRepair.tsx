import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Zap,
  Award,
  TrendingUp,
  Wrench,
  Shield
} from "lucide-react";
import heroImage from "@/assets/hero-oppo.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace cracked AMOLED displays on Oppo Find X, Reno, and Realme devices with precision.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore battery performance to your Oppo or Realme phone in Winnipeg.",
  },
  {
    icon: Zap,
    name: "SUPERVOOC Repair",
    description: "Fix SUPERVOOC and VOOC fast charging issues—65W to 150W charging restored.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Repair Hasselblad-partnered cameras on flagship Oppo Find X devices.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Fix Dolby Atmos speakers, earpieces, and audio quality issues.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Repair USB-C ports for reliable fast charging and data transfer.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Award,
    title: "Oppo & Realme Experts",
    description: "Specialized in the BBK family of brands including Oppo, Realme, and OnePlus devices.",
  },
  {
    icon: Zap,
    title: "SUPERVOOC Specialists",
    description: "Expert repair for 65W to 150W SUPERVOOC fast charging systems.",
  },
  {
    icon: TrendingUp,
    title: "Growing Market Leaders",
    description: "Early adopters of Oppo repair in Winnipeg, staying ahead of the curve.",
  },
  {
    icon: Award,
    title: "Industry-Leading Warranties",
    description: "Lifetime warranty on screen repairs. 90-day warranty on battery replacements. Quality parts that meet OEM specifications.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "Find X Flagships",
    models: ["Find X7 Ultra", "Find X7", "Find X6 Pro", "Find X6", "Find X5 Pro", "Find X5"],
    description: "Premium flagship repairs with Hasselblad camera expertise.",
  },
  {
    title: "Reno Series",
    models: ["Reno 11 Pro", "Reno 11", "Reno 10 Pro+", "Reno 10 Pro", "Reno 10", "Reno 8 Pro", "Reno 8"],
    description: "Mid-range Reno repairs with portrait camera specialization.",
  },
  {
    title: "Oppo A Series",
    models: ["A98", "A78", "A58", "A38", "A17", "A16", "A15"],
    description: "Budget-friendly A-series repairs at affordable prices.",
  },
  {
    title: "Realme Devices",
    models: ["GT 5 Pro", "GT 3", "11 Pro+", "11 Pro", "11", "10 Pro+", "10 Pro", "C55", "C53"],
    description: "Full Realme lineup support—GT flagships to C-series budget phones.",
  },
  {
    title: "Foldables",
    models: ["Find N3", "Find N2", "Find N2 Flip"],
    description: "Specialized foldable screen and hinge repairs.",
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
    answer: "Yes! We're Winnipeg's Oppo and Realme specialists. We service all devices from budget A-series to flagship Find X models at our St. Vital and Garden City locations.",
  },
  {
    question: "Can you fix SUPERVOOC fast charging issues?",
    answer: "Absolutely! We're experts in SUPERVOOC and VOOC charging repairs—from 65W standard to 150W ultra-fast charging. We diagnose port issues, cable problems, and internal charging components.",
  },
  {
    question: "Do you repair Oppo foldable phones?",
    answer: "Yes, we service the Oppo Find N series including the Find N3 and N2 Flip foldables. Specialized hinge and flexible display repairs available.",
  },
  {
    question: "Are Oppo and Realme parts available in Winnipeg?",
    answer: "We maintain stock for popular Oppo and Realme models. Find X flagships and Reno series parts are typically in stock; less common models may take 2-3 business days to source.",
  },
  {
    question: "Do you repair Realme phones too?",
    answer: "Yes! Realme is part of the BBK family (along with Oppo and OnePlus), and we're experts in all Realme models from GT gaming phones to budget C-series devices.",
  },
];

const OppoRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Oppo Repair Winnipeg | Find X & Reno Screen Fix | Mobile Tech Lab"
      metaDescription="Oppo repair in Winnipeg. Screen, battery, SUPERVOOC charging repair for Oppo Find X, Reno, A series & Realme devices. Growing market specialists."
      deviceName="Oppo"
      tagline="Oppo & Realme Repair Specialists in Winnipeg"
      heroDescription="From the flagship Find X series to the affordable A-series, we repair all Oppo devices in Winnipeg. Plus Realme phones too! SUPERVOOC charging issues, cracked screens, battery problems—we fix it all."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Oppo and Realme devices including Find X flagships, Reno series, A-series, and foldables."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
    />
  );
};

export default OppoRepair;
