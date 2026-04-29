import { Helmet } from "react-helmet-async";

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  faqs: FAQ[];
}

export const WaterDamageSchema = ({ faqs }: Props) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Liquid Damage Repair and Data Recovery",
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
          "streetAddress": "300 Mystery Lake Rd #1530",
          "addressLocality": "Thompson",
          "addressRegion": "MB",
          "postalCode": "R8N 0M2",
          "addressCountry": "CA",
        },
      ],
      "telephone": ["(204) 500-9757", "(204) 410-0262"],
      "url": "https://mobiletechlab.ca",
    },
    "areaServed": [
      { "@type": "City", "name": "Winnipeg" },
      { "@type": "City", "name": "Thompson" },
      { "@type": "AdministrativeArea", "name": "Manitoba" },
    ],
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Devices Accepted",
        "value": "Phones (iPhone, Android), tablets (iPad, Android), laptops (Windows, MacBook), game consoles",
      },
      {
        "@type": "PropertyValue",
        "name": "Walk-In Policy",
        "value": "Walk-ins welcome during business hours at both Winnipeg and Thompson locations. No appointment required.",
      },
      {
        "@type": "PropertyValue",
        "name": "Warranty Policy",
        "value": "No warranty applies to liquid-damaged device repairs, on any component, regardless of failure cause.",
      },
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Liquid Damage Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Liquid Damage Diagnostic" },
          "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "CAD", "price": "49" },
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Liquid Damage Cleaning and Repair Attempt" },
          "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "CAD", "minPrice": "149" },
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Data Recovery Attempt (Liquid-Damaged Device)" },
          "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "CAD", "price": "129" },
        },
      ],
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mobile Tech Lab",
    "description": "Liquid damage repair and data recovery in Winnipeg and Thompson, Manitoba. Phones, tablets, laptops, MacBooks, game consoles. Honest assessment, no false guarantees. Walk-ins welcome.",
    "image": "https://mobiletechlab.ca/logo.png",
    "url": "https://mobiletechlab.ca/repair/water-damage",
    "telephone": "(204) 500-9757",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "845 Dakota St #25",
      "addressLocality": "Winnipeg",
      "addressRegion": "MB",
      "postalCode": "R2M 5M3",
      "addressCountry": "CA",
    },
    "geo": { "@type": "GeoCoordinates", "latitude": "49.8401", "longitude": "-97.0991" },
    "openingHours": ["Mo-Sa 09:00-19:00", "Su 12:00-19:00"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
    },
    "areaServed": [
      { "@type": "City", "name": "Winnipeg" },
      { "@type": "City", "name": "Thompson" },
      { "@type": "AdministrativeArea", "name": "Manitoba" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
  );
};
