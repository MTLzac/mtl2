import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { Smartphone, Battery, Zap, Volume2, Droplets, Fingerprint, Monitor, Wifi } from "lucide-react";
import heroImage from "@/assets/hero-amazon-kindle.png";

const SERVICES = [
  {
    icon: Monitor,
    name: "Screen Replacement",
    description: "Cracked or unresponsive screen? We replace E-Ink and LCD displays on all Kindle and Fire models.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore your device's battery life with a genuine replacement for extended reading or streaming.",
  },
  {
    icon: Zap,
    name: "Charging Port Repair",
    description: "Fix loose or damaged USB-C and micro-USB charging ports for reliable power connections.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Restore clear audio on your Fire tablet for videos, music, and Alexa voice responses.",
  },
  {
    icon: Droplets,
    name: "Water Damage Recovery",
    description: "Accidentally exposed to liquid? Our specialists can assess and recover water-damaged devices.",
  },
  {
    icon: Wifi,
    name: "Wi-Fi & Connectivity Issues",
    description: "Resolve wireless connectivity problems so you can sync your library and stream content reliably.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Smartphone,
    title: "Amazon Device Experts",
    description: "We specialize in Kindle e-readers and Fire tablets with deep knowledge of Amazon's ecosystem.",
  },
  {
    icon: Monitor,
    title: "E-Ink Display Specialists",
    description: "Expertise in delicate E-Ink screen technology unique to Kindle devices.",
  },
  {
    icon: Battery,
    title: "Extended Battery Life",
    description: "Quality battery replacements to restore weeks of reading time on a single charge.",
  },
  {
    icon: Fingerprint,
    title: "90-Day Warranty",
    description: "All repairs backed by our industry-leading warranty for your peace of mind.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "Kindle E-Readers",
    models: ["Kindle (11th Gen)", "Kindle (10th Gen)", "Kindle Paperwhite (11th Gen)", "Kindle Paperwhite (10th Gen)", "Kindle Paperwhite Signature Edition", "Kindle Oasis (10th Gen)", "Kindle Oasis (9th Gen)", "Kindle Scribe"],
    description: "E-Ink display repairs and battery replacements",
  },
  {
    title: "Fire Tablets",
    models: ["Fire HD 10 (2023)", "Fire HD 10 (2021)", "Fire HD 10 Plus", "Fire HD 8 (2022)", "Fire HD 8 (2020)", "Fire HD 8 Plus", "Fire 7 (2022)", "Fire 7 (2019)", "Fire Max 11"],
    description: "LCD screen and hardware repairs",
  },
  {
    title: "Kids Editions",
    models: ["Kindle Kids (2022)", "Fire HD 10 Kids", "Fire HD 10 Kids Pro", "Fire HD 8 Kids", "Fire HD 8 Kids Pro", "Fire 7 Kids"],
    description: "Kid-proof case and internal repairs",
  },
];

const MODELS = [
  // Kindle E-Readers
  "Kindle (11th Gen)",
  "Kindle (10th Gen)",
  "Kindle Paperwhite (11th Gen)",
  "Kindle Paperwhite (10th Gen)",
  "Kindle Paperwhite Signature Edition",
  "Kindle Oasis (10th Gen)",
  "Kindle Oasis (9th Gen)",
  "Kindle Scribe",
  // Fire Tablets
  "Fire HD 10 (2023)",
  "Fire HD 10 (2021)",
  "Fire HD 10 Plus",
  "Fire HD 8 (2022)",
  "Fire HD 8 (2020)",
  "Fire HD 8 Plus",
  "Fire 7 (2022)",
  "Fire 7 (2019)",
  "Fire Max 11",
  // Kids Editions
  "Kindle Kids (2022)",
  "Fire HD 10 Kids",
  "Fire HD 10 Kids Pro",
  "Fire HD 8 Kids",
  "Fire HD 8 Kids Pro",
  "Fire 7 Kids",
];

const FAQS = [
  {
    question: "Can you replace a cracked E-Ink screen on my Kindle?",
    answer: "Yes! E-Ink displays require specialized handling, and our technicians are experienced with these delicate screens. We can replace damaged E-Ink displays on most Kindle models.",
  },
  {
    question: "How long does a Kindle battery replacement take?",
    answer: "Most Kindle and Fire tablet battery replacements can be completed within 1-2 hours, depending on the model and parts availability.",
  },
  {
    question: "My Fire tablet won't charge. Can you fix it?",
    answer: "Absolutely. Charging port issues are common and we can repair or replace damaged USB ports on all Fire tablet models.",
  },
  {
    question: "Do you repair older Kindle models?",
    answer: "We service most Kindle and Fire models. Contact us with your specific device and we'll let you know if we can help.",
  },
  {
    question: "Will I lose my books and content after repair?",
    answer: "In most cases, your Amazon account content remains intact. However, we always recommend backing up any sideloaded content before bringing your device in for repair.",
  },
];

const AmazonKindleRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Amazon Kindle & Fire Tablet Repair Winnipeg | E-Reader Specialists"
      metaDescription="Expert Kindle e-reader and Fire tablet repair in Winnipeg. E-Ink screen replacement, battery service, charging port repair. Same-day service available."
      canonicalUrl="https://mobiletechlab.ca/repair/amazon-kindle"
      slug="amazon-kindle"
      deviceName="Amazon Kindle & Fire"
      tagline="Winnipeg's Kindle & Fire Tablet Repair Experts"
      heroDescription="From cracked E-Ink displays to dead batteries, we specialize in Amazon device repairs. Whether it's your beloved Kindle Paperwhite or your family's Fire tablet, we'll get it working like new."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Amazon Kindle e-readers and Fire tablets, including the latest generations and discontinued models."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote="Serving St. Vital, Thompson, and surrounding Manitoba communities"
    />
  );
};

export default AmazonKindleRepair;
