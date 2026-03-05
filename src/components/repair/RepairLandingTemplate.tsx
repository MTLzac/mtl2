import React from "react";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "./HeroSection";
import { ServiceGrid, Service } from "./ServiceGrid";
import { ModelListGrid, ModelCategory } from "./ModelListGrid";
import { WhyChooseUs, AdvantagePillar } from "./WhyChooseUs";
import { RepairWaysToSave } from "./RepairWaysToSave";
import { LocationCards } from "./LocationCards";
import { FAQSection, FAQ } from "./FAQSection";
import { StickyQuoteCTA } from "./StickyQuoteCTA";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { BreadcrumbSchema, getRepairBreadcrumbs } from "../seo/BreadcrumbSchema";
import { ServiceSchema } from "../seo/ServiceSchema";
import { VisibleBreadcrumbs } from "./VisibleBreadcrumbs";
import { QuickFacts, QuickFactsData } from "./QuickFacts";
import { TableOfContents } from "./TableOfContents";
import { PricingMicroCopy, PricingMicroCopyData } from "./PricingMicroCopy";

interface RepairLandingTemplateProps {
  // SEO
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  slug: string;
  
  // Hero
  deviceName: string;
  tagline: string;
  heroDescription: React.ReactNode;
  heroImage?: string;
  hideHeroImage?: boolean;
  h1Override?: React.ReactNode;
  
  // Content
  services: Service[];
  models: string[];
  modelsDescription?: string;
  modelCategories?: ModelCategory[];
  faqs: FAQ[];
  
  // Optional customizations
  advantagePillars?: AdvantagePillar[];
  serviceAreaNote?: string;
  quickFacts?: QuickFactsData;
  pricingMicroCopy?: PricingMicroCopyData;
  beforeAfterSection?: React.ReactNode;
  commonIssuesSection?: React.ReactNode;
  afterCommonIssuesSection?: React.ReactNode;
  beforeFaqsSection?: React.ReactNode;
  beforeLocationsSection?: React.ReactNode;
}

export const RepairLandingTemplate = ({
  metaTitle,
  metaDescription,
  canonicalUrl,
  slug,
  deviceName,
  tagline,
  heroDescription,
  heroImage,
  hideHeroImage,
  h1Override,
  services,
  models,
  modelsDescription,
  modelCategories,
  faqs,
  advantagePillars,
  serviceAreaNote,
  quickFacts,
  pricingMicroCopy,
  beforeAfterSection,
  commonIssuesSection,
  afterCommonIssuesSection,
  beforeFaqsSection,
  beforeLocationsSection,
}: RepairLandingTemplateProps) => {
  const breadcrumbs = getRepairBreadcrumbs(deviceName, slug);
  
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema deviceName={deviceName} services={services} canonicalUrl={canonicalUrl} />
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      
      <div className="flex min-h-screen flex-col">
        <Header />
        
        <main className="flex-1 pb-20 md:pb-0">
          <VisibleBreadcrumbs deviceName={deviceName} slug={slug} />
          
          <HeroSection
            deviceName={deviceName}
            tagline={tagline}
            description={heroDescription}
            heroImage={heroImage}
            hideImage={hideHeroImage}
            quickFacts={quickFacts}
            h1Override={h1Override}
          />
          
          {commonIssuesSection}
          
          {afterCommonIssuesSection}
          
          <ServiceGrid services={services} deviceName={deviceName} />
          
          {beforeAfterSection}
          
          <ModelListGrid 
            deviceName={deviceName} 
            models={models}
            description={modelsDescription}
            categories={modelCategories}
          />
          
          <WhyChooseUs customPillars={advantagePillars} />
          
          <RepairWaysToSave deviceName={deviceName} />
          
          {beforeLocationsSection}
          
          <LocationCards serviceAreaNote={serviceAreaNote} />
          
          {pricingMicroCopy && <PricingMicroCopy content={pricingMicroCopy} />}
          
          {beforeFaqsSection}
          
          <FAQSection deviceName={deviceName} faqs={faqs} />
        </main>
        
        <Footer />
        <StickyQuoteCTA />
        <TableOfContents items={[
          ...(commonIssuesSection ? [{ id: "common-issues", label: "Common Issues" }] : []),
          ...(afterCommonIssuesSection ? [{ id: "xbox-hdmi-repair", label: "HDMI Repair" }] : []),
          { id: "services", label: "Services" },
          ...(beforeAfterSection ? [{ id: "results", label: "Results" }] : []),
          { id: "models", label: "Models" },
          { id: "why-choose-us", label: "Why Us" },
          ...(beforeFaqsSection ? [{ id: "related-console-repairs", label: "Related Repairs" }] : []),
          { id: "locations", label: "Locations" },
          { id: "faqs", label: "FAQs" },
        ]} />
      </div>
    </>
  );
};