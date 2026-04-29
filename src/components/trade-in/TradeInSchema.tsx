import { Helmet } from "react-helmet-async";

interface FAQ { question: string; answer: string }

interface Props { faqs: FAQ[] }

const stripHtml = (s: string) => s.replace(/<[^>]+>/g, "");

export const TradeInSchema = ({ faqs }: Props) => {
  const areaServed = [
    { "@type": "City", name: "Winnipeg" },
    { "@type": "City", name: "Thompson" },
    { "@type": "City", name: "Brandon" },
    { "@type": "City", name: "Portage la Prairie" },
    { "@type": "City", name: "Steinbach" },
    { "@type": "City", name: "Selkirk" },
    { "@type": "City", name: "Dauphin" },
    { "@type": "AdministrativeArea", name: "Manitoba" },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Device Buyback and Trade-In",
    provider: {
      "@type": "LocalBusiness",
      name: "Mobile Tech Lab",
      url: "https://mobiletechlab.ca",
      telephone: ["(204) 500-9757", "(204) 410-0262"],
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
    },
    areaServed,
    additionalProperty: [
      { "@type": "PropertyValue", name: "Devices Accepted", value: "Phones, tablets, laptops, MacBooks, game consoles, video games, gaming accessories, smartwatches" },
      { "@type": "PropertyValue", name: "Payment Options", value: "Cash, e-transfer, or store credit. Customer chooses. Same-day payment." },
      { "@type": "PropertyValue", name: "Intake Methods", value: "Walk-in at St. Vital (Winnipeg) or Thompson location, or free trackable mail-in from anywhere in Manitoba." },
      { "@type": "PropertyValue", name: "Broken Device Policy", value: "We buy testable broken devices by installing temporary parts to verify functionality before making an offer." },
      { "@type": "PropertyValue", name: "Devices Not Accepted", value: "Audio products, locked devices (carrier/iCloud/financing), non-testable blacked-out devices, devices for parts only, devices reported lost or stolen" },
      { "@type": "PropertyValue", name: "Carrier Trade-In Comparison", value: "Unlike major Canadian carrier trade-in programs that pay bill credit toward a new contract, we buy devices outright with same-day cash, e-transfer, or store credit. No new contract required." },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mobile Tech Lab",
    description: "Sell your phone, tablet, laptop, MacBook, console, smartwatch, video games, or gaming accessories in Winnipeg, Thompson, or by mail from anywhere in Manitoba. Same-day cash, e-transfer, or store credit. We test broken devices. No carrier trade-in lock-in.",
    url: "https://mobiletechlab.ca/trade-in",
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
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "500", bestRating: "5" },
    areaServed,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: stripHtml(f.answer) },
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
