import { Wrench, RefreshCw, HardDrive } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MatrixCard {
  condition: string;
  action: string;
  icon: React.ReactNode;
  accentColor: string;
  bgColor: string;
}

const MATRIX_CARDS: MatrixCard[] = [
  {
    condition: "Device < 2 Years?",
    action: "Repair",
    icon: <Wrench className="h-6 w-6" />,
    accentColor: "text-success",
    bgColor: "bg-success/10",
  },
  {
    condition: "Device > 4 Years + Major Issue?",
    action: "Trade-In",
    icon: <RefreshCw className="h-6 w-6" />,
    accentColor: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    condition: "Data Not Backed Up?",
    action: "Data Recovery",
    icon: <HardDrive className="h-6 w-6" />,
    accentColor: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export const QuickGuide = () => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Quick Decision Matrix
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {MATRIX_CARDS.map((card, index) => (
          <Card 
            key={index}
            className="bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <CardContent className="p-6 text-center">
              <div className={`inline-flex p-3 rounded-full ${card.bgColor} ${card.accentColor} mb-4`}>
                {card.icon}
              </div>
              <p className="text-sm text-muted-foreground mb-2">{card.condition}</p>
              <p className={`text-xl font-bold ${card.accentColor}`}>→ {card.action}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
