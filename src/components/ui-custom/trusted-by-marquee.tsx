"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export function TrustedByMarquee() {
  const reduce = useReducedMotion();
  const items = [...siteConfig.nearbyLandmarks, ...siteConfig.nearbyLandmarks];

  return (
    <div className="relative w-full max-w-full overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex w-max items-center gap-16"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {items.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="font-heading text-2xl sm:text-3xl italic text-muted-foreground/60 whitespace-nowrap"
          >
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
