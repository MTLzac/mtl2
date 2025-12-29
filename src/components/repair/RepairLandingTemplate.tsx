import { Helmet } from "react-helmet-async";
import { HeroSection } from "./HeroSection";
import { ServiceGrid, Service } from "./ServiceGrid";
import { ModelListGrid, ModelCategory } from "./ModelListGrid";
import { WhyChooseUs, AdvantagePillar } from "./WhyChooseUs";
import { TradeInSection } from "./TradeInSection";
import { LocationCards } from "./LocationCards";
import { FAQSection, FAQ } from "./FAQSection";
import { StickyQuoteCTA } from "./StickyQuoteCTA";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { LucideIcon } from "lucide-react";

interface RepairLandingTemplateProps {
  // SEO
  metaTitle: string;
  metaDescription: string;
  
  // Hero
  deviceName: string;
  tagline: string;
  heroDescription: string;
  heroImage?: string;
  
  // Content
  services: Service[];
  models: string[];
  modelsDescription?: string;
  modelCategories?: ModelCategory[];
  faqs: FAQ[];
  
  // Optional customizations
  tradeInUrl?: string;
  preOwnedUrl?: string;
  advantagePillars?: AdvantagePillar[];
  serviceAreaNote?: string;
}

export const RepairLandingTemplate = ({
  metaTitle,
  metaDescription,
  deviceName,
  tagline,
  heroDescription,
  heroImage,
  services,
  models,
  modelsDescription,
  modelCategories,
  faqs,
  tradeInUrl,
  preOwnedUrl,
  advantagePillars,
  serviceAreaNote,
}: RepairLandingTemplateProps) => {
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
          <HeroSection
            deviceName={deviceName}
            tagline={tagline}
            description={heroDescription}
            heroImage={heroImage}
          />
          
          <ServiceGrid services={services} deviceName={deviceName} />
          
          <ModelListGrid 
            deviceName={deviceName} 
            models={models}
            description={modelsDescription}
            categories={modelCategories}
          />
          
          <WhyChooseUs customPillars={advantagePillars} />
          
          <TradeInSection 
            deviceName={deviceName}
            tradeInUrl={tradeInUrl}
            preOwnedUrl={preOwnedUrl}
          />
          
          <LocationCards serviceAreaNote={serviceAreaNote} />
          
          <FAQSection deviceName={deviceName} faqs={faqs} />
        </main>
        
        <Footer />
        <StickyQuoteCTA />
      </div>
    </>
  );
};
