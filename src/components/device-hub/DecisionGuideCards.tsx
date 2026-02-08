import { CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react";
import type { DecisionScenario } from "./types";

/**
 * Assigns a visual icon/color per scenario index.
 * 0 = "Still usable?" (check / success)
 * 1 = "Worth fixing?" (warning / caution)
 * 2 = "Best long-term value?" (trending-up / info)
 */
const ICONS = [
  <CheckCircle2 key="check" className="h-5 w-5 shrink-0 text-success" />,
  <AlertTriangle key="alert" className="h-5 w-5 shrink-0 text-warning" />,
  <TrendingUp key="trend" className="h-5 w-5 shrink-0 text-primary" />,
];

const ACCENT_BORDER = [
  "border-l-success",
  "border-l-warning",
  "border-l-primary",
];

export const DecisionGuideCards = ({
  scenarios,
}: {
  scenarios: DecisionScenario[];
}) => (
  <div className="space-y-4">
    {scenarios.map((scenario, i) => (
      <div
        key={i}
        className={`rounded-lg border border-border border-l-4 bg-card p-5 ${ACCENT_BORDER[i] ?? ""}`}
      >
        <div className="flex items-start gap-3">
          {ICONS[i] ?? ICONS[0]}
          <div>
            <p className="font-semibold text-foreground">{scenario.condition}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {scenario.recommendation}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);
