import { useMemo } from "react";
import { Smartphone } from "lucide-react";
import { TierCard } from "./TierCard";
import { DEVICE_BRANDS, TIER_INFO, TierType } from "@/lib/screen-quality-data";
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
      {/* Device Name Display */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground">
          {selectedModel}
        </h3>
        <p className="text-muted-foreground">
          {tiers.length} screen quality options available
        </p>
      </div>

      {/* Comparison Layout */}
      <div
        className={cn(
          "grid gap-4 items-stretch",
          is3Tier
            ? "grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] lg:grid-cols-[1fr_auto_auto_auto_1fr]"
            : "grid-cols-1 md:grid-cols-[1fr_auto_auto_auto_1fr]"
        )}
      >
        {is3Tier ? (
          <>
            {/* 3-Tier Layout: Value - VS - Phone - VS - Premium + Genuine */}
            <div className="animate-slide-in-left">
              <TierCard
                tier="value"
                tierInfo={TIER_INFO.value}
              />
            </div>

            <div className="hidden md:flex items-center justify-center">
              <VsBadge />
            </div>

            {/* Center Phone Image */}
            <div className="hidden lg:flex flex-col items-center justify-center px-4">
              <DevicePlaceholder modelName={selectedModel} />
            </div>

            <div className="hidden md:flex items-center justify-center">
              <VsBadge />
            </div>

            <div className="grid grid-cols-1 gap-4 animate-slide-in-right">
              <TierCard
                tier="premium"
                tierInfo={TIER_INFO.premium}
                isHighlighted
              />
              <TierCard
                tier="genuine"
                tierInfo={TIER_INFO.genuine}
              />
            </div>
          </>
        ) : (
          <>
            {/* 2-Tier Layout: Value - VS - Phone - VS - Premium */}
            <div className="animate-slide-in-left">
              <TierCard
                tier="value"
                tierInfo={TIER_INFO.value}
              />
            </div>

            <div className="hidden md:flex items-center justify-center">
              <VsBadge />
            </div>

            {/* Center Phone Image */}
            <div className="hidden md:flex flex-col items-center justify-center px-4">
              <DevicePlaceholder modelName={selectedModel} />
            </div>

            <div className="hidden md:flex items-center justify-center">
              <VsBadge />
            </div>

            <div className="animate-slide-in-right">
              <TierCard
                tier="premium"
                tierInfo={TIER_INFO.premium}
                isHighlighted
              />
            </div>
          </>
        )}
      </div>

      {/* Mobile VS indicators */}
      <div className="flex md:hidden flex-col items-center gap-4 mt-4">
        <VsBadge />
      </div>
    </div>
  );
}

function VsBadge() {
  return (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 animate-pulse-subtle">
      <span className="text-primary font-bold text-sm">VS</span>
    </div>
  );
}

interface DevicePlaceholderProps {
  modelName: string;
}

function DevicePlaceholder({ modelName }: DevicePlaceholderProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-64 bg-gradient-to-b from-muted to-muted/50 rounded-[2rem] border-4 border-foreground/10 shadow-lg flex items-center justify-center overflow-hidden">
        {/* Phone notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-foreground/10 rounded-full" />
        
        {/* Screen area */}
        <div className="absolute inset-3 top-10 bottom-10 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl flex items-center justify-center">
          <Smartphone className="h-12 w-12 text-muted-foreground/50" />
        </div>
        
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-foreground/20 rounded-full" />
      </div>
      <p className="mt-4 text-sm font-medium text-muted-foreground text-center max-w-[120px]">
        {modelName}
      </p>
      <p className="text-xs text-muted-foreground/60 mt-1">
        Image placeholder
      </p>
    </div>
  );
}
