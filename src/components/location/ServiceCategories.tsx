import { Link } from "react-router-dom";
import { Smartphone, Tablet, Laptop, Gamepad2, Droplets, Battery } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Phone Screen Repair",
    description: "iPhone, Samsung, Google Pixel & more",
    link: "/repair/iphone",
  },
  {
    icon: Battery,
    title: "Battery Replacement",
    description: "Restore your device's battery life",
    link: "/repair/iphone",
  },
  {
    icon: Tablet,
    title: "Tablet & iPad Repair",
    description: "Screen, battery & charging fixes",
    link: "/repair/ipad",
  },
  {
    icon: Laptop,
    title: "Laptop & MacBook Repair",
    description: "Screen, keyboard & logic board",
    link: "/repair/macbook",
  },
  {
    icon: Gamepad2,
    title: "Gaming Console Repair",
    description: "PS5, Xbox, Nintendo Switch & more",
    link: "/repair/nintendo-switch",
  },
  {
    icon: Droplets,
    title: "Water Damage Recovery",
    description: "Professional diagnostics & cleaning",
    link: "/repair/water-damage",
  },
];

export const ServiceCategories = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Services We Offer</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Professional repairs for phones, tablets, laptops, and gaming consoles—all available via mail-in.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold group-hover:text-primary">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
