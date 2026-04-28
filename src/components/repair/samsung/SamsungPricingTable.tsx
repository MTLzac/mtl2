import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Row {
  model: string;
  screen: string; // Samsung Canada screen repair
  module: string; // Samsung Canada screen module
  mtl: string; // MTL anchor
  save: string; // savings
  quoteRequired?: boolean;
}

interface Section {
  title: string;
  rows: Row[];
  note?: string;
  savings?: { label: string };
}

const SECTIONS: Section[] = [
  {
    title: "Galaxy S26 Series (Newest)",
    savings: { label: "Average savings vs Samsung Canada: from $33 (S26) up to $133+ (S26 Ultra)" },
    rows: [
      { model: "Galaxy S26 Ultra", screen: "$432", module: "—", mtl: "$299", save: "$133" },
      { model: "Galaxy S26+", screen: "$342", module: "—", mtl: "$249", save: "$93" },
      { model: "Galaxy S26", screen: "$277", module: "—", mtl: "$199", save: "$78" },
    ],
  },
  {
    title: "Galaxy S25 Series",
    savings: { label: "Average savings: from $11 (S25+) up to $66+ (S25 Edge module)" },
    rows: [
      { model: "Galaxy S25 Edge", screen: "—", module: "$406", mtl: "$349", save: "$57" },
      { model: "Galaxy S25 Ultra", screen: "$315", module: "—", mtl: "$299", save: "$16" },
      { model: "Galaxy S25+", screen: "$260", module: "—", mtl: "$249", save: "$11" },
      { model: "Galaxy S25", screen: "$220", module: "—", mtl: "$199", save: "$21" },
    ],
  },
  {
    title: "Galaxy S24 Series",
    rows: [
      { model: "Galaxy S24 Ultra", screen: "$311", module: "—", mtl: "$299", save: "$12" },
      { model: "Galaxy S24+", screen: "$260", module: "—", mtl: "$249", save: "$11" },
      { model: "Galaxy S24", screen: "$225", module: "—", mtl: "$199", save: "$26" },
      { model: "Galaxy S24 FE", screen: "$242", module: "$345", mtl: "$199", save: "$43" },
    ],
  },
  {
    title: "Galaxy S23 Series",
    rows: [
      { model: "Galaxy S23 Ultra", screen: "$351", module: "$426", mtl: "$299", save: "$52" },
      { model: "Galaxy S23+", screen: "$266", module: "$340", mtl: "$249", save: "$17" },
      { model: "Galaxy S23", screen: "$257", module: "$329", mtl: "$199", save: "$58" },
      { model: "Galaxy S23 FE", screen: "$236", module: "$335", mtl: "$199", save: "$37" },
    ],
  },
  {
    title: "Galaxy S22 Series",
    rows: [
      { model: "Galaxy S22 Ultra", screen: "$340", module: "$414", mtl: "$299", save: "$41" },
      { model: "Galaxy S22+", screen: "$263", module: "$319", mtl: "$249", save: "$14" },
      { model: "Galaxy S22", screen: "$252", module: "$311", mtl: "$199", save: "$53" },
    ],
  },
  {
    title: "Galaxy S21 / S20 Series",
    rows: [
      { model: "Galaxy S21 Ultra", screen: "$315", module: "$379", mtl: "$299", save: "$16" },
      { model: "Galaxy S21+", screen: "$258", module: "$308", mtl: "$249", save: "$9" },
      { model: "Galaxy S20 Ultra", screen: "$289", module: "$360", mtl: "$249", save: "$40" },
      { model: "Galaxy S20+", screen: "$252", module: "$360", mtl: "$199", save: "$53" },
      { model: "Galaxy S20", screen: "$256", module: "$457", mtl: "$199", save: "$57" },
    ],
  },
  {
    title: "Galaxy A Series",
    savings: {
      label:
        "Most A-series models require a quote — Samsung Canada doesn't publish pricing for A14, A15, A16, A24, A34, A55. We do.",
    },
    rows: [
      { model: "Galaxy A54 5G", screen: "$225", module: "$256", mtl: "$129", save: "$96" },
      { model: "Galaxy A53 5G", screen: "—", module: "$250", mtl: "$129", save: "$121" },
      { model: "Galaxy A13", screen: "—", module: "$200", mtl: "$129", save: "$71" },
      { model: "Galaxy A12 LTE", screen: "—", module: "$230", mtl: "$129", save: "$101" },
      { model: "Galaxy A03", screen: "—", module: "$225", mtl: "$129", save: "$96" },
      {
        model: "Galaxy A14 / A15 / A16 / A24 / A25 / A34 / A35 / A55",
        screen: "Not listed by Samsung",
        module: "—",
        mtl: "From $129",
        save: "Get a quote →",
        quoteRequired: true,
      },
    ],
  },
  {
    title: "Galaxy Z Foldable Summary",
    note: "See dedicated Foldable Specialist section below for model-by-model pricing.",
    rows: [
      {
        model: "Galaxy Z Fold (all gen, inner)",
        screen: "$702 – $902",
        module: "$684 – $861",
        mtl: "From $399",
        save: "$300 – $500+",
      },
      {
        model: "Galaxy Z Fold (all gen, outer)",
        screen: "$165 – $236",
        module: "—",
        mtl: "From $149",
        save: "Varies",
      },
      {
        model: "Galaxy Z Flip (all gen, inner)",
        screen: "$439 – $496",
        module: "$456 – $495",
        mtl: "From $299",
        save: "$140 – $200+",
      },
      {
        model: "Galaxy Z Flip (all gen, outer)",
        screen: "$145 – $236",
        module: "—",
        mtl: "From $99",
        save: "Varies",
      },
    ],
  },
];

const QuoteCell = ({ children }: { children: React.ReactNode }) => (
  <a
    href="/quote"
    className="group flex h-full w-full items-center justify-between gap-1 px-4 py-3 font-bold text-destructive transition-colors hover:bg-destructive hover:text-background"
  >
    <span>{children}</span>
    <span className="underline underline-offset-2">→</span>
  </a>
);

export const SamsungPricingTable = () => {
  return (
    <section id="samsung-pricing-comparison" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Complete Samsung Screen Repair Pricing Comparison
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Every Galaxy model. Samsung Canada's official pricing vs our anchor pricing. Verified
            April 27, 2026.
          </p>
        </div>

        <div className="mx-auto max-w-6xl space-y-10">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <div className="mb-3 rounded-md border border-border bg-muted/60 px-3 py-2.5">
                <h3 className="flex items-center gap-2 text-lg font-bold text-foreground md:text-xl">
                  <span className="text-primary">▸</span> {section.title}
                </h3>
                {section.savings && (
                  <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                    <span className="font-bold text-foreground">{section.savings.label}</span>
                  </p>
                )}
              </div>

              {/* Desktop */}
              <div className="hidden overflow-hidden rounded-lg border border-border md:block">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr className="text-left">
                      <th className="px-4 py-3 font-semibold">Galaxy Model</th>
                      <th className="px-4 py-3 font-semibold">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="inline-flex items-center gap-1">
                              Samsung Canada Screen
                              <Info className="h-3.5 w-3.5 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              Samsung Canada's published "Screen Repair" rate (panel only).
                              Verified April 27, 2026.
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </th>
                      <th className="px-4 py-3 font-semibold">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="inline-flex items-center gap-1">
                              Samsung Canada Module
                              <Info className="h-3.5 w-3.5 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              Samsung's "Screen Module" — includes panel + bezel + battery bundle.
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </th>
                      <th className="px-4 py-3 font-semibold bg-primary/5 text-primary">
                        MTL From
                      </th>
                      <th className="px-4 py-3 font-semibold text-success">You Save (Min)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {section.rows.map((row) => (
                      <tr key={row.model} className="hover:bg-muted/30">
                        <td className="px-4 py-3 font-medium text-foreground">{row.model}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.screen}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.module}</td>
                        <td
                          className={cn(
                            "px-4 py-3 font-semibold bg-primary/5",
                            row.quoteRequired && "p-0"
                          )}
                        >
                          {row.quoteRequired ? <QuoteCell>{row.mtl}</QuoteCell> : row.mtl}
                        </td>
                        <td
                          className={cn(
                            "px-4 py-3 font-semibold text-success",
                            row.quoteRequired && "p-0"
                          )}
                        >
                          {row.quoteRequired ? <QuoteCell>{row.save}</QuoteCell> : row.save}
                        </td>
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
                      <div className="text-muted-foreground">Samsung Screen:</div>
                      <div className="text-right">{row.screen}</div>
                      <div className="text-muted-foreground">Samsung Module:</div>
                      <div className="text-right">{row.module}</div>
                      <div className="text-primary">MTL From:</div>
                      <div className="text-right font-semibold">{row.mtl}</div>
                      <div className="text-success">You Save:</div>
                      <div className="text-right font-semibold text-success">{row.save}</div>
                    </div>
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
          Samsung Canada prices reflect Samsung's published Canadian out-of-warranty service rates
          as listed on{" "}
          <a
            href="https://www.samsung.com/ca/support/Out-of-Warranty-Pricing/"
            target="_blank"
            rel="noopener noreferrer"
            className="not-italic text-primary hover:underline"
          >
            samsung.com/ca/support
          </a>{" "}
          April 27, 2026. Samsung Canada's actual repair costs may vary by authorized service
          partner. Mobile Tech Lab pricing reflects our anchor "from" rates — your exact quote
          depends on current part costs and availability after physical inspection. Get an exact
          quote estimate in 1–2 business hours.
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
