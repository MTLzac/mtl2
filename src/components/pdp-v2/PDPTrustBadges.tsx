import { CreditCard } from "lucide-react";

/**
 * PDPTrustBadges - Simplified to payment methods only
 * Trust signals are now consolidated in PDPTrustPanel
 */
const PDPTrustBadges = () => {
  return (
    <div className="mt-4 pt-4 border-t border-border">
      {/* Payment Icons */}
      <div className="flex items-center gap-3">
        <CreditCard className="w-4 h-4 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">Accepted:</span>
        <div className="flex items-center gap-2">
          <div className="h-6 px-2 bg-secondary rounded flex items-center justify-center">
            <span className="text-xs font-medium text-muted-foreground">Visa</span>
          </div>
          <div className="h-6 px-2 bg-secondary rounded flex items-center justify-center">
            <span className="text-xs font-medium text-muted-foreground">MC</span>
          </div>
          <div className="h-6 px-2 bg-secondary rounded flex items-center justify-center">
            <span className="text-xs font-medium text-muted-foreground">Amex</span>
          </div>
          <div className="h-6 px-2 bg-secondary rounded flex items-center justify-center">
            <span className="text-xs font-medium text-muted-foreground">PayPal</span>
          </div>
          <div className="h-6 px-2 bg-secondary rounded flex items-center justify-center">
            <span className="text-xs font-medium text-muted-foreground">Apple Pay</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDPTrustBadges;
