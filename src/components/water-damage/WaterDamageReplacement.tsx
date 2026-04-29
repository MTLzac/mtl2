import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const WaterDamageReplacement = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            When We Recommend Replacement Instead
          </h2>

          <p className="text-foreground mb-4">
            If damage is severe or data is no longer needed, we may recommend replacing the device instead. We'll tell you upfront — before charging beyond the $49 diagnostic fee.
          </p>

          <p className="font-medium text-foreground mb-3">Replacement is usually the smarter choice when:</p>
          <ul className="space-y-2 text-muted-foreground mb-6">
            {[
              "The board is severely corroded across multiple sections",
              "The cost of repair approaches or exceeds the device's current trade-in value",
              "You don't need data recovery and the phone is older than 3 years",
              "Specialty services would be a better fit for your specific recovery case",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-muted-foreground mb-6">
            In some cases, store credit toward another device may be an option, depending on condition. If recovery or repair isn't practical, we'll explain replacement options or <Link to="/trade-in" className="text-primary hover:underline">sell your device instead</Link>.
          </p>

          <Link
            to="/repair-pricing"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Learn how repair pricing works
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
