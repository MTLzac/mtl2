import { Helmet } from "react-helmet-async";
import {
  Monitor,
  Battery,
  Cpu,
  Droplets,
  Sparkles,
  Recycle,
  ArrowLeftRight,
  BadgeDollarSign,
  Truck,
  Clock,
  Star,
} from "lucide-react";
import { HeroSection } from "@/components/repair/HeroSection";
import { ServiceGrid, Service } from "@/components/repair/ServiceGrid";
import { ModelListGrid, ModelCategory } from "@/components/repair/ModelListGrid";
import { WhyChooseUs, AdvantagePillar } from "@/components/repair/WhyChooseUs";
import { BulkBuybackSection } from "@/components/repair/BulkBuybackSection";
import { RepairWaysToSave } from "@/components/repair/RepairWaysToSave";
import { LocationCards } from "@/components/repair/LocationCards";
import { FAQSection, FAQ } from "@/components/repair/FAQSection";
import { StickyQuoteCTA } from "@/components/repair/StickyQuoteCTA";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// B2B-focused services
const B2B_SERVICES: Service[] = [
  {
    icon: Monitor,
    name: "Fleet Screen Repairs",
    description:
      "High-volume screen replacements for iPads, Chromebooks, and phones. Bulk pricing available.",
  },
  {
    icon: Battery,
    name: "Battery Fleet Refresh",
    description:
      "Keep your device fleet running at full capacity with bulk battery replacements.",
  },
  {
    icon: Cpu,
    name: "Board-Level Repairs",
    description:
      "Advanced microsoldering and logic board repairs that other shops can't handle.",
  },
  {
    icon: Droplets,
    name: "Water & Liquid Damage",
    description:
      "Professional recovery for devices exposed to liquid. Data recovery options available.",
  },
  {
    icon: Sparkles,
    name: "Device Refurbishment",
    description:
      "Complete device overhauls—cleaning, repairs, and testing—ready for redeployment.",
  },
  {
    icon: Recycle,
    name: "Recycling & ITAD",
    description:
      "Secure device disposal with asset destruction certificates. Environmentally responsible.",
  },
  {
    icon: ArrowLeftRight,
    name: "Bulk Device Buyback",
    description:
      "Upgrading your fleet? Get more than carrier trade-in programs for your old devices.",
  },
];

// B2B model categories grouped by customer segment
const B2B_MODEL_CATEGORIES: ModelCategory[] = [
  {
    title: "Education Devices",
    models: [
      "iPad 7th Gen",
      "iPad 8th Gen",
      "iPad 9th Gen",
      "iPad 10th Gen",
      "iPad Air",
      "iPad Pro",
      "Acer Chromebook",
      "HP Chromebook",
      "Lenovo Chromebook",
      "Dell Chromebook",
      "Samsung Chromebook",
    ],
    description: "Bulk classroom device repairs at competitive rates",
  },
  {
    title: "Corporate & Enterprise",
    models: [
      "iPhone SE",
      "iPhone 11",
      "iPhone 12",
      "iPhone 13",
      "iPhone 14",
      "Samsung Galaxy A-Series",
      "Samsung Galaxy S-Series",
      "Google Pixel",
      "Surface Pro",
      "Dell Latitude",
      "HP EliteBook",
      "Lenovo ThinkPad",
    ],
    description: "Keep your workforce connected with fast turnaround",
  },
  {
    title: "Repair Shop Overflow",
    models: [
      "Complex Repairs",
      "Board-Level Work",
      "Water Damage Recovery",
      "Data Recovery",
      "Microsoldering",
      "Any Device Type",
    ],
    description:
      "We handle the jobs others can't—microsoldering, data recovery, and more",
  },
];

// B2B-specific advantage pillars
const B2B_ADVANTAGE_PILLARS: AdvantagePillar[] = [
  {
    icon: BadgeDollarSign,
    title: "Volume Pricing",
    description:
      "Competitive bulk rates with no minimum order. The more you send, the more you save.",
  },
  {
    icon: Truck,
    title: "Free One-Way Shipping",
    description:
      "We cover shipping one way—choose a prepaid label to us, or free return shipping to you.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Priority processing for business accounts. Most repairs completed in 24-48 hours.",
  },
  {
    icon: Star,
    title: "Trusted Experience",
    description:
      "500+ 5-star reviews. Trusted by schools, businesses, and repair shops across Manitoba.",
  },
];

// B2B-specific FAQs
const B2B_FAQS: FAQ[] = [
  {
    question: "Is there a minimum order for volume pricing?",
    answer:
      "No minimum. We welcome any volume, from a handful of devices to hundreds. Volume pricing applies automatically—the more you send, the more you save.",
  },
  {
    question: "How does the shipping work?",
    answer:
      "We offer free one-way shipping on all B2B orders. Choose a prepaid label to send devices to us, or we'll cover return shipping back to you—whichever works best for your workflow.",
  },
  {
    question: "What devices do you repair for businesses?",
    answer:
      "iPads, Chromebooks, corporate phones (iPhone, Samsung, Pixel), laptops (Surface, Dell, HP, Lenovo), and more. If you have it, we can likely fix it. Contact us for any device not listed.",
  },
  {
    question: "How fast is turnaround for bulk orders?",
    answer:
      "Most repairs are completed within 24-48 hours. Business accounts get priority processing. For large fleet orders, we'll provide a timeline estimate upfront.",
  },
  {
    question: "Do you offer ITAD or device recycling?",
    answer:
      "Yes, we provide secure device disposal with destruction certificates available for compliance. All recycling is done environmentally responsibly.",
  },
  {
    question: "Can you handle repairs other shops can't do?",
    answer:
      "Absolutely. We specialize in board-level repairs, microsoldering, and data recovery. If another shop turned you away, bring it to us.",
  },
  {
    question: "How does the bulk device buyback work?",
    answer:
      "Upgrading your fleet? We'll quote your old devices and often pay significantly more than carrier trade-in programs. We accept working, damaged, or broken devices—phones, tablets, laptops, and Chromebooks. Fast payment via E-Transfer or check.",
  },
];

const BusinessRepair = () => {
  return (
    <>
      <Helmet>
        <title>Business & Wholesale Device Repair | Mobile Tech Lab Winnipeg</title>
        <meta
          name="description"
          content="B2B device repair and buyback for schools, IT resellers, and repair shops. Volume pricing, free shipping, and fleet trade-in programs. No minimums."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1 pb-20 md:pb-0">
          <HeroSection
            deviceName="Business & Wholesale Repairs"
            tagline="Your Trusted Partner for Fleet & Bulk Device Services"
            description="From school iPad fleets to corporate upgrades—we handle bulk repairs, refurbishment, and device buyback with volume pricing and free one-way shipping. No minimums."
            hideImage
          />

          <ServiceGrid services={B2B_SERVICES} deviceName="Business" />

          <BulkBuybackSection />

          <ModelListGrid
            deviceName="Business"
            models={[]}
            categories={B2B_MODEL_CATEGORIES}
          />

          <WhyChooseUs customPillars={B2B_ADVANTAGE_PILLARS} />

          <RepairWaysToSave deviceName="Business" />

          <LocationCards serviceAreaNote="We serve businesses across Manitoba and Canada. Free one-way shipping on all B2B orders." />

          <FAQSection deviceName="Business" faqs={B2B_FAQS} />
        </main>

        <Footer />
        <StickyQuoteCTA />
      </div>
    </>
  );
};

export default BusinessRepair;
