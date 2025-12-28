import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Lightbulb,
  Volume2,
  Fingerprint
} from "lucide-react";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace cracked Nothing AMOLED displays while preserving the unique design.",
  },
  {
    icon: Lightbulb,
    name: "Glyph Interface Repair",
    description: "Fix LED Glyph lighting issues unique to Nothing phones.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore battery life to your Nothing Phone.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Fix USB-C charging and wireless charging issues.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Repair stereo speakers for clear audio.",
  },
  {
    icon: Fingerprint,
    name: "Fingerprint Sensor",
    description: "Repair in-display fingerprint sensors.",
  },
];

const MODELS = [
  // Nothing Phone Series
  "Nothing Phone (2a) Plus", "Nothing Phone (2a)",
  "Nothing Phone (2)", "Nothing Phone (1)",
  // CMF by Nothing
  "CMF Phone 1",
  // Nothing Ear
  "Nothing Ear (2)", "Nothing Ear (1)", "Nothing Ear Stick",
];

const FAQS = [
  {
    question: "Can you fix the Glyph interface lights?",
    answer: "Yes! We can diagnose and repair the unique LED Glyph lighting system on Nothing phones if individual LEDs or the controller has issues.",
  },
  {
    question: "Are Nothing phone parts available?",
    answer: "As a newer brand, some parts require sourcing time. We can typically obtain Nothing parts within 2-5 business days.",
  },
  {
    question: "Is Nothing a good brand?",
    answer: "Nothing has gained popularity for its unique design and clean software. The phones are well-built and definitely worth repairing.",
  },
  {
    question: "Do you repair CMF phones?",
    answer: "Yes! CMF by Nothing is the company's sub-brand, and we service the CMF Phone 1 as well.",
  },
  {
    question: "How long does Nothing Phone repair take?",
    answer: "If parts are in stock, repairs take 1-2 hours. Part sourcing may add 2-5 days for this newer brand.",
  },
];

const NothingRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Nothing Phone Repair Winnipeg | Glyph & Screen Fix | Mobile Tech Lab"
      metaDescription="Nothing Phone repair in Winnipeg. Screen, Glyph interface, battery repair for Nothing Phone (2), Phone (1) & CMF devices. New brand expertise."
      deviceName="Nothing Phone"
      tagline="Nothing Phone Specialists in Winnipeg"
      heroDescription="Got a Nothing Phone with a cracked screen or Glyph interface issues? We're equipped to handle repairs on Carl Pei's innovative devices, preserving their unique transparent design."
      services={SERVICES}
      models={MODELS}
      modelsDescription="We service all Nothing devices including Nothing Phone (1), (2), (2a) and CMF Phone 1."
      faqs={FAQS}
    />
  );
};

export default NothingRepair;
