import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";
import { IPhoneHero } from "./IPhoneHero";

const SHOP_BASE = "https://shop.mobiletechlab.ca";

export function InsuranceHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left column — copy + CTA */}
          <div className="text-center md:text-left">
            {/* Badge */}
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Shield className="h-4 w-4" />
              Screen Protection Plans
            </span>

            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Full Year Screen Protection{" "}
              <span className="text-primary">for just $50</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Pay once, get a free Premium screen replacement for any iPhone
              within 12 months of purchase. No monthly fees. No deductibles.
            </p>

            <Button size="lg" className="gradient-primary text-lg" asChild>
              <a
                href={`${SHOP_BASE}/products/screen-protection`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Protect Your Device Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Right column — phone silhouette */}
          <div className="hidden md:flex items-center justify-center">
            <IPhoneHero />
          </div>
        </div>
      </div>

      {/* Background blobs */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/4 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
}
