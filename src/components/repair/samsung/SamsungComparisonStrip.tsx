export const SamsungComparisonStrip = () => {
  return (
    <section id="samsung-comparison" className="py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold shadow-sm md:text-sm">
              <span className="text-muted-foreground">Samsung Canada (Authorized Service):</span>
              <span className="text-foreground">$145 – $902</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-card px-3 py-1.5 text-xs font-semibold shadow-sm md:text-sm">
              <span className="text-primary">MTL Galaxy A &amp; S:</span>
              <span className="text-foreground">$129 – $349</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-success/40 bg-card px-3 py-1.5 text-xs font-semibold shadow-sm md:text-sm">
              <span className="text-success">MTL Foldable:</span>
              <span className="text-foreground">From $399</span>
            </span>
          </div>

          <p className="mx-auto mt-3 max-w-3xl text-center text-xs text-muted-foreground">
            Samsung Canada prices verified April 27, 2026 from{" "}
            <a
              href="https://www.samsung.com/ca/support/Out-of-Warranty-Pricing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Samsung's official Out-of-Warranty Pricing page
            </a>
            . See{" "}
            <a
              href="https://www.samsung.com/ca/support/Out-of-Warranty-Pricing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Samsung's repair pricing tool
            </a>{" "}
            for your exact device. Mobile Tech Lab pricing tracks current part costs — get an exact
            quote estimate in 1–2 business hours.
          </p>
        </div>
      </div>
    </section>
  );
};
