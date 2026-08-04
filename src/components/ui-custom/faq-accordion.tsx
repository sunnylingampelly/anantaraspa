import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQ } from "@/content/faqs";

export function FaqAccordion({ faqs, idPrefix = "faq" }: { faqs: FAQ[]; idPrefix?: string }) {
  return (
    <Accordion className="flex flex-col gap-1">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={faq.question}
          value={`${idPrefix}-${i}`}
          className="border-b border-border/70 last:border-0"
        >
          <AccordionTrigger className="py-5 text-base sm:text-lg font-heading font-medium text-foreground hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm sm:text-base leading-relaxed text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
