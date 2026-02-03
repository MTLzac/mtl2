import { Card, CardContent } from "@/components/ui/card";

interface StatCard {
  number: string;
  label: string;
  detail: string;
  source: string;
  sourceUrl?: string;
  year: string;
}

const STAT_CARDS: StatCard[] = [
  {
    number: "3 Years",
    label: "REPLACEMENT CYCLE",
    detail: "Canadians now keep smartphones for 3+ years on average.",
    source: "Deloitte Canada",
    sourceUrl: "https://www2.deloitte.com/ca/en/pages/technology-media-and-telecommunications/articles/2023-canadian-smartphone-survey.html",
    year: "2023",
  },
  {
    number: "45%",
    label: "PREFER REPAIR",
    detail: "Nearly half of North American consumers choose repair over replacement.",
    source: "Consumer Reports / Repair.org",
    sourceUrl: "https://www.repair.org/stand-up",
    year: "2023",
  },
  {
    number: "1 Million",
    label: "TONNES E-WASTE/YEAR",
    detail: "Canada generates approximately 1 million tonnes of electronic waste annually.",
    source: "Environment Canada",
    sourceUrl: "https://www.canada.ca/en/environment-climate-change/services/managing-reducing-waste/reduce-electronic-waste.html",
    year: "2023",
  },
];

export const StatCardsGrid = () => {
  return (
    <section className="py-12 md:py-16" aria-labelledby="key-numbers">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 
          id="key-numbers" 
          className="text-2xl md:text-3xl font-bold tracking-tight text-foreground text-center mb-10"
        >
          The Numbers
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STAT_CARDS.map((card, index) => (
            <Card 
              key={index} 
              className="bg-card border border-border shadow-sm"
            >
              <CardContent className="p-8 text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-3">
                  {card.number}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  {card.label}
                </p>
                <p className="text-sm text-foreground/80 mb-4">
                  {card.detail}
                </p>
                {/* Inline source attribution - visible without JS */}
                <p className="text-xs text-muted-foreground">
                  Source:{" "}
                  {card.sourceUrl ? (
                    <a 
                      href={card.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-primary hover:underline"
                    >
                      {card.source}
                    </a>
                  ) : (
                    <span>{card.source}</span>
                  )}
                  <span className="mx-1">|</span>
                  <span>{card.year}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
