import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { PRIMARY_PHONE } from "@/lib/locations";

const QUOTE_URL = "https://shop.mobiletechlab.ca/pages/repair2";

export const TradeInHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Device Trade-In Program
            </span>
          </div>
          
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Sell Your Phone for Cash Near You in Winnipeg — <span>Get Paid Today</span>
          </h1>
          
          <p className="mb-2 text-xl font-medium text-foreground/90 md:text-2xl">
            Get top dollar for used, broken or unwanted devices with fast quotes, price match guarantee, and same-day payout.
          </p>
          
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            We buy iPhones, Androids, iPads, MacBooks and more—even with cracked screens or water damage. Our offers are based on real part costs: if parts get cheaper, your payout goes up, and if they rise, we adjust honestly.
          </p>
          
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gradient-primary text-lg" asChild>
              <a href={QUOTE_URL} target="_blank" rel="noopener noreferrer">
                Get Cash Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <a href={`tel:${PRIMARY_PHONE}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call For Quote
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
