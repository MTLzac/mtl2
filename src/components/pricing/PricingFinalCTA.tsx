import { MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const PricingFinalCTA = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-background to-primary/5 p-8 md:p-12 text-center border border-primary/10">
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              Ready to Get a Quote?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
              Tell us about your device and we'll give you an honest assessment
              — no pressure, no hidden fees.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Card className="w-full sm:w-auto border-border/50 bg-card">
                <CardContent className="flex flex-col items-center gap-3 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Get Repair Quote</h3>
                  <p className="text-sm text-muted-foreground">
                    Describe your issue online
                  </p>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a
                      href="https://mobiletechlab.ca/quote"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Request Quote
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="w-full sm:w-auto border-border/50 bg-card">
                <CardContent className="flex flex-col items-center gap-3 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Call or Text Us</h3>
                  <p className="text-sm text-muted-foreground">
                    Speak directly with our team
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:2045009757">(204) 500-9757</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Serving Winnipeg (St. Vital, Thompson locations) and mail-in
              customers across Manitoba.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
