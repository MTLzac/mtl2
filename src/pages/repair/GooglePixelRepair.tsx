import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Fingerprint
} from "lucide-react";
import heroImage from "@/assets/hero-google-pixel.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Fix cracked or damaged Pixel screens with quality OLED replacements.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore your Pixel's all-day battery life with professional replacement.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Repair USB-C ports that won't charge or connect properly.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Fix Pixel's renowned camera system – front, rear, and telephoto lenses.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Restore crystal-clear audio for calls, media, and Google Assistant.",
  },
  {
    icon: Fingerprint,
    name: "Fingerprint Sensor",
    description: "Repair or replace malfunctioning under-display fingerprint sensors.",
  },
];

const MODELS = [
  // Pixel 9 Series
  "Pixel 9 Pro XL", "Pixel 9 Pro", "Pixel 9", "Pixel 9 Pro Fold",
  // Pixel 8 Series
  "Pixel 8 Pro", "Pixel 8", "Pixel 8a",
  // Pixel 7 Series
  "Pixel 7 Pro", "Pixel 7", "Pixel 7a",
  // Pixel 6 Series
  "Pixel 6 Pro", "Pixel 6", "Pixel 6a",
  // Pixel Fold
  "Pixel Fold",
  // Older Pixels
  "Pixel 5", "Pixel 5a",
  "Pixel 4 XL", "Pixel 4", "Pixel 4a", "Pixel 4a 5G",
  "Pixel 3 XL", "Pixel 3", "Pixel 3a XL", "Pixel 3a",
];

const FAQS = [
  {
    question: "How long does a Google Pixel screen repair take?",
    answer: "Most Pixel screen repairs are completed within 1-2 hours. The Pixel Fold and Pro Fold may require additional time due to their complex folding displays.",
  },
  {
    question: "Will my Pixel still get software updates after repair?",
    answer: "Yes! Your Pixel will continue to receive all Google software and security updates after our repair.",
  },
  {
    question: "Can you fix Pixel Fold devices?",
    answer: "Yes, we repair both the original Pixel Fold and the Pixel 9 Pro Fold, including screen replacements and hinge repairs.",
  },
  {
    question: "Do Pixel repairs affect the camera quality?",
    answer: "No. Our screen and component replacements don't affect your Pixel's camera performance. For camera repairs, we use quality parts to maintain photo quality.",
  },
  {
    question: "How much does Pixel repair cost in Winnipeg?",
    answer: "Costs vary by model and repair type. Contact us for a free quote specific to your Pixel device and issue.",
  },
];

const GooglePixelRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Google Pixel Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab"
      metaDescription="Professional Google Pixel repair in Winnipeg. Screen replacement, battery, charging port repair for Pixel 9, 8, 7, 6, Fold & all models. Same-day service available."
      deviceName="Google Pixel"
      tagline="Stock Android Specialists in Winnipeg"
      heroDescription="From the newest Pixel 9 Pro to classic Pixel devices, we provide expert repairs for Google's flagship phones. Cracked screens, battery issues, camera problems – we handle it all."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We service all Google Pixel generations including the latest Pixel 9 series and Pixel Fold devices."
      faqs={FAQS}
    />
  );
};

export default GooglePixelRepair;
