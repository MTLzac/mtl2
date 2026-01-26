import { NicheRepairTemplate, ApproachStep, CompetitorProblem } from "@/components/repair/NicheRepairTemplate";
import { AdvantagePillar } from "@/components/repair/WhyChooseUs";
import { FAQ } from "@/components/repair/FAQSection";
import { Cpu, Clock, Wrench, Ban, Package, Zap } from "lucide-react";

import proofImage from "@/assets/repairs/cat-s62-charging-port-success.webp";

const approachSteps: ApproachStep[] = [
  {
    step: 1,
    title: "USB-C Port Diagnosis",
    description: "Board-level inspection using microscopy to identify the exact point of failure in the CAT S62 charging circuit and USB-C port assembly."
  },
  {
    step: 2,
    title: "Parts Resourcefulness",
    description: "Sourcing or adapting compatible CAT S62 Pro charging port components when OEM parts aren't available domestically."
  },
  {
    step: 3,
    title: "Micro-Soldering Replacement",
    description: "Board-level soldering to replace the damaged USB-C charging port — not a simple plug-and-play swap."
  },
  {
    step: 4,
    title: "Charge & Data Testing",
    description: "Full charge cycle testing, data transfer verification, and functionality checks before return."
  }
];

const competitorProblems: CompetitorProblem[] = [
  {
    icon: Ban,
    title: "No Manufacturer Support",
    description: "CAT doesn't offer charging port repair service in Canada. Your only official option is replacement."
  },
  {
    icon: Package,
    title: "Parts Unavailable",
    description: "Domestic parts suppliers don't stock CAT S62 USB-C port components for rugged phones."
  },
  {
    icon: Zap,
    title: "Specialized Skills Required",
    description: "CAT S62 charging port replacement requires micro-soldering expertise — not something most shops can do."
  }
];

const advantagePillars: AdvantagePillar[] = [
  {
    icon: Cpu,
    title: "Micro-Soldering Expertise",
    description: "Board-level USB-C port repairs that most shops can't perform"
  },
  {
    icon: Clock,
    title: "Same-Day Turnaround",
    description: "Many CAT S62 charging port repairs completed within hours"
  },
  {
    icon: Package,
    title: "Parts Resourcefulness",
    description: "We source CAT S62 Pro parts when OEM isn't available"
  },
  {
    icon: Wrench,
    title: "No Manufacturer? No Problem.",
    description: "We fix CAT phones that others say can't be fixed"
  }
];

const faqs: FAQ[] = [
  {
    question: "Can you really fix a CAT S62 charging port?",
    answer: "Yes — we've done it before. The CAT S62 and CAT S62 Pro charging port requires micro-soldering to replace, and we have the equipment and expertise to perform this USB-C port repair. We recently completed this exact repair same-day for a customer."
  },
  {
    question: "My CAT S62 is not charging — is it the charging port?",
    answer: "Most likely, yes. When a CAT S62 or S62 Pro stops charging, the USB-C port is usually the culprit. Common symptoms include loose connection, only charging at certain angles, or not recognizing the cable at all. We can diagnose the exact issue and confirm whether a charging port replacement will fix it."
  },
  {
    question: "How long does the CAT S62 charging port repair take?",
    answer: "Most CAT S62 charging port repairs are completed same-day, often within a few hours. The actual micro-soldering work takes about an hour, but we also perform thorough testing before returning your device."
  },
  {
    question: "Do you repair the CAT S62 Pro as well?",
    answer: "Yes! The CAT S62 Pro uses a similar charging port design and we repair both models. The micro-soldering process for USB-C port replacement is the same for both the S62 and S62 Pro."
  },
  {
    question: "Why can't I get my CAT S62 charging port fixed elsewhere?",
    answer: "CAT doesn't offer repair service in Canada, and most repair shops don't have the micro-soldering equipment or expertise needed for this repair. The USB-C charging port isn't a modular component — it's soldered directly to the motherboard."
  },
  {
    question: "Do you accept mail-in CAT S62 repairs?",
    answer: "Yes! We regularly receive CAT S62 and S62 Pro devices from across Canada and internationally from customers who can't find anyone local to perform these specialized charging port repairs. Contact us for shipping instructions and a quote."
  },
  {
    question: "Do you have CAT S62 charging port parts in stock?",
    answer: "We maintain relationships with specialty suppliers and can often source compatible USB-C port parts quickly. In some cases, we can adapt similar charging ports to work with the CAT S62. Contact us to discuss your specific situation."
  },
  {
    question: "Is the waterproofing still intact after charging port repair?",
    answer: "We take care to maintain the device's water resistance during repair. However, any device that's been opened may have slightly reduced water resistance compared to factory new. We recommend treating it as splash-resistant rather than fully submersible after any repair."
  },
  {
    question: "What if the CAT S62 charging port repair doesn't work?",
    answer: "All our repairs come with a warranty. If the USB-C charging port fails again within the warranty period due to our workmanship, we'll re-repair it at no charge. We also provide honest assessments — if we don't think we can fix it, we'll tell you upfront."
  }
];

const CatS62ChargingPortRepair = () => {
  return (
    <NicheRepairTemplate
      metaTitle="CAT S62 Charging Port Repair & Replacement | USB-C Port Fix"
      metaDescription="CAT S62 not charging? We specialize in CAT S62 Pro charging port replacement and USB-C port repair. Same-day micro-soldering. Mail-in service available."
      slug="cat-s62-charging-port"
      headline="CAT S62 Charging Port Repair"
      subheadline="USB-C Port Replacement — Same Day Service"
      heroDescription="Is your CAT S62 not charging? We specialize in CAT S62 Pro charging port replacement using precision micro-soldering. Most USB-C port repairs completed same day. Based in Winnipeg, MB — mail-in repairs welcome from anywhere."
      urgentBadge="Rugged Phone Specialist"
      mailInAvailable={true}
      proofImage={proofImage}
      proofImageAlt="CAT S62 smartphone with successfully repaired USB-C charging port"
      proofCaption="This CAT S62 came in completely dead — the USB-C charging port had failed. Parts aren't available domestically and the manufacturer doesn't offer repair service in Canada. Using our micro-soldering expertise and parts resourcefulness, we had this device charging and back to the customer same day."
      approachSteps={approachSteps}
      competitorProblems={competitorProblems}
      deviceName="CAT S62"
      faqs={faqs}
      advantagePillars={advantagePillars}
      serviceAreaNote="Can't find CAT S62 charging port repair near you? We accept mail-in repairs from across Canada and internationally."
    />
  );
};

export default CatS62ChargingPortRepair;
