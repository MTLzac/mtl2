import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MailInHero } from "@/components/location/MailInHero";
import { ServiceOptions } from "@/components/location/ServiceOptions";
import { MailInHowItWorks } from "@/components/location/MailInHowItWorks";
import { ServiceCategories } from "@/components/location/ServiceCategories";
import { WhyChooseUsLocation } from "@/components/location/WhyChooseUsLocation";
import { LocationFinalCTA } from "@/components/location/LocationFinalCTA";
import { FAQSection, FAQ } from "@/components/repair/FAQSection";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const CITY_NAME = "Brandon";
const DISTANCE_TO_WINNIPEG = "~200 km";
const DRIVE_TIME = "2 hours";

const faqs: FAQ[] = [
  {
    question: "Do you have a repair location in Brandon?",
    answer: "We don't have a physical shop in Brandon, but we make repairs easy with our free mail-in service. Ship your device to us with a prepaid label, and we'll repair it and send it back—typically within 3–5 business days. You can also drive to our Winnipeg location (about 2 hours) for same-day service."
  },
  {
    question: "How long does mail-in repair take?",
    answer: "Most mail-in repairs are completed within 3–5 business days after we receive your device. This includes shipping time with Canada Post. For urgent repairs, consider visiting our Winnipeg shop for same-day service."
  },
  {
    question: "Is my device insured during shipping?",
    answer: "Yes! We provide prepaid, insured shipping labels for sending your device to us. Return shipping is also insured. Your device is protected throughout the entire process."
  },
  {
    question: "Can I drive to Winnipeg for same-day repair?",
    answer: "Absolutely! Our Winnipeg shop is about 2 hours from Brandon. Walk-ins are welcome, and many repairs—like screen replacements and battery swaps—can be done the same day. Call ahead to confirm parts availability for your specific device."
  },
  {
    question: "What devices do you repair?",
    answer: "We repair smartphones (iPhone, Samsung, Google Pixel, and more), tablets (iPad, Galaxy Tab), laptops (MacBook, Windows laptops), gaming consoles (Nintendo Switch, PlayStation, Xbox), and more. If it has a screen or a battery, chances are we can fix it."
  },
  {
    question: "How do I get started with a mail-in repair?",
    answer: "Easy! Click 'Get a Free Quote' and tell us about your device and the issue. We'll respond with a repair estimate and instructions. Once approved, we'll email you a prepaid shipping label to send your device."
  }
];

const breadcrumbs = [
  { name: "Home", url: "https://mobiletechlab.ca/" },
  { name: "Locations", url: "https://mobiletechlab.ca/" },
  { name: "Brandon", url: "https://mobiletechlab.ca/location/brandon" }
];

const BrandonRepair = () => {
  return (
    <>
      <Helmet>
        <title>Device Repair Brandon MB | Mail-In Phone Repair | Mobile Tech Lab</title>
        <meta 
          name="description" 
          content="Need phone, tablet, or console repair in Brandon, Manitoba? Mail your device to us for fast, affordable repairs with free shipping. Or drive 2 hours to Winnipeg for same-day service." 
        />
        <link rel="canonical" href="https://mobiletechlab.ca/location/brandon" />
        
        {/* LocalBusiness Schema with areaServed */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Mobile Tech Lab",
            "description": "Professional device repair services for Brandon, Manitoba residents via mail-in or in-person at our Winnipeg location.",
            "url": "https://mobiletechlab.ca",
            "telephone": "+1-204-500-9117",
            "areaServed": [
              {
                "@type": "City",
                "name": "Brandon",
                "containedInPlace": {
                  "@type": "AdministrativeArea",
                  "name": "Manitoba"
                }
              },
              {
                "@type": "City", 
                "name": "Winnipeg",
                "containedInPlace": {
                  "@type": "AdministrativeArea",
                  "name": "Manitoba"
                }
              }
            ],
            "priceRange": "$$",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "10:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "11:00",
                "closes": "17:00"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Repair Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mail-In Device Repair",
                    "description": "Free shipping both ways for phone, tablet, laptop, and console repairs"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <BreadcrumbSchema items={breadcrumbs} />
      
      <Header />
      
      <main>
        <MailInHero 
          cityName={CITY_NAME} 
          distanceToWinnipeg={DISTANCE_TO_WINNIPEG} 
          driveTime={DRIVE_TIME} 
        />
        
        <ServiceOptions 
          cityName={CITY_NAME} 
          driveTime={DRIVE_TIME} 
        />
        
        <MailInHowItWorks />
        
        <ServiceCategories />
        
        <WhyChooseUsLocation cityName={CITY_NAME} />
        
        <FAQSection 
          deviceName={CITY_NAME}
          faqs={faqs}
          heading="Brandon Repair FAQs"
          subheading="Common questions about device repair services for Brandon, MB"
        />
        
        <LocationFinalCTA cityName={CITY_NAME} />
      </main>
      
      <Footer />
    </>
  );
};

export default BrandonRepair;
