import { Smartphone, Tablet, Laptop, Gamepad2, Watch } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const QUOTE_URL = "https://shop.mobiletechlab.ca/pages/repair2";

const categories = [
  {
    icon: Smartphone,
    title: "Sell iPhone & Android Phones",
    models: ["iPhone", "Samsung Galaxy", "Google Pixel", "OnePlus", "and more"],
    description: "We buy working or broken phones—cracked screens, battery issues, water damage. We securely wipe all data before processing.",
    repairLink: "/repair/samsung",
    repairLabel: "phone repair",
  },
  {
    icon: Tablet,
    title: "Sell iPad & Tablets",
    models: ["iPad", "Samsung Galaxy Tab", "Surface", "Amazon Fire", "and more"],
    description: "Sell your tablet in any condition. We handle data wiping and accept devices with damaged screens or batteries.",
    repairLink: "/repair/ipad",
    repairLabel: "tablet repair",
  },
  {
    icon: Laptop,
    title: "Sell MacBook & Laptops",
    models: ["MacBook", "Windows laptops", "Chromebooks", "Desktop PCs", "and more"],
    description: "Get cash for your laptop—even older models have value. We securely erase all personal data during intake.",
    repairLink: "/repair/macbook",
    repairLabel: "laptop repair",
  },
  {
    icon: Gamepad2,
    title: "Sell Game Consoles & Games",
    models: ["PlayStation", "Xbox", "Nintendo Switch", "Steam Deck", "and more"],
    description: "Sell PlayStation, Xbox, Nintendo Switch, Steam Deck, and game discs. Working or with issues.",
    repairLink: "/repair/nintendo-switch",
    repairLabel: "console repair",
  },
  {
    icon: Watch,
    title: "Sell Apple Watch & Wearables",
    models: ["Apple Watch", "Samsung Galaxy Watch", "Fitbit", "and more"],
    description: "Sell your smartwatch or fitness tracker. We buy devices in any cosmetic or functional condition.",
    repairLink: "/repair/apple-watch",
    repairLabel: "wearable repair",
  },
];

export const DeviceCategories = () => {
  return (
    <section id="quote-form" className="py-16 md:py-20">
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
                  {category.models.map((model, modelIndex) => (
                    <span
                      key={modelIndex}
                      className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {model}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/70 hover:text-primary"
                    asChild
                  >
                    <a href={QUOTE_URL} target="_blank" rel="noopener noreferrer">
                      Get Cash Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Changed your mind?{" "}
                    <Link to={category.repairLink} className="text-primary hover:underline">
                      Get {category.repairLabel} instead
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
