import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Wifi
} from "lucide-react";
import heroImage from "@/assets/hero-motorola.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace cracked or damaged Motorola screens at affordable prices.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore battery life to your Moto device with a new battery.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Fix loose or non-functional USB-C charging ports.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Repair front and rear cameras for clear photos and video calls.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Fix muffled or non-working speakers and earpieces.",
  },
  {
    icon: Wifi,
    name: "Connectivity Issues",
    description: "Resolve WiFi, Bluetooth, and cellular connectivity problems.",
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
    question: "How much does Motorola screen repair cost?",
    answer: "Motorola repairs are often more affordable than other brands. Contact us for a free quote based on your specific Moto model.",
  },
  {
    question: "Can you repair Motorola Razr foldable phones?",
    answer: "Yes! We repair the Motorola Razr series including the latest Razr 40 Ultra, handling screen, hinge, and component repairs.",
  },
  {
    question: "Do you have Motorola parts in stock?",
    answer: "We stock common Moto G and Edge series parts. Less common models may require 1-2 days for parts to arrive.",
  },
  {
    question: "Is it worth repairing my Moto G?",
    answer: "Often yes! Moto G repairs are typically very affordable, making repair more economical than replacement for many issues.",
  },
  {
    question: "How long does Motorola repair take?",
    answer: "Most Motorola repairs are completed same-day, typically within 1-2 hours depending on the repair type.",
  },
];

const MotorolaRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Motorola Repair Winnipeg | Moto G & Edge Screen Fix | Mobile Tech Lab"
      metaDescription="Affordable Motorola repair in Winnipeg. Screen, battery, charging port repair for Moto G, Edge, Razr & all models. Budget-friendly same-day service."
      deviceName="Motorola"
      tagline="Budget-Friendly Moto Repairs in Winnipeg"
      heroDescription="Get your Motorola phone fixed without breaking the bank. We repair all Moto G, Edge, Razr, and legacy models with quality parts and fast turnaround times."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We service all Motorola devices from the budget-friendly Moto E to the premium Edge series and foldable Razr."
      faqs={FAQS}
    />
  );
};

export default MotorolaRepair;
