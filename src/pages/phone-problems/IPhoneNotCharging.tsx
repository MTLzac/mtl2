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
    question: "Why is my iPhone plugged in but not charging?",
    answer:
      "The most common causes are a dirty or damaged Lightning port, a faulty cable, or battery degradation. Start by trying a different cable. If that doesn't help, inspect and clean the Lightning port. If the problem persists, a battery issue or damaged port is likely.",
  },
  {
    question: "Why does my iPhone only charge when the cable is bent?",
    answer:
      "This almost always means the Lightning port is worn or damaged. The pins inside are no longer making full contact, so the cable only connects in certain positions. A port replacement is typically the fix.",
  },
  {
    question: "Can lint stop an iPhone from charging?",
    answer:
      "Yes — absolutely. Lint can pack so tightly into the Lightning port that the cable can't make proper electrical contact. Carefully cleaning the port with a wooden toothpick often resolves the issue completely.",
  },
  {
    question: "Why is my iPhone charging slowly?",
    answer:
      "Slow charging is usually caused by a weak or mismatched charger, a damaged cable, heavy background app activity, or battery wear. Try a higher-wattage Apple adapter, a fresh cable, and close apps running in the background while charging.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "https://mobiletechlab.ca/" },
  { name: "Phone Problems", url: "https://mobiletechlab.ca/phone-problems/phone-not-charging" },
  { name: "iPhone Not Charging", url: "https://mobiletechlab.ca/phone-problems/phone-not-charging/iphone" },
];

const IPhoneNotCharging = () => {
  return (
    <>
      <Helmet>
        <title>iPhone Not Charging? Causes and Fixes (Troubleshooting Guide)</title>
        <meta
          name="description"
          content="Is your iPhone not charging? Learn the most common causes like dirty charging ports, faulty cables, and battery issues—and how to fix them."
        />
        <link rel="canonical" href="https://mobiletechlab.ca/phone-problems/phone-not-charging/iphone" />
        <meta property="og:title" content="iPhone Not Charging? Causes and Fixes (Troubleshooting Guide)" />
        <meta
          property="og:description"
          content="Is your iPhone not charging? Learn the most common causes and how to fix them."
        />
        <meta property="og:url" content="https://mobiletechlab.ca/phone-problems/phone-not-charging/iphone" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="iPhone Not Charging? Causes and Fixes (Troubleshooting Guide)" />
        <meta
          name="twitter:description"
          content="Is your iPhone not charging? Learn the most common causes and how to fix them."
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
                  iPhone Not Charging? 8 Common Causes and How to Fix It
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                  Your iPhone is plugged in, but nothing's happening. No charging animation, no chime, no battery icon. Just... nothing.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  It's one of the most common iPhone problems people run into — and the good news is that most of the time, the fix is simpler than you'd think. Before assuming something is seriously wrong, it's worth working through a few quick checks.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-12">
                  Here are the eight most common reasons an iPhone stops charging, and exactly what to do about each one.
                </p>

                {/* Why Is My iPhone Not Charging? */}
                <h2 className="text-2xl font-bold md:text-3xl text-foreground mb-4">
                  Why Is My iPhone Not Charging?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  iPhone charging problems usually come down to one of these causes:
                </p>

                <div className="rounded-xl border border-border bg-secondary/30 p-6 mb-12">
                  <ol className="list-decimal list-inside space-y-1.5 text-muted-foreground">
                    <li>A worn or faulty Lightning cable</li>
                    <li>Debris or lint packed into the Lightning port</li>
                    <li>A damaged charging port</li>
                    <li>A software or iOS glitch</li>
                    <li>Battery degradation</li>
                    <li>Overheating protection</li>
                    <li>Water or moisture damage</li>
                    <li>A faulty wall adapter</li>
                  </ol>
                  <p className="text-muted-foreground mt-3">Most of these you can troubleshoot yourself in a few minutes. Let's go through them one by one.</p>
                </div>

                {/* 1 */}
                <Section number={1} title="Faulty Lightning Cable">
                  <p>If your iPhone isn't charging, the cable is the first thing to check — and it's the cause more often than people realize.</p>
                  <p>Lightning cables take a lot of abuse. They get coiled, bent, yanked, and tossed into bags every day. The internal wires can break even when the cable looks fine on the outside. Apple's own cables are known to fray near the connectors over time, and cheaper third-party cables can fail even faster.</p>
                  <SignsBox items={[
                    "Fraying or visible damage near the connector ends",
                    "Charging works sometimes but cuts out",
                    "You have to hold the cable at just the right angle",
                  ]} />
                  <TipsBox title="What to try:" items={[
                    "Test with a different Lightning cable",
                    "Use an Apple-certified (MFi) cable if possible",
                    "Inspect both ends of the cable for bent pins or damage",
                  ]} />
                  <p>If a different cable gets your phone charging again, you've found your culprit. Toss the old one.</p>
                </Section>

                {/* 2 */}
                <Section number={2} title="Dirty Lightning Port">
                  <p>This is one of the most overlooked — and most common — causes of iPhone charging problems.</p>
                  <p>If you carry your iPhone in your pocket, lint gradually packs into the Lightning port over time. Eventually there's enough buildup that the cable can't make a solid electrical connection, even if it appears to plug in normally.</p>
                  <SignsBox items={[
                    "The cable doesn't click in firmly the way it used to",
                    "Charging is intermittent — it starts and stops",
                    "The connection feels loose with multiple cables",
                  ]} />
                  <TipsBox title="How to clean it safely:" items={[
                    "Power off your iPhone first",
                    "Use a wooden toothpick to gently loosen and remove compacted debris",
                    "Follow up with a short burst of compressed air",
                  ]} />
                  <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 my-4">
                    <p className="text-sm text-foreground font-medium">⚠️ Never use metal objects — a paperclip or needle can easily bend the pins inside the port, turning a simple cleaning job into a repair.</p>
                  </div>
                  <p>After cleaning, plug in your charger and see if it clicks in more firmly. This fix works surprisingly often.</p>
                </Section>

                {/* 3 */}
                <Section number={3} title="Damaged Charging Port">
                  <p>If cleaning didn't help, the Lightning port itself may be physically damaged.</p>
                  <p>Ports wear out gradually with regular use, and they can also get damaged from a single rough pull or a drop that puts stress on the connector. The tiny pins inside can bend or break — and once that happens, the port can no longer make a reliable connection.</p>
                  <SignsBox items={[
                    "Your iPhone only charges when the cable is held at a specific angle",
                    "The cable falls out easily or feels very loose",
                    "Charging cuts out constantly with cables you know are good",
                  ]} />
                  <p>
                    If this sounds familiar, the port likely needs to be replaced. Visit our{" "}
                    <Link to="/repair/iphone" className="text-primary hover:underline font-medium">
                      iPhone repair service
                    </Link>{" "}
                    to book a diagnostic.
                  </p>
                </Section>

                {/* 4 */}
                <Section number={4} title="iOS Software Issues">
                  <p>It's easy to assume a charging problem is always hardware — but software can cause it too.</p>
                  <p>A bug in iOS, a background process gone wrong, or an outdated operating system can all interfere with normal charging behaviour. This is especially worth checking if the problem appeared suddenly without any physical damage.</p>
                  <TipsBox title="What to try:" items={[
                    "Restart your iPhone. Hold the side button (and volume button on newer models) to power it off fully, then turn it back on. This clears temporary software states and fixes more problems than you'd expect.",
                    "Update iOS. Go to Settings → General → Software Update. Apple regularly releases fixes for known bugs, including charging-related ones.",
                    "Reset all settings. If a restart and update don't help, go to Settings → General → Transfer or Reset iPhone → Reset → Reset All Settings. This won't delete your data, but it clears any corrupted settings that might be interfering.",
                  ]} />
                  <p>If your iPhone starts charging after a restart or update, a software glitch was the cause.</p>
                </Section>

                {/* 5 */}
                <Section number={5} title="Battery Health Problems">
                  <p>iPhone batteries are built to last hundreds of charge cycles — but they don't last forever. As the battery ages, it loses its ability to hold and accept a charge efficiently.</p>
                  <SignsBox items={[
                    "Your battery drains noticeably faster than it used to",
                    "Your iPhone shuts down unexpectedly, even at 20–30%",
                    "The phone gets warm during charging",
                    "Charging is very slow even with a fast adapter",
                  ]} />
                  <p>You can check your battery health directly on your iPhone: <strong>Settings → Battery → Battery Health & Charging</strong>. Once health drops below around 80%, you'll start to notice real-world performance issues.</p>
                  <p>At that point, a <strong>battery replacement</strong> is usually the most practical fix — it's much cheaper than a new phone and makes the device feel new again.</p>
                </Section>

                {/* 6 */}
                <Section number={6} title="Overheating Protection">
                  <p>Your iPhone is actually protecting itself when it stops charging in the heat — this is intentional behaviour, not a malfunction.</p>
                  <p>When an iPhone's internal temperature gets too high, it automatically pauses charging to prevent battery damage. It may also dim the screen or limit performance until it cools down.</p>
                  <SignsBox title="Common causes:" items={[
                    "Leaving your iPhone in direct sunlight",
                    "Gaming or streaming while it's plugged in",
                    "Charging in a hot car or near a heat source",
                    "Using intensive apps while fast charging",
                  ]} />
                  <TipsBox title="What to do:" items={[
                    "Move your iPhone somewhere cooler",
                    "Remove it from any case while it charges — cases trap heat",
                    "Let it cool for 10–15 minutes before trying again",
                    "Avoid heavy app use while charging",
                  ]} />
                  <p>Once the temperature drops, charging should resume on its own.</p>
                </Section>

                {/* 7 */}
                <Section number={7} title="Water Damage">
                  <p>iPhones have had water resistance ratings for several years now — but water resistance isn't the same as waterproof, and it degrades over time as seals age.</p>
                  <p>Even brief liquid exposure can interfere with charging immediately. Longer-term, water causes corrosion inside the port and on internal components that can create lasting damage.</p>
                  <SignsBox items={[
                    'A "Liquid Detected in Lightning Connector" warning on screen',
                    "Charging stopped working after your phone got wet",
                    "Visible corrosion or residue around the port opening",
                  ]} />
                  <TipsBox title="What to do:" items={[
                    "Do not plug your iPhone in while it's wet — this risks a short circuit",
                    "Tap it gently against your hand to remove any visible water",
                    "Let it air dry in a well-ventilated area for several hours",
                    "Do not use a hair dryer or put it in rice — both can cause more harm",
                  ]} />
                  <p>
                    If charging still doesn't work after the phone has fully dried, there may be internal corrosion. This is a situation where{" "}
                    <Link to="/repair/water-damage" className="text-primary hover:underline font-medium">
                      professional repair
                    </Link>{" "}
                    is the right call — water damage that gets ignored tends to get worse.
                  </p>
                </Section>

                {/* 8 */}
                <Section number={8} title="Faulty Wall Adapter">
                  <p>The wall adapter (the block that plugs into the outlet) is easy to overlook when you're troubleshooting, but it fails too.</p>
                  <TipsBox title="Quick tests:" items={[
                    "Try a different wall adapter",
                    "Plug into a different outlet",
                    "Try charging from a computer's USB port or a portable power bank",
                  ]} />
                  <p>If your iPhone charges fine with a different adapter, the original one is the problem. Replace it with an Apple adapter or a reputable third-party option — avoid very cheap no-name adapters, as they can actually damage your battery over time.</p>
                </Section>

                {/* When Should You Get Your iPhone Repaired? */}
                <h2 className="text-2xl font-bold md:text-3xl text-foreground mt-16 mb-4">
                  When Should You Get Your iPhone Repaired?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you've worked through the steps above and your iPhone still won't charge, it's time to have a technician take a look. Here's when repair makes the most sense:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>The cable only makes contact at a certain angle</li>
                  <li>The Lightning port feels loose or wobbly</li>
                  <li>Charging stopped suddenly after a drop or water exposure</li>
                  <li>Your cable and adapter work fine on other devices</li>
                  <li>Your phone is a few years old and battery health is below 80%</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-12">
                  Also worth reading: our{" "}
                  <Link to="/phone-problems/phone-not-charging" className="text-primary hover:underline font-medium">
                    general phone charging troubleshooting guide
                  </Link>{" "}
                  covers additional causes that apply across all phones.
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
                    Still Can't Get Your iPhone to Charge?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3 max-w-2xl mx-auto">
                    If you've worked through this guide and your iPhone still won't charge, a technician can figure out what's going on quickly.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3 max-w-2xl mx-auto">
                    At Mobile Tech Lab, we've been repairing iPhones for over 6 years. We can diagnose Lightning port damage, battery failure, and internal hardware issues — and we'll always tell you what's wrong before we do any work.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3 max-w-2xl mx-auto">
                    Visit us in Winnipeg (St. Vital) or Thompson, MB, or mail in your device from anywhere in Canada or the United States.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/repair/iphone">
                      View our iPhone repair services
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

export default IPhoneNotCharging;
