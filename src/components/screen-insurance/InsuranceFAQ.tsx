import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { INSURANCE_FAQS } from "@/lib/screen-insurance-data";

export function InsuranceFAQ() {
  return (
    <section className="bg-secondary/40 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {INSURANCE_FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
