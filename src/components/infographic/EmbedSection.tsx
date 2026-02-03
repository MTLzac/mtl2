import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

export const EmbedSection = () => {
  const [copied, setCopied] = useState(false);

  const embedCode = `<iframe 
  src="https://mobiletechlab.ca/embed/repair-or-replace-stats" 
  width="100%" 
  height="600" 
  style="border:0; max-width: 800px;" 
  loading="lazy"
  title="Canadian Device Repair Statistics"
></iframe>
<p style="font-size: 12px; color: #666; margin-top: 8px;">
  Source: <a href="https://mobiletechlab.ca/repair-or-replace-device-canada" rel="noopener" target="_blank">Mobile Tech Lab - Canadian Repair Statistics</a>
</p>`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(embedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className="py-12 md:py-16" aria-labelledby="embed-section">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 
          id="embed-section" 
          className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4"
        >
          Embed This Data
        </h2>
        
        <p className="text-muted-foreground mb-6">
          Journalists, bloggers, and publishers can embed a summary of this data on their own sites. 
          The embed includes minimal branding and a canonical link back to this page.
        </p>

        <div className="relative">
          <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-xs text-muted-foreground border border-border">
            {embedCode}
          </pre>
          
          <Button
            onClick={handleCopy}
            size="sm"
            variant="outline"
            className="absolute top-2 right-2"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy
              </>
            )}
          </Button>
        </div>

        <div className="mt-6 text-sm text-muted-foreground">
          <h3 className="font-medium text-foreground mb-2">Embed guidelines:</h3>
          <ul className="space-y-1">
            <li>• Responsive iframe adapts to container width (max 800px)</li>
            <li>• Attribution link must remain visible</li>
            <li>• Content updates automatically as we refresh data quarterly</li>
            <li>• No tracking or third-party scripts included</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
