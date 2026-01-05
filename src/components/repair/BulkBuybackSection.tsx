import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeftRight, Check, ArrowRight } from "lucide-react";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";

const buybackBenefits = [
  "Phones, tablets, laptops, and Chromebooks accepted",
  "Working, damaged, or broken devices—we quote them all",
  "Fast payment via E-Transfer or check",
  "Free shipping on bulk trade-ins",
];

export const BulkBuybackSection = () => {
  return (
    <section className="bg-primary/5 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-card shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
                {/* Icon and Header */}
                <div className="flex-1">
                  <div className="mb-4 inline-flex rounded-full bg-primary/10 p-4 text-primary">
                    <ArrowLeftRight className="h-8 w-8" />
                  </div>
                  <h2 className="mb-2 text-2xl font-bold md:text-3xl">
                    Upgrading Your Fleet? We'll Buy Your Old Devices
                  </h2>
                  <p className="mb-6 text-lg font-medium text-primary">
                    Get More Than Carrier Trade-In Programs
                  </p>
                  <p className="mb-6 text-muted-foreground">
                    When your organization upgrades from iPhone 8 to iPhone SE, or swaps out aging 
                    iPads for new models, don't leave money on the table. We offer competitive bulk 
                    buyback pricing—often significantly more than carrier trade-in programs.
                  </p>
                  
                  {/* Benefits List */}
                  <ul className="mb-8 space-y-3">
                    {buybackBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-full bg-primary/10 p-1 text-primary">
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <Button size="lg" className="gradient-primary" asChild>
                    <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer">
                      Get a Bulk Buyback Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
