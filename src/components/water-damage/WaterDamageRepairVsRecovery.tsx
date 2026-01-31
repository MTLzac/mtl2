import { ShieldX, AlertCircle, MessageSquare } from "lucide-react";

export const WaterDamageRepairVsRecovery = () => {
  const points = [
    {
      icon: ShieldX,
      text: "No warranty applies to liquid-damaged devices",
    },
    {
      icon: AlertCircle,
      text: "Future failures are common even after partial repair",
    },
    {
      icon: MessageSquare,
      text: "We will always explain risks before proceeding",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
            Can a Liquid-Damaged Device Be Repaired?
          </h2>
          
          <p className="text-muted-foreground mb-8">
            In some cases, replacing a specific component may restore function. However, liquid-damaged 
            devices cannot be reliably warrantied against future issues. For this reason, we usually 
            recommend recovery or replacement instead of long-term repair. Even if a liquid-damaged device powers on after service, long-term reliability cannot be guaranteed.
          </p>

          <div className="space-y-4">
            {points.map((point, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 bg-card rounded-lg p-4 border shadow-sm"
              >
                <div className="h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <point.icon className="h-5 w-5 text-destructive" />
                </div>
                <p className="text-foreground">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
