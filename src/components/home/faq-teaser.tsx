import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/ui-custom/section-heading";
import { FaqAccordion } from "@/components/ui-custom/faq-accordion";
import { Reveal } from "@/components/ui-custom/reveal";
import { generalFaqs } from "@/content/faqs";

export function FaqTeaser() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container-luxe max-w-3xl">
        <SectionHeading eyebrow="Good to Know" title="Frequently Asked Questions" />

        <div className="mt-14">
          <FaqAccordion faqs={generalFaqs.slice(0, 6)} idPrefix="home-faq" />
        </div>

        <Reveal>
          <div className="mt-10 flex justify-center">
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 font-accent text-sm uppercase tracking-[0.14em] text-primary underline-offset-4 hover:underline"
            >
              View All FAQs
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
