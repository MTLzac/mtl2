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
    description: "Cracked or unresponsive iPod display? We replace screens on all iPod models with quality parts."
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "iPod not holding charge like it used to? We replace worn batteries to restore your iPod's battery life."
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
    description: "Experts in discontinued Apple devices that others won't touch.",
  },
  {
    icon: Database,
    title: "Data Recovery Experts",
    description: "Retrieve your music and photos from damaged or aging iPods.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Most iPod repairs completed in 1-3 days. Same-day battery service.",
  },
  {
    icon: Shield,
    title: "Industry-Leading Warranties",
    description: "Lifetime warranty on screen repairs. 90-day warranty on battery replacements. Quality parts that meet OEM specifications.",
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
    answer: "Yes! Screen repairs include a lifetime warranty, and battery replacements come with a 90-day warranty. We stand behind our work with quality parts."
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
      modelsDescription="We repair all iPod generations from the original iPod Mini to the latest iPod Touch. If you have an iPod, we can fix it."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
    />
  );
};

export default IPodRepair;
