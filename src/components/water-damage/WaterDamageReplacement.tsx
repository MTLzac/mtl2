import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const WaterDamageReplacement = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
            When Repair Isn't the Best Option
          </h2>
          
          <p className="text-muted-foreground mb-6">
            If damage is severe or data is no longer needed, we may recommend replacing the device instead. 
            In some cases, store credit toward another device may be an option, depending on condition. 
            If recovery or repair isn't practical, we'll explain replacement or <Link to="/trade-in" className="text-primary hover:underline">sell your device instead</Link>.
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
