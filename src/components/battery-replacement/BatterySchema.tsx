import { Helmet } from "react-helmet-async";

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  faqs: FAQ[];
}

export const BatterySchema = ({ faqs }: Props) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Phone, Tablet & Laptop Battery Replacement",
    provider: {
      "@type": "LocalBusiness",
      name: "Mobile Tech Lab",
      image: "https://mobiletechlab.ca/logo.png",
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "845 Dakota St #25",
          addressLocality: "Winnipeg",
          addressRegion: "MB",
          postalCode: "R2M 5M3",
          addressCountry: "CA",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "300 Mystery Lake Rd #1530",
          addressLocality: "Thompson",
          addressRegion: "MB",
          postalCode: "R8N 0M2",
          addressCountry: "CA",
        },
      ],
      telephone: ["(204) 500-9757", "(204) 410-0262"],
      url: "https://mobiletechlab.ca",
    },
    areaServed: [
      { "@type": "City", name: "Winnipeg" },
      { "@type": "City", name: "Thompson" },
      { "@type": "City", name: "Brandon" },
      { "@type": "AdministrativeArea", name: "Manitoba" },
    ],
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Apple Independent Repair Provider",
        value:
          "Mobile Tech Lab is an authorized Apple Independent Repair Provider (IRP). We have direct access to Genuine Apple parts including batteries, and pair them to devices using Apple's GSX system.",
      },
      {
        "@type": "PropertyValue",
        name: "iPhone Battery Options",
        value:
          "Two options for iPhone: Genuine Apple battery (same price as Apple Service, no iOS notification) or quality third-party battery ($20-30+ less, with iOS 'Important Battery Message' notification per Apple's detection system).",
      },
      {
        "@type": "PropertyValue",
        name: "Devices Serviced",
        value: "iPhone, iPad, Samsung Galaxy, Android (Pixel, OnePlus, Motorola, Sony), MacBook",
      },
      {
        "@type": "PropertyValue",
        name: "Pricing Range",
        value:
          "iPhone Genuine $129-$199, iPhone Third-Party $89-$179, iPad $129-$229, Samsung $89-$199, Android $89-$179, MacBook $179-$299",
      },
      {
        "@type": "PropertyValue",
        name: "Warranty",
        value:
          "90 days against manufacturing defects on all battery replacements (Genuine and third-party). Batteries naturally degrade — natural capacity loss is not warrantied. No warranty on devices with prior liquid damage.",
      },
      {
        "@type": "PropertyValue",
        name: "Battery Health Check",
        value: "Free battery health diagnostic on the spot. No commitment to repair.",
      },
      {
        "@type": "PropertyValue",
        name: "Turnaround",
        value:
          "iPhone (both Genuine and Third-Party): 30-60 minutes when parts in stock, otherwise within 24-48 hours. iPad: 2-3 hours. MacBook: 2-4 hours.",
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mobile Tech Lab",
    description:
      "Apple Independent Repair Provider in Winnipeg and Thompson, Manitoba. iPhone, iPad, Samsung Galaxy, Android, and MacBook battery replacement. Genuine Apple parts available. Free battery health check. 90-day warranty.",
    image: "https://mobiletechlab.ca/logo.png",
    url: "https://mobiletechlab.ca/repair/battery-replacement",
    telephone: "(204) 500-9757",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "845 Dakota St #25",
      addressLocality: "Winnipeg",
      addressRegion: "MB",
      postalCode: "R2M 5M3",
      addressCountry: "CA",
    },
    geo: { "@type": "GeoCoordinates", latitude: "49.8401", longitude: "-97.0991" },
    openingHours: ["Mo-Sa 09:00-19:00", "Su 12:00-19:00"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
    },
    areaServed: [
      { "@type": "City", name: "Winnipeg" },
      { "@type": "City", name: "Thompson" },
      { "@type": "City", name: "Brandon" },
      { "@type": "AdministrativeArea", name: "Manitoba" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer.replace(/<[^>]+>/g, "") },
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
