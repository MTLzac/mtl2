import { Link } from "react-router-dom";
import { Smartphone, Tablet, Laptop, Gamepad2 } from "lucide-react";

export const WaterDamageDevices = () => {
  const devices = [
    {
      icon: Smartphone,
      name: "Phones (iPhone & Android)",
      links: [
        { name: "iPhone", path: "/repair/iphone" },
        { name: "Samsung", path: "/repair/samsung" },
        { name: "Google Pixel", path: "/repair/google-pixel" },
      ],
    },
    {
      icon: Tablet,
      name: "Tablets (iPad & Android)",
      links: [
        { name: "iPad", path: "/repair/ipad" },
        { name: "Samsung Tablets", path: "/repair/samsung-galaxy-tab" },
      ],
    },
    {
      icon: Laptop,
      name: "Laptops (MacBooks & PCs)",
      links: [
        { name: "MacBook", path: "/repair/macbook" },
        { name: "Surface", path: "/repair/surface" },
        { name: "Laptops", path: "/repair/laptop" },
      ],
    },
    {
      icon: Gamepad2,
      name: "Game Consoles",
      links: [
        { name: "Nintendo Switch", path: "/repair/nintendo-switch" },
        { name: "Steam Deck", path: "/repair/steam-deck" },
        { name: "PlayStation", path: "/repair/ps5" },
      ],
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4 text-center">
            Devices We Assess for Liquid Damage
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 mt-8">
            {devices.map((device, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <device.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{device.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {device.links.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-sm text-primary hover:underline"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground text-center mt-6">
            Wearables are excluded.
          </p>
        </div>
      </div>
    </section>
  );
};
