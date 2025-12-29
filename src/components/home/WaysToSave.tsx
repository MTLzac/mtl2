import { Shield, RefreshCw, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PRIMARY_PHONE } from "@/lib/locations";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";

export const WaysToSave = () => {
  return (
    <section className="relative py-20 md:py-28">
      {/* Subtle background band for pattern break */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30" />
      
      <div className="container relative mx-auto px-4">
        {/* Headline & Framing */}
        <div className="mb-10 text-center md:mb-14">
          <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Worried About Repair Cost?{" "}
            <span className="text-primary">You Have Options.</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Most customers use one of these options to lower their repair cost.
          </p>
        </div>

        {/* Two-card layout */}
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 md:gap-8">
          {/* Card 1 — Price Match Guarantee */}
          <Card className="border-2 border-border/60 bg-card shadow-lg transition-shadow hover:shadow-xl">
            <CardContent className="flex flex-col p-6 md:p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              
              <h3 className="mb-3 text-xl font-bold leading-tight md:text-2xl">
                We'll Match Any Local Repair Price
              </h3>
              
              <p className="mb-6 flex-1 text-muted-foreground">
                Found a lower price at another Winnipeg repair shop? We'll match it — no pressure, no hassle.
              </p>
              
              <Button 
                variant="outline" 
                size="lg"
                className="w-full border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50" 
                asChild
              >
                <a href={`tel:${PRIMARY_PHONE}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Check If We Can Match Your Price
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Card 2 — Trade-In & Sell Your Device */}
          <Card className="border-2 border-border/60 bg-card shadow-lg transition-shadow hover:shadow-xl">
            <CardContent className="flex flex-col p-6 md:p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-success/10">
                <RefreshCw className="h-7 w-7 text-success" />
              </div>
              
              <h3 className="mb-3 text-xl font-bold leading-tight md:text-2xl">
                Lower Your Repair Cost With a Trade-In
              </h3>
              
              <p className="mb-3 text-muted-foreground">
                Trade in phones, tablets, consoles, laptops — even broken ones — to reduce the cost of your repair.
              </p>
              
              <p className="mb-6 flex-1 text-sm text-muted-foreground/80">
                Get paid via Cash, E-Transfer, or Store Credit
              </p>
              
              <Button 
                variant="outline" 
                size="lg"
                className="w-full border-success/30 text-foreground hover:bg-success/5 hover:border-success/50" 
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
