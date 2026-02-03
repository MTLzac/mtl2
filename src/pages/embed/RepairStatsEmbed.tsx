import { StatBlock } from "@/components/infographic/StatBlock";

const CURRENT_YEAR = new Date().getFullYear();

const RepairStatsEmbed = () => {
  return (
    <div className="bg-background text-foreground p-6 font-sans max-w-2xl mx-auto">
      <header className="mb-6 pb-4 border-b border-border">
        <h1 className="text-xl font-bold text-foreground">
          Canadian Device Repair Statistics ({CURRENT_YEAR})
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Key data on repair costs, consumer preferences, and e-waste
        </p>
      </header>

      <div className="space-y-6">
        <section>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Replacement Frequency
          </h2>
          <StatBlock
            stat="Canadians replace smartphones roughly every 3 years on average."
            source={{
              name: "Deloitte Global Mobile Consumer Survey",
              year: "2023"
            }}
          />
        </section>

        <section>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Repair Preference
          </h2>
          <StatBlock
            stat="45% of consumers prefer repairing devices instead of replacing them."
            source={{
              name: "Consumer Reports / Repair.org",
              year: "2023"
            }}
          />
        </section>

        <section>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Typical Costs
          </h2>
          <StatBlock
            stat="Cracked screen repairs average around ~$200."
            source={{
              name: "Consumer Reports",
              year: "2023"
            }}
          />
        </section>

        <section>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            E-Waste Impact
          </h2>
          <StatBlock
            stat="Canada generates approximately 1 million tonnes of e-waste annually."
            source={{
              name: "Environment and Climate Change Canada",
              year: "2023"
            }}
          />
        </section>
      </div>

      <footer className="mt-8 pt-4 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          Full data and interactive tools at{" "}
          <a 
            href="https://mobiletechlab.ca/repair-or-replace-device-canada"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            mobiletechlab.ca
          </a>
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Updated quarterly • Mobile Tech Lab
        </p>
      </footer>
    </div>
  );
};

export default RepairStatsEmbed;
