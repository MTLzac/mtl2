import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const REVIEWS = [
  {
    name: "J Moneyas",
    initials: "JM",
    text: "Got recommended to this place by my sister... The service is very quick, I was told it would take 2-3 hours to fix and they had it done in under an hour and a half... Overall, very good experience.",
    rating: 5,
  },
  {
    name: "Sourav Sourav",
    initials: "SS",
    text: "Really happy with the service. Tanvin, he is the best guy. Helped me right away. My phone was hanging and stopped work. He fixed it within minutes. Saved me from losing all my data.",
    rating: 5,
  },
  {
    name: "GuitarCharlie S",
    initials: "GS",
    text: "My iPhone XR was completely dead no charging whatsoever or signs of life. I bring it into this shop and a friendly guy fixed it in a matter of seconds and didn't charge a dime. Best repair shop in Winnipeg, thanks again!",
    rating: 5,
  },
  {
    name: "Kaptain Chronic",
    initials: "KC",
    text: "Super fast and very friendly service... Me and my wife brought in an xbox with an unknown issue and they very quickly got back to us... repaired for us a day before they said it would be done. These guys are good I highly recommend.",
    rating: 5,
  },
];

export const CustomerReviews = () => {
  return (
    <section className="bg-muted/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-primary text-primary" />
            ))}
          </div>
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            500+ 5-star reviews on Google
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review) => (
            <Card key={review.name} className="h-full">
              <CardContent className="flex h-full flex-col p-6">
                <Quote className="mb-4 h-8 w-8 text-primary/30" />
                <p className="mb-6 flex-1 text-sm text-muted-foreground leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{review.name}</p>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
