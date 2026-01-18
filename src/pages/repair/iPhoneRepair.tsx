import { Link } from "react-router-dom";
import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  Smartphone, 
  Battery, 
  Plug, 
  Camera, 
  Droplets,
  MonitorSmartphone,
  DollarSign,
  Zap,
  Shield,
  Award
} from "lucide-react";

const SERVICES = [
  {
    icon: Smartphone,
    name: "Screen Replacement",
    description: "Cracked, shattered, or unresponsive iPhone screens repaired same-day with quality displays. All models from iPhone 6s to iPhone 15 Pro Max.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore your iPhone's battery health with professional replacement. Genuine Apple battery upgrades available for an additional $100.",
  },
  {
    icon: MonitorSmartphone,
    name: "Back Glass Repair",
    description: "iPhone back glass cracked? We replace rear glass panels for iPhone 8 and newer models with quality parts.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "iPhone not charging? We repair and replace Lightning and USB-C ports for reliable charging on all models.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Front or rear camera issues? We fix focus problems, black screens, and cracked camera lenses on all iPhone models.",
  },
  {
    icon: Droplets,
    name: "Water Damage Repair",
    description: "Dropped your iPhone in water? Our technicians assess and repair water-damaged devices with ultrasonic cleaning.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Award,
    title: "Apple Device Specialists",
    description: "Years of experience with iOS devices. We understand iPhone internals and offer genuine Apple battery upgrade options.",
  },
  {
    icon: Zap,
    title: "Same-Day iPhone Repairs",
    description: "Most iPhone screen and battery repairs completed in 1-2 hours. Walk-ins welcome at both locations.",
  },
  {
    icon: Shield,
    title: "Industry-Leading Warranties",
    description: "Lifetime warranty on screen repairs. 90-day warranty on batteries and other components. Quality parts guaranteed.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Free diagnostics on all iPhones. Upfront quotes with no hidden fees or surprises.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "iPhone 15 Series",
    models: ["iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15"],
    description: "Latest generation with USB-C and Dynamic Island. Screen, battery, and back glass repairs available.",
  },
  {
    title: "iPhone 14 & 13 Series",
    models: ["iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14", "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13 mini", "iPhone 13"],
    description: "Pro camera systems and A15/A16 chips. Same-day screen and battery repairs.",
  },
  {
    title: "iPhone 12, 11 & X Series",
    models: ["iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12 mini", "iPhone 12", "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11", "iPhone XS Max", "iPhone XS", "iPhone XR", "iPhone X"],
    description: "Face ID models with OLED displays. Affordable screen and battery replacement.",
  },
  {
    title: "iPhone SE & Legacy",
    models: ["iPhone SE (2022)", "iPhone SE (2020)", "iPhone 8 Plus", "iPhone 8", "iPhone 7 Plus", "iPhone 7", "iPhone 6s Plus", "iPhone 6s"],
    description: "Touch ID classics still going strong. Budget-friendly repairs for older models.",
  },
];

const MODELS = [
  "iPhone 15 Pro Max",
  "iPhone 15 Pro",
  "iPhone 15 Plus",
  "iPhone 15",
  "iPhone 14 Pro Max",
  "iPhone 14 Pro",
  "iPhone 14 Plus",
  "iPhone 14",
  "iPhone 13 Pro Max",
  "iPhone 13 Pro",
  "iPhone 13 mini",
  "iPhone 13",
  "iPhone 12 Pro Max",
  "iPhone 12 Pro",
  "iPhone 12 mini",
  "iPhone 12",
  "iPhone 11 Pro Max",
  "iPhone 11 Pro",
  "iPhone 11",
  "iPhone XS Max",
  "iPhone XS",
  "iPhone XR",
  "iPhone X",
  "iPhone SE (2022)",
  "iPhone SE (2020)",
  "iPhone 8 Plus",
  "iPhone 8",
  "iPhone 7 Plus",
  "iPhone 7",
  "iPhone 6s Plus",
  "iPhone 6s",
];

const FAQS = [
  {
    question: "How long does iPhone screen replacement take?",
    answer: "Most iPhone screen repairs are completed in 1-2 hours. Walk-ins welcome at our St. Vital and Thompson locations, or book an appointment online.",
  },
  {
    question: "How much does iPhone repair cost in Winnipeg?",
    answer: "Pricing varies by model and repair type. Screen repairs typically range from $79-$299 depending on your iPhone model. We offer free diagnostics and upfront quotes.",
  },
  {
    question: "Do you use genuine Apple parts for iPhone repairs?",
    answer: "We offer quality aftermarket parts as standard and genuine Apple battery upgrades for an additional $100. Ask about genuine Apple options for your repair.",
  },
  {
    question: "Can you fix iPhone back glass?",
    answer: "Yes! We repair cracked back glass on iPhone 8 and newer models. Same-day service available at both locations.",
  },
  {
    question: "Will I lose my data during iPhone repair?",
    answer: "No. We never factory reset devices. Your photos, apps, and data remain intact during screen, battery, and most other repairs.",
  },
];

const IPhoneRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="iPhone Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab"
      metaDescription="Expert iPhone repair in Winnipeg. Screen replacement, battery, charging port, back glass repair for all iPhone models. Same-day service at St. Vital & Thompson."
      deviceName="iPhone"
      tagline="Winnipeg's Trusted iPhone Repair Specialists"
      heroDescription="From the latest iPhone 15 Pro Max to classic iPhone SE, we repair all Apple smartphone models. Cracked screens, dead batteries, water damage, back glass, and charging issues—all fixed with quality parts and backed by our repair warranty. Looking for iPad, MacBook, or Apple Watch repair? We're Apple device specialists."
      hideHeroImage={true}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair every iPhone generation from the iPhone 6s to the latest iPhone 15 Pro Max. Same-day service for most models."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Same-day iPhone repair at our Thompson location too. We also repair iPad, MacBook, and Apple Watch devices."
    />
  );
};

export default IPhoneRepair;
