import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { DeviceCategoriesGrid } from "@/components/home/DeviceCategoriesGrid";
import { CustomerReviews } from "@/components/home/CustomerReviews";
import { WaysToSave } from "@/components/home/WaysToSave";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { LocationsSection } from "@/components/home/LocationsSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";

const Index = () => {
  return (
    <>
      <OrganizationSchema />
      <Helmet>
        <title>Cell Phone Repair Winnipeg | Same-Day Service | Mobile Tech Lab</title>
        <meta
          name="description"
          content="iPhone, Samsung, iPad, MacBook & laptop repair in Winnipeg & Thompson. Same-day service when parts are in stock. 4.8★ from 500+ reviews. Walk-ins welcome."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mobiletechlab.ca/" />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          <HeroSection />
          <TrustBar />
          <DeviceCategoriesGrid />
          <CustomerReviews />
          <WaysToSave />
          <WhyChooseSection />
          <LocationsSection />
          <FinalCTA />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
