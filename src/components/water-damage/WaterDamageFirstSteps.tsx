import { AlertCircle, Power, Flame, Activity, Clock } from "lucide-react";

export const WaterDamageFirstSteps = () => {
  const steps = [
    {
      icon: Power,
      title: "Power off immediately.",
      body: "Do not power on or charge the device — even to \"test if it works.\" Liquid + electricity causes immediate short circuits that turn fixable damage into unfixable damage.",
    },
    {
      icon: Flame,
      title: "Don't try to dry it with heat.",
      body: "No hairdryers, ovens, radiators, or sunlight. Heat warps internal components and pushes liquid further into the board. Just leave it powered off.",
    },
    {
      icon: Activity,
      title: "Don't shake or bang it.",
      body: "This spreads liquid through the device and can damage components that weren't affected by the initial spill.",
    },
    {
      icon: Clock,
      title: "Bring it in as soon as possible.",
      body: "Every hour increases the corrosion damage. Walk-ins welcome at both locations during business hours.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-4 mb-4">
            <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-2">
                What to Do Right Now (Before Bringing It In)
              </h2>
              <p className="text-muted-foreground">
                These steps in the first 30 minutes can significantly improve outcomes.
              </p>
            </div>
          </div>

          <div className="space-y-4 mt-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card rounded-lg p-4 border shadow-sm"
              >
                <div className="h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <step.icon className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{step.title}</p>
                  <p className="text-muted-foreground text-sm mt-1">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Bring it in immediately if:
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "The device was recently exposed to liquid (within last 24 hours = best chances)",
                "The device will not power on",
                "Important data has not been backed up",
                "You see liquid behind the screen or in the charging port",
                "The device powers on but behaves erratically (random touches, audio cutting out, screen flickering)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground italic mt-6">
              Early assessment significantly improves the chance of recovery — though liquid damage outcomes are never guaranteed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
