import { NicheRepairTemplate, ApproachStep, CompetitorProblem } from "@/components/repair/NicheRepairTemplate";
import { AdvantagePillar } from "@/components/repair/WhyChooseUs";
import { FAQ } from "@/components/repair/FAQSection";
import { Cpu, Clock, Wrench, Ban, Package, Zap } from "lucide-react";

import proofImage from "@/assets/repairs/cat-s62-charging-port-success.webp";

const approachSteps: ApproachStep[] = [
  {
    step: 1,
    title: "Precision Diagnosis",
    description: "Board-level inspection using microscopy to identify the exact point of failure in the charging circuit."
  },
  {
    step: 2,
    title: "Parts Resourcefulness",
    description: "Sourcing or adapting compatible charging port components when OEM parts aren't available domestically."
  },
  {
    step: 3,
    title: "Micro-Soldering Repair",
    description: "Board-level soldering using specialized equipment — not a simple plug-and-play swap."
  },
  {
    step: 4,
    title: "Thorough Testing",
    description: "Full charge cycle testing, data transfer verification, and functionality checks before return."
  }
];

const competitorProblems: CompetitorProblem[] = [
  {
    icon: Ban,
    title: "No Manufacturer Support",
    description: "CAT doesn't offer repair service in Canada. Your only official option is replacement."
  },
  {
    icon: Package,
    title: "Parts Unavailable",
    description: "Domestic parts suppliers don't stock rugged phone components like CAT charging ports."
  },
  {
    icon: Zap,
    title: "Specialized Skills Required",
    description: "This repair requires micro-soldering expertise — not something most shops can do."
  }
];

const advantagePillars: AdvantagePillar[] = [
  {
    icon: Cpu,
    title: "Micro-Soldering Expertise",
    description: "Board-level repairs that most shops can't perform"
  },
  {
    icon: Clock,
    title: "Same-Day Turnaround",
    description: "Many specialized repairs completed within hours"
  },
  {
    icon: Package,
    title: "Parts Resourcefulness",
    description: "We source or adapt parts when OEM isn't available"
  },
  {
    icon: Wrench,
    title: "No Manufacturer? No Problem.",
    description: "We fix what others say can't be fixed"
  }
];

const faqs: FAQ[] = [
  {
    question: "Can you really fix a CAT S62 charging port?",
    answer: "Yes — we've done it before. The CAT S62 charging port requires micro-soldering to replace, and we have the equipment and expertise to perform this repair. We recently completed this exact repair same-day for a customer."
  },
  {
    question: "How long does the repair take?",
    answer: "Most CAT S62 charging port repairs are completed same-day, often within a few hours. The actual micro-soldering work takes about an hour, but we also perform thorough testing before returning your device."
  },
  {
    question: "Why can't I get this fixed elsewhere?",
    answer: "CAT doesn't offer repair service in Canada, and most repair shops don't have the micro-soldering equipment or expertise needed for this repair. The charging port isn't a modular component — it's soldered directly to the motherboard."
  },
  {
    question: "Do you accept mail-in repairs?",
    answer: "Yes! We regularly receive devices from across Canada and internationally from customers who can't find anyone local to perform these specialized repairs. Contact us for shipping instructions and a quote. We'll diagnose the issue and keep you informed throughout the process."
  },
  {
    question: "Do you have CAT S62 parts in stock?",
    answer: "We maintain relationships with specialty suppliers and can often source compatible parts quickly. In some cases, we can adapt similar charging ports to work with the CAT S62. Contact us to discuss your specific situation."
  },
  {
    question: "Is the waterproofing still intact after repair?",
    answer: "We take care to maintain the device's water resistance during repair. However, any device that's been opened may have slightly reduced water resistance compared to factory new. We recommend treating it as splash-resistant rather than fully submersible after any repair."
  },
  {
    question: "What if the repair doesn't work?",
    answer: "All our repairs come with a warranty. If the charging port fails again within the warranty period due to our workmanship, we'll re-repair it at no charge. We also provide honest assessments — if we don't think we can fix it, we'll tell you upfront."
  }
];

const CatS62ChargingPortRepair = () => {
  return (
    <NicheRepairTemplate
      metaTitle="CAT S62 Charging Port Repair | Micro-Soldering Specialists"
      metaDescription="CAT S62 not charging? We specialize in micro-soldering repairs for rugged phones. Mail-in service available. Based in Winnipeg, MB."
      headline="CAT S62 Won't Charge?"
      subheadline="We've Fixed This Before — Same Day"
      heroDescription="Your rugged phone deserves a repair shop that won't give up. We specialize in micro-soldering repairs for devices that other shops turn away. Based in Winnipeg, MB — mail-in repairs welcome."
      urgentBadge="Rugged Phone Specialist"
      mailInAvailable={true}
      proofImage={proofImage}
      proofImageAlt="CAT S62 smartphone with successfully repaired charging port at Mobile Tech Lab"
      proofCaption="This CAT S62 came in completely dead — the charging port had failed. Parts aren't available domestically and the manufacturer doesn't offer repair service in Canada. Using our micro-soldering expertise and parts resourcefulness, we had this device charging and back to the customer same day."
      approachSteps={approachSteps}
      competitorProblems={competitorProblems}
      deviceName="CAT S62"
      faqs={faqs}
      advantagePillars={advantagePillars}
      serviceAreaNote="Can't visit in person? We accept mail-in repairs from across Canada and internationally."
    />
  );
};

export default CatS62ChargingPortRepair;
