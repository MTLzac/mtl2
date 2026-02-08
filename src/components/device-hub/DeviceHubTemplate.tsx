import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { AtAGlanceGrid } from "./AtAGlanceGrid";
import { DecisionGuideCards } from "./DecisionGuideCards";
import { DeviceHubTOC } from "./DeviceHubTOC";
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
          <section className="border-b border-border bg-secondary/30 py-12 md:py-16">
            <div className="container mx-auto px-4">
              <nav
                className="mb-6 text-sm text-muted-foreground"
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

              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <Badge
                      className={statusVariantClasses[data.statusBadge.variant]}
                    >
                      {data.statusBadge.label}
                    </Badge>
                  </div>

                  <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                    {data.h1}
                  </h1>

                  <HtmlBlock
                    html={data.featuredSnippetHtml}
                    className="text-lg text-muted-foreground leading-relaxed [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary/80 [&_p]:mb-4 [&_p:last-child]:mb-0"
                  />
                </div>

                {data.heroImage && (
                  <div className="hidden items-center justify-center lg:flex">
                    <img
                      src={data.heroImage}
                      alt={data.heroImageAlt || `${data.deviceName}`}
                      className="h-80 w-auto object-contain mix-blend-multiply dark:mix-blend-screen dark:invert"
                      loading="eager"
                    />
                  </div>
                )}
              </div>
            </div>
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
                <HtmlBlock html={data.iosSupportStatus.whatVersion.contentHtml} />
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

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-semibold">
                  {data.updateDeprecation.appCompatibility.heading}
                </h3>
                <HtmlBlock
                  html={data.updateDeprecation.appCompatibility.contentHtml}
                />
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
          <section id="decision-guide" className="border-t border-border py-10 md:py-14">
            <div className="container mx-auto max-w-3xl px-4">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                {data.decisionGuide.heading}
              </h2>
              <HtmlBlock html={data.decisionGuide.contentHtml} />

              <div className="mt-6">
                <DecisionGuideCards scenarios={data.decisionGuide.scenarios} />
              </div>

              <p className="mt-6 text-sm italic text-muted-foreground">
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
                  keep, or upgrade.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {data.comparisons.map((comp) => (
                    <Link
                      key={comp.slug}
                      to={`/devices/compare/${comp.slug}`}
                      className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
                    >
                      <span className="font-medium">{comp.label}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
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
