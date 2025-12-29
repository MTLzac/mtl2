export interface Location {
  name: string;
  address: string;
  phone: string;
  phoneFormatted: string;
  hours: string[];
  mapsUrl: string;
  gmbUrl?: string;
}

export const LOCATIONS: Location[] = [
  {
    name: "St. Vital Location",
    address: "845 Dakota St #25, Winnipeg, MB R2M 5M3",
    phone: "2045009757",
    phoneFormatted: "(204) 500-9757",
    hours: ["Mon-Sat: 9AM - 7PM", "Sun: 12PM - 7PM"],
    mapsUrl: "https://maps.google.com/?q=845+Dakota+St+25+Winnipeg+MB+R2M+5M3",
    gmbUrl: "https://www.google.com/maps/place/Mobile+Tech+Lab+St.+Vital/data=!4m2!3m1!1s0x0:0x5aee2e35bcc25930",
  },
  {
    name: "Thompson Location",
    address: "300 Mystery Lake Rd #1530, Thompson, MB R8N 0M2",
    phone: "2044100262",
    phoneFormatted: "(204) 410-0262",
    hours: ["Mon-Sat: 10AM - 6PM", "Sun: Closed"],
    mapsUrl: "https://maps.google.com/?q=300+Mystery+Lake+Rd+1530+Thompson+MB+R8N+0M2",
  },
];

// Default phone number for CTAs (St. Vital as primary)
export const PRIMARY_PHONE = LOCATIONS[0].phone;
export const PRIMARY_PHONE_FORMATTED = LOCATIONS[0].phoneFormatted;

// Primary GMB URL for reviews and ratings
export const PRIMARY_GMB_URL = LOCATIONS[0].gmbUrl;
