import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PDPBnplSectionProps {
  price: number;
}

const PDPBnplSection = ({ price }: PDPBnplSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Calculate Sezzle 4-payment amount
  const sezzlePayment = (price / 4).toFixed(2);
  
  return (
    <div className="mt-2">
      {/* Primary BNPL Line - Sezzle */}
      <p className="text-sm text-muted-foreground">
        or 4 payments of{" "}
        <span className="font-medium text-foreground">${sezzlePayment}</span>
        {" "}with{" "}
        <span className="font-semibold text-[#392256]">Sezzle</span>
      </p>
      
      {/* View Other Options Link */}
      <Dialog>
        <DialogTrigger asChild>
          <button 
            className="text-xs text-muted-foreground/70 hover:text-muted-foreground underline underline-offset-2 mt-1 transition-colors"
          >
            View other payment options
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Payment Options</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            {/* Sezzle */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#392256]">Sezzle</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Pay in 4 interest-free payments of <span className="font-medium text-foreground">${sezzlePayment}</span>
              </p>
              <p className="text-xs text-muted-foreground/70">
                Split your purchase into 4 interest-free payments. No hidden fees.
              </p>
            </div>
            
            {/* Divider */}
            <div className="border-t border-border" />
            
            {/* Shop Pay Installments */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#5A31F4]">Shop Pay</span>
                <span className="text-xs bg-muted px-1.5 py-0.5 rounded">Installments</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Pay in 4 interest-free payments of <span className="font-medium text-foreground">${sezzlePayment}</span>
              </p>
              <p className="text-xs text-muted-foreground/70">
                Available at checkout for orders between $50 and $999.99. Subject to eligibility check.
              </p>
            </div>
            
            {/* Legal Copy */}
            <div className="border-t border-border pt-4">
              <p className="text-xs text-muted-foreground/60 leading-relaxed">
                Payment options are provided by third-party providers. Approval and terms subject to provider requirements. 
                Late fees may apply. See provider terms for details.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PDPBnplSection;
