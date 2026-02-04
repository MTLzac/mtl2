import { Helmet } from "react-helmet-async";
import { Phone, MapPin, Clock, ExternalLink, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationReviewsSection } from "@/components/location/LocationReviewsSection";
import { LOCATIONS } from "@/lib/locations";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";

// Thompson location is second in the array
const thompsonLocation = LOCATIONS[1];

const THOMPSON_GMB_URL = "https://www.google.com/maps/place/Mobile+Tech+Lab+Thompson";

const thompsonReviews = [
  {
    name: "Harley W.",
    rating: 5,
    text: "Awesome customer service & very helpful with any questions you have.",
  },
  {
    name: "Brian K.",
    rating: 5,
    text: "Amazing guys doing great job. They help me sort my phone errors. Best place to go for phone service. I assure you they are the best in the town.",
  },
  {
    name: "Desmond B.",
    rating: 5,
    text: "Great job got my ps5 done within a day and a good controller on top awesome job appreciate these guys.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mobile Tech Lab - Thompson",
  "image": "https://mobiletechlab.ca/favicon.png",
  "url": "https://mobiletechlab.ca/locations/thompson",
  "telephone": "+1-204-410-0262",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "300 Mystery Lake Rd #1530",
    "addressLocality": "Thompson",
    "addressRegion": "MB",
    "postalCode": "R8N 0M2",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 55.743888,
    "longitude": -97.855278
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "areaServed": {
    "@type": "Place",
    "name": "Thompson"
  },
  "sameAs": [
    "https://www.facebook.com/mobiletechlab.ca",
    "https://www.instagram.com/mobiletechlab.ca"
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://mobiletechlab.ca"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Thompson Location",
      "item": "https://mobiletechlab.ca/locations/thompson"
    }
  ]
};

const ThompsonLocation = () => {
  return (
    <>
      <Helmet>
        <title>Visit Our Thompson Repair Location | Mobile Tech Lab</title>
        <meta 
          name="description" 
          content="Visit Mobile Tech Lab at our Thompson storefront in City Centre Mall. Walk-ins welcome for device repairs. Open Monday to Saturday." 
        />
        <link rel="canonical" href="https://mobiletechlab.ca/locations/thompson" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                Our Thompson Store Location
              </h1>
              <p className="text-lg text-muted-foreground">
                Welcome to our Thompson storefront in City Centre Mall—your local destination 
                for phone, tablet, console, and device repairs. Walk-ins are always welcome, 
                or book ahead for faster service.
              </p>
            </div>
          </div>
        </section>

        {/* Store Details & Map */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              {/* Store Info Card */}
              <Card className="border-primary/20">
                <CardContent className="p-6 md:p-8">
                  <h2 className="mb-6 text-2xl font-bold">Store Details</h2>
                  
                  <div className="space-y-5">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-muted-foreground">{thompsonLocation.address}</p>
                        <p className="text-sm text-muted-foreground/70">Located in City Centre Mall</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <a 
                          href={`tel:${thompsonLocation.phone}`}
                          className="text-primary hover:underline"
                        >
                          {thompsonLocation.phoneFormatted}
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Hours</p>
                        <div className="space-y-1 text-muted-foreground">
                          {thompsonLocation.hours.map((hour, i) => (
                            <p key={i}>{hour}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button asChild className="flex-1">
                      <a 
                        href={thompsonLocation.mapsUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Navigation className="mr-2 h-4 w-4" />
                        Get Directions
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="flex-1">
                      <a href={`tel:${thompsonLocation.phone}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Google Map Embed */}
              <div className="overflow-hidden rounded-xl border border-border/50 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.567890123!2d-97.855278!3d55.743888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52e6c8a8f0a9d123%3A0x1234567890abcdef!2s300%20Mystery%20Lake%20Rd%20%231530%2C%20Thompson%2C%20MB%20R8N%200M2!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "350px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mobile Tech Lab Thompson Location Map"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <LocationReviewsSection 
          locationName="Thompson"
          reviews={thompsonReviews}
          totalReviews="500+"
          gmbUrl={THOMPSON_GMB_URL}
        />

        {/* Light CTA Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">Need a Quote?</h2>
              <p className="mb-6 text-muted-foreground">
                Reach out by phone or get a quick quote online—no commitment required.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <a href={`tel:${thompsonLocation.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call {thompsonLocation.phoneFormatted}
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

export default ThompsonLocation;
