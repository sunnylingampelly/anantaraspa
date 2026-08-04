"use client";

import type { ComponentPropsWithoutRef } from "react";

import { telLink } from "@/lib/links";
import { reportCallConversion } from "@/lib/analytics";

export function CallLink({ onClick, ...props }: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      href={telLink()}
      onClick={(e) => {
        e.preventDefault();
        reportCallConversion(telLink());
        onClick?.(e);
      }}
      {...props}
    />
  );
}
