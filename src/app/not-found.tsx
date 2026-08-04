import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { whatsappLink } from "@/lib/links";
import { WhatsAppIcon } from "@/components/ui-custom/brand-icons";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-24">
      <Image
        src="/images/gallery/gallery-08.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/60 to-ink/40" />

      <div className="container-luxe relative z-10 flex flex-col items-start gap-6">
        <span className="font-accent text-xs sm:text-sm uppercase tracking-[0.28em] text-gold">
          404 &middot; Page Not Found
        </span>
        <h1 className="max-w-lg text-balance font-heading text-5xl sm:text-6xl font-medium text-cream">
          This Path Leads Nowhere &mdash; Let&rsquo;s Guide You Back
        </h1>
        <p className="max-w-md text-cream/80">
          The page you&rsquo;re looking for may have moved. Return to our homepage, or
          go straight to booking your next moment of calm.
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-accent text-xs sm:text-sm uppercase tracking-[0.14em] text-ink transition-transform hover:scale-[1.03]"
          >
            Back to Home
            <ArrowRight className="size-4" strokeWidth={1.75} />
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 font-accent text-xs sm:text-sm uppercase tracking-[0.14em] text-cream transition-colors hover:border-cream hover:bg-cream/10"
          >
            <WhatsAppIcon className="size-4" />
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
