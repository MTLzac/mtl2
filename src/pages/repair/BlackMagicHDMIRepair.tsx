import { NicheRepairTemplate } from "@/components/repair/NicheRepairTemplate";
import { Ban, XCircle, HelpCircle, Search, Gamepad2, Package, Heart } from "lucide-react";

const approachSteps = [
  {
    step: 1,
    title: "HDMI Diagnosis",
    description: "Board-level inspection to determine if the failure is the HDMI port itself or the HDMI controller IC chip on the motherboard. We test both failure points before recommending repair."
  },
  {
    step: 2,
    title: "Component Sourcing",
    description: "Locating compatible HDMI ports or controller ICs - often cross-referencing with similar components we already use for PS5, Xbox, and Switch HDMI repairs."
  },
  {
    step: 3,
    title: "Micro-Soldering Repair",
    description: "Precision removal and replacement of the failed HDMI port or controller IC using professional BGA rework equipment and proper thermal management."
  },
  {
    step: 4,
    title: "Signal & Output Testing",
    description: "Full HDMI output testing at multiple resolutions including 4K/6K to verify clean signal and proper handshake before returning your camera."
  }
];

const competitorProblems = [
  {
    icon: Ban,
    title: "No Manufacturer Support",
    description: "BlackMagic doesn't offer HDMI port repair - a replacement camera is often the only 'official' option for BMPCC 4K or 6K HDMI failures."
  },
  {
    icon: XCircle,
    title: "Repair Shops Decline",
    description: "Most electronics repair shops don't have experience with professional cinema cameras or the micro-soldering skills required for BMPCC HDMI repair."
  },
  {
    icon: HelpCircle,
    title: "Two Possible Failure Points",
    description: "The HDMI issue could be the port OR the controller IC chip - misdiagnosis leads to wasted repairs. Most shops can't properly diagnose both."
  }
];

const advantagePillars = [
  {
    icon: Search,
    title: "Dual Diagnosis Capability",
    description: "We identify whether your BMPCC HDMI failure is the port or the controller IC before starting repair."
  },
  {
    icon: Gamepad2,
    title: "Console HDMI Experience",
    description: "We repair similar HDMI ports on PS5, Xbox, and Nintendo Switch daily - the same skills apply to your BlackMagic camera."
  },
  {
    icon: Package,
    title: "Mail-In Friendly",
    description: "Professional packaging guidance for shipping your BMPCC 4K or 6K camera safely from anywhere in Canada."
  },
  {
    icon: Heart,
    title: "Pro Equipment Respect",
    description: "We understand this is your production tool and livelihood, not just another gadget to fix."
  }
];

const faqs = [
  {
    question: "Can you really fix a BlackMagic Pocket 4K HDMI port?",
    answer: "Yes, we've successfully repaired BMPCC 4K and 6K cameras with HDMI port and controller IC failures. The HDMI components are similar to those we repair on gaming consoles daily, and our micro-soldering experience translates directly to BlackMagic camera repairs."
  },
  {
    question: "My BMPCC 4K has no HDMI output - is it the port or something else?",
    answer: "HDMI output failure on the BlackMagic Pocket Cinema Camera can be caused by either the physical HDMI port or the HDMI controller IC chip on the motherboard. We perform board-level diagnosis to identify the exact failure point before recommending repair."
  },
  {
    question: "Do you repair the BlackMagic Pocket 6K as well?",
    answer: "Yes, both the BMPCC 4K and 6K use similar HDMI port and controller IC components. Whether your BlackMagic Pocket 6K has intermittent HDMI or complete output failure, we can diagnose and repair both models."
  },
  {
    question: "How do you know if it's the HDMI port or the controller IC?",
    answer: "We use board-level diagnostic equipment to test the HDMI signal path. This includes checking continuity on the port, testing the controller IC output, and verifying the communication between components. This dual diagnosis prevents wasted repairs."
  },
  {
    question: "Why can't I get my BMPCC HDMI fixed elsewhere?",
    answer: "BlackMagic doesn't offer component-level repairs - they typically suggest replacement cameras. Most local repair shops lack the specialized micro-soldering equipment and experience needed for professional cinema camera board-level repair. Our console HDMI repair experience gives us the skills to tackle these jobs."
  },
  {
    question: "Do you accept mail-in BlackMagic camera repairs?",
    answer: "Yes, we regularly receive BMPCC 4K and 6K cameras from filmmakers and content creators across Canada. We provide guidance on proper packaging to ensure your camera arrives safely for HDMI port or controller IC repair."
  },
  {
    question: "How should I ship my BlackMagic camera for HDMI repair?",
    answer: "Remove any accessories (lens, cage, handle, SSD). Use the original box if available, or pack securely with foam or bubble wrap in a sturdy box. We recommend insured shipping with tracking. Contact us before shipping and we'll provide detailed packaging instructions."
  },
  {
    question: "What if both the HDMI port and controller IC need replacement?",
    answer: "If diagnosis reveals both the HDMI port and controller IC have failed, we can replace both components. We'll provide a quote for the full repair before proceeding, so you know exactly what's needed to restore HDMI output on your BlackMagic camera."
  }
];

const BlackMagicHDMIRepair = () => {
  return (
    <NicheRepairTemplate
      metaTitle="BlackMagic Pocket 4K/6K HDMI Port Repair | BMPCC HDMI Fix"
      metaDescription="BMPCC 4K or 6K HDMI not working? We repair BlackMagic Pocket Cinema Camera HDMI ports and controller IC chips. Mail-in service available Canada-wide."
      headline="BlackMagic Pocket 4K/6K HDMI Repair"
      subheadline="HDMI Port & Controller IC Replacement"
      heroDescription="Is your BMPCC 4K or 6K showing no HDMI output? We fix BlackMagic Pocket Cinema Camera HDMI ports and the controller IC chip when others can't. Based in Winnipeg, MB - mail-in repairs welcome from anywhere in Canada."
      urgentBadge="Pro Video Equipment Specialist"
      proofImage="/placeholder.svg"
      proofImageAlt="BlackMagic Pocket Cinema Camera HDMI port repair"
      proofCaption="We diagnose both HDMI port and controller IC failures - the two most common reasons for BMPCC HDMI output problems."
      approachSteps={approachSteps}
      competitorProblems={competitorProblems}
      advantagePillars={advantagePillars}
      deviceName="BlackMagic Pocket Cinema Camera"
      faqs={faqs}
      mailInAvailable={true}
      mailInDescription="Ship your BMPCC 4K or 6K from anywhere in Canada for professional HDMI port or controller IC repair. We provide packaging guidance and quick turnaround for filmmakers who can't be without their camera."
    />
  );
};

export default BlackMagicHDMIRepair;
