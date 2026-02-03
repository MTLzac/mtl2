import { StatBlock } from "./StatBlock";
import { Link } from "react-router-dom";

export const WhenRepairMayNotMakeSenseSection = () => {
  return (
    <section className="py-12 md:py-16" aria-labelledby="when-not-repair">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 
          id="when-not-repair" 
          className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8"
        >
          When Repair May Not Make Sense
        </h2>
        
        <p className="text-muted-foreground mb-8">
          Sometimes the most responsible choice isn't repair. Understanding Canada's e-waste situation 
          helps put device decisions in context.
        </p>
        
        <div className="space-y-6">
          <StatBlock
            stat="Canada generates approximately 1 million tonnes of e-waste annually."
            source={{
              name: "Environment and Climate Change Canada",
              url: "https://www.canada.ca/en/environment-climate-change.html",
              year: "2023",
              note: "Federal environmental reporting"
            }}
            explanation="This makes Canada one of the highest per-capita e-waste generators globally."
          />
          
          <StatBlock
            stat="Only ~20% of Canadian e-waste is formally recycled."
            source={{
              name: "Global E-waste Monitor / Statistics Canada",
              url: "https://globalewaste.org/",
              year: "2024",
              note: "Formal collection and recycling data"
            }}
            explanation="The majority of discarded electronics end up in landfills or informal disposal channels."
          />
          
          <StatBlock
            stat="14% of Canadian households report having unwanted cellphones."
            source={{
              name: "Statistics Canada",
              url: "https://www.statcan.gc.ca/",
              year: "2023",
              note: "Households and the Environment Survey"
            }}
            explanation="Many devices sit unused rather than being recycled, traded in, or responsibly disposed."
          />
        </div>
        
        <div className="mt-10 p-6 bg-muted/50 rounded-lg border border-border">
          <h3 className="font-semibold text-foreground mb-3">
            When alternatives make more sense:
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                <strong>Data recovery</strong> — When photos, contacts, or files matter more than the device itself, 
                recovering data before recycling or trading in is often the priority.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                <strong>Trade-in programs</strong> — Even damaged devices often have{" "}
                <Link to="/trade-in" className="text-primary hover:underline">trade-in value</Link>. 
                This reduces e-waste while offsetting the cost of a replacement.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                <strong>Responsible recycling</strong> — When repair doesn't make sense, proper e-waste 
                recycling ensures materials are recovered and hazardous components are handled safely.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
