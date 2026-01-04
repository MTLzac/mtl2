import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Droplets,
  Award,
  Package,
  Shield,
  Film
} from "lucide-react";
import heroImage from "@/assets/hero-sony-xperia.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "4K OLED and HDR display replacements for Xperia 1, 5, and 10 series. Restore stunning clarity and 120Hz refresh rates.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore full-day battery life to your Sony Xperia. Same-day replacement for most models.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "USB-C charging port diagnosis and repair for all Xperia devices.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Sony Alpha-engineered camera repairs. ZEISS optics and pro-grade sensor replacements for all Xperia models.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Front-facing stereo speaker repairs and audio component replacements on Xperia devices.",
  },
  {
    icon: Droplets,
    name: "Water Damage Repair",
    description: "IP68-rated Xperia water damage diagnosis and repair. Component cleaning and replacement.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Award,
    title: "Xperia Specialists in Winnipeg",
    description: "One of the few shops servicing Sony Xperia devices. We understand 4K displays and pro camera systems.",
  },
  {
    icon: Package,
    title: "Parts We Can Source",
    description: "We maintain supplier relationships for Xperia parts. Most available within 3-5 days for all series.",
  },
  {
    icon: Film,
    title: "Pro Camera Experts",
    description: "We service Sony Alpha-derived camera systems and ZEISS optics on Xperia Pro and flagship devices.",
  },
  {
    icon: Award,
    title: "Industry-Leading Warranties",
    description: "Lifetime warranty on screen repairs. 90-day warranty on battery replacements. Quality parts that meet OEM specifications.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "Xperia 1 Series",
    models: ["Xperia 1 VI", "Xperia 1 V", "Xperia 1 IV", "Xperia 1 III", "Xperia 1 II"],
    description: "Flagship 4K OLED devices with pro cameras. Screen, battery, and camera repairs.",
  },
  {
    title: "Xperia 5 Series",
    models: ["Xperia 5 V", "Xperia 5 IV", "Xperia 5 III", "Xperia 5 II"],
    description: "Compact flagship lineup. All repairs for the pocket-friendly premium series.",
  },
  {
    title: "Xperia 10 Series",
    models: ["Xperia 10 VI", "Xperia 10 V", "Xperia 10 IV", "Xperia 10 III", "Xperia 10 II"],
    description: "Mid-range Xperia devices. Affordable screen and battery repairs.",
  },
  {
    title: "Xperia Pro & Legacy",
    models: ["Xperia Pro-I", "Xperia Pro", "Xperia XZ3", "Xperia XZ2", "Xperia XZ Premium"],
    description: "Professional and legacy Xperia models. Specialized repairs for unique devices.",
  },
];

const MODELS = [
  // Xperia 1 Series (Flagship)
  "Sony Xperia 1 VI", "Sony Xperia 1 V", "Sony Xperia 1 IV", "Sony Xperia 1 III", "Sony Xperia 1 II",
  // Xperia 5 Series (Compact Flagship)
  "Sony Xperia 5 V", "Sony Xperia 5 IV", "Sony Xperia 5 III", "Sony Xperia 5 II",
  // Xperia 10 Series (Mid-range)
  "Sony Xperia 10 VI", "Sony Xperia 10 V", "Sony Xperia 10 IV", "Sony Xperia 10 III", "Sony Xperia 10 II",
  // Xperia Pro Series
  "Sony Xperia Pro-I", "Sony Xperia Pro",
  // Older Models
  "Sony Xperia XZ3", "Sony Xperia XZ2", "Sony Xperia XZ Premium", "Sony Xperia XZ1", "Sony Xperia XA2",
];

const FAQS = [
  {
    question: "Do you repair Sony Xperia phones in Winnipeg?",
    answer: "Yes! We're one of the few repair shops in Winnipeg that specializes in Sony Xperia devices. No need to ship your phone elsewhere.",
  },
  {
    question: "Are Sony Xperia parts available in Winnipeg?",
    answer: "We maintain supplier relationships for Xperia parts. Most parts available within 3-5 days for 1, 5, and 10 series devices.",
  },
  {
    question: "Can you replace 4K Xperia screens?",
    answer: "Yes, we replace the high-resolution 4K OLED displays on Xperia 1 series devices at our Winnipeg locations.",
  },
  {
    question: "How long does Xperia screen repair take in Winnipeg?",
    answer: "Most Xperia screen replacements are completed same-day once parts are available, typically within 1-2 hours.",
  },
  {
    question: "Is Xperia repair worth it?",
    answer: "Xperia phones are premium devices with unique features like 4K displays and pro camera systems. Repair is often worthwhile for these quality devices.",
  },
];

const SERVICE_AREA_NOTE = "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online.";

const SonyXperiaRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Sony Xperia Repair Winnipeg | Screen & Camera Fix | Mobile Tech Lab"
      metaDescription="Sony Xperia repair in Winnipeg. Screen, battery, camera repair for Xperia 1, 5, 10 series & Pro models. Premium device specialists."
      deviceName="Sony Xperia"
      tagline="Sony Xperia Phone Repair in Winnipeg, MB"
      heroDescription="Own a Sony Xperia? We understand these premium devices with their 4K displays and pro-grade cameras. Expert repairs for all Xperia models in Winnipeg."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Sony Xperia devices including the flagship 1 series, compact 5 series, and mid-range 10 series. As Winnipeg's Xperia specialists, we service models that other shops turn away."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote={SERVICE_AREA_NOTE}
    />
  );
};

export default SonyXperiaRepair;
