import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Wifi,
  Award,
  DollarSign,
  Tablet,
  Shield
} from "lucide-react";
import heroImage from "@/assets/hero-tcl.png";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace cracked or damaged TCL NXTVISION screens in Winnipeg. Screen repair costs vary by model and part availability. Many TCL devices only have one reliable screen option available, which can affect overall repair cost. Aftermarket screens may exist for some models, but they are only offered when the quality is sufficient to be reliably warrantied.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore battery life to your TCL phone or tablet.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Fix USB-C charging port issues for reliable power.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Repair front and rear cameras on TCL devices.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Fix speakers and audio quality issues.",
  },
  {
    icon: Wifi,
    name: "Connectivity Repair",
    description: "Resolve WiFi, Bluetooth, and cellular issues on TCL phones.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Award,
    title: "TCL Specialists",
    description: "Winnipeg's experts in TCL phones and tablets.",
  },
  {
    icon: DollarSign,
    title: "Budget Device Experts",
    description: "Affordable repairs matching TCL's value-focused pricing. Most repairs require parts to be ordered and are typically completed within about one business day once parts arrive.",
  },
  {
    icon: Tablet,
    title: "Phone & Tablet Service",
    description: "We repair both TCL phones and Tab tablets.",
  },
  {
    icon: Award,
    title: "Warranty on Every Repair",
    description: "Screen repair warranties vary by part tier (30 days to lifetime). 90-day battery warranty. Lifetime warranty on most other repairs. Warranty coverage applies to the part repaired or replaced only and does not extend to unrelated components. If a function cannot be tested prior to repair, its operation cannot be guaranteed afterward.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "TCL 50 Series",
    models: ["TCL 50 XL 5G", "TCL 50 SE", "TCL 50 XE"],
    description: "Latest TCL 50 series with 5G connectivity.",
  },
  {
    title: "TCL 40 Series",
    models: ["TCL 40 NxtPaper", "TCL 40 XL", "TCL 40 XE", "TCL 40 SE"],
    description: "Popular 40 series including unique NxtPaper display.",
  },
  {
    title: "TCL 30 Series",
    models: ["TCL 30 XL", "TCL 30 XE 5G", "TCL 30 SE", "TCL 30 V 5G"],
    description: "Reliable 30 series budget phones.",
  },
  {
    title: "TCL Tablets",
    models: ["TCL Tab 10s", "TCL Tab 8"],
    description: "TCL tablet repairs for screen, battery, and charging.",
  },
];

const MODELS = [
  // TCL 50 Series
  "TCL 50 XL 5G", "TCL 50 SE", "TCL 50 XE",
  // TCL 40 Series
  "TCL 40 NxtPaper", "TCL 40 XL", "TCL 40 XE", "TCL 40 SE",
  // TCL 30 Series
  "TCL 30 XL", "TCL 30 XE 5G", "TCL 30 SE", "TCL 30 V 5G",
  // TCL 20 Series
  "TCL 20 Pro 5G", "TCL 20 SE", "TCL 20S",
  // TCL Stylus
  "TCL Stylus 5G",
  // TCL Tab
  "TCL Tab 10s", "TCL Tab 8",
  // Older/Carrier Models
  "TCL A3X", "TCL A3", "TCL Ion X",
];

const FAQS = [
  {
    question: "Do you repair TCL phones in Winnipeg?",
    answer: "Yes! TCL makes quality budget phones, and we service all TCL smartphone models at our St. Vital and Garden City locations.",
  },
  {
    question: "Is TCL repair worth it?",
    answer: "Often yes! TCL devices are budget-friendly, and our repair costs are proportionally affordable, making repair a smart choice over replacement.",
  },
  {
    question: "Are TCL parts available in Winnipeg?",
    answer: "We can source parts for most TCL models. Common 40 and 50 series parts are often available quickly; older models may take a few days.",
  },
  {
    question: "Do you repair TCL tablets too?",
    answer: "Yes! We service TCL Tab devices including the Tab 10s and Tab 8 for screen, battery, and charging port repairs.",
  },
  {
    question: "How long does TCL repair take?",
    answer: "Most repairs are completed same-day if parts are in stock, typically within 1-2 hours. Part sourcing may add 2-3 business days.",
  },
];

const PRICING_MICRO_COPY = {
  costDriver: "TCL repair costs are generally affordable, matching the brand's budget-friendly positioning—most repairs are proportionally priced to the device's value. TCL's <a href='https://www.tcl.com/ca/en/support' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>official support page</a> provides model-specific troubleshooting and warranty information for their phone and tablet lineup.",
  priceShock: "TCL owners are often pleasantly surprised that repairs are more affordable than other brands, making repair a smart choice over replacement. <a href='https://www.ifixit.com/Right-to-Repair' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>iFixit's repairability advocacy</a> highlights why budget devices like TCL phones often benefit most from repair—the low cost of parts makes fixing more economical than replacing.",
  advisory: "For budget TCL devices, repair almost always makes financial sense. We'll explain costs clearly so you can decide.",
  fallback: "When repair doesn't make sense, data recovery is often still possible to retrieve your photos and files.",
};

const TCLRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="TCL Phone Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab"
      metaDescription="TCL phone repair in Winnipeg. Screen, battery, charging port repair for TCL 50, 40, 30 series & tablets. Budget device specialists."
      canonicalUrl="https://mobiletechlab.ca/repair/tcl"
      slug="tcl"
      deviceName="TCL"
      tagline="TCL Device Repair in Winnipeg"
      heroDescription={<>TCL makes great budget phones, and we're here to keep them running in Winnipeg. From the TCL 50 series to tablets, we provide <a href="https://support.tcl.com/us/self-repair-options" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">affordable repairs for all TCL devices</a> at prices that make sense. Most repairs are reasonably priced, but many customers don't have a baseline for what a repair should cost, so we'll always explain options clearly before moving forward.</>}
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all TCL phones and tablets including the 50, 40, 30, and 20 series. Repair cost and part availability can vary between models, even when the repair type is the same."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
      pricingMicroCopy={PRICING_MICRO_COPY}
    />
  );
};

export default TCLRepair;
