import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const WaterDamagePricing = () => {
  const rows = [
    { service: "Diagnostic fee (opening device, assessing damage)", price: "$49", notes: "Credited toward final repair, non-refundable" },
    { service: "Liquid damage cleaning + repair attempt", price: "$149+", notes: "Varies by damage extent and components needed" },
    { service: "Data recovery attempt (no device repair)", price: "$129 + tax", notes: "No guarantee, regardless of outcome" },
    { service: "Replacement parts (screen, battery, charging port, etc.)", price: "Varies", notes: "Quoted separately during assessment" },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              What Liquid Damage Repair Costs
            </h2>
            <p className="text-muted-foreground">
              No surprises, no hidden fees. Here's our exact pricing structure.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block overflow-hidden rounded-xl border border-border bg-card">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Service</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Price</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Notes</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="p-4 text-foreground font-medium">{row.service}</td>
                    <td className="p-4 text-primary font-bold">{row.price}</td>
                    <td className="p-4 text-muted-foreground text-sm">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {rows.map((row, i) => (
              <div key={i} className="bg-card border rounded-xl p-5">
                <p className="font-medium text-foreground mb-1">{row.service}</p>
                <p className="text-primary font-bold text-lg mb-2">{row.price}</p>
                <p className="text-muted-foreground text-sm">{row.notes}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-muted/40 border border-border rounded-xl p-6">
            <p className="font-semibold text-foreground mb-3">Important pricing notes:</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "All fees are clearly explained before any work begins. You can decline at any point during the process and only pay the diagnostic fee.",
                "We do not charge for the recovery attempt if we determine your device is unrecoverable before opening it.",
                "Liquid damage repairs do not carry warranty — this is industry-standard, not specific to us. We'll explain why during your diagnostic.",
                "For severe cases where specialty services would be a better fit, we'll tell you upfront before charging anything beyond the diagnostic fee.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" asChild>
              <a href="/#quote">
                Get a Diagnostic Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
