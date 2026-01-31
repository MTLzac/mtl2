import { AlertCircle, Power, Flame, Clock } from "lucide-react";

export const WaterDamageFirstSteps = () => {
  const steps = [
    {
      icon: Power,
      text: "Do not power on or charge the device",
    },
    {
      icon: Flame,
      text: "Do not attempt to dry it with heat",
    },
    {
      icon: Clock,
      text: "If data is important, bring it in as soon as possible",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-2">
                What to Do If Your Device Gets Wet
              </h2>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 bg-card rounded-lg p-4 border shadow-sm"
              >
                <div className="h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <step.icon className="h-5 w-5 text-destructive" />
                </div>
                <p className="font-medium text-foreground">{step.text}</p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground text-center italic">
            Early assessment improves the chance of recovery, even though liquid damage is never predictable.
          </p>
        </div>
      </div>
    </section>
  );
};
