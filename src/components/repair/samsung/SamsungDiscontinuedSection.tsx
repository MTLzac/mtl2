import { XCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const NOTE_ROWS = [
  "Galaxy Note 20 Ultra",
  "Galaxy Note 20",
  "Galaxy Note 10+",
  "Galaxy Note 10",
  "Galaxy Note 9",
  "Galaxy Note 8",
];

export const SamsungDiscontinuedSection = () => {
  return (
    <section
      id="samsung-discontinued"
      className="border-y border-destructive/30 py-20 md:py-24"
      style={{ backgroundColor: "hsl(0 100% 98%)" }}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center rounded-md border border-destructive/40 bg-destructive/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-destructive line-through">
              Samsung: Discontinued
            </span>
            <span className="inline-flex items-center rounded-md border border-success/50 bg-success/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-success">
              MTL: We Fix It
            </span>
          </div>
          <h2 className="mb-3 text-4xl font-extrabold md:text-5xl">
            Samsung Discontinued These Galaxies. We Still Repair Them.
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Samsung Canada no longer offers service for these models — making us one of the only
            repair options left in Manitoba.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Desktop */}
          <div className="hidden overflow-hidden rounded-lg border border-border bg-card md:block">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr className="text-left">
                  <th className="px-4 py-3 font-semibold">Model</th>
                  <th className="px-4 py-3 font-semibold">Samsung Canada</th>
                  <th className="px-4 py-3 font-semibold bg-primary/5 text-primary">
                    Mobile Tech Lab
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {NOTE_ROWS.map((model) => (
                  <tr key={model} className="hover:bg-muted/30">
                    <td className="px-4 py-3 font-medium text-foreground">{model}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-destructive/40 bg-destructive/10 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-destructive">
                        <XCircle className="h-3.5 w-3.5" />
                        Discontinued
                      </span>
                    </td>
                    <td className="px-4 py-3 bg-primary/5">
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-success/50 bg-success/15 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-success">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Quote required
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="space-y-3 md:hidden">
            {NOTE_ROWS.map((model) => (
              <div
                key={model}
                className="rounded-lg border border-border bg-card p-4 space-y-2"
              >
                <div className="font-semibold text-foreground">{model}</div>
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-destructive/40 bg-destructive/10 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-destructive">
                    <XCircle className="h-3.5 w-3.5" />
                    Samsung Discontinued
                  </span>
                </div>
                <div className="pt-1">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-success/50 bg-success/15 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-success">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    MTL: Quote required
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            Samsung's authorized service network no longer offers screen repairs or screen module
            replacement for any Galaxy Note model. The phones still work — Samsung has just stopped
            supporting them. We use quality aftermarket parts (and OEM-equivalent where available)
            to restore Note devices. Pricing varies based on current part costs and availability —
            get an exact quote in 1–2 business hours.
          </p>

          <div className="mt-6 flex justify-center">
            <Button size="lg" className="gradient-primary" asChild>
              <a href="/quote">Get a Quote for Your Note →</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
