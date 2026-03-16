import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Phone, ArrowRight, MapPin, Truck } from "lucide-react";
import { PRIMARY_PHONE, PRIMARY_PHONE_FORMATTED } from "@/lib/locations";
import { SERVICE_AREAS, getServiceAreaHref, getServiceAreasByProvince } from "@/lib/service-areas";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const ServiceAreasIndex = () => {
  return (
    <>
      <Helmet>
        <title>Mobile Tech Lab | Manitoba Mail-In Phone Repair Service Areas</title>
        <meta
          name="description"
          content="We serve customers across Manitoba with fast mail-in phone and device repair from our Winnipeg lab. View towns we service and request a prepaid shipping label."
        />
        <link rel="canonical" href="https://mobiletechlab.ca/service-areas" />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mobiletechlab.ca" },
          { name: "Service Areas", url: "https://mobiletechlab.ca/service-areas" },
        ]}
      />

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Mail-In Phone Repair Across Manitoba
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Mobile Tech Lab offers fast, affordable mail-in phone and device repair to customers across Manitoba. 
              All mail-in repairs are handled through our certified Winnipeg repair lab, with most deliveries 
              arriving within 1–2 business days. Below are the towns we commonly serve.
            </p>
          </div>
        </section>

        {/* Service Areas Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center gap-3">
              <Package className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">
                Mail-In Service Areas Serviced by Our Winnipeg Location
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICE_AREAS.map((area) => (
                <Card
                  key={area.slug}
                  className="group transition-all hover:shadow-lg hover:border-primary/50"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{area.name}</h3>
                        {area.description && (
                          <p className="text-sm text-muted-foreground">
                            {area.description}
                          </p>
                        )}
                      </div>
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>

                    <div className="mb-4 space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Truck className="h-4 w-4" />
                        <span>{area.distance} from Winnipeg</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4" />
                        <span>{area.deliveryTime}</span>
                      </div>
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      <Link to={getServiceAreaHref(area.slug)}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Future Expansion Notice */}
            <div className="mt-8 rounded-lg border border-dashed border-border bg-muted/30 p-6 text-center">
              <p className="text-muted-foreground">
                <strong>More towns coming soon</strong> — we accept mail-in repairs from anywhere in Manitoba and across Canada.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">
              How Mail-In Repairs Work
            </h2>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Request a Quote",
                  desc: "Online or by phone — we'll confirm pricing and turnaround",
                },
                {
                  step: "2",
                  title: "Get a Shipping Label",
                  desc: "We email you a prepaid Canada Post shipping label",
                },
                {
                  step: "3",
                  title: "Ship Your Device",
                  desc: "Drop it at any Canada Post location near you",
                },
                {
                  step: "4",
                  title: "Fast Return",
                  desc: "We repair and ship it back, usually same-day",
                },
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

        {/* CTA Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="rounded-xl border border-border bg-background p-8 text-center shadow-sm">
              <h2 className="mb-2 text-2xl font-bold">Not Listed Here?</h2>
              <p className="mb-6 text-muted-foreground">
                We accept mail-in repairs from anywhere in Manitoba and across Canada. 
                Contact us to get started.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button asChild className="gradient-primary">
                  <a
                    href="https://shop.mobiletechlab.ca/pages/repair2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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

        {/* Physical Stores Mention */}
        <section className="border-t border-border py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground">
              Prefer in-person service? Visit our physical stores in{" "}
              <Link to="/location/winnipeg" className="text-primary hover:underline">
                Winnipeg (St. Vital)
              </Link>{" "}
              or{" "}
              <Link to="/location/thompson" className="text-primary hover:underline">
                Thompson
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServiceAreasIndex;
