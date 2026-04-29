import { ClipboardCheck, MailCheck, Truck, ShieldCheck, Banknote } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, title: "Submit quote request", body: "One short form, takes under 60 seconds. Tell us your device model and condition." },
  { icon: MailCheck, title: "Get an estimate in 1-2 business hours", body: "We text or email you an estimate based on your description." },
  { icon: Truck, title: "Walk in or ship", body: "Bring your device to St. Vital or Thompson, or mail it in with our free trackable shipping (rural Manitoba customers)." },
  { icon: ShieldCheck, title: "We test and confirm", body: "We verify the device condition (in-person same visit, or within 1 business day of mail-in arrival). If condition matches, the estimate stands. If it differs, we explain and adjust honestly." },
  { icon: Banknote, title: "You get paid", body: "Cash, e-transfer, or store credit. In-store: same visit. Mail-in: same day after inspection via e-transfer." },
];

export const WhatHappensNext = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">What happens after you request a quote</h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <ol className="relative border-l-2 border-primary/30 ml-4 space-y-6">
            {steps.map((step, i) => (
              <li key={i} className="ml-6">
                <span className="absolute -left-[17px] flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  {i + 1}
                </span>
                <div className="rounded-xl border border-border/50 bg-card p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <step.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            No surprises, no pressure. If our final offer isn't right for you, you keep your device — for mail-ins, we ship it back to you at no cost.
          </p>
        </div>
      </div>
    </section>
  );
};
