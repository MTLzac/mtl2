import { Button } from "@/components/ui/button";

interface FoldRow {
  model: string;
  type: string;
  mtl: string;
}

const FOLD_ROWS: FoldRow[] = [
  { model: "Galaxy Z Fold7", type: "Inner screen", mtl: "$599 – $699" },
  { model: "Galaxy Z Fold7", type: "Outer screen", mtl: "$179 – $229" },
  { model: "Galaxy Z Fold6", type: "Inner screen", mtl: "$549 – $649" },
  { model: "Galaxy Z Fold6", type: "Outer screen", mtl: "$179 – $229" },
  { model: "Galaxy Z Fold5", type: "Inner screen", mtl: "$499 – $599" },
  { model: "Galaxy Z Fold5", type: "Outer screen", mtl: "$179 – $199" },
  { model: "Galaxy Z Fold4", type: "Inner screen", mtl: "$499 – $599" },
  { model: "Galaxy Z Fold4", type: "Outer screen", mtl: "$179 – $199" },
  { model: "Galaxy Z Fold3 5G", type: "Inner screen", mtl: "$499 – $599" },
  { model: "Galaxy Z Fold3 5G", type: "Outer screen", mtl: "$179 – $199" },
  { model: "Galaxy Z Flip7", type: "Inner screen", mtl: "$399 – $449" },
  { model: "Galaxy Z Flip7", type: "Outer screen", mtl: "$129 – $149" },
  { model: "Galaxy Z Flip6", type: "Inner screen", mtl: "$349 – $449" },
  { model: "Galaxy Z Flip6", type: "Outer screen", mtl: "$99 – $149" },
  { model: "Galaxy Z Flip5", type: "Inner screen", mtl: "$349 – $449" },
  { model: "Galaxy Z Flip5", type: "Outer screen", mtl: "$99 – $149" },
  { model: "Galaxy Z Flip4", type: "Inner screen", mtl: "$349 – $399" },
  { model: "Galaxy Z Flip4", type: "Outer screen", mtl: "$99 – $129" },
  { model: "Galaxy Z Flip3 5G", type: "Inner screen", mtl: "$349 – $399" },
  { model: "Galaxy Z Flip3 5G", type: "Outer screen", mtl: "$99 – $129" },
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
            Foldable repair is a niche specialty — and we've earned it. We repair both Z Fold and
            Z Flip models, inner and outer screens.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="mb-8 space-y-4 text-base text-muted-foreground md:text-lg">
            <p>
              Galaxy Z Fold and Z Flip repairs require specialized technique. The folding display
              panels are made from Ultra Thin Glass (UTG) — entirely different technology from
              standard smartphone screens. For context,{" "}
              <a
                href="https://www.samsung.com/ca/support/Out-of-Warranty-Pricing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Samsung Canada's authorized service lists foldable repair pricing
              </a>{" "}
              up to $902 for some Z Fold inner screens — among the highest published phone repair
              prices in Canada. We typically save customers $200+ on foldable repairs while
              delivering the same OEM Samsung Service Pack quality on Premium tier.
            </p>
            <p>
              Mobile Tech Lab is one of the few Manitoba repair shops with the experience, parts
              access, and tooling to fix foldables properly. Same-day service when parts are in
              stock; otherwise 2–5 business days for parts arrival. Most foldable customers have
              their device back within 1 week of drop-off.
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden overflow-hidden rounded-lg border border-border bg-card md:block">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr className="text-left">
                  <th className="px-4 py-3 font-semibold">Model</th>
                  <th className="px-4 py-3 font-semibold">Repair Type</th>
                  <th className="px-4 py-3 font-semibold bg-primary/5 text-primary">
                    MTL Premium
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {FOLD_ROWS.map((row, i) => (
                  <tr key={`${row.model}-${i}`} className="hover:bg-muted/30">
                    <td className="px-4 py-3 font-medium text-foreground">{row.model}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.type}</td>
                    <td className="px-4 py-3 font-semibold bg-primary/5 text-foreground">
                      {row.mtl}
                    </td>
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
                  <div className="text-primary">MTL Premium:</div>
                  <div className="text-right font-semibold">{row.mtl}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm italic text-muted-foreground">
            Pricing reflects Premium tier with genuine OEM Samsung Service Pack parts where
            available. Exact quote depends on current part costs and physical inspection. Get an
            estimate in 1–2 business hours.
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
              <li className="flex gap-2">
                <span className="text-primary">▸</span>
                <span>
                  Premium tier carries a lifetime-of-device warranty (vs Samsung's 90-day repair
                  warranty)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">▸</span>
                <span>
                  Foldable timeline: 2–5 business days for parts arrival, then 1–2 hours for
                  installation. Most foldable customers have their device back within 1 week of
                  drop-off — often sooner if your model's parts are in stock.
                </span>
              </li>
            </ul>
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
