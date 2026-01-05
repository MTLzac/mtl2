import { Smartphone, Tablet, Laptop, Gamepad2, Watch } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const QUOTE_URL = "https://shop.mobiletechlab.ca/pages/repair2";

const categories = [
  {
    icon: Smartphone,
    title: "Phones",
    models: ["iPhone", "Samsung Galaxy", "Google Pixel", "OnePlus", "Motorola", "and more"],
    description: "Working or damaged—no iCloud or Google locked devices",
  },
  {
    icon: Tablet,
    title: "Tablets",
    models: ["iPad", "Samsung Galaxy Tab", "Surface", "Amazon Fire"],
    description: "All sizes and generations accepted",
  },
  {
    icon: Laptop,
    title: "Computers & Laptops",
    models: ["MacBook", "Windows laptops", "Chromebooks", "Desktop PCs"],
    description: "Even older models have value",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    models: ["PlayStation", "Xbox", "Nintendo Switch", "Steam Deck", "Games"],
    description: "Consoles, handhelds, and game discs/cartridges",
  },
  {
    icon: Watch,
    title: "Wearables",
    models: ["Apple Watch", "Samsung Galaxy Watch", "Fitbit"],
    description: "Smartwatches and fitness trackers",
  },
];

export const DeviceCategories = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">What We Accept</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We accept a wide range of devices in any condition—working, cracked, or damaged.
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
                <CardTitle className="text-lg">{category.title}</CardTitle>
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
                  className="w-full group-hover:border-primary group-hover:text-primary"
                  asChild
                >
                  <a href={QUOTE_URL} target="_blank" rel="noopener noreferrer">
                    Get Trade-In Quote
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
