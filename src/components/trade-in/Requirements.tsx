import { CheckCircle, XCircle, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Requirements = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Important Requirements</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Before sending your device, please review what we can and cannot accept.
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
                  Damaged devices (cracked screens, battery issues, etc.)
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
        <div className="mx-auto mt-8 max-w-2xl">
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
        </div>
      </div>
    </section>
  );
};
