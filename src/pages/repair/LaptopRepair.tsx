import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { Monitor, Battery, Keyboard, Zap, Fan, HardDrive, Cpu, Wrench } from "lucide-react";

const SERVICES = [
  {
    icon: Monitor,
    name: "Screen Replacement",
    description: "Cracked, flickering, or dead pixels? We replace LCD and LED screens on all laptop brands and sizes.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore your laptop's portability with a new battery. We service all major brands and models.",
  },
  {
    icon: Keyboard,
    name: "Keyboard Replacement",
    description: "Broken keys, liquid damage, or unresponsive keyboard? We replace individual keys or full keyboards.",
  },
  {
    icon: Zap,
    name: "Charging Port Repair",
    description: "Fix loose or damaged DC jacks and USB-C charging ports for reliable power connections.",
  },
  {
    icon: Fan,
    name: "Overheating & Fan Repair",
    description: "Loud fans or overheating issues? We clean, repair, or replace cooling systems to keep your laptop running cool.",
  },
  {
    icon: HardDrive,
    name: "SSD & RAM Upgrades",
    description: "Speed up your laptop with an SSD upgrade or additional RAM for better multitasking performance.",
  },
  {
    icon: Wrench,
    name: "Hinge Repair",
    description: "Loose or broken hinges? We repair and reinforce laptop hinges to restore proper lid function.",
  },
  {
    icon: Cpu,
    name: "Motherboard Repair",
    description: "Component-level motherboard repair for power issues, no display, or other complex failures.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Monitor,
    title: "All Brands Welcome",
    description: "We service Asus, Acer, Lenovo, HP, Dell, Toshiba, Chromebooks, and more.",
  },
  {
    icon: HardDrive,
    title: "Upgrade Specialists",
    description: "SSD and RAM upgrades to breathe new life into your existing laptop.",
  },
  {
    icon: Cpu,
    title: "Component-Level Repair",
    description: "Advanced motherboard diagnostics and micro-soldering capabilities.",
  },
  {
    icon: Battery,
    title: "90-Day Warranty",
    description: "All repairs backed by our industry-leading warranty for your peace of mind.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "Asus",
    models: ["ROG Zephyrus", "ROG Strix", "ZenBook", "ZenBook Pro", "VivoBook", "TUF Gaming", "ProArt StudioBook", "Chromebook"],
    description: "Gaming, ultrabook, and budget laptop repairs",
  },
  {
    title: "Acer",
    models: ["Aspire", "Swift", "Spin", "Nitro 5", "Predator Helios", "Predator Triton", "TravelMate", "Chromebook"],
    description: "Full range from budget to gaming laptops",
  },
  {
    title: "Lenovo",
    models: ["ThinkPad X1", "ThinkPad T Series", "ThinkPad L Series", "IdeaPad", "IdeaPad Flex", "Legion", "Yoga", "Chromebook Duet"],
    description: "Business, consumer, and gaming laptops",
  },
  {
    title: "HP",
    models: ["Spectre x360", "Envy", "Pavilion", "EliteBook", "ProBook", "Omen", "Victus", "Chromebook"],
    description: "Premium ultrabooks to gaming machines",
  },
  {
    title: "Dell",
    models: ["XPS 13", "XPS 15", "XPS 17", "Inspiron", "Latitude", "Precision", "Alienware", "Chromebook"],
    description: "Consumer, business, and workstation laptops",
  },
  {
    title: "Other Brands",
    models: ["Toshiba/Dynabook", "MSI", "Razer Blade", "Samsung Galaxy Book", "LG Gram", "Huawei MateBook", "Google Pixelbook"],
    description: "We service virtually any Windows laptop or Chromebook",
  },
];

const MODELS = [
  // Asus
  "Asus ROG Zephyrus",
  "Asus ROG Strix",
  "Asus ZenBook",
  "Asus VivoBook",
  "Asus TUF Gaming",
  // Acer
  "Acer Aspire",
  "Acer Swift",
  "Acer Nitro 5",
  "Acer Predator Helios",
  // Lenovo
  "Lenovo ThinkPad",
  "Lenovo IdeaPad",
  "Lenovo Legion",
  "Lenovo Yoga",
  // HP
  "HP Spectre x360",
  "HP Envy",
  "HP Pavilion",
  "HP Omen",
  // Dell
  "Dell XPS",
  "Dell Inspiron",
  "Dell Latitude",
  "Dell Alienware",
  // Others
  "Toshiba Dynabook",
  "MSI Gaming",
  "Razer Blade",
  "Samsung Galaxy Book",
  "LG Gram",
  "Chromebook (All Brands)",
];

const FAQS = [
  {
    question: "How long does a laptop screen replacement take?",
    answer: "Most laptop screen replacements can be completed within 1-2 hours if we have the part in stock. Some specialty screens may require ordering and take 2-3 business days.",
  },
  {
    question: "Can you upgrade my laptop's RAM and SSD?",
    answer: "Yes! We perform RAM and SSD upgrades on most laptops. Some ultrabooks have soldered components that can't be upgraded—we'll let you know during our free assessment.",
  },
  {
    question: "My laptop won't turn on. Can you fix it?",
    answer: "We can diagnose power issues ranging from simple battery/charger problems to complex motherboard failures. Bring it in for a free assessment.",
  },
  {
    question: "Do you repair Chromebooks?",
    answer: "Absolutely! We service all Chromebook brands including Asus, Acer, Lenovo, HP, Dell, and Samsung. Screen replacements and keyboard repairs are our most common Chromebook services.",
  },
  {
    question: "Is it worth repairing my old laptop?",
    answer: "It depends on the repair cost vs. the laptop's value and your needs. We provide honest assessments and will let you know if repair isn't cost-effective.",
  },
];

const LaptopRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Laptop Repair Winnipeg | Asus, Acer, Lenovo, HP, Dell & More"
      metaDescription="Expert Windows laptop and Chromebook repair in Winnipeg. Screen replacement, battery service, keyboard repair, SSD upgrades. All brands serviced. Same-day available."
      canonicalUrl="https://mobiletechlab.ca/repair/laptop"
      deviceName="Laptop"
      tagline="Winnipeg's Windows Laptop & Chromebook Repair Experts"
      heroDescription="From cracked screens to dead batteries, overheating issues to keyboard failures—we repair all Windows laptops and Chromebooks. Asus, Acer, Lenovo, HP, Dell, Toshiba, MSI, Razer, and more."
      hideHeroImage={true}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We service all major laptop brands. Don't see your specific model? Contact us—we can almost certainly help."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote="Serving St. Vital, Thompson, and surrounding Manitoba communities"
    />
  );
};

export default LaptopRepair;
