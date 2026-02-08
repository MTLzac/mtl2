import { Calendar, Monitor, Cpu, Smartphone, ShieldCheck } from "lucide-react";
import type { AtAGlanceField } from "./types";

/** Maps common "At a Glance" labels to icons for visual scanning */
const LABEL_ICON: Record<string, React.ReactNode> = {
  "Release Year": <Calendar className="h-5 w-5 text-primary" />,
  Display: <Monitor className="h-5 w-5 text-primary" />,
  Processor: <Cpu className="h-5 w-5 text-primary" />,
  "Latest Major iOS": <ShieldCheck className="h-5 w-5 text-primary" />,
  "Typical Use Case Today": <Smartphone className="h-5 w-5 text-primary" />,
};

const fallbackIcon = <Smartphone className="h-5 w-5 text-primary" />;

export const AtAGlanceGrid = ({ fields }: { fields: AtAGlanceField[] }) => (
  <div className="grid gap-3 sm:grid-cols-2">
    {fields.map((field) => (
      <div
        key={field.label}
        className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
      >
        <span className="mt-0.5 shrink-0">
          {LABEL_ICON[field.label] ?? fallbackIcon}
        </span>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {field.label}
          </p>
          <p className="mt-0.5 text-sm font-semibold text-foreground">
            {field.value}
          </p>
        </div>
      </div>
    ))}
  </div>
);
