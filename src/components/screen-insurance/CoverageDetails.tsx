import { Check, X } from "lucide-react";
import { COVERAGE_INCLUDED, COVERAGE_EXCLUDED } from "@/lib/screen-insurance-data";

export function CoverageDetails() {
  return (
    <section className="bg-secondary/40 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">What's Covered</h2>
          <p className="text-muted-foreground md:text-lg">
            Clear, no-surprises coverage for your screen.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
          {/* Included */}
          <div className="rounded-xl border border-success/30 bg-success/5 p-6">
            <h3 className="mb-4 text-lg font-bold text-success">Covered</h3>
            <ul className="space-y-3">
              {COVERAGE_INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Excluded */}
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6">
            <h3 className="mb-4 text-lg font-bold text-destructive">Not Covered</h3>
            <ul className="space-y-3">
              {COVERAGE_EXCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
