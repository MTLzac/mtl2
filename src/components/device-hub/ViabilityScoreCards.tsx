import { Battery, DollarSign, Package, ShieldCheck } from "lucide-react";
import type { ViabilityScore } from "./types";

const LABEL_ICON: Record<string, React.ReactNode> = {
  "Battery Life": <Battery className="h-5 w-5" />,
  "Repair Cost (Relative)": <DollarSign className="h-5 w-5" />,
  "Parts Availability": <Package className="h-5 w-5" />,
  "iOS Support Lifespan": <ShieldCheck className="h-5 w-5" />,
};

const fallbackIcon = <ShieldCheck className="h-5 w-5" />;

const LABEL_BAR_COLOR: Record<string, string> = {
  "Battery Life": "bg-yellow-500",
  "Repair Cost (Relative)": "bg-orange-500",
  "Parts Availability": "bg-emerald-500",
  "iOS Support Lifespan": "bg-destructive",
};

const LABEL_ICON_BG: Record<string, string> = {
  "Battery Life": "bg-yellow-500/10 text-yellow-600",
  "Repair Cost (Relative)": "bg-orange-500/10 text-orange-600",
  "Parts Availability": "bg-emerald-500/10 text-emerald-600",
  "iOS Support Lifespan": "bg-destructive/10 text-destructive",
};

export const ViabilityScoreCards = ({
  scores,
}: {
  scores: ViabilityScore[];
}) => (
  <div className="grid gap-4 sm:grid-cols-2">
    {scores.map((item) => {
      const pct = Math.min((item.score / 5) * 100, 100);
      const barColor = LABEL_BAR_COLOR[item.label] ?? "bg-primary";
      const iconBg = LABEL_ICON_BG[item.label] ?? "bg-secondary text-primary";

      return (
        <div
          key={item.label}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className={`inline-flex shrink-0 items-center justify-center rounded-full p-2.5 ${iconBg}`}>
              {LABEL_ICON[item.label] ?? fallbackIcon}
            </span>
            <h3 className="text-lg font-bold text-foreground">{item.label}</h3>
          </div>

          <div className="mb-1 flex items-center gap-3">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
              <div
                className={`h-full rounded-full ${barColor} transition-all duration-500`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="shrink-0 text-sm font-medium text-muted-foreground">
              {item.score}/5
            </span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {item.explanation}
          </p>
        </div>
      );
    })}
  </div>
);
