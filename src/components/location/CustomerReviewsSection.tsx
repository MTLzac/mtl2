import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRIMARY_GMB_URL } from "@/lib/locations";

import rileyReview from "@/assets/reviews/riley-review.png";
import jerryReview from "@/assets/reviews/jerry-review.png";

interface ReviewCardProps {
  imageSrc: string;
  reviewerName: string;
  rating: number;
}

const ReviewCard = ({ imageSrc, reviewerName, rating }: ReviewCardProps) => (
  <div className="flex flex-col items-center rounded-xl border border-border/50 bg-card p-4 shadow-sm">
    <img
      src={imageSrc}
      alt={`Google review from ${reviewerName}`}
      className="mb-4 w-full rounded-lg object-contain"
    />
    <p className="font-semibold text-foreground">{reviewerName}</p>
    <div className="my-1 flex gap-0.5">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
    <p className="text-sm text-muted-foreground">Via Google Reviews</p>
  </div>
);

// Text-only review card for when image is unavailable
const TextReviewCard = ({
  reviewerName,
  rating,
  reviewText,
}: {
  reviewerName: string;
  rating: number;
  reviewText: string;
}) => (
  <div className="flex flex-col items-center rounded-xl border border-border/50 bg-card p-6 shadow-sm">
    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
      {reviewerName.charAt(0)}
    </div>
    <p className="mb-2 text-center text-sm italic text-muted-foreground">
      "{reviewText}"
    </p>
    <p className="font-semibold text-foreground">{reviewerName}</p>
    <div className="my-1 flex gap-0.5">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
    <p className="text-sm text-muted-foreground">Via Google Reviews</p>
  </div>
);

export const CustomerReviewsSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          What Our St. Vital Customers Are Saying
        </h2>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          <ReviewCard
            imageSrc={rileyReview}
            reviewerName="Riley Z."
            rating={5}
          />
          <TextReviewCard
            reviewerName="Brent K."
            rating={5}
            reviewText="Great service, great prices, lots of options! Tanvin was excellent."
          />
          <ReviewCard
            imageSrc={jerryReview}
            reviewerName="Jerry M."
            rating={5}
          />
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <a
              href={PRIMARY_GMB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read All Google Reviews
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
