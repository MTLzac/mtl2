import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQPageSchema } from "@/components/seo/FAQPageSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why is my phone plugged in but not charging?",
    answer:
      "The most common causes are a dirty or damaged charging port, a faulty cable, or a worn-out battery. Start by trying a different cable and adapter. If that doesn't work, inspect or clean the charging port. If the issue persists, battery degradation or a damaged port may be to blame.",
  },
  {
    question: "Why does my phone only charge at an angle?",
    answer:
      "This almost always points to a damaged charging port. The connector pins inside may be bent or worn, causing the cable to only make contact in certain positions. A charging port replacement is typically needed at this stage.",
  },
  {
    question: "Can a dirty charging port stop my phone from charging?",
    answer:
      "Yes — absolutely. Lint and debris can completely block the electrical contacts inside the port, preventing the cable from connecting properly. Carefully cleaning the port with a wooden toothpick and compressed air often resolves the issue.",
  },
  {
    question: "Why is my phone charging slowly?",
    answer:
      "Slow charging is usually caused by a weak or incompatible charger, a damaged cable, heavy background app activity, or a degraded battery. Try a higher-wattage adapter, a fresh cable, and close any unnecessary apps while charging.",
  },
  {
    question: "Should I replace my charging port?",
    answer:
      "If your cable constantly disconnects, only works at certain angles, or your phone just won't charge at all despite trying different cables and adapters, it's worth having the port inspected. A port replacement is a common and affordable repair.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "https://mobiletechlab.ca/" },
  { name: "Phone Problems", url: "https://mobiletechlab.ca/phone-problems/phone-not-charging" },
  { name: "Phone Not Charging", url: "https://mobiletechlab.ca/phone-problems/phone-not-charging" },
];

const PhoneNotCharging = () => {
  return (
    <>
      <Helmet>
        <title>Why Is My Phone Not Charging? 9 Common Causes and Fixes</title>
        <meta
          name="description"
          content="Phone not charging? Learn the most common causes and how to fix them before paying for repairs."
        />
        <link rel="canonical" href="https://mobiletechlab.ca/phone-problems/phone-not-charging" />
        <meta property="og:title" content="Why Is My Phone Not Charging? 9 Common Causes & Fixes" />
        <meta
          property="og:description"
          content="Phone not charging? Learn the 9 most common causes and how to fix them."
        />
        <meta property="og:url" content="https://mobiletechlab.ca/phone-problems/phone-not-charging" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Why Is My Phone Not Charging? 9 Common Causes & Fixes" />
        <meta
          name="twitter:description"
          content="Phone not charging? Learn the 9 most common causes and how to fix them."
        />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbs} />
      <FAQPageSchema faqs={faqs} />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          <article className="py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl">
                {/* Hero */}
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-foreground mb-4">
                  Why Is My Phone Not Charging? 9 Common Causes and Fixes
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                  Your phone is plugged in — but the battery isn't moving. Sound familiar?
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A phone that won't charge is one of the most frustrating problems you can run into, especially when you need it most. The good news? Most charging issues have a simple cause, and a lot of them you can fix yourself in a few minutes.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-12">
                  In this guide, we'll walk through the nine most common reasons your phone has stopped charging — and what you can actually do about each one.
                </p>

                {/* Why Your Phone Might Not Be Charging */}
                <h2 className="text-2xl font-bold md:text-3xl text-foreground mb-4">
                  Why Your Phone Might Not Be Charging
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Before you panic, know this: a phone that won't charge isn't always a sign of serious damage. The culprit is often something as simple as a worn-out cable, a bit of pocket lint, or a minor software hiccup.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  That said, charging problems can sometimes point to something more serious — like battery degradation or internal hardware damage. Here's how to tell the difference.
                </p>

                <div className="rounded-xl border border-border bg-secondary/30 p-6 mb-12">
                  <p className="font-semibold text-foreground mb-3">Common reasons a phone stops charging:</p>
                  <ol className="list-decimal list-inside space-y-1.5 text-muted-foreground">
                    <li>Faulty or damaged charging cable</li>
                    <li>Debris or lint clogged in the charging port</li>
                    <li>Damaged charging port</li>
                    <li>Software or firmware glitch</li>
                    <li>Battery degradation</li>
                    <li>Overheating protection kicking in</li>
                    <li>Water or moisture damage</li>
                    <li>Faulty wall adapter</li>
                    <li>Internal hardware failure</li>
                  </ol>
                  <p className="text-muted-foreground mt-3">Let's go through each one.</p>
                </div>

                {/* 1 */}
                <Section number={1} title="Faulty Charging Cable">
                  <p>This is the most common cause — and the easiest to fix.</p>
                  <p>Charging cables take a beating. They get bent, coiled tightly, yanked out at odd angles, and shoved into bags. Over time, the internal wires can break even when the cable still looks fine on the outside. Cheap third-party cables are especially prone to this.</p>
                  <SignsBox items={[
                    "Charging works sometimes but not always",
                    "You have to hold the cable at a certain angle",
                    "The connector looks bent, frayed, or damaged",
                  ]} />
                  <TipsBox title="What to try:" items={[
                    "Swap it out for a different cable — ideally the original one that came with your phone",
                    "Try charging a different device with the same cable to see if the issue follows it",
                    "If possible, use a certified cable (Apple MFi or a reputable brand for Android)",
                  ]} />
                  <p>If a new cable fixes the problem, you're done. Simple as that.</p>
                </Section>

                {/* 2 */}
                <Section number={2} title="Dirty Charging Port">
                  <p>This one surprises a lot of people, but a dirty charging port is incredibly common — especially if you keep your phone in your pocket.</p>
                  <p>Lint, dust, and debris gradually pack into the port over time. Eventually, there's enough buildup that the charging cable can't make a solid electrical connection.</p>
                  <SignsBox items={[
                    "Charging is intermittent or stops and starts",
                    "The cable doesn't click in firmly like it used to",
                    "The connection feels loose even with a good cable",
                  ]} />
                  <TipsBox title="How to clean it safely:" items={[
                    "Use a wooden toothpick to gently loosen and remove debris",
                    "Follow up with a short burst of compressed air to clear anything remaining",
                    "Be slow and careful — you're working around delicate pins",
                  ]} />
                  <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 my-4">
                    <p className="text-sm text-foreground font-medium">⚠️ Never use metal objects like paperclips, needles, or SIM card tools to clean your port. You risk bending or breaking the connector pins.</p>
                  </div>
                  <p>After cleaning, try charging again. You might be surprised — this fixes the problem more often than you'd expect.</p>
                </Section>

                {/* 3 */}
                <Section number={3} title="Damaged Charging Port">
                  <p>If cleaning didn't help, the port itself might be physically damaged.</p>
                  <p>Charging ports can wear out gradually from everyday use, or get damaged from a single rough pull. The tiny connector pins inside can bend, break, or corrode — and once that happens, the port can't make a reliable connection anymore.</p>
                  <SignsBox items={[
                    "Your phone only charges when the cable is held at a certain angle",
                    "The cable falls out easily or feels loose",
                    "Charging cuts out constantly even with a known-good cable",
                  ]} />
                  <p>If this sounds like your situation, a <strong>charging port repair</strong> is likely what you need. It's one of the most common fixes we see — and a relatively straightforward one for a trained technician.</p>
                </Section>

                {/* 4 */}
                <Section number={4} title="Software or System Glitches">
                  <p>Sometimes the phone itself is the issue — not the hardware at all.</p>
                  <p>Software bugs, background app conflicts, overheating protection, and firmware errors can all prevent your phone from charging properly. This is especially true after a recent software update.</p>
                  <TipsBox title="What to try:" items={[
                    "Restart your phone. A full restart clears temporary software states and is often all it takes.",
                    "Check for updates. Go to your settings and make sure your operating system is up to date. Manufacturers regularly push fixes for known bugs — including charging-related ones.",
                    "Close background apps. If your phone is running hot from heavy app usage, it may be throttling or pausing charging intentionally.",
                  ]} />
                  <p>If your phone starts charging after a restart, a software glitch was almost certainly the cause.</p>
                </Section>

                {/* 5 */}
                <Section number={5} title="Battery Degradation">
                  <p>Batteries aren't built to last forever. After a few years of charge cycles, they lose their ability to hold and accept a charge efficiently.</p>
                  <SignsBox items={[
                    "Your battery drains much faster than it used to",
                    "Your phone shuts off randomly, even at 20–30% battery",
                    "The phone gets warm while charging",
                    "Charging is very slow even with a fast charger",
                  ]} />
                  <p>Both iPhone and Android give you ways to check battery health:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground my-3">
                    <li><strong>iPhone:</strong> Settings → Battery → Battery Health & Charging</li>
                    <li><strong>Android:</strong> Battery health options vary by manufacturer, but third-party apps like AccuBattery can give you an estimate</li>
                  </ul>
                  <p>Once battery health drops below roughly 80%, you'll start to notice real performance issues. At that point, a <strong>battery replacement</strong> is usually the most cost-effective fix.</p>
                </Section>

                {/* 6 */}
                <Section number={6} title="Overheating Protection">
                  <p>Modern smartphones are smarter than you think. If your phone gets too hot, it will intentionally slow down or stop charging to protect the battery from heat damage.</p>
                  <SignsBox title="Common causes of overheating:" items={[
                    "Gaming or streaming while charging",
                    "Leaving your phone in direct sunlight",
                    "Using a fast charger in a hot room",
                    "Heavy background processes",
                  ]} />
                  <TipsBox title="What to do:" items={[
                    "Remove your phone from direct sunlight or heat sources",
                    "Take it out of any thick case while charging",
                    "Let it cool down for 10–15 minutes before trying again",
                    "Avoid using power-hungry apps while it's charging",
                  ]} />
                  <p>Once it cools down, charging should resume normally. This isn't a defect — it's actually your phone working exactly as designed.</p>
                </Section>

                {/* 7 */}
                <Section number={7} title="Water or Moisture Damage">
                  <p>Even "water-resistant" phones aren't immune to moisture damage — especially over time, after seals wear down.</p>
                  <p>Water inside the charging port can interfere with the electrical connection immediately, and it can also cause longer-term corrosion that damages the port and other components.</p>
                  <SignsBox items={[
                    "A \"moisture detected\" or \"liquid detected\" warning on screen",
                    "Charging fails shortly after your phone got wet",
                    "Visible corrosion (often a greenish or white residue) around the port",
                  ]} />
                  <TipsBox title="What to do right away:" items={[
                    "Do not plug in your phone if it's wet — this can cause a short circuit",
                    "Shake out any visible water and let the phone air dry in a well-ventilated area",
                    "Do not use a hair dryer; the heat can cause more damage",
                  ]} />
                  <p>
                    If charging still doesn't work after your phone has fully dried out, there may be internal corrosion that requires professional attention.{" "}
                    <Link to="/repair/water-damage" className="text-primary hover:underline font-medium">
                      Water damage
                    </Link>{" "}
                    is one situation where trying to DIY the repair can make things worse.
                  </p>
                </Section>

                {/* 8 */}
                <Section number={8} title="Faulty Wall Adapter">
                  <p>It's easy to blame the phone or cable, but the wall adapter (the block that plugs into the outlet) is often overlooked.</p>
                  <p>Adapters can fail too — especially cheap ones or adapters that have taken a few tumbles.</p>
                  <TipsBox title="Quick tests:" items={[
                    "Try a different wall adapter",
                    "Plug into a different outlet — the outlet itself may have a wiring issue",
                    "Try charging from a computer's USB port or a portable power bank instead",
                  ]} />
                  <p>If your phone charges fine with a different adapter, the original adapter is the problem. Replace it with a quality one from a reputable brand.</p>
                </Section>

                {/* 9 */}
                <Section number={9} title="Internal Hardware Failure">
                  <p>In less common cases, the charging problem originates deeper inside the phone — not at the port or battery level, but in the internal hardware.</p>
                  <SignsBox title="Possible internal causes:" items={[
                    "Power IC (integrated circuit) failure — the chip that manages power delivery",
                    "Motherboard damage",
                    "A loose or damaged battery connector",
                  ]} />
                  <p>These issues can't be diagnosed or fixed without opening the phone. If your phone won't charge and you've ruled out the cable, adapter, port, and software, internal hardware failure is worth considering.</p>
                  <p>This is territory for a professional repair technician. A proper diagnosis will pinpoint exactly what's failed before any parts are replaced.</p>
                </Section>

                {/* When Should You Get Your Phone Repaired */}
                <h2 className="text-2xl font-bold md:text-3xl text-foreground mt-16 mb-4">
                  When Should You Get Your Phone Repaired?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You've done the basics — different cable, different adapter, restarted the phone, cleaned the port. Still nothing? Here's when it makes sense to bring it in:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Your phone only charges at a specific angle</li>
                  <li>The charging port feels loose or wiggly</li>
                  <li>Your phone gets unusually hot during charging</li>
                  <li>Charging stopped working after water exposure</li>
                  <li>The cable and adapter work fine on other devices</li>
                  <li>Your phone is a few years old and the battery is noticeably worse</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-12">
                  For{" "}
                  <Link to="/repair/iphone" className="text-primary hover:underline font-medium">
                    iPhone charging problems
                  </Link>{" "}
                  or{" "}
                  <Link to="/repair/samsung" className="text-primary hover:underline font-medium">
                    Samsung charging issues
                  </Link>
                  , a technician can quickly diagnose whether it's the port, the battery, or something deeper — and give you a clear answer before any repairs begin.
                </p>

                {/* FAQs */}
                <h2 className="text-2xl font-bold md:text-3xl text-foreground mb-6">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-4 mb-12">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="rounded-lg border border-border/50 bg-card px-6 data-[state=open]:border-primary/30"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* Final CTA */}
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
                  <h2 className="text-2xl font-bold md:text-3xl text-foreground mb-4">
                    Still Can't Get Your Phone to Charge?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3 max-w-2xl mx-auto">
                    If you've worked through this list and your phone still won't charge, it's time to let a technician take a look.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3 max-w-2xl mx-auto">
                    At Mobile Tech Lab, we've been diagnosing and repairing smartphones for over 6 years. Whether it's a charging port, battery, or something internal, we'll tell you exactly what's wrong — and what it'll cost to fix — before we do anything.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3 max-w-2xl mx-auto">
                    Walk in to our locations in Winnipeg (St. Vital) or Thompson, MB, or mail in your device from anywhere in Canada or the United States.
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">Most charging repairs are fast. Many are same-day.</p>
                  <Button asChild size="lg">
                    <Link to="/repairs">
                      View our repair services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

/* ── Helper sub-components ── */

function Section({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold md:text-3xl text-foreground mb-4">
        {number}. {title}
      </h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

function SignsBox({ items, title }: { items: string[]; title?: string }) {
  return (
    <div className="rounded-lg border border-border bg-secondary/30 p-5 my-4">
      <p className="font-medium text-foreground mb-2">{title || "Signs this might be the problem:"}</p>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function TipsBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-primary/20 bg-primary/5 p-5 my-4">
      <p className="font-medium text-foreground mb-2">{title}</p>
      <ul className="list-disc list-inside space-y-1.5 text-muted-foreground text-sm">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default PhoneNotCharging;
