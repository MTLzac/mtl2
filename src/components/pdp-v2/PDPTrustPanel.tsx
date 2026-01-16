import { Check, Shield, Smartphone, Battery, Unlock, Truck, ShieldCheck } from "lucide-react";

const PDPTrustPanel = () => {
  const trustItems = [
    {
      icon: Shield,
      title: "1‑year warranty (defects only)",
      subtitle: "Excludes physical & liquid damage"
    },
    {
      icon: ShieldCheck,
      title: "Fully tested & sanitized",
      subtitle: "90+ point inspection & professional cleaning"
    },
    {
      icon: Unlock,
      title: "Unlocked for all carriers",
      subtitle: "Ready for any SIM card in Canada"
    },
    {
      icon: Battery,
      title: "Battery health ≥ 85%",
      subtitle: "Guaranteed long‑lasting performance"
    },
    {
      icon: Smartphone,
      title: "Lifetime blacklist & IMEI guarantee",
      subtitle: "Never blocked or reported stolen"
    },
    {
      icon: Truck,
      title: "Free Manitoba shipping",
      subtitle: "Fast delivery or pickup in Winnipeg & Thompson"
    }
  ];

  return (
    <div className="mt-6 p-4 bg-muted/50 rounded-xl border border-border">
      <div className="space-y-3">
        {trustItems.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5">
              <Check className="w-3 h-3 text-success" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground leading-tight">
                {item.title}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PDPTrustPanel;
