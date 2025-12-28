import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Smartphone, Tablet, Gamepad2, Laptop, Watch } from "lucide-react";
import { PRIMARY_PHONE, PRIMARY_PHONE_FORMATTED } from "@/lib/locations";
import logo from "@/assets/logo.png";

const REPAIR_CATEGORIES = [
  {
    title: "Phone Repairs",
    icon: Smartphone,
    items: [
      { name: "Samsung", href: "/repair/samsung" },
      { name: "Google Pixel", href: "/repair/google-pixel" },
      { name: "Motorola", href: "/repair/motorola" },
      { name: "OnePlus", href: "/repair/oneplus" },
      { name: "LG", href: "/repair/lg" },
      { name: "Huawei", href: "/repair/huawei" },
      { name: "Xiaomi", href: "/repair/xiaomi" },
      { name: "Oppo", href: "/repair/oppo" },
      { name: "Nothing", href: "/repair/nothing" },
      { name: "Infinix", href: "/repair/infinix" },
      { name: "TCL", href: "/repair/tcl" },
      { name: "ZTE", href: "/repair/zte" },
      { name: "Blackberry", href: "/repair/blackberry" },
    ],
  },
  {
    title: "Tablets",
    icon: Tablet,
    items: [
      { name: "Galaxy Tab", href: "/repair/galaxy-tab" },
      { name: "Amazon Kindle/Fire", href: "/repair/amazon-kindle-fire" },
    ],
  },
  {
    title: "Gaming Consoles",
    icon: Gamepad2,
    items: [
      { name: "Nintendo Switch", href: "/repair/nintendo-switch" },
      { name: "PlayStation 5", href: "/repair/playstation-5" },
      { name: "PlayStation 4", href: "/repair/playstation-4" },
      { name: "Xbox", href: "/repair/xbox" },
    ],
  },
  {
    title: "Computers",
    icon: Laptop,
    items: [
      { name: "MacBook", href: "/repair/macbook" },
      { name: "Microsoft Surface", href: "/repair/microsoft-surface" },
      { name: "Laptop Repair", href: "/repair/laptop" },
    ],
  },
  {
    title: "Other Devices",
    icon: Watch,
    items: [
      { name: "Apple Watch", href: "/repair/apple-watch" },
      { name: "iPod", href: "/repair/ipod" },
      { name: "Water Damage", href: "/repair/water-damage" },
    ],
  },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Mobile Tech Lab" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className="px-4 py-2 text-sm font-medium hover:text-primary">
                Home
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Repairs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[600px] gap-3 p-4 md:grid-cols-3">
                  {REPAIR_CATEGORIES.map((category) => (
                    <div key={category.title}>
                      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
                        <category.icon className="h-4 w-4" />
                        {category.title}
                      </div>
                      <ul className="space-y-1">
                        {category.items.map((item) => (
                          <li key={item.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.href}
                                className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                              >
                                {item.name}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/trade-in" className="px-4 py-2 text-sm font-medium hover:text-primary">
                Trade-In
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/pre-owned" className="px-4 py-2 text-sm font-medium hover:text-primary">
                Pre-Owned
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <a href={`tel:${PRIMARY_PHONE}`}>
              <Phone className="mr-2 h-4 w-4" />
              {PRIMARY_PHONE_FORMATTED}
            </a>
          </Button>
          <Button size="sm" className="gradient-primary" asChild>
            <a href="https://shop.mobiletechlab.ca/pages/repair2" target="_blank" rel="noopener noreferrer">
              Get Quote
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 overflow-y-auto">
            <nav className="mt-8 space-y-6">
              <Link 
                to="/" 
                className="block text-lg font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              
              {REPAIR_CATEGORIES.map((category) => (
                <div key={category.title}>
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
                    <category.icon className="h-4 w-4" />
                    {category.title}
                  </div>
                  <ul className="ml-6 space-y-2">
                    {category.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          to={item.href}
                          className="block text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <Link 
                to="/trade-in" 
                className="block text-lg font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Trade-In
              </Link>
              <Link 
                to="/pre-owned" 
                className="block text-lg font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Pre-Owned
              </Link>

              <div className="space-y-3 pt-4">
                <Button className="w-full" asChild>
                  <a href={`tel:${PRIMARY_PHONE}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button className="w-full gradient-primary" asChild>
                  <a href="https://shop.mobiletechlab.ca/pages/repair2" target="_blank" rel="noopener noreferrer">
                    Get a Free Quote
                  </a>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};