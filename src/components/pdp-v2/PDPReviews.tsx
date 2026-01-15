import { Star, ThumbsUp, CheckCircle } from "lucide-react";

interface PDPReviewsProps {
  rating: number;
  reviewCount: number;
}

// Mock reviews - would come from Shopify/Judge.me in production
const mockReviews = [
  {
    id: 1,
    author: "Sarah M.",
    rating: 5,
    date: "2 weeks ago",
    verified: true,
    title: "Amazing value!",
    content: "Bought this for my son and he loves it. The phone looks practically new, battery health is great, and it came with everything promised. Much better than paying full price for a new one.",
    helpful: 12,
    condition: "Good"
  },
  {
    id: 2,
    author: "Mike T.",
    rating: 5,
    date: "1 month ago",
    verified: true,
    title: "Perfect backup phone",
    content: "Needed a reliable backup phone for work. This iPhone SE works flawlessly. The 'Good' condition had some minor scratches but nothing that affects usage. Fast shipping to Winnipeg!",
    helpful: 8,
    condition: "Good"
  },
  {
    id: 3,
    author: "Jennifer L.",
    rating: 4,
    date: "1 month ago",
    verified: true,
    title: "Great phone, minor cosmetic wear",
    content: "Got the Fair condition to save money. Yes, there are some visible scratches, but the phone works perfectly. Exactly as described. Would buy from MTL again.",
    helpful: 5,
    condition: "Fair"
  }
];

const PDPReviews = ({ rating, reviewCount }: PDPReviewsProps) => {
  // Calculate rating breakdown
  const ratingBreakdown = [
    { stars: 5, percent: 78 },
    { stars: 4, percent: 15 },
    { stars: 3, percent: 5 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 1 }
  ];

  return (
    <section className="bg-secondary/30 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Rating Summary */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold text-foreground mb-4">Customer Reviews</h2>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl font-bold text-foreground">{rating}</span>
              <div>
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(rating)
                          ? "text-amber-400 fill-amber-400"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on {reviewCount} reviews
                </p>
              </div>
            </div>

            {/* Rating Breakdown */}
            <div className="space-y-2">
              {ratingBreakdown.map(({ stars, percent }) => (
                <div key={stars} className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground w-12">{stars} star</span>
                  <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-10">{percent}%</span>
                </div>
              ))}
            </div>

            <button className="mt-6 w-full py-3 px-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
              Write a Review
            </button>
          </div>

          {/* Reviews List */}
          <div className="lg:w-2/3 space-y-4">
            {mockReviews.map((review) => (
              <div key={review.id} className="bg-card p-5 rounded-xl border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-foreground">{review.author}</span>
                      {review.verified && (
                        <span className="inline-flex items-center gap-1 text-xs text-success font-medium">
                          <CheckCircle className="w-3 h-3" />
                          Verified Buyer
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "text-amber-400 fill-amber-400"
                                : "text-muted-foreground/30"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 bg-secondary rounded-full text-muted-foreground">
                    {review.condition}
                  </span>
                </div>
                
                <h4 className="font-semibold text-foreground mb-1">{review.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {review.content}
                </p>
                
                <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  Helpful ({review.helpful})
                </button>
              </div>
            ))}

            <button className="w-full py-3 text-primary font-medium hover:underline">
              View all {reviewCount} reviews →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PDPReviews;
