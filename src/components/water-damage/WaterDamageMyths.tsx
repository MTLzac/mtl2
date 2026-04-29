import { XCircle } from "lucide-react";

export const WaterDamageMyths = () => {
  const myths = [
    {
      title: "Don't put it in rice",
      body: "The rice myth is the most common — and most useless. Rice doesn't pull liquid out of phones effectively, and rice dust can actually get inside ports and cause additional damage. By the time rice would do anything, corrosion has already started. Skip it.",
    },
    {
      title: "Don't put it in a freezer",
      body: "Freezing doesn't help liquid evaporate — and it introduces condensation when you take the device back out. The result: more liquid inside, not less. Don't do it.",
    },
    {
      title: "Don't shake it dry",
      body: "Shaking spreads liquid to components that weren't affected by the original spill. What was a localized issue becomes a board-wide one.",
    },
    {
      title: "Don't keep using it",
      body: "Every minute a liquid-damaged device is powered on, electricity is flowing through wet circuits causing irreversible corrosion. Power it off the moment you see liquid contact. Yes, even if it 'seems fine.'",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Don't Do These Things (Common Liquid Damage Myths)
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These myths circulate online but actually make damage worse. Skip them all.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {myths.map((myth, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-foreground text-lg">{myth.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{myth.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
