import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight } from "lucide-react";
import type { DeviceHubData } from "./types";

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";

const statusVariantClasses: Record<string, string> = {
  supported:
    "border-transparent bg-success/15 text-success hover:bg-success/15",
  aging:
    "border-transparent bg-warning/15 text-warning hover:bg-warning/15",
  deprecated:
    "border-transparent bg-destructive/15 text-destructive hover:bg-destructive/15",
};

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
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
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
              <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-1.5">
                  <li><Link to="/" className="hover:text-primary">Home</Link></li>
                  <li className="before:mx-1.5 before:content-['/']">
                    <span>Devices</span>
                  </li>
                  <li className="before:mx-1.5 before:content-['/']">
                    <span className="text-foreground font-medium">{data.deviceName}</span>
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

                  <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                    {data.deviceName}: Repair, iOS&nbsp;Support &amp; Value in 2026
                  </h1>

                  <p className="text-lg text-muted-foreground">
                    A factual overview of the {data.deviceName} in 2026 — covering
                    real-world performance, software lifespan, repair viability,
                    and upgrade considerations.
                  </p>
                </div>

                {data.heroImages && (
                  <div className="hidden items-center justify-center gap-6 lg:flex">
                    {data.heroImages.front && (
                      <img
                        src={data.heroImages.front}
                        alt={`${data.heroImages.alt} — front view`}
                        className="h-80 w-auto object-contain"
                        loading="eager"
                      />
                    )}
                    {data.heroImages.back && (
                      <img
                        src={data.heroImages.back}
                        alt={`${data.heroImages.alt} — back view`}
                        className="h-80 w-auto object-contain"
                        loading="eager"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* ── At a Glance ── */}
          <section className="py-10 md:py-14">
            <div className="container mx-auto max-w-3xl px-4">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                {data.deviceName} at a Glance
              </h2>
              <Table>
                <TableBody>
                  {data.atAGlance.map((field) => (
                    <TableRow key={field.label}>
                      <TableCell className="font-medium text-muted-foreground w-1/3">
                        {field.label}
                      </TableCell>
                      <TableCell>{field.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>

          {/* ── Everyday Performance ── */}
          <section className="border-t border-border py-10 md:py-14">
            <div className="container mx-auto max-w-3xl px-4">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                Everyday Performance
              </h2>
              {data.everydayPerformance.paragraphs.map((p, i) => (
                <p key={i} className="mb-4 text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
              {data.everydayPerformance.bullets && (
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  {data.everydayPerformance.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          {/* ── Battery Life & Aging ── */}
          <section className="border-t border-border py-10 md:py-14">
            <div className="container mx-auto max-w-3xl px-4">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                Battery Life &amp; Aging Considerations
              </h2>
              {data.batteryAndAging.paragraphs.map((p, i) => (
                <p key={i} className="mb-4 text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
              {data.batteryAndAging.bullets && (
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  {data.batteryAndAging.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          {/* ── Camera Capabilities ── */}
          <section className="border-t border-border py-10 md:py-14">
            <div className="container mx-auto max-w-3xl px-4">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                Camera Capabilities (Practical Use)
              </h2>
              {data.camera.paragraphs.map((p, i) => (
                <p key={i} className="mb-4 text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
              {data.camera.bullets && (
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  {data.camera.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          {/* ── iOS Support & App Compatibility ── */}
          <section className="border-t border-border py-10 md:py-14">
            <div className="container mx-auto max-w-3xl px-4">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                iOS Support &amp; App Compatibility
              </h2>

              <div className="mb-6 rounded-lg border border-border bg-card p-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Current iOS Version</p>
                    <p className="text-lg font-semibold">{data.iosSupport.currentVersion}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Deprecation Status</p>
                    <p className="text-lg font-semibold">{data.iosSupport.deprecationStatus}</p>
                  </div>
                </div>
              </div>

              {data.iosSupport.paragraphs.map((p, i) => (
                <p key={i} className="mb-4 text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}

              {data.iosSupport.affectedApps && data.iosSupport.affectedApps.length > 0 && (
                <div className="mt-4">
                  <h3 className="mb-3 text-lg font-semibold">
                    Apps That May Limit Support
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                    {data.iosSupport.affectedApps.map((app, i) => (
                      <li key={i}>{app}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* ── Repair Viability ── */}
          <section className="border-t border-border py-10 md:py-14">
            <div className="container mx-auto max-w-3xl px-4">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                Repair Viability &amp; Common Issues
              </h2>

              {data.repairViability.paragraphs.map((p, i) => (
                <p key={i} className="mb-4 text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}

              {data.repairViability.commonRepairs.length > 0 && (
                <div className="my-6">
                  <h3 className="mb-4 text-lg font-semibold">Common Repairs</h3>
                  <div className="space-y-3">
                    {data.repairViability.commonRepairs.map((repair, i) => (
                      <div key={i} className="rounded-lg border border-border bg-card p-4">
                        <p className="font-medium">{repair.name}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{repair.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {data.repairViability.images && (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {data.repairViability.images.frontDamage && (
                    <figure className="overflow-hidden rounded-lg border border-border">
                      <img
                        src={data.repairViability.images.frontDamage}
                        alt={data.repairViability.images.frontDamageAlt || "Front glass damage example"}
                        className="w-full object-cover"
                        loading="lazy"
                      />
                      <figcaption className="bg-card p-3 text-center text-sm text-muted-foreground">
                        Front glass damage example
                      </figcaption>
                    </figure>
                  )}
                  {data.repairViability.images.backDamage && (
                    <figure className="overflow-hidden rounded-lg border border-border">
                      <img
                        src={data.repairViability.images.backDamage}
                        alt={data.repairViability.images.backDamageAlt || "Back glass damage example"}
                        className="w-full object-cover"
                        loading="lazy"
                      />
                      <figcaption className="bg-card p-3 text-center text-sm text-muted-foreground">
                        Back glass damage example
                      </figcaption>
                    </figure>
                  )}
                </div>
              )}

              {/* Soft CTA after repair section */}
              <div className="mt-8 rounded-lg border border-border bg-secondary/30 p-5">
                <p className="text-sm text-muted-foreground">
                  Need a repair assessment?{" "}
                  <a
                    href={REPAIR_WIDGET_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline"
                  >
                    Get a free quote
                  </a>{" "}
                  or{" "}
                  <Link
                    to={`/repair/iphone`}
                    className="font-medium text-primary hover:underline"
                  >
                    see our iPhone repair services
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* ── Resale Value & Trade-In Context ── */}
          <section className="border-t border-border py-10 md:py-14">
            <div className="container mx-auto max-w-3xl px-4">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                Resale Value &amp; Trade-In Context
              </h2>
              {data.resaleContext.paragraphs.map((p, i) => (
                <p key={i} className="mb-4 text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
              {data.resaleContext.bullets && (
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  {data.resaleContext.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}

              {/* Soft CTA after resale section */}
              <div className="mt-8 rounded-lg border border-border bg-secondary/30 p-5">
                <p className="text-sm text-muted-foreground">
                  Curious what your device is worth?{" "}
                  <Link
                    to="/trade-in"
                    className="font-medium text-primary hover:underline"
                  >
                    Check trade-in value
                  </Link>{" "}
                  or{" "}
                  <Link
                    to="/devices"
                    className="font-medium text-primary hover:underline"
                  >
                    compare with a newer model
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* ── Decision Framing ── */}
          <section className="border-t border-border py-10 md:py-14">
            <div className="container mx-auto max-w-3xl px-4">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                What Usually Makes Sense for This Device
              </h2>
              <p className="mb-6 text-muted-foreground">
                The best path depends on the device's condition, your budget, and what you
                need it to do. Here's a general framework based on common scenarios we see.
              </p>
              <div className="space-y-4">
                {data.decisionFraming.map((scenario, i) => (
                  <div key={i} className="rounded-lg border border-border bg-card p-5">
                    <p className="font-medium text-foreground">{scenario.condition}</p>
                    <p className="mt-2 text-muted-foreground">{scenario.recommendation}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Comparison Entry Points ── */}
          {data.comparisons.length > 0 && (
            <section className="border-t border-border py-10 md:py-14">
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
          <section className="border-t border-border py-10 md:py-14">
            <div className="container mx-auto max-w-3xl px-4">
              <h2 className="mb-8 text-2xl font-bold md:text-3xl">
                Frequently Asked Questions
              </h2>
              <div className="space-y-8">
                {data.faqs.map((faq, i) => (
                  <article key={i}>
                    <h3 className="mb-2 text-lg font-semibold">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DeviceHubTemplate;
