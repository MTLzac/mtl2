import { StatBlock } from "./StatBlock";

export const RepairShopInsightsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30" aria-labelledby="shop-insights">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 
          id="shop-insights" 
          className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8"
        >
          What Repair Shops See Every Day
        </h2>
        
        <p className="text-sm text-muted-foreground mb-6 italic">
          Based on anonymized Canadian repair shop data
        </p>
        
        <div className="space-y-6">
          <article className="border-l-2 border-primary/20 pl-4 py-3">
            <h3 className="text-lg font-medium text-foreground mb-3">
              Most Common Device Failures
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Screen damage</strong> — cracked displays, unresponsive touchscreens, dead pixels</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Battery degradation</strong> — reduced capacity, swelling, unexpected shutdowns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Back glass damage</strong> — primarily on newer iPhone and Samsung models</span>
              </li>
            </ul>
          </article>
          
          <StatBlock
            stat="Typical repair turnaround: Same day to 3 business days."
            source={{
              name: "Canadian Independent Repair Association",
              year: "2024",
              note: "Survey of member repair shops"
            }}
            explanation="Turnaround depends on repair complexity and parts availability. Screen and battery replacements are often same-day; water damage or motherboard repairs may take longer."
          />
        </div>
        
        <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground italic">
            <strong>Note:</strong> These observations are based on aggregated repair data and do not represent a guarantee 
            of any specific repair outcome or timeline.
          </p>
        </div>
      </div>
    </section>
  );
};
