import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  Smartphone, 
  Battery, 
  Plug, 
  Droplets, 
  Camera, 
  Volume2,
  ScreenShare,
  Wrench,
  Zap,
  Shield,
  DollarSign,
  Award
} from "lucide-react";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Galaxy S, A, and Note AMOLED screen replacements. Z Fold and Z Flip inner and outer display repairs with quality parts.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Samsung phone batteries degrade after 2-3 years. Restore full-day battery life with same-day replacement service.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "USB-C charging port repair for all Galaxy phones. Includes cleaning, testing, and component replacement if needed.",
  },
  {
    icon: Droplets,
    name: "Water Damage Repair",
    description: "Dropped your Galaxy in water? Our ultrasonic cleaning and component-level repair gives your phone the best chance of recovery.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Rear camera module and front selfie camera repairs. Fix blurry photos, cracked lenses, and autofocus issues.",
  },
  {
    icon: Volume2,
    name: "Speaker & Mic Repair",
    description: "Can't hear calls or be heard? Speaker, earpiece, and microphone repairs for all Samsung Galaxy phones.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Wrench,
    title: "Foldable Specialists",
    description: "Z Fold and Z Flip repairs including screen, hinge, and flex cable issues. Few shops in Winnipeg touch foldables—we embrace them.",
  },
  {
    icon: Zap,
    title: "Same-Day Galaxy Repairs",
    description: "Most Samsung phone repairs completed same day. Walk-ins welcome at both locations.",
  },
  {
    icon: Award,
    title: "Industry-Leading Warranties",
    description: "Lifetime warranty on screen repairs. 90-day warranty on battery replacements. Quality parts that meet OEM specifications.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Free diagnostics and upfront quotes. No surprises—know your repair cost before we start.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "Galaxy S Series",
    models: ["S24 Ultra", "S24+", "S24", "S23 Ultra", "S23+", "S23", "S23 FE", "S22 Ultra", "S22+", "S22", "S21 Ultra", "S21+", "S21", "S21 FE", "S20 Ultra", "S20+", "S20", "S20 FE", "S10+", "S10", "S10e"],
    description: "Samsung's flagship phones. AMOLED screen replacements and battery service for all S series generations.",
  },
  {
    title: "Galaxy Z Fold & Z Flip",
    models: ["Z Fold 5", "Z Fold 4", "Z Fold 3", "Z Flip 5", "Z Flip 4", "Z Flip 3"],
    description: "Foldable phone specialists. Inner screen, outer screen, hinge, and flex cable repairs.",
  },
  {
    title: "Galaxy A Series",
    models: ["A54", "A53", "A52", "A51", "A34", "A33", "A32", "A14", "A13", "A12"],
    description: "Budget-friendly repairs for Samsung's mid-range lineup. Same quality service, lower cost parts.",
  },
  {
    title: "Galaxy Note Series",
    models: ["Note 20 Ultra", "Note 20", "Note 10+", "Note 10"],
    description: "S Pen and stylus functionality preserved. Screen and battery repairs for all Note models.",
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
    question: "How long does Samsung phone screen replacement take?",
    answer: "Most Samsung Galaxy screen replacements are completed within 1-2 hours. Foldable devices like the Z Fold and Z Flip may take 2-4 hours due to their complex display assemblies.",
  },
  {
    question: "Do you repair Samsung Galaxy foldable phones?",
    answer: "Yes! We specialize in Galaxy Z Fold and Z Flip repairs including inner screen, outer screen, hinge mechanism, and flex cable issues. Few repair shops in Winnipeg work on foldables—we have the tools and experience.",
  },
  {
    question: "How much does Samsung Galaxy repair cost in Winnipeg?",
    answer: "Repair costs vary by model. Galaxy A series repairs are typically the most affordable, while flagship S series and foldable Z series cost more due to premium components. Use our free quote tool for an accurate estimate.",
  },
  {
    question: "Do you use genuine Samsung parts?",
    answer: "We use high-quality parts that meet or exceed OEM specifications. We'll discuss part options and pricing with you before starting any repair.",
  },
  {
    question: "Will I lose my data during Samsung phone repair?",
    answer: "For most repairs (screen, battery, charging port), your data remains intact. We recommend backing up before any repair as a precaution. For water damage cases, data recovery is a priority.",
  },
];

const SamsungRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Samsung Phone Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab"
      metaDescription="Expert Samsung Galaxy repair in Winnipeg. Screen replacement, battery, charging port, water damage repair for all Galaxy S, Z Fold, Z Flip, A series & Note models. Fast same-day service."
      canonicalUrl="https://mobiletechlab.ca/repair/samsung"
      slug="samsung"
      deviceName="Samsung Phone"
      tagline="Winnipeg's Samsung Galaxy Phone Repair Specialists"
      heroDescription="From the latest Galaxy S24 Ultra to foldable Z Fold and Z Flip devices, we specialize in Samsung smartphone repairs. Cracked screens, dead batteries, water damage, and charging issues—all fixed with quality parts and backed by our repair warranty."
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Samsung Galaxy phone models including the S series, Z Fold, Z Flip, A series, and Note series. Don't see your model? Contact us!"
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Walk-ins welcome or book online."
    />
  );
};

export default SamsungRepair;
