import { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

// Hours are in Central Time (America/Winnipeg)
interface DayHours {
  open: string; // 24h format "HH:MM"
  close: string;
}

interface LocationHours {
  [key: number]: DayHours | null; // 0 = Sunday, 1 = Monday, etc. null = closed
}

const STORE_HOURS: LocationHours = {
  0: null, // Sunday - Closed
  1: { open: "10:00", close: "19:00" }, // Monday
  2: { open: "10:00", close: "19:00" }, // Tuesday
  3: { open: "10:00", close: "19:00" }, // Wednesday
  4: { open: "10:00", close: "19:00" }, // Thursday
  5: { open: "10:00", close: "19:00" }, // Friday
  6: { open: "10:00", close: "17:00" }, // Saturday
};

const TIMEZONE = "America/Winnipeg";

function getCurrentWinnipegTime(): Date {
  const now = new Date();
  const winnipegTime = new Date(now.toLocaleString("en-US", { timeZone: TIMEZONE }));
  return winnipegTime;
}

function isStoreOpen(): { isOpen: boolean; nextChange: string } {
  const winnipegNow = getCurrentWinnipegTime();
  const dayOfWeek = winnipegNow.getDay();
  const currentHour = winnipegNow.getHours();
  const currentMinute = winnipegNow.getMinutes();
  const currentTimeMinutes = currentHour * 60 + currentMinute;

  const todayHours = STORE_HOURS[dayOfWeek];

  if (!todayHours) {
    // Store is closed today, find next open day
    let nextDay = dayOfWeek;
    for (let i = 1; i <= 7; i++) {
      nextDay = (dayOfWeek + i) % 7;
      if (STORE_HOURS[nextDay]) {
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return {
          isOpen: false,
          nextChange: `Opens ${dayNames[nextDay]} at ${formatTime(STORE_HOURS[nextDay]!.open)}`,
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
      return { isOpen: true, nextChange: `Closes in ${minutesUntilClose} min` };
    }
    return { isOpen: true, nextChange: `Open until ${formatTime(todayHours.close)}` };
  } else if (currentTimeMinutes < openTimeMinutes) {
    // Store hasn't opened yet today
    return { isOpen: false, nextChange: `Opens at ${formatTime(todayHours.open)}` };
  } else {
    // Store has closed for today
    let nextDay = dayOfWeek;
    for (let i = 1; i <= 7; i++) {
      nextDay = (dayOfWeek + i) % 7;
      if (STORE_HOURS[nextDay]) {
        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        if (i === 1) {
          return { isOpen: false, nextChange: `Opens tomorrow at ${formatTime(STORE_HOURS[nextDay]!.open)}` };
        }
        return {
          isOpen: false,
          nextChange: `Opens ${dayNames[nextDay]} at ${formatTime(STORE_HOURS[nextDay]!.open)}`,
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
  const status = useMemo(() => isStoreOpen(), []);

  return (
    <Badge
      variant="outline"
      className={`inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium ${
        status.isOpen
          ? "border-success/30 bg-success/10 text-success"
          : "border-destructive/30 bg-destructive/10 text-destructive"
      }`}
    >
      <span className={`h-2 w-2 rounded-full ${status.isOpen ? "bg-success animate-pulse" : "bg-destructive"}`} />
      {status.isOpen ? "Open Now" : "Closed"}
      <span className="text-muted-foreground">·</span>
      <span className="text-muted-foreground font-normal">{status.nextChange}</span>
    </Badge>
  );
};

export const StoreHoursDisplay = () => {
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();

  return (
    <div className="space-y-1 text-sm">
      {dayNames.map((day, index) => {
        const hours = STORE_HOURS[index];
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
