import { Shield, CheckCircle, Truck, CreditCard, RotateCcw } from "lucide-react";

const PDPTrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      text: "90-Day Warranty",
      highlight: true
    },
    {
      icon: CheckCircle,
      text: "72-Point Tested"
    },
    {
      icon: Truck,
      text: "Free MB Shipping"
    },
    {
      icon: RotateCcw,
      text: "14-Day Returns"
    },
    {
      icon: CreditCard,
      text: "Secure Checkout"
    }
  ];

  return (
    <div className="mt-4 pt-4 border-t border-border">
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`flex items-center gap-1.5 text-sm ${
              badge.highlight ? "text-success font-medium" : "text-muted-foreground"
            }`}
          >
            <badge.icon className={`w-4 h-4 ${badge.highlight ? "text-success" : ""}`} />
            <span>{badge.text}</span>
          </div>
        ))}
      </div>
      
      {/* Payment Icons */}
      <div className="flex items-center gap-3 mt-4 pt-3 border-t border-border">
        <span className="text-xs text-muted-foreground">Accepted:</span>
        <div className="flex items-center gap-2">
          {/* Payment method icons - simplified representation */}
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
