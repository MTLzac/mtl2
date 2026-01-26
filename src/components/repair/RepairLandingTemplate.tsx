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

interface RepairLandingTemplateProps {
  // SEO
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  slug: string; // URL slug for breadcrumbs (e.g., "iphone", "samsung")
  
  // Hero
  deviceName: string;
  tagline: string;
  heroDescription: string;
  heroImage?: string;
  hideHeroImage?: boolean;
  
  // Content
  services: Service[];
  models: string[];
  modelsDescription?: string;
  modelCategories?: ModelCategory[];
  faqs: FAQ[];
  
  // Optional customizations
  advantagePillars?: AdvantagePillar[];
  serviceAreaNote?: string;
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
  services,
  models,
  modelsDescription,
  modelCategories,
  faqs,
  advantagePillars,
  serviceAreaNote,
}: RepairLandingTemplateProps) => {
  const breadcrumbs = getRepairBreadcrumbs(deviceName, slug);
  
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      
      <div className="flex min-h-screen flex-col">
        <Header />
        
        <main className="flex-1 pb-20 md:pb-0">
          <HeroSection
            deviceName={deviceName}
            tagline={tagline}
            description={heroDescription}
            heroImage={heroImage}
            hideImage={hideHeroImage}
          />
          
          <ServiceGrid services={services} deviceName={deviceName} />
          
          <ModelListGrid 
            deviceName={deviceName} 
            models={models}
            description={modelsDescription}
            categories={modelCategories}
          />
          
          <WhyChooseUs customPillars={advantagePillars} />
          
          <RepairWaysToSave deviceName={deviceName} />
          
          <LocationCards serviceAreaNote={serviceAreaNote} />
          
          <FAQSection deviceName={deviceName} faqs={faqs} />
        </main>
        
        <Footer />
        <StickyQuoteCTA />
      </div>
    </>
  );
};
