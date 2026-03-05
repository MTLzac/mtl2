import { RepairLandingTemplate } from "@/components/repair/RepairLandingTemplate";
import { CommonIssuesSection } from "@/components/repair/CommonIssuesSection";
import type { CommonIssue } from "@/components/repair/CommonIssuesSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  HardDrive, 
  Fan, 
  Plug, 
  Gamepad2, 
  Disc,
  Power,
  Award,
  Zap,
  ArrowRight,
  MonitorX,
  Monitor,
  Cable,
  Unplug,
  Phone,
} from "lucide-react";
import { BeforeAfterSlider } from "@/components/repair/BeforeAfterSlider";
import heroImage from "@/assets/hero-xbox.png";
import xboxHdmiImage from "@/assets/repairs/xbox-broken-hdmi-port.png";
import xboxHdmiBeforeAfter from "@/assets/repairs/xbox-hdmi-before-after.png";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";

const SERVICES = [
  {
    icon: Fan,
    name: "Overheating Repair",
    description: "Clean and service cooling systems to fix Xbox overheating.",
  },
  {
    icon: Plug,
    name: "HDMI Port Repair",
    description: "Replace damaged HDMI ports—no signal issues fixed. Xbox HDMI repairs involve board-level work and are not simple part swaps.",
  },
  {
    icon: Power,
    name: "No Power Issues",
    description: "Diagnose and repair Xbox power supply and boot problems.",
  },
  {
    icon: Disc,
    name: "Disc Drive Repair",
    description: "Fix disc reading issues and drive replacements.",
  },
  {
    icon: Gamepad2,
    name: "Controller Repair",
    description: "Fix Xbox controller stick drift, bumper issues, charging ports, button failures, and sync problems. Controller repairs are also available as a dedicated service.",
    linkText: "See our controller repair service →",
    linkHref: "/repair/controller-repair-winnipeg",
  },
  {
    icon: HardDrive,
    name: "Storage Upgrade",
    description: "Upgrade internal storage for more game capacity.",
  },
];

const ADVANTAGE_PILLARS = [
  {
    icon: Award,
    title: "Xbox Specialists",
    description: "Winnipeg's Xbox Series X, Series S, and One repair experts.",
  },
  {
    icon: Gamepad2,
    title: "Elite Controller Pros",
    description: "Specialized in Xbox Elite controller repairs.",
  },
  {
    icon: Zap,
    title: "Console Repair Pros",
    description: "HDMI port micro-soldering and board-level repairs. Many Xbox HDMI repairs can be completed the same day when the console is dropped off early enough. Rush service can guarantee same-day completion regardless of timing or repair queue.",
  },
  {
    icon: Award,
    title: "Warranty on Every Repair",
    description: "Lifetime warranty on most Xbox and controller repairs. Warranty coverage applies to the part repaired or replaced only and does not extend to unrelated components. If a function cannot be tested prior to repair, its operation cannot be guaranteed afterward. Damage caused by liquid exposure or power surges is not warrantied.",
  },
];

const MODEL_CATEGORIES = [
  {
    title: "Xbox Series",
    models: ["Xbox Series X", "Xbox Series S"],
    description: "Current generation Xbox consoles. We service all major Xbox models, including Xbox One and Xbox Series consoles, and the repair process is similar across generations for most common issues.",
  },
  {
    title: "Xbox One",
    models: ["Xbox One X", "Xbox One S", "Xbox One S All-Digital", "Xbox One (Original)"],
    description: "Previous generation Xbox One family.",
  },
  {
    title: "Controllers",
    models: ["Xbox Wireless Controller (Series X|S)", "Xbox Elite Series 2", "Xbox Elite Controller", "Xbox One Controller"],
    description: "Standard and Elite controller repairs including stick drift, charging port damage, button issues, and sync problems. If the cost of repair exceeds the value of the console, we'll explain alternative options such as replacement or trade-in credit, while still proceeding with repair if that's what you prefer.",
  },
  {
    title: "Xbox 360",
    models: ["Xbox 360 E", "Xbox 360 S", "Xbox 360 (Original)"],
    description: "Legacy Xbox 360 repairs.",
  },
];

const MODELS = [
  "Xbox Series X", "Xbox Series S",
  "Xbox One X", "Xbox One S", "Xbox One S All-Digital", "Xbox One (Original)",
  "Xbox 360 E", "Xbox 360 S", "Xbox 360 (Original)",
  "Xbox Wireless Controller (Series X|S)",
  "Xbox Elite Wireless Controller Series 2",
  "Xbox Elite Wireless Controller",
  "Xbox One Controller",
];

const FAQS = [
  {
    question: "Can you fix Xbox Series X overheating?",
    answer: "Yes! We clean dust buildup, replace thermal paste, and ensure proper airflow at our St. Vital and Garden City locations to resolve overheating issues.",
  },
  {
    question: "Do you repair Xbox controller drift?",
    answer: "Yes, we repair analog stick drift on all Xbox controllers including Elite controllers, usually within an hour.",
  },
  {
    question: "Can you fix Xbox HDMI port?",
    answer: "Yes, HDMI port replacement is a specialty—we use micro-soldering for reliable video output restoration on all Xbox consoles.",
  },
  {
    question: "Do you repair Xbox Elite controllers?",
    answer: "Yes, we service Elite controllers including stick drift, bumper issues, paddle problems, and trigger repairs.",
  },
  {
    question: "My Xbox won't turn on—can you fix it?",
    answer: "Yes, we diagnose and repair power issues including power supply replacement and board-level repairs for all Xbox models.",
  },
];

const PRICING_MICRO_COPY = {
  costDriver: "Xbox repair costs depend on the issue—simple fixes like thermal paste are affordable, while HDMI port repairs involve board-level soldering and cost more. Microsoft's <a href='https://support.xbox.com/en-CA/help/hardware-network/console/console-wont-power-on' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>Xbox hardware troubleshooting guide</a> covers power and connectivity issues that can sometimes be resolved without physical repair.",
  priceShock: "Many customers are surprised that console repairs can approach a significant portion of the device's value, especially for older Xbox One models. <a href='https://www.ifixit.com/Search?query=xbox+teardown' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>iFixit's Xbox teardowns</a> show how each console generation differs in terms of internal layout and repair accessibility.",
  advisory: "If the repair cost doesn't make financial sense for your console's age and condition, we'll explain alternatives including trade-in options.",
  fallback: "When repair isn't practical, your game saves are typically backed up to Xbox Live, so data loss is rarely a concern.",
};

const COMMON_ISSUES: CommonIssue[] = [
  {
    icon: Plug,
    title: "Broken HDMI Port",
    symptoms: ["No video output", "Loose HDMI connection", "Flickering or static"],
    solution: "Board-level micro-soldering to replace the HDMI port. Often same-day when dropped off early.",
    ctaText: "Get HDMI Repair Quote",
    image: xboxHdmiImage,
    imageAlt: "Xbox Series X with broken HDMI port showing no video signal",
  },
  {
    icon: Power,
    title: "Won't Turn On / Shuts Off Mid-Game",
    symptoms: ["No power at all", "Turns off randomly", "Shuts down during gameplay"],
    solution: "Diagnosis of power supply, thermal system, or board-level fault. We identify the root cause before quoting.",
    ctaText: "Get Power Repair Quote",
  },
];

/* ── Change 2: Dedicated HDMI Section ── */
const HDMI_SYMPTOMS = [
  { icon: MonitorX, label: "No signal on the TV" },
  { icon: Monitor, label: "Flickering display" },
  { icon: Cable, label: "Loose HDMI connection" },
  { icon: Unplug, label: "HDMI cable not seating properly" },
];

const XboxHdmiSection = () => (
  <section id="xbox-hdmi-repair" className="py-16 md:py-20">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-5xl rounded-2xl bg-secondary/40 p-6 shadow-sm md:p-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left — Before/After Slider */}
          <div className="flex flex-col justify-center">
            <BeforeAfterSlider
              image={xboxHdmiBeforeAfter}
              imageAlt="Xbox Series X HDMI port before and after repair — broken vs professionally replaced"
              beforeLabel="Broken HDMI Port"
              afterLabel="Repaired HDMI Port"
              caption="Example of damaged Xbox HDMI port (left) and professionally replaced port (right)"
            />
          </div>

          {/* Right — Content */}
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold md:text-4xl">
              Xbox HDMI Port Repair Winnipeg
            </h2>

            <p className="text-muted-foreground">
              Damaged HDMI ports are one of the most common Xbox repairs we see in
              Winnipeg. This usually happens when the HDMI cable is bumped, forced
              in incorrectly, or the console is moved while still plugged in.
            </p>

            {/* Symptoms Card */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-3 font-semibold">Common Symptoms</h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {HDMI_SYMPTOMS.map((s) => (
                  <li key={s.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <s.icon className="h-4 w-4 shrink-0 text-primary" />
                    {s.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Repair Explanation */}
            <p className="text-muted-foreground">
              HDMI port replacement requires board-level micro-soldering. Our
              technicians carefully remove the damaged port and install a new one
              to restore stable video output.
            </p>

            {/* Speed Callout */}
            <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <Zap className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm font-medium">
                Same-day HDMI repairs are often possible when dropped off early.
                Rush repair service is also available.
              </p>
            </div>

            {/* CTA Row */}
            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <Button size="lg" className="gradient-primary" asChild>
                <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer">
                  Get HDMI Repair Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+12044894140">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Repair Desk
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ── Change 4: Related Console Repairs ── */
const RELATED_CONSOLES = [
  { label: "PlayStation 5 Repair Winnipeg", href: "/repair/ps5" },
  { label: "PlayStation 4 Repair Winnipeg", href: "/repair/ps4" },
  { label: "Nintendo Switch Repair Winnipeg", href: "/repair/nintendo-switch" },
  { label: "Controller Repair Winnipeg", href: "/repair/controller-repair-winnipeg" },
];

const RelatedConsoleRepairs = () => (
  <section id="related-console-repairs" className="py-16 md:py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Other Console Repairs We Offer
        </h2>
        <p className="mb-8 text-muted-foreground">
          Mobile Tech Lab repairs a wide range of gaming consoles and controllers across Winnipeg.
          If you need help with another system, our technicians can help.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {RELATED_CONSOLES.map((item) => (
            <Button key={item.href} variant="outline" size="lg" asChild>
              <Link to={item.href}>
                {item.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ── Change 5: Hub Link ── */
const ConsoleHubLink = () => (
  <div className="container mx-auto px-4 py-8 text-center">
    <p className="text-muted-foreground">
      Looking for help with a different console?{" "}
      <Link to="/consoles" className="font-medium text-primary hover:underline">
        See all of our console repair services →
      </Link>
    </p>
  </div>
);

const XboxRepair = () => {
  return (
    <RepairLandingTemplate
      metaTitle="Xbox Repair Winnipeg | Series X & Controller Fix | Mobile Tech Lab"
      metaDescription="Xbox repair in Winnipeg. Overheating, HDMI port, disc drive, controller repair for Xbox Series X, Series S, One & 360. Console specialists."
      canonicalUrl="https://mobiletechlab.ca/repair/xbox"
      slug="xbox"
      deviceName="Xbox"
      tagline="Xbox Repair Specialists in Winnipeg"
      h1Override={<>Xbox Repair <span className="text-primary">Winnipeg</span></>}
      heroDescription="Xbox not cooperating? We repair a wide range of Xbox issues across all major models, including HDMI port damage, power or no-power problems, overheating, disc drive issues where applicable, software or system issues, and common controller repairs such as stick drift, charging port damage, button issues, or sync problems."
      heroImage={heroImage}
      services={SERVICES}
      models={MODELS}
      modelsDescription="We repair all Xbox consoles including Series X, Series S, One, and 360, plus Elite and standard controllers."
      modelCategories={MODEL_CATEGORIES}
      faqs={FAQS}
      advantagePillars={ADVANTAGE_PILLARS}
      serviceAreaNote="Serving St. Vital, Fort Garry, Garden City, Transcona, and all Winnipeg neighborhoods. Also serving Thompson, MB. Walk-ins welcome or book online."
      pricingMicroCopy={PRICING_MICRO_COPY}
      commonIssuesSection={<CommonIssuesSection issues={COMMON_ISSUES} />}
      afterCommonIssuesSection={<XboxHdmiSection />}
      beforeFaqsSection={<RelatedConsoleRepairs />}
      beforeLocationsSection={<ConsoleHubLink />}
    />
  );
};

export default XboxRepair;
