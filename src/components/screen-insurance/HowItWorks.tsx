import { Smartphone, AlertTriangle, CheckCircle2 } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/lib/screen-insurance-data";

const ICONS = [Smartphone, AlertTriangle, CheckCircle2];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">How It Works</h2>
          <p className="text-muted-foreground md:text-lg">
            Three steps. Zero stress.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          {HOW_IT_WORKS_STEPS.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={s.step}
                className="group text-center rounded-xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="mb-2 block text-sm font-semibold text-primary">
                  Step {s.step}
                </span>
                <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
