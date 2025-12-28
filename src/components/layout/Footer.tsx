import { Link } from "react-router-dom";
import { Smartphone, MapPin, Phone, Mail, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Smartphone className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">Mobile Tech Lab</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Winnipeg's trusted device repair specialists. Fast, reliable, and affordable repairs for phones, tablets, consoles, and computers.
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
                  Trade-In
                </Link>
              </li>
              <li>
                <Link to="/pre-owned" className="text-muted-foreground hover:text-primary">
                  Pre-Owned Devices
                </Link>
              </li>
            </ul>
          </div>

          {/* St. Vital Location */}
          <div>
            <h3 className="mb-4 font-semibold">St. Vital Location</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Unit C – 1170 St Mary's Road, Winnipeg, MB R2M 3S4</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:2044894015" className="hover:text-primary">(204) 489-4015</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Mon-Sat: 9AM-7PM<br />Sun: 12PM-7PM</span>
              </li>
            </ul>
          </div>

          {/* Thompson Location */}
          <div>
            <h3 className="mb-4 font-semibold">Thompson Location</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>City Centre Mall, Thompson, MB</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:2044894015" className="hover:text-primary">(204) 489-4015</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Mon-Sat: 10AM-6PM<br />Sun: Closed</span>
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
