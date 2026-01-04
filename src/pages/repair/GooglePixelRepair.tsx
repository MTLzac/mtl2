import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Fingerprint,
  Smartphone,
  Zap,
  Shield,
  DollarSign,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-google-pixel.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Pixel OLED and LTPO display replacements. Smooth 120Hz scrolling restored for Pixel 7 Pro, 8 Pro, and 9 Pro models.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Pixel batteries degrade after 2-3 years. Same-day replacement to restore all-day Adaptive Battery life.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "USB-C port repair for all Pixel phones. Fix charging issues, loose connections, and data transfer problems.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Restore Pixel's renowned computational photography. Rear camera, ultrawide, telephoto, and front camera repairs.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Fix muffled audio, crackling speakers, or dead earpieces. Crystal-clear sound for calls and Google Assistant.",
  },
  {
    icon: Fingerprint,
    name: "Fingerprint Sensor",
    description: "Under-display fingerprint sensor not working? We repair and calibrate optical sensors on Pixel 6 and newer.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Smartphone,
    title: "Pure Android Experts",
    description: "We understand Pixel's unique hardware and software integration. Tensor chip diagnostics and repair expertise.",
  },
  {
    icon: Zap,
    title: "Same-Day Pixel Repairs",
    description: "Most Pixel screen and battery repairs completed within 2 hours. Walk-ins welcome at both locations.",
  },
  {
    icon: Award,
    title: "Industry-Leading Warranties",
    description: "Lifetime warranty on screen repairs. 90-day warranty on battery replacements. Quality parts that meet OEM specifications.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Free diagnostics and upfront quotes. No surprises—know your Pixel repair cost before we start.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "Pixel 9 Series",
    models: ["Pixel 9 Pro XL", "Pixel 9 Pro", "Pixel 9", "Pixel 9 Pro Fold"],
    description: "Latest generation with Tensor G4. Screen, battery, and camera repairs for all Pixel 9 models.",
  },
  {
    title: "Pixel 8 Series",
    models: ["Pixel 8 Pro", "Pixel 8", "Pixel 8a"],
    description: "Tensor G3 powered devices. LTPO display replacements and battery service available.",
  },
  {
    title: "Pixel 7 Series",
    models: ["Pixel 7 Pro", "Pixel 7", "Pixel 7a"],
    description: "First-gen Tensor G2 phones. Full repair support for screens, batteries, and components.",
  },
  {
    title: "Pixel Fold & Legacy",
    models: ["Pixel Fold", "Pixel 6 Pro", "Pixel 6", "Pixel 6a", "Pixel 5", "Pixel 5a", "Pixel 4 XL", "Pixel 4", "Pixel 4a", "Pixel 3 XL", "Pixel 3", "Pixel 3a"],
    description: "Foldable specialists plus continued support for older Pixel generations.",
  },
];

const MODELS = [
  "Pixel 9 Pro XL", "Pixel 9 Pro", "Pixel 9", "Pixel 9 Pro Fold",
  "Pixel 8 Pro", "Pixel 8", "Pixel 8a",
  "Pixel 7 Pro", "Pixel 7", "Pixel 7a",
  "Pixel 6 Pro", "Pixel 6", "Pixel 6a",
  "Pixel Fold",
  "Pixel 5", "Pixel 5a",
  "Pixel 4 XL", "Pixel 4", "Pixel 4a", "Pixel 4a 5G",
  "Pixel 3 XL", "Pixel 3", "Pixel 3a XL", "Pixel 3a",
];

const FAQS = [
  {
    question: "How long does Google Pixel screen replacement take?",
    answer: "Most Pixel screen replacements are completed within 1-2 hours. Pixel Fold and Pixel 9 Pro Fold devices may require 2-4 hours due to their complex folding display assemblies.",
  },
  {
    question: "Do you repair Pixel Fold devices?",
    answer: "Yes! We specialize in Pixel Fold and Pixel 9 Pro Fold repairs including inner screen, outer screen, hinge mechanism, and flex cable issues. Few shops in Winnipeg work on foldables—we have the tools and experience.",
  },
  {
    question: "Will my Pixel still receive software updates after repair?",
    answer: "Absolutely. Your Pixel will continue receiving all Google software updates, security patches, and Pixel Feature Drops after our repair.",
  },
  {
    question: "How much does Pixel repair cost in Winnipeg?",
    answer: "Costs vary by model and repair type. Pixel a-series repairs are typically more affordable, while Pro models and Fold devices cost more due to premium components. Use our free quote tool for an accurate estimate.",
  },
  {
    question: "Do Pixel repairs affect camera quality or AI features?",
    answer: "No. Our repairs don't affect your Pixel's computational photography, Magic Eraser, or other AI features. For camera repairs, we use quality parts to maintain photo quality.",
  },
];

const SERVICE_AREA_NOTE = "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Walk-ins welcome or book online.";

const GooglePixelRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Google Pixel Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab"
      metaDescription="Professional Google Pixel repair in Winnipeg. Screen replacement, battery, charging port repair for Pixel 9, 8, 7, 6, Fold & all models. Same-day service available."
      deviceName="Google Pixel"
      tagline="Google Pixel Repair Experts in Winnipeg, MB"
      heroDescription="From the latest Pixel 9 Pro to Pixel Fold devices, we specialize in Google's flagship phone repairs. Cracked OLED screens, degraded batteries, camera issues, and charging problems—all fixed with quality parts and backed by our repair warranty."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We service all Google Pixel generations from the newest Pixel 9 series to legacy Pixel 3 devices."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote={SERVICE_AREA_NOTE}
    />
  );
};

export default GooglePixelRepair;
