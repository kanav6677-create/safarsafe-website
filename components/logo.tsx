import { cn } from "@/lib/utils";

/**
 * SafarSafe brand mark.
 *
 * An app-icon style squircle carrying a location pin whose negative space
 * forms a heart — pairing "place / journey" with "care / women-first".
 * Rendered as inline SVG so it stays crisp at any size and the gradient
 * can be reused as the brand's visual identity across the site.
 *
 * NOTE: This is a code-authored mark. To swap in an exported brand asset
 * later, drop it in `public/images/logo/` and render via next/image.
 */
export function LogoMark({
  className,
  gradientId = "ss-mark-gradient",
}: {
  className?: string;
  gradientId?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label="SafarSafe"
      className={cn("h-9 w-9", className)}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="52%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>

      {/* Squircle tile */}
      <rect x="0" y="0" width="100" height="100" rx="27" fill={`url(#${gradientId})`} />
      {/* Soft top highlight for depth */}
      <rect
        x="0"
        y="0"
        width="100"
        height="100"
        rx="27"
        fill="white"
        fillOpacity="0.12"
        style={{ mixBlendMode: "soft-light" }}
      />

      {/* Pin + heart cutout (evenodd makes the heart a transparent hole) */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="white"
        d="M50 23 C36 23 25 34 25 48.5 C25 67 50 82 50 82 C50 82 75 67 75 48.5 C75 34 64 23 50 23 Z
           M50 57 C46 52.2 38 48.4 38 42.2 C38 38.6 40.8 36 44.1 36 C46.3 36 48.7 37.2 50 39.4 C51.3 37.2 53.7 36 55.9 36 C59.2 36 62 38.6 62 42.2 C62 48.4 54 52.2 50 57 Z"
      />
    </svg>
  );
}

/**
 * Full lockup: mark + "SafarSafe" wordmark.
 */
export function Logo({
  className,
  markClassName,
  wordmarkClassName,
  showWordmark = true,
  gradientId,
}: {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
  gradientId?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={markClassName} gradientId={gradientId} />
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
