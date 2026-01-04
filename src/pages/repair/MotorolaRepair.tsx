import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Wifi,
  DollarSign,
  Smartphone,
  Zap,
  Shield
} from "lucide-react";
import heroImage from "@/assets/hero-motorola.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Moto G, Edge OLED, and Razr foldable screen replacements. Affordable repairs for all Motorola displays.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Motorola batteries degrade after 2-3 years. Same-day replacement to restore full-day battery life.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "USB-C charging port repair for all Moto devices. Includes cleaning, testing, and component replacement.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Fix blurry photos, cracked lenses, and autofocus issues on Moto G, Edge, and Razr cameras.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Can't hear calls? Speaker, earpiece, and microphone repairs for all Motorola phones.",
  },
  {
    icon: Wifi,
    name: "Connectivity Issues",
    description: "WiFi, Bluetooth, and cellular antenna repairs. Get your Motorola back online.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: DollarSign,
    title: "Budget-Friendly Repairs",
    description: "Motorola parts are often more affordable than other brands. Quality repairs that won't break the bank.",
  },
  {
    icon: Smartphone,
    title: "Razr Foldable Specialists",
    description: "We repair Motorola Razr foldables including screen, hinge, and flex cable issues.",
  },
  {
    icon: Zap,
    title: "Same-Day Moto Service",
    description: "Most Motorola repairs completed same day—typically 1-2 hours. Walk-ins welcome.",
  },
  {
    icon: Shield,
    title: "90-Day Repair Warranty",
    description: "All Motorola repairs backed by our warranty. Quality parts that meet or exceed OEM specs.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "Motorola Edge Series",
    models: ["Edge 50 Ultra", "Edge 50 Pro", "Edge 50", "Edge 40 Pro", "Edge 40 Neo", "Edge 40", "Edge 30 Ultra", "Edge 30 Pro", "Edge 30", "Edge+", "Edge"],
    description: "Motorola's flagship phones. Premium OLED screen replacements and battery service for all Edge generations.",
  },
  {
    title: "Motorola Razr",
    models: ["Razr 40 Ultra", "Razr 40", "Razr+ (2024)", "Razr+ (2023)", "Razr (2023)", "Razr (2022)"],
    description: "Foldable phone repairs including inner display, outer screen, hinge mechanism, and flex cable issues.",
  },
  {
    title: "Moto G Series",
    models: ["Moto G Power 5G", "Moto G Stylus 5G", "Moto G 5G", "Moto G Power", "Moto G Stylus", "Moto G Play", "Moto G Pure", "Moto G Fast"],
    description: "Motorola's popular mid-range lineup. Affordable screen and battery repairs for all Moto G models.",
  },
  {
    title: "Moto E & ThinkPhone",
    models: ["Moto E", "Moto E Power", "ThinkPhone by Motorola"],
    description: "Budget devices and business phones. Cost-effective repairs that make sense for your device's value.",
  },
];

const MODELS = [
  // Motorola Edge Series
  "Motorola Edge 50 Ultra", "Motorola Edge 50 Pro", "Motorola Edge 50",
  "Motorola Edge 40 Pro", "Motorola Edge 40 Neo", "Motorola Edge 40",
  "Motorola Edge 30 Ultra", "Motorola Edge 30 Pro", "Motorola Edge 30",
  "Motorola Edge+", "Motorola Edge",
  // Motorola Razr
  "Motorola Razr 40 Ultra", "Motorola Razr 40",
  "Motorola Razr+", "Motorola Razr",
  // Moto G Series
  "Moto G Power 5G", "Moto G Stylus 5G", "Moto G 5G",
  "Moto G Power", "Moto G Stylus", "Moto G Play",
  "Moto G Pure", "Moto G Fast",
  // Moto E Series
  "Moto E", "Moto E Power",
  // ThinkPhone
  "ThinkPhone by Motorola",
];

const FAQS = [
  {
    question: "How much does Motorola screen repair cost in Winnipeg?",
    answer: "Motorola repairs are often more affordable than Samsung or Apple. Moto G screens are budget-friendly, while Edge and Razr cost more due to premium displays. Use our free quote tool for accurate pricing.",
  },
  {
    question: "Do you repair Motorola Razr foldable phones?",
    answer: "Yes! We're one of few Winnipeg shops that repair Razr foldables. We handle inner screen, outer screen, hinge, and flex cable issues for all Razr models.",
  },
  {
    question: "How long does Motorola repair take?",
    answer: "Most Motorola repairs are completed same-day at our Winnipeg locations, typically within 1-2 hours. Razr foldable repairs may take 2-4 hours due to complexity.",
  },
  {
    question: "Is it worth repairing my Moto G or Moto E?",
    answer: "Often yes! Moto G and E repairs are very affordable, making repair more economical than buying new. We'll give you an honest assessment of repair vs. replacement value.",
  },
  {
    question: "Do you stock Motorola parts in Winnipeg?",
    answer: "We stock common Moto G and Edge series parts at both Winnipeg locations. Razr parts and less common models may require 1-2 days to arrive.",
  },
];

const SERVICE_AREA_NOTE = "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online.";

const MotorolaRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Motorola Phone Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab"
      metaDescription="Affordable Motorola repair in Winnipeg. Screen, battery, charging port repair for Moto G, Edge, Razr & all models. Budget-friendly same-day service."
      deviceName="Motorola"
      tagline="Affordable Motorola Phone Repairs in Winnipeg"
      heroDescription="From budget-friendly Moto G and E series to premium Edge flagships and foldable Razr devices, we repair all Motorola phones in Winnipeg. Cracked screens, dying batteries, charging issues—fixed fast with quality parts and backed by our repair warranty."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We service all Motorola devices from the budget-friendly Moto E to the premium Edge series and foldable Razr."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote={SERVICE_AREA_NOTE}
    />
  );
};

export default MotorolaRepair;
