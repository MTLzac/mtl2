import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Power,
  Award,
  Users,
  DollarSign,
  Shield
} from "lucide-react";
import heroImage from "@/assets/hero-infinix.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace cracked Infinix screens affordably in Winnipeg—Note, Hot, and GT series. Repair cost and turnaround time for Infinix devices can vary by model and part availability. As a less common brand in Canada, parts may need to be sourced based on the specific device, but repairs are often still possible after evaluation. Aftermarket parts are only offered when the quality is sufficient to be reliably warrantied.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore battery life to your Infinix device with quality replacements.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Fix USB-C charging port issues for reliable 33W to 100W fast charging.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Repair front and rear cameras on all Infinix devices.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Fix DTS speakers, earpieces, and audio quality issues.",
  },
  {
    icon: Power,
    name: "Power Issues",
    description: "Diagnose and fix power button, boot loops, and startup problems.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Award,
    title: "Infinix Specialists",
    description: "One of the few Winnipeg shops with Infinix repair expertise. Most Infinix repairs require parts to be ordered and are typically completed within at least one business day once parts arrive. We'll always confirm timing after assessing the device.",
  },
  {
    icon: Users,
    title: "Underserved Market Experts",
    description: "Filling the gap for Infinix owners who can't find repair elsewhere. If a repair isn't cost-effective or parts aren't readily available, we can also attempt data recovery to help retrieve important information.",
  },
  {
    icon: DollarSign,
    title: "Affordable Repairs",
    description: "Budget-friendly pricing matching Infinix's value proposition. Most repairs for these devices are reasonably priced, but many customers don't have a baseline for what a repair should cost, so we'll explain options clearly before proceeding.",
  },
  {
    icon: Award,
    title: "Warranty on Every Repair",
    description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs. Warranty coverage applies to the part repaired or replaced only and does not extend to unrelated components. If a function cannot be tested prior to repair, its operation cannot be guaranteed afterward.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "Note Series",
    models: ["Note 40 Pro", "Note 40", "Note 30 Pro", "Note 30", "Note 30 VIP", "Note 12 Pro", "Note 12"],
    description: "Premium Note series with large displays and fast charging.",
  },
  {
    title: "Hot Series",
    models: ["Hot 40 Pro", "Hot 40", "Hot 30", "Hot 20"],
    description: "Popular Hot series budget phones.",
  },
  {
    title: "Zero Series",
    models: ["Zero 30", "Zero Ultra", "Zero 20"],
    description: "Camera-focused Zero flagships.",
  },
  {
    title: "GT Gaming Series",
    models: ["GT 20 Pro", "GT 10 Pro"],
    description: "Gaming-focused GT phones with cooling systems.",
  },
];

const MODELS = [
  // Infinix Zero Series
  "Infinix Zero 30", "Infinix Zero Ultra", "Infinix Zero 20",
  // Infinix Note Series
  "Infinix Note 40 Pro", "Infinix Note 40",
  "Infinix Note 30 Pro", "Infinix Note 30", "Infinix Note 30 VIP",
  "Infinix Note 12 Pro", "Infinix Note 12",
  // Infinix Hot Series
  "Infinix Hot 40 Pro", "Infinix Hot 40",
  "Infinix Hot 30", "Infinix Hot 20",
  // Infinix Smart Series
  "Infinix Smart 8", "Infinix Smart 7",
  // Infinix GT Series
  "Infinix GT 20 Pro", "Infinix GT 10 Pro",
];

const FAQS = [
  {
    question: "Do you repair Infinix phones in Winnipeg?",
    answer: "Yes! We're one of the few shops in Winnipeg that services Infinix devices. Whether you have a Note, Hot, Zero, or GT gaming phone, we've got you covered.",
  },
  {
    question: "Are Infinix parts available in Winnipeg?",
    answer: "We can source parts for most Infinix models. Common Note and Hot series parts are often in stock; GT gaming models may take a few extra days to source.",
  },
  {
    question: "Is Infinix repair affordable?",
    answer: "Absolutely! As a budget-friendly brand, Infinix repairs are typically very affordable. We keep pricing proportional, making repair more economical than replacement.",
  },
  {
    question: "Do you repair Infinix GT gaming phones?",
    answer: "Yes! We service the Infinix GT gaming series including screen, battery, charging port, and cooling system repairs for the GT 20 Pro and GT 10 Pro.",
  },
  {
    question: "How long does Infinix repair take in Winnipeg?",
    answer: "Most repairs are completed same-day if parts are in stock at our St. Vital or Garden City locations. Part sourcing may add 2-3 business days for less common models.",
  },
];

const PRICING_MICRO_COPY = {
  costDriver: "Infinix repair costs are generally affordable, matching the brand's budget-friendly positioning—most repairs are proportionally priced to the device's value. Infinix's <a href='https://www.infinixmobility.com/support' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>official support page</a> provides model-specific troubleshooting and warranty information.",
  priceShock: "Infinix owners are often pleasantly surprised that repairs are more affordable than other brands, making repair a smart choice over replacement. <a href='https://www.ifixit.com/Search?query=phone+repair+guide' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>General repair guides from iFixit</a> can help users understand what's involved in common smartphone repairs like screen and battery replacements.",
  advisory: "For budget Infinix devices, repair almost always makes financial sense. We'll explain costs clearly so you can decide.",
  fallback: "When repair doesn't make sense, data recovery is often still possible to retrieve your photos and files.",
};

const InfinixRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Infinix Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab"
      metaDescription="Infinix phone repair in Winnipeg. Screen, battery, charging port repair for Infinix Note, Hot, Zero & GT series. Underserved market specialists."
      canonicalUrl="https://mobiletechlab.ca/repair/infinix"
      slug="infinix"
      deviceName="Infinix"
      tagline="Infinix Repair Specialists in Winnipeg"
      heroDescription={<>Can't find <a href="https://www.infinixmobility.com/care/repair" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Infinix repair</a> in Winnipeg? We're one of the few shops serving the Infinix community. Note, Hot, Zero, or GT gaming series—we provide affordable repairs for budget-friendly devices.</>}
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Infinix models including Note, Hot, Zero, Smart, and GT gaming series. Repair cost and part availability can vary between Infinix models, even when the repair type is the same."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
      pricingMicroCopy={PRICING_MICRO_COPY}
    />
  );
};

export default InfinixRepair;
