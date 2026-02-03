import { StatBlock } from "./StatBlock";

export const ReplacementFrequencySection = () => {
  return (
    <section className="py-12 md:py-16" aria-labelledby="replacement-frequency">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 
          id="replacement-frequency" 
          className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8"
        >
          How Often Canadians Replace Devices
        </h2>
        
        <div className="space-y-6">
          <StatBlock
            stat="Canadians replace smartphones roughly every 3 years on average."
            source={{
              name: "Deloitte Global Mobile Consumer Survey",
              url: "https://www2.deloitte.com/ca/en/pages/technology-media-and-telecommunications/articles/2023-canadian-smartphone-survey.html",
              year: "2023",
              note: "Based on Canadian consumer survey data"
            }}
            explanation="This represents an increase from previous years, suggesting consumers are keeping devices longer than they used to."
          />
          
          <StatBlock
            stat="Canadians are holding onto phones and computers longer than in previous decades."
            source={{
              name: "Statistics Canada",
              url: "https://www150.statcan.gc.ca/n1/daily-quotidien/240315/dq240315b-eng.htm",
              year: "2024",
              note: "Household equipment and technology surveys"
            }}
            explanation="Economic factors and improved device durability have contributed to extended ownership periods."
          />
        </div>
        
        <p className="mt-8 text-muted-foreground">
          Longer ownership periods mean repairs become more relevant. A device that lasts 3+ years 
          is more likely to need battery replacement or screen repair during its lifetime.
        </p>
      </div>
    </section>
  );
};
