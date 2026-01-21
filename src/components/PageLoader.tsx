import { Loader2 } from "lucide-react";

/**
 * Lightweight loading skeleton for lazy-loaded routes.
 * Displays a centered spinner with minimal JS overhead.
 */
const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
};

export default PageLoader;
