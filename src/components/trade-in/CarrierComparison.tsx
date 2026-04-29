import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";

const QUOTE_URL = "https://shop.mobiletechlab.ca/pages/repair2";

const rows: { feature: string; carrier: string; mtl: string }[] = [
  { feature: "Payment type", carrier: "Bill credit only — usable on that carrier", mtl: "Cash, e-transfer, OR store credit (your choice)" },
  { feature: "When you get paid", carrier: "Spread over 24 months, OR delayed 1-3 billing cycles", mtl: "Same visit (in-store) or same day after mail-in inspection" },
  { feature: "Cash option", carrier: "Not available", mtl: "Walk out with cash same visit" },
  { feature: "Device must be unlocked?", carrier: "Yes", mtl: "Yes" },
  { feature: "Broken devices accepted?", carrier: "Usually declined or heavily devalued", mtl: "We test with temporary parts to value accurately" },
  { feature: "Inspection process", carrier: "Mail-in, then re-evaluated — quotes often reduced after", mtl: "In-person transparent, or trackable mail-in inspection" },
  { feature: "Required commitment", carrier: "New 24-month contract or device upgrade activation", mtl: "None — keep your existing plan" },
  { feature: "Data recovery support", carrier: "Not offered before trade", mtl: "$129 data recovery service available before you sell" },
];

export const CarrierComparison = () => {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Better Than Carrier Trade-In: Same-Day Cash, No Contract
          </h2>
          <p className="text-muted-foreground text-lg">
            Major Canadian carrier trade-in programs lock you into bill credit toward a new line activation. We buy your device outright — keep your existing plan, take the cash, decide your next move separately.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Carrier column */}
            <Card className="border-border/60 bg-muted/30">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-muted-foreground">Carrier Trade-In Programs</h3>
                <ul className="space-y-3">
                  {rows.map((r, i) => (
                    <li key={i} className="border-b border-border/40 pb-3 last:border-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/80 mb-1">{r.feature}</p>
                      <p className="flex items-start gap-2 text-sm text-foreground/80">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                        <span>{r.carrier}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* MTL column */}
            <Card className="border-primary/40 bg-primary/5 shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-primary">Mobile Tech Lab</h3>
                <ul className="space-y-3">
                  {rows.map((r, i) => (
                    <li key={i} className="border-b border-border/40 pb-3 last:border-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/80 mb-1">{r.feature}</p>
                      <p className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{r.mtl}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Honest framing paragraph */}
          <div className="mt-8 mx-auto max-w-3xl space-y-4 text-foreground/85">
            <p>
              The honest framing: carrier trade-in programs aren't designed to give you the most cash for your device — they're designed to subsidize a new line activation or device upgrade. The "trade-in value" you see is bill credit that only applies if you sign up for a new contract.
            </p>
            <p>
              We do something different. We buy your device outright. You take cash, e-transfer, or store credit the same visit (or same-day after mail-in inspection), and you keep your existing carrier plan. If you're upgrading anyway, that's still on the table — you can take a carrier promo separately and keep our cash. Your money. Your decision.
            </p>
          </div>

          {/* Upgrade Scenario Callout */}
          <Card className="mt-8 border-l-4 border-l-primary border-primary/30 bg-card">
            <CardContent className="p-6 md:p-8">
              <h3 className="mb-2 text-xl font-bold">Planning to upgrade your phone anyway?</h3>
              <p className="text-foreground/85">
                Get your upgrade with whatever carrier promotion works best — but bring us your old device first for same-day cash. Most customers walk out with $200-$400+ for a working older phone, plus their upgrade savings. You don't have to choose between us and a carrier promo. Use both.
              </p>
            </CardContent>
          </Card>

          <p className="mt-4 text-xs text-muted-foreground italic">
            Carrier trade-in offers and policies vary. Verify current terms with your specific carrier.
          </p>

          <div className="mt-8 text-center">
            <Button size="lg" className="gradient-primary" asChild>
              <a href={QUOTE_URL} target="_blank" rel="noopener noreferrer">
                Get Your Cash Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
