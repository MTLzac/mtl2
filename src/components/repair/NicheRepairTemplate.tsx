import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WhyChooseUs, AdvantagePillar } from "./WhyChooseUs";
import { LocationCards } from "./LocationCards";
import { FAQSection, FAQ } from "./FAQSection";
import { StickyQuoteCTA } from "./StickyQuoteCTA";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { Phone, AlertTriangle, CheckCircle2, LucideIcon } from "lucide-react";

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

export interface NicheRepairTemplateProps {
  // SEO
  metaTitle: string;
  metaDescription: string;
  
  // Hero
  headline: string;
  subheadline: string;
  heroDescription: string;
  urgentBadge?: string;
  
  // Proof of Repair
  proofImage: string;
  proofImageAlt: string;
  proofCaption: string;
  
  // Our Approach
  approachSteps: ApproachStep[];
  
  // Why Others Can't Help
  competitorProblems: CompetitorProblem[];
  
  // FAQs
  deviceName: string;
  faqs: FAQ[];
  
  // Optional customizations
  advantagePillars?: AdvantagePillar[];
  serviceAreaNote?: string;
}

export const NicheRepairTemplate = ({
  metaTitle,
  metaDescription,
  headline,
  subheadline,
  heroDescription,
  urgentBadge = "Specialized Repair",
  proofImage,
  proofImageAlt,
  proofCaption,
  approachSteps,
  competitorProblems,
  deviceName,
  faqs,
  advantagePillars,
  serviceAreaNote,
}: NicheRepairTemplateProps) => {
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
                <Badge variant="secondary" className="mb-4 bg-destructive/10 text-destructive border-destructive/20">
                  <AlertTriangle className="mr-1 h-3 w-3" />
                  {urgentBadge}
                </Badge>
                
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
                    <a href="tel:2049001054">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now: (204) 900-1054
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                    <a href="https://mobiletechlab.ca/pages/get-a-quote" target="_blank" rel="noopener noreferrer">
                      Get a Free Quote
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
                      <CheckCircle2 className="mr-1 h-3 w-3" />
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
                    <Button size="lg" className="h-12" asChild>
                      <a href="tel:2049001054">
                        <Phone className="mr-2 h-5 w-5" />
                        Get Your Device Fixed
                      </a>
                    </Button>
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
          
          <WhyChooseUs customPillars={advantagePillars} />
          
          <LocationCards serviceAreaNote={serviceAreaNote} />
          
          <FAQSection deviceName={deviceName} faqs={faqs} />
        </main>
        
        <Footer />
        <StickyQuoteCTA />
      </div>
    </>
  );
};
