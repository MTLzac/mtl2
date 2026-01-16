import { Battery, Shield, Check, Smartphone, ShieldCheck } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface PDPPrimaryUpgradesProps {
  batteryUpgrade: boolean;
  damageProtection: boolean;
  caseAddon: boolean;
  screenProtector: boolean;
  onBatteryUpgradeChange: (checked: boolean) => void;
  onDamageProtectionChange: (checked: boolean) => void;
  onCaseAddonChange: (checked: boolean) => void;
  onScreenProtectorChange: (checked: boolean) => void;
  batteryUpgradePrice?: number;
  damageProtectionPrice?: number;
  caseBundlePrice?: number;
  screenProtectorPrice?: number;
}

const PDPPrimaryUpgrades = ({
  batteryUpgrade,
  damageProtection,
  caseAddon,
  screenProtector,
  onBatteryUpgradeChange,
  onDamageProtectionChange,
  onCaseAddonChange,
  onScreenProtectorChange,
  batteryUpgradePrice = 100,
  damageProtectionPrice = 49,
  caseBundlePrice = 19,
  screenProtectorPrice = 19.99,
}: PDPPrimaryUpgradesProps) => {
  return (
    <div className="mt-6 space-y-3">
      {/* Genuine Apple Battery Upgrade */}
      <label
        className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
          batteryUpgrade
            ? "bg-primary/5 border-primary/40 ring-1 ring-primary/20"
            : "bg-card border-border hover:border-muted-foreground/40"
        }`}
      >
        <Checkbox
          checked={batteryUpgrade}
          onCheckedChange={onBatteryUpgradeChange}
          className="mt-0.5"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Battery className="w-4 h-4 text-success" />
            <span className="text-sm font-semibold text-foreground">
              Upgrade to Genuine Apple Battery
            </span>
            <span className="text-sm font-semibold text-primary">
              +${batteryUpgradePrice}
            </span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Installed by our technicians using a genuine Apple battery. Ensures 100% battery health in your settings and like-new battery performance.
          </p>
          {batteryUpgrade && (
            <div className="flex items-center gap-1 mt-2 text-xs text-success font-medium">
              <Check className="w-3 h-3" />
              Added to your configuration
            </div>
          )}
        </div>
      </label>

      {/* Accidental Damage Protection */}
      <label
        className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
          damageProtection
            ? "bg-amber-500/5 border-amber-500/40 ring-1 ring-amber-500/20"
            : "bg-card border-border hover:border-muted-foreground/40"
        }`}
      >
        <Checkbox
          checked={damageProtection}
          onCheckedChange={onDamageProtectionChange}
          className="mt-0.5"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Shield className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-foreground">
              Add Accidental Damage Protection
            </span>
            <span className="text-sm font-semibold text-amber-600">
              +${damageProtectionPrice}
            </span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Covers accidental drops and damage beyond standard warranty.
          </p>
          {damageProtection && (
            <div className="flex items-center gap-1 mt-2 text-xs text-amber-600 font-medium">
              <Check className="w-3 h-3" />
              Protection added
            </div>
          )}
        </div>
      </label>

      {/* Case Add-on (Bundled Discount) */}
      <label
        className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
          caseAddon
            ? "bg-primary/5 border-primary/40 ring-1 ring-primary/20"
            : "bg-card border-border hover:border-muted-foreground/40"
        }`}
      >
        <Checkbox
          checked={caseAddon}
          onCheckedChange={onCaseAddonChange}
          className="mt-0.5"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <Smartphone className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              Add a case
            </span>
            <span className="text-xs font-medium text-success bg-success/10 px-1.5 py-0.5 rounded">
              Save $10 with device
            </span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">${caseBundlePrice.toFixed(2)}</span> when added today{" "}
            <span className="line-through">$29.99</span>
          </p>
          {caseAddon && (
            <div className="flex items-center gap-1 mt-2 text-xs text-primary font-medium">
              <Check className="w-3 h-3" />
              Case added at bundle price
            </div>
          )}
        </div>
      </label>

      {/* Screen Protector Add-on (Installed) */}
      <label
        className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
          screenProtector
            ? "bg-primary/5 border-primary/40 ring-1 ring-primary/20"
            : "bg-card border-border hover:border-muted-foreground/40"
        }`}
      >
        <Checkbox
          checked={screenProtector}
          onCheckedChange={onScreenProtectorChange}
          className="mt-0.5"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              Add a screen protector (installed)
            </span>
            <span className="text-sm font-semibold text-primary">
              +${screenProtectorPrice.toFixed(2)}
            </span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Professionally installed before pickup/shipping
          </p>
          {screenProtector && (
            <div className="flex items-center gap-1 mt-2 text-xs text-primary font-medium">
              <Check className="w-3 h-3" />
              Screen protector added
            </div>
          )}
        </div>
      </label>
    </div>
  );
};

export default PDPPrimaryUpgrades;
