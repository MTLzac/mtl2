import { HardDrive, Zap, ShieldOff } from "lucide-react";

export const WaterDamageDataRecovery = () => {
  const points = [
    {
      icon: Zap,
      text: "Temporary power-on may be enough to extract data",
    },
    {
      icon: HardDrive,
      text: "Full repair is not required for data recovery",
    },
    {
      icon: ShieldOff,
      text: "Long-term functionality is never guaranteed after liquid exposure",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
            When Data Matters More Than the Device
          </h2>
          
          <p className="text-muted-foreground mb-8">
            In most liquid damage cases, recovering photos, messages, and files is the priority. 
            We attempt data recovery even if the device cannot be made stable or usable long-term.
          </p>

          <div className="space-y-4">
            {points.map((point, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 bg-card rounded-lg p-4 border shadow-sm"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <point.icon className="h-5 w-5 text-primary" />
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
