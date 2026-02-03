import { StatBlock } from "./StatBlock";

export const RepairCostSection = () => {
  return (
    <section className="py-12 md:py-16" aria-labelledby="repair-costs">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 
          id="repair-costs" 
          className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8"
        >
          What Repairs Commonly Cost (Industry Averages)
        </h2>
        
        <div className="space-y-6">
          <StatBlock
            stat="Smartphone repairs commonly range from ~$50–$400, depending on damage."
            source={{
              name: "iFixit / Industry Repair Surveys",
              url: "https://www.ifixit.com/",
              year: "2024",
              note: "Aggregated from multiple repair industry sources"
            }}
            explanation="Simple repairs like battery replacements tend toward the lower end, while display or motherboard repairs are more expensive."
          />
          
          <StatBlock
            stat="Cracked screen repairs average around ~$200."
            source={{
              name: "Consumer Reports",
              url: "https://www.consumerreports.org/",
              year: "2023",
              note: "Survey of third-party repair costs in North America"
            }}
            explanation="Screen replacement is the most common repair. Costs vary significantly by device model and screen technology (LCD vs OLED)."
          />
          
          <StatBlock
            stat="Consumers report an average perceived repair or replacement cost of ~$302."
            source={{
              name: "Asurion / Consumer Surveys",
              url: "https://www.asurion.com/",
              year: "2023",
              note: "Consumer perception survey"
            }}
            explanation="This represents what consumers expect to pay, which may differ from actual costs depending on the repair type and provider."
          />
        </div>
        
        <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground italic">
            <strong>Note:</strong> Actual repair cost varies by device model, damage severity, and parts availability. 
            These figures represent industry averages and may not reflect specific repair scenarios.
          </p>
        </div>
      </div>
    </section>
  );
};
