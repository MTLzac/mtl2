import { Search, Droplets, Cpu, MessageSquare } from "lucide-react";

export const WaterDamageProcess = () => {
  const steps = [
    {
      icon: Search,
      text: "Internal inspection and corrosion assessment",
    },
    {
      icon: Droplets,
      text: "Active cleaning of affected components",
    },
    {
      icon: Cpu,
      text: "Advanced board-level work when required to recover data",
    },
    {
      icon: MessageSquare,
      text: "Honest explanation of realistic outcomes",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
            How Liquid Damage Is Assessed
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Liquid damage is not a standard repair. Every case is different. Our process focuses on 
            understanding the extent of corrosion and determining whether data recovery or limited 
            repair is possible.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-card rounded-lg p-5 border shadow-sm"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-foreground font-medium">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
