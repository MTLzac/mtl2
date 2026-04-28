import { Button } from "@/components/ui/button";

interface FoldRow {
  model: string;
  type: string;
  samsung: string;
  mtl: string;
  save: string;
}

const FOLD_ROWS: FoldRow[] = [
  { model: "Galaxy Z Fold7", type: "Inner screen module", samsung: "$861", mtl: "$599", save: "$262" },
  { model: "Galaxy Z Fold7", type: "Outer screen", samsung: "$236", mtl: "$179", save: "$57" },
  { model: "Galaxy Z Fold6", type: "Inner screen", samsung: "$770", mtl: "$549", save: "$221" },
  { model: "Galaxy Z Fold6", type: "Outer screen", samsung: "$228", mtl: "$179", save: "$49" },
  { model: "Galaxy Z Fold5", type: "Inner screen", samsung: "$702", mtl: "$499", save: "$203" },
  { model: "Galaxy Z Fold5", type: "Outer screen", samsung: "$222", mtl: "$169", save: "$53" },
  { model: "Galaxy Z Fold4", type: "Inner screen", samsung: "$711", mtl: "$499", save: "$212" },
  { model: "Galaxy Z Fold4", type: "Outer screen", samsung: "$232", mtl: "$169", save: "$63" },
  { model: "Galaxy Z Fold3 5G", type: "Inner screen", samsung: "$902", mtl: "$499", save: "$403" },
  { model: "Galaxy Z Fold3 5G", type: "Outer screen", samsung: "$165", mtl: "$149", save: "$16" },
  { model: "Galaxy Z Flip7", type: "Inner screen module", samsung: "$456", mtl: "$349", save: "$107" },
  { model: "Galaxy Z Flip7", type: "Outer screen", samsung: "$215", mtl: "$149", save: "$66" },
  { model: "Galaxy Z Flip6", type: "Inner screen", samsung: "$439", mtl: "$329", save: "$110" },
  { model: "Galaxy Z Flip6", type: "Outer screen", samsung: "$195", mtl: "$129", save: "$66" },
  { model: "Galaxy Z Flip5", type: "Inner screen", samsung: "$475", mtl: "$329", save: "$146" },
  { model: "Galaxy Z Flip5", type: "Outer screen", samsung: "$206", mtl: "$129", save: "$77" },
  { model: "Galaxy Z Flip4", type: "Inner screen", samsung: "$468", mtl: "$299", save: "$169" },
  { model: "Galaxy Z Flip4", type: "Outer screen", samsung: "$180", mtl: "$99", save: "$81" },
  { model: "Galaxy Z Flip3 5G", type: "Inner screen", samsung: "$496", mtl: "$299", save: "$197" },
  { model: "Galaxy Z Flip3 5G", type: "Outer screen", samsung: "$145", mtl: "$99", save: "$46" },
];

export const SamsungFoldableSection = () => {
  return (
    <section id="foldable-specialist" className="bg-muted/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Manitoba's Galaxy Z Fold &amp; Z Flip Repair Specialists
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Foldable repair is a niche specialty — and we've earned it. Samsung Canada Fold inner
            screens cost up to $902. We repair them for significantly less.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <p className="mb-8 text-base text-muted-foreground md:text-lg">
            Galaxy Z Fold and Z Flip repairs require specialized technique. The folding display
            panels are made from Ultra Thin Glass (UTG) — entirely different technology from
            standard smartphone screens. Mobile Tech Lab is one of the few Manitoba repair shops
            with the experience, parts access, and tooling to fix foldables properly. Same-day
            service when parts are in stock; otherwise 2–5 business days for parts arrival.
          </p>

          {/* Desktop */}
          <div className="hidden overflow-hidden rounded-lg border border-border bg-card md:block">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr className="text-left">
                  <th className="px-4 py-3 font-semibold">Model</th>
                  <th className="px-4 py-3 font-semibold">Repair Type</th>
                  <th className="px-4 py-3 font-semibold">Samsung Canada</th>
                  <th className="px-4 py-3 font-semibold bg-primary/5 text-primary">MTL From</th>
                  <th className="px-4 py-3 font-semibold text-success">You Save</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {FOLD_ROWS.map((row, i) => (
                  <tr key={`${row.model}-${i}`} className="hover:bg-muted/30">
                    <td className="px-4 py-3 font-medium text-foreground">{row.model}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.type}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.samsung}</td>
                    <td className="px-4 py-3 font-semibold bg-primary/5">{row.mtl}</td>
                    <td className="px-4 py-3 font-semibold text-success">{row.save}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="space-y-3 md:hidden">
            {FOLD_ROWS.map((row, i) => (
              <div
                key={`${row.model}-${i}`}
                className="rounded-lg border border-border bg-card p-4 space-y-2"
              >
                <div className="font-semibold text-foreground">{row.model}</div>
                <div className="text-xs text-muted-foreground">{row.type}</div>
                <div className="grid grid-cols-2 gap-2 text-sm pt-1">
                  <div className="text-muted-foreground">Samsung Canada:</div>
                  <div className="text-right">{row.samsung}</div>
                  <div className="text-primary">MTL From:</div>
                  <div className="text-right font-semibold">{row.mtl}</div>
                  <div className="text-success">You Save:</div>
                  <div className="text-right font-semibold text-success">{row.save}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm italic text-muted-foreground">
            MTL prices are anchor estimates — exact quotes vary based on current part costs and
            physical inspection.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-3 text-lg font-bold text-foreground">
              Why we specialize in foldables
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">▸</span>
                <span>Most Manitoba repair shops don't carry foldable parts at all</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">▸</span>
                <span>
                  The folding display requires specialized handling — wrong technique can
                  permanently damage the device
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">▸</span>
                <span>
                  We've repaired hundreds of foldables since the original Galaxy Fold launched
                </span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-foreground">
              Bring your foldable to us with confidence. We'll inspect and give you an honest
              assessment.
            </p>
          </div>

          <div className="mt-6 flex justify-center">
            <Button size="lg" className="gradient-primary" asChild>
              <a href="/quote">Get a Foldable Quote →</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
