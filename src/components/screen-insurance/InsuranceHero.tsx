import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { IPhoneHero } from "./IPhoneHero";

const SHOP_BASE = "https://shop.mobiletechlab.ca";

export function InsuranceHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left — Marketing copy */}
          <div className="flex-1 max-w-2xl space-y-6 text-center md:text-left z-10 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-sm font-medium text-destructive border border-destructive/20 self-center md:self-start">
              <ShieldCheck className="h-4 w-4" />
              Premium Screen Protection
            </span>

            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl leading-[0.85]">
                One-Time Price.{" "}
                <br />
                <span
                  className="text-destructive font-black"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, hsl(var(--destructive)), hsl(var(--destructive) / 0.6), hsl(var(--destructive)))",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "shimmer 6s linear infinite",
                  }}
                >
                  Screen Protected.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground md:text-xl max-w-lg leading-relaxed">
                Pay once, and we'll replace your screen for free if it ever breaks
                within 12 months. No hidden fees. No deductibles.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gradient-primary text-lg" asChild>
                  <a
                    href={`${SHOP_BASE}/products/screen-protection`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Protect Your Device Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground font-semibold px-1 tracking-tight">
                ★ 4.9/5 Rating | No Deductibles | One-Time Payment
              </p>
            </div>
          </div>

          {/* Right — iPhone with interactive storyboard */}
          <div className="flex-1 hidden md:flex items-center justify-center">
            <IPhoneHero />
          </div>
        </div>
      </div>

      {/* Background blobs */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/4 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}
