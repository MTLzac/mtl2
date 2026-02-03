import { Helmet } from "react-helmet-async";

const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_DATE = new Date().toISOString().split('T')[0];

export const InfographicSchemas = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Repair or Replace Your Device? Canadian Repair, Cost & E-Waste Statistics (${CURRENT_YEAR})`,
    "description": "Comprehensive data on device repair costs, replacement frequency, and e-waste statistics in Canada. Neutral, fact-based guidance for consumers.",
    "author": {
      "@type": "Organization",
      "name": "Mobile Tech Lab",
      "url": "https://mobiletechlab.ca"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mobile Tech Lab",
      "url": "https://mobiletechlab.ca",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mobiletechlab.ca/logo.png"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": CURRENT_DATE,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://mobiletechlab.ca/repair-or-replace-device-canada"
    },
    "about": {
      "@type": "Thing",
      "name": "Device Repair and Replacement in Canada"
    },
    "spatialCoverage": {
      "@type": "Country",
      "name": "Canada"
    },
    "temporalCoverage": `${CURRENT_YEAR}`,
    "isAccessibleForFree": true
  };

  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Canadian Device Repair & Replacement Statistics",
    "description": "Aggregated data on smartphone repair costs, device replacement frequency, consumer repair preferences, and e-waste generation in Canada. Updated quarterly.",
    "url": "https://mobiletechlab.ca/repair-or-replace-device-canada",
    "creator": {
      "@type": "Organization",
      "name": "Mobile Tech Lab",
      "url": "https://mobiletechlab.ca"
    },
    "dateModified": CURRENT_DATE,
    "temporalCoverage": `${CURRENT_YEAR}`,
    "spatialCoverage": {
      "@type": "Country",
      "name": "Canada"
    },
    "keywords": [
      "device repair",
      "smartphone repair cost",
      "e-waste Canada",
      "phone replacement",
      "right to repair"
    ],
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "isAccessibleForFree": true
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it worth fixing my phone in Canada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on device age, repair cost, and damage type. For devices under 2 years old with common issues like cracked screens or battery degradation, repair often makes financial sense. Industry data shows 45% of consumers prefer repair over replacement. For older devices or severe damage, data recovery and trade-in may be more practical."
        }
      },
      {
        "@type": "Question",
        "name": "How long does phone repair usually take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Based on Canadian repair shop data, most common repairs (screen replacement, battery replacement, back glass repair) are completed same-day to within 3 business days. Complex repairs involving motherboard work or water damage may take longer depending on parts availability."
        }
      },
      {
        "@type": "Question",
        "name": "When is a phone not worth repairing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Repair may not make sense when the device is over 4 years old, the repair cost exceeds 50% of replacement value, the device doesn't power on due to logic board failure, or multiple components need replacement simultaneously. In these cases, data recovery and trade-in are often better options."
        }
      },
      {
        "@type": "Question",
        "name": "Is trading in a damaged phone better than repairing it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sometimes. If repair costs exceed the device's post-repair value, or if you were planning to upgrade anyway, trade-in may be smarter. Many trade-in programs accept damaged devices at reduced values. Consider data recovery first if you have important files, photos, or contacts that haven't been backed up."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(datasetSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};
