import { Clock, DollarSign, Shield, MapPin } from "lucide-react";

export interface QuickFactsData {
  turnaround?: string;
  startingPrice?: string;
  warranty?: string;
  locations?: string;
}

interface QuickFactsProps {
  facts: QuickFactsData;
}

const DEFAULT_FACTS: QuickFactsData = {
  turnaround: "Same-day available",
  startingPrice: "From $59",
  warranty: "Up to lifetime warranty",
  locations: "2 Manitoba locations",
};

export const QuickFacts = ({ facts }: QuickFactsProps) => {
  const mergedFacts = { ...DEFAULT_FACTS, ...facts };
  
  const factItems = [
    { icon: Clock, label: "Turnaround", value: mergedFacts.turnaround },
    { icon: DollarSign, label: "Starting", value: mergedFacts.startingPrice },
    { icon: Shield, label: "Warranty", value: mergedFacts.warranty },
    { icon: MapPin, label: "Locations", value: mergedFacts.locations },
  ].filter(item => item.value);

  return (
    <div className="mt-8 rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {factItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <item.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className="truncate text-sm font-semibold text-foreground">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
