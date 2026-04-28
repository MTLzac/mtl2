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
    answer: "We begin work as soon as your device arrives. If parts are in stock, repairs are usually completed the same day. Shipping between Brandon and Winnipeg typically takes 1–2 business days via Canada Post."
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
    answer: "Yes. We provide a prepaid Canada Post label and confirm receipt of your device upon arrival. Shipping from Brandon to our Winnipeg repair centre typically takes 1–2 business days."
  }
];

const manitobaReviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Sent my iPhone in from Brandon and had it back within a few days. Screen looks brand new and the price was fair. Highly recommend!"
  },
  {
    name: "Mike Thompson",
    rating: 5,
    text: "Great experience with the mail-in service. They kept me updated throughout and the repair was done perfectly."
  },
  {
    name: "Jennifer K.",
    rating: 5,
    text: "My Samsung was fixed faster than expected. The prepaid shipping made it so easy—no hassle at all."
  }
];

const breadcrumbs = [
  { name: "Home", url: "https://mobiletechlab.ca/" },
  { name: "Service Areas", url: "https://mobiletechlab.ca/service-areas" },
  { name: "Brandon, MB", url: "https://mobiletechlab.ca/location/brandon" }
];

const BrandonLocation = () => {
  return (
    <>
      <Helmet>
        <title>Cell Phone Repair Brandon MB | Mail-In Service | Mobile Tech Lab</title>
        <meta
          name="description"
          content="Cell phone, tablet, iPad, and gaming console repair for Brandon, MB. Mail-in service with fast turnaround. Screen replacement, battery swap, and more from Mobile Tech Lab."
        />
        <link rel="canonical" href="https://mobiletechlab.ca/location/brandon" />

        {/* LocalBusiness Schema with areaServed */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Mobile Tech Lab",
            "description": "Professional cell phone, tablet, laptop & console repair for Brandon, Manitoba and the Westman region. Mail-in service with fast turnaround.",
            "url": "https://mobiletechlab.ca/location/brandon",
            "telephone": "+1-204-500-9757",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "845 Dakota St #75",
              "addressLocality": "Winnipeg",
              "addressRegion": "MB",
              "postalCode": "R2M 5M3",
              "addressCountry": "CA"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Brandon",
                "containedInPlace": { "@type": "AdministrativeArea", "name": "Manitoba" }
              },
              { "@type": "City", "name": "Souris" },
              { "@type": "City", "name": "Virden" },
              { "@type": "City", "name": "Dauphin" },
              { "@type": "City", "name": "Minnedosa" },
              { "@type": "City", "name": "Neepawa" }
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
                Phone & Device Repair for Brandon, MB
              </h1>
              <p className="text-lg text-muted-foreground">
                Need a phone, tablet, or gaming console repaired in Brandon? We've got you covered.
                Mobile Tech Lab offers fast, professional mail-in repair services through our certified
                repair centres in Winnipeg and Thompson. We've served thousands of customers across
                Manitoba, including Brandon and the Westman region, with trusted iPhone repair, Samsung
                screen replacements, iPad fixes, and more through a simple, hassle-free mail-in process.
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

        {/* What We Repair Section with Internal Links */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">
                What We Repair
              </h2>
              <p className="text-center text-muted-foreground">
                We handle a wide range of device issues from Brandon and across the Westman region.
                Whether you need an{" "}
                <Link to="/repair/iphone" className="text-primary hover:underline">iPhone screen repair</Link>,{" "}
                <Link to="/repair/samsung" className="text-primary hover:underline">Samsung screen replacement</Link>,{" "}
                <Link to="/repair/google-pixel" className="text-primary hover:underline">Google Pixel screen replacement</Link>, or{" "}
                <Link to="/repair/motorola" className="text-primary hover:underline">Motorola repair</Link>, we've got you covered. We
                also handle Android phone screen replacement and Android phone battery replacement. For tablets, we
                specialize in{" "}
                <Link to="/repair/ipad" className="text-primary hover:underline">iPad screen replacement</Link>{" "}
                and iPad battery replacement, plus Android tablet repair. On the computer side, we offer{" "}
                <Link to="/repair/macbook" className="text-primary hover:underline">MacBook repair</Link>, laptop
                repair, and computer diagnostics. Gamers in Brandon can mail in their consoles for{" "}
                <Link to="/repair/nintendo-switch" className="text-primary hover:underline">Nintendo Switch Joy-Con fixes</Link>,{" "}
                <Link to="/repair/ps5" className="text-primary hover:underline">PS5 repair</Link>, PS4 service, and{" "}
                <Link to="/repair/xbox" className="text-primary hover:underline">Xbox repair</Link>. Need a battery
                replacement for your iPhone, iPad, or Android phone? We do that too. Ship your device to us from
                Brandon and we'll have it back to you fast.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <Link to="/trade-in" className="text-primary hover:underline">
                  Thinking about upgrading instead? Sell your old device →
                </Link>
                <Link to="/repair-pricing" className="text-primary hover:underline">
                  View our repair pricing
                </Link>
                <Link to="/locations/winnipeg" className="text-primary hover:underline">
                  Near Winnipeg? Visit our repair centre in person
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
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
                Ready to Get Your Device Fixed from Brandon?
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

export default BrandonLocation;
