import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react";
import { LOCATIONS } from "@/lib/locations";

const Contact = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://mobiletechlab.ca/#stvital",
        "name": "Mobile Tech Lab - St. Vital",
        "image": "https://mobiletechlab.ca/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "845 Dakota St #25",
          "addressLocality": "Winnipeg",
          "addressRegion": "MB",
          "postalCode": "R2M 5M3",
          "addressCountry": "CA"
        },
        "telephone": "+1-204-500-9757",
        "url": "https://mobiletechlab.ca/contact",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "19:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "12:00",
            "closes": "19:00"
          }
        ],
        "priceRange": "$$",
        "areaServed": ["Winnipeg", "Manitoba"],
        "serviceType": ["Phone Repair", "Tablet Repair", "Computer Repair", "Console Repair"]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://mobiletechlab.ca/#thompson",
        "name": "Mobile Tech Lab - Thompson",
        "image": "https://mobiletechlab.ca/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "300 Mystery Lake Rd #1530",
          "addressLocality": "Thompson",
          "addressRegion": "MB",
          "postalCode": "R8N 0M2",
          "addressCountry": "CA"
        },
        "telephone": "+1-204-410-0262",
        "url": "https://mobiletechlab.ca/contact",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "10:00",
            "closes": "18:00"
          }
        ],
        "priceRange": "$$",
        "areaServed": ["Thompson", "Northern Manitoba"],
        "serviceType": ["Phone Repair", "Tablet Repair", "Computer Repair", "Console Repair"]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Mobile Tech Lab Winnipeg & Thompson</title>
        <meta
          name="description"
          content="Contact Mobile Tech Lab for device repair in Winnipeg and Thompson, Manitoba. Call us, visit our stores, or get a free online quote. Walk-ins welcome!"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mobiletechlab.ca/contact" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-secondary/50 to-background py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                Contact Mobile Tech Lab
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                Get in touch with Manitoba's trusted device repair specialists. Visit us in-store or get a free quote online.
              </p>
              <Button size="lg" asChild>
                <a
                  href="https://shop.mobiletechlab.ca/pages/repair2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  Get a Free Quote
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </section>

          {/* Locations Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="mb-10 text-center">
                <h2 className="mb-3 text-3xl font-bold">Our Locations</h2>
                <p className="text-muted-foreground">
                  Two convenient locations serving Winnipeg and Northern Manitoba
                </p>
              </div>

              <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
                {LOCATIONS.map((location, index) => (
                  <Card key={location.name} className="relative overflow-hidden">
                    {index === 0 && (
                      <div className="absolute right-4 top-4">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          PRIMARY
                        </span>
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-start gap-3">
                        <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <h3 className="mb-1 text-xl font-semibold">{location.name}</h3>
                          <p className="text-muted-foreground">{location.address}</p>
                        </div>
                      </div>

                      <div className="mb-4 flex items-center gap-3">
                        <Phone className="h-5 w-5 shrink-0 text-primary" />
                        <a
                          href={`tel:${location.phone}`}
                          className="text-lg font-medium hover:text-primary"
                        >
                          {location.phoneFormatted}
                        </a>
                      </div>

                      <div className="mb-6 flex items-start gap-3">
                        <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <div className="text-muted-foreground">
                          {location.hours.map((hour, i) => (
                            <p key={i}>{hour}</p>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 sm:flex-row">
                        <Button className="flex-1" asChild>
                          <a href={`tel:${location.phone}`}>
                            <Phone className="mr-2 h-4 w-4" />
                            Call Now
                          </a>
                        </Button>
                        <Button variant="outline" className="flex-1" asChild>
                          <a
                            href={location.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Navigation className="mr-2 h-4 w-4" />
                            Get Directions
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Online Quote CTA */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <Card className="mx-auto max-w-2xl border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="p-8 text-center">
                  <h2 className="mb-3 text-2xl font-bold">Prefer to Get a Quote Online?</h2>
                  <p className="mb-6 text-muted-foreground">
                    Use our repair widget for instant pricing on your device repair. No appointment needed—walk-ins are always welcome!
                  </p>
                  <Button size="lg" asChild>
                    <a
                      href="https://shop.mobiletechlab.ca/pages/repair2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      Start Your Quote
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Map Section */}
          <section className="bg-secondary/30 py-16">
            <div className="container mx-auto px-4">
              <div className="mb-8 text-center">
                <h2 className="mb-3 text-2xl font-bold">Find Us on the Map</h2>
                <p className="text-muted-foreground">
                  Visit us at either of our convenient Manitoba locations
                </p>
              </div>

              <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
                {/* St. Vital Map */}
                <div className="overflow-hidden rounded-lg border bg-card shadow-sm">
                  <div className="border-b bg-muted/50 px-4 py-3">
                    <h3 className="font-semibold">{LOCATIONS[0].name}</h3>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.0896367686387!2d-97.10548882318454!3d49.85899357148345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea75c3a16e3141%3A0x5aee2e35bcc25930!2sMobile%20Tech%20Lab%20St.%20Vital!5e0!3m2!1sen!2sca!4v1704400000000!5m2!1sen!2sca"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mobile Tech Lab St. Vital Location"
                    className="w-full"
                  />
                </div>

                {/* Thompson Map */}
                <div className="overflow-hidden rounded-lg border bg-card shadow-sm">
                  <div className="border-b bg-muted/50 px-4 py-3">
                    <h3 className="font-semibold">{LOCATIONS[1].name}</h3>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2341.8442533087883!2d-97.83205152298!3d55.74447997312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52608b6e5c2b6e5d%3A0x1234567890abcdef!2s300%20Mystery%20Lake%20Rd%20%231530%2C%20Thompson%2C%20MB%20R8N%200M2!5e0!3m2!1sen!2sca!4v1704400000000!5m2!1sen!2sca"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mobile Tech Lab Thompson Location"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
