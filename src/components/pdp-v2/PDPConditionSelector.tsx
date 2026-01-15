import { Check } from "lucide-react";

interface Condition {
  value: string;
  label: string;
  description: string;
  price: number;
  stock: number;
  badge: string;
}

interface PDPConditionSelectorProps {
  conditions: Condition[];
  selectedCondition: Condition;
  onSelect: (condition: Condition) => void;
}

const PDPConditionSelector = ({ conditions, selectedCondition, onSelect }: PDPConditionSelectorProps) => {
  const getBadgeStyles = (badge: string, isSelected: boolean) => {
    const baseStyles = "px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-colors";
    
    if (badge === "success") {
      return `${baseStyles} ${isSelected ? "bg-success text-success-foreground" : "bg-success/10 text-success"}`;
    }
    if (badge === "primary") {
      return `${baseStyles} ${isSelected ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`;
    }
    if (badge === "amber") {
      return `${baseStyles} ${isSelected ? "bg-amber-500 text-white" : "bg-amber-500/10 text-amber-600"}`;
    }
    return baseStyles;
  };

  return (
    <div className="mt-6">
      <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
        Select Condition
        <span className="text-xs font-normal text-muted-foreground">— All devices fully functional</span>
      </h3>
      
      <div className="space-y-3">
        {conditions.map((condition) => {
          const isSelected = selectedCondition.value === condition.value;
          
          return (
            <button
              key={condition.value}
              onClick={() => onSelect(condition)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                isSelected
                  ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                  : "border-border hover:border-muted-foreground/40 bg-card"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={getBadgeStyles(condition.badge, isSelected)}>
                      {condition.label}
                    </span>
                    {condition.stock <= 3 && (
                      <span className="text-xs text-amber-600 font-medium">
                        Only {condition.stock} left
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {condition.description}
                  </p>
                </div>
                
                <div className="flex flex-col items-end gap-1">
                  <span className="text-lg font-bold text-foreground">
                    ${condition.price.toFixed(2)}
                  </span>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-primary border-primary"
                        : "border-muted-foreground/30"
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 text-primary-foreground" />}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Condition Comparison Link */}
      <button className="mt-3 text-sm text-primary hover:underline font-medium">
        What's the difference between conditions?
      </button>
    </div>
  );
};

export default PDPConditionSelector;
