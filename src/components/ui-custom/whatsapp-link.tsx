"use client";

import type { ComponentPropsWithoutRef } from "react";

import { whatsappLink } from "@/lib/links";
import { reportWhatsAppConversion } from "@/lib/analytics";

export function WhatsAppLink({
  message,
  onClick,
  ...props
}: Omit<ComponentPropsWithoutRef<"a">, "href"> & { message?: string }) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        reportWhatsAppConversion();
        onClick?.(e);
      }}
      {...props}
    />
  );
}
