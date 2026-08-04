import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/ui-custom/section-heading";
import { ServiceCard } from "@/components/ui-custom/service-card";
import { RevealGroup, RevealItem } from "@/components/ui-custom/reveal";
import { services } from "@/content/services";

const FEATURED_SLUGS = [
  "swedish-massage",
  "deep-tissue-massage",
  "balinese-massage",
  "couples-massage",
  "thai-massage",
  "four-hands-massage",
];

const IMAGES = [
  "/images/gallery/gallery-01.png",
  "/images/gallery/gallery-06.png",
  "/images/gallery/gallery-09.jpg",
  "/images/gallery/gallery-02.png",
  "/images/gallery/gallery-05.png",
  "/images/gallery/gallery-08.png",
];

export function SignatureExperiences() {
  const featured = FEATURED_SLUGS
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Signature Experiences"
          title="Therapies Worth Making Time For"
          description="From gentle Swedish relaxation to immersive four-hands ritual — each treatment is performed with intention, in complete privacy."
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {featured.map((service, i) => (
            <RevealItem key={service.slug}>
              <ServiceCard service={service} image={IMAGES[i % IMAGES.length]} />
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-14 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3 font-accent text-xs uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View All Treatments
            <ArrowRight className="size-4" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
