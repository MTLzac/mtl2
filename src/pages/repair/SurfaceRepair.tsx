import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  Monitor, 
  Battery, 
  Plug, 
  Database,
  Droplets,
  PenTool,
  Award,
  Laptop,
  Briefcase,
  Shield
} from "lucide-react";
import heroImage from "@/assets/hero-surface.png";

const SERVICES = [
  {
    icon: Monitor,
    name: "Screen Replacement",
    description: "Fix cracked or malfunctioning Surface Pro, Laptop, and Book displays.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore your Surface's battery life—specialized integrated battery service.",
  },
  {
    icon: Plug,
    name: "Charging Issues",
    description: "Resolve Surface Connect port, USB-C charging, and power connectivity issues.",
  },
  {
    icon: Database,
    name: "Data Recovery",
    description: "Professional data recovery from damaged or non-booting Surface devices.",
  },
  {
    icon: Droplets,
    name: "Liquid Damage",
    description: "Expert liquid damage repair for water-damaged Surface devices.",
  },
  {
    icon: PenTool,
    name: "Surface Pen Issues",
    description: "Diagnose and resolve Surface Pen connectivity and digitizer problems.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Award,
    title: "Surface Specialists",
    description: "Winnipeg and Winkler's Microsoft Surface repair experts.",
  },
  {
    icon: Laptop,
    title: "All Surface Models",
    description: "From Surface Pro 11 to legacy Surface Pro 3, we service every generation.",
  },
  {
    icon: Briefcase,
    title: "Business & Enterprise",
    description: "Quick turnaround for business-critical Surface device repairs.",
  },
  {
    icon: Award,
    title: "Warranty on Every Repair",
    description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "Surface Pro",
    models: ["Surface Pro 11", "Surface Pro 10", "Surface Pro 9", "Surface Pro 8", "Surface Pro 7+", "Surface Pro 7", "Surface Pro 6", "Surface Pro 5", "Surface Pro 4", "Surface Pro 3"],
    description: "All Surface Pro tablet generations.",
  },
  {
    title: "Surface Laptop",
    models: ["Surface Laptop 7", "Surface Laptop 6", "Surface Laptop 5", "Surface Laptop 4", "Surface Laptop 3", "Surface Laptop 2", "Surface Laptop Studio 2", "Surface Laptop Studio"],
    description: "Traditional laptop and Studio repairs.",
  },
  {
    title: "Surface Go",
    models: ["Surface Go 4", "Surface Go 3", "Surface Go 2", "Surface Go"],
    description: "Compact Surface Go repairs.",
  },
  {
    title: "Surface Book",
    models: ["Surface Book 3", "Surface Book 2", "Surface Book"],
    description: "Detachable Surface Book repairs.",
  },
];

const MODELS = [
  // Surface Pro
  "Surface Pro 11", "Surface Pro 10", "Surface Pro 9", "Surface Pro 8",
  "Surface Pro 7+", "Surface Pro 7", "Surface Pro 6", "Surface Pro 5",
  "Surface Pro 4", "Surface Pro 3", "Surface Pro 2", "Surface Pro",
  // Surface Laptop
  "Surface Laptop 7", "Surface Laptop 6", "Surface Laptop 5",
  "Surface Laptop 4", "Surface Laptop 3", "Surface Laptop 2", "Surface Laptop",
  // Surface Laptop Studio
  "Surface Laptop Studio 2", "Surface Laptop Studio",
  // Surface Laptop Go
  "Surface Laptop Go 3", "Surface Laptop Go 2", "Surface Laptop Go",
  // Surface Book
  "Surface Book 3", "Surface Book 2", "Surface Book",
  // Surface Go
  "Surface Go 4", "Surface Go 3", "Surface Go 2", "Surface Go",
  // Surface Studio
  "Surface Studio 2+", "Surface Studio 2", "Surface Studio",
];

const FAQS = [
  {
    question: "How long does a Microsoft Surface screen replacement take?",
    answer: "Most Surface screen replacements are completed within 2-4 hours depending on the model. Surface Pro screens require careful removal due to the adhesive design.",
  },
  {
    question: "Can you replace the battery in a Surface device?",
    answer: "Yes! Surface devices have integrated batteries requiring specialized tools. Our Winnipeg technicians are trained in these complex repairs for all Surface models.",
  },
  {
    question: "Is data recovery possible from a damaged Surface?",
    answer: "In most cases, yes. We retrieve files from damaged, non-booting, or water-damaged Surface devices at our St. Vital and Garden City locations.",
  },
  {
    question: "Do you repair Surface Pro and Surface Laptop models?",
    answer: "Absolutely! We repair all Microsoft Surface models including Surface Pro, Laptop, Book, Go, and Studio devices in Winnipeg.",
  },
  {
    question: "What if my Surface has liquid damage?",
    answer: "Bring it in immediately—quick action increases recovery chances. We perform thorough cleaning, assess damage, and repair or replace affected components.",
  },
  {
    question: "Do you offer service in Winkler too?",
    answer: "Yes! We provide Microsoft Surface repair services in both Winnipeg and Winkler, Manitoba.",
  },
];

const PRICING_MICRO_COPY = {
  costDriver: "Surface repair costs are driven by the display and integrated design—high-resolution PixelSense screens and adhesive-sealed batteries require specialized work.",
  priceShock: "Many customers are surprised that a Surface screen replacement can cost nearly as much as a budget laptop, especially for larger Pro and Laptop Studio models.",
  advisory: "If the repair cost approaches your Surface's current value, we'll explain that clearly so you can decide whether repair, replacement, or trade-in makes sense.",
  fallback: "When repair isn't practical, data recovery or data transfer to a new device is often still possible.",
};

const SurfaceRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Microsoft Surface Repair in Manitoba | MobileTechLab"
      metaDescription="Expert Microsoft Surface repair services in Winnipeg and Winkler. Screen replacement, battery replacement, charging issues, data recovery, and liquid damage repair."
      canonicalUrl="https://mobiletechlab.ca/repair/surface"
      slug="surface"
      deviceName="Microsoft Surface"
      tagline="Expert Surface Repair Services"
      heroDescription="Professional Microsoft Surface repair services in Winnipeg and Winkler. Screen replacement, battery issues, charging problems, data recovery, and liquid damage repair for all Surface Pro, Laptop, and Book models."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Microsoft Surface models and generations. Select your device to get started."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote="Serving Winnipeg (St. Vital, Fort Garry, Garden City, Transcona) and Winkler, MB. Walk-ins welcome or book online."
      pricingMicroCopy={PRICING_MICRO_COPY}
    />
  );
};

export default SurfaceRepair;
