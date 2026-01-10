import { Check } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TierInfo, TierType } from "@/lib/screen-quality-data";
import { cn } from "@/lib/utils";

interface TierCardProps {
  tier: TierType;
  tierInfo: TierInfo;
  animationClass?: string;
  isHighlighted?: boolean;
}

export function TierCard({ tier, tierInfo, animationClass, isHighlighted }: TierCardProps) {
  const handleQuoteClick = () => {
    window.location.href = "/contact";
  };

  return (
    <Card
      className={cn(
        "relative flex flex-col h-full transition-all duration-300",
        "hover:shadow-lg hover:-translate-y-1",
        isHighlighted && "ring-2 ring-primary shadow-lg",
        animationClass
      )}
    >
      {tier === "premium" && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold">
            Most Popular
          </Badge>
        </div>
      )}
      
      <CardHeader className="text-center pb-4 pt-6">
        <Badge className={cn("w-fit mx-auto mb-2 text-sm font-medium", tierInfo.badgeClass)}>
          {tierInfo.name}
        </Badge>
        <p className={cn(
          "text-lg font-semibold",
          tier === "premium" ? "text-primary" : "text-foreground"
        )}>
          {tierInfo.priceIndicator}
        </p>
        <p className="text-muted-foreground text-sm">{tierInfo.tagline}</p>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <ul className="space-y-3 flex-1 mb-6">
          {tierInfo.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{benefit}</span>
            </li>
          ))}
        </ul>

        <Button
          onClick={handleQuoteClick}
          className="w-full"
          variant={tier === "premium" ? "default" : "outline"}
        >
          Request Quote
        </Button>
      </CardContent>
    </Card>
  );
}
