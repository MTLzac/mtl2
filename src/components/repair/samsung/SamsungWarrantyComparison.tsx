import { ShieldCheck, Clock, MapPin, Wrench } from "lucide-react";

export const SamsungWarrantyComparison = () => {
  return (
    <section id="lifetime-warranty-comparison" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            The Lifetime Warranty Difference
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Why Premium tier costs slightly more — and why customers pick it 70% of the time.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {/* Samsung Authorized — neutral */}
          <div className="rounded-2xl border border-border bg-muted/30 overflow-hidden">
            <div className="border-b border-border bg-muted/60 px-6 py-4">
              <h3 className="text-lg font-bold text-foreground">
                <a
                  href="https://www.samsung.com/ca/support/warranty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Samsung's Authorized Service
                </a>
              </h3>
            </div>
            <ul className="space-y-4 p-6 text-sm">
              <li className="flex gap-3">
                <ShieldCheck className="h-5 w-5 shrink-0 text-muted-foreground" />
                <div>
                  <div className="font-semibold text-foreground">Warranty</div>
                  <p className="text-muted-foreground">90 days on parts and labour</p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-muted-foreground" />
                <div>
                  <div className="font-semibold text-foreground">Service location</div>
                  <p className="text-muted-foreground">
                    Mail-in or limited authorized service centres
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 shrink-0 text-muted-foreground" />
                <div>
                  <div className="font-semibold text-foreground">Turnaround</div>
                  <p className="text-muted-foreground">
                    Typically 5–10 business days for mail-in service
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Wrench className="h-5 w-5 shrink-0 text-muted-foreground" />
                <div>
                  <div className="font-semibold text-foreground">Coverage</div>
                  <p className="text-muted-foreground">
                    Repair only — no extended warranty included
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* MTL Premium — highlighted */}
          <div className="rounded-2xl border-2 border-primary bg-card overflow-hidden shadow-lg">
            <div className="border-b border-primary/30 bg-primary/10 px-6 py-4">
              <h3 className="text-lg font-bold text-primary">Mobile Tech Lab Premium</h3>
            </div>
            <ul className="space-y-4 p-6 text-sm">
              <li className="flex gap-3">
                <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Warranty</div>
                  <p className="text-muted-foreground">
                    Lifetime of the device, against manufacturing defects in the replacement part
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Service location</div>
                  <p className="text-muted-foreground">
                    Walk into St. Vital (Winnipeg) or Thompson — same day for most repairs
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Turnaround</div>
                  <p className="text-muted-foreground">
                    1–2 hours when parts are in stock; 1–3 business days otherwise
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Wrench className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Coverage</div>
                  <p className="text-muted-foreground">
                    Premium tier uses genuine OEM Samsung Service Pack parts where available
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-4xl space-y-3 text-sm text-muted-foreground">
          <p>
            Premium tier costs slightly more than aftermarket alternatives, but the warranty
            difference matters: if you keep your phone for 2–3 years, having lifetime defect
            coverage is significantly more valuable than 90 days. About 70% of our Samsung
            customers choose Premium for this reason.
          </p>
          <p>
            Both tiers professionally installed. Both tiers backed by clear warranty terms (see
            FAQ for full coverage details and exclusions).
          </p>
        </div>
      </div>
    </section>
  );
};
