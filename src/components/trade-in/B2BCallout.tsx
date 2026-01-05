import { Link } from "react-router-dom";
import { Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const B2BCallout = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
          <CardContent className="flex flex-col items-center gap-6 p-8 text-center md:flex-row md:text-left lg:p-12">
            <div className="rounded-full bg-primary/10 p-4 text-primary">
              <Building2 className="h-10 w-10" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2 text-2xl font-bold">Upgrading a Fleet of Devices?</h3>
              <p className="text-muted-foreground">
                We offer bulk device buyback for schools, businesses, and IT departments. Get competitive pricing on volume trade-ins with dedicated account support.
              </p>
            </div>
            <Button size="lg" className="gradient-primary shrink-0" asChild>
              <Link to="/business#bulk-buyback">
                Learn About Business Buyback
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
