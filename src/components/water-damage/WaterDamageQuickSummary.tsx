import { Clock } from "lucide-react";

export const WaterDamageQuickSummary = () => {
  const bullets = [
    "Mobile Tech Lab assesses liquid-damaged phones, tablets, laptops, and MacBooks at our St. Vital (Winnipeg) and Thompson locations. Walk-ins welcome.",
    "$49 diagnostic fee identifies the damage scope. Repair attempts from $149+. Data recovery attempts $129+tax. All credited toward final repair if you proceed.",
    "Outcomes can't be guaranteed for liquid damage. Corrosion is unpredictable and damage often surfaces days or weeks after a \"successful\" repair. We give honest assessments — including when replacement is the smarter choice.",
    "NO warranty applies to liquid-damaged device repairs, on any component, regardless of whether future failure relates to our work. This is industry-wide, not specific to us — but most shops won't tell you.",
  ];

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-muted/40 border border-border rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-foreground mb-1">Quick Summary</h2>
          <p className="text-muted-foreground mb-5">Everything you need to know in 30 seconds:</p>
          <ul className="space-y-3">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-start gap-3 pt-4 border-t border-border">
            <Clock className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground font-medium">
              Time matters. Every hour increases corrosion damage. Bring your device in as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
