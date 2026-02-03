import { Card, CardContent } from "@/components/ui/card";

interface StatCard {
  number: string;
  label: string;
  detail: string;
}

const STAT_CARDS: StatCard[] = [
  {
    number: "3 Years",
    label: "REPLACEMENT CYCLE",
    detail: "Canadians now keep phones for 3+ years on average",
  },
  {
    number: "45%",
    label: "PREFER REPAIR",
    detail: "Nearly half of consumers choose repair over replacement",
  },
  {
    number: "1 Million",
    label: "TONNES E-WASTE/YEAR",
    detail: "Canada generates 1M tonnes of electronic waste annually",
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
              className="bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-8 text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-3">
                  {card.number}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  {card.label}
                </p>
                <p className="text-sm text-foreground/80">
                  {card.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
