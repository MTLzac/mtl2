import { Wrench, RefreshCw, HardDrive } from "lucide-react";

interface GuideBox {
  question: string;
  answer: string;
  icon: React.ReactNode;
  iconBg: string;
}

const GUIDE_BOXES: GuideBox[] = [
  {
    question: "Device < 2 Years?",
    answer: "Repair",
    icon: <Wrench className="h-5 w-5" />,
    iconBg: "bg-success/10 text-success",
  },
  {
    question: "Motherboard Issue?",
    answer: "Trade-In",
    icon: <RefreshCw className="h-5 w-5" />,
    iconBg: "bg-primary/10 text-primary",
  },
  {
    question: "Data Trapped?",
    answer: "Data Recovery",
    icon: <HardDrive className="h-5 w-5" />,
    iconBg: "bg-muted text-muted-foreground",
  },
];

export const QuickGuide = () => {
  return (
    <div className="mb-8">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 text-center sm:text-left">
        Quick Guide
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {GUIDE_BOXES.map((box, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors"
          >
            <div className={`p-2.5 rounded-full ${box.iconBg} flex-shrink-0`}>
              {box.icon}
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{box.question}</p>
              <p className="font-semibold text-foreground">→ {box.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
