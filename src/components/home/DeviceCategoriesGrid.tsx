import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Tablet, 
  Laptop, 
  Gamepad2, 
  Watch, 
  Droplets 
} from "lucide-react";

const CATEGORIES = [
  {
    title: "Phone Repair",
    description: "iPhone, Samsung, Google Pixel & more",
    icon: Smartphone,
    href: "/repair/samsung",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Tablet Repair",
    description: "iPad, Galaxy Tab, Surface tablets",
    icon: Tablet,
    href: "/repair/samsung-galaxy-tab",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Laptop Repair",
    description: "MacBook, Windows laptops & more",
    icon: Laptop,
    href: "/repair/macbook",
    color: "bg-green-500/10 text-green-600",
  },
  {
    title: "Console Repair",
    description: "PlayStation, Xbox, Nintendo Switch",
    icon: Gamepad2,
    href: "/repair/ps5",
    color: "bg-red-500/10 text-red-600",
  },
  {
    title: "Wearables",
    description: "Apple Watch repair & battery replacement",
    icon: Watch,
    href: "/repair/apple-watch",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    title: "Water Damage",
    description: "Data recovery & liquid damage repair",
    icon: Droplets,
    href: "/repair/water-damage",
    color: "bg-cyan-500/10 text-cyan-600",
  },
];

export const DeviceCategoriesGrid = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            We Fix What Others Won't
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From cracked screens to water damage — if it's broken, we can help
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => (
            <Link key={category.title} to={category.href}>
              <Card className="group h-full transition-all hover:shadow-lg hover:border-primary/30">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className={`rounded-lg p-3 ${category.color}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold group-hover:text-primary">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
