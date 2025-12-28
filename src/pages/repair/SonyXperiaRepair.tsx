import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Droplets
} from "lucide-react";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace cracked 4K and OLED displays on Xperia devices.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore battery life to your Sony Xperia.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Fix USB-C charging port issues.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Repair Sony's renowned camera systems.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Fix front-facing stereo speakers and audio issues.",
  },
  {
    icon: Droplets,
    name: "Water Damage Repair",
    description: "Repair water-damaged Xperia devices.",
  },
];

const MODELS = [
  // Xperia 1 Series (Flagship)
  "Sony Xperia 1 VI", "Sony Xperia 1 V", "Sony Xperia 1 IV", "Sony Xperia 1 III",
  // Xperia 5 Series (Compact Flagship)
  "Sony Xperia 5 V", "Sony Xperia 5 IV", "Sony Xperia 5 III",
  // Xperia 10 Series (Mid-range)
  "Sony Xperia 10 VI", "Sony Xperia 10 V", "Sony Xperia 10 IV", "Sony Xperia 10 III",
  // Xperia Pro Series
  "Sony Xperia Pro-I", "Sony Xperia Pro",
  // Older Models
  "Sony Xperia XZ3", "Sony Xperia XZ2", "Sony Xperia XZ Premium",
];

const FAQS = [
  {
    question: "Do you repair Sony Xperia phones?",
    answer: "Yes! We're one of the few shops in Winnipeg that services Sony Xperia devices, from the flagship 1 series to the 10 series.",
  },
  {
    question: "Are Sony Xperia parts available?",
    answer: "We can source parts for most Xperia models. As a niche brand, some parts may take 3-5 days to obtain.",
  },
  {
    question: "Can you replace 4K Xperia screens?",
    answer: "Yes, we can replace the high-resolution 4K OLED displays on Xperia 1 series devices.",
  },
  {
    question: "Is Xperia repair worth it?",
    answer: "Xperia phones are premium devices with unique features like 4K displays and pro camera systems. Repair is often worthwhile.",
  },
  {
    question: "How long does Xperia repair take?",
    answer: "Most repairs take 1-2 hours if parts are in stock. Specialized parts may add 3-5 days.",
  },
];

const SonyXperiaRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Sony Xperia Repair Winnipeg | Screen & Camera Fix | Mobile Tech Lab"
      metaDescription="Sony Xperia repair in Winnipeg. Screen, battery, camera repair for Xperia 1, 5, 10 series & Pro models. Premium device specialists."
      deviceName="Sony Xperia"
      tagline="Sony Xperia Specialists in Winnipeg"
      heroDescription="Own a Sony Xperia? We understand these premium devices with their 4K displays and pro-grade cameras. Expert repairs for all Xperia models."
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Sony Xperia devices including the flagship 1 series, compact 5 series, and mid-range 10 series."
      faqs={FAQS}
    />
  );
};

export default SonyXperiaRepair;
