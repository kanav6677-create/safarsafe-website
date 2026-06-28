import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Premium iPhone mockup with realistic proportions, rounded corners, a
 * Dynamic Island, a subtle screen reflection and a soft shadow.
 *
 * Renders the uploaded app screenshot exactly as provided — no generated
 * or fake interfaces.
 */
export function IPhoneMockup({
  screenshot,
  className,
  priority = false,
}: {
  screenshot: { src: string; alt: string };
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19.5] w-[244px] rounded-[2.7rem] p-[10px]",
        "bg-gradient-to-b from-[#2b2d33] to-[#0e0f12] shadow-phone",
        className,
      )}
    >
      {/* Thin polished metal edge */}
      <div className="pointer-events-none absolute inset-0 rounded-[2.7rem] ring-1 ring-inset ring-white/15" />

      {/* Screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[2.15rem] bg-black">
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          sizes="244px"
          className="object-cover"
          priority={priority}
        />

        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-2.5 z-20 h-[24px] w-[82px] -translate-x-1/2 rounded-full bg-black" />

        {/* Subtle diagonal reflection (very low opacity, no glow) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(125deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 14%, rgba(255,255,255,0) 32%)",
          }}
        />
      </div>
    </div>
  );
}
