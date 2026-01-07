import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WhyChooseUs, AdvantagePillar } from "./WhyChooseUs";
import { LocationCards } from "./LocationCards";
import { FAQSection, FAQ } from "./FAQSection";
import { StickyQuoteCTA } from "./StickyQuoteCTA";
import { CheckCircle, LucideIcon, Package, Phone, MessageSquare, AlertTriangle, Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface ApproachStep {
  step: number;
  title: string;
  description: string;
}

export interface CompetitorProblem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface NicheRepairTemplateProps {
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  heroDescription: string;
  urgentBadge?: string;
  proofImage: string;
  proofImageAlt: string;
  proofCaption: string;
  approachSteps: ApproachStep[];
  competitorProblems: CompetitorProblem[];
  deviceName: string;
  faqs: FAQ[];
  advantagePillars?: AdvantagePillar[];
  serviceAreaNote?: string;
  mailInAvailable?: boolean;
  mailInDescription?: string;
  smsNumber?: string;
  youtubeVideoId?: string;
  youtubeVideoTitle?: string;
  relatedRepairs?: { label: string; href: string }[];
}

export const NicheRepairTemplate = ({
  metaTitle,
  metaDescription,
  headline,
  subheadline,
  heroDescription,
  urgentBadge,
  proofImage,
  proofImageAlt,
  proofCaption,
  approachSteps,
  competitorProblems,
  deviceName,
  faqs,
  advantagePillars,
  serviceAreaNote,
  mailInAvailable = false,
  mailInDescription = "Can't visit in person? We accept mail-in repairs from across Canada and internationally. Ship your device to us, and we'll have it repaired and back to you quickly.",
  smsNumber = "2045009757",
  youtubeVideoId,
  youtubeVideoTitle = "Watch the Repair Process",
  relatedRepairs,
}: NicheRepairTemplateProps) => {
  const smsMessage = encodeURIComponent(`Hi, I found your site searching for ${deviceName} repair. Can you help?`);
  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      
      <div className="flex min-h-screen flex-col">
        <Header />
        
        <main className="flex-1 pb-20 md:pb-0">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
                  {urgentBadge && (
                    <Badge variant="secondary" className="bg-destructive/10 text-destructive border-destructive/20">
                      <AlertTriangle className="mr-1 h-3 w-3" />
                      {urgentBadge}
                    </Badge>
                  )}
                  {mailInAvailable && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      <Package className="mr-1 h-3 w-3" />
                      Mail-In Service Available
                    </Badge>
                  )}
                </div>
                
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                  {headline}
                </h1>
                
                <p className="mb-2 text-xl font-medium text-primary md:text-2xl">
                  {subheadline}
                </p>
                
                <p className="mb-8 text-lg text-muted-foreground">
                  {heroDescription}
                </p>
                
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button size="lg" className="h-12 px-8 text-base" asChild>
                    <a href="tel:2045009757">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now: (204) 500-9757
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                    <a href={`sms:+1${smsNumber}?body=${smsMessage}`}>
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Text Us: (204) 500-9757
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          </section>

          {/* Proof of Repair Section */}
          <section className="border-y border-border bg-muted/30 py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-5xl">
                <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                  <div className="relative">
                    <div className="overflow-hidden rounded-xl border border-border bg-background shadow-lg">
                      <img 
                        src={proofImage} 
                        alt={proofImageAlt}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                    <Badge className="absolute -bottom-3 left-4 bg-green-600 text-white hover:bg-green-600">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      Repair Complete
                    </Badge>
                  </div>
                  
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                      We Fixed This Exact Device
                    </h2>
                    <p className="mb-6 text-muted-foreground leading-relaxed">
                      {proofCaption}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button size="lg" className="h-12" asChild>
                        <a href="tel:2045009757">
                          <Phone className="mr-2 h-5 w-5" />
                          Call to Get Started
                        </a>
                      </Button>
                      <Button size="lg" variant="outline" className="h-12" asChild>
                        <a href={`sms:+1${smsNumber}?body=${smsMessage}`}>
                          <MessageSquare className="mr-2 h-5 w-5" />
                          Text Us
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Approach Section */}
          <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl text-center mb-12">
                <h2 className="mb-4 text-3xl font-bold text-foreground">
                  Our Repair Process
                </h2>
                <p className="text-muted-foreground">
                  How we tackle repairs that others won't even attempt
                </p>
              </div>
              
              <div className="mx-auto max-w-4xl">
                <div className="grid gap-6 md:grid-cols-2">
                  {approachSteps.map((step) => (
                    <div 
                      key={step.step}
                      className="relative rounded-xl border border-border bg-card p-6 shadow-sm"
                    >
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                        {step.step}
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why Others Can't Help Section */}
          <section className="border-y border-border bg-muted/30 py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl text-center mb-12">
                <h2 className="mb-4 text-3xl font-bold text-foreground">
                  Why Others Can't Help
                </h2>
                <p className="text-muted-foreground">
                  Most repair shops turn away these devices — here's why we don't
                </p>
              </div>
              
              <div className="mx-auto max-w-4xl">
                <div className="grid gap-6 md:grid-cols-3">
                  {competitorProblems.map((problem, index) => (
                    <div 
                      key={index}
                      className="rounded-xl border border-destructive/20 bg-destructive/5 p-6"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                        <problem.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-foreground">
                        {problem.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {problem.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Video Section */}
          {youtubeVideoId && (
            <section className="py-16 md:py-20">
              <div className="container mx-auto px-4">
                <div className="mx-auto max-w-3xl text-center mb-10">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                    <Play className="h-5 w-5 text-primary" />
                    <span className="font-medium text-primary">Video Walkthrough</span>
                  </div>
                  <h2 className="mb-4 text-3xl font-bold text-foreground">
                    {youtubeVideoTitle}
                  </h2>
                  <p className="text-muted-foreground">
                    See exactly how we diagnose and repair this device
                  </p>
                </div>
                
                <div className="mx-auto max-w-4xl">
                  <div className="relative overflow-hidden rounded-xl border border-border bg-background shadow-lg aspect-video">
                    <iframe 
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                      title={youtubeVideoTitle}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Related Repairs */}
          {relatedRepairs && relatedRepairs.length > 0 && (
            <section className="border-t border-border py-12 md:py-16">
              <div className="container mx-auto px-4">
                <div className="mx-auto max-w-3xl text-center mb-8">
                  <h2 className="mb-2 text-2xl font-bold text-foreground">
                    Related HDMI Repairs
                  </h2>
                  <p className="text-muted-foreground">
                    We fix HDMI ports on other devices too
                  </p>
                </div>
                
                <div className="mx-auto max-w-2xl">
                  <div className="flex flex-wrap justify-center gap-3">
                    {relatedRepairs.map((repair) => (
                      <Link
                        key={repair.href}
                        to={repair.href}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      >
                        {repair.label}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}
          
          {/* Why Choose Us */}
          <WhyChooseUs customPillars={advantagePillars} />

          {/* Mail-In Callout */}
          {mailInAvailable && (
            <section className="bg-primary/5 py-12 md:py-16">
              <div className="container mx-auto px-4">
                <div className="mx-auto max-w-3xl text-center">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                    <Package className="h-5 w-5 text-primary" />
                    <span className="font-medium text-primary">Mail-In Repairs</span>
                  </div>
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                    Can't Find Anyone Local?
                  </h2>
                  <p className="mb-6 text-muted-foreground">
                    {mailInDescription}
                  </p>
                  <Button size="lg" asChild>
                    <a href="/contact">Get Mail-In Quote</a>
                  </Button>
                </div>
              </div>
            </section>
          )}

          {/* Locations */}
          <LocationCards 
            serviceAreaNote={serviceAreaNote} 
            showMailIn={mailInAvailable}
            heading={mailInAvailable ? "Visit Us or Mail It In" : undefined}
          />
          
          {/* FAQ */}
          <FAQSection deviceName={deviceName} faqs={faqs} />
        </main>
        
        <Footer />
        <StickyQuoteCTA />
      </div>
    </>
  );
};
