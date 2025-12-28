import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { 
  ScreenShare, 
  Battery, 
  Plug, 
  Gamepad2, 
  Volume2,
  Fan
} from "lucide-react";

const SERVICES = [
  {
    icon: ScreenShare,
    name: "Screen Replacement",
    description: "Replace high-refresh rate AMOLED displays on ROG and Zenfone.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore battery life for extended gaming sessions.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "Fix USB-C and side-mounted charging port issues.",
  },
  {
    icon: Gamepad2,
    name: "AirTrigger Repair",
    description: "Fix ultrasonic AirTrigger buttons on ROG Phone.",
  },
  {
    icon: Volume2,
    name: "Speaker Repair",
    description: "Repair front-facing stereo speakers for gaming audio.",
  },
  {
    icon: Fan,
    name: "Cooling System Repair",
    description: "Fix AeroActive Cooler and internal cooling issues.",
  },
];

const MODELS = [
  // ROG Phone Series (Gaming)
  "Asus ROG Phone 8 Pro", "Asus ROG Phone 8",
  "Asus ROG Phone 7 Ultimate", "Asus ROG Phone 7",
  "Asus ROG Phone 6 Pro", "Asus ROG Phone 6",
  "Asus ROG Phone 5s Pro", "Asus ROG Phone 5s", "Asus ROG Phone 5",
  // Zenfone Series
  "Asus Zenfone 11 Ultra", "Asus Zenfone 10",
  "Asus Zenfone 9", "Asus Zenfone 8", "Asus Zenfone 8 Flip",
  // Older Models
  "Asus ROG Phone 3", "Asus ROG Phone 2",
  "Asus Zenfone 7 Pro", "Asus Zenfone 7",
];

const FAQS = [
  {
    question: "Do you repair ROG Phone gaming phones?",
    answer: "Yes! We specialize in gaming phone repairs including the ROG Phone series with their unique features like AirTriggers and cooling systems.",
  },
  {
    question: "Can you fix AirTrigger buttons?",
    answer: "Yes, we can diagnose and repair the ultrasonic AirTrigger buttons unique to ROG Phone devices.",
  },
  {
    question: "Are Asus phone parts available?",
    answer: "We can source parts for most ROG Phone and Zenfone models. Gaming phone parts may take 3-5 days to obtain.",
  },
  {
    question: "Do you repair the AeroActive Cooler?",
    answer: "We can diagnose cooling system issues, though external accessories like the AeroActive Cooler may need manufacturer service.",
  },
  {
    question: "How long does ROG Phone repair take?",
    answer: "Most repairs take 1-2 hours if parts are in stock. Specialized gaming phone parts may add a few days.",
  },
];

const AsusRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Asus ROG Phone Repair Winnipeg | Gaming Phone Fix | Mobile Tech Lab"
      metaDescription="Asus ROG Phone & Zenfone repair in Winnipeg. Screen, battery, AirTrigger repair for ROG Phone 8, 7, 6 & Zenfone series. Gaming phone specialists."
      deviceName="Asus"
      tagline="ROG Phone & Zenfone Repair in Winnipeg"
      heroDescription="Gaming on an ROG Phone or rocking a compact Zenfone? We repair all Asus devices, understanding the unique needs of gaming phones and their specialized features."
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Asus phones including ROG Phone gaming series and Zenfone flagship devices."
      faqs={FAQS}
    />
  );
};

export default AsusRepair;
