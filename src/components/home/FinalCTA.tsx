import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRIMARY_PHONE, PRIMARY_PHONE_FORMATTED } from "@/lib/locations";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";
const SHOP_URL = "https://shop.mobiletechlab.ca";

export const FinalCTA = () => {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Ready to Get Your Device Fixed?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Fast answers from real technicians • No obligation
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Primary CTA - Call */}
            <div className="flex w-full flex-col items-center sm:w-auto">
              <Button
                size="lg"
                className="gradient-primary w-full px-8 text-lg font-semibold sm:w-auto"
                asChild
              >
                <a href={`tel:${PRIMARY_PHONE}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {PRIMARY_PHONE_FORMATTED}
                </a>
              </Button>
              <p className="mt-2 text-sm text-muted-foreground">
                Fastest way to get pricing & availability
              </p>
              <p className="text-xs text-muted-foreground/80">
                Speak to a real technician • No obligation
              </p>
            </div>

            {/* Secondary CTA - Quote */}
            <div className="flex w-full flex-col items-center sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full text-lg sm:w-auto"
                asChild
              >
                <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer">
                  Get Repair Quote Online
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="mt-2 text-sm text-muted-foreground">
                Prefer not to call? We've got you.
              </p>
            </div>
          </div>

          {/* Subtle fallback link */}
          <p className="mt-8 text-sm text-muted-foreground">
            Looking for pre-owned devices?{" "}
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              Shop Pre-Owned
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
