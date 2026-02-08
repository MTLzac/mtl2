import { Battery, DollarSign, Package, ShieldCheck } from "lucide-react";
import type { ViabilityScore } from "./types";

/** Maps common scoring labels to icons for visual recognition */
const LABEL_ICON: Record<string, React.ReactNode> = {
  "Battery Life": <Battery className="h-5 w-5 text-primary" />,
  "Repair Cost (Relative)": <DollarSign className="h-5 w-5 text-primary" />,
  "Parts Availability": <Package className="h-5 w-5 text-primary" />,
  "iOS Support Lifespan": <ShieldCheck className="h-5 w-5 text-primary" />,
};

const fallbackIcon = <ShieldCheck className="h-5 w-5 text-primary" />;

/** Renders ●●●○○ filled/unfilled dots for a 1–5 score */
const ScoreDots = ({ score }: { score: number }) => {
  const filled = Math.min(Math.max(score, 0), 5);
  const empty = 5 - filled;
  return (
    <span className="text-lg tracking-widest" aria-hidden="true">
      {"●".repeat(filled)}
      <span className="text-muted-foreground/40">{"○".repeat(empty)}</span>
    </span>
  );
};

/** Colour accent based on score: 1–2 = destructive, 3 = warning, 4–5 = success */
const scoreBorderClass = (score: number): string => {
  if (score <= 2) return "border-l-destructive";
  if (score === 3) return "border-l-warning";
  return "border-l-success";
};

export const ViabilityScoreCards = ({
  scores,
}: {
  scores: ViabilityScore[];
}) => (
  <div className="grid gap-4 sm:grid-cols-2">
    {scores.map((item) => (
      <div
        key={item.label}
        className={`rounded-lg border border-border border-l-4 bg-card p-5 ${scoreBorderClass(item.score)}`}
      >
        <div className="flex items-start gap-3">
          <span className="mt-0.5 shrink-0">
            {LABEL_ICON[item.label] ?? fallbackIcon}
          </span>
          <div>
            <h3 className="font-semibold text-foreground">{item.label}</h3>
            <p className="mt-1 flex items-center gap-2">
              <ScoreDots score={item.score} />
              <span className="text-sm font-medium text-muted-foreground">
                ({item.score}/5)
              </span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.explanation}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);
