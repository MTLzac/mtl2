import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";
import { LOCATIONS } from "@/lib/locations";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div>
            <Link to="/" className="mb-4 inline-block">
              <img src={logo} alt="Mobile Tech Lab" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Manitoba's trusted device repair specialists. Fast, reliable, and affordable repairs for phones, tablets, consoles, and computers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <a 
                  href="https://shop.mobiletechlab.ca/pages/repair2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  Get a Quote
                </a>
              </li>
              <li>
                <Link to="/trade-in" className="text-muted-foreground hover:text-primary">
                  Sell Your Phone
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/repair-pricing" className="text-muted-foreground hover:text-primary">
                  Repair Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Phone Repairs */}
          <div>
            <h3 className="mb-4 font-semibold">Phone Repairs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/repair/iphone" className="text-muted-foreground hover:text-primary">
                  iPhone Repair
                </Link>
              </li>
              <li>
                <Link to="/repair/samsung" className="text-muted-foreground hover:text-primary">
                  Samsung Repair
                </Link>
              </li>
              <li>
                <Link to="/repair/google-pixel" className="text-muted-foreground hover:text-primary">
                  Google Pixel Repair
                </Link>
              </li>
              <li>
                <Link to="/repair/motorola" className="text-muted-foreground hover:text-primary">
                  Motorola Repair
                </Link>
              </li>
            </ul>
          </div>

          {/* Tablet & Computer Repairs */}
          <div>
            <h3 className="mb-4 font-semibold">Tablets & Computers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/repair/ipad" className="text-muted-foreground hover:text-primary">
                  iPad Repair
                </Link>
              </li>
              <li>
                <Link to="/repair/samsung-galaxy-tab" className="text-muted-foreground hover:text-primary">
                  Galaxy Tab Repair
                </Link>
              </li>
              <li>
                <Link to="/repair/macbook" className="text-muted-foreground hover:text-primary">
                  MacBook Repair
                </Link>
              </li>
              <li>
                <Link to="/repair/laptop" className="text-muted-foreground hover:text-primary">
                  Laptop Repair
                </Link>
              </li>
            </ul>
          </div>

          {/* Gaming & Other */}
          <div>
            <h3 className="mb-4 font-semibold">Gaming & More</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/repair/nintendo-switch" className="text-muted-foreground hover:text-primary">
                  Nintendo Switch
                </Link>
              </li>
              <li>
                <Link to="/repair/ps5" className="text-muted-foreground hover:text-primary">
                  PS5 Repair
                </Link>
              </li>
              <li>
                <Link to="/repair/xbox" className="text-muted-foreground hover:text-primary">
                  Xbox Repair
                </Link>
              </li>
              <li>
                <Link to="/repair/steam-deck" className="text-muted-foreground hover:text-primary">
                  Steam Deck Repair
                </Link>
              </li>
              <li>
                <Link to="/repair/apple-watch" className="text-muted-foreground hover:text-primary">
                  Apple Watch Repair
                </Link>
              </li>
              <li>
                <Link to="/repair/water-damage" className="text-muted-foreground hover:text-primary">
                  Water Damage
                </Link>
              </li>
            </ul>
          </div>

          {/* St. Vital Location */}
          <div>
            <h3 className="mb-4 font-semibold">{LOCATIONS[0].name}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{LOCATIONS[0].address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href={`tel:${LOCATIONS[0].phone}`} className="hover:text-primary">
                  {LOCATIONS[0].phoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{LOCATIONS[0].hours.join(" / ")}</span>
              </li>
            </ul>
          </div>

          {/* Thompson Location */}
          <div>
            <h3 className="mb-4 font-semibold">{LOCATIONS[1].name}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{LOCATIONS[1].address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href={`tel:${LOCATIONS[1].phone}`} className="hover:text-primary">
                  {LOCATIONS[1].phoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{LOCATIONS[1].hours.join(" / ")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mobile Tech Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};