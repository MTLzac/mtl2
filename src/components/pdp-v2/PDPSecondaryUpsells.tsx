import { ShieldCheck, Smartphone } from "lucide-react";

const PDPSecondaryUpsells = () => {
  const accessories = [
    {
      id: "case",
      icon: Smartphone,
      title: "Protective Case",
      description: "Slim-fit case with raised edges for screen protection",
      price: 29.99,
    },
    {
      id: "screen-protector",
      icon: ShieldCheck,
      title: "Tempered Glass Screen Protector",
      description: "9H hardness, bubble-free installation included",
      price: 19.99,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8 border-t border-border">
      <h2 className="text-xl font-bold mb-2">Protect Your Phone from Day One</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Optional accessories to keep your device safe
      </p>
      
      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
        {accessories.map((accessory) => (
          <div
            key={accessory.id}
            className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:border-muted-foreground/40 transition-colors"
          >
            <div className="p-2 rounded-lg bg-muted">
              <accessory.icon className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-foreground mb-0.5">
                {accessory.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">
                {accessory.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">
                  ${accessory.price.toFixed(2)}
                </span>
                <button className="text-xs font-medium text-primary hover:text-primary/80 transition-colors px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PDPSecondaryUpsells;
