import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Zap, 
  Camera, 
  Volume2,
  Fingerprint
} from "lucide-react";

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
  // OnePlus 12 Series
  "OnePlus 12", "OnePlus 12R",
  // OnePlus 11 Series
  "OnePlus 11", "OnePlus 11R",
  // OnePlus 10 Series
  "OnePlus 10 Pro", "OnePlus 10T", "OnePlus 10R",
  // OnePlus 9 Series
  "OnePlus 9 Pro", "OnePlus 9", "OnePlus 9R", "OnePlus 9RT",
  // OnePlus 8 Series
  "OnePlus 8 Pro", "OnePlus 8", "OnePlus 8T",
  // OnePlus Nord Series
  "OnePlus Nord 3", "OnePlus Nord CE 3", "OnePlus Nord CE 3 Lite",
  "OnePlus Nord 2T", "OnePlus Nord 2", "OnePlus Nord CE 2",
  "OnePlus Nord N30", "OnePlus Nord N20", "OnePlus Nord N10",
  // Older Models
  "OnePlus 7 Pro", "OnePlus 7T", "OnePlus 7",
  "OnePlus 6T", "OnePlus 6",
  // OnePlus Open
  "OnePlus Open",
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
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all OnePlus models including flagship, Nord series, and the OnePlus Open foldable."
      faqs={FAQS}
    />
  );
};

export default OnePlusRepair;
