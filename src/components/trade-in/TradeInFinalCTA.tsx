import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { PRIMARY_PHONE } from "@/lib/locations";

const QUOTE_URL = "https://shop.mobiletechlab.ca/pages/repair2";

export const TradeInFinalCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Get Cash for Your Device — Today</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Walk in, get tested, get paid. Cash, e-transfer, or store credit. Same-day. We buy phones, tablets, laptops, MacBooks, consoles, smartwatches, video games, and gaming accessories. Even broken — if we can test it.
          </p>
          <p className="mb-8 text-base text-muted-foreground">
            Get an estimate in 1-2 business hours, walk in any time during business hours for an instant quote, or mail in from anywhere in Manitoba.
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
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
