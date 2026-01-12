import { CheckCircle, XCircle, Shield, HardDrive, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Requirements = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Sell Requirements</h2>
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
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  Working devices in any cosmetic condition
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <span>
                    Damaged devices (cracked screens, battery issues, etc.) — 
                    <Link to="/repair/water-damage" className="text-primary hover:underline ml-1">prefer to fix it?</Link>
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  Devices you can unlock and sign out of
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Not Accepted */}
          <Card className="border-red-500/30 bg-red-500/5">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                <XCircle className="h-5 w-5" />
                Not Accepted
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  iCloud-locked devices (Find My iPhone enabled)
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  Google/FRP-locked devices
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  Devices with passcode you can't remove
                </li>
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
                <h3 className="mb-1 font-semibold">Your Data is Safe</h3>
                <p className="text-sm text-muted-foreground">
                  You can wipe your device before sending, or we'll securely erase all data during our intake process. Either way, your personal information is protected.
                </p>
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
                    Selling a phone with photos, contacts, or files you haven't backed up? We'll recover your data before we buy your device.
                  </p>
                </div>
                <div className="inline-flex items-center gap-3 rounded-lg bg-primary/10 px-4 py-2">
                  <span className="text-sm text-muted-foreground line-through">$129</span>
                  <span className="text-lg font-bold text-primary">$49</span>
                  <span className="text-sm font-medium text-primary">Save $80 with trade-in</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-400 hover:bg-amber-500/20 hover:border-amber-500/70"
                  asChild
                >
                  <a href="https://shop.mobiletechlab.ca/pages/repair2" target="_blank" rel="noopener noreferrer">
                    Add Data Recovery to Quote
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
