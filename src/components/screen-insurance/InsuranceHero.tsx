import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Shield, ArrowRight } from "lucide-react";
import {
  getFamilies,
  getModelsByFamily,
  getInsurancePrice,
  SCREEN_PART_COSTS,
  type ScreenPartCost,
} from "@/lib/screen-insurance-data";
import { PhoneSilhouette } from "./PhoneSilhouette";

const SHOP_BASE = "https://shop.mobiletechlab.ca";

export function InsuranceHero() {
  const [selectedFamily, setSelectedFamily] = useState("");
  const [selectedSlug, setSelectedSlug] = useState("");

  const families = useMemo(() => getFamilies(), []);
  const models = useMemo(
    () => (selectedFamily ? getModelsByFamily(selectedFamily) : []),
    [selectedFamily]
  );
  const selectedModel: ScreenPartCost | undefined = useMemo(
    () => SCREEN_PART_COSTS.find((m) => m.slug === selectedSlug),
    [selectedSlug]
  );
  const price = selectedModel
    ? getInsurancePrice(selectedModel.premiumPartCost)
    : undefined;

  const handleFamilyChange = (family: string) => {
    setSelectedFamily(family);
    setSelectedSlug("");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left column — copy + selector */}
          <div className="text-center md:text-left">
            {/* Badge */}
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Shield className="h-4 w-4" />
              Screen Protection Plans
            </span>

            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              One-Time Price.{" "}
              <span className="text-primary">Screen Protected.</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Pay once, get a free Premium screen replacement for any iPhone
              within 12 months of purchase. No monthly fees. No deductibles.
            </p>

            {/* Model selectors */}
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Select value={selectedFamily} onValueChange={handleFamilyChange}>
                <SelectTrigger className="h-12 w-full sm:w-56 text-base">
                  <SelectValue placeholder="Select Series" />
                </SelectTrigger>
                <SelectContent>
                  {families.map((f) => (
                    <SelectItem key={f} value={f}>
                      {f}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedSlug}
                onValueChange={setSelectedSlug}
                disabled={!selectedFamily}
              >
                <SelectTrigger className="h-12 w-full sm:w-56 text-base">
                  <SelectValue
                    placeholder={
                      selectedFamily ? "Select Model" : "Select series first"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {models.map((m) => (
                    <SelectItem key={m.slug} value={m.slug}>
                      {m.model}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price + CTA */}
            {price != null && selectedModel && (() => {
              const savings = selectedModel.premiumPartCost - price;
              const pct = Math.round((savings / selectedModel.premiumPartCost) * 100);
              return (
              <div className="animate-fade-in space-y-4">
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 space-y-4">
                  <p className="text-sm font-medium text-muted-foreground">
                    {selectedModel.model} Screen Protection
                  </p>

                  {/* Price comparison */}
                  <div className="flex items-baseline gap-3">
                    <span className="text-lg text-muted-foreground line-through">${selectedModel.premiumPartCost}</span>
                    <span className="text-4xl font-bold text-primary">${price}</span>
                    <span className="inline-flex items-center rounded-full bg-green-500/15 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:text-green-400">
                      Save ${savings} ({pct}%)
                    </span>
                  </div>

                  <hr className="border-primary/10" />

                  {/* Feature grid */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
                    <span>✓ Premium screen</span>
                    <span>✓ 12 months</span>
                    <span>✓ 1 device</span>
                    <span>✓ No deductible</span>
                  </div>
                </div>

                <Button size="lg" className="w-full gradient-primary text-lg sm:w-auto" asChild>
                  <a
                    href={`${SHOP_BASE}/products/screen-insurance-${selectedModel.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Protected — ${price}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              );
            })()}
          </div>

          {/* Right column — phone silhouette */}
          <div className="flex items-center justify-center">
            <div
              key={selectedSlug || "empty"}
              className="animate-fade-in"
            >
              <PhoneSilhouette
                modelName={selectedModel?.model}
                price={price}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background blobs */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/4 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
}
