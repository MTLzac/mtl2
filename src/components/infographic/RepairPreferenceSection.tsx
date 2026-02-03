import { StatBlock } from "./StatBlock";

export const RepairPreferenceSection = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30" aria-labelledby="repair-preference">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 
          id="repair-preference" 
          className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8"
        >
          Do Canadians Prefer Repair or Replacement?
        </h2>
        
        <div className="space-y-6">
          <StatBlock
            stat="45% of consumers prefer repairing devices instead of replacing them."
            source={{
              name: "Consumer Reports / Repair.org Survey",
              url: "https://www.repair.org/stand-up",
              year: "2023",
              note: "North American consumer survey"
            }}
            explanation="Nearly half of consumers choose repair when given a viable option, indicating strong demand for accessible repair services."
          />
          
          <StatBlock
            stat="More than 75% of Canadians support Right-to-Repair legislation."
            source={{
              name: "OpenMedia / Right to Repair Coalition",
              url: "https://openmedia.org/article/item/right-to-repair-in-canada",
              year: "2024",
              note: "Canadian public opinion polling"
            }}
            explanation="Public support for repair rights reflects growing awareness of environmental and economic benefits of extending device lifespans."
          />
        </div>
        
        <p className="mt-8 text-muted-foreground">
          Consumer preference for repair is often constrained by availability, cost, and manufacturer policies. 
          Right-to-repair legislation aims to address these barriers by requiring manufacturers to provide 
          parts, tools, and documentation.
        </p>
      </div>
    </section>
  );
};
