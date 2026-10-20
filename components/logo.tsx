import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Single source of truth for the official SafarSafe logo.
 * Transparent-background PNG (background removed).
 */
export const LOGO_SRC = "/images/logo/safarsafe-logo.png";

/**
 * Official SafarSafe logo mark.
 */
export function LogoMark({
  className,
  priority = false,
  sizes = "120px",
}: {
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <span className={cn("relative inline-block h-9 w-9", className)}>
      <Image
        src={LOGO_SRC}
        alt="SafarSafe"
        fill
        sizes={sizes}
        className="object-contain"
        priority={priority}
      />
    </span>
  );
}

/**
 * Full lockup: official logo mark + "SafarSafe" wordmark.
 */
export function Logo({
  className,
  markClassName,
  wordmarkClassName,
  showWordmark = true,
  priority = false,
}: {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
  priority?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={markClassName} priority={priority} />
      {showWordmark && (
        <span
          className={cn(
            "bg-clip-text font-brand text-[1.15rem] font-bold leading-none tracking-[-0.02em] text-transparent",
            "bg-[linear-gradient(100deg,#2856D4_0%,#6A37CA_52%,#BE46D0_100%)]",
            wordmarkClassName,
          )}
        >
          SafarSafe
        </span>
      )}
    </span>
  );
}
