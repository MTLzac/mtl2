import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Wallet } from "lucide-react";

export const SamsungPremiumVsValueCards = () => {
  return (
    <section id="samsung-premium-vs-value" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-6 max-w-3xl text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Premium vs Value Samsung Screens
          </h2>
          <p className="text-muted-foreground md:text-lg">
            On select Galaxy models, we offer two quality tiers.
          </p>
        </div>

        <p className="mx-auto mb-10 max-w-3xl text-center text-base text-muted-foreground">
          Samsung's Super AMOLED and Dynamic AMOLED panels are some of the most expensive
          smartphone displays to replace. For select popular Galaxy models — Galaxy S22, S23, S24,
          A53, A54 — we offer two screen quality tiers: Premium (genuine OEM Samsung Service Pack)
          and Value (high-quality aftermarket OLED). For other models, we offer a single tier based
          on what's available. Get a personalized quote and we'll explain your options.
        </p>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {/* Premium */}
          <Card className="border-2 border-primary/40 bg-card">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Award className="h-5 w-5" />
              </div>
              <CardTitle className="text-xl text-primary">
                Premium Screen — Recommended
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Genuine OEM Samsung Service Pack screens — identical to factory original.
              </p>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <div className="font-semibold text-foreground">Quality</div>
                <p className="text-muted-foreground">
                  Genuine Samsung Service Pack OLED panel. Identical color, brightness, and touch
                  response to original.
                </p>
              </div>
              <div>
                <div className="font-semibold text-foreground">Warranty</div>
                <p className="text-muted-foreground">
                  Lifetime of the device, against manufacturing defects in the replacement part.
                  Doesn't cover physical damage, liquid damage, or component failures unrelated to
                  our repair work.
                </p>
              </div>
              <div>
                <div className="font-semibold text-foreground">Performance</div>
                <p className="text-muted-foreground">Identical to factory original.</p>
              </div>
              <div>
                <div className="font-semibold text-foreground">Best for</div>
                <p className="text-muted-foreground">
                  Customers who want long-term reliability and factory-original quality.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Value */}
          <Card className="border-2 border-success/40 bg-card">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-success/10 text-success">
                <Wallet className="h-5 w-5" />
              </div>
              <CardTitle className="text-xl text-success">Value Screen — Budget Option</CardTitle>
              <p className="text-sm text-muted-foreground">
                Aftermarket OLED panel — meets daily use standards at a lower cost.
              </p>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <div className="font-semibold text-foreground">Quality</div>
                <p className="text-muted-foreground">
                  Aftermarket OLED panel. Color reproduction and brightness slightly less vivid
                  than Premium, but unnoticeable for typical use.
                </p>
              </div>
              <div>
                <div className="font-semibold text-foreground">Warranty</div>
                <p className="text-muted-foreground">
                  30 days against manufacturing defects in the replacement part. Same exclusions as
                  Premium.
                </p>
              </div>
              <div>
                <div className="font-semibold text-foreground">Performance</div>
                <p className="text-muted-foreground">
                  Indistinguishable in everyday use for most customers.
                </p>
              </div>
              <div>
                <div className="font-semibold text-foreground">Best for</div>
                <p className="text-muted-foreground">
                  Older devices, customers planning to trade in within 12 months, or anyone who
                  wants a working phone at the lowest cost. About 30% of customers choose Value.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-sm text-muted-foreground">
          Samsung's foldable screens (Z Fold and Z Flip inner displays) are typically only
          available as Premium genuine Samsung Service Pack — Value/aftermarket alternatives don't
          exist for the folding display technology. Outer screens have more options.
        </p>
      </div>
    </section>
  );
};
