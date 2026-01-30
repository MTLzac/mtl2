import { HardDrive, RotateCcw, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const DataOptionsSection = () => {
  return (
    <section id="data-options" className="bg-muted/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
            If Your Data Matters More Than the Phone
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
            Sometimes photos and files are more valuable than the device itself.
            We offer options even when full repair isn't possible.
          </p>

          <div className="mb-8 grid gap-6 md:grid-cols-2">
            {/* Data Transfer Card */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <HardDrive className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Data Transfer</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Move data from one working device to another — photos,
                  contacts, apps, and more.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Working device to working device</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Service-based (no warranty term applies)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Recovery Card */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <RotateCcw className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Data Recovery Attempt</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  We try to get a damaged phone working long enough to back up
                  or transfer your data.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>May involve temporary repairs to access data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Fee applies regardless of outcome</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Covers technician time and effort</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Disclaimer */}
          <div className="flex items-start gap-4 rounded-lg border border-amber-500/20 bg-amber-500/5 p-5">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Important:</strong> Some
              damage types (especially liquid damage) significantly reduce
              success odds. We'll give you an honest assessment before
              proceeding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
