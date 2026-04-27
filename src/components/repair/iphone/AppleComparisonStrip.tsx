export const AppleComparisonStrip = () => {
  return (
    <section id="apple-comparison" className="bg-secondary/30 py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-3 sm:grid-cols-3">
            {/* Apple */}
            <div className="flex items-center justify-between gap-3 rounded-full border border-border bg-card px-4 py-3 shadow-sm">
              <span className="text-sm font-semibold text-muted-foreground">Apple Polo Park</span>
              <span className="text-sm font-bold text-foreground">$179 – $499</span>
            </div>
            {/* MTL Premium */}
            <div className="flex items-center justify-between gap-3 rounded-full border-2 border-primary bg-card px-4 py-3 shadow-sm">
              <span className="text-sm font-semibold text-primary">MTL Premium</span>
              <span className="text-sm font-bold text-foreground">$79 – $349</span>
            </div>
            {/* MTL Value */}
            <div className="flex items-center justify-between gap-3 rounded-full border border-success/40 bg-card px-4 py-3 shadow-sm">
              <span className="text-sm font-semibold text-success">MTL Value</span>
              <span className="text-sm font-bold text-foreground">$69 – $219</span>
            </div>
          </div>

          <p className="mx-auto mt-4 max-w-3xl text-center text-xs text-muted-foreground">
            Apple Canada prices verified April 27, 2026 using{" "}
            <a
              href="https://support.apple.com/en-ca/iphone/repair"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Apple's repair pricing tool
            </a>
            . See{" "}
            <a
              href="https://www.apple.com/legal/sales-support/terms/repair/Retail_Repair_US_Terms_Conditions.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Apple Repair Terms and Conditions
            </a>{" "}
            or{" "}
            <a
              href="https://getsupport.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Apple's Get an Estimate tool
            </a>{" "}
            for your exact device.
          </p>
        </div>
      </div>
    </section>
  );
};
