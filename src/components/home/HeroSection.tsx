import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, ShoppingBag, Star, ExternalLink } from "lucide-react";
import { PRIMARY_PHONE, PRIMARY_GMB_URL } from "@/lib/locations";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";
const SHOP_URL = "https://shop.mobiletechlab.ca";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust Badges */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={PRIMARY_GMB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
            >
              <Star className="h-4 w-4 fill-primary" />
              4.8/5 Google Rating
              <ExternalLink className="h-3 w-3 opacity-60" />
            </a>
            <a
              href={PRIMARY_GMB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-4 py-1.5 text-sm font-medium text-success transition-colors hover:bg-success/20"
            >
              500+ Reviews
              <ExternalLink className="h-3 w-3 opacity-60" />
            </a>
            <span className="inline-flex items-center rounded-full bg-foreground/10 px-4 py-1.5 text-sm font-medium text-foreground">
              Price Match Guarantee
            </span>
          </div>

          {/* H1 */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Winnipeg's Trusted Cell Phone, iPhone & iPad{" "}
            <span className="text-primary">Repair Experts</span>
          </h1>

          {/* Tagline */}
          <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
            iPhones, iPads, Samsung, Laptops, Consoles & More — Fixed Fast, Priced Fair
          </p>

          {/* 3 CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="gradient-primary w-full text-lg sm:w-auto"
              asChild
            >
              <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer">
                Get Repair Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full text-lg sm:w-auto"
              asChild
            >
              <a href={`tel:${PRIMARY_PHONE}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call For Quote
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full text-lg sm:w-auto"
              asChild
            >
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Devices
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/4 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
};
