import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import {
  Smartphone,
  Battery,
  Zap,
  CircleDot,
  HardDrive,
  Award,
  Clock,
  Database,
  Shield
} from "lucide-react";
import heroImage from "@/assets/hero-ipod.png";

const SERVICES = [
  {
    icon: Smartphone,
    name: "Screen Replacement",
    description: "Cracked or unresponsive iPod display? We replace screens on all iPod models with quality parts. Parts availability for iPods varies by generation and model. As a discontinued product line, some parts may be limited, but repairs are often still possible after evaluating the specific device."
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "iPod not holding charge like it used to? We replace worn batteries to restore your iPod's battery life. Repair timing for iPods depends on the model and part availability, and we'll always confirm next steps after assessing the device."
  },
  {
    icon: Zap,
    name: "Charging Issues",
    description: "iPod won't charge or connect? We diagnose and fix charging port issues, dock connector problems, and more."
  },
  {
    icon: CircleDot,
    name: "Home Button Replacement",
    description: "Home button unresponsive or sticky? We repair and replace home buttons to restore full functionality."
  },
  {
    icon: HardDrive,
    name: "Data Recovery",
    description: "Lost access to your music and photos? We offer data recovery services to help retrieve your precious files from damaged iPods."
  }
];

const MODELS = [
  "iPod Touch (7th Gen)",
  "iPod Touch (6th Gen)",
  "iPod Touch (5th Gen)",
  "iPod Touch (4th Gen)",
  "iPod Touch (3rd Gen)",
  "iPod Touch (2nd Gen)",
  "iPod Touch (1st Gen)",
  "iPod Classic (7th Gen)",
  "iPod Classic (6th Gen)",
  "iPod Classic (5th Gen)",
  "iPod Nano (7th Gen)",
  "iPod Nano (6th Gen)",
  "iPod Nano (5th Gen)",
  "iPod Nano (4th Gen)",
  "iPod Nano (3rd Gen)",
  "iPod Nano (2nd Gen)",
  "iPod Nano (1st Gen)",
  "iPod Shuffle (4th Gen)",
  "iPod Shuffle (3rd Gen)",
  "iPod Shuffle (2nd Gen)",
  "iPod Shuffle (1st Gen)",
  "iPod Mini (2nd Gen)",
  "iPod Mini (1st Gen)"
];

const ADVANTAGE_PILLARS = [
  {
    icon: Award,
    title: "Legacy Device Specialists",
    description: "Experts in discontinued Apple devices that others won't touch. Many customers choose to repair iPods to preserve music libraries, maintain compatibility with older vehicles or accessories, or restore devices with sentimental value.",
  },
  {
    icon: Database,
    title: "Data Recovery Experts",
    description: "Retrieve your music and photos from damaged or aging iPods. If a repair isn't practical, data recovery may still be possible depending on the device and condition.",
  },
  {
    icon: Clock,
    title: "Repair vs Replacement Options",
    description: "Because many iPod models are no longer manufactured, replacement options vary by model and availability. We'll help explain whether repair, replacement, or another option makes the most sense based on your device.",
  },
  {
    icon: Shield,
    title: "Warranty on Every Repair",
    description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs. Warranty coverage applies to the part repaired or replaced only and does not extend to unrelated components. If a function cannot be tested prior to repair, its operation cannot be guaranteed afterward.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "iPod Touch",
    models: ["iPod Touch (7th Gen)", "iPod Touch (6th Gen)", "iPod Touch (5th Gen)", "iPod Touch (4th Gen)", "iPod Touch (3rd Gen)", "iPod Touch (2nd Gen)", "iPod Touch (1st Gen)"],
    description: "All iPod Touch generations with touchscreen interface.",
  },
  {
    title: "iPod Classic",
    models: ["iPod Classic (7th Gen)", "iPod Classic (6th Gen)", "iPod Classic (5th Gen)"],
    description: "Click wheel iPods with high-capacity storage.",
  },
  {
    title: "iPod Nano",
    models: ["iPod Nano (7th Gen)", "iPod Nano (6th Gen)", "iPod Nano (5th Gen)", "iPod Nano (4th Gen)", "iPod Nano (3rd Gen)", "iPod Nano (2nd Gen)", "iPod Nano (1st Gen)"],
    description: "Compact click wheel and touchscreen models.",
  },
  {
    title: "iPod Shuffle & Mini",
    models: ["iPod Shuffle (4th Gen)", "iPod Shuffle (3rd Gen)", "iPod Shuffle (2nd Gen)", "iPod Shuffle (1st Gen)", "iPod Mini (2nd Gen)", "iPod Mini (1st Gen)"],
    description: "Ultra-compact and colorful iPod models.",
  },
];

const FAQS = [
  {
    question: "Do you still repair older iPod models?",
    answer: "Yes! We repair all generations of iPods including iPod Classic, iPod Touch, iPod Nano, iPod Shuffle, and iPod Mini. Even if Apple no longer supports your model, we can help."
  },
  {
    question: "Can you recover music from a broken iPod?",
    answer: "In many cases, yes. Our data recovery service can retrieve music, photos, and other files from damaged iPods. Success depends on the extent of the damage, but we'll give you an honest assessment."
  },
  {
    question: "How long does an iPod repair take?",
    answer: "Most iPod repairs are completed within 1-3 days depending on parts availability. Some common repairs like battery replacements can often be done same-day."
  },
  {
    question: "Is it worth repairing my old iPod?",
    answer: "Many people love their classic iPods for their dedicated music experience and large storage. If your iPod has sentimental value or you prefer a device without distractions, repair is often worth it."
  },
  {
    question: "Do you offer a warranty on iPod repairs?",
    answer: "Yes! Screen repair warranties vary by part quality tier (30 days to lifetime). Battery replacements come with a 90-day warranty. Most other repairs include a lifetime warranty."
  }
];

const IPodRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="iPod Repair Winnipeg | Screen, Battery & Data Recovery"
      metaDescription="Expert iPod repair in Winnipeg. Screen replacement, battery replacement, charging issues, home button repair, and data recovery for all iPod generations. Fast service."
      canonicalUrl="https://mobiletechlab.ca/repair/ipod"
      slug="ipod"
      deviceName="iPod"
      tagline="iPod Repair Experts in Winnipeg"
      heroDescription="Still rocking your classic iPod? We repair all generations of iPods including Touch, Classic, Nano, Shuffle, and Mini. Screen repairs, battery replacements, data recovery, and more."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair most iPod models, including iPod Classic, iPod Nano, iPod Touch, and iPod Shuffle where possible. Parts availability varies by generation and model."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
    />
  );
};

export default IPodRepair;
