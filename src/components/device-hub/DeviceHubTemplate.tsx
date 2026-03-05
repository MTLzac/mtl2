import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Smartphone, Sparkles, ShieldCheck, AlertTriangle, XCircle, Banknote, Bus, Building, LockKeyhole } from "lucide-react";
import { AtAGlanceGrid } from "./AtAGlanceGrid";
import { DecisionGuideCards } from "./DecisionGuideCards";
import { DeviceHubTOC } from "./DeviceHubTOC";
import { ViabilityScoreCards } from "./ViabilityScoreCards";
import type { DeviceHubData } from "./types";

const statusVariantClasses: Record<string, string> = {
  supported:
    "border-transparent bg-success/15 text-success hover:bg-success/15",
  aging:
    "border-transparent bg-warning/15 text-warning hover:bg-warning/15",
  deprecated:
    "border-transparent bg-destructive/15 text-destructive hover:bg-destructive/15",
};

/** Renders an HTML content block with dangerouslySetInnerHTML */
const HtmlBlock = ({ html, className }: { html: string; className?: string }) => (
  <div
    className={className ?? "prose-device text-muted-foreground leading-relaxed [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary/80 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ul]:mt-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1 [&_ol]:mt-3 [&_p]:mb-4 [&_p:last-child]:mb-0"}
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

const DeviceHubTemplate = ({ data }: { data: DeviceHubData }) => {
  const breadcrumbs = [
    { name: "Home", url: "https://mobiletechlab.ca/" },
    { name: "Devices", url: "https://mobiletechlab.ca/devices" },
    {
      name: data.deviceName,
      url: `https://mobiletechlab.ca/devices/${data.slug}`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: (faq.answerHtml || "").replace(/<[^>]*>/g, ""),
      },
    })),
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={data.canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          {/* ── Hero ── */}
          <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-secondary/40 via-background to-secondary/20 py-14 md:py-20">
            <div className="container mx-auto px-4">
              {/* Breadcrumb */}
              <nav
                className="mb-8 text-sm text-muted-foreground"
                aria-label="Breadcrumb"
              >
                <ol className="flex flex-wrap items-center gap-1.5">
                  <li>
                    <Link to="/" className="hover:text-primary">
                      Home
                    </Link>
                  </li>
                  <li className="before:mx-1.5 before:content-['/']">
                    <span>Devices</span>
                  </li>
                  <li className="before:mx-1.5 before:content-['/']">
                    <span className="font-medium text-foreground">
                      {data.deviceName}
                    </span>
                  </li>
                </ol>
              </nav>

              {/* Two-column hero grid */}
              <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Left Column — Content */}
                <div className="space-y-6">
                  {/* Status Badge */}
                  <div>
                    <Badge
                      className={`${statusVariantClasses[data.statusBadge.variant]} px-4 py-1.5 text-sm`}
                    >
                      {data.statusBadge.label}
                    </Badge>
                  </div>

                  {/* H1 */}
                  <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                    {data.h1}
                  </h1>

                  {/* Featured Snippet */}
                  <HtmlBlock
                    html={data.featuredSnippetHtml}
                    className="text-lg leading-relaxed text-muted-foreground [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary/80 [&_p]:mb-4 [&_p:last-child]:mb-0"
                  />

                  {/* TL;DR */}
                  {data.tldrHtml && (
                    <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                      <HtmlBlock
                        html={data.tldrHtml}
                        className="text-sm leading-relaxed text-foreground [&_strong]:font-semibold"
                      />
                    </div>
                  )}

                  {/* CTA Block */}
                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4">
                    <a
                      href="https://shop.mobiletechlab.ca/pages/repair2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground shadow-md transition-all hover:shadow-xl hover:brightness-110"
                    >
                      Get Repair Quote
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link
                      to="/trade-in"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3 font-bold text-foreground transition-colors hover:bg-secondary"
                    >
                      Shop Upgrades
                    </Link>
                  </div>
                </div>

                {/* Right Column — Product Showcase Card */}
                <div className="hidden lg:block">
                  <div className="sticky top-24 rounded-2xl border border-border/50 bg-gradient-to-br from-secondary/60 via-background to-secondary/40 p-8 shadow-lg">
                    {data.heroImage ? (
                      <img
                        src={data.heroImage}
                        alt={data.heroImageAlt || `${data.deviceName}`}
                        className="mx-auto h-72 w-auto object-contain"
                        loading="eager"
                      />
                    ) : (
                      <div className="flex h-72 items-center justify-center">
                        <div className="text-center">
                          <Smartphone className="mx-auto mb-4 h-20 w-20 text-muted-foreground/30" />
                          <p className="text-sm font-medium text-muted-foreground/50">{data.deviceName}</p>
                        </div>
                      </div>
                    )}
                    {/* Quick specs under image */}
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {data.atAGlance.slice(0, 4).map((field) => (
                        <div key={field.label} className="rounded-lg bg-background/60 p-3 text-center">
                          <p className="text-xs font-medium text-muted-foreground">{field.label}</p>
                          <p className="mt-0.5 text-sm font-semibold text-foreground">{field.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative blurs */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 left-1/3 h-64 w-64 rounded-full bg-primary/3 blur-3xl" />
          </section>

          {/* ── At a Glance ── */}
          <section id="at-a-glance" className="py-10 md:py-14">
            <div className="container mx-auto max-w-3xl px-4">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                {data.deviceName} at a Glance
              </h2>
              <AtAGlanceGrid fields={data.atAGlance} />
            </div>
          </section>

          {/* ── Viability Scoring ── */}
          {data.viabilityScores && data.viabilityScores.length > 0 && (
            <section id="viability-score" className="border-t border-border py-10 md:py-14">
              <div className="container mx-auto max-w-3xl px-4">
                <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                  {data.deviceName} Repair Viability Score
                </h2>
                <ViabilityScoreCards scores={data.viabilityScores} />

                {data.quickTakeawayHtml && (
                  <div className="mt-8 rounded-2xl bg-secondary/60 p-6">
                    <HtmlBlock
                      html={data.quickTakeawayHtml}
                      className="text-sm leading-relaxed text-muted-foreground [&_strong]:text-foreground"
                    />
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ── iOS Support Status ── */}
          <section id="ios-support" className="border-t border-border py-10 md:py-14">
            <div className="container mx-auto max-w-3xl px-4">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                {data.iosSupportStatus.heading}
              </h2>
              <HtmlBlock html={data.iosSupportStatus.contentHtml} />

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-semibold">
                  {data.iosSupportStatus.whatVersion.heading}
                </h3>
                {/* Render intro text only (before the list) */}
                <HtmlBlock
                  html={data.iosSupportStatus.whatVersion.contentHtml.split('<ul>')[0]}
                />

                {/* Feature vs Security Comparison Cards */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-6 dark:border-blue-900/40 dark:bg-blue-950/20">
                    <div className="mb-3 flex items-center gap-2.5">
                      <span className="inline-flex items-center justify-center rounded-lg bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
                        <Sparkles className="h-5 w-5" />
                      </span>
                      <h4 className="text-base font-bold text-foreground">Feature Updates</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Major iOS releases (e.g., iOS 18 → iOS 19) bring new capabilities, app frameworks, and UI changes. The {data.deviceName} no longer receives these.
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-6 dark:border-emerald-900/40 dark:bg-emerald-950/20">
                    <div className="mb-3 flex items-center gap-2.5">
                      <span className="inline-flex items-center justify-center rounded-lg bg-emerald-100 p-2 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400">
                        <ShieldCheck className="h-5 w-5" />
                      </span>
                      <h4 className="text-base font-bold text-foreground">Security Updates</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Smaller patches that fix vulnerabilities. Apple may still issue these for iOS 18, but on a limited and unpredictable schedule.
                    </p>
                  </div>
                </div>

                {/* Source link */}
                <HtmlBlock
                  html={data.iosSupportStatus.whatVersion.contentHtml.split('</ul>').slice(-1)[0] || ''}
                  className="mt-4"
                />
              </div>
            </div>
          </section>

          {/* ── What Happens When Updates Stop ── */}
          <section id="update-deprecation" className="border-t border-border py-10 md:py-14">
            <div className="container mx-auto max-w-3xl px-4">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                {data.updateDeprecation.heading}
              </h2>
              <HtmlBlock html={data.updateDeprecation.contentHtml} />

              {/* Step-Down Timeline */}
              <div className="mt-8 space-y-0">
                <h3 className="mb-6 text-xl font-semibold">
                  How Support Gradually Declines
                </h3>
                <div className="relative border-l-2 border-border pl-8 space-y-8">
                  {[
                    {
                      icon: <XCircle className="h-5 w-5" />,
                      title: "Major iOS Updates Stop",
                      desc: "The device stops receiving new iOS versions. Existing apps and features continue to work normally.",
                      accent: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
                    },
                    {
                      icon: <AlertTriangle className="h-5 w-5" />,
                      title: "Developer SDKs Move Forward",
                      desc: "App developers build against newer iOS SDKs. Updates for older OS versions become less frequent, then stop.",
                      accent: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
                    },
                    {
                      icon: <ShieldCheck className="h-5 w-5" />,
                      title: "Security Patches Become Rare",
                      desc: "Apple may issue limited security patches, but on an unpredictable schedule. Known vulnerabilities remain unaddressed longer.",
                      accent: "bg-red-100 text-destructive dark:bg-red-900/30",
                    },
                  ].map((step, i) => (
                    <div key={i} className="relative">
                      <div className={`absolute -left-[2.55rem] top-0.5 inline-flex items-center justify-center rounded-full p-1.5 ${step.accent}`}>
                        {step.icon}
                      </div>
                      <h4 className="text-base font-bold text-foreground">{step.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* App Compatibility — Icon Cards */}
              <div className="mt-10">
                <h3 className="mb-2 text-xl font-semibold">
                  {data.updateDeprecation.appCompatibility.heading}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  From our experience, these are the categories of apps where Canadian users on the {data.deviceName} tend to notice compatibility issues first:
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      icon: <Banknote className="h-5 w-5" />,
                      title: "Banking Apps",
                      desc: "TD, RBC, Scotiabank, and BMO typically require iOS versions within two major releases of the current version.",
                      accent: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
                    },
                    {
                      icon: <Bus className="h-5 w-5" />,
                      title: "Transit & Payment",
                      desc: "Presto, city transit apps, and mobile payment platforms often follow similar requirements.",
                      accent: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
                    },
                    {
                      icon: <Building className="h-5 w-5" />,
                      title: "Government Services",
                      desc: "CRA My Account, provincial health apps, and digital ID services may require newer iOS versions for security compliance.",
                      accent: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
                    },
                    {
                      icon: <LockKeyhole className="h-5 w-5" />,
                      title: "Two-Factor Auth",
                      desc: "Microsoft Authenticator and Google Authenticator will eventually require newer OS versions.",
                      accent: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
                    },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
                    >
                      <div className="mb-3 flex items-center gap-2.5">
                        <span className={`inline-flex items-center justify-center rounded-lg p-2 ${card.accent}`}>
                          {card.icon}
                        </span>
                        <h4 className="text-sm font-bold text-foreground">{card.title}</h4>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  This doesn't mean these apps stop working overnight. The transition is gradual, and many apps continue to function on older iOS versions even after they stop receiving updates for them.
                </p>
              </div>
            </div>
          </section>

          {/* ── Is It Worth Fixing? ── */}
          <section id="worth-fixing" className="border-t border-border py-10 md:py-14">
            <div className="container mx-auto max-w-3xl px-4">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                {data.worthFixing.heading}
              </h2>
              <HtmlBlock html={data.worthFixing.contentHtml} />

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-semibold">
                  {data.worthFixing.whenRepairMakesSense.heading}
                </h3>
                <HtmlBlock
                  html={data.worthFixing.whenRepairMakesSense.contentHtml}
                />
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-semibold">
                  {data.worthFixing.whenUpgradeIsBetter.heading}
                </h3>
                <HtmlBlock
                  html={data.worthFixing.whenUpgradeIsBetter.contentHtml}
                />
              </div>
            </div>
          </section>

          {/* ── Common Damage ── */}
          <section id="common-damage" className="border-t border-border py-10 md:py-14">
            <div className="container mx-auto max-w-3xl px-4">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                {data.commonDamage.heading}
              </h2>

              {/* Front Glass */}
              <div className="mb-10">
                <h3 className="mb-4 text-xl font-semibold">
                  {data.commonDamage.frontGlass.heading}
                </h3>
                {data.commonDamage.frontGlass.image && (
                  <div className="mb-4">
                    <img
                      src={data.commonDamage.frontGlass.image}
                      alt={
                        data.commonDamage.frontGlass.imageAlt ||
                        "Front glass damage"
                      }
                      className="w-full max-w-md rounded-lg"
                      loading="lazy"
                    />
                  </div>
                )}
                <HtmlBlock html={data.commonDamage.frontGlass.contentHtml} />
              </div>

              {/* Back Glass */}
              <div>
                <h3 className="mb-4 text-xl font-semibold">
                  {data.commonDamage.backGlass.heading}
                </h3>
                {data.commonDamage.backGlass.image && (
                  <div className="mb-4">
                    <img
                      src={data.commonDamage.backGlass.image}
                      alt={
                        data.commonDamage.backGlass.imageAlt ||
                        "Back glass damage"
                      }
                      className="w-full max-w-md rounded-lg"
                      loading="lazy"
                    />
                  </div>
                )}
                <HtmlBlock html={data.commonDamage.backGlass.contentHtml} />
              </div>
            </div>
          </section>

          {/* ── Trading In or Upgrading ── */}
          <section id="trade-in-upgrade" className="border-t border-border py-10 md:py-14">
            <div className="container mx-auto max-w-3xl px-4">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                {data.tradeInUpgrade.heading}
              </h2>
              <HtmlBlock html={data.tradeInUpgrade.contentHtml} />
            </div>
          </section>

          {/* ── Decision Guide ── */}
          <section id="decision-guide" className="border-t border-border bg-secondary/20 py-14 md:py-20">
            <div className="container mx-auto max-w-5xl px-4">
              <div className="mb-10 max-w-2xl">
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                  {data.decisionGuide.heading}
                </h2>
                <HtmlBlock html={data.decisionGuide.contentHtml} />
              </div>

              <DecisionGuideCards scenarios={data.decisionGuide.scenarios} />

              <p className="mt-8 text-sm italic text-muted-foreground">
                {data.decisionGuide.disclaimer}
              </p>
            </div>
          </section>

          {/* ── Comparison Entry Points ── */}
          {data.comparisons.length > 0 && (
            <section id="comparisons" className="border-t border-border py-10 md:py-14">
              <div className="container mx-auto max-w-3xl px-4">
                <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                  Compare {data.deviceName} to Other Models
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Side-by-side comparisons to help you decide whether to repair,
                  keep, or upgrade. These guides are being published progressively as part of our ongoing device reference series.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {data.comparisons.map((comp) => (
                    <div
                      key={comp.slug}
                      className="flex items-center rounded-lg border border-border bg-card p-4 text-muted-foreground"
                    >
                      <span className="font-medium">{comp.label}</span>
                      <span className="ml-auto text-xs italic">Coming soon</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── FAQs (visible, not accordions) ── */}
          <section id="faqs" className="border-t border-border py-10 md:py-14">
            <div className="container mx-auto max-w-3xl px-4">
              <h2 className="mb-8 text-2xl font-bold md:text-3xl">
                {data.faqHeading}
              </h2>
              <div className="space-y-8">
                {data.faqs.map((faq, i) => (
                  <article key={i}>
                    <h3 className="mb-2 text-lg font-semibold">
                      {faq.question}
                    </h3>
                    <HtmlBlock html={faq.answerHtml} />
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <DeviceHubTOC data={data} />
    </>
  );
};

export default DeviceHubTemplate;
