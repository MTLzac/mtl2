import { Button } from "@/components/ui/button";

interface Row {
  model: string;
  range: string;
  notes: string;
}

interface Section {
  title: string;
  rows: Row[];
  note?: string;
}

const SECTIONS: Section[] = [
  {
    title: "Galaxy S26 Series (Newest)",
    rows: [
      { model: "Galaxy S26 Ultra", range: "$399 – $449", notes: "OEM Service Pack screen" },
      { model: "Galaxy S26+", range: "$299 – $329", notes: "OEM Service Pack screen" },
      { model: "Galaxy S26", range: "$249 – $279", notes: "OEM Service Pack screen" },
    ],
  },
  {
    title: "Galaxy S25 Series",
    rows: [
      { model: "Galaxy S25 Edge", range: "$399 – $449", notes: "OEM Service Pack screen" },
      { model: "Galaxy S25 Ultra", range: "$399 – $449", notes: "OEM Service Pack screen" },
      { model: "Galaxy S25+", range: "$299 – $329", notes: "OEM Service Pack screen" },
      { model: "Galaxy S25", range: "$249 – $279", notes: "OEM Service Pack screen" },
    ],
  },
  {
    title: "Galaxy S24 Series",
    rows: [
      { model: "Galaxy S24 Ultra", range: "$349 – $449", notes: "OEM Service Pack screen" },
      { model: "Galaxy S24+", range: "$279 – $329", notes: "OEM Service Pack screen" },
      { model: "Galaxy S24", range: "$249 – $279", notes: "OEM Service Pack screen" },
      { model: "Galaxy S24 FE", range: "$249 – $299", notes: "OEM Service Pack screen" },
    ],
  },
  {
    title: "Galaxy S23 Series",
    rows: [
      { model: "Galaxy S23 Ultra", range: "$349 – $429", notes: "OEM Service Pack screen" },
      { model: "Galaxy S23+", range: "$279 – $329", notes: "OEM Service Pack screen" },
      { model: "Galaxy S23", range: "$249 – $279", notes: "OEM Service Pack screen" },
      { model: "Galaxy S23 FE", range: "$249 – $279", notes: "OEM Service Pack screen" },
    ],
  },
  {
    title: "Galaxy S22 Series",
    rows: [
      { model: "Galaxy S22 Ultra", range: "$349 – $399", notes: "Premium / Value may be available" },
      { model: "Galaxy S22+", range: "$279 – $329", notes: "Premium / Value may be available" },
      { model: "Galaxy S22", range: "$249 – $279", notes: "Premium / Value may be available" },
    ],
  },
  {
    title: "Galaxy S21 / S20 Series",
    rows: [
      { model: "Galaxy S21 Ultra", range: "$329 – $379", notes: "Premium / Value may be available" },
      { model: "Galaxy S21+", range: "$279 – $299", notes: "Premium / Value may be available" },
      { model: "Galaxy S20 Ultra", range: "$299 – $349", notes: "Premium / Value may be available" },
      { model: "Galaxy S20+", range: "$249 – $279", notes: "Premium / Value may be available" },
      { model: "Galaxy S20", range: "$229 – $259", notes: "Premium / Value may be available" },
    ],
  },
  {
    title: "Galaxy A Series — our most affordable Samsung repairs",
    rows: [
      { model: "Galaxy A54 5G", range: "$129 – $179", notes: "Premium / Value may be available" },
      { model: "Galaxy A53 5G", range: "$129 – $179", notes: "Premium / Value may be available" },
      {
        model: "Galaxy A14 / A15 / A16 / A24 / A25 / A34 / A35 / A55",
        range: "From $129",
        notes: "Quote-based — many variants",
      },
      { model: "Galaxy A12 / A13 / A03", range: "$129 – $159", notes: "Quality varies by part availability" },
    ],
  },
  {
    title: "Galaxy Z Foldable Series",
    note: "See dedicated Foldable Specialist section above for complete Z Fold and Z Flip pricing breakdown.",
    rows: [
      { model: "Galaxy Z Fold (all gen, inner)", range: "$499 – $699", notes: "Specialty repair — see foldable section" },
      { model: "Galaxy Z Fold (all gen, outer)", range: "$179 – $229", notes: "Specialty repair — see foldable section" },
      { model: "Galaxy Z Flip (all gen, inner)", range: "$349 – $449", notes: "Specialty repair — see foldable section" },
      { model: "Galaxy Z Flip (all gen, outer)", range: "$99 – $149", notes: "Specialty repair — see foldable section" },
    ],
  },
  {
    title: "Galaxy Note Series (Samsung Discontinued)",
    rows: [
      {
        model: "Galaxy Note 8 / 9 / 10 / 10+ / 20 / 20 Ultra",
        range: "Quote required",
        notes: "Samsung discontinued service — we still repair",
      },
    ],
  },
];

export const SamsungPricingTable = () => {
  return (
    <section id="samsung-pricing-reference" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Complete Samsung Repair Pricing Reference
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Premium tier pricing across the Galaxy lineup. Get an exact quote in 1–2 hours.
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-10">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <div className="mb-3 rounded-md border border-border bg-muted/60 px-3 py-2.5">
                <h3 className="flex items-center gap-2 text-lg font-bold text-foreground md:text-xl">
                  <span className="text-primary">▸</span> {section.title}
                </h3>
              </div>

              {/* Desktop */}
              <div className="hidden overflow-hidden rounded-lg border border-border md:block">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr className="text-left">
                      <th className="px-4 py-3 font-semibold">Galaxy Model</th>
                      <th className="px-4 py-3 font-semibold bg-primary/5 text-primary">
                        Premium Tier Range
                      </th>
                      <th className="px-4 py-3 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {section.rows.map((row) => (
                      <tr key={row.model} className="hover:bg-muted/30">
                        <td className="px-4 py-3 font-medium text-foreground">{row.model}</td>
                        <td className="px-4 py-3 font-semibold bg-primary/5 text-foreground">
                          {row.range}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile */}
              <div className="space-y-3 md:hidden">
                {section.rows.map((row) => (
                  <div
                    key={row.model}
                    className="rounded-lg border border-border bg-card p-4 space-y-2"
                  >
                    <div className="font-semibold text-foreground">{row.model}</div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-primary">Premium Range:</div>
                      <div className="text-right font-semibold">{row.range}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">{row.notes}</div>
                  </div>
                ))}
              </div>

              {section.note && (
                <p className="mt-3 text-sm italic text-muted-foreground">{section.note}</p>
              )}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-sm italic text-muted-foreground">
          Premium tier pricing reflects genuine OEM Samsung Service Pack screens where available.
          Value tier (aftermarket alternatives) may be available on select models when supply
          permits — ask for a quote and we'll let you know your options. Pricing tracks current
          part costs and availability. Get an exact quote estimate in 1–2 business hours. We
          price-match any verifiable local competitor.
        </p>

        <div className="mt-6 flex justify-center">
          <Button size="lg" className="gradient-primary" asChild>
            <a href="/quote">Get a Quote for Your Galaxy →</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
