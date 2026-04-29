export const WaterDamageTimeline = () => {
  const steps = [
    { t: "Walk in or call ahead", b: "Either works. No appointment needed. Bring the device powered off, in a dry container if possible. Tell us how much liquid, what kind, and how long ago." },
    { t: "$49 diagnostic", b: "We open the device and assess the damage scope. This usually takes 30–60 minutes during business hours. The diagnostic fee covers our time and is credited toward your repair if you proceed." },
    { t: "Honest assessment", b: "We tell you exactly what we found, what's recoverable, what isn't, and what your real options are. This includes \"your data is in cloud backup, you don't need our recovery service\" if that's accurate. We'd rather lose the upsell than give bad advice." },
    { t: "You decide", b: "Repair attempt ($149+), data recovery attempt ($129+tax), specialty service referral, replacement, or just walking out with your data. You choose. We don't pressure." },
    { t: "Repair or recovery (if you proceed)", b: "We complete the work as quoted. For repair attempts, no warranty applies to liquid-damaged devices. For data recovery, you pay $129+tax regardless of whether we successfully extract data — but we don't charge if we determine before opening that recovery isn't possible." },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
            What happens after you bring in a liquid-damaged device
          </h3>

          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-4 bg-card border rounded-lg p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">{i + 1}</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">{step.t}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.b}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="text-foreground italic mt-8 text-center">
            No surprises, no false promises. If we can't help, we'll tell you and refer you to someone who can — even if it means we don't get the work.
          </p>
        </div>
      </div>
    </section>
  );
};
