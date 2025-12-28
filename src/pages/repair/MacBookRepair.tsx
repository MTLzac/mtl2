import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { Monitor, Battery, Keyboard, HardDrive, Droplets, Plug } from "lucide-react";
import heroImage from "@/assets/hero-macbook.png";

const services = [
  {
    icon: Monitor,
    name: "Screen Replacement",
    description: "Cracked, damaged, or malfunctioning display? We replace MacBook screens with high-quality parts.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore your MacBook's battery life with a genuine replacement for all-day power.",
  },
  {
    icon: Keyboard,
    name: "Keyboard Replacement",
    description: "Sticky, unresponsive, or broken keys? We replace MacBook keyboards with precision.",
  },
  {
    icon: HardDrive,
    name: "Data Recovery",
    description: "Lost important files? Our experts can recover data from damaged or failed drives.",
  },
  {
    icon: Droplets,
    name: "Liquid Damage",
    description: "Spilled coffee or water on your MacBook? We specialize in liquid damage repair and restoration.",
  },
  {
    icon: Plug,
    name: "Charging Issues",
    description: "MacBook not charging? We diagnose and fix charging port, battery, and power issues.",
  },
];

const models = [
  "MacBook Air M3 (2024)",
  "MacBook Air M2 (2022)",
  "MacBook Air M1 (2020)",
  "MacBook Air (Retina, 2018-2020)",
  "MacBook Air (2015-2017)",
  "MacBook Pro 16\" M3 (2023)",
  "MacBook Pro 14\" M3 (2023)",
  "MacBook Pro 16\" M2 (2023)",
  "MacBook Pro 14\" M2 (2023)",
  "MacBook Pro 13\" M2 (2022)",
  "MacBook Pro 16\" M1 (2021)",
  "MacBook Pro 14\" M1 (2021)",
  "MacBook Pro 13\" M1 (2020)",
  "MacBook Pro 16\" (2019)",
  "MacBook Pro 15\" (2015-2019)",
  "MacBook Pro 13\" (2016-2020)",
  "MacBook 12\" (2015-2017)",
];

const faqs = [
  {
    question: "How long does a MacBook screen replacement take?",
    answer: "Most MacBook screen replacements are completed within 1-3 business days, depending on the model and parts availability.",
  },
  {
    question: "Can you recover data from a water-damaged MacBook?",
    answer: "Yes, in many cases we can recover data from liquid-damaged MacBooks. The success rate depends on the extent of the damage and how quickly the device is brought in for repair.",
  },
  {
    question: "Do you use genuine Apple parts?",
    answer: "We use high-quality OEM and aftermarket parts that meet or exceed Apple's specifications. We can discuss part options with you before repair.",
  },
  {
    question: "How much does a MacBook battery replacement cost?",
    answer: "Battery replacement costs vary by model. Contact us for a free quote specific to your MacBook model.",
  },
  {
    question: "Is my data safe during repair?",
    answer: "We prioritize data security. Your files remain untouched during hardware repairs, and we recommend backing up before any service as a precaution.",
  },
];

const MacBookRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="MacBook Repair Services | Expert Mac Repairs"
      metaDescription="Professional MacBook repair services including screen replacement, battery replacement, keyboard repair, liquid damage restoration, and data recovery. Fast turnaround and quality parts."
      deviceName="MacBook"
      tagline="Expert MacBook Repair Services"
      heroDescription="From cracked screens to liquid damage, our certified technicians repair all MacBook models with precision and care. Fast turnaround, quality parts, and warranty included."
      heroImage={heroImage}
      services={services}
      models={models}
      faqs={faqs}
    />
  );
};

export default MacBookRepair;
