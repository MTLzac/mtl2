import { Wrench, RefreshCw, HardDrive } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MatrixCard {
  condition: string;
  action: string;
  icon: React.ReactNode;
  accentColor: string;
  bgColor: string;
  logic: string;
}

const MATRIX_CARDS: MatrixCard[] = [
  {
    condition: "Device under 2 years old and powers on?",
    action: "Repair",
    icon: <Wrench className="h-6 w-6" />,
    accentColor: "text-success",
    bgColor: "bg-success/10",
    logic: "Newer devices retain value; repair cost typically justified.",
  },
  {
    condition: "Device over 4 years old or has major damage?",
    action: "Trade-In",
    icon: <RefreshCw className="h-6 w-6" />,
    accentColor: "text-warning",
    bgColor: "bg-warning/10",
    logic: "Repair cost may exceed device value; trade-in recovers partial value.",
  },
  {
    condition: "Important data not backed up?",
    action: "Data Recovery First",
    icon: <HardDrive className="h-6 w-6" />,
    accentColor: "text-primary",
    bgColor: "bg-primary/10",
    logic: "Photos, contacts, and files often matter more than the device itself.",
  },
];

export const QuickGuide = () => {
  return (
    <div className="mb-8" role="region" aria-labelledby="quick-decision-matrix">
      <h3 id="quick-decision-matrix" className="text-lg font-semibold text-foreground mb-4">
        Quick Decision Matrix
      </h3>
      
      {/* Plain text decision logic for LLM/SEO visibility */}
      <p className="text-sm text-muted-foreground mb-6">
        General guidance based on device age, condition, and data status. 
        Every situation is different—this is educational, not a guarantee.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {MATRIX_CARDS.map((card, index) => (
          <Card 
            key={index}
            className="bg-card border border-border shadow-sm"
          >
            <CardContent className="p-6">
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-full ${card.bgColor} ${card.accentColor} mb-4`}>
                {card.icon}
              </div>
              
              {/* Condition as question - semantic and crawlable */}
              <p className="text-sm font-medium text-foreground mb-2">
                {card.condition}
              </p>
              
              {/* Action recommendation */}
              <p className={`text-xl font-bold ${card.accentColor} mb-3`}>
                → {card.action}
              </p>
              
              {/* Plain text rationale - visible without JS */}
              <p className="text-xs text-muted-foreground">
                {card.logic}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Explicit decision logic as plain HTML for LLM extraction */}
      <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border">
        <h4 className="text-sm font-semibold text-foreground mb-3">Decision Logic Summary</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• <strong>Repair recommended:</strong> Device is under 2 years old, powers on, and has common issues like cracked screen or weak battery.</li>
          <li>• <strong>Trade-in recommended:</strong> Device is over 4 years old, has major motherboard or water damage, or repair cost exceeds 50% of replacement value.</li>
          <li>• <strong>Data recovery priority:</strong> Device does not power on and contains photos, contacts, or files that are not backed up elsewhere.</li>
        </ul>
      </div>
    </div>
  );
};
