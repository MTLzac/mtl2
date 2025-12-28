import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Power
} from "lucide-react";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace cracked or damaged LG displays with quality parts.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore battery life to your LG phone with a new battery.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Fix USB-C or micro USB charging port issues.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Repair front, rear, and wide-angle cameras on LG devices.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Fix speakers, earpieces, and audio quality issues.",
  },
  {
    icon: Power,
    name: "Power Button Repair",
    description: "Repair stuck or non-responsive power and volume buttons.",
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
    question: "Does LG still make phones?",
    answer: "LG exited the smartphone market in 2021, but we continue to support and repair all LG devices. We maintain parts inventory for legacy device support.",
  },
  {
    question: "Can you still get LG phone parts?",
    answer: "Yes, we stock parts for popular LG models. While some parts are becoming harder to find, we can source components for most LG repairs.",
  },
  {
    question: "Is it worth repairing my LG phone?",
    answer: "It depends on the repair cost vs. device value. We'll give you an honest assessment and quote so you can make an informed decision.",
  },
  {
    question: "How long do LG repairs take?",
    answer: "Most LG repairs are completed same-day, typically within 1-2 hours if we have parts in stock.",
  },
  {
    question: "Can you repair LG dual screen accessories?",
    answer: "Yes, we can repair LG Dual Screen cases and the unique LG Wing's swivel mechanism.",
  },
];

const LGRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="LG Phone Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab"
      metaDescription="LG phone repair specialists in Winnipeg. Screen, battery, charging port repair for LG Velvet, V series, G series, Stylo & all legacy models. We keep your LG running!"
      deviceName="LG"
      tagline="Legacy LG Device Support in Winnipeg"
      heroDescription="Even though LG exited the smartphone market, we continue to support all LG devices. From the unique LG Wing to the reliable Stylo series, we keep your LG phone running strong."
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all LG smartphone models. As an LG legacy support specialist, we maintain parts for older devices others won't service."
      faqs={FAQS}
    />
  );
};

export default LGRepair;
