"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { CallLink } from "@/components/ui-custom/call-link";
import { WhatsAppLink } from "@/components/ui-custom/whatsapp-link";
import { WhatsAppIcon } from "@/components/ui-custom/brand-icons";

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const pastHero = scrollY > 480;
      const distanceFromBottom =
        document.documentElement.scrollHeight - scrollY - window.innerHeight;
      const nearFooter = distanceFromBottom < 480;
      setVisible(pastHero && !nearFooter);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 lg:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          <div className="glass mx-3 mb-3 flex items-center gap-2 rounded-full p-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <CallLink
              aria-label="Call Anantara Spa"
              className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-transform active:scale-90"
            >
              <Phone className="size-5" strokeWidth={1.5} />
            </CallLink>
            <WhatsAppLink className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary py-3 font-accent text-xs uppercase tracking-[0.14em] text-primary-foreground transition-transform active:scale-95">
              <WhatsAppIcon className="size-4" />
              Book on WhatsApp
            </WhatsAppLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
