import { Link } from "react-router-dom";

export interface PricingMicroCopyData {
  costDriver: string;
  priceShock: string;
  advisory: string;
  fallback: string;
}

interface PricingMicroCopyProps {
  content: PricingMicroCopyData;
}

export const PricingMicroCopy = ({ content }: PricingMicroCopyProps) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl space-y-3 text-base text-muted-foreground">
          <p>
            {content.costDriver} {content.priceShock}
          </p>
          <p>
            {content.advisory} {content.fallback} You can learn more about{" "}
            <Link 
              to="/repair-pricing" 
              className="text-primary hover:underline"
            >
              how repair pricing works
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
