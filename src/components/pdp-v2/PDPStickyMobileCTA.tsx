import { ShoppingCart, Shield, Battery } from "lucide-react";

interface PDPStickyMobileCTAProps {
  price: number;
  productTitle: string;
  hasUpgrades?: boolean;
}

const PDPStickyMobileCTA = ({ price, productTitle, hasUpgrades = false }: PDPStickyMobileCTAProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-background border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50 safe-area-inset-bottom">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Price & Title */}
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground truncate">
              {productTitle}
            </p>
            <div className="flex items-center gap-2">
              <p className="text-lg font-bold text-foreground">
                ${price.toFixed(2)} <span className="text-sm font-normal text-muted-foreground">CAD</span>
              </p>
              {hasUpgrades && (
                <span className="text-xs text-primary font-medium flex items-center gap-0.5">
                  <Battery className="w-3 h-3" />
                  +upgrades
                </span>
              )}
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>

        {/* Trust Line */}
        <div className="flex items-center justify-center gap-4 mt-2 pt-2 border-t border-border">
          <span className="text-xs text-success font-medium flex items-center gap-1">
            <Shield className="w-3 h-3" />
            1-Year Warranty
          </span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">Free Pickup</span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">Repair or Replace</span>
        </div>
      </div>
    </div>
  );
};

export default PDPStickyMobileCTA;
