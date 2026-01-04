import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Droplets,
  Cpu,
  DollarSign,
  Zap,
  Shield,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-ipad.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Dealing with fused LCD and digitizer assemblies for a factory-quality finish. Glass-only repairs available for iPad Air and Mini to save you money.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "If your iPad dies at 20% or feels sluggish, a fresh battery can add years to its lifespan. 90-day warranty included.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "We clean before we replace. If damaged, we perform microsoldering to restore Lightning or USB-C connection.",
  },
  {
    icon: Droplets,
    name: "Liquid Damage Recovery",
    description: "Spilled coffee? Our ultrasonic cleaning process is the best chance your data has for survival.",
  },
  {
    icon: Cpu,
    name: "Software & Boot Issues",
    description: "Stuck on the Apple logo? Our technicians perform advanced restores and data recovery.",
  },
  {
    icon: Camera,
    name: "Button & Sensor Repair",
    description: "Home buttons, power buttons, Touch ID, and Face ID sensor repairs.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "iPad 9 glass repair from $99+tax. Multiple quality tiers so you never pay more than you need.",
  },
  {
    icon: Zap,
    title: "Same-Day Service",
    description: "Most repairs completed same day. Rush Service available for urgent needs.",
  },
  {
    icon: Shield,
    title: "Industry-Leading Warranties",
    description: "Lifetime warranty on screen repairs. 90-day warranty on battery replacements. Quality parts that meet OEM specifications.",
  },
  {
    icon: Award,
    title: "Apple IRP Certified",
    description: "Access to Genuine Apple Parts, diagnostics, and specialized tools for factory-quality repairs.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "iPad Pro",
    models: ["11-inch (M4)", "12.9-inch (6th gen)", "11-inch (4th gen)", "12.9-inch (5th gen)", "All Pro models"],
    description: "ProMotion displays require a delicate touch. USB-C charging port specialists.",
  },
  {
    title: "iPad Air & Mini",
    models: ["Air 13-inch (M2)", "Air 11-inch (M2)", "Mini (6th gen)", "All Air & Mini generations"],
    description: "Cracked glass but working LCD? We can often replace just the glass layer, saving you significantly.",
  },
  {
    title: "Standard iPad",
    models: ["iPad (10th gen)", "iPad (9th gen)", "iPad (8th gen)", "iPad (7th gen)", "All standard models"],
    description: "Winnipeg's most competitive rates. Education model specialists with bulk repair options for schools.",
  },
  {
    title: "All Models",
    models: ["Legacy iPads", "Discontinued models", "All generations"],
    description: "Don't see your model? We service all generations including discontinued models.",
  },
];

const FAQS = [
  {
    question: "How much does iPad repair cost in Winnipeg?",
    answer: "Pricing depends on the model. iPad 9 glass repairs start at $99. Newer iPad Pro or Air models typically cost more due to their advanced, laminated display technology.",
  },
  {
    question: "How long does it take to repair a cracked iPad screen?",
    answer: "Most screen replacements are completed within the same business day. For urgent needs, ask about our Rush Service.",
  },
  {
    question: "Do you use Genuine Apple Parts?",
    answer: "As an IRP-certified shop, we can use Genuine Apple parts for many repairs. For certain legacy models, we use the highest-quality third-party alternatives available to keep your costs down.",
  },
  {
    question: "What warranty do you offer on iPad repairs?",
    answer: "Screen repairs include a lifetime warranty, and battery replacements come with a 90-day warranty. We stand behind our work with quality parts that meet OEM specifications."
  },
  {
    question: "Can you fix a water-damaged iPad?",
    answer: "Fixing water-damaged devices is never guaranteed, but we offer data recovery services with a high success rate for recovering data that wasn't backed up. The best option is to bring in your device right away so we can assess the depth of the liquid damage and recommend the best path forward.",
  },
];

const SERVICE_AREA_NOTE = "Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Limited pickup and drop-off capacity within Winnipeg.";

const iPadRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="iPad Repair Winnipeg | Screen & Battery Replacement"
      metaDescription="Professional iPad repair in Winnipeg. Screen replacement, battery, charging port repair for iPad Pro, iPad Air, iPad mini & all models. Same-day service available."
      deviceName="iPad"
      tagline="Expert iPad Repair in Winnipeg: Fast, Professional, and Guaranteed"
      heroDescription="Whether it's a shattered screen on an iPad Pro or a battery that won't hold a charge on an iPad Air, you need more than a quick fix—you need a guarantee. Mobile Tech Lab is Winnipeg's highest-rated destination for tablet repairs."
      heroImage={heroImage}
      services={SERVICES}
      models={[]}
      modelsDescription=""
      modelCategories={MODEL_CATEGORIES}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote={SERVICE_AREA_NOTE}
      faqs={FAQS}
    />
  );
};

export default iPadRepair;
