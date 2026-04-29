import { Smartphone, Tablet, Laptop, Gamepad2, Watch, Disc } from "lucide-react";
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
    description: "We buy working or broken phones — cracked screens, battery issues, water damage. We install temporary parts to test if needed. Locked devices (iCloud or carrier) cannot be purchased.",
    repairLink: "/repair/samsung",
    repairLabel: "phone repair",
  },
  {
    icon: Tablet,
    title: "Sell iPad & Tablets",
    models: ["iPad", "Samsung Galaxy Tab", "Surface", "Amazon Fire", "and more"],
    description: "Sell your tablet in any condition. We handle data wiping and accept devices with damaged screens or batteries. Must be unlocked from any cloud or carrier accounts.",
    repairLink: "/repair/ipad",
    repairLabel: "tablet repair",
  },
  {
    icon: Laptop,
    title: "Sell MacBook & Laptops",
    models: ["MacBook", "Windows laptops", "Chromebooks", "Desktop PCs", "and more"],
    description: "Get cash for your laptop — even older models have value. We securely erase all personal data during intake. iCloud-locked and account-locked devices cannot be purchased.",
    repairLink: "/repair/macbook",
    repairLabel: "laptop repair",
  },
  {
    icon: Gamepad2,
    title: "Sell Game Consoles & Games",
    models: ["PlayStation", "Xbox", "Nintendo Switch", "Steam Deck", "and more"],
    description: "Sell PlayStation, Xbox, Nintendo Switch, Steam Deck, and game discs. We buy controllers and gaming accessories too. Working or with testable issues.",
    repairLink: "/repair/nintendo-switch",
    repairLabel: "console repair",
  },
  {
    icon: Watch,
    title: "Sell Smartwatches",
    models: ["Apple Watch", "Samsung Galaxy Watch", "and more"],
    description: "Get cash for your Apple Watch or Samsung Galaxy Watch — must be unlocked and testable. We do NOT buy fitness trackers, smart rings, or other wearables that aren't testable smartwatches. We also do NOT buy any audio products (headphones, earbuds, speakers).",
    repairLink: "/repair/apple-watch",
    repairLabel: "wearable repair",
  },
  {
    icon: Disc,
    title: "Sell Video Games & Accessories",
    models: ["Game discs", "Controllers", "Headsets", "Gaming keyboards/mice", "and more"],
    description: "We buy your physical video games (PlayStation, Xbox, Nintendo) and gaming accessories — controllers, headsets, gaming keyboards. Most major brands accepted.",
    repairLink: "/repair/controller",
    repairLabel: "controller repair",
  },
];

export const DeviceCategories = () => {
  return (
    <section id="quote-form" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Devices We Buy</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We buy a wide range of tested devices in any working condition — even cracked, dark, or non-charging — as long as we can test functionality.
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
