import { Wrench, Banknote, Truck, Recycle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const advantages = [
  {
    icon: Wrench,
    title: "We Test Broken Devices",
    description: "Most shops only buy fully working phones. We install temporary parts to test broken devices — so a cracked-screen phone or a dark display can still get a real offer.",
  },
  {
    icon: Banknote,
    title: "Three Payment Options",
    description: "Cash, e-transfer, or store credit (typically the highest payout). You choose what works for you. Same-day payment when you accept the offer.",
  },
  {
    icon: Truck,
    title: "Walk-In or Mail-In",
    description: "Walk into St. Vital or Thompson during business hours for an instant offer, or mail your device in with our free trackable shipping. Mail-in is perfect for customers in Brandon, Portage, Steinbach, Selkirk, Dauphin, and rural Manitoba — no need to drive into the city.",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly Recycling",
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
