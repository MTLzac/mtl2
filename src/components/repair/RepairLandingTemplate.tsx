import { Helmet } from "react-helmet-async";
import { HeroSection } from "./HeroSection";
import { ServiceGrid, Service } from "./ServiceGrid";
import { ModelListGrid } from "./ModelListGrid";
import { WhyChooseUs } from "./WhyChooseUs";
import { TradeInSection } from "./TradeInSection";
import { LocationCards } from "./LocationCards";
import { FAQSection, FAQ } from "./FAQSection";
import { StickyQuoteCTA } from "./StickyQuoteCTA";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";

interface RepairLandingTemplateProps {
  // SEO
  metaTitle: string;
  metaDescription: string;
  
  // Hero
  deviceName: string;
  tagline: string;
  heroDescription: string;
  
  // Content
  services: Service[];
  models: string[];
  modelsDescription?: string;
  faqs: FAQ[];
  
  // Optional customizations
  tradeInUrl?: string;
  preOwnedUrl?: string;
}

export const RepairLandingTemplate = ({
  metaTitle,
  metaDescription,
  deviceName,
  tagline,
  heroDescription,
  services,
  models,
  modelsDescription,
  faqs,
  tradeInUrl,
  preOwnedUrl,
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
          />
          
          <ServiceGrid services={services} deviceName={deviceName} />
          
          <ModelListGrid 
            deviceName={deviceName} 
            models={models}
            description={modelsDescription}
          />
          
          <WhyChooseUs />
          
          <TradeInSection 
            deviceName={deviceName}
            tradeInUrl={tradeInUrl}
            preOwnedUrl={preOwnedUrl}
          />
          
          <LocationCards />
          
          <FAQSection deviceName={deviceName} faqs={faqs} />
        </main>
        
        <Footer />
        <StickyQuoteCTA />
      </div>
    </>
  );
};
