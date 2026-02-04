import { Star, ExternalLink, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ReviewData {
  name: string;
  rating: number;
  text: string;
  reviewUrl?: string;
}

interface LocationReviewsSectionProps {
  locationName: string;
  reviews: ReviewData[];
  totalReviews: string;
  gmbUrl: string;
}

const ReviewCard = ({ name, rating, text, reviewUrl }: ReviewData) => (
  <Card className="h-full border-border/50 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
    <CardContent className="flex h-full flex-col items-center p-6 text-center">
      {/* Star Rating */}
      <div className="mb-4 flex gap-0.5">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
        ))}
      </div>

      {/* Review Text */}
      <p className="mb-4 flex-1 text-sm italic text-muted-foreground">
        "{text}"
      </p>

      {/* Reviewer Name with Verified Badge */}
      <div className="flex items-center gap-1.5">
        {reviewUrl ? (
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground hover:text-primary hover:underline"
          >
            – {name}
          </a>
        ) : (
          <p className="font-medium text-foreground">– {name}</p>
        )}
        <BadgeCheck className="h-4 w-4 text-primary" aria-label="Verified Review" />
      </div>

      {/* Source */}
      <p className="mt-1 text-xs text-muted-foreground/70">Via Google Reviews</p>
    </CardContent>
  </Card>
);

export const LocationReviewsSection = ({ 
  locationName, 
  reviews, 
  totalReviews, 
  gmbUrl 
}: LocationReviewsSectionProps) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header with Subtitle */}
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold md:text-3xl">
            What Our {locationName} Customers Are Saying
          </h2>
          <p className="flex items-center justify-center gap-1.5 text-muted-foreground">
            <Star className="h-4 w-4 fill-primary text-primary" />
            Trusted by over {totalReviews} happy customers in {locationName}
          </p>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="mx-auto hidden max-w-4xl gap-6 md:grid md:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="mx-auto max-w-sm md:hidden">
          <Carousel opts={{ align: "center", loop: true }}>
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem key={review.name}>
                  <ReviewCard {...review} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="mb-4 flex items-center justify-center gap-2 font-medium">
            <Star className="h-5 w-5 fill-primary text-primary" />
            Read Over {totalReviews} Google Reviews
          </p>
          <Button asChild>
            <a
              href={gmbUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More Reviews on Google
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
