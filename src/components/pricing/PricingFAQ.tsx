import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQPageSchema } from "@/components/seo/FAQPageSchema";
import { PRICING_FAQS } from "@/lib/pricing-data";

export const PricingFAQ = () => {
  return (
    <section id="faq" className="bg-muted/30 py-16 md:py-20">
      <FAQPageSchema faqs={PRICING_FAQS} />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
            Pricing FAQs
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {PRICING_FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-border/50 bg-card px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
