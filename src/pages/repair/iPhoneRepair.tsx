import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ServiceGrid, Service } from "@/components/repair/ServiceGrid";
import { ModelListGrid, ModelCategory } from "@/components/repair/ModelListGrid";
import { FAQSection, FAQ } from "@/components/repair/FAQSection";
import { LocationCards } from "@/components/repair/LocationCards";
import { StickyQuoteCTA } from "@/components/repair/StickyQuoteCTA";
import { RepairWaysToSave } from "@/components/repair/RepairWaysToSave";
import { LiveStatusBadge } from "@/components/repair/LiveStatusBadge";
import { WhyChooseUsExtended } from "@/components/repair/WhyChooseUsExtended";
import { GoogleReviewsHighlight } from "@/components/repair/GoogleReviewsHighlight";
import { LocalTrustSection } from "@/components/repair/LocalTrustSection";
import { QuickFacts } from "@/components/repair/QuickFacts";
import { PRIMARY_PHONE } from "@/lib/locations";
import { 
  Smartphone, 
  Battery, 
  Plug, 
  Camera, 
  Droplets,
  MonitorSmartphone,
  ArrowRight,
  Phone
} from "lucide-react";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";

// ============================================
// 1. SERVICES
// ============================================
const SERVICES: Service[] = [
  {
    icon: Smartphone,
    name: "Screen Replacement",
    description: "Cracked, shattered, or unresponsive iPhone screens repaired same-day with quality displays. All models from iPhone 6s to iPhone 16 Pro Max.",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    description: "Restore your iPhone's battery health with professional replacement. Genuine Apple battery upgrades available for an additional $100.",
  },
  {
    icon: MonitorSmartphone,
    name: "Back Glass Repair",
    description: "iPhone back glass cracked? We replace rear glass panels for iPhone 8 and newer models with quality parts.",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    description: "iPhone not charging? We repair and replace Lightning and USB-C ports for reliable charging on all models.",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    description: "Front or rear camera issues? We fix focus problems, black screens, and cracked camera lenses on all iPhone models.",
  },
  {
    icon: Droplets,
    name: "Water Damage Repair",
    description: "Dropped your iPhone in water? Our technicians assess and repair water-damaged devices with ultrasonic cleaning.",
  },
];

// ============================================
// 2. MODEL CATEGORIES
// ============================================
const MODEL_CATEGORIES: ModelCategory[] = [
  {
    title: "iPhone 16 & 15 Series",
    models: ["iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16", "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15"],
    description: "Latest generation with USB-C, Dynamic Island, and A17/A18 chips. Screen, battery, and back glass repairs available.",
  },
  {
    title: "iPhone 14 & 13 Series",
    models: ["iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14", "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13 mini", "iPhone 13"],
    description: "Pro camera systems and A15/A16 chips. Same-day screen and battery repairs.",
  },
  {
    title: "iPhone 12, 11 & X Series",
    models: ["iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12 mini", "iPhone 12", "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11", "iPhone XS Max", "iPhone XS", "iPhone XR", "iPhone X"],
    description: "Face ID models with OLED displays. Affordable screen and battery replacement.",
  },
  {
    title: "iPhone SE & Legacy",
    models: ["iPhone SE (2022)", "iPhone SE (2020)", "iPhone 8 Plus", "iPhone 8", "iPhone 7 Plus", "iPhone 7", "iPhone 6s Plus", "iPhone 6s"],
    description: "Touch ID classics still going strong. Budget-friendly repairs for older models.",
  },
];

const MODELS = [
  "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16",
  "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15",
  "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14",
  "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13 mini", "iPhone 13",
  "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12 mini", "iPhone 12",
  "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11",
  "iPhone XS Max", "iPhone XS", "iPhone XR", "iPhone X",
  "iPhone SE (2022)", "iPhone SE (2020)",
  "iPhone 8 Plus", "iPhone 8", "iPhone 7 Plus", "iPhone 7", "iPhone 6s Plus", "iPhone 6s",
];

// ============================================
// 3. FAQs (6 questions)
// ============================================
const FAQS: FAQ[] = [
  {
    question: "How much does iPhone battery replacement cost in Winnipeg?",
    answer: "iPhone battery replacement at Mobile Tech Lab Winnipeg starts at $59 for older models and goes up to $99 for newer models like the iPhone 15 and 16 series. We also offer genuine Apple battery upgrades for an additional $100. All battery replacements include a 90-day warranty and are typically completed same-day at our St. Vital location.",
  },
  {
    question: "Do you offer same-day iPhone screen repair?",
    answer: "Yes! Most iPhone screen repairs in Winnipeg are completed in 1-2 hours while you wait. Walk into our St. Vital Centre location anytime during business hours, or book an appointment online to guarantee your time slot. We stock screens for all popular iPhone models.",
  },
  {
    question: "Are the parts genuine Apple or equivalent quality?",
    answer: "We use high-quality aftermarket parts that meet or exceed OEM standards for cost-effective repairs. For customers who prefer genuine components, we offer Apple battery upgrades for $100 extra. All parts are backed by our repair warranty regardless of type.",
  },
  {
    question: "Can I walk in or do I need to book ahead?",
    answer: "Walk-ins are always welcome at our Winnipeg location in St. Vital Centre! No appointment necessary. However, booking online guarantees your time slot and helps us prepare the right parts for your specific iPhone model in advance.",
  },
  {
    question: "What's the warranty on iPhone repairs?",
    answer: "All iPhone repairs at Mobile Tech Lab come with a warranty. Screen repair warranties vary by part quality tier (starting at 30 days for budget options, up to lifetime for premium). Battery replacements are covered for 90 days. Most other component repairs include a lifetime warranty. Warranty coverage applies to the part replaced only and does not extend to unrelated components. If a function cannot be tested prior to repair, its operation cannot be guaranteed afterward. If anything goes wrong with our work, we'll make it right—guaranteed.",
  },
  {
    question: "What if I find a cheaper quote in Winnipeg?",
    answer: "We offer a price match guarantee! If you find a lower quote for the same iPhone repair from any authorized repair shop in Winnipeg, show us the quote and we'll match it. We're confident our combination of quality, speed, and pricing can't be beat.",
  },
];

// ============================================
// 4. GOOGLE REVIEWS
// ============================================
const REVIEWS = [
  {
    quote: "Got my iPhone 14 screen replaced in under an hour at the St. Vital location. Super fast, affordable, and the staff were incredibly friendly. Best iPhone repair in Winnipeg!",
    author: "Google Review",
    rating: 5,
  },
  {
    quote: "My iPhone battery was dying by noon every day. Mobile Tech Lab replaced it same-day for way less than Apple quoted me. Phone works like new again!",
    author: "Google Review",
    rating: 5,
  },
];

// ============================================
// 5. SEO CONTENT
// ============================================
const WHY_CHOOSE_PARAGRAPH = `Looking for reliable iPhone repair in Winnipeg? Mobile Tech Lab is the city's trusted choice for fast, affordable iPhone fixes. We offer same-day service for most repairs—including battery replacements, cracked screens, charging port issues, and back glass damage. Our experienced technicians use high-quality parts that meet or exceed OEM standards, and every repair comes with a warranty for your peace of mind. We're so confident in our pricing that we offer a price match guarantee—if you find a cheaper quote from Apple or any local Winnipeg repair shop, we'll match it. Visit our main location at St. Vital Centre for quick walk-in service, or our secondary shop in Thompson. From the latest iPhone 16 Pro Max to the classic iPhone 6s, we've repaired thousands of iPhones for happy Winnipeg customers.`;

const LOCAL_TRUST_PARAGRAPH = `Ready to get your iPhone fixed? Winnipeg's most trusted repair shop is just a short drive away. Walk into our St. Vital Centre location—no appointment needed—and our friendly technicians will diagnose your issue for free. Most iPhone repairs are completed same-day while you wait. We pride ourselves on transparent pricing with no hidden fees, fast turnaround times, and thousands of satisfied Winnipeg customers. Whether you need a quick battery swap or a full screen replacement, we make iPhone repair easy. Request a free quote online or call our St. Vital location directly!`;

// ============================================
// MAIN COMPONENT
// ============================================
const IPhoneRepair = () => {
  return (
    <>
      <Helmet>
        <title>iPhone Repair Winnipeg | Screen & Battery Fix | Mobile Tech Lab</title>
        <meta name="description" content="Expert iPhone repair in Winnipeg & Thompson. Same-day screen replacement, battery swap, charging port & back glass repair for all iPhone models. Price match guarantee." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mobiletechlab.ca/repair/iphone" />
      </Helmet>
      
      <div className="flex min-h-screen flex-col">
        <Header />
        
        <main className="flex-1 pb-20 md:pb-0">
          {/* ============================================ */}
          {/* HERO SECTION - Custom SEO H1 */}
          {/* ============================================ */}
          <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl text-center">
                <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
                  <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                    Winnipeg's #1 iPhone Repair Shop
                  </span>
                  <LiveStatusBadge />
                </div>
                
                {/* SEO H1 */}
                <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  iPhone Repair in <span className="text-primary">Winnipeg</span> – Fast, Affordable & Trusted
                </h1>
                
                {/* Subheading */}
                <p className="mb-4 text-xl font-medium text-foreground/90 md:text-2xl">
                  Battery, Screen, Charging Port & Back Glass Repairs
                </p>
                
                {/* SEO Paragraph (40-60 words) */}
                <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                  Need fast iPhone repair near you? Winnipeg trusts Mobile Tech Lab for same-day battery replacements, 
                  cracked screen fixes, charging port repairs, and back glass restoration. Our skilled technicians use 
                  high-quality parts and offer affordable pricing on all iPhone models. Walk in today or request a free quote online. 
                  We also repair{" "}
                  <Link to="/repair/ipad" className="text-primary hover:underline">iPads</Link>,{" "}
                  <Link to="/repair/macbook" className="text-primary hover:underline">MacBooks</Link>, and{" "}
                  <Link to="/repair/apple-watch" className="text-primary hover:underline">Apple Watches</Link>.
                </p>
                
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Button size="lg" className="gradient-primary text-lg" asChild>
                    <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer">
                      Get a Free Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg" asChild>
                    <a href={`tel:${PRIMARY_PHONE}`}>
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </a>
                  </Button>
                </div>
                
                <QuickFacts facts={{
                  turnaround: "1-2 hours",
                  startingPrice: "From $59",
                  warranty: "Up to lifetime warranty",
                  locations: "St. Vital & Thompson",
                }} />
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-1/4 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
          </section>
          
          {/* ============================================ */}
          {/* SERVICES GRID */}
          {/* ============================================ */}
          <ServiceGrid services={SERVICES} deviceName="iPhone" />
          
          {/* ============================================ */}
          {/* WHY CHOOSE US - Extended SEO Block */}
          {/* ============================================ */}
          <WhyChooseUsExtended 
            heading="Winnipeg's Trusted iPhone Repair Shop"
            paragraph={WHY_CHOOSE_PARAGRAPH}
          />
          
          {/* ============================================ */}
          {/* GOOGLE REVIEWS HIGHLIGHT */}
          {/* ============================================ */}
          <GoogleReviewsHighlight 
            reviews={REVIEWS}
            heading="What Our iPhone Customers Say"
          />
          
          {/* ============================================ */}
          {/* MODEL LIST GRID */}
          {/* ============================================ */}
          <ModelListGrid 
            deviceName="iPhone" 
            models={MODELS}
            description="We repair every iPhone generation from the iPhone 6s to the latest iPhone 16 Pro Max. Same-day service for most models at our Winnipeg location."
            categories={MODEL_CATEGORIES}
          />
          
          {/* ============================================ */}
          {/* WAYS TO SAVE */}
          {/* ============================================ */}
          <RepairWaysToSave deviceName="iPhone" />
          
          {/* ============================================ */}
          {/* LOCATION CARDS */}
          {/* ============================================ */}
          <LocationCards 
            heading="Visit Our Winnipeg iPhone Repair Shop"
            serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods."
          />
          
          {/* ============================================ */}
          {/* FAQ SECTION */}
          {/* ============================================ */}
          <FAQSection 
            deviceName="iPhone" 
            faqs={FAQS}
            heading="Common Questions About iPhone Repairs"
            subheading="Everything you need to know about iPhone repair in Winnipeg"
          />
          
          {/* ============================================ */}
          {/* LOCAL TRUST & CONTACT SECTION */}
          {/* ============================================ */}
          <LocalTrustSection 
            heading="Book Your iPhone Repair in Winnipeg Today"
            paragraph={LOCAL_TRUST_PARAGRAPH}
          />
        </main>
        
        <Footer />
        <StickyQuoteCTA />
      </div>
    </>
  );
};

export default IPhoneRepair;
