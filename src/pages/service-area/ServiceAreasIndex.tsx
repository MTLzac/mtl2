import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Package, Phone, ArrowRight } from "lucide-react";
import { PRIMARY_PHONE, PRIMARY_PHONE_FORMATTED } from "@/lib/locations";

const PHYSICAL_LOCATIONS = [
  {
    name: "Winnipeg (St. Vital)",
    href: "/location/winnipeg",
    address: "St. Vital Centre, Winnipeg, MB",
    description: "Walk-in repairs, same-day service available",
  },
  {
    name: "Thompson",
    href: "/location/thompson",
    address: "Thompson, MB",
    description: "Northern Manitoba's repair destination",
  },
];

const SERVICE_AREAS = [
  {
    name: "Brandon",
    href: "/service-area/brandon",
    description: "Fast mail-in repairs for Brandon and surrounding areas",
  },
  {
    name: "Steinbach",
    href: "/service-area/steinbach",
    description: "Serving Steinbach and Southeast Manitoba",
  },
  {
    name: "Portage la Prairie",
    href: "/service-area/portage-la-prairie",
    description: "Mail-in service for Portage and Central Manitoba",
  },
];

const ServiceAreasIndex = () => {
  return (
    <>
      <Helmet>
        <title>Locations & Service Areas | Mobile Tech Lab</title>
        <meta
          name="description"
          content="Visit our physical repair stores in Winnipeg and Thompson, or use our mail-in repair service from anywhere in Manitoba including Brandon, Steinbach, and Portage la Prairie."
        />
        <link rel="canonical" href="https://mobiletechlab.ca/service-areas" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Our Locations & Service Areas
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Whether you prefer in-person repairs at our physical stores or the convenience of our mail-in service, 
              Mobile Tech Lab serves customers across Manitoba.
            </p>
          </div>
        </section>

        {/* Physical Stores Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center gap-3">
              <MapPin className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Physical Store Locations</h2>
            </div>
            <p className="mb-6 text-muted-foreground">
              Visit us in person for same-day repairs and expert consultation.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {PHYSICAL_LOCATIONS.map((location) => (
                <Card key={location.href} className="transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{location.name}</h3>
                        <p className="text-sm text-muted-foreground">{location.address}</p>
                      </div>
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <p className="mb-4 text-muted-foreground">{location.description}</p>
                    <Button asChild variant="outline">
                      <Link to={location.href}>
                        View Location <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mail-In Service Areas Section */}
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center gap-3">
              <Package className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Mail-In Service Areas</h2>
            </div>
            <p className="mb-6 text-muted-foreground">
              Don't live near a store? No problem. We offer fast, reliable mail-in repairs with prepaid shipping labels.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {SERVICE_AREAS.map((area) => (
                <Card key={area.href} className="transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <h3 className="text-xl font-semibold">{area.name}</h3>
                      <Package className="h-5 w-5 text-primary" />
                    </div>
                    <p className="mb-4 text-sm text-muted-foreground">{area.description}</p>
                    <Button asChild variant="outline" size="sm">
                      <Link to={area.href}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Areas Notice */}
            <div className="mt-8 rounded-lg border border-border bg-background p-6 text-center">
              <h3 className="mb-2 text-lg font-semibold">Not listed here?</h3>
              <p className="mb-4 text-muted-foreground">
                We accept mail-in repairs from anywhere in Manitoba and across Canada.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button asChild>
                  <a href="https://shop.mobiletechlab.ca/pages/repair2" target="_blank" rel="noopener noreferrer">
                    Get a Quote Online
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={`tel:${PRIMARY_PHONE}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    {PRIMARY_PHONE_FORMATTED}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">How Mail-In Repairs Work</h2>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                { step: "1", title: "Request a Quote", desc: "Online or by phone" },
                { step: "2", title: "Get a Shipping Label", desc: "Prepaid Canada Post label" },
                { step: "3", title: "Ship Your Device", desc: "To our repair center" },
                { step: "4", title: "Fast Return", desc: "Repaired and shipped back" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="mb-1 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServiceAreasIndex;
