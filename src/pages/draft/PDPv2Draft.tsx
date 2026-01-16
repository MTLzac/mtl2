import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import PDPProductGallery from "@/components/pdp-v2/PDPProductGallery";
import PDPProductInfo from "@/components/pdp-v2/PDPProductInfo";
import PDPVariantSelector from "@/components/pdp-v2/PDPVariantSelector";
import PDPTrustPanel from "@/components/pdp-v2/PDPTrustPanel";
import PDPTrustBadges from "@/components/pdp-v2/PDPTrustBadges";
import PDPReviews from "@/components/pdp-v2/PDPReviews";
import PDPBundleUpsells from "@/components/pdp-v2/PDPBundleUpsells";
import PDPStickyMobileCTA from "@/components/pdp-v2/PDPStickyMobileCTA";
import PDPFAQAccordion from "@/components/pdp-v2/PDPFAQAccordion";
import PDPStructuredData from "@/components/pdp-v2/PDPStructuredData";

// Product images
import iphoneSEFront from "@/assets/pdp/iphone-se-2020-white-front.webp";
import iphoneSEBack from "@/assets/pdp/iphone-se-2020-white-back.webp";

// Mock product data - would come from Shopify in production
const mockProduct = {
  id: "iphone-se-2020-64gb",
  title: "iPhone SE (2020) - Unlocked",
  vendor: "Apple",
  price: 199.00,
  compareAtPrice: 299.00,
  currency: "CAD",
  images: [
    iphoneSEFront,
    iphoneSEBack,
  ],
  // Location-specific inventory (simulating Shopify metafields)
  locationInventory: {
    winnipeg: 5,
    thompson: 2,
  },
  // Variant options with stock aggregation
  variantGroups: [
    {
      name: "Storage",
      options: [
        { value: "64GB", label: "64GB", available: true, stock: 12 },
        { value: "128GB", label: "128GB", available: true, stock: 8 },
        { value: "256GB", label: "256GB", available: true, stock: 3 },
      ]
    },
    {
      name: "Colour",
      options: [
        { value: "Black", label: "Black", available: true, stock: 15 },
        { value: "White", label: "White", available: true, stock: 4 },
        { value: "Red", label: "(PRODUCT)RED", available: false, stock: 0 },
      ]
    },
    {
      name: "Condition",
      options: [
        { value: "excellent", label: "Excellent", available: true, stock: 3 },
        { value: "very good", label: "Very Good", available: true, stock: 6 },
        { value: "good", label: "Good", available: true, stock: 8 },
        { value: "fair", label: "Fair", available: true, stock: 2 },
      ]
    }
  ],
  // Price by condition
  conditionPrices: {
    excellent: 239.00,
    "very good": 219.00,
    good: 199.00,
    fair: 169.00,
  } as Record<string, number>,
  specs: {
    storage: "64GB",
    carrier: "Unlocked",
    color: "Black",
    battery: "85%+"
  },
  rating: 4.8,
  reviewCount: 127,
  description: `
    <p>Get the power of iPhone at an incredible value. This certified pre-owned iPhone SE (2020) features Apple's A13 Bionic chip — the same chip found in iPhone 11 Pro — delivering blazing-fast performance.</p>
    <h4>What's Included:</h4>
    <ul>
      <li>iPhone SE (2020) - Certified Pre-Owned</li>
      <li>USB-C to Lightning Cable</li>
      <li>SIM Ejector Tool</li>
      <li>1-Year Warranty Card</li>
    </ul>
    <h4>Our Certification Process:</h4>
    <p>Every device passes our rigorous 90+ point inspection, including battery health verification (≥85%), functionality testing, and thorough professional cleaning. Devices are data-wiped and factory reset.</p>
  `,
  faqs: [
    {
      question: "What does 'Unlocked' mean?",
      answer: "An unlocked phone works with any carrier. Simply insert your SIM card from Bell, Rogers, Telus, Freedom, or any other carrier and you're ready to go."
    },
    {
      question: "What's included with my purchase?",
      answer: "Your iPhone SE comes with a USB-C to Lightning cable, SIM ejector tool, and 1-year warranty card. Original box and accessories may vary."
    },
    {
      question: "How does the 1-year defects-only warranty work?",
      answer: "Our 1-year warranty covers manufacturer defects and hardware failures only. Physical damage (drops, cracks) and liquid damage are excluded. If your device has covered issues, bring it to either of our Manitoba locations for free diagnosis and repair or replacement."
    },
    {
      question: "What if something goes wrong with my device?",
      answer: "Our 1-year defects-only warranty covers you. If your device develops a hardware defect, bring it to either of our Manitoba locations and we'll repair or replace it free of charge. Physical and liquid damage are not covered."
    },
    {
      question: "What's the difference between condition grades?",
      answer: "Fair: Visible wear & scratches, fully functional. Good: Minor cosmetic wear, great value. Very Good: Light signs of use, near-perfect. Excellent: Like new condition. All conditions pass our 90+ point inspection and include our 1-year warranty."
    },
    {
      question: "Is the battery health guaranteed?",
      answer: "Yes! All our devices are guaranteed to have battery health of 85% or higher. This ensures long-lasting performance throughout your ownership."
    }
  ]
};

const PDPv2Draft = () => {
  // Track all selected variant options
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>({
    Storage: "64GB",
    Colour: "Black",
    Condition: "good"
  });

  const handleVariantSelect = (groupName: string, value: string) => {
    setSelectedValues(prev => ({
      ...prev,
      [groupName]: value
    }));
  };

  // Get current price based on selected condition
  const currentPrice = mockProduct.conditionPrices[selectedValues.Condition] || mockProduct.price;
  
  // Get stock for selected condition
  const selectedConditionOption = mockProduct.variantGroups
    .find(g => g.name === "Condition")
    ?.options.find(o => o.value === selectedValues.Condition);
  const currentStock = selectedConditionOption?.stock || 0;

  // Create a condition object for compatibility with existing components
  const selectedCondition = {
    value: selectedValues.Condition,
    label: selectedConditionOption?.label || "Good",
    description: "",
    price: currentPrice,
    stock: currentStock,
    badge: selectedValues.Condition === "excellent" ? "success" : 
           selectedValues.Condition === "very good" ? "primary" :
           selectedValues.Condition === "good" ? "primary" : "amber"
  };

  return (
    <>
      <Helmet>
        <title>{mockProduct.title} | Mobile Tech Lab</title>
        <meta 
          name="description" 
          content={`Buy certified pre-owned ${mockProduct.title} from $${mockProduct.conditionPrices.fair}. 1-year warranty, 90+ point tested & certified. Free shipping in Manitoba.`} 
        />
      </Helmet>
      
      {/* Structured Data for SEO */}
      <PDPStructuredData product={mockProduct} selectedCondition={selectedCondition} />
      
      <Header />
      
      <main className="min-h-screen bg-background pb-24 lg:pb-0">
        {/* Draft Banner */}
        <div className="bg-amber-500 text-amber-950 text-center py-2 px-4 text-sm font-medium">
          🚧 DRAFT PDP v2 — For Review Only — Not Live 🚧
        </div>

        {/* Breadcrumb */}
        <nav className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><a href="/" className="hover:text-foreground transition-colors">Home</a></li>
            <li>/</li>
            <li><a href="#" className="hover:text-foreground transition-colors">Phones</a></li>
            <li>/</li>
            <li><a href="#" className="hover:text-foreground transition-colors">iPhone</a></li>
            <li>/</li>
            <li className="text-foreground font-medium truncate max-w-[200px]">{mockProduct.title}</li>
          </ol>
        </nav>

        {/* Main Product Section - Two Column Desktop Layout */}
        <section className="container mx-auto px-4 pb-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Product Gallery */}
            <PDPProductGallery images={mockProduct.images} title={mockProduct.title} />
            
            {/* Right Column - Product Info */}
            <div className="flex flex-col">
              <PDPProductInfo 
                product={{
                  ...mockProduct,
                  specs: {
                    ...mockProduct.specs,
                    storage: selectedValues.Storage,
                    color: selectedValues.Colour
                  }
                }} 
                selectedCondition={selectedCondition}
              />
              
              {/* Variant Selectors - Storage, Colour, Condition */}
              <PDPVariantSelector 
                variantGroups={mockProduct.variantGroups}
                selectedValues={selectedValues}
                onSelect={handleVariantSelect}
                prices={mockProduct.conditionPrices}
              />
              
              {/* Stock Status */}
              <div className="mt-4 text-sm">
                {currentStock > 0 ? (
                  currentStock <= 5 ? (
                    <span className="text-amber-600 font-medium">
                      ⚡ Only {currentStock} left in {selectedCondition.label} condition
                    </span>
                  ) : (
                    <span className="text-success font-medium">
                      ✓ In stock — {currentStock} available
                    </span>
                  )
                ) : (
                  <span className="text-destructive font-medium">Out of stock</span>
                )}
              </div>
              
              {/* Location-specific pickup availability */}
              <p className="text-sm text-muted-foreground mt-1">
                {mockProduct.locationInventory.winnipeg > 0 || mockProduct.locationInventory.thompson > 0 ? (
                  <>
                    {mockProduct.locationInventory.winnipeg > 0 && (
                      <span>{mockProduct.locationInventory.winnipeg} in Winnipeg</span>
                    )}
                    {mockProduct.locationInventory.winnipeg > 0 && mockProduct.locationInventory.thompson > 0 && (
                      <span> / </span>
                    )}
                    {mockProduct.locationInventory.thompson > 0 && (
                      <span>{mockProduct.locationInventory.thompson} in Thompson</span>
                    )}
                  </>
                ) : (
                  "Ready for pickup in Winnipeg and Thompson locations"
                )}
              </p>
              
              {/* Add to Cart Button */}
              <button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-lg text-lg transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentStock === 0}
              >
                Add to Cart — ${currentPrice.toFixed(2)} CAD
              </button>
              
              {/* NEW: Trust Panel with 1-year warranty and all reassurances */}
              <PDPTrustPanel />
              
              {/* Quick Trust Badges */}
              <PDPTrustBadges />
              
              {/* Bundle Upsells */}
              <PDPBundleUpsells />
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <PDPReviews 
          rating={mockProduct.rating} 
          reviewCount={mockProduct.reviewCount} 
        />

        {/* Product Description (collapsed on mobile) */}
        <section className="container mx-auto px-4 py-8 border-t border-border">
          <h2 className="text-2xl font-bold mb-4">Product Details</h2>
          <div 
            className="prose prose-sm max-w-none text-foreground"
            dangerouslySetInnerHTML={{ __html: mockProduct.description }}
          />
        </section>

        {/* FAQ Section with Schema */}
        <PDPFAQAccordion faqs={mockProduct.faqs} productTitle={mockProduct.title} />
      </main>

      {/* Sticky Mobile CTA Bar */}
      <PDPStickyMobileCTA 
        price={currentPrice} 
        productTitle={mockProduct.title}
      />
      
      <Footer />
    </>
  );
};

export default PDPv2Draft;