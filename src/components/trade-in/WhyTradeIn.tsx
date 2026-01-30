import { DollarSign, Zap, Truck, Recycle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const advantages = [
  {
    icon: DollarSign,
    title: "Best Price Guarantee",
    description: "We use real-time part pricing and beat any advertised local offer. If a competitor publishes a higher payout, show us and we'll match it.",
  },
  {
    icon: Zap,
    title: "Fast Payment",
    description: "Cash, e-transfer or store credit—paid on the same day we receive your device.",
  },
  {
    icon: Truck,
    title: "Free Shipping & Drop-Off",
    description: (
      <>
        Mail it in on us or stop by our convenient{" "}
        <Link to="/contact" className="text-primary hover:underline">Winnipeg locations</Link>.
      </>
    ),
  },
  {
    icon: Recycle,
    title: "Eco-Friendly Upcycling",
    description: "Broken tech still has value. We refurbish or responsibly recycle every device to reduce e-waste.",
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
