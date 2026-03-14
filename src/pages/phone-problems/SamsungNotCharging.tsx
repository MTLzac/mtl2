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
    question: "Why is my Samsung phone plugged in but not charging?",
    answer:
      "The most common causes are a dirty or damaged USB-C port, a faulty cable, a software glitch, or battery degradation. Start by swapping out the cable and adapter. If that doesn't help, inspect and clean the charging port. If the issue continues, a damaged port or worn battery is likely.",
  },
  {
    question: "Why does my Samsung phone only charge at an angle?",
    answer:
      "This almost always points to a worn or damaged USB-C port. The internal pins are no longer making full contact, so the cable only connects in certain positions. A port replacement is typically needed.",
  },
  {
    question: "Can lint stop my Samsung phone from charging?",
    answer:
      "Yes. Pocket lint compacts inside the USB-C port over time and can block the electrical contacts completely. Cleaning the port with a wooden toothpick often solves the problem entirely.",
  },
  {
    question: "Why is my Samsung phone charging slowly?",
    answer:
      "Slow charging is usually caused by a charger that doesn't support Samsung's fast charging, a damaged cable, background apps running during charging, or battery wear. Check that fast charging is enabled in your battery settings and try a Samsung-certified charger.",
  },
  {
    question: "What should I do if my Samsung shows a moisture warning?",
    answer:
      "Don't plug it in — charging a wet phone risks a short circuit. Let the device air dry completely in a ventilated area for several hours. If the warning disappears and charging works normally after drying, you're good. If charging still fails, bring it in for a check.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "https://mobiletechlab.ca/" },
  { name: "Phone Problems", url: "https://mobiletechlab.ca/phone-problems/phone-not-charging" },
  { name: "Samsung Not Charging", url: "https://mobiletechlab.ca/phone-problems/phone-not-charging/samsung" },
];

const SamsungNotCharging = () => {
  return (
    <>
      <Helmet>
        <title>Samsung Phone Not Charging? Causes and Fixes | Mobile Tech Lab</title>
        <meta
          name="description"
          content="Is your Samsung phone not charging? Learn the most common causes like USB-C port damage, dirty charging ports, and battery problems—and how to fix them."
        />
        <link rel="canonical" href="https://mobiletechlab.ca/phone-problems/phone-not-charging/samsung" />
        <meta property="og:title" content="Samsung Phone Not Charging? Causes and Fixes | Mobile Tech Lab" />
        <meta
          property="og:description"
          content="Is your Samsung phone not charging? Learn the most common causes and how to fix them."
        />
        <meta property="og:url" content="https://mobiletechlab.ca/phone-problems/phone-not-charging/samsung" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Samsung Phone Not Charging? Causes and Fixes | Mobile Tech Lab" />
        <meta
          name="twitter:description"
          content="Is your Samsung phone not charging? Learn the most common causes and how to fix them."
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
                  Samsung Phone Not Charging? 9 Causes and How to Fix It
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                  Your Samsung is plugged in but the battery isn't moving. No charging icon, no notification sound — just a dead or stuck battery percentage.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Charging problems are one of the most common issues Samsung phone owners run into, and the cause is often something simple. A worn cable, a bit of pocket lint, or a quick software restart can fix the problem in minutes.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-12">
                  That said, some charging issues do point to hardware damage that needs professional attention. Here's how to tell the difference — and what to do about each cause.
                </p>

                {/* Why Is My Samsung Phone Not Charging? */}
                <h2 className="text-2xl font-bold md:text-3xl text-foreground mb-4">
                  Why Is My Samsung Phone Not Charging?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Here are the most common reasons a Samsung phone stops charging:
                </p>

                <div className="rounded-xl border border-border bg-secondary/30 p-6 mb-12">
                  <ol className="list-decimal list-inside space-y-1.5 text-muted-foreground">
                    <li>Faulty or damaged USB-C cable</li>
                    <li>Debris or lint blocking the USB-C port</li>
                    <li>A worn or damaged charging port</li>
                    <li>Samsung fast charging not working correctly</li>
                    <li>A software or firmware glitch</li>
                    <li>Battery degradation</li>
                    <li>Overheating protection</li>
                    <li>Water or moisture damage</li>
                    <li>A faulty wall adapter</li>
                  </ol>
                  <p className="text-muted-foreground mt-3">Work through these one by one and you'll likely find the fix without needing a repair.</p>
                </div>

                {/* 1 */}
                <Section number={1} title="Faulty USB-C Charging Cable">
                  <p>The cable is always the first thing to check — it's the most common cause and the easiest to rule out.</p>
                  <p>Samsung phones use USB-C cables, which are more durable than older connector types but still wear out with everyday use. Internal wires can break even when the outside of the cable looks fine. Cheaper third-party cables tend to fail faster, and even quality cables degrade after months of daily use.</p>
                  <SignsBox items={[
                    "Your phone only charges when the cable is held in a certain position",
                    "Charging is inconsistent — it starts and stops",
                    "The connector looks bent or the cable is frayed near the ends",
                  ]} />
                  <TipsBox title="What to try:" items={[
                    "Test with a different USB-C cable",
                    "Use an official Samsung cable or a reputable brand if possible",
                    "Inspect both connector ends for visible damage or bent pins",
                  ]} />
                  <p>If charging works with a different cable, the original is done. Replace it.</p>
                </Section>

                {/* 2 */}
                <Section number={2} title="Dirty Charging Port">
                  <p>This is more common than most people expect — and it's responsible for a surprising number of "my phone won't charge" calls.</p>
                  <p>If you carry your Samsung in your pocket, lint gradually compacts inside the USB-C port over time. Eventually there's enough buildup that the cable can't make a solid electrical connection, even when it appears to plug in properly.</p>
                  <SignsBox items={[
                    "The cable doesn't seat firmly the way it used to",
                    "Charging is intermittent or cuts in and out",
                    "The connection feels loose across multiple cables",
                  ]} />
                  <TipsBox title="How to clean it safely:" items={[
                    "Power off your Samsung first",
                    "Use a wooden toothpick to gently loosen and remove compacted debris",
                    "Follow up with a short burst of compressed air",
                  ]} />
                  <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 my-4">
                    <p className="text-sm text-foreground font-medium">⚠️ Avoid metal tools — a needle or paperclip can bend the pins inside the port and turn a five-minute cleaning job into a repair bill.</p>
                  </div>
                  <p>Try charging again after cleaning. This fix works more often than you'd think.</p>
                </Section>

                {/* 3 */}
                <Section number={3} title="Damaged USB-C Charging Port">
                  <p>If cleaning didn't do it, the port itself may be physically worn or damaged.</p>
                  <p>USB-C ports handle thousands of plug and unplug cycles over a phone's life. The pins inside can bend, wear down, or break — especially if the phone has been dropped or if cables have been pulled out at sharp angles repeatedly.</p>
                  <SignsBox items={[
                    "Your Samsung only charges when the cable is angled a specific way",
                    "The cable falls out easily or doesn't stay in",
                    "Charging cuts out whenever the cable moves slightly",
                  ]} />
                  <p>
                    If this describes your situation, the port likely needs to be replaced. A damaged port isn't something that gets better on its own. Check out our{" "}
                    <Link to="/phone-problems/phone-not-charging" className="text-primary hover:underline font-medium">
                      phone charging port guide
                    </Link>{" "}
                    for more detail, or head to our{" "}
                    <Link to="/repair/samsung" className="text-primary hover:underline font-medium">
                      Samsung repair service
                    </Link>{" "}
                    to book a diagnostic.
                  </p>
                </Section>

                {/* 4 */}
                <Section number={4} title="Samsung Fast Charging Issues">
                  <p>Samsung phones support adaptive fast charging, which delivers power faster than a standard charger — but it requires the right combination of charger and cable to work properly.</p>
                  <p>If your phone is charging very slowly or not at all, fast charging compatibility could be a factor.</p>
                  <SignsBox title="Common fast charging problems:" items={[
                    "Using a third-party charger that doesn't support Samsung's fast charging standard",
                    "A low-quality cable that can't handle the power delivery requirements",
                    "Fast charging accidentally disabled in settings",
                  ]} />
                  <p>
                    <strong>What to check:</strong> Go to <strong>Settings → Battery and Device Care → Battery → More Battery Settings</strong> and make sure Fast Charging is toggled on. If it was disabled, turning it back on may resolve slow or failed charging immediately.
                  </p>
                </Section>

                {/* 5 */}
                <Section number={5} title="Software or Firmware Problems">
                  <p>Charging issues aren't always hardware — sometimes the problem is in the software.</p>
                  <p>A background app conflict, a system glitch, or an outdated version of Android can all interfere with normal charging behaviour. This is especially worth checking if the problem appeared suddenly with no physical cause.</p>
                  <TipsBox title="What to try:" items={[
                    "Restart your phone. A full restart clears temporary system states and fixes more than you'd expect. Power it completely off, wait 30 seconds, and turn it back on.",
                    "Update your software. Go to Settings → Software Update → Download and Install. Samsung regularly pushes fixes for known bugs including charging issues.",
                    'Boot in safe mode. Press and hold the power button, then tap and hold "Power Off" until the safe mode option appears. If your phone charges in safe mode, a third-party app is likely interfering.',
                  ]} />
                  <p>If charging works after a restart or in safe mode, a software issue was the cause.</p>
                </Section>

                {/* 6 */}
                <Section number={6} title="Battery Degradation">
                  <p>Samsung batteries are rated for several hundred charge cycles, but after a few years of daily use, they lose their ability to hold and accept a charge efficiently.</p>
                  <SignsBox items={[
                    "Your battery drains significantly faster than it used to",
                    "Your phone shuts off unexpectedly, even at 20–30% battery",
                    "The phone gets warm while charging",
                    "Charging is very slow regardless of which charger you use",
                  ]} />
                  <p>Newer Samsung models include a battery health check under <strong>Settings → Battery and Device Care → Battery</strong>. If your battery health is showing wear, a replacement is usually the most cost-effective fix — much cheaper than a new phone.</p>
                </Section>

                {/* 7 */}
                <Section number={7} title="Overheating Protection">
                  <p>If your Samsung suddenly stops charging when it's warm, that's intentional. Samsung phones are designed to pause charging when internal temperatures get too high, protecting the battery from heat damage.</p>
                  <SignsBox title="Common causes:" items={[
                    "Playing games or streaming video while charging",
                    "Leaving your phone in direct sunlight or a hot car",
                    "Fast charging in a warm room",
                    "Heavy background app activity",
                  ]} />
                  <TipsBox title="What to do:" items={[
                    "Move your phone to a cooler location",
                    "Remove the case — it traps heat and slows cooling",
                    "Let the phone rest for 10–15 minutes",
                    "Avoid intensive apps while charging",
                  ]} />
                  <p>Charging should resume automatically once the temperature comes down.</p>
                </Section>

                {/* 8 */}
                <Section number={8} title="Water or Moisture Damage">
                  <p>Samsung phones have had water resistance ratings for years, but water resistance degrades over time as seals age — and it was never a guarantee against all liquid exposure.</p>
                  <p>Even brief moisture contact can disrupt charging, and ongoing corrosion from water damage can cause lasting problems with charging components.</p>
                  <SignsBox items={[
                    'A "Moisture Detected in Charging Port" notification on screen',
                    "Charging stopped working after the phone got wet",
                    "Visible corrosion or residue around the port opening",
                  ]} />
                  <TipsBox title="What to do:" items={[
                    "Do not plug the phone in while it's wet — this can cause a short circuit",
                    "Gently tap the phone face-down to shake out visible moisture",
                    "Let it air dry in a well-ventilated spot for several hours",
                    "Skip the rice trick — it's not effective and can introduce debris",
                  ]} />
                  <p>
                    If charging still fails after the phone has fully dried out, there may be internal corrosion. This is a case where{" "}
                    <Link to="/repair/water-damage" className="text-primary hover:underline font-medium">
                      professional repair
                    </Link>{" "}
                    is the right move — moisture damage that goes unaddressed tends to spread.
                  </p>
                </Section>

                {/* 9 */}
                <Section number={9} title="Faulty Wall Adapter">
                  <p>It's easy to focus entirely on the phone and cable, but the wall adapter can fail too — especially cheaper ones or adapters that have been dropped.</p>
                  <TipsBox title="Quick tests:" items={[
                    "Try a different wall adapter",
                    "Plug into a different outlet",
                    "Try charging from a computer's USB port or a portable battery pack",
                  ]} />
                  <p>If your Samsung charges fine with a different adapter, the original is the problem. Replace it with a Samsung adapter or a quality third-party option — avoid very cheap no-name adapters, as inconsistent power delivery can stress the battery.</p>
                </Section>

                {/* When Should You Get Your Samsung Repaired? */}
                <h2 className="text-2xl font-bold md:text-3xl text-foreground mt-16 mb-4">
                  When Should You Get Your Samsung Repaired?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You've tried a different cable, a different adapter, restarted the phone, cleaned the port. Still no charge? Here's when it makes sense to bring it in:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>The cable only makes contact at a specific angle</li>
                  <li>The USB-C port feels loose or wobbly</li>
                  <li>Charging stopped after a drop or water exposure</li>
                  <li>Your cable and adapter charge other devices fine</li>
                  <li>Your phone is several years old and battery life has declined noticeably</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-12">
                  Also worth reading: our{" "}
                  <Link to="/phone-problems/phone-not-charging" className="text-primary hover:underline font-medium">
                    guide on why phones stop charging
                  </Link>{" "}
                  covers causes that apply across all smartphones.
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
                    If you've worked through this guide and your Samsung still won't charge, it's worth having a technician take a look before the problem gets worse.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3 max-w-2xl mx-auto">
                    At Mobile Tech Lab, we've been diagnosing and repairing Samsung phones for over 6 years. We can identify charging port damage, battery failure, and internal hardware issues — and we'll always give you a clear answer before any repair begins.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                    Come in to our locations in Winnipeg (St. Vital) or Thompson, MB, or mail in your device from anywhere in Canada or the United States.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/repair/samsung">
                      View our Samsung repair services
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

export default SamsungNotCharging;
