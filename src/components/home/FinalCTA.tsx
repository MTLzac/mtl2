import { ArrowRight, Phone, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRIMARY_PHONE, PRIMARY_PHONE_FORMATTED } from "@/lib/locations";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";
const SHOP_URL = "https://shop.mobiletechlab.ca";

export const FinalCTA = () => {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Get Your Device Fixed?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Free 5-minute assessment • Price match guarantee • Same-day service available
          </p>

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
                Call {PRIMARY_PHONE_FORMATTED}
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
                Shop Pre-Owned
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
