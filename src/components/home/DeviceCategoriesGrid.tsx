import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Droplets,
  Smartphone,
  Tablet,
  Laptop,
  Gamepad2,
  ArrowRight
} from "lucide-react";

interface ServiceCard {
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: React.ElementType;
  isPrimary?: boolean;
}

const PRIMARY_SERVICE: ServiceCard = {
  title: "Water Damage Repair in Winnipeg",
  description: "Liquid damage cleanup and professional data recovery for phones, tablets, laptops, and consoles.",
  cta: "Get help with water damage",
  href: "/repair/water-damage",
  icon: Droplets,
  isPrimary: true,
};

const SECONDARY_SERVICES: ServiceCard[] = [
  {
    title: "iPhone Repair in Winnipeg",
    description: "Screen replacement, battery, back glass, and charging port repairs for all iPhone models.",
    cta: "Fix my iPhone",
    href: "/repair/iphone",
    icon: Smartphone,
  },
  {
    title: "Samsung Repair in Winnipeg",
    description: "Cracked screens, battery drain, charging ports, camera issues, and more.",
    cta: "Fix my Samsung",
    href: "/repair/samsung",
    icon: Smartphone,
  },
  {
    title: "Google Pixel Repair in Winnipeg",
    description: "Pixel screen repairs, batteries, charging issues, and camera fixes.",
    cta: "Fix my Pixel",
    href: "/repair/google-pixel",
    icon: Smartphone,
  },
];

const SUPPORTING_SERVICES: ServiceCard[] = [
  {
    title: "iPad & Tablet Repair in Winnipeg",
    description: "Broken screens, batteries, and charging ports for iPad, Galaxy Tab, Surface, and more.",
    cta: "Fix my iPad / tablet",
    href: "/repair/samsung-galaxy-tab",
    icon: Tablet,
  },
  {
    title: "Laptop Repair in Winnipeg",
    description: "Screen, battery, and keyboard repairs for MacBook and Windows laptops.",
    cta: "Fix my laptop",
    href: "/repair/macbook",
    icon: Laptop,
  },
  {
    title: "Console Repair in Winnipeg",
    description: "HDMI ports, overheating, and power issues for PS5, PS4, Xbox, and Nintendo Switch.",
    cta: "Fix my console",
    href: "/consoles",
    icon: Gamepad2,
  },
];

const ServiceCardComponent = ({ service }: { service: ServiceCard }) => {
  const isPrimary = service.isPrimary;
  
  return (
    <Link to={service.href} className="block h-full">
      <Card 
        className={`group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
          isPrimary 
            ? "border-2 border-destructive/30 shadow-[0_0_20px_-5px_hsl(var(--destructive)/0.2)]" 
            : "border-border/50 hover:border-primary/30"
        }`}
      >
        <CardContent className="flex h-full flex-col p-6">
          <div 
            className={`mb-4 inline-flex w-fit rounded-lg p-3 ${
              isPrimary 
                ? "bg-destructive/10 text-destructive" 
                : "bg-primary/10 text-primary"
            }`}
          >
            <service.icon className="h-5 w-5" />
          </div>
          
          <h3 className={`mb-2 text-lg font-semibold ${isPrimary ? "text-foreground" : ""}`}>
            {service.title}
          </h3>
          
          <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
            {service.description}
          </p>
          
          <span 
            className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
              isPrimary 
                ? "text-destructive group-hover:text-destructive/80" 
                : "text-primary group-hover:text-primary/80"
            }`}
          >
            {service.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
};

export const DeviceCategoriesGrid = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Winnipeg Repair Services — We Fix What Others Won't
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            From cracked screens to water damage — if it's broken, our Winnipeg technicians can help.
          </p>
        </div>

        {/* Top Row: Primary + Secondary Services */}
        <div className="mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCardComponent service={PRIMARY_SERVICE} />
          {SECONDARY_SERVICES.map((service) => (
            <ServiceCardComponent key={service.title} service={service} />
          ))}
        </div>

        {/* Bottom Row: Supporting Services */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SUPPORTING_SERVICES.map((service) => (
            <ServiceCardComponent key={service.title} service={service} />
          ))}
        </div>

        {/* Reassurance Line */}
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Not sure which applies? We'll help you choose — no pressure, no obligation.
        </p>
      </div>
    </section>
  );
};
