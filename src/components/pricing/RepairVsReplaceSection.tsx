import { Scale, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const RepairVsReplaceSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Scale className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Repair vs Replace
            </h2>
          </div>
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-muted-foreground">
            And when trade-in changes the math
          </p>

          <div className="space-y-6 rounded-lg bg-card p-8 shadow-sm border border-border/50">
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">
                  We don't want to charge more than a device is worth.
                </strong>{" "}
                If a repair costs more than replacement value, we'll tell you
                upfront.
              </p>

              <p>
                <strong className="text-foreground">
                  Ultimately, you decide what makes sense.
                </strong>{" "}
                We provide the information; the choice is yours.
              </p>

              <p>
                <strong className="text-foreground">
                  Alternatives exist.
                </strong>{" "}
                If repair doesn't make sense, consider:
              </p>

              <ul className="ml-4 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Pre-owned devices (quality-checked, warrantied)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Trade-in or buyback for your current device
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Selling for parts if repair isn't viable
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-muted/50 p-4 border border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Keep in mind:</strong>{" "}
                Flagship devices can be costly to repair because parts are
                costly. The cost reflects the device's true replacement value,
                not your monthly payments.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="outline" asChild>
                <Link to="/trade-in" className="flex items-center gap-2">
                  Learn about trade-in
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
