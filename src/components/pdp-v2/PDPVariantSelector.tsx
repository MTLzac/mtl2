import { Check } from "lucide-react";

interface VariantOption {
  value: string;
  label: string;
  description?: string;
  available: boolean;
  stock: number;
}

interface VariantGroup {
  name: string;
  options: VariantOption[];
}

interface PDPVariantSelectorProps {
  variantGroups: VariantGroup[];
  selectedValues: Record<string, string>;
  onSelect: (groupName: string, value: string) => void;
  prices: Record<string, number>; // condition -> price mapping
}

// Condition descriptions for inline display
const conditionDescriptions: Record<string, string> = {
  fair: "Visible wear & scratches",
  good: "Minor cosmetic wear",
  "very good": "Light signs of use",
  excellent: "Like new"
};

const PDPVariantSelector = ({ 
  variantGroups, 
  selectedValues, 
  onSelect,
  prices 
}: PDPVariantSelectorProps) => {
  return (
    <div className="space-y-6 mt-6">
      {variantGroups.map((group) => (
        <div key={group.name} className="variant-group">
          <h3 className="text-sm font-semibold text-foreground mb-3">
            {group.name}
          </h3>
          
          <div className="flex flex-wrap gap-2">
            {group.options.map((option) => {
              const isSelected = selectedValues[group.name] === option.value;
              const isCondition = group.name.toLowerCase() === "condition";
              const conditionKey = option.value.toLowerCase();
              const description = isCondition ? conditionDescriptions[conditionKey] : option.description;
              const showLowStock = option.available && option.stock > 0 && option.stock <= 5;
              
              return (
                <button
                  key={option.value}
                  onClick={() => option.available && onSelect(group.name, option.value)}
                  disabled={!option.available}
                  className={`
                    relative flex flex-col items-start p-3 rounded-lg border-2 transition-all min-w-[100px]
                    ${isSelected 
                      ? "border-primary bg-primary/5 ring-2 ring-primary/20" 
                      : "border-border hover:border-muted-foreground/40 bg-card"
                    }
                    ${!option.available && "opacity-50 cursor-not-allowed"}
                  `}
                >
                  <div className="flex items-center gap-2 w-full">
                    <span className={`font-medium ${isSelected ? "text-primary" : "text-foreground"}`}>
                      {option.label}
                    </span>
                    {isSelected && (
                      <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center ml-auto">
                        <Check className="w-2.5 h-2.5 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                  
                  {/* Inline condition description */}
                  {description && (
                    <span className="text-xs text-muted-foreground mt-1">
                      {description}
                    </span>
                  )}
                  
                  {/* Price for condition variants */}
                  {isCondition && prices[option.value] && (
                    <span className="text-sm font-semibold text-foreground mt-1">
                      ${prices[option.value].toFixed(2)}
                    </span>
                  )}
                  
                  {/* Low stock indicator */}
                  {showLowStock && (
                    <span className="text-xs text-amber-600 font-medium mt-1">
                      Only {option.stock} left
                    </span>
                  )}
                  
                  {/* Out of stock indicator */}
                  {!option.available && (
                    <span className="text-xs text-muted-foreground mt-1">
                      Out of stock
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PDPVariantSelector;
