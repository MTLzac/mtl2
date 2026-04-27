import { XCircle } from "lucide-react";

const ROWS = [
  { model: "iPhone 11 Pro Max", premium: "$159", value: "$99" },
  { model: "iPhone 11 Pro", premium: "$179", value: "$99" },
  { model: "iPhone XS Max", premium: "$149", value: "$99" },
  { model: "iPhone XS", premium: "$149", value: "$99" },
  { model: "iPhone X", premium: "$149", value: "$99" },
  { model: "iPhone SE (1st Gen, 2016)", premium: "$79", value: "$69" },
  { model: "iPhone 8 Plus", premium: "$89", value: "$79" },
  { model: "iPhone 8", premium: "$89", value: "$79" },
];

export const AppleVintageSection = () => {
  return (
    <section
      id="apple-wont-service"
      className="border-y border-destructive/30 bg-destructive/[0.04] py-20 md:py-24"
      style={{ backgroundColor: "hsl(0 100% 98%)" }}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center rounded-md border border-destructive/40 bg-destructive/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-destructive line-through">
              Apple: Declined
            </span>
            <span className="inline-flex items-center rounded-md border border-success/50 bg-success/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-success">
              MTL: Available
            </span>
          </div>
          <h2 className="mb-3 text-4xl font-extrabold md:text-5xl">
            Apple Won't Touch These iPhones. We Will.
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Apple Canada has classified these iPhones as vintage or obsolete — meaning Apple Stores
            and Authorized Service Providers will no longer repair them. We still do.
          </p>
        </div>

        {/* "Apple-only alternative" callout */}
        <div className="mx-auto mb-8 max-w-4xl rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-background to-success/5 p-6 md:p-7">
          <h3 className="mb-2 text-xl font-bold text-foreground md:text-2xl">
            If you own one of these iPhones, you may have nowhere else to go
          </h3>
          <p className="text-base text-muted-foreground md:text-lg">
            Apple's vintage classification means independent repair shops are now your only
            legitimate path to a working screen. Mobile Tech Lab repairs all of these at standard
            Premium ($79–$179) or Value ($69–$99) pricing — the same care and quality we give
            every iPhone.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Desktop */}
          <div className="hidden overflow-hidden rounded-lg border border-border bg-card md:block">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr className="text-left">
                  <th className="px-4 py-3 font-semibold">Model</th>
                  <th className="px-4 py-3 font-semibold">Apple Canada</th>
                  <th className="px-4 py-3 font-semibold bg-primary/5 text-primary">
                    Mobile Tech Lab Premium
                  </th>
                  <th className="px-4 py-3 font-semibold text-success">Mobile Tech Lab Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {ROWS.map((row) => (
                  <tr key={row.model} className="hover:bg-muted/30">
                    <td className="px-4 py-3 font-medium text-foreground">{row.model}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-destructive/40 bg-destructive/10 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-destructive">
                        <XCircle className="h-3.5 w-3.5" />
                        Apple Says No
                      </span>
                    </td>
                    <td className="px-4 py-3 bg-primary/5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center rounded-md border border-success/50 bg-success/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-success">
                          We Fix It
                        </span>
                        <span className="font-semibold text-foreground">{row.premium}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center rounded-md border border-success/50 bg-success/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-success">
                          We Fix It
                        </span>
                        <span className="font-semibold text-success">{row.value}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="space-y-3 md:hidden">
            {ROWS.map((row) => (
              <div key={row.model} className="rounded-lg border border-border bg-card p-4 space-y-2">
                <div className="font-semibold text-foreground">{row.model}</div>
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-destructive/40 bg-destructive/10 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-destructive">
                    <XCircle className="h-3.5 w-3.5" />
                    Apple Says No
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm pt-1 items-center">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex items-center rounded-md border border-success/50 bg-success/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-success">
                      We Fix
                    </span>
                    <span className="text-primary">Premium</span>
                  </div>
                  <div className="text-right font-semibold">{row.premium}</div>
                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex items-center rounded-md border border-success/50 bg-success/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-success">
                      We Fix
                    </span>
                    <span className="text-success">Value</span>
                  </div>
                  <div className="text-right font-semibold text-success">{row.value}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            Apple's{" "}
            <a
              href="https://support.apple.com/en-ca/102772"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              vintage and obsolete classification
            </a>{" "}
            means these iPhones can no longer get screen repairs through Apple Stores or Apple
            Authorized Service Providers. The phones still work — Apple has just stopped supporting
            them. We use quality aftermarket and compatible OEM parts to restore your device with
            full screen functionality. Same-day service when parts are in stock. If your iPhone
            isn't on this list and you're not sure whether Apple still services it, check{" "}
            <a
              href="https://support.apple.com/en-ca/iphone/repair"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Apple Canada's repair tool
            </a>{" "}
            — and if Apple says no, give us a call.
          </p>
        </div>
      </div>
    </section>
  );
};
