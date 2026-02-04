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
    question: "How long does a mail-in repair take?",
    answer: "We begin work as soon as your device arrives. If parts are in stock, repairs are usually completed the same day. Shipping to and from Steinbach typically takes 1–2 business days."
  },
  {
    question: "Do you offer a warranty?",
    answer: "Yes. We offer:<br/>• 90 days on batteries<br/>• 30 days on Value Screen Replacements<br/>• Lifetime warranty on Premium Screen Replacements<br/><br/>Please note: no warranty is offered on water-damaged devices or on functions that cannot be tested prior to repair."
  },
  {
    question: "What if my screen is black and I can't test other functions?",
    answer: "We'll inform you of any limitations before proceeding. We require customer approval for repairs where certain components (e.g. front camera) cannot be tested upfront."
  },
  {
    question: "Is shipping safe and secure?",
    answer: "Yes. We provide a prepaid Canada Post label and confirm receipt of your device upon arrival."
  }
];

const manitobaReviews = [
  {
    name: "Allan Appel",
    rating: 5,
    text: "Very professional. Device was fixed within a day of receiving it. I would definitely recommend."
  },
  {
    name: "Gia Chicken",
    rating: 5,
    text: "Got my charging port replaced real quick and am very happy with the service!"
  },
  {
    name: "Stephanie C",
    rating: 5,
    text: "Great service, quick turnaround on my repair. I was kept updated through the whole process."
  }
];

const breadcrumbs = [
  { name: "Home", url: "https://mobiletechlab.ca/" },
  { name: "Service Areas", url: "https://mobiletechlab.ca/" },
  { name: "Steinbach", url: "https://mobiletechlab.ca/service-area/steinbach" }
];

const SteinbachServiceArea = () => {
  return (
    <>
      <Helmet>
        <title>Mail-In Phone & Device Repair for Steinbach, MB | Mobile Tech Lab</title>
        <meta 
          name="description" 
          content="Steinbach, MB mail-in phone and device repair. Free prepaid shipping, fast turnaround, trusted service. Get a free quote for iPhone, Samsung, PS5 repairs and more." 
        />
        <link rel="canonical" href="https://mobiletechlab.ca/service-area/steinbach" />
        
        {/* LocalBusiness Schema with areaServed */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Mobile Tech Lab",
            "description": "Professional phone, tablet, laptop & console repair for Steinbach, Manitoba. Free mail-in service with fast turnaround.",
            "url": "https://mobiletechlab.ca",
            "telephone": "+1-204-500-9757",
            "areaServed": [
              {
                "@type": "City",
                "name": "Steinbach",
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
                Repair Services for Steinbach Customers
              </h1>
              <p className="text-lg text-muted-foreground">
                Need your phone, tablet, or gaming console repaired in Steinbach? We've got you covered. 
                Mobile Tech Lab offers fast, professional mail-in repair services through our certified 
                repair centers in Winnipeg and Thompson. We've served thousands of customers across 
                Manitoba—including Steinbach and surrounding communities—with trusted service and a 
                simple, hassle-free mail-in process.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <MailInHowItWorks cityName="Steinbach" />

        {/* Get Started CTA */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">Get Started</h2>
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
                    Request a Quote Online
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
                What We Repair
              </h2>
              <p className="text-center text-muted-foreground">
                We handle a wide range of device issues—from{" "}
                <Link to="/repair/ps5" className="text-primary hover:underline">
                  PS5 HDMI port replacements
                </Link>{" "}
                to{" "}
                <Link to="/repair/iphone" className="text-primary hover:underline">
                  iPhone screen repairs
                </Link>{" "}
                and{" "}
                <Link to="/repair/samsung" className="text-primary hover:underline">
                  Samsung battery swaps
                </Link>
                . Whether you need a{" "}
                <Link to="/repair/nintendo-switch" className="text-primary hover:underline">
                  Nintendo Switch fix
                </Link>{" "}
                or{" "}
                <Link to="/repair/ipad" className="text-primary hover:underline">
                  iPad repair
                </Link>
                , if you're in Steinbach or nearby, you can trust us with your mail-in repair.
              </p>
            </div>
          </div>
        </section>

        {/* Manitoba Customer Reviews Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-2xl font-bold md:text-3xl">
                What Our Manitoba Customers Are Saying
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
          deviceName="Steinbach"
          faqs={faqs}
          heading="Frequently Asked Questions"
          subheading="Common questions about mail-in repairs for Steinbach customers"
        />

        {/* Final CTA Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                Ready to Get Your Device Fixed from Steinbach?
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

export default SteinbachServiceArea;
