import { Clock, Zap, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { STOCKED_PARTS } from "@/lib/pricing-data";

export const TurnaroundSection = () => {
  return (
    <section id="turnaround" className="bg-muted/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
            How Long Repairs Take
          </h2>

          <div className="mb-10 space-y-6">
            {/* Same-day explanation */}
            <div className="rounded-lg bg-card p-6 shadow-sm border border-border/50">
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    Same-day depends on stock and queue
                  </h3>
                  <p className="text-muted-foreground">
                    If we have the part in stock and our queue allows, many
                    repairs can be done the same day. Walk-ins are welcome, but
                    wait times vary.
                  </p>
                </div>
              </div>
            </div>

            {/* Stocked parts */}
            <div className="rounded-lg bg-card p-6 shadow-sm border border-border/50">
              <div className="flex items-start gap-4">
                <Package className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    Parts we commonly stock
                  </h3>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {STOCKED_PARTS.map((part) => (
                      <li
                        key={part}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {part}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sourcing timelines */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="border-border/50">
                <CardContent className="p-5">
                  <h4 className="mb-2 font-semibold text-foreground">
                    Not in stock?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Parts not in stock can often be expedited within ~24
                    business hours via Canadian suppliers.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-5">
                  <h4 className="mb-2 font-semibold text-foreground">
                    Not available in Canada?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Rush service can support expedited/overnight sourcing from
                    the U.S. where possible.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Diagnosis note */}
            <p className="text-center text-sm text-muted-foreground">
              Issues requiring diagnosis (water damage, no power, intermittent
              problems) cannot be guaranteed same-day.
            </p>
          </div>

          {/* Rush Service Card */}
          <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    Rush Service Available
                  </h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Skips queue for priority handling</li>
                    <li>
                      • Can expedite sourcing when faster logistics exist
                    </li>
                    <li>• Does not apply to issues requiring diagnosis</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
