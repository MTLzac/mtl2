import { Helmet } from "react-helmet-async";
import { LOCATIONS } from "@/lib/locations";

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mobiletechlab.ca/#organization",
    "name": "Mobile Tech Lab",
    "image": "https://mobiletechlab.ca/favicon.png",
    "logo": "https://mobiletechlab.ca/favicon.png",
    "url": "https://mobiletechlab.ca",
    "telephone": "+1-204-500-9757",
    "priceRange": "$$",
    "description": "Manitoba's trusted device repair specialists. Fast, reliable, and affordable repairs for phones, tablets, consoles, and computers.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "845 Dakota St #25",
      "addressLocality": "Winnipeg",
      "addressRegion": "MB",
      "postalCode": "R2M 5M3",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.8538,
      "longitude": -97.0989
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "12:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [
      "https://www.google.com/maps/place/Mobile+Tech+Lab+St.+Vital/data=!4m2!3m1!1s0x0:0x5aee2e35bcc25930"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Device Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "iPhone Repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Samsung Repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "iPad Repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MacBook Repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Game Console Repair"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
