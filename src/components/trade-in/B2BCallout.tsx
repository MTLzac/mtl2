import { Link } from "react-router-dom";
import { Building2, ArrowRight, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const B2BCallout = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
          <CardContent className="p-8 lg:p-12">
            <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
              <div className="rounded-full bg-primary/10 p-4 text-primary">
                <Building2 className="h-10 w-10" />
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold">Fleet & Business Trade-Ins</h3>
                <p className="text-muted-foreground">
                  Upgrading a fleet of devices? We offer bulk device buyback for schools, businesses, and IT departments with competitive pricing, scheduled pick-up, and dedicated corporate accounts.
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Truck className="h-4 w-4 text-primary" />
                    Scheduled pick-up
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    Corporate accounts
                  </div>
                </div>
              </div>
              <Button size="lg" className="gradient-primary shrink-0" asChild>
                <Link to="/business#trade-in">
                  Request Bulk Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
