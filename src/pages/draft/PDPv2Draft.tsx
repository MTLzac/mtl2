import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import PDPProductGallery from "@/components/pdp-v2/PDPProductGallery";
import PDPProductInfo from "@/components/pdp-v2/PDPProductInfo";
import PDPConditionSelector from "@/components/pdp-v2/PDPConditionSelector";
import PDPTrustBadges from "@/components/pdp-v2/PDPTrustBadges";
import PDPReviews from "@/components/pdp-v2/PDPReviews";
import PDPBundleUpsells from "@/components/pdp-v2/PDPBundleUpsells";
import PDPStickyMobileCTA from "@/components/pdp-v2/PDPStickyMobileCTA";
import PDPFAQAccordion from "@/components/pdp-v2/PDPFAQAccordion";
import PDPStructuredData from "@/components/pdp-v2/PDPStructuredData";

// Mock product data - would come from Shopify in production
const mockProduct = {
  id: "iphone-se-2020-64gb",
  title: "iPhone SE (2020) - 64GB - Unlocked",
  vendor: "Apple",
  price: 199.00,
  compareAtPrice: 299.00,
  currency: "CAD",
  images: [
    "https://images.unsplash.com/photo-1592286927505-1def25115558?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&h=600&fit=crop",
  ],
  conditions: [
    {
      value: "excellent",
      label: "Excellent",
      description: "Minor signs of use, fully functional. May have light micro-scratches invisible under normal use.",
      price: 219.00,
      stock: 3,
      badge: "success"
    },
    {
      value: "good",
      label: "Good",
      description: "Light scratches, normal wear. Fully functional with visible signs of use that don't affect performance.",
      price: 199.00,
      stock: 7,
      badge: "primary"
    },
    {
      value: "fair",
      label: "Fair",
      description: "Visible wear, minor cosmetic issues. Fully functional but shows character from previous use.",
      price: 169.00,
      stock: 2,
      badge: "amber"
    }
  ],
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
      <li>90-Day Warranty Card</li>
    </ul>
    <h4>Our Certification Process:</h4>
    <p>Every device passes our rigorous 72-point inspection, including battery health verification, functionality testing, and thorough cleaning. Devices are data-wiped and factory reset.</p>
  `,
  faqs: [
    {
      question: "What does 'Unlocked' mean?",
      answer: "An unlocked phone works with any carrier. Simply insert your SIM card from Bell, Rogers, Telus, Freedom, or any other carrier and you're ready to go."
    },
    {
      question: "What's included with my purchase?",
      answer: "Your iPhone SE comes with a USB-C to Lightning cable, SIM ejector tool, and 90-day warranty card. Original box and accessories may vary."
    },
    {
      question: "How does the 90-day warranty work?",
      answer: "Our warranty covers manufacturer defects and hardware failures. If your device has issues, bring it to either of our Manitoba locations for free diagnosis and repair or replacement."
    },
    {
      question: "Can I return the device if I'm not satisfied?",
      answer: "Yes! We offer a 14-day return policy. If you're not completely satisfied, return the device in its original condition for a full refund."
    },
    {
      question: "What's the difference between condition grades?",
      answer: "Excellent: Nearly flawless with minimal signs of use. Good: Light scratches and normal wear, fully functional. Fair: Noticeable cosmetic wear but fully functional. All conditions pass our 72-point inspection."
    }
  ]
};

const PDPv2Draft = () => {
  const [selectedCondition, setSelectedCondition] = useState(mockProduct.conditions[1]); // Default to "Good"

  return (
    <>
      <Helmet>
        <title>{mockProduct.title} | Mobile Tech Lab</title>
        <meta 
          name="description" 
          content={`Buy certified pre-owned ${mockProduct.title} from $${mockProduct.conditions[2].price}. 90-day warranty, tested & certified. Free shipping in Manitoba.`} 
        />
      </Helmet>
      
      {/* Structured Data for SEO */}
      <PDPStructuredData product={mockProduct} selectedCondition={selectedCondition} />
      
      <Header />
      
      <main className="min-h-screen bg-background">
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
                product={mockProduct} 
                selectedCondition={selectedCondition}
              />
              
              {/* Condition Selector with inline descriptions */}
              <PDPConditionSelector 
                conditions={mockProduct.conditions}
                selectedCondition={selectedCondition}
                onSelect={setSelectedCondition}
              />
              
              {/* Add to Cart Button */}
              <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-lg text-lg transition-colors mt-6">
                Add to Cart — ${selectedCondition.price.toFixed(2)} CAD
              </button>
              
              {/* Trust Badges - Consolidated near CTA */}
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
        price={selectedCondition.price} 
        productTitle={mockProduct.title}
      />
      
      <Footer />
    </>
  );
};

export default PDPv2Draft;
