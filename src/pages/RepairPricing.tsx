import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PricingHero } from "@/components/pricing/PricingHero";
import { QuickAnswersGrid } from "@/components/pricing/QuickAnswersGrid";
import { DevicePricingSummary } from "@/components/pricing/DevicePricingSummary";
import { PricingLogicSection } from "@/components/pricing/PricingLogicSection";
import { ScreenOptionsSection } from "@/components/pricing/ScreenOptionsSection";
import { TurnaroundSection } from "@/components/pricing/TurnaroundSection";
import { RepairVsReplaceSection } from "@/components/pricing/RepairVsReplaceSection";
import { DataOptionsSection } from "@/components/pricing/DataOptionsSection";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { PricingFinalCTA } from "@/components/pricing/PricingFinalCTA";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const BREADCRUMBS = [
  { name: "Home", url: "https://mobiletechlab.ca/" },
  { name: "Repair Pricing Explained", url: "https://mobiletechlab.ca/repair-pricing" },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Mobile Device and Electronics Repair",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Mobile Tech Lab",
    "image": "https://mobiletechlab.ca/logo.png",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "845 Dakota St #25",
        "addressLocality": "Winnipeg",
        "addressRegion": "MB",
        "postalCode": "R2M 5M3",
        "addressCountry": "CA",
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "300 Mystery Lake Rd #535",
        "addressLocality": "Thompson",
        "addressRegion": "MB",
        "postalCode": "R8N 5M2",
        "addressCountry": "CA",
      },
    ],
    "telephone": ["(204) 500-9757", "(204) 410-0262"],
    "url": "https://mobiletechlab.ca",
  },
  "areaServed": [
    { "@type": "City", "name": "Winnipeg" },
    { "@type": "City", "name": "Thompson" },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Device Repair Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "iPhone Repair",
          "url": "https://mobiletechlab.ca/repair/iphone",
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "CAD",
          "minPrice": "89",
          "maxPrice": "349",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "iPad Repair",
          "url": "https://mobiletechlab.ca/repair/ipad",
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "CAD",
          "minPrice": "129",
          "maxPrice": "399",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Samsung Galaxy Repair",
          "url": "https://mobiletechlab.ca/repair/samsung",
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "CAD",
          "minPrice": "129",
          "maxPrice": "499",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "MacBook Repair",
          "url": "https://mobiletechlab.ca/repair/macbook",
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "CAD",
          "minPrice": "149",
          "maxPrice": "499",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "PS5 and Console Repair",
          "url": "https://mobiletechlab.ca/repair/ps5",
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "CAD",
          "minPrice": "59",
          "maxPrice": "199",
        },
      },
    ],
  },
};

const RepairPricing = () => {
  return (
    <>
      <Helmet>
        <title>Repair Cost Winnipeg: iPhone, iPad, Samsung, Console | MTL</title>
        <meta
          name="description"
          content="Repair pricing in Winnipeg — iPhone screens from $99, iPad from $129, Samsung from $129, PS5 from $99, MacBook, and more. Price match, Value to Genuine tiers."
        />
        <link rel="canonical" href="https://mobiletechlab.ca/repair-pricing" />
        <meta property="og:title" content="Repair Cost Winnipeg: iPhone, iPad, Samsung, Console | MTL" />
        <meta
          property="og:description"
          content="Repair pricing in Winnipeg — iPhone screens from $99, iPad from $129, Samsung from $129, PS5 from $99, MacBook, and more. Price match, Value to Genuine tiers."
        />
        <meta property="og:url" content="https://mobiletechlab.ca/repair-pricing" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(SERVICE_SCHEMA)}
        </script>
      </Helmet>
      <BreadcrumbSchema items={BREADCRUMBS} />
      
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          <PricingHero />
          <QuickAnswersGrid />
          <DevicePricingSummary />
          <PricingLogicSection />
          <ScreenOptionsSection />
          <TurnaroundSection />
          <RepairVsReplaceSection />
          <DataOptionsSection />
          <ComparisonTable />
          <PricingFAQ />
          <PricingFinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RepairPricing;
