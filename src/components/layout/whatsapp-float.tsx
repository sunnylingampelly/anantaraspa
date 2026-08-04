"use client";

import { motion } from "framer-motion";

import { whatsappLink } from "@/lib/links";
import { reportWhatsAppConversion } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/ui-custom/brand-icons";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={reportWhatsAppConversion}
      aria-label="Chat with Anantara Spa on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 hidden lg:flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)]"
    >
      <WhatsAppIcon className="size-6" />
      <span className="sr-only">WhatsApp</span>
    </motion.a>
  );
}
