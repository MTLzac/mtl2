import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Zap, 
  Camera, 
  Volume2,
  Fingerprint
} from "lucide-react";
import heroImage from "@/assets/hero-oneplus.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace damaged Fluid AMOLED displays with quality parts.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore your OnePlus battery for full-day performance.",
  },
  {
    icon: Zap,
    name: "Fast Charging Repair",
    description: "Fix Warp Charge and SUPERVOOC fast charging port issues.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Repair Hasselblad-tuned cameras on OnePlus flagship devices.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Fix stereo speakers and Dolby Atmos audio issues.",
  },
  {
    icon: Fingerprint,
    name: "Fingerprint Sensor",
    description: "Repair in-display fingerprint sensors for secure unlocking.",
  },
];

const MODELS = [
  // OnePlus Series
  "OnePlus Ace 5 Pro 5G", "OnePlus Ace 5 5G", "OnePlus 13R", "OnePlus 13 5G", "OnePlus 12R 5G", "OnePlus 12 5G", "OnePlus 11", "OnePlus 10T 5G", "OnePlus 10R", "OnePlus Ace 3 5G", "OnePlus Ace Pro", "OnePlus Ace", "OnePlus 10 Pro", "OnePlus 9 Pro", "OnePlus 9RT 5G", "OnePlus 9R", "OnePlus 9",
  // Classic Series
  "OnePlus 8T", "OnePlus 8 Pro", "OnePlus 8", "OnePlus 7T Pro", "OnePlus 7T", "OnePlus 7 Pro", "OnePlus 7", "OnePlus 6T", "OnePlus 6", "OnePlus 5T", "OnePlus 5", "OnePlus 3T", "OnePlus 3", "OnePlus 2", "OnePlus One", "OnePlus X",
  // Nord Series
  "OnePlus Nord N300 5G", "OnePlus Nord N30 5G", "OnePlus Nord CE 3 Lite", "OnePlus Nord CE2 Lite 5G", "OnePlus Nord CE 2 5G", "OnePlus Nord CE 5G", "OnePlus Nord N20 5G", "OnePlus Nord N20 SE", "OnePlus Nord N200 5G", "OnePlus Nord 2T", "OnePlus Nord 2 5G", "OnePlus Nord N100", "OnePlus Nord N10 5G", "OnePlus Nord",
  // Open Series
  "OnePlus Open 5G",
  // Pad Series
  "OnePlus Pad Pro", "OnePlus Pad 2",
];

const FAQS = [
  {
    question: "Can you fix OnePlus Warp Charge issues?",
    answer: "Yes! We diagnose and repair Warp Charge and SUPERVOOC fast charging problems, whether it's the port, cable compatibility, or internal components.",
  },
  {
    question: "Do you repair OnePlus Open foldable?",
    answer: "Yes, we service the OnePlus Open including screen repairs, hinge issues, and component replacements.",
  },
  {
    question: "Are OnePlus parts hard to find?",
    answer: "We maintain stock of common OnePlus parts. Some specialized parts may take 1-2 days to source for less common models.",
  },
  {
    question: "How long does OnePlus screen repair take?",
    answer: "Most OnePlus screen replacements are completed within 1-2 hours. The OnePlus Open may require additional time.",
  },
  {
    question: "Will my OnePlus alert slider still work after repair?",
    answer: "Yes! We ensure all unique OnePlus features like the alert slider function properly after any repair.",
  },
];

const OnePlusRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="OnePlus Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab"
      metaDescription="Premium OnePlus repair in Winnipeg. Screen replacement, Warp Charge port, battery repair for OnePlus 12, 11, Nord & Open. Expert same-day service."
      deviceName="OnePlus"
      tagline="Premium Android Repair Specialists in Winnipeg"
      heroDescription="From the flagship OnePlus 12 to the innovative OnePlus Open, we provide expert repairs for all OnePlus devices. Fast charging issues, screen damage, battery problems – we've got the solution."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all OnePlus models including flagship, Nord series, and the OnePlus Open foldable."
      faqs={FAQS}
    />
  );
};

export default OnePlusRepair;
