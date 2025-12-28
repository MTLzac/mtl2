import { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

// Hours are in Central Time (America/Winnipeg)
interface DayHours {
  open: string; // 24h format "HH:MM"
  close: string;
}

interface LocationHours {
  [key: number]: DayHours | null; // 0 = Sunday, 1 = Monday, etc. null = closed
}

interface Location {
  name: string;
  shortName: string;
  hours: LocationHours;
}

const LOCATIONS: Location[] = [
  {
    name: "Winnipeg (St. Vital)",
    shortName: "St. Vital",
    hours: {
      0: { open: "12:00", close: "19:00" }, // Sunday 12-7
      1: { open: "09:00", close: "19:00" }, // Monday
      2: { open: "09:00", close: "19:00" }, // Tuesday
      3: { open: "09:00", close: "19:00" }, // Wednesday
      4: { open: "09:00", close: "19:00" }, // Thursday
      5: { open: "09:00", close: "19:00" }, // Friday
      6: { open: "09:00", close: "19:00" }, // Saturday
    },
  },
  {
    name: "Thompson (City Centre Mall)",
    shortName: "Thompson",
    hours: {
      0: null, // Sunday - Closed
      1: { open: "10:00", close: "18:00" }, // Monday
      2: { open: "10:00", close: "18:00" }, // Tuesday
      3: { open: "10:00", close: "18:00" }, // Wednesday
      4: { open: "10:00", close: "18:00" }, // Thursday
      5: { open: "10:00", close: "18:00" }, // Friday
      6: { open: "10:00", close: "18:00" }, // Saturday
    },
  },
];

const TIMEZONE = "America/Winnipeg";

function getCurrentCentralTime(): Date {
  const now = new Date();
  const centralTime = new Date(now.toLocaleString("en-US", { timeZone: TIMEZONE }));
  return centralTime;
}

function getLocationStatus(location: Location): { isOpen: boolean; nextChange: string } {
  const centralNow = getCurrentCentralTime();
  const dayOfWeek = centralNow.getDay();
  const currentHour = centralNow.getHours();
  const currentMinute = centralNow.getMinutes();
  const currentTimeMinutes = currentHour * 60 + currentMinute;

  const todayHours = location.hours[dayOfWeek];

  if (!todayHours) {
    // Store is closed today, find next open day
    let nextDay = dayOfWeek;
    for (let i = 1; i <= 7; i++) {
      nextDay = (dayOfWeek + i) % 7;
      if (location.hours[nextDay]) {
        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        if (i === 1) {
          return { isOpen: false, nextChange: `Opens tomorrow ${formatTime(location.hours[nextDay]!.open)}` };
        }
        return {
          isOpen: false,
          nextChange: `Opens ${dayNames[nextDay]} ${formatTime(location.hours[nextDay]!.open)}`,
        };
      }
    }
    return { isOpen: false, nextChange: "Check back later" };
  }

  const [openHour, openMinute] = todayHours.open.split(":").map(Number);
  const [closeHour, closeMinute] = todayHours.close.split(":").map(Number);
  const openTimeMinutes = openHour * 60 + openMinute;
  const closeTimeMinutes = closeHour * 60 + closeMinute;

  if (currentTimeMinutes >= openTimeMinutes && currentTimeMinutes < closeTimeMinutes) {
    // Store is open
    const minutesUntilClose = closeTimeMinutes - currentTimeMinutes;
    if (minutesUntilClose <= 60) {
      return { isOpen: true, nextChange: `Closes in ${minutesUntilClose}min` };
    }
    return { isOpen: true, nextChange: `Until ${formatTime(todayHours.close)}` };
  } else if (currentTimeMinutes < openTimeMinutes) {
    // Store hasn't opened yet today
    return { isOpen: false, nextChange: `Opens ${formatTime(todayHours.open)}` };
  } else {
    // Store has closed for today
    let nextDay = dayOfWeek;
    for (let i = 1; i <= 7; i++) {
      nextDay = (dayOfWeek + i) % 7;
      if (location.hours[nextDay]) {
        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        if (i === 1) {
          return { isOpen: false, nextChange: `Opens tomorrow ${formatTime(location.hours[nextDay]!.open)}` };
        }
        return {
          isOpen: false,
          nextChange: `Opens ${dayNames[nextDay]} ${formatTime(location.hours[nextDay]!.open)}`,
        };
      }
    }
    return { isOpen: false, nextChange: "Check back later" };
  }
}

function formatTime(time24: string): string {
  const [hours, minutes] = time24.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;
  return `${hours12}${minutes > 0 ? `:${minutes.toString().padStart(2, "0")}` : ""}${period}`;
}

export const LiveStatusBadge = () => {
  const statuses = useMemo(() => {
    return LOCATIONS.map((location) => ({
      location,
      status: getLocationStatus(location),
    }));
  }, []);

  return (
    <div className="flex flex-wrap gap-2">
      {statuses.map(({ location, status }) => (
        <Badge
          key={location.shortName}
          variant="outline"
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium ${
            status.isOpen
              ? "border-success/30 bg-success/10 text-success"
              : "border-muted-foreground/30 bg-muted/50 text-muted-foreground"
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${status.isOpen ? "bg-success animate-pulse" : "bg-muted-foreground"}`} />
          <MapPin className="h-3 w-3" />
          <span className="font-semibold">{location.shortName}</span>
          <span className="opacity-75">·</span>
          <span className="font-normal">{status.isOpen ? "Open" : "Closed"}</span>
        </Badge>
      ))}
    </div>
  );
};

export const StoreHoursDisplay = ({ locationIndex = 0 }: { locationIndex?: number }) => {
  const location = LOCATIONS[locationIndex];
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();

  return (
    <div className="space-y-1 text-sm">
      <p className="font-semibold mb-2">{location.name}</p>
      {dayNames.map((day, index) => {
        const hours = location.hours[index];
        const isToday = index === today;
        return (
          <div
            key={day}
            className={`flex justify-between ${isToday ? "font-semibold text-primary" : "text-muted-foreground"}`}
          >
            <span>{day}</span>
            <span>{hours ? `${formatTime(hours.open)} - ${formatTime(hours.close)}` : "Closed"}</span>
          </div>
        );
      })}
    </div>
  );
};

export { LOCATIONS, formatTime };
