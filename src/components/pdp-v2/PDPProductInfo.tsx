import { Star, Smartphone, CheckCircle } from "lucide-react";

interface Condition {
  value: string;
  label: string;
  description: string;
  price: number;
  stock: number;
  badge: string;
}

interface Product {
  title: string;
  vendor: string;
  price: number;
  compareAtPrice: number;
  specs: {
    storage: string;
    carrier: string;
    color: string;
    battery: string;
  };
  rating: number;
  reviewCount: number;
}

interface PDPProductInfoProps {
  product: Product;
  selectedCondition: Condition;
}

const PDPProductInfo = ({ product, selectedCondition }: PDPProductInfoProps) => {
  const savings = product.compareAtPrice - selectedCondition.price;
  const savingsPercent = Math.round((savings / product.compareAtPrice) * 100);

  return (
    <div className="space-y-4">
      {/* Vendor Badge */}
      <span className="inline-block text-sm font-medium text-muted-foreground uppercase tracking-wide">
        {product.vendor}
      </span>

      {/* Title */}
      <h1 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
        {product.title}
      </h1>

      {/* Quick Specs Badges */}
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary rounded-full text-sm font-medium text-muted-foreground">
          <Smartphone className="w-3.5 h-3.5" />
          {product.specs.storage}
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary rounded-full text-sm font-medium text-muted-foreground">
          {product.specs.carrier}
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary rounded-full text-sm font-medium text-muted-foreground">
          {product.specs.color}
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-success/10 rounded-full text-sm font-medium text-success">
          <CheckCircle className="w-3.5 h-3.5" />
          Certified
        </span>
      </div>

      {/* Rating */}
      <button className="flex items-center gap-2 group" aria-label="Read reviews">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? "text-amber-400 fill-amber-400"
                  : "text-muted-foreground/30"
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-medium text-foreground">{product.rating}</span>
        <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
          ({product.reviewCount} reviews)
        </span>
      </button>

      {/* Price Display */}
      <div className="flex items-baseline gap-3 pt-2">
        <span className="text-3xl lg:text-4xl font-bold text-foreground">
          ${selectedCondition.price.toFixed(2)}
        </span>
        <span className="text-lg text-muted-foreground line-through">
          ${product.compareAtPrice.toFixed(2)}
        </span>
        <span className="inline-flex items-center px-2 py-0.5 bg-success/10 text-success text-sm font-semibold rounded">
          Save {savingsPercent}%
        </span>
      </div>

      {/* Stock Indicator */}
      <div className="flex items-center gap-2 text-sm">
        {selectedCondition.stock <= 3 ? (
          <span className="text-amber-600 font-medium">
            ⚡ Only {selectedCondition.stock} left in {selectedCondition.label} condition
          </span>
        ) : (
          <span className="text-success font-medium">
            ✓ In stock — {selectedCondition.stock} available
          </span>
        )}
      </div>
    </div>
  );
};

export default PDPProductInfo;
