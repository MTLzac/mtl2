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
    answer: "iPhone battery replacement at Mobile Tech Lab starts at $59 for older models and goes up to $99 for newer models like the iPhone 14 and 15 series. We also offer genuine Apple battery upgrades for an additional $100. All battery replacements include a 90-day warranty and are typically completed same-day.",
  },
  {
    question: "Do you offer same-day iPhone screen repair?",
    answer: "Yes! Most iPhone screen repairs are completed in 1-2 hours while you wait. Walk-ins are welcome at our St. Vital (Winnipeg) and City Centre Mall (Thompson) locations, or you can book an appointment online to guarantee your time slot.",
  },
  {
    question: "Are your iPhone repair parts Apple-certified?",
    answer: "We use high-quality aftermarket parts as standard for cost-effective repairs. For customers who prefer OEM components, we offer genuine Apple battery upgrades for $100 extra. All parts—aftermarket or genuine—are backed by our repair warranty.",
  },
  {
    question: "Do you fix water-damaged iPhones?",
    answer: "Yes, we specialize in water damage repair. Our technicians use ultrasonic cleaning to remove corrosion and moisture from internal components. The sooner you bring in your device after water exposure, the better the chances of a full recovery. We offer free diagnostics to assess the damage.",
  },
  {
    question: "Do I need an appointment or can I walk in?",
    answer: "Walk-ins are always welcome at both our Winnipeg (St. Vital) and Thompson (City Centre Mall) locations! However, booking an appointment online guarantees your time slot and helps us prepare the right parts for your repair in advance.",
  },
  {
    question: "Will I lose my photos and data during iPhone repair?",
    answer: "No. We never factory reset devices during repairs. Your photos, apps, messages, and all data remain intact during screen, battery, charging port, and most other repairs. For peace of mind, we always recommend backing up your device before any service.",
  },
];

// ============================================
// 4. GOOGLE REVIEWS
// ============================================
const REVIEWS = [
  {
    quote: "Replaced my iPhone 13 Pro battery in under an hour. Great price and the team was super friendly. My phone feels brand new!",
    author: "Google Review",
    rating: 5,
  },
  {
    quote: "Cracked my iPhone screen on a Saturday and they fixed it same day. Way cheaper than the Apple Store and just as good quality. Highly recommend!",
    author: "Google Review",
    rating: 5,
  },
];

// ============================================
// 5. SEO CONTENT
// ============================================
const WHY_CHOOSE_PARAGRAPH = `At Mobile Tech Lab, we've earned our reputation as Winnipeg's go-to destination for iPhone repairs. Whether you need a quick battery swap or a full screen replacement, our experienced technicians deliver fast, reliable service—most repairs completed same-day while you wait. We're confident in our pricing and offer a price match guarantee against Apple and other local repair shops. With two convenient locations—St. Vital Centre in Winnipeg and City Centre Mall in Thompson—we're never far when your iPhone needs help. Every repair is backed by our warranty, and we use quality parts to ensure your device works like new. From the latest iPhone 16 Pro Max to classic models like the iPhone 6s, we've seen it all and fixed it all.`;

const LOCAL_TRUST_PARAGRAPH = `Whether you're in St. Vital, Fort Garry, Transcona, or anywhere in Winnipeg, expert iPhone repair is just a short drive away. Our St. Vital Centre location offers easy parking and walk-in service, while our Thompson store at City Centre Mall serves Northern Manitoba. Our friendly team is ready to diagnose your iPhone issue for free, give you an upfront quote with no hidden fees, and get your device back to you fast. Don't let a cracked screen or dying battery slow you down—request a quote online or give us a call today!`;

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
                    Professional iPhone Repair
                  </span>
                  <LiveStatusBadge />
                </div>
                
                {/* SEO H1 */}
                <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  iPhone Repair in <span className="text-primary">Winnipeg</span> & Thompson
                </h1>
                
                {/* Subheading */}
                <p className="mb-4 text-xl font-medium text-foreground/90 md:text-2xl">
                  Fast, Affordable Battery & Screen Repairs for All iPhone Models
                </p>
                
                {/* SEO Paragraph (40-60 words) */}
                <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                  From cracked screens to dead batteries, charging port issues to back glass damage—we fix it all. 
                  Mobile Tech Lab offers same-day iPhone repair with a price match guarantee and friendly, expert service. 
                  Serving Winnipeg and Thompson with quality parts and repairs you can trust. Looking for{" "}
                  <Link to="/repair/ipad" className="text-primary hover:underline">iPad</Link>,{" "}
                  <Link to="/repair/macbook" className="text-primary hover:underline">MacBook</Link>, or{" "}
                  <Link to="/repair/apple-watch" className="text-primary hover:underline">Apple Watch</Link> repair? We're Apple device specialists.
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
            heading="Why We're Winnipeg's Trusted iPhone Repair Specialists"
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
            description="We repair every iPhone generation from the iPhone 6s to the latest iPhone 16 Pro Max. Same-day service for most models at both Winnipeg and Thompson locations."
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
            heading="iPhone Repair Locations in Winnipeg & Manitoba"
            serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Same-day iPhone repair at our Thompson location too."
          />
          
          {/* ============================================ */}
          {/* FAQ SECTION */}
          {/* ============================================ */}
          <FAQSection deviceName="iPhone" faqs={FAQS} />
          
          {/* ============================================ */}
          {/* LOCAL TRUST & CONTACT SECTION */}
          {/* ============================================ */}
          <LocalTrustSection 
            heading="Serving Winnipeg & Thompson – Book Your iPhone Repair Today"
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
