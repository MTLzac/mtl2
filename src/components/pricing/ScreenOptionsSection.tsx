import { Check, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SCREEN_TIERS } from "@/lib/pricing-data";
import { cn } from "@/lib/utils";

export const ScreenOptionsSection = () => {
  return (
    <section id="screen-options" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
            Screen Options (When Available)
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
            Not all devices have multiple options. We'll let you know what's
            available for your specific model.
          </p>

          {/* Tier Cards */}
          <div className="mb-10 grid gap-6 md:grid-cols-3">
            {SCREEN_TIERS.map((tier) => (
              <Card
                key={tier.name}
                className={cn(
                  "relative overflow-hidden transition-shadow hover:shadow-lg",
                  tier.highlight && "border-primary ring-2 ring-primary/20"
                )}
              >
                {tier.highlight && (
                  <div className="absolute right-0 top-0 rounded-bl-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{tier.type}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="font-medium">{tier.warranty}</span>
                    </div>
                    <p className="pl-6 text-sm text-muted-foreground">
                      {tier.warrantyDetail}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {tier.exclusions}
                  </p>
                  <p className="border-t border-border pt-4 text-sm text-muted-foreground">
                    {tier.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Important Note */}
          <div className="flex items-start gap-4 rounded-lg border border-primary/20 bg-primary/5 p-6">
            <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <p className="font-medium text-foreground">
                Warranty covers the part we installed
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                If another feature fails later and wasn't part of the repair, it
                isn't covered — but we're always happy to take a quick look.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
