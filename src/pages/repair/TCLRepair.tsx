import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Camera, 
  Volume2,
  Wifi
} from "lucide-react";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace cracked or damaged TCL screens affordably.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore battery life to your TCL phone.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Fix USB-C charging port issues.",
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
    description: "Resolve WiFi, Bluetooth, and cellular issues.",
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
    question: "Do you repair TCL phones?",
    answer: "Yes! TCL makes quality budget phones, and we service all TCL smartphone models.",
  },
  {
    question: "Is TCL repair worth it?",
    answer: "Often yes! TCL devices are budget-friendly, and our repair costs are proportionally affordable, making repair a smart choice.",
  },
  {
    question: "Are TCL parts available?",
    answer: "We can source parts for most TCL models. Common models like the 30 and 40 series have good availability.",
  },
  {
    question: "Do you repair TCL tablets too?",
    answer: "Yes, we service TCL Tab devices for screen, battery, and charging issues.",
  },
  {
    question: "How long does TCL repair take?",
    answer: "Most repairs are completed same-day if parts are in stock, typically within 1-2 hours.",
  },
];

const TCLRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="TCL Phone Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab"
      metaDescription="TCL phone repair in Winnipeg. Screen, battery, charging port repair for TCL 50, 40, 30 series & tablets. Budget device specialists."
      deviceName="TCL"
      tagline="TCL Device Repair in Winnipeg"
      heroDescription="TCL makes great budget phones, and we're here to keep them running. From the TCL 50 series to tablets, we provide affordable repairs for all TCL devices."
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all TCL phones and tablets including the 50, 40, 30, and 20 series."
      faqs={FAQS}
    />
  );
};

export default TCLRepair;
