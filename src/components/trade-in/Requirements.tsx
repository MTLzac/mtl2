import { CheckCircle, XCircle, Shield, HardDrive, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Requirements = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm text-muted-foreground">
            Not sure if your device qualifies? We'll tell you in seconds — no commitment required.
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Before You Sell — Quick Checklist</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Before selling your device, please review what we can and cannot buy.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Accepted */}
          <Card className="border-green-500/30 bg-green-500/5">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <CheckCircle className="h-5 w-5" />
                Accepted
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "We accept fully paid, unlocked devices (working or broken — see exclusions)",
                  "Original or third-party chargers welcomed",
                  "We test broken devices by installing temporary parts when needed",
                  "All personal data is wiped securely",
                  "Need help removing your data? We can assist",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Devices We Can't Purchase */}
          <Card className="border-red-500/30 bg-red-500/5">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                <XCircle className="h-5 w-5" />
                Devices We Can't Purchase
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Locked devices (iCloud, carrier, FRP, financing locks) — we can't unlock for buyers",
                  "Audio products (wireless headphones, wired headphones, earbuds, speakers — any brand)",
                  "Devices reported lost, stolen, or blacklisted",
                  "Devices with active financing or balance owing",
                  "Non-testable blacked-out devices (we must be able to power on or test with parts)",
                  "Devices for \"parts only\" — we don't buy devices we can't restore to sellable condition",
                  "Severely water-damaged devices may be eligible for recycling instead of payout (case-by-case)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Data Handling Note */}
        <div className="mx-auto mt-8 max-w-2xl space-y-4">
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="flex items-start gap-4 py-6">
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Your Data is 100% Safe</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Fully wiped or destroyed
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Never accessed without consent
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    We can handle it for you
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Recovery Upsell */}
          <Card className="border-amber-500/30 bg-amber-500/5">
            <CardContent className="flex flex-col sm:flex-row items-start gap-4 py-6">
              <div className="rounded-full bg-amber-500/10 p-2 text-amber-600 dark:text-amber-400">
                <HardDrive className="h-5 w-5" />
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="mb-1 font-semibold">Need Your Data First?</h3>
                  <p className="text-sm text-muted-foreground">
                    Selling a phone with photos, contacts, or files you haven't backed up? We offer Data Recovery & Transfer services—bundle it with your trade-in for a discount.
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-400 hover:bg-amber-500/20 hover:border-amber-500/70"
                  asChild
                >
                  <a href="https://shop.mobiletechlab.ca/pages/repair2" target="_blank" rel="noopener noreferrer">
                    Ask About Data Recovery
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
