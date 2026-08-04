"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import type { Service } from "@/content/services";
import { startingPrice } from "@/content/services";
import { ServiceIcon } from "@/components/ui-custom/service-icon";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  image,
  className,
}: {
  service: Service;
  image: string;
  className?: string;
}) {
  const price = startingPrice(service);
  const minDuration = Math.min(...service.prices.map((p) => p.duration));

  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className={cn("group relative", className)}
    >
      <Link
        href={`/services/${service.slug}`}
        className="relative block aspect-[4/5] overflow-hidden rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      >
        <motion.div
          variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/5" />

        {service.popular && (
          <span className="absolute right-5 top-5 rounded-full bg-gold/95 px-3 py-1 font-accent text-[10px] uppercase tracking-[0.18em] text-ink">
            Signature
          </span>
        )}

        <span className="absolute left-5 top-5 flex size-11 items-center justify-center rounded-full glass text-cream">
          <ServiceIcon icon={service.icon} className="size-5" />
        </span>

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 text-cream">
          <div>
            <h3 className="font-heading text-2xl leading-tight">{service.name}</h3>
            <p className="mt-1 text-sm text-cream/75">{service.tagline}</p>
          </div>
          <div className="flex items-center justify-between border-t border-cream/20 pt-3">
            <span className="font-accent text-[11px] uppercase tracking-[0.14em] text-cream/70">
              From {minDuration} min &middot; ₹{price.toLocaleString("en-IN")}
            </span>
            <span className="flex size-8 items-center justify-center rounded-full border border-cream/30 text-cream transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="size-4" strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
