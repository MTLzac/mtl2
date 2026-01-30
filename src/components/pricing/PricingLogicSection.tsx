import { CheckCircle2 } from "lucide-react";
import { PRICING_LOGIC } from "@/lib/pricing-data";

export const PricingLogicSection = () => {
  return (
    <section className="bg-muted/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
            How We Think About Repair Pricing
          </h2>

          <div className="space-y-8">
            {PRICING_LOGIC.map((section) => (
              <div key={section.title} className="rounded-lg bg-card p-6 shadow-sm border border-border/50">
                <h3 className="mb-4 text-xl font-semibold text-foreground">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
