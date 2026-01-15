import { ArrowRightLeft, HardDrive, Wrench, ArrowRight } from "lucide-react";

const PDPBundleUpsells = () => {
  const bundles = [
    {
      icon: ArrowRightLeft,
      title: "Have a Device to Trade?",
      description: "Get credit toward this purchase when you trade in your old phone.",
      cta: "Get Trade-In Value",
      href: "/trade-in",
      variant: "primary" as const
    },
    {
      icon: HardDrive,
      title: "Need Data From Your Old Device?",
      description: "Recover photos, contacts, and files before switching.",
      cta: "Ask About Data Recovery",
      href: "/contact",
      variant: "amber" as const
    },
    {
      icon: Wrench,
      title: "Need Repairs Instead?",
      description: "Same-day screen repairs and battery replacements available.",
      cta: "View Repair Services",
      href: "/",
      variant: "outline" as const
    }
  ];

  const getVariantStyles = (variant: "primary" | "amber" | "outline") => {
    switch (variant) {
      case "primary":
        return {
          card: "bg-primary/5 border-primary/20 hover:border-primary/40",
          icon: "bg-primary/10 text-primary",
          button: "bg-primary/10 text-primary hover:bg-primary/20"
        };
      case "amber":
        return {
          card: "bg-amber-500/5 border-amber-500/20 hover:border-amber-500/40",
          icon: "bg-amber-500/10 text-amber-600",
          button: "bg-amber-500/10 text-amber-600 hover:bg-amber-500/20"
        };
      case "outline":
        return {
          card: "bg-card border-border hover:border-muted-foreground/40",
          icon: "bg-muted text-muted-foreground",
          button: "bg-secondary text-foreground hover:bg-secondary/80"
        };
    }
  };

  return (
    <div className="mt-6 space-y-3">
      <h3 className="text-sm font-semibold text-foreground">
        Maximize Your Purchase
      </h3>
      
      <div className="space-y-2">
        {bundles.map((bundle, index) => {
          const styles = getVariantStyles(bundle.variant);
          
          return (
            <a
              key={index}
              href={bundle.href}
              className={`block p-4 rounded-xl border transition-all ${styles.card}`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${styles.icon}`}>
                  <bundle.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-foreground mb-0.5">
                    {bundle.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    {bundle.description}
                  </p>
                  <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${styles.button}`}>
                    {bundle.cta}
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default PDPBundleUpsells;
