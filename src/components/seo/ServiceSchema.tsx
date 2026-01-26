import { Helmet } from "react-helmet-async";
import { Service } from "../repair/ServiceGrid";

interface ServiceSchemaProps {
  deviceName: string;
  services: Service[];
  canonicalUrl: string;
}

export const ServiceSchema = ({ deviceName, services, canonicalUrl }: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${deviceName} Repair Services`,
    "description": `Professional ${deviceName} repair services in Winnipeg, Manitoba. Screen replacement, battery replacement, charging port repair, and more.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Mobile Tech Lab",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "101-604 St Anne's Road",
          "addressLocality": "Winnipeg",
          "addressRegion": "MB",
          "postalCode": "R2M 3C5",
          "addressCountry": "CA"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "100-1605 McPhillips St",
          "addressLocality": "Winnipeg",
          "addressRegion": "MB",
          "postalCode": "R2V 0L3",
          "addressCountry": "CA"
        }
      ],
      "telephone": "+1-204-615-6555",
      "url": "https://mobiletechlab.ca"
    },
    "areaServed": {
      "@type": "City",
      "name": "Winnipeg",
      "addressRegion": "MB",
      "addressCountry": "CA"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${deviceName} Repair Services`,
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        }
      }))
    },
    "url": canonicalUrl
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
