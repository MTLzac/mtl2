import { LocationReviewsSection } from "./LocationReviewsSection";
import { PRIMARY_GMB_URL } from "@/lib/locations";

const stVitalReviews = [
  {
    name: "Riley Z.",
    rating: 5,
    text: "Fantastic service! They fixed my phone screen quickly and it looks brand new. Highly recommend!",
  },
  {
    name: "Brent K.",
    rating: 5,
    text: "Great service, great prices, lots of options! Tanvin was excellent.",
  },
  {
    name: "Jerry M.",
    rating: 5,
    text: "Fast, professional, and reasonably priced. Will definitely come back for any future repairs.",
  },
];

export const CustomerReviewsSection = () => {
  return (
    <LocationReviewsSection
      locationName="St. Vital"
      reviews={stVitalReviews}
      totalReviews="550"
      gmbUrl={PRIMARY_GMB_URL || ""}
    />
  );
};
