import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const devices = [
  { name: "iPhone XR", slug: "iphone-xr", year: "2018", status: "Aging" },
  { name: "iPhone XS", slug: "iphone-xs", year: "2018", status: "Aging" },
  { name: "iPhone XS Max", slug: "iphone-xs-max", year: "2018", status: "Aging" },
  { name: "iPhone 11", slug: "iphone-11", year: "2019", status: "Supported" },
  { name: "iPhone 11 Pro", slug: "iphone-11-pro", year: "2019", status: "Supported" },
];

const DeviceHubIndex = () => (
  <>
    <Helmet>
      <title>Device Guides — Is Your Phone Still Worth Repairing? | Mobile Tech Lab</title>
      <meta name="description" content="Honest, data-driven device guides for popular smartphones. Find out if your phone is still worth repairing, trading in, or upgrading — from a Canadian repair shop." />
      <link rel="canonical" href="https://mobiletechlab.ca/devices/" />
    </Helmet>
    <BreadcrumbSchema items={[
      { name: "Home", url: "https://mobiletechlab.ca/" },
      { name: "Device Guides", url: "https://mobiletechlab.ca/devices/" },
    ]} />
    <Header />
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Device Guides
          </h1>
          <p className="text-lg text-muted-foreground">
            Honest, no-hype guides to help you decide whether your device is still worth repairing, <a href="https://www.apple.com/in/shop/trade-in/how-to" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">trading in</a>, or upgrading. Based on real repair data from our Manitoba shop.
          </p>
        </div>

        <div className="max-w-2xl mx-auto grid gap-3">
          {devices.map((d) => (
            <Link key={d.slug} to={`/devices/${d.slug}`}>
              <Card className="hover:border-primary/50 transition-colors group">
                <CardHeader className="flex-row items-center justify-between p-4 space-y-0">
                  <div>
                    <CardTitle className="text-base font-semibold">{d.name}</CardTitle>
                    <CardDescription className="text-xs">
                      {d.year} · {d.status}
                    </CardDescription>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default DeviceHubIndex;
