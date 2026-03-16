import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone, ExternalLink, Star, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MailInHowItWorks } from "@/components/location/MailInHowItWorks";
import { FAQSection, FAQ } from "@/components/repair/FAQSection";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";
const PHONE_NUMBER = "+12045009757";
const PHONE_FORMATTED = "(204) 500-9757";

const faqs: FAQ[] = [
  {
    question: "How long does shipping take from St. Catharines to Winnipeg?",
    answer: "Canada Post typically delivers from St. Catharines to our Winnipeg lab in 2–3 business days. We ship your repaired phone, tablet, or console back the same way with full tracking."
  },
  {
    question: "What phones, tablets, and consoles can you repair?",
    answer: "We repair iPhones, Samsung Galaxy phones, Google Pixels, iPads, Samsung tablets, Nintendo Switch, PlayStation, Xbox consoles, MacBooks, and more. If you're unsure, request a free quote and we'll confirm."
  },
  {
    question: "What warranties are included?",
    answer: "90 days for batteries, 30 days for Value screens, lifetime for Premium screens. Liquid damage voids warranty. Untested components are not covered."
  },
  {
    question: "Is it safe to mail my phone from Ontario?",
    answer: "Yes — we provide prepaid, trackable Canada Post shipping labels. Your device is insured during transit and we confirm arrival before starting any repair."
  },
  {
    question: "Why choose a Winnipeg repair shop from St. Catharines?",
    answer: "Our Winnipeg lab offers competitive pricing, certified technicians, and fast turnaround that's often better than local Niagara options. With prepaid shipping both ways, it's hassle-free."
  }
];

const reviews = [
  {
    name: "Sarah T",
    rating: 5,
    text: "Shipped my iPhone from Ontario and got it back in under a week. Screen looks perfect and the price was way better than local shops."
  },
  {
    name: "Marcus L",
    rating: 5,
    text: "Great communication throughout. They texted me updates and my Switch was fixed and shipped back fast."
  },
  {
    name: "Jennifer W",
    rating: 5,
    text: "The prepaid shipping label made it so easy. My Samsung came back good as new. Highly recommend for anyone outside Manitoba too."
  }
];

const breadcrumbs = [
  { name: "Home", url: "https://mobiletechlab.ca/" },
  { name: "Service Areas", url: "https://mobiletechlab.ca/service-areas" },
  { name: "St. Catharines", url: "https://mobiletechlab.ca/service-area/st-catharines" }
];

const StCatharinesServiceArea = () => {
  return (
    <>
      <Helmet>
        <title>iPhone Repair St. Catharines — Mail-In Screen & Battery Fix | Mobile Tech Lab</title>
        <meta 
          name="description" 
          content="iPhone repair for St. Catharines, ON — mail in your iPhone for screen replacement, battery swap, or charging port fix. Also Samsung, iPad, Nintendo Switch & PlayStation repair. Prepaid shipping, 2–3 day delivery." 
        />
        <link rel="canonical" href="https://mobiletechlab.ca/service-area/st-catharines" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Mobile Tech Lab",
            "description": "iPhone repair for St. Catharines, Ontario. Mail-in iPhone screen replacement, battery swap, and charging port fix. Also Samsung, iPad, and console repair with prepaid shipping.",
            "url": "https://mobiletechlab.ca",
            "telephone": "+1-204-500-9757",
            "areaServed": [
              {
                "@type": "City",
                "name": "St. Catharines",
                "containedInPlace": {
                  "@type": "AdministrativeArea",
                  "name": "Ontario"
                }
              }
            ],
            "priceRange": "$$"
          })}
        </script>
      </Helmet>
      
      <BreadcrumbSchema items={breadcrumbs} />
      
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                Phone, Tablet & Console Repair for St. Catharines, ON
              </h1>
              <p className="text-lg text-muted-foreground">
                Need your iPhone screen fixed, iPad battery replaced, or Nintendo Switch repaired? 
                Ship your device from St. Catharines to our certified Winnipeg repair lab with a 
                prepaid Canada Post label. Most repairs are completed the same day your device arrives, 
                with typical 2–3 day shipping each way.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <MailInHowItWorks cityName="St. Catharines" />

        {/* Get Started CTA */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">Start Your Repair</h2>
              <p className="mb-6 text-muted-foreground">
                Request a quote online or call us — we'll confirm pricing and send you a prepaid shipping label.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call {PHONE_FORMATTED}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer">
                    Get a Quote Online
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">
                What We Repair
              </h2>
              <p className="text-center text-muted-foreground">
                From{" "}
                <Link to="/repair/iphone" className="text-primary hover:underline">
                  iPhone screen repairs
                </Link>{" "}
                and{" "}
                <Link to="/repair/samsung" className="text-primary hover:underline">
                  Samsung battery replacements
                </Link>{" "}
                to{" "}
                <Link to="/repair/ipad" className="text-primary hover:underline">
                  iPad glass fixes
                </Link>
                ,{" "}
                <Link to="/repair/nintendo-switch" className="text-primary hover:underline">
                  Nintendo Switch charging issues
                </Link>
                , and{" "}
                <Link to="/repair/ps5" className="text-primary hover:underline">
                  PlayStation HDMI repairs
                </Link>
                — our certified technicians handle phones, tablets, laptops, and gaming consoles from St. Catharines and the Niagara Region.
              </p>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-2xl font-bold md:text-3xl">Customer Reviews</h2>
              <p className="flex items-center justify-center gap-1.5 text-muted-foreground">
                <Star className="h-4 w-4 fill-primary text-primary" />
                Trusted by customers across Canada
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
              {reviews.map((review) => (
                <Card key={review.name} className="h-full border-border/50 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <CardContent className="flex h-full flex-col items-center p-6 text-center">
                    <div className="mb-4 flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="mb-4 flex-1 text-sm italic text-muted-foreground">
                      "{review.text}"
                    </p>
                    <div className="flex items-center gap-1.5">
                      <p className="font-medium text-foreground">– {review.name}</p>
                      <BadgeCheck className="h-4 w-4 text-primary" aria-label="Verified Review" />
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground/70">Via Google Reviews</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection 
          deviceName="St. Catharines"
          faqs={faqs}
          heading="Frequently Asked Questions"
          subheading="Common questions about mail-in repairs for St. Catharines customers"
        />

        {/* Final CTA */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                Ready to Start Your Repair from St. Catharines?
              </h2>
              <p className="mb-6 text-muted-foreground">
                Get a free quote online or call us directly — no commitment required.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call {PHONE_FORMATTED}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer">
                    Get a Quote Online
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default StCatharinesServiceArea;
