import { Shield, RefreshCw, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PRIMARY_PHONE } from "@/lib/locations";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";

export const WaysToSave = () => {
  return (
    <section className="relative mt-12 py-20 md:mt-16 md:py-28">
      {/* Subtle background band for pattern break (2-4% contrast) */}
      <div className="absolute inset-0 bg-muted/30" />
      
      {/* Top divider line for visual pause */}
      <div className="absolute inset-x-0 top-0 h-px bg-border/50" />
      
      <div className="container relative mx-auto px-4">
        {/* Headline & Framing */}
        <div className="mb-10 text-center md:mb-14">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Worried About Repair Cost?{" "}
            <span className="text-primary">You Have Options.</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">
            Most customers use one of these options to lower their repair cost.
          </p>
        </div>

        {/* Two-card layout */}
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 md:gap-8">
          {/* Card 1 — Price Match Guarantee */}
          <Card className="border border-border/50 bg-card rounded-2xl shadow-sm transition-shadow duration-200 hover:shadow-md">
            <CardContent className="flex h-full flex-col p-6 md:p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="mb-3 text-xl font-bold leading-tight md:text-2xl">
                We'll Match Any Local Repair Price
              </h3>
              
              <p className="mb-6 flex-1 text-muted-foreground leading-relaxed">
                Found a lower price at another Winnipeg repair shop? We'll match it — so you don't overpay. No pressure. No hassle.
              </p>
              
              <Button 
                variant="outline" 
                size="lg"
                className="h-12 w-full rounded-lg border-border/80 bg-background text-foreground font-medium shadow-sm transition-all duration-200 hover:bg-muted hover:border-primary/50 hover:shadow-md active:scale-[0.98]" 
                asChild
              >
                <a href={`tel:${PRIMARY_PHONE}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Check If We Can Match Your Price
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Card 2 — Trade-In Option */}
          <Card className="border border-border/50 bg-card rounded-2xl shadow-sm transition-shadow duration-200 hover:shadow-md">
            <CardContent className="flex h-full flex-col p-6 md:p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="mb-3 text-xl font-bold leading-tight md:text-2xl">
                Lower Your Repair Cost With a Trade-In
              </h3>
              
              <p className="mb-2 text-muted-foreground leading-relaxed">
                Trade in phones, tablets, consoles, or laptops — even broken ones — to reduce today's repair cost.
              </p>
              
              <p className="mb-6 flex-1 text-sm text-muted-foreground/80">
                Get paid via Cash, E-Transfer, or Store Credit
              </p>
              
              <Button 
                size="lg"
                className="h-12 w-full rounded-lg border border-primary/40 bg-primary/10 text-primary font-medium shadow-sm transition-all duration-200 hover:bg-primary/15 hover:border-primary/60 hover:shadow-md active:scale-[0.98]" 
                asChild
              >
                <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer">
                  Lower My Repair Cost
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
