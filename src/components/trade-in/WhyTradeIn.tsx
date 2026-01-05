import { DollarSign, ArrowLeftRight, Truck, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const advantages = [
  {
    icon: DollarSign,
    title: "More Than Carriers",
    description: "We consistently pay more than Bell, Rogers, Apple, or Samsung trade-in programs.",
  },
  {
    icon: ArrowLeftRight,
    title: "Use It Your Way",
    description: "Apply your credit toward a repair bill or a pre-owned device purchase.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "We provide a free prepaid label—no cost to ship your device to us.",
  },
  {
    icon: Zap,
    title: "Same-Day Payment",
    description: "Drop off in-store and get cash or E-Transfer the same day.",
  },
];

export const WhyTradeIn = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Sell to Mobile Tech Lab?</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Get more cash for your used devices with our straightforward sell program.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <Card 
              key={index}
              className="border-border/50 bg-card text-center transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-4 text-primary">
                  <advantage.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
