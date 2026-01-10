import { useMemo } from "react";
import { Smartphone } from "lucide-react";
import { TierCard } from "./TierCard";
import { DEVICE_BRANDS, TIER_INFO } from "@/lib/screen-quality-data";
import { cn } from "@/lib/utils";

interface QualityComparisonProps {
  selectedBrand: string;
  selectedModel: string;
}

export function QualityComparison({ selectedBrand, selectedModel }: QualityComparisonProps) {
  const selectedDevice = useMemo(() => {
    const brand = DEVICE_BRANDS.find((b) => b.name === selectedBrand);
    return brand?.models.find((m) => m.name === selectedModel);
  }, [selectedBrand, selectedModel]);

  if (!selectedDevice) {
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-4">
          <Smartphone className="h-10 w-10 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Select Your Device
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Choose your device brand and model above to see available screen quality options
        </p>
      </div>
    );
  }

  const tiers = selectedDevice.tiers;
  const is3Tier = tiers.length === 3;

  return (
    <div className="animate-fade-in">
      {/* Device Header with Small Image */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border mb-4">
          <Smartphone className="h-10 w-10 text-muted-foreground" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">
          {selectedModel}
        </h3>
        <p className="text-muted-foreground">
          {tiers.length} screen quality option{tiers.length > 1 ? 's' : ''} available
        </p>
      </div>

      {/* Symmetrical Card Grid */}
      <div
        className={cn(
          "grid gap-6 items-stretch",
          is3Tier
            ? "grid-cols-1 md:grid-cols-3"
            : "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
        )}
      >
        {/* Value Card */}
        <div className="animate-fade-in" style={{ animationDelay: '0ms' }}>
          <TierCard
            tier="value"
            tierInfo={TIER_INFO.value}
          />
        </div>

        {/* Premium Card - Always in middle for 3-tier, second for 2-tier */}
        <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
          <TierCard
            tier="premium"
            tierInfo={TIER_INFO.premium}
            isHighlighted
          />
        </div>

        {/* Genuine Card - Only for 3-tier devices */}
        {is3Tier && (
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <TierCard
              tier="genuine"
              tierInfo={TIER_INFO.genuine}
            />
          </div>
        )}
      </div>
    </div>
  );
}
