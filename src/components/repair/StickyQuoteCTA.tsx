import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";

interface StickyQuoteCTAProps {
  smsNumber?: string;
  smsMessage?: string;
}

export const StickyQuoteCTA = ({ 
  smsNumber = "2045009757",
  smsMessage = "Hi, I found your site and need a repair. Can you help?"
}: StickyQuoteCTAProps) => {
  const encodedMessage = encodeURIComponent(smsMessage);
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 p-4 backdrop-blur-sm md:hidden">
      <div className="flex gap-2">
        <Button className="flex-1" size="lg" asChild>
          <a href="tel:2049001054">
            <Phone className="mr-2 h-5 w-5" />
            Call
          </a>
        </Button>
        <Button className="flex-1" variant="outline" size="lg" asChild>
          <a href={`sms:+1${smsNumber}?body=${encodedMessage}`}>
            <MessageSquare className="mr-2 h-5 w-5" />
            Text
          </a>
        </Button>
      </div>
    </div>
  );
};
