import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PRIMARY_GMB_URL } from "@/lib/locations";

interface ReviewData {
  name: string;
  rating: number;
  text: string;
}

const reviews: ReviewData[] = [
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

const ReviewCard = ({ name, rating, text }: ReviewData) => (
  <Card className="h-full border-border/50 shadow-sm">
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

      {/* Reviewer Name */}
      <p className="font-medium text-foreground">– {name}</p>

      {/* Source */}
      <p className="mt-1 text-xs text-muted-foreground/70">Via Google Reviews</p>
    </CardContent>
  </Card>
);

export const CustomerReviewsSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          What Our St. Vital Customers Are Saying
        </h2>

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
          <p className="mb-4 flex items-center justify-center gap-2 text-muted-foreground">
            <Star className="h-4 w-4 fill-primary text-primary" />
            See All 200+ Google Reviews
          </p>
          <Button asChild>
            <a
              href={PRIMARY_GMB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
