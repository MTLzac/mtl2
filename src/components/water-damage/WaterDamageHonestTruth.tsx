import { ShieldX, AlertCircle, MessageSquare, HandCoins } from "lucide-react";

export const WaterDamageHonestTruth = () => {
  const cards = [
    { icon: ShieldX, text: "No warranty applies to liquid-damaged devices" },
    { icon: AlertCircle, text: "Future failures are common even after partial repair" },
    { icon: MessageSquare, text: "We will always explain risks before proceeding" },
    { icon: HandCoins, text: "We don't charge for repairs we can't reasonably attempt — if your device is beyond reasonable repair, we say so before billing beyond the diagnostic fee" },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            The Honest Truth About Liquid Damage Outcomes
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Why we don't promise things that no honest shop can promise.
          </p>

          <p className="text-foreground mb-8">
            In some cases, replacing a specific component may restore function. However, liquid-damaged devices cannot be reliably warrantied against future issues. For this reason, we usually recommend recovery or replacement instead of long-term repair. Even if a liquid-damaged device powers on after service, long-term reliability cannot be guaranteed.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 mb-8">
            {cards.map((card, i) => (
              <div key={i} className="flex items-start gap-4 bg-card rounded-lg p-5 border shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <card.icon className="h-5 w-5 text-destructive" />
                </div>
                <p className="text-foreground text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted/40 border-l-4 border-primary rounded-r-xl p-6">
            <p className="text-foreground italic leading-relaxed">
              Most repair shops won't tell you any of this. They'll quote you a confident price, attempt the repair, hand it back working, and hope it lasts past their warranty period. We'd rather tell you the truth: liquid damage is unpredictable, future failures are common, and we don't warranty these repairs because we can't honestly stand behind outcomes we don't control. If that's the kind of shop you want, we're it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
