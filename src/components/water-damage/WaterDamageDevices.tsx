import { Smartphone, Tablet, Laptop, Gamepad2 } from "lucide-react";

export const WaterDamageDevices = () => {
  const devices = [
    {
      icon: Smartphone,
      name: "Phones (iPhone & Android)",
      body: "iPhone (all models from iPhone 4 to iPhone 17 Pro Max), Samsung Galaxy (S, A, Note, Z Fold, Z Flip series), Google Pixel, plus most other Android brands. Foldables welcome — we have specialized experience with Galaxy Z Fold and Z Flip liquid damage.",
    },
    {
      icon: Tablet,
      name: "Tablets (iPad & Android)",
      body: "iPad (all generations including iPad Pro), Samsung Galaxy Tab (all series), Microsoft Surface, plus most other Android tablets.",
    },
    {
      icon: Laptop,
      name: "Laptops (MacBooks & PCs)",
      body: "MacBook Air, MacBook Pro (all years and chips including M-series), plus Windows laptops from all major manufacturers (Dell, HP, Lenovo, Asus, Acer, Microsoft Surface).",
    },
    {
      icon: Gamepad2,
      name: "Game Consoles",
      body: "Nintendo Switch (all variants including OLED), Steam Deck, PlayStation 5, Xbox Series X/S. Less common than phone/laptop liquid damage but we handle these too.",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
            Devices We Accept for Liquid Damage Assessment
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            {devices.map((device, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <device.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{device.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{device.body}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground text-center mt-8 max-w-2xl mx-auto">
            <strong className="text-foreground">What we don't accept:</strong> Wearables (Apple Watch, Galaxy Watch, fitness trackers, smart rings) — these typically aren't repairable for liquid damage and we don't have the specialized tools to attempt it. We'll let you know if you call about a wearable.
          </p>
        </div>
      </div>
    </section>
  );
};
