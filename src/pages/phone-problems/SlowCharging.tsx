import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FAQPageSchema } from "@/components/seo/FAQPageSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Why is my phone charging so slowly?",
    answer: "The most common causes are a weak or underpowered charger, a damaged cable, or a dirty charging port. Start by trying a different charger — ideally one that supports fast charging for your phone model. If that doesn't help, clean the charging port and try a fresh cable.",
  },
  {
    question: "Can a dirty charging port cause slow charging?",
    answer: "Yes. When lint packs into the port, the charging cable can't make full contact with the electrical connectors. This reduces power transfer and slows charging noticeably. Cleaning the port with a wooden toothpick often makes an immediate difference.",
  },
  {
    question: "Why does my phone charge slowly but discharge quickly?",
    answer: "This combination usually points to battery degradation. As batteries age, they become less efficient at accepting a charge and holding it. Check your battery health in settings — if it's below 80%, a battery replacement is likely worth considering.",
  },
  {
    question: "How can I make my phone charge faster?",
    answer: "Use a fast charger rated for your phone's maximum wattage, switch to a quality cable, close background apps before charging, remove the phone from its case, and avoid using the phone heavily while it's plugged in. These steps together can significantly cut down your charge time.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "https://mobiletechlab.ca/" },
  { name: "Phone Not Charging", url: "https://mobiletechlab.ca/phone-problems/phone-not-charging" },
  { name: "Slow Charging", url: "https://mobiletechlab.ca/phone-problems/phone-not-charging/slow-charging" },
];

const SlowCharging = () => {
  return (
    <>
      <Helmet>
        <title>Phone Charging Slowly? Causes and Fixes | Mobile Tech Lab</title>
        <meta name="description" content="Is your phone charging slowly? Learn the most common causes like weak chargers, dirty charging ports, and battery problems—and how to fix them." />
        <link rel="canonical" href="https://mobiletechlab.ca/phone-problems/phone-not-charging/slow-charging" />
        <meta property="og:title" content="Phone Charging Slowly? Causes and Fixes | Mobile Tech Lab" />
        <meta property="og:description" content="Is your phone charging slowly? Learn the most common causes like weak chargers, dirty charging ports, and battery problems—and how to fix them." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://mobiletechlab.ca/phone-problems/phone-not-charging/slow-charging" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Phone Charging Slowly? Causes and Fixes | Mobile Tech Lab" />
        <meta name="twitter:description" content="Is your phone charging slowly? Learn the most common causes like weak chargers, dirty charging ports, and battery problems—and how to fix them." />
      </Helmet>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQPageSchema faqs={faqs} />
      <Header />

      <main className="min-h-screen bg-background">
        <article className="container mx-auto px-4 py-12 max-w-3xl">
          {/* Hero */}
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Your Phone Is Charging Slowly (8 Common Causes and Fixes)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your phone used to charge up in an hour. Now it takes three — and it's still not at 100% by morning.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Slow charging is one of those problems that sneaks up on you. It rarely happens overnight, so it's easy to miss until one day you realize your phone has been on the charger for two hours and barely moved. The cause is usually something simple, but it can also be a sign that something needs attention.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Here are the eight most common reasons phones charge slowly — and what you can actually do about each one.
            </p>
          </header>

          {/* Quick summary */}
          <div className="bg-muted/50 border border-border rounded-lg p-6 mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-3">Why Is My Phone Charging Slowly?</h2>
            <p className="text-muted-foreground mb-3">Slow charging is almost always caused by one of these:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>A weak or underpowered charger</li>
              <li>A worn or damaged charging cable</li>
              <li>Debris inside the charging port</li>
              <li>Background apps consuming power while charging</li>
              <li>Overheating protection slowing things down</li>
              <li>Fast charging being disabled in settings</li>
              <li>Battery degradation</li>
              <li>An underlying hardware problem</li>
            </ul>
            <p className="text-muted-foreground mt-3">Most of these are easy to test and fix at home. Let's work through them.</p>
          </div>

          {/* Sections */}
          <Section number={1} title="Weak or Underpowered Charger">
            <p className="text-muted-foreground leading-relaxed mb-4">
              This is the most common cause of slow charging — and the one people overlook most often.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Not all chargers are equal. A charger that delivers 5 watts charges dramatically slower than one delivering 20, 25, or 45 watts. The difference isn't subtle — a low-wattage charger can take three or four times as long to charge the same phone.
            </p>
            <SignsBox title="Common low-power charging situations:" items={[
              "Using an old charger that came with a previous phone",
              "Plugging into a USB port on a laptop or computer",
              "Using a cheap third-party adapter with no fast charging support",
              "Using a charger designed for a tablet or another device",
            ]} />
            <TipsBox title="What to try:" items={[
              "Use the original charger that came with your phone, or a manufacturer-recommended replacement",
              "Check the wattage printed on your charger — for modern smartphones, look for at least 18W for fast charging, with many flagships supporting 25–65W",
              "Avoid charging from computer USB ports for anything other than a slow top-up",
            ]} />
            <p className="text-muted-foreground leading-relaxed mt-4">
              Switching to the right charger alone can cut your charge time in half or better.
            </p>
          </Section>

          <Section number={2} title="Damaged Charging Cable">
            <p className="text-muted-foreground leading-relaxed mb-4">
              A charger is only as good as the cable connecting it to your phone. Cables wear out constantly — they get bent, coiled, tangled, and yanked — and a damaged cable dramatically reduces charging efficiency even when it still technically works.
            </p>
            <SignsBox items={[
              "Visible fraying, kinking, or damage near the connector ends",
              "Charging starts and stops intermittently",
              "The cable feels loose or requires a specific angle to maintain connection",
            ]} />
            <TipsBox title="What to try:" items={[
              "Swap in a different cable — ideally one you know is in good condition",
              "Use a certified cable (Apple MFi for iPhone, or a reputable brand for USB-C)",
              "If charging speed improves immediately with a different cable, the original is the problem",
            ]} />
            <p className="text-muted-foreground leading-relaxed mt-4">
              Cables are cheap to replace. If a new one fixes your charging speed, it's an easy win.
            </p>
          </Section>

          <Section number={3} title="Dirty Charging Port">
            <p className="text-muted-foreground leading-relaxed mb-4">
              A dirty charging port doesn't just cause intermittent charging — it can significantly slow things down too.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When lint packs into the charging port, the cable can't fully seat against the electrical contacts. A partial connection means reduced power transfer, which shows up as slower-than-normal charging. You might not even notice the cable isn't fully inserted because it still feels plugged in.
            </p>
            <SignsBox items={[
              "The cable doesn't click in as firmly as it used to",
              "Charging speed has dropped gradually over time",
              "The connection feels slightly loose even with a good cable",
            ]} />
            <TipsBox title="How to clean it safely:" items={[
              "Power off your phone",
              "Use a wooden toothpick to gently loosen and remove compacted lint from the port",
              "Follow up with a short burst of compressed air",
              "Never use metal objects — they can damage the pins inside the port and create a much bigger problem",
            ]} />
            <p className="text-muted-foreground leading-relaxed mt-4">
              After cleaning, plug your charger back in and see if it seats more firmly. Many people are surprised by how much this helps. For a deeper look at port-related charging issues, see our{" "}
              <Link to="/phone-problems/phone-not-charging/charging-port" className="text-primary hover:underline">guide on phone charging port problems</Link>.
            </p>
          </Section>

          <Section number={4} title="Background Apps Draining Power">
            <p className="text-muted-foreground leading-relaxed mb-4">
              If your phone is consuming power faster than it's being delivered, charging will be very slow — or in extreme cases, the battery might barely move at all even while plugged in.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">Apps running in the background can draw significant power, especially:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              <li>Games with active processes</li>
              <li>Navigation apps using GPS</li>
              <li>Video streaming</li>
              <li>Apps performing large downloads or syncs</li>
            </ul>
            <TipsBox title="What to try:" items={[
              "Close all open apps before you charge",
              "Enable airplane mode while charging if you want maximum speed — it cuts off power-hungry background connections",
              "Avoid using your phone heavily while it's charging, especially for gaming or video",
            ]} />
            <p className="text-muted-foreground leading-relaxed mt-4">
              Charging your phone while it's actively being used is a bit like trying to fill a bathtub with the drain open — you'll get there eventually, but much more slowly than you should.
            </p>
          </Section>

          <Section number={5} title="Overheating Protection">
            <p className="text-muted-foreground leading-relaxed mb-4">
              When your phone gets too warm, it intentionally slows down charging to protect the battery from heat damage. This is normal behaviour — but it does mean your phone takes longer to charge than it should.
            </p>
            <SignsBox title="Common causes:" items={[
              "Charging under a pillow or in a case that traps heat",
              "Gaming or streaming while charging",
              "Leaving your phone in direct sunlight or a warm car",
              "Fast charging in an already warm environment",
            ]} />
            <TipsBox title="What to try:" items={[
              "Remove your phone from its case while charging — cases trap heat significantly",
              "Move your phone somewhere with better airflow",
              "Avoid using power-intensive apps while it's on the charger",
              "Let your phone cool down for 10–15 minutes if it's already warm before plugging in",
            ]} />
            <p className="text-muted-foreground leading-relaxed mt-4">
              Once the temperature drops, your phone will resume charging at its normal rate.
            </p>
          </Section>

          <Section number={6} title="Fast Charging Is Disabled">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Some phones require fast charging to be explicitly enabled in settings, and it can get switched off accidentally after a software update or a settings reset.
            </p>
            <TipsBox title="How to check:" items={[
              "Samsung: Settings → Battery and Device Care → Battery → More Battery Settings → Fast Charging",
              "iPhone: Fast charging on iPhone is automatic when using a compatible adapter — if it's slow, the adapter is likely the issue rather than a setting",
              "Other Android phones: Settings → Battery → Charging, or similar depending on the manufacturer",
            ]} />
            <p className="text-muted-foreground leading-relaxed mt-4">
              If fast charging was toggled off, turning it back on should restore your normal charging speed right away.
            </p>
          </Section>

          <Section number={7} title="Battery Degradation">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Batteries don't last forever. After a few years of daily charge cycles, they lose capacity and become less efficient at accepting a charge — which means slower charging, shorter battery life, and more heat while charging.
            </p>
            <SignsBox items={[
              "Your phone drains noticeably faster than it used to",
              "Charging takes much longer than it did when the phone was new",
              "The phone gets warm during charging even with a good charger",
              "Battery percentage jumps or drops unexpectedly",
            ]} />
            <TipsBox title="How to check battery health:" items={[
              "iPhone: Settings → Battery → Battery Health & Charging",
              "Samsung: Settings → Battery and Device Care → Battery (health visible on some models; third-party apps like AccuBattery work well for others)",
            ]} />
            <p className="text-muted-foreground leading-relaxed mt-4">
              Once battery health drops below around 80%, you'll feel it in everyday use. A battery replacement is usually the most cost-effective fix — it restores both charging speed and battery life without replacing the whole phone.
            </p>
          </Section>

          <Section number={8} title="Hardware Problems">
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you've worked through everything above and your phone is still charging unusually slowly, there may be an underlying hardware issue.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">Less common but possible causes include:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              <li>A damaged charging port that's limiting power transfer</li>
              <li>Internal battery failure beyond normal degradation</li>
              <li>A problem with the power management circuitry on the motherboard</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              These can't be diagnosed or fixed without opening the phone. A slow charge that doesn't respond to any of the above fixes — especially if it came on suddenly — is worth having a technician look at.
            </p>
          </Section>

          {/* When to repair */}
          <div className="border-t border-border pt-8 mt-10 mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">When Should You Get Your Phone Repaired?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most slow charging problems are fixable at home with a better charger or cable. But some situations call for professional diagnosis:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Charging speed dropped suddenly with no obvious cause</li>
              <li>The charging port feels loose or only connects at certain angles</li>
              <li>Your phone gets very hot every time it charges</li>
              <li>You've tried multiple cables and chargers and nothing helps</li>
              <li>Your battery health is significantly degraded</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              For device-specific troubleshooting, our{" "}
              <Link to="/phone-problems/phone-not-charging/iphone" className="text-primary hover:underline">iPhone not charging guide</Link> and{" "}
              <Link to="/phone-problems/phone-not-charging/samsung" className="text-primary hover:underline">Samsung not charging guide</Link>{" "}
              go deeper on platform-specific causes. And if your phone has stopped charging entirely rather than just slowing down, our{" "}
              <Link to="/phone-problems/phone-not-charging" className="text-primary hover:underline">main phone not charging guide</Link> covers the full range of causes.
            </p>
          </div>

          {/* FAQ */}
          <div className="border-t border-border pt-8 mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Final CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">Still Charging Too Slowly?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              If your phone is taking hours longer to charge than it should, and nothing above has fixed it, a technician can figure out what's going on quickly.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
              At Mobile Tech Lab, we've been diagnosing charging problems for over 6 years — from simple port cleanings to battery replacements and hardware repairs. We'll identify the cause and give you a clear answer before any work begins.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Visit us in Winnipeg (St. Vital) or Thompson, MB, or mail in your device from anywhere in Canada or the United States.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link to="/repair/iphone">
                  iPhone battery replacement <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/repair/samsung">
                  Samsung charging port repair <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/repairs">
                  View all repair services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default SlowCharging;

/* ── Local helper components ── */

function Section({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">
        {number}. {title}
      </h2>
      {children}
    </section>
  );
}

function SignsBox({ items, title }: { items: string[]; title?: string }) {
  return (
    <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4 mb-4">
      <p className="font-semibold text-foreground mb-2">{title || "Signs to watch for:"}</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function TipsBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
      <p className="font-semibold text-foreground mb-2">{title}</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
