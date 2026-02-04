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
    question: "How fast is the mail-in repair for Brandon?",
    answer: "Shipping typically takes 1–2 business days. We repair most devices the same day they arrive, depending on parts availability."
  },
  {
    question: "What warranties are included?",
    answer: "90 days for batteries, 30 days for Value screens, lifetime for Premium screens. Liquid damage voids warranty. Untested components are not covered."
  },
  {
    question: "What if my screen is blacked out?",
    answer: "We'll contact you for approval before proceeding with any repair where testing is limited."
  },
  {
    question: "Is it safe to mail my device?",
    answer: "Yes — we use prepaid, trackable Canada Post shipping and confirm arrival before repairs begin."
  }
];

const manitobaReviews = [
  {
    name: "Jason M",
    rating: 5,
    text: "Fast turnaround and great communication. My phone came back working perfectly!"
  },
  {
    name: "Michelle K",
    rating: 5,
    text: "Sent my Switch in for repair and got it back within a week. Super impressed with the service."
  },
  {
    name: "Derek P",
    rating: 5,
    text: "Professional service from start to finish. The prepaid label made shipping so easy."
  }
];

const breadcrumbs = [
  { name: "Home", url: "https://mobiletechlab.ca/" },
  { name: "Service Areas", url: "https://mobiletechlab.ca/" },
  { name: "Brandon", url: "https://mobiletechlab.ca/service-area/brandon" }
];

const BrandonServiceArea = () => {
  return (
    <>
      <Helmet>
        <title>Mail-In Phone & Console Repair for Brandon, MB | Mobile Tech Lab</title>
        <meta 
          name="description" 
          content="Brandon, MB mail-in phone and console repair. Free prepaid shipping, fast turnaround, trusted service. Get a free quote for iPhone, Samsung, Nintendo Switch repairs and more." 
        />
        <link rel="canonical" href="https://mobiletechlab.ca/service-area/brandon" />
        
        {/* LocalBusiness Schema with areaServed */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Mobile Tech Lab",
            "description": "Professional phone, tablet, and console repair for Brandon, Manitoba. Free mail-in service with fast turnaround.",
            "url": "https://mobiletechlab.ca",
            "telephone": "+1-204-500-9757",
            "areaServed": [
              {
                "@type": "City",
                "name": "Brandon",
                "containedInPlace": {
                  "@type": "AdministrativeArea",
                  "name": "Manitoba"
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
                Repair Services for Brandon Customers
              </h1>
              <p className="text-lg text-muted-foreground">
                We accept mail-in repairs from anywhere in Manitoba, including Brandon and surrounding 
                communities. Our certified repair centers in Winnipeg and Thompson have served thousands 
                of customers province-wide with fast, reliable service. Ship your device to us with a 
                prepaid label—we'll repair it and send it back quickly.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <MailInHowItWorks cityName="Brandon" />

        {/* Get Started CTA */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">Start Your Repair</h2>
              <p className="mb-6 text-muted-foreground">
                Ready to get your device fixed? Request a quote online or give us a call.
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

        {/* Service Coverage Section with Internal Links */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">
                Services Offered
              </h2>
              <p className="text-center text-muted-foreground">
                From{" "}
                <Link to="/repair/iphone" className="text-primary hover:underline">
                  iPhone repair in Brandon
                </Link>{" "}
                to{" "}
                <Link to="/repair/nintendo-switch" className="text-primary hover:underline">
                  Switch charging issues
                </Link>{" "}
                and{" "}
                <Link to="/repair/samsung" className="text-primary hover:underline">
                  Samsung battery replacements
                </Link>
                , our certified techs are ready to help—no matter where you're located in Manitoba.
              </p>
            </div>
          </div>
        </section>

        {/* Manitoba Customer Reviews Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-2xl font-bold md:text-3xl">
                Customer Reviews
              </h2>
              <p className="flex items-center justify-center gap-1.5 text-muted-foreground">
                <Star className="h-4 w-4 fill-primary text-primary" />
                Trusted by customers across Manitoba
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
              {manitobaReviews.map((review) => (
                <Card key={review.name} className="h-full border-border/50 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <CardContent className="flex h-full flex-col items-center p-6 text-center">
                    {/* Star Rating */}
                    <div className="mb-4 flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="mb-4 flex-1 text-sm italic text-muted-foreground">
                      "{review.text}"
                    </p>

                    {/* Reviewer Name with Verified Badge */}
                    <div className="flex items-center gap-1.5">
                      <p className="font-medium text-foreground">– {review.name}</p>
                      <BadgeCheck className="h-4 w-4 text-primary" aria-label="Verified Review" />
                    </div>

                    {/* Source */}
                    <p className="mt-1 text-xs text-muted-foreground/70">Via Google Reviews</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          deviceName="Brandon"
          faqs={faqs}
          heading="Frequently Asked Questions"
          subheading="Common questions about mail-in repairs for Brandon customers"
        />

        {/* Final CTA Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                Ready to Start Your Repair from Brandon?
              </h2>
              <p className="mb-6 text-muted-foreground">
                Reach out by phone or get a quick quote online—no commitment required.
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

export default BrandonServiceArea;
