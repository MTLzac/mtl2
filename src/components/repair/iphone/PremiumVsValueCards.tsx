import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Wallet } from "lucide-react";

export const PremiumVsValueCards = () => {
  return (
    <section id="premium-vs-value" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Premium vs Value Screens — What's the Difference?
          </h2>
          <p className="text-muted-foreground md:text-lg">Both options work. Different tradeoffs.</p>
        </div>

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
                Our most popular tier. Factory-equivalent quality and longest warranty available.
              </p>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <div className="font-semibold text-foreground">Quality</div>
                <p className="text-muted-foreground">
                  Factory-equivalent OLED (or LCD on older models). Same color reproduction,
                  brightness, and touch responsiveness as the original Apple screen.
                  Indistinguishable in daily use.
                </p>
              </div>
              <div>
                <div className="font-semibold text-foreground">Warranty</div>
                <p className="text-muted-foreground">
                  Lifetime of the device, against manufacturing defects in the replacement part.
                  Doesn't cover physical damage, liquid damage, or component failures unrelated
                  to our repair work.
                </p>
              </div>
              <div>
                <div className="font-semibold text-foreground">Performance</div>
                <p className="text-muted-foreground">Identical to the original screen.</p>
              </div>
              <div>
                <div className="font-semibold text-foreground">Best for</div>
                <p className="text-muted-foreground">
                  Customers who want long-term reliability and factory-original quality. Most
                  customers choose Premium.
                </p>
              </div>
              <p className="rounded-md bg-primary/5 p-3 text-sm font-medium text-primary">
                Premium starts at $79 for older iPhones, $349 for iPhone 16 Pro Max.
              </p>
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
                The smart choice when you're upgrading soon, on a tight budget, or repairing an older iPhone.
              </p>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <div className="font-semibold text-foreground">Quality</div>
                <p className="text-muted-foreground">
                  Aftermarket OLED panel that meets daily use standards. Color reproduction and
                  brightness slightly less vivid than Premium, but unnoticeable for typical use
                  (texting, browsing, video calls).
                </p>
              </div>
              <div>
                <div className="font-semibold text-foreground">Warranty</div>
                <p className="text-muted-foreground">
                  30 days against manufacturing defects in the replacement part. Doesn't cover
                  physical damage, liquid damage, or component failures unrelated to our repair
                  work.
                </p>
              </div>
              <div>
                <div className="font-semibold text-foreground">Performance</div>
                <p className="text-muted-foreground">
                  Indistinguishable in everyday use. Most users who choose Value report being fully
                  satisfied.
                </p>
              </div>
              <div>
                <div className="font-semibold text-foreground">Best for</div>
                <p className="text-muted-foreground">
                  Older iPhones (iPhone 11 and below), customers planning to trade in within 12
                  months, or anyone who wants a working phone at the lowest cost. About 30% of
                  customers choose Value.
                </p>
              </div>
              <p className="rounded-md bg-success/5 p-3 text-sm font-medium text-success">
                Value starts at $69 (older iPhones) and tops out at $219 (iPhone 16 Pro Max).
              </p>
            </CardContent>
          </Card>
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-sm text-muted-foreground">
          Most customers choose Premium for the longest warranty and factory-equivalent quality.
          Value is genuinely the right choice if your iPhone is older, you're planning to trade in
          within a year, or the budget difference matters most. Either way, we install both with
          the same care and same-day service when parts are in stock.
        </p>
      </div>
    </section>
  );
};
