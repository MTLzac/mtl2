import { useState } from "react";
import { ChevronDown, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";

interface Row {
  model: string;
  apple: string;
  premium: string;
  value: string;
  save?: string;
  bestDeal?: boolean;
  notServiced?: boolean;
  quoteRequired?: boolean;
}

interface Section {
  title: string;
  rows: Row[];
  note?: string;
  savings?: { label: string; premiumPct?: number; valuePct?: number };
}

const SECTIONS: Section[] = [
  {
    title: "iPhone 17 Series (Newest)",
    rows: [
      { model: "iPhone 17 Pro Max", apple: "$499", premium: "Get a quote →", value: "Get a quote →", save: "up to $300+", quoteRequired: true },
      { model: "iPhone 17 Pro", apple: "$429", premium: "Get a quote →", value: "Get a quote →", save: "up to $250+", quoteRequired: true },
      { model: "iPhone 17 Air", apple: "$429", premium: "Get a quote →", value: "Get a quote →", save: "up to $250+", quoteRequired: true },
      { model: "iPhone 17", apple: "$429", premium: "Get a quote →", value: "Get a quote →", save: "up to $250+", quoteRequired: true },
    ],
    note: "iPhone 17 series pricing depends on current part costs and quality tier. We typically save customers $200+ vs Apple. Get an exact quote in 1-2 business hours.",
    savings: { label: "Apple charges $429–$499. MTL pricing pending — typical savings $200+" },
  },
  {
    title: "iPhone 16 Series",
    rows: [
      { model: "iPhone 16 Pro Max", apple: "$499", premium: "$349", value: "$219", save: "$280" },
      { model: "iPhone 16 Pro", apple: "$429", premium: "$299", value: "$219", save: "$210" },
      { model: "iPhone 16 Plus", apple: "$429", premium: "$279", value: "$169", save: "$260" },
      { model: "iPhone 16", apple: "$365", premium: "$259", value: "$159", save: "$206" },
      { model: "iPhone 16e", apple: "$329", premium: "$179", value: "$129", save: "$200" },
    ],
    savings: { label: "Average savings: $231 (Premium) / $311 (Value)", premiumPct: 66, valuePct: 89 },
  },
  {
    title: "iPhone 15 Series",
    rows: [
      { model: "iPhone 15 Pro Max", apple: "$499", premium: "$259", value: "$149", save: "$350", bestDeal: true },
      { model: "iPhone 15 Pro", apple: "$429", premium: "$259", value: "$149", save: "$280" },
      { model: "iPhone 15 Plus", apple: "$429", premium: "$249", value: "$129", save: "$300" },
      { model: "iPhone 15", apple: "$429", premium: "$219", value: "$129", save: "$300" },
    ],
    savings: { label: "Average savings: $214 (Premium) / $312 (Value)", premiumPct: 61, valuePct: 89 },
  },
  {
    title: "iPhone 14 Series",
    rows: [
      { model: "iPhone 14 Pro Max", apple: "$499", premium: "$249", value: "$149", save: "$350", bestDeal: true },
      { model: "iPhone 14 Pro", apple: "$429", premium: "$249", value: "$149", save: "$280" },
      { model: "iPhone 14 Plus", apple: "$429", premium: "$189", value: "$99", save: "$330" },
      { model: "iPhone 14", apple: "$365", premium: "$179", value: "$99", save: "$266" },
    ],
    savings: { label: "Average savings: $237 (Premium) / $312 (Value)", premiumPct: 68, valuePct: 89 },
  },
  {
    title: "iPhone 13 Series",
    rows: [
      { model: "iPhone 13 Pro Max", apple: "$429", premium: "$199", value: "$129", save: "$300" },
      { model: "iPhone 13 Pro", apple: "$365", premium: "$199", value: "$129", save: "$236" },
      { model: "iPhone 13", apple: "$365", premium: "$169", value: "$129", save: "$236" },
      { model: "iPhone 13 Mini", apple: "$309", premium: "$199", value: "$129", save: "$180" },
    ],
    savings: { label: "Average savings: $187 (Premium) / $235 (Value)", premiumPct: 53, valuePct: 67 },
  },
  {
    title: "iPhone 12 Series",
    rows: [
      { model: "iPhone 12 Pro Max", apple: "$429", premium: "$179", value: "$129", save: "$300" },
      { model: "iPhone 12 Pro", apple: "$365", premium: "$169", value: "$129", save: "$236" },
      { model: "iPhone 12", apple: "$365", premium: "$169", value: "$99", save: "$266" },
      { model: "iPhone 12 Mini", apple: "$309", premium: "$169", value: "$129", save: "$180" },
    ],
    savings: { label: "Average savings: $191 (Premium) / $251 (Value)", premiumPct: 55, valuePct: 72 },
  },
  {
    title: "iPhone 11 / X / XR Series",
    rows: [
      { model: "iPhone 11", apple: "$259", premium: "$139", value: "$99", save: "$160" },
      { model: "iPhone XR", apple: "$259", premium: "$149", value: "$99", save: "$160" },
    ],
    savings: { label: "Average savings: $115 (Premium) / $160 (Value)", premiumPct: 33, valuePct: 46 },
  },
  {
    title: "iPhone SE (Apple-Serviced)",
    rows: [
      { model: "iPhone SE (3rd Gen, 2022)", apple: "$179", premium: "$89", value: "$79", save: "$100" },
      { model: "iPhone SE (2nd Gen, 2020)", apple: "$179", premium: "$89", value: "$79", save: "$100" },
    ],
    savings: { label: "Average savings: $90 (Premium) / $100 (Value)", premiumPct: 26, valuePct: 29 },
  },
];

const LEGACY_ROWS: Row[] = [
  { model: "iPhone 8 Plus", apple: "Not serviced", premium: "$89", value: "$79", notServiced: true },
  { model: "iPhone 8", apple: "Not serviced", premium: "$89", value: "$79", notServiced: true },
  { model: "iPhone 7 Plus", apple: "Not serviced", premium: "$89", value: "$79", notServiced: true },
  { model: "iPhone 7", apple: "Not serviced", premium: "$79", value: "$69", notServiced: true },
  { model: "iPhone 6S Plus", apple: "Not serviced", premium: "$89", value: "$79", notServiced: true },
  { model: "iPhone 6S", apple: "Not serviced", premium: "$89", value: "$79", notServiced: true },
  { model: "iPhone 6 Plus", apple: "Not serviced", premium: "$89", value: "$79", notServiced: true },
  { model: "iPhone 6", apple: "Not serviced", premium: "$79", value: "$69", notServiced: true },
  { model: "iPhone 5S", apple: "Not serviced", premium: "$79", value: "$69", notServiced: true },
  { model: "iPhone 5C", apple: "Not serviced", premium: "$79", value: "$69", notServiced: true },
  { model: "iPhone 5", apple: "Not serviced", premium: "$79", value: "$69", notServiced: true },
  { model: "iPhone 4S", apple: "Not serviced", premium: "$79", value: "$69", notServiced: true },
  { model: "iPhone 4", apple: "Not serviced", premium: "$79", value: "$69", notServiced: true },
];

const RowCells = ({ row, includeSave = true }: { row: Row; includeSave?: boolean }) => (
  <>
    <td className="px-4 py-3 font-medium text-foreground">{row.model}</td>
    <td
      className={cn(
        "px-4 py-3",
        row.notServiced
          ? "italic text-destructive"
          : "text-muted-foreground"
      )}
    >
      {row.apple}
    </td>
    <td
      className={cn(
        "px-4 py-3 font-semibold",
        row.quoteRequired
          ? "bg-destructive/5 p-0"
          : "bg-primary/5 text-foreground"
      )}
    >
      {row.quoteRequired ? (
        <a
          href="/quote"
          className="group flex h-full w-full items-center justify-between gap-1 px-4 py-3 font-bold text-destructive transition-colors hover:bg-destructive hover:text-background"
        >
          <span>Get a quote</span>
          <span className="underline underline-offset-2">→</span>
        </a>
      ) : (
        row.premium
      )}
    </td>
    <td
      className={cn(
        "px-4 py-3 font-semibold",
        row.quoteRequired ? "bg-destructive/5 p-0" : "text-success"
      )}
    >
      {row.quoteRequired ? (
        <a
          href="/quote"
          className="group flex h-full w-full items-center justify-between gap-1 px-4 py-3 font-bold text-destructive transition-colors hover:bg-destructive hover:text-background"
        >
          <span>Get a quote</span>
          <span className="underline underline-offset-2">→</span>
        </a>
      ) : (
        <div className="flex items-center gap-2">
          <span>{row.value}</span>
          {row.bestDeal && (
            <Badge variant="outline" className="border-success/40 text-success text-[10px] px-1.5 py-0">
              Best Deal
            </Badge>
          )}
        </div>
      )}
    </td>
    {includeSave && (
      <td className="px-4 py-3 font-semibold text-success">{row.save || "—"}</td>
    )}
  </>
);

export const IPhonePricingTable = () => {
  const [showLegacy, setShowLegacy] = useState(false);

  return (
    <section id="pricing-comparison" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Complete iPhone Screen Repair Pricing Comparison
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Every iPhone model. Three tiers compared. Apple Canada pricing verified April 27, 2026.
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
                {section.savings?.premiumPct !== undefined && section.savings?.valuePct !== undefined && (
                  <div className="mt-2 grid gap-1.5" aria-hidden="true">
                    <div className="flex items-center gap-2">
                      <span className="w-16 shrink-0 text-[10px] font-semibold text-primary">Premium</span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-background">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${section.savings.premiumPct}%` }} />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-16 shrink-0 text-[10px] font-semibold text-success">Value</span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-background">
                        <div className="h-full rounded-full bg-success" style={{ width: `${section.savings.valuePct}%` }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Desktop table */}
              <div className="hidden overflow-hidden rounded-lg border border-border md:block">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr className="text-left">
                      <th className="px-4 py-3 font-semibold">iPhone Model</th>
                      <th className="px-4 py-3 font-semibold">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="inline-flex items-center gap-1">
                              Apple Canada
                              <Info className="h-3.5 w-3.5 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              Verified April 27, 2026 from Apple Canada's repair pricing tool
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </th>
                      <th className="px-4 py-3 font-semibold bg-primary/5 text-primary">MTL Premium</th>
                      <th className="px-4 py-3 font-semibold text-success">MTL Value</th>
                      <th className="px-4 py-3 font-semibold">You Save</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {section.rows.map((row) => (
                      <tr key={row.model} className="hover:bg-muted/30">
                        <RowCells row={row} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="space-y-3 md:hidden">
                {section.rows.map((row) => (
                  <div
                    key={row.model}
                    className="rounded-lg border border-border bg-card p-4 space-y-2"
                  >
                    <div className="font-semibold text-foreground">{row.model}</div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Apple Canada:</div>
                      <div className={cn("text-right", row.notServiced && "italic text-destructive")}>
                        {row.apple}
                      </div>
                      <div className="text-primary">MTL Premium:</div>
                      <div className="text-right font-semibold text-foreground">{row.premium}</div>
                      <div className="text-success">MTL Value:</div>
                      <div className="text-right font-semibold text-success">
                        {row.value}
                        {row.bestDeal && (
                          <Badge variant="outline" className="ml-1 border-success/40 text-success text-[10px]">
                            Best Deal
                          </Badge>
                        )}
                      </div>
                      {row.save && row.save !== "—" && (
                        <>
                          <div className="text-muted-foreground">You Save:</div>
                          <div className="text-right font-semibold text-success">{row.save}</div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {section.note && (
                <p className="mt-3 text-sm italic text-muted-foreground">{section.note}</p>
              )}
            </div>
          ))}

          {/* Legacy collapsible */}
          <Collapsible open={showLegacy} onOpenChange={setShowLegacy}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full gap-2 sm:w-auto">
                {showLegacy ? "Hide" : "Show"} legacy iPhone models (iPhone 4 to iPhone 8 Plus)
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform", showLegacy && "rotate-180")}
                />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 space-y-3">
              <h3 className="text-xl font-bold text-foreground md:text-2xl">
                Legacy iPhones — Apple No Longer Services
              </h3>
              <div className="hidden overflow-hidden rounded-lg border border-border md:block">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr className="text-left">
                      <th className="px-4 py-3 font-semibold">Model</th>
                      <th className="px-4 py-3 font-semibold">Apple Canada</th>
                      <th className="px-4 py-3 font-semibold bg-primary/5 text-primary">MTL Premium</th>
                      <th className="px-4 py-3 font-semibold text-success">MTL Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {LEGACY_ROWS.map((row) => (
                      <tr key={row.model} className="hover:bg-muted/30">
                        <RowCells row={row} includeSave={false} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="space-y-3 md:hidden">
                {LEGACY_ROWS.map((row) => (
                  <div key={row.model} className="rounded-lg border border-border bg-card p-4 space-y-2">
                    <div className="font-semibold text-foreground">{row.model}</div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Apple Canada:</div>
                      <div className="text-right italic text-destructive">{row.apple}</div>
                      <div className="text-primary">MTL Premium:</div>
                      <div className="text-right font-semibold">{row.premium}</div>
                      <div className="text-success">MTL Value:</div>
                      <div className="text-right font-semibold text-success">{row.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-sm italic text-muted-foreground">
          Apple Canada prices reflect Apple's published Canadian out-of-warranty service rates as{" "}
          <a
            href="https://support.apple.com/en-ca/iphone/repair"
            target="_blank"
            rel="noopener noreferrer"
            className="not-italic text-primary hover:underline"
          >
            verified individually April 27, 2026
          </a>
          . Models marked "Not serviced" are classified by Apple as{" "}
          <a
            href="https://support.apple.com/en-ca/102772"
            target="_blank"
            rel="noopener noreferrer"
            className="not-italic text-primary hover:underline"
          >
            vintage or obsolete
          </a>{" "}
          — Apple no longer offers repair service for them. Mobile Tech Lab repairs all iPhone
          models from iPhone 4 onward where part availability allows. Pricing changes as part costs
          change — when our costs drop, your quote drops.
        </p>

        <div className="mt-8 text-center">
          <Button size="lg" className="gradient-primary text-lg" asChild>
            <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer">
              Get a Quote for Your iPhone
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
