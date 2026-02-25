import { Shield, ShieldOff } from "lucide-react";

export function InsuranceComparison() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Why Screen Protection?
          </h2>
          <p className="text-muted-foreground md:text-lg">
            See how much you save when accidents happen.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {/* Without */}
          <div className="rounded-xl border bg-card p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-muted-foreground">
              <ShieldOff className="h-5 w-5" />
              <h3 className="text-lg font-bold">Without Protection</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Pay up to $500 per repair</li>
              <li>Unexpected out-of-pocket expense</li>
              <li>May delay getting your phone fixed</li>
              <li>Standard warranty on repair only</li>
            </ul>
          </div>

          {/* With */}
          <div className="rounded-xl border-2 border-primary bg-primary/5 p-8 shadow-md">
            <div className="mb-4 flex items-center gap-2 text-primary">
              <Shield className="h-5 w-5" />
              <h3 className="text-lg font-bold">With Screen Protection</h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="font-medium">$0 screen replacement — already paid for</li>
              <li>Premium-quality part included</li>
              <li>Walk in any time within 12 months — no wait for approval</li>
              <li>One device, one year, total peace of mind</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
