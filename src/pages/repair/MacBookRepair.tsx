import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  Monitor, 
  Battery, 
  Keyboard, 
  HardDrive, 
  Droplets, 
  Plug,
  Zap,
  Shield,
  Clock,
  Cpu,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-macbook.png";

const SERVICES = [
  {
    icon: Monitor,
    name: "Screen Replacement",
    description: "Cracked Retina display or dead pixels? We replace MacBook Air and Pro screens with high-quality LCD and LED panels.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "MacBook battery swelling or not holding charge? Same-day battery replacement for most models.",
  },
  {
    icon: Keyboard,
    name: "Keyboard Replacement",
    description: "Sticky butterfly keys or unresponsive Magic Keyboard? Complete keyboard replacement for all MacBook generations.",
  },
  {
    icon: HardDrive,
    name: "Data Recovery",
    description: "Lost files from a failed SSD or corrupted drive? Our technicians recover data from damaged MacBooks.",
  },
  {
    icon: Droplets,
    name: "Liquid Damage Repair",
    description: "Coffee or water spill? We specialize in liquid damage restoration including logic board cleaning and component repair.",
  },
  {
    icon: Plug,
    name: "Charging Issues",
    description: "MacBook not charging? We diagnose and repair MagSafe, USB-C ports, battery connectors, and power issues.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Cpu,
    title: "M1, M2 & M3 Specialists",
    description: "Expert repairs for Apple Silicon MacBooks. We service the latest M3 chips and all Intel models.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Most MacBook repairs completed in 1-3 days. Rush service available for urgent repairs.",
  },
  {
    icon: Award,
    title: "Industry-Leading Warranties",
    description: "Lifetime warranty on screen repairs. 90-day warranty on battery replacements. Quality parts that meet OEM specifications.",
  },
  {
    icon: Clock,
    title: "Free Diagnostics",
    description: "Not sure what's wrong? We provide free diagnostics to identify the issue before any repair.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "MacBook Air",
    models: ["MacBook Air M3 (2024)", "MacBook Air M2 (2022)", "MacBook Air M1 (2020)", "MacBook Air Retina (2018-2020)", "MacBook Air (2015-2017)"],
    description: "Ultralight MacBook repairs. Screen, battery, keyboard, and logic board service for all Air generations.",
  },
  {
    title: "MacBook Pro 14\" & 16\"",
    models: ["MacBook Pro 16\" M3 (2023)", "MacBook Pro 14\" M3 (2023)", "MacBook Pro 16\" M2 (2023)", "MacBook Pro 14\" M2 (2023)", "MacBook Pro 16\" M1 (2021)", "MacBook Pro 14\" M1 (2021)", "MacBook Pro 16\" (2019)", "MacBook Pro 15\" (2015-2019)"],
    description: "Pro-level MacBook repairs. Liquid XDR display replacements, battery service, and keyboard repairs.",
  },
  {
    title: "MacBook Pro 13\"",
    models: ["MacBook Pro 13\" M2 (2022)", "MacBook Pro 13\" M1 (2020)", "MacBook Pro 13\" (2016-2020)"],
    description: "Compact Pro repairs. Touch Bar, Retina display, and butterfly keyboard fixes for 13-inch models.",
  },
  {
    title: "MacBook 12\"",
    models: ["MacBook 12\" (2015)", "MacBook 12\" (2016)", "MacBook 12\" (2017)"],
    description: "Retina MacBook repairs. Screen, battery, and USB-C port service for the ultra-portable 12-inch model.",
  },
];

const MODELS = [
  "MacBook Air M3 (2024)",
  "MacBook Air M2 (2022)",
  "MacBook Air M1 (2020)",
  "MacBook Air (Retina, 2018-2020)",
  "MacBook Air (2015-2017)",
  "MacBook Pro 16\" M3 (2023)",
  "MacBook Pro 14\" M3 (2023)",
  "MacBook Pro 16\" M2 (2023)",
  "MacBook Pro 14\" M2 (2023)",
  "MacBook Pro 13\" M2 (2022)",
  "MacBook Pro 16\" M1 (2021)",
  "MacBook Pro 14\" M1 (2021)",
  "MacBook Pro 13\" M1 (2020)",
  "MacBook Pro 16\" (2019)",
  "MacBook Pro 15\" (2015-2019)",
  "MacBook Pro 13\" (2016-2020)",
  "MacBook 12\" (2015-2017)",
];

const FAQS = [
  {
    question: "How long does MacBook screen replacement take in Winnipeg?",
    answer: "Most MacBook screen replacements at our Winnipeg locations are completed within 1-3 business days, depending on the model and parts availability.",
  },
  {
    question: "Can you recover data from a water-damaged MacBook?",
    answer: "Yes, in many cases we can recover data from liquid-damaged MacBooks. Success depends on the extent of damage and how quickly the device is brought to our Winnipeg shop.",
  },
  {
    question: "Do you repair MacBooks with Apple Silicon (M1, M2, M3)?",
    answer: "Absolutely! We're experienced with Apple Silicon MacBooks including M1, M2, and the latest M3 chips. Screen, battery, and keyboard repairs available.",
  },
  {
    question: "How much does MacBook battery replacement cost in Winnipeg?",
    answer: "MacBook battery replacement costs vary by model. Contact our Winnipeg locations for a free quote specific to your MacBook Air or Pro model.",
  },
  {
    question: "Is my data safe during MacBook repair?",
    answer: "We prioritize data security. Your files remain untouched during hardware repairs. We recommend backing up before any service as a precaution.",
  },
];

const SERVICE_AREA_NOTE = "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online.";

const MacBookRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="MacBook Repair Services | Expert Mac Repairs"
      metaDescription="Professional MacBook repair services including screen replacement, battery replacement, keyboard repair, liquid damage restoration, and data recovery. Fast turnaround and quality parts."
      canonicalUrl="https://mobiletechlab.ca/repair/macbook"
      deviceName="MacBook"
      tagline="Expert MacBook Repair Services"
      heroDescription="From cracked Retina displays to liquid damage and keyboard issues, we repair all MacBook Air and Pro models in Winnipeg. Apple Silicon specialists with fast turnaround and quality parts. Need iPhone or iPad repair? We're Apple device experts."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all MacBook models from Intel-based machines to the latest M3 Apple Silicon. Air, Pro, and 12-inch MacBooks all serviced."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote={SERVICE_AREA_NOTE}
    />
  );
};

export default MacBookRepair;
