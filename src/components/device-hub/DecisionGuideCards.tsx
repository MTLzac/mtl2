import { Wrench, ArrowUpRight, Database } from "lucide-react";
import type { DecisionScenario } from "./types";

const CARD_CONFIG = [
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Repair is Worthwhile",
    borderClass: "border-t-4 border-t-emerald-500",
    headerBg: "bg-emerald-50/40 dark:bg-emerald-950/20",
    iconBg: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400",
  },
  {
    icon: <ArrowUpRight className="h-6 w-6" />,
    title: "Trade-In & Upgrade",
    borderClass: "border-t-4 border-t-amber-500",
    headerBg: "bg-amber-50/40 dark:bg-amber-950/20",
    iconBg: "bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data Recovery First",
    borderClass: "border-t-4 border-t-blue-500",
    headerBg: "bg-blue-50/40 dark:bg-blue-950/20",
    iconBg: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400",
  },
];

export const DecisionGuideCards = ({
  scenarios,
}: {
  scenarios: DecisionScenario[];
}) => (
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {scenarios.map((scenario, i) => {
      const config = CARD_CONFIG[i] ?? CARD_CONFIG[0];
      return (
        <div
          key={i}
          className={`flex h-full flex-col rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md ${config.borderClass}`}
        >
          {/* Header */}
          <div className={`flex items-center gap-3 rounded-t-2xl px-6 pt-6 pb-4 ${config.headerBg}`}>
            <span className={`inline-flex items-center justify-center rounded-xl p-2.5 ${config.iconBg}`}>
              {config.icon}
            </span>
            <h4 className="text-lg font-bold text-foreground">{config.title}</h4>
          </div>

          {/* Body */}
          <div className="flex flex-1 flex-col px-6 pb-6 pt-3">
            <p className="mb-2 text-sm font-semibold text-foreground/80">
              {scenario.condition}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {scenario.recommendation}
            </p>
          </div>
        </div>
      );
    })}
  </div>
);
