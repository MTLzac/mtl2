export const AppleComparisonStrip = () => {
  return (
    <section id="apple-comparison" className="py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {/* Apple */}
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold shadow-sm md:text-sm">
              <span className="text-muted-foreground">Apple Store Polo Park:</span>
              <span className="text-foreground">$179 – $499</span>
            </span>
            {/* MTL Premium */}
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-card px-3 py-1.5 text-xs font-semibold shadow-sm md:text-sm">
              <span className="text-primary">MTL Premium:</span>
              <span className="text-foreground">$79 – $349</span>
            </span>
            {/* MTL Value */}
            <span className="inline-flex items-center gap-2 rounded-full border border-success/40 bg-card px-3 py-1.5 text-xs font-semibold shadow-sm md:text-sm">
              <span className="text-success">MTL Value:</span>
              <span className="text-foreground">$69 – $219</span>
            </span>
          </div>

          <p className="mx-auto mt-3 max-w-3xl text-center text-xs text-muted-foreground">
            Apple Canada prices verified April 27, 2026 from{" "}
            <a
              href="https://getsupport.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Apple's Get an Estimate tool
            </a>
            . See{" "}
            <a
              href="https://support.apple.com/en-ca/iphone/repair"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Apple's repair pricing tool
            </a>{" "}
            for your exact device.
          </p>
        </div>
      </div>
    </section>
  );
};
