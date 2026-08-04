"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";

import { whatsappLink } from "@/lib/links";
import { CallLink } from "@/components/ui-custom/call-link";
import { WhatsAppIcon } from "@/components/ui-custom/brand-icons";

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: (i * 37) % 100,
  size: 3 + ((i * 13) % 6),
  duration: 14 + (i % 7) * 2,
  delay: (i % 5) * -3,
}));

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 40, damping: 16 });
  const springY = useSpring(mvY, { stiffness: 40, damping: 16 });
  const bgX = useTransform(springX, [-1, 1], [-14, 14]);
  const bgY = useTransform(springY, [-1, 1], [-10, 10]);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    const handler = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mvX.set((e.clientX / innerWidth) * 2 - 1);
      mvY.set((e.clientY / innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mvX, mvY]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink"
    >
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 scale-100 sm:scale-110">
        <picture>
          <source media="(min-width: 640px)" srcSet="/images/gallery/hero-web.webp" />
          <img
            src="/images/gallery/hero-mobile.webp"
            alt="Private, candlelit Anantara Spa treatment suite with a garden water feature"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />

      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-gold/50"
            style={{ left: `${p.left}%`, width: p.size, height: p.size, bottom: "-5%" }}
            animate={{ y: ["0%", "-115vh"], opacity: [0, 0.7, 0] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container-luxe relative z-10 pt-24 pb-14 sm:pb-0">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-accent text-xs sm:text-sm uppercase tracking-[0.32em] text-gold"
        >
          Anantara Spa &middot; Gachibowli, Hyderabad
        </motion.span>

        <h1 className="mt-5 max-w-3xl font-heading text-6xl sm:text-7xl lg:text-8xl font-medium leading-[1.02] text-cream">
          {["Relax.", "Rejuvenate.", "Rediscover Yourself."].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.3 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="block text-balance"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-6 max-w-md text-balance text-base sm:text-lg text-cream/80"
        >
          A private sanctuary in the heart of Gachibowli, where time-tested therapies
          meet unhurried, modern calm — minutes from HITEC City and the Financial District.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-accent text-xs sm:text-sm uppercase tracking-[0.14em] text-ink transition-transform hover:scale-[1.03] active:scale-95"
          >
            <WhatsAppIcon className="size-4" />
            Book Appointment
          </a>
          <CallLink className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 font-accent text-xs sm:text-sm uppercase tracking-[0.14em] text-cream transition-colors hover:border-cream hover:bg-cream/10">
            <Phone className="size-4" strokeWidth={1.75} />
            Call Now
          </CallLink>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute inset-x-0 bottom-8 z-10 hidden justify-center sm:flex"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-cream/60"
        >
          <span className="font-accent text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown className="size-4" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
