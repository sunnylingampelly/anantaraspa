"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-7 sm:p-8"
    >
      <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
        {icon}
      </span>
      <h3 className="font-heading text-xl text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </motion.div>
  );
}
