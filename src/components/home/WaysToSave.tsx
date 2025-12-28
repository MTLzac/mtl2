import { Shield, RefreshCw, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PRIMARY_PHONE } from "@/lib/locations";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";

export const WaysToSave = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Ways to Save
          </h2>
          <p className="text-lg text-muted-foreground">
            Get the most value from your devices
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Price Match Card */}
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="flex flex-col p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Price Match Guarantee</h3>
              <p className="mb-4 flex-1 text-muted-foreground">
                Found a lower price? We'll match it! We price match any local repair shop in Winnipeg.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href={`tel:${PRIMARY_PHONE}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call to Price Match
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Trade-In Card */}
          <Card className="border-success/20 bg-gradient-to-br from-success/5 to-transparent">
            <CardContent className="flex flex-col p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
                <RefreshCw className="h-6 w-6 text-success" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Trade-In & Sell Your Device</h3>
              <p className="mb-2 text-muted-foreground">
                Turn old devices into cash or credit. We buy phones, tablets, consoles, games, laptops — working or broken.
              </p>
              <p className="mb-4 text-sm font-medium text-success">
                Get paid via Cash, E-Transfer, or Store Credit
              </p>
              <Button variant="outline" className="w-full border-success/30 text-success hover:bg-success/10" asChild>
                <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer">
                  Get Trade-In Value
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
