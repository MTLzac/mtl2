import { Cloud, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WaterDamageDataRecovery = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Data Recovery — Even From Devices That Won't Turn On
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            If your photos, contacts, or files matter more than the device itself.
          </p>

          <p className="text-foreground mb-6">
            In most liquid damage cases, recovering photos, messages, and files is the priority. If your device won't turn on at all, we can still attempt data recovery — but here's our honest first recommendation:
          </p>

          {/* Cloud backup callout — visually distinct trust-building advice block */}
          <aside
            role="note"
            aria-label="Cloud backup recommendation"
            className="my-6 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-r-lg p-4"
          >
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center flex-shrink-0">
                <Cloud className="h-5 w-5 text-amber-700 dark:text-amber-400" />
              </div>
              <div>
                <p className="text-foreground leading-relaxed">
                  <strong className="font-bold">Check your cloud backups first.</strong> Before paying for any data recovery service, sign into your <strong className="text-foreground">iCloud account</strong> (iPhone/iPad/Mac), <strong className="text-foreground">Google account</strong> (Android), or <strong className="text-foreground">Microsoft account</strong> (Windows laptop). Your most recent backup may already have everything you need. If you can restore from a recent backup to a different device, you don't need our data recovery service — and we'll tell you that. Most repair shops won't.
                </p>
              </div>
            </div>
          </aside>

          <h3 className="text-xl font-semibold text-foreground mb-4">
            When cloud backups aren't enough — our $129 data recovery process
          </h3>

          <p className="text-foreground mb-4">
            If you need data that isn't in cloud backup, we attempt board-level data recovery for <strong>$129 + tax</strong>. Here's our actual process:
          </p>

          <ol className="space-y-4 mb-6">
            {[
              { t: "Diagnostic ($49):", b: "We open the device and assess board damage. This fee is credited toward the data recovery attempt if you proceed." },
              { t: "Component installation:", b: "We install temporary working components (battery, screen, charging port) to try to power the device on long enough to extract data through normal means. Often this is enough." },
              { t: "Board-level recovery (when needed):", b: "For more severe cases, we attempt board-level recovery techniques. We do basic board-level work in-house. For severely damaged boards, we'll be honest and recommend specialty data recovery services that handle chip-off recovery (typically $500–$2,000+ at specialty labs)." },
              { t: "Honest outcome:", b: "Outcomes are never guaranteed. Some devices simply can't be recovered from. We don't charge if we can't extract any data." },
            ].map((s, i) => (
              <li key={i} className="flex gap-4 bg-card border rounded-lg p-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">{i + 1}</span>
                <p className="text-foreground"><strong>{s.t}</strong> {s.b}</p>
              </li>
            ))}
          </ol>

          <p className="text-muted-foreground mb-6">
            Our $129 fee covers the recovery attempt regardless of outcome. We tell you upfront whether your case is likely a candidate for our in-house recovery or whether you should go directly to a specialty service.
          </p>

          <Button size="lg" asChild>
            <a href="/#quote">
              Talk to Us About Data Recovery
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
