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
    <section id="apple-wont-service" className="bg-secondary/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Apple Won't Service It — But We Will
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Apple Canada has classified these iPhones as vintage or obsolete and no longer offers
            repair service. Mobile Tech Lab still repairs them at standard Premium and Value pricing.
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
                      <span className="inline-flex items-center gap-1.5 italic text-destructive">
                        <XCircle className="h-4 w-4" />
                        Not serviced
                      </span>
                    </td>
                    <td className="px-4 py-3 bg-primary/5 font-semibold text-foreground">
                      {row.premium}
                    </td>
                    <td className="px-4 py-3 font-semibold text-success">{row.value}</td>
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
                <div className="inline-flex items-center gap-1.5 text-sm italic text-destructive">
                  <XCircle className="h-4 w-4" />
                  Apple: Not serviced
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm pt-1">
                  <div className="text-primary">MTL Premium:</div>
                  <div className="text-right font-semibold">{row.premium}</div>
                  <div className="text-success">MTL Value:</div>
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
