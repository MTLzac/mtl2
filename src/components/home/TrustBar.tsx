import { Star, MapPin, Shield, ThumbsUp } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: ThumbsUp,
    label: "500+ 5-Star Reviews",
  },
  {
    icon: Star,
    label: "4.8★ Google Rating",
  },
  {
    icon: MapPin,
    label: "2 Manitoba Locations",
  },
  {
    icon: Shield,
    label: "Price Match Guarantee",
  },
];

export const TrustBar = () => {
  return (
    <section className="border-y border-border bg-muted/50 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-sm font-medium text-foreground md:text-base"
            >
              <item.icon className="h-5 w-5 text-primary" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
