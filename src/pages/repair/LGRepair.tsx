import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Power,
  Award,
  Package,
  Shield,
  Wrench
} from "lucide-react";
import heroImage from "@/assets/hero-lg.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "OLED and LCD display replacements for LG Velvet, V series, G series, and Stylo devices. Restore clarity and touch response.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore full-day battery life to your LG phone. Same-day replacement for most models.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "USB-C and micro USB charging port diagnosis and repair for all LG devices.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Front, rear, and wide-angle camera replacements for all LG models including V and G series.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Fix speakers, earpieces, and Boombox audio systems on LG devices.",
  },
  {
    icon: Power,
    name: "Power Button Repair",
    description: "Repair stuck or non-responsive power and volume buttons on all LG models.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Award,
    title: "LG Legacy Specialists",
    description: "We continue to support LG devices long after others have stopped. Your LG phone deserves expert care.",
  },
  {
    icon: Package,
    title: "Parts Still Available",
    description: "We maintain supplier relationships for LG parts that others can't source. Stock available for popular models.",
  },
  {
    icon: Wrench,
    title: "Dual Screen & Wing Experts",
    description: "We repair unique LG innovations including Dual Screen cases and the LG Wing swivel mechanism.",
  },
  {
    icon: Award,
    title: "Industry-Leading Warranties",
    description: "Lifetime warranty on screen repairs. 90-day warranty on battery replacements. Quality parts that meet OEM specifications.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "LG Velvet & Wing",
    models: ["LG Velvet 5G", "LG Wing 5G"],
    description: "LG's innovative final flagships. Screen, swivel mechanism, and Dual Screen case repairs.",
  },
  {
    title: "LG V Series",
    models: ["V60 ThinQ", "V50 ThinQ", "V40 ThinQ", "V35 ThinQ", "V30", "V20"],
    description: "Premium V series with Quad DAC audio. Screen, battery, and audio component repairs.",
  },
  {
    title: "LG G Series",
    models: ["G8X ThinQ", "G8 ThinQ", "G7 ThinQ", "G6", "G5", "G4", "G3"],
    description: "Classic G series flagship lineup. Screen, battery, and charging port repairs.",
  },
  {
    title: "LG Stylo & K Series",
    models: ["Stylo 6", "Stylo 5", "Stylo 4", "K92", "K71", "K62", "K51", "K42"],
    description: "Budget-friendly LG devices. Affordable screen and battery repairs.",
  },
];

const MODELS = [
  // LG Velvet & Wing
  "LG Velvet 5G", "LG Wing 5G",
  // LG V Series
  "LG V60 ThinQ", "LG V50 ThinQ", "LG V40 ThinQ", "LG V35 ThinQ", "LG V30",
  // LG G Series
  "LG G8X ThinQ", "LG G8 ThinQ", "LG G7 ThinQ", "LG G6", "LG G5",
  // LG Stylo Series
  "LG Stylo 6", "LG Stylo 5", "LG Stylo 4", "LG Stylo 3",
  // LG K Series
  "LG K92", "LG K71", "LG K62", "LG K52", "LG K51", "LG K42", "LG K41S",
  // LG Q Series
  "LG Q70", "LG Q60", "LG Q Stylus",
  // Other LG Models
  "LG Aristo", "LG Phoenix", "LG Rebel", "LG Tribute",
];

const FAQS = [
  {
    question: "Do you repair LG phones in Winnipeg?",
    answer: "Yes! We're one of the few repair shops in Winnipeg still specializing in LG devices. No need to ship your phone elsewhere.",
  },
  {
    question: "Can you still get LG phone parts in Winnipeg?",
    answer: "We maintain supplier relationships for LG parts. Popular Velvet, V series, and Stylo parts are often in stock; less common models may take 2-3 days.",
  },
  {
    question: "How long does LG screen repair take in Winnipeg?",
    answer: "Most LG screen replacements are completed same-day at our Winnipeg locations, typically within 1-2 hours once parts are available.",
  },
  {
    question: "Is it worth repairing my LG phone?",
    answer: "We'll provide an honest assessment. Many LG phones are well-built and worth repairing, especially V series and G series flagships.",
  },
  {
    question: "Can you repair LG Dual Screen accessories?",
    answer: "Yes, we repair LG Dual Screen cases and the unique LG Wing swivel mechanism at our Winnipeg locations.",
  },
];

const SERVICE_AREA_NOTE = "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online.";

const LGRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="LG Phone Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab"
      metaDescription="LG phone repair specialists in Winnipeg. Screen, battery, charging port repair for LG Velvet, V series, G series, Stylo & all legacy models. We keep your LG running!"
      canonicalUrl="https://mobiletechlab.ca/repair/lg"
      deviceName="LG"
      tagline="LG Phone Repair in Winnipeg, MB"
      heroDescription="Even though LG exited the smartphone market, we continue to support all LG devices in Winnipeg. From the innovative LG Wing to the reliable Stylo series, we keep your LG phone running strong."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all LG smartphone models. As Winnipeg's LG legacy support specialists, we maintain parts for older devices others won't service."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote={SERVICE_AREA_NOTE}
    />
  );
};

export default LGRepair;
