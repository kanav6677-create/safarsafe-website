import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Single source of truth for the official SafarSafe logo file.
 *
 * TODO(assets): Add the official logo export at this exact path:
 *   public/images/logo/safarsafe-logo.png
 * Use the uploaded brand asset as-is. Do not substitute or recreate it.
 */
export const LOGO_SRC = "/images/logo/safarsafe-logo.png";

/**
 * The official SafarSafe logo mark.
 * Renders the uploaded brand asset only — never a generated stand-in.
 */
export function LogoMark({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <span className={cn("relative inline-block h-9 w-9", className)}>
      <Image
        src={LOGO_SRC}
        alt="SafarSafe"
        fill
        sizes="120px"
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
            "font-heading text-[1.15rem] font-semibold tracking-[-0.02em] text-foreground",
            wordmarkClassName,
          )}
        >
          SafarSafe
        </span>
      )}
    </span>
  );
}
