import { Star, Quote } from "lucide-react";

interface Review {
  quote: string;
  author: string;
  rating: number;
}

interface GoogleReviewsHighlightProps {
  reviews: Review[];
  heading?: string;
}

export const GoogleReviewsHighlight = ({ 
  reviews,
  heading = "What Customers Say"
}: GoogleReviewsHighlightProps) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold md:text-3xl">{heading}</h2>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">4.9/5 on Google</span>
          </div>
        </div>
        
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="relative rounded-xl border border-border/50 bg-card p-6 shadow-sm"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/20" />
              <div className="mb-3 flex gap-0.5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-4 text-foreground/90 italic">"{review.quote}"</p>
              <p className="text-sm font-medium text-muted-foreground">— {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
