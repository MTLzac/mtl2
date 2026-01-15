interface Condition {
  value: string;
  label: string;
  price: number;
  stock: number;
}

interface Product {
  id: string;
  title: string;
  vendor: string;
  price: number;
  compareAtPrice: number;
  currency: string;
  images: string[];
  rating: number;
  reviewCount: number;
  description: string;
}

interface PDPStructuredDataProps {
  product: Product;
  selectedCondition: Condition;
}

const PDPStructuredData = ({ product, selectedCondition }: PDPStructuredDataProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "image": product.images,
    "description": product.description.replace(/<[^>]*>/g, '').substring(0, 500),
    "brand": {
      "@type": "Brand",
      "name": product.vendor
    },
    "sku": product.id,
    "mpn": product.id,
    "offers": {
      "@type": "Offer",
      "url": `https://shop.mobiletechlab.ca/products/${product.id}`,
      "priceCurrency": product.currency,
      "price": selectedCondition.price,
      "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      "availability": selectedCondition.stock > 0 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock",
      "itemCondition": "https://schema.org/RefurbishedCondition",
      "seller": {
        "@type": "Organization",
        "name": "Mobile Tech Lab"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "CAD"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "CA",
          "addressRegion": "MB"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 2,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 5,
            "unitCode": "DAY"
          }
        }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "CA",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 14,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default PDPStructuredData;
