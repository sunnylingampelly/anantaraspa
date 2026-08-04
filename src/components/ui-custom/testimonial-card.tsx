import { Quote } from "lucide-react";
import type { Testimonial } from "@/content/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col gap-6 rounded-3xl border border-border bg-card p-8">
      <Quote className="size-8 text-gold-deep" strokeWidth={1.25} />
      <blockquote className="flex-1 font-heading text-lg sm:text-xl leading-relaxed text-foreground">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="flex flex-col gap-0.5 border-t border-border pt-4">
        <span className="font-accent text-sm uppercase tracking-[0.08em] text-foreground">
          {testimonial.name}
        </span>
        <span className="text-xs text-muted-foreground">{testimonial.role}</span>
        <span className="mt-1 text-xs text-gold-deep">{testimonial.service}</span>
      </figcaption>
    </figure>
  );
}
