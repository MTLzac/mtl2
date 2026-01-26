import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Helper to generate standard repair page breadcrumbs
export const getRepairBreadcrumbs = (deviceName: string, slug: string): BreadcrumbItem[] => [
  { name: "Home", url: "https://mobiletechlab.ca/" },
  { name: "Repairs", url: "https://mobiletechlab.ca/" },
  { name: `${deviceName} Repair`, url: `https://mobiletechlab.ca/repair/${slug}` }
];
