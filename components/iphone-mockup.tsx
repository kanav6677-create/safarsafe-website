import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Realistic iPhone frame. Pass `screenshot` to drop in a real exported
 * app screenshot later, or `children` to render an in-code app screen.
 */
export function IPhoneMockup({
  children,
  screenshot,
  className,
}: {
  children?: ReactNode;
  screenshot?: { src: string; alt: string };
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19.5] w-[244px] rounded-[2.6rem] p-[9px]",
        "bg-gradient-to-b from-[#eceef3] to-[#c9cdd7] shadow-phone",
        className,
      )}
    >
      {/* Subtle metal edge highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-[2.6rem] ring-1 ring-inset ring-white/50" />

      <div className="relative h-full w-full overflow-hidden rounded-[2.15rem] bg-white">
        {/* Dynamic island */}
        <div className="absolute left-1/2 top-2 z-30 h-[22px] w-[76px] -translate-x-1/2 rounded-full bg-black/90" />

        {screenshot ? (
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            fill
            sizes="244px"
            className="object-cover"
            priority
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
}
