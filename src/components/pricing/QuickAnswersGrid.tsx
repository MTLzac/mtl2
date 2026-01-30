import { DollarSign, Layers, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { QUICK_ANSWERS } from "@/lib/pricing-data";

const iconMap = {
  DollarSign,
  Layers,
  Clock,
  Shield,
};

export const QuickAnswersGrid = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
          What Most People Want to Know
        </h2>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK_ANSWERS.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <Card
                key={item.title}
                className="border-border/50 bg-card transition-shadow hover:shadow-md"
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
