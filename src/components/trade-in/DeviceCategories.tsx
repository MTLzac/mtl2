import { Smartphone, Tablet, Laptop, Gamepad2, Watch } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const QUOTE_URL = "https://shop.mobiletechlab.ca/pages/repair2";

const categories = [
  {
    icon: Smartphone,
    title: "Sell iPhone & Android Phones",
    models: ["iPhone", "Samsung Galaxy", "Google Pixel", "OnePlus"],
    description: "Sell your used iPhone, Samsung Galaxy, Google Pixel, or Android phone for cash. Cracked or working.",
  },
  {
    icon: Tablet,
    title: "Sell iPad & Tablets",
    models: ["iPad", "Samsung Galaxy Tab", "Surface", "Amazon Fire"],
    description: "Sell your iPad, Samsung Galaxy Tab, or Surface tablet. All sizes and generations.",
  },
  {
    icon: Laptop,
    title: "Sell MacBook & Laptops",
    models: ["MacBook", "Windows laptops", "Chromebooks", "Desktop PCs"],
    description: "Sell your MacBook, Windows laptop, or Chromebook. Even older models have value.",
  },
  {
    icon: Gamepad2,
    title: "Sell Game Consoles & Games",
    models: ["PlayStation", "Xbox", "Nintendo Switch", "Steam Deck"],
    description: "Sell PlayStation, Xbox, Nintendo Switch, Steam Deck, and game discs.",
  },
  {
    icon: Watch,
    title: "Sell Apple Watch & Wearables",
    models: ["Apple Watch", "Samsung Galaxy Watch", "Fitbit"],
    description: "Sell your Apple Watch, Samsung Galaxy Watch, or fitness tracker.",
  },
];

export const DeviceCategories = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Devices We Buy</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We buy a wide range of used devices in any condition—working, cracked, or damaged.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="group border-border/50 bg-card transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <CardHeader className="pb-3 text-center">
                <div className="mx-auto mb-2 inline-flex rounded-full bg-primary/10 p-3 text-primary">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold leading-none tracking-tight">{category.title}</h3>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {category.models.slice(0, 4).map((model, modelIndex) => (
                    <span
                      key={modelIndex}
                      className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {model}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/70 hover:text-primary"
                  asChild
                >
                  <a href={QUOTE_URL} target="_blank" rel="noopener noreferrer">
                    Sell This Device
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
