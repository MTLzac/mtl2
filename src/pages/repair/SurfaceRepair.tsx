import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  Monitor, 
  Battery, 
  Plug, 
  Database,
  Droplets
} from "lucide-react";
import heroImage from "@/assets/hero-surface.png";

const services = [
  {
    icon: Monitor,
    name: "Screen Replacement",
    description: "Fix cracked, shattered, or malfunctioning Surface displays with precision replacement."
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore your Surface's battery life with a new, high-quality battery replacement."
  },
  {
    icon: Plug,
    name: "Charging Port / Charging Issues",
    description: "Resolve charging problems, port damage, and power connectivity issues."
  },
  {
    icon: Database,
    name: "Data Recovery",
    description: "Professional data recovery services to retrieve your important files and documents."
  },
  {
    icon: Droplets,
    name: "Liquid Damage",
    description: "Expert liquid damage repair to salvage your water-damaged Surface device."
  }
];

const models = [
  // Surface Pro
  "Surface Pro 11",
  "Surface Pro 10",
  "Surface Pro 9",
  "Surface Pro 8",
  "Surface Pro 7+",
  "Surface Pro 7",
  "Surface Pro 6",
  "Surface Pro 5",
  "Surface Pro 4",
  "Surface Pro 3",
  "Surface Pro 2",
  "Surface Pro",
  // Surface Laptop
  "Surface Laptop 7",
  "Surface Laptop 6",
  "Surface Laptop 5",
  "Surface Laptop 4",
  "Surface Laptop 3",
  "Surface Laptop 2",
  "Surface Laptop",
  // Surface Laptop Studio
  "Surface Laptop Studio 2",
  "Surface Laptop Studio",
  // Surface Laptop Go
  "Surface Laptop Go 3",
  "Surface Laptop Go 2",
  "Surface Laptop Go",
  // Surface Book
  "Surface Book 3",
  "Surface Book 2",
  "Surface Book",
  // Surface Go
  "Surface Go 4",
  "Surface Go 3",
  "Surface Go 2",
  "Surface Go",
  // Surface Studio
  "Surface Studio 2+",
  "Surface Studio 2",
  "Surface Studio"
];

const faqs = [
  {
    question: "How long does a Microsoft Surface screen replacement take?",
    answer: "Most Surface screen replacements are completed within 2-4 hours depending on the model. Due to the specialized nature of Surface devices, some repairs may require additional time."
  },
  {
    question: "Can you replace the battery in a Surface device?",
    answer: "Yes, we offer battery replacement for all Surface models. Surface devices have integrated batteries that require careful handling, and our technicians are trained in these specialized repairs."
  },
  {
    question: "Is data recovery possible from a damaged Surface?",
    answer: "In most cases, yes. Our data recovery experts can retrieve files from damaged, non-booting, or water-damaged Surface devices. We'll assess your device and provide recovery options."
  },
  {
    question: "Do you repair Surface Pro and Surface Laptop models?",
    answer: "Absolutely! We repair all Microsoft Surface models including Surface Pro, Surface Laptop, Surface Book, Surface Go, and Surface Studio devices."
  },
  {
    question: "What if my Surface has liquid damage?",
    answer: "Bring it in as soon as possible! Quick action increases the chances of successful repair. We'll perform a thorough cleaning, assess the damage, and repair or replace affected components."
  },
  {
    question: "Do you offer a warranty on Surface repairs?",
    answer: "Yes, all our Microsoft Surface repairs come with a warranty on both parts and labor. We use quality replacement parts and stand behind our work."
  }
];

const SurfaceRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Microsoft Surface Repair in Manitoba | MobileTechLab"
      metaDescription="Expert Microsoft Surface repair services in Winnipeg and Winkler. Screen replacement, battery replacement, charging issues, data recovery, and liquid damage repair for all Surface models."
      deviceName="Microsoft Surface"
      tagline="Expert Surface Repair Services"
      heroDescription="Professional repair services for all Microsoft Surface devices. From Surface Pro to Surface Laptop, we fix screens, batteries, charging issues, and more with quality parts and expert care."
      heroImage={heroImage}
      services={services}
      models={models}
      modelsDescription="We repair all Microsoft Surface models and generations. Select your device to get started."
      faqs={faqs}
    />
  );
};

export default SurfaceRepair;
