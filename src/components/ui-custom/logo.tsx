import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = 48,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Link
      href="/"
      aria-label="Anantara Spa — Home"
      className={cn("flex items-center gap-3 shrink-0", className)}
    >
      <Image
        src="/images/brand/logo-source.png"
        alt="Anantara Spa logo"
        width={size}
        height={size}
        priority
        className="rounded-full"
      />
      <span className="sr-only">Anantara Spa</span>
    </Link>
  );
}
