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
    question: "Why does my phone only charge if I hold the cable a certain way?",
    answer:
      "This almost always means the charging port is worn, has bent pins, or has debris blocking full contact. Start by cleaning the port with a wooden toothpick. If that doesn't resolve it, the port likely needs to be replaced.",
  },
  {
    question: "Can a dirty charging port stop a phone from charging?",
    answer:
      "Yes — and it's more common than most people expect. Pocket lint compacts inside the port over time and prevents the cable from making solid electrical contact. Carefully cleaning the port fixes this completely in many cases.",
  },
  {
    question: "How do I know if my charging port is broken?",
    answer:
      "The clearest signs are a cable that falls out easily, charging that only works at a specific angle, and a connection that drops when the phone is moved. If multiple cables behave the same way, the port is the issue.",
  },
  {
    question: "Can charging ports be repaired?",
    answer:
      "Yes. Charging ports are standard replaceable components. A technician removes the damaged port and installs a new one — it's one of the most routine phone repairs there is.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "https://mobiletechlab.ca/" },
  { name: "Phone Problems", url: "https://mobiletechlab.ca/phone-problems/phone-not-charging" },
  { name: "Charging Port Damage", url: "https://mobiletechlab.ca/phone-problems/phone-not-charging/charging-port" },
];

const ChargingPortDamage = () => {
  return (
    <>
      <Helmet>
        <title>Phone Charging Port Not Working? Causes & Fixes | Mobile Tech Lab</title>
        <meta
          name="description"
          content="Does your phone only charge at certain angles? Learn why charging ports fail, how to fix common issues, and when a charging port repair is needed."
        />
        <link rel="canonical" href="https://mobiletechlab.ca/phone-problems/phone-not-charging/charging-port" />
        <meta property="og:title" content="Phone Charging Port Not Working? Causes & Fixes | Mobile Tech Lab" />
        <meta
          property="og:description"
          content="Does your phone only charge at certain angles? Learn why charging ports fail and when a repair is needed."
        />
        <meta property="og:url" content="https://mobiletechlab.ca/phone-problems/phone-not-charging/charging-port" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Phone Charging Port Not Working? Causes & Fixes | Mobile Tech Lab" />
        <meta
          name="twitter:description"
          content="Does your phone only charge at certain angles? Learn why charging ports fail and when a repair is needed."
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
                  Phone Only Charges at an Angle? Your Charging Port May Be Damaged
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                  If you've started holding your charging cable at a specific angle just to get your phone to charge — or propping it against something to keep the connection alive — your charging port is trying to tell you something.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This is one of the most common symptoms people notice before a charging port gives out completely. The charger has to be positioned just right. The connection drops whenever the cable shifts. Or the cable barely stays in at all.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-12">
                  The good news is that this problem is usually diagnosable in a few minutes, and charging ports are repairable components. Here's what's actually going on — and what to do about it.
                </p>

                {/* Why Does a Phone Only Charge at Certain Angles? */}
                <h2 className="text-2xl font-bold md:text-3xl text-foreground mb-4">
                  Why Does a Phone Only Charge at Certain Angles?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When a charging connection becomes position-dependent, it almost always means the cable can no longer make consistent electrical contact with the port. There are a few reasons that happens:
                </p>

                <div className="rounded-xl border border-border bg-secondary/30 p-6 mb-4">
                  <ol className="list-decimal list-inside space-y-1.5 text-muted-foreground">
                    <li>Lint or debris packed into the port</li>
                    <li>Worn or loose charging port connectors</li>
                    <li>Bent or broken internal pins</li>
                    <li>A damaged charging cable</li>
                    <li>Corrosion from moisture exposure</li>
                  </ol>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-12">
                  The fix depends on which of these is causing the problem. Start with the simplest options first.
                </p>

                {/* 1 */}
                <Section number={1} title="Dirty Charging Port">
                  <p>Pocket lint is the single most common cause of angle-dependent charging — and it's one most people never consider.</p>
                  <p>Every time you put your phone in your pocket, tiny fibres work their way into the charging port. Over weeks and months, they compact into a dense plug of debris at the bottom of the port. Eventually, the charging cable can't fully seat, so it only makes contact when pushed at a specific angle.</p>
                  <SignsBox items={[
                    "The cable doesn't insert as deeply or firmly as it used to",
                    "Charging works sometimes but cuts out when the phone moves",
                    "The connection feels loose even with a cable you know is good",
                  ]} />
                  <TipsBox title="How to clean it safely:" items={[
                    "Power off your phone completely",
                    "Use a wooden toothpick to gently loosen and remove compacted lint — work carefully along the edges and bottom",
                    "Follow up with a short burst of compressed air to clear any remaining debris",
                  ]} />
                  <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 my-4">
                    <p className="text-sm text-foreground font-medium">⚠️ Never use metal tools. A needle, paperclip, or SIM tool can easily bend the electrical pins inside the port. That turns a free fix into a paid repair.</p>
                  </div>
                  <p>After cleaning, test your charger. If it clicks in more firmly and charging is stable, lint was the culprit. This fix resolves the problem far more often than people expect.</p>
                </Section>

                {/* 2 */}
                <Section number={2} title="Loose or Worn Charging Port">
                  <p>If cleaning didn't help, the port itself may be mechanically worn.</p>
                  <p>Charging ports are built to handle thousands of plug-and-unplug cycles, but they do have a lifespan. Frequent use, sideways cable pulls, and low-quality cables that don't fit precisely all contribute to gradual wear on the port's retention mechanism — the part that holds the cable in place.</p>
                  <SignsBox items={[
                    "The cable slides in without resistance and falls out easily",
                    "Charging only works when the cable is angled upward, downward, or to one side",
                    "The connection drops whenever the phone is picked up or moved",
                  ]} />
                  <p>Once the port has worn to this point, cleaning won't fix it — the mechanical structure is degraded. A port replacement is what's needed.</p>
                </Section>

                {/* 3 */}
                <Section number={3} title="Bent Charging Port Pins">
                  <p>Inside every charging port are small electrical contacts — pins that touch corresponding contacts on the charging cable to complete the circuit. These pins are precise and relatively delicate.</p>
                  <p>If a cable is forced into the port at the wrong angle, inserted too hard, or pulled out sideways, these pins can bend. Even a small amount of deformation is enough to make the connection unstable.</p>
                  <SignsBox items={[
                    "The charger connects but power delivery is inconsistent",
                    "Charging works at one very specific angle and nowhere else",
                    "The problem started after a rough insertion or a drop",
                  ]} />
                  <p>Bent pins can't be straightened reliably without the right tools and experience — attempting it with a toothpick or similar risks breaking them entirely. This is a repair job.</p>
                </Section>

                {/* 4 */}
                <Section number={4} title="Damaged Charging Cable">
                  <p>Before concluding the port is the problem, it's worth ruling out the cable. A damaged cable can mimic every symptom of a failing port — intermittent charging, position-dependent connections, cables that feel loose.</p>
                  <SignsBox title="Common cable problems:" items={[
                    "Fraying or kinking near the connector ends",
                    "A bent or slightly deformed connector plug",
                    "Internal wire damage with no visible exterior sign",
                  ]} />
                  <TipsBox title="What to try:" items={[
                    "Test with a completely different cable — ideally one you know works reliably",
                    "Try the original cable with a different device to see if the problem follows it",
                  ]} />
                  <p>If a different cable charges your phone consistently and at any angle, the cable was the issue all along. Replace it and you're done.</p>
                </Section>

                {/* 5 */}
                <Section number={5} title="Corrosion from Water Damage">
                  <p>Water and charging ports don't mix well — even on phones with official water resistance ratings. Seals degrade over time, and water resistance was never designed to last indefinitely.</p>
                  <p>When moisture gets inside the charging port, it can corrode the electrical contacts and damage the connector. Corrosion is particularly problematic because it's progressive — it continues to spread even after the phone has dried out.</p>
                  <SignsBox items={[
                    "Charging issues started after the phone got wet",
                    'A "moisture detected" or "liquid detected" warning appeared on screen',
                    "Visible discolouration, residue, or green/white corrosion inside the port",
                  ]} />
                  <TipsBox title="What to do if your phone got wet:" items={[
                    "Do not plug it in while wet — this risks a short circuit",
                    "Let it air dry completely in a well-ventilated area for several hours",
                    "Do not use a hair dryer or put it in rice",
                  ]} />
                  <p>
                    If charging still doesn't work reliably after the phone has fully dried, there's likely corrosion on the internal contacts that needs professional cleaning or a port replacement. See our{" "}
                    <Link to="/repair/water-damage" className="text-primary hover:underline font-medium">
                      water damage repair guide
                    </Link>{" "}
                    for more detail.
                  </p>
                </Section>

                {/* Temporary Fixes */}
                <h2 className="text-2xl font-bold md:text-3xl text-foreground mt-16 mb-4">
                  Temporary Fixes Worth Trying First
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Before booking a repair, these steps are worth working through — they resolve the problem more often than you'd think:
                </p>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-5 mb-4">
                  <ul className="list-disc list-inside space-y-1.5 text-muted-foreground text-sm">
                    <li>Clean the charging port with a wooden toothpick and compressed air</li>
                    <li>Try a different cable to rule out cable damage</li>
                    <li>Try a different charger and adapter to rule out power supply issues</li>
                    <li>Restart your phone — in rare cases a software glitch causes charging instability</li>
                  </ul>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-12">
                  Be clear-eyed about what these are, though: temporary measures. If your port is physically worn or has bent pins, cleaning and restarting won't fix the underlying problem. They might buy you some time, but the port will continue to degrade.
                </p>

                {/* When Do You Actually Need a Charging Port Repair? */}
                <h2 className="text-2xl font-bold md:text-3xl text-foreground mt-16 mb-4">
                  When Do You Actually Need a Charging Port Repair?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Here's the honest answer: if your phone only charges at a specific angle, the port is damaged. Cleaning may help if lint is contributing to the problem, but worn connectors and bent pins don't self-repair.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Get your charging port looked at if:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Your phone only charges when the cable is held in a certain position</li>
                  <li>The charger constantly disconnects when the phone is moved</li>
                  <li>The cable falls out easily with no resistance</li>
                  <li>Charging stopped working suddenly after a drop or water exposure</li>
                  <li>Multiple cables and adapters all behave the same way</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Charging ports are replaceable components — it's one of the most common repairs we see, and a straightforward one for an experienced technician. Catching it early also matters: continuing to use a damaged port can stress the battery and, in some cases, damage the motherboard connection over time.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-12">
                  For device-specific guides, see our{" "}
                  <Link to="/phone-problems/phone-not-charging/iphone" className="text-primary hover:underline font-medium">
                    iPhone not charging troubleshooting guide
                  </Link>{" "}
                  or our{" "}
                  <Link to="/phone-problems/phone-not-charging/samsung" className="text-primary hover:underline font-medium">
                    Samsung phone not charging guide
                  </Link>
                  . For a broader look at charging causes, our{" "}
                  <Link to="/phone-problems/phone-not-charging" className="text-primary hover:underline font-medium">
                    phone not charging guide
                  </Link>{" "}
                  covers everything from cables to batteries to software.
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
                    Still Having Charging Problems?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3 max-w-2xl mx-auto">
                    If your phone only charges at an angle, disconnects constantly, or won't charge at all, it's worth having the port properly diagnosed before the problem gets worse.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3 max-w-2xl mx-auto">
                    At Mobile Tech Lab, we've been repairing charging ports for over 6 years across all major phone brands. We'll tell you exactly what's wrong before we do any work — no surprises.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                    Visit us in Winnipeg (St. Vital) or Thompson, MB, or mail in your device from anywhere in Canada or the United States.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild size="lg">
                      <Link to="/repair/iphone">
                        iPhone charging port repair
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link to="/repair/samsung">
                        Samsung charging port repair
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link to="/repairs">
                        View all repair services
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
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

export default ChargingPortDamage;
