import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Premium iPhone mockup with realistic proportions, rounded corners, a
 * Dynamic Island, a subtle screen reflection and a soft shadow.
 *
 * Renders the uploaded app screenshot exactly as provided, no generated
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
        "bg-gradient-to-b from-[#3a3c42] via-[#1c1d21] to-[#0c0d10] shadow-phone",
        className,
      )}
    >
      {/* Polished titanium edge: outer hairline + inner light catch */}
      <div className="pointer-events-none absolute inset-0 rounded-[2.7rem] ring-1 ring-inset ring-white/20" />
      <div className="pointer-events-none absolute inset-[3px] rounded-[2.55rem] ring-1 ring-inset ring-black/40" />

      {/* Side buttons */}
      <div
        aria-hidden="true"
        className="absolute -left-[2px] top-[112px] h-7 w-[2px] rounded-l bg-[#2a2b2f]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-[2px] top-[152px] h-12 w-[2px] rounded-l bg-[#2a2b2f]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-[2px] top-[206px] h-12 w-[2px] rounded-l bg-[#2a2b2f]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-[2px] top-[176px] h-16 w-[2px] rounded-r bg-[#2a2b2f]"
      />

      {/* Screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[2.15rem] bg-black">
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          sizes="248px"
          className="object-cover"
          priority={priority}
        />

        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-2.5 z-20 h-[24px] w-[82px] -translate-x-1/2 rounded-full bg-black" />

        {/* Soft top-down screen light + diagonal reflection (no glow) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 12%), linear-gradient(125deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 13%, rgba(255,255,255,0) 30%)",
          }}
        />
      </div>
    </div>
  );
}
