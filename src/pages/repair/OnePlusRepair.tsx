import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Zap, 
  Camera, 
  Volume2,
  Fingerprint,
  Award,
  Package,
  Shield
} from "lucide-react";
import heroImage from "@/assets/hero-oneplus.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Fluid AMOLED and ProXDR display replacements for OnePlus flagships and Nord series. Restore vibrant colors and smooth 120Hz scrolling.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore full-day battery life to your OnePlus device. Same-day replacement for most models.",
  },
  {
    icon: Zap,
    name: "Warp Charge Repair",
    description: "Warp Charge 80W, SUPERVOOC 100W, and all fast charging port diagnosis and repair.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Hasselblad-tuned camera repairs on OnePlus flagships. Front and rear camera replacements for all models.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Fix stereo speakers, earpieces, and Dolby Atmos audio systems on OnePlus devices.",
  },
  {
    icon: Fingerprint,
    name: "Fingerprint Sensor",
    description: "In-display fingerprint sensor repairs and calibration for secure, responsive unlocking.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Award,
    title: "OnePlus Experts in Winnipeg",
    description: "Specialized knowledge of OnePlus devices including alert slider, Warp Charge, and Hasselblad cameras.",
  },
  {
    icon: Package,
    title: "Quality Parts Sourced",
    description: "We maintain supplier relationships for OnePlus parts. Most available within 1-2 days for all models.",
  },
  {
    icon: Zap,
    title: "Fast Charging Specialists",
    description: "We diagnose and repair Warp Charge, SUPERVOOC, and all fast charging systems.",
  },
  {
    icon: Award,
    title: "Warranty on Every Repair",
    description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "OnePlus Flagship",
    models: ["OnePlus 13", "OnePlus 13R", "OnePlus 12", "OnePlus 12R", "OnePlus 11", "OnePlus 10 Pro", "OnePlus 10T", "OnePlus 9 Pro", "OnePlus 9"],
    description: "Premium OnePlus phones with Hasselblad cameras. AMOLED screen replacements and Warp Charge repair.",
  },
  {
    title: "OnePlus Nord Series",
    models: ["Nord CE 3 Lite", "Nord CE 2", "Nord CE", "Nord N30", "Nord N20", "Nord 2T", "Nord 2", "Nord N10", "Nord"],
    description: "Popular mid-range Nord lineup. Affordable screen and battery repairs for all Nord generations.",
  },
  {
    title: "OnePlus Open & Pad",
    models: ["OnePlus Open", "OnePlus Pad Pro", "OnePlus Pad 2"],
    description: "Foldable and tablet repairs. Complex fold repairs and large screen replacements.",
  },
  {
    title: "Classic OnePlus",
    models: ["OnePlus 8T", "OnePlus 8 Pro", "OnePlus 7T Pro", "OnePlus 7 Pro", "OnePlus 6T", "OnePlus 6", "OnePlus 5T"],
    description: "Legacy OnePlus devices. Screen, battery, and charging port repairs.",
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
    question: "Do you repair OnePlus phones in Winnipeg?",
    answer: "Yes! We're one of the few repair shops in Winnipeg that specializes in OnePlus devices. No need to ship your phone elsewhere.",
  },
  {
    question: "How long does OnePlus screen repair take in Winnipeg?",
    answer: "Most OnePlus screen replacements are completed same-day at our Winnipeg locations, typically within 1-2 hours once parts are available.",
  },
  {
    question: "Can you fix OnePlus Warp Charge issues?",
    answer: "Yes, we diagnose and repair Warp Charge, SUPERVOOC, and all fast charging problems including port replacement and cable testing.",
  },
  {
    question: "Do you repair OnePlus Open foldable?",
    answer: "Yes, we service the OnePlus Open including inner/outer screen repairs, hinge issues, and component replacements at our Winnipeg locations.",
  },
  {
    question: "Are OnePlus parts available in Winnipeg?",
    answer: "We maintain supplier relationships for OnePlus parts. Common flagship and Nord parts are often in stock; less common models may take 1-2 days.",
  },
];

const SERVICE_AREA_NOTE = "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online.";

const OnePlusRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="OnePlus Phone Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab"
      metaDescription="Premium OnePlus repair in Winnipeg. Screen replacement, Warp Charge port, battery repair for OnePlus 12, 11, Nord & Open. Expert same-day service."
      canonicalUrl="https://mobiletechlab.ca/repair/oneplus"
      slug="oneplus"
      deviceName="OnePlus"
      tagline="OnePlus Phone Repair in Winnipeg"
      heroDescription="From the flagship OnePlus 13 to the innovative OnePlus Open foldable, we provide expert repairs for all OnePlus devices in Winnipeg. Warp Charge issues, screen damage, battery problems – we're your local OnePlus specialists."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all OnePlus models including flagship, Nord series, and the OnePlus Open foldable. As Winnipeg's OnePlus specialists, we service models that other shops turn away."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote={SERVICE_AREA_NOTE}
    />
  );
};

export default OnePlusRepair;
