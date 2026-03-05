import { Calendar, Monitor, Cpu, ShieldCheck, Lightbulb } from "lucide-react";
import type { AtAGlanceField } from "./types";

const LABEL_ICON: Record<string, React.ReactNode> = {
  "Release Year": <Calendar className="h-5 w-5 text-primary/80" />,
  Display: <Monitor className="h-5 w-5 text-primary/80" />,
  Processor: <Cpu className="h-5 w-5 text-primary/80" />,
  "Latest Major iOS": <ShieldCheck className="h-5 w-5 text-primary/80" />,
  "Typical Use Case Today": <Lightbulb className="h-5 w-5 text-primary/80" />,
};

const fallbackIcon = <Lightbulb className="h-5 w-5 text-primary/80" />;

const INSIGHT_LABEL = "Typical Use Case Today";

export const AtAGlanceGrid = ({ fields }: { fields: AtAGlanceField[] }) => {
  const specFields = fields.filter((f) => f.label !== INSIGHT_LABEL);
  const insightField = fields.find((f) => f.label === INSIGHT_LABEL);

  return (
    <div className="space-y-4">
      {/* 2×2 Bento Grid for technical specs */}
      <div className="grid gap-4 sm:grid-cols-2">
        {specFields.map((field) => (
          <div
            key={field.label}
            className="group flex items-start gap-3.5 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg"
          >
            <span className="mt-0.5 shrink-0">
              {LABEL_ICON[field.label] ?? fallbackIcon}
            </span>
            <div>
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {field.label}
              </p>
              <p className="text-sm font-semibold text-foreground md:text-base">
                {field.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Full-width insight card */}
      {insightField && (
        <div className="group flex items-start gap-4 rounded-xl border border-border border-l-4 border-l-primary bg-card p-6 transition-all duration-300 hover:shadow-lg">
          <span className="mt-0.5 shrink-0">
            {LABEL_ICON[insightField.label] ?? fallbackIcon}
          </span>
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {insightField.label}
            </p>
            <p className="text-sm font-semibold text-foreground md:text-base">
              {insightField.value}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
