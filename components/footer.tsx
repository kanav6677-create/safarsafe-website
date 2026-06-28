import Link from "next/link";
import { Logo } from "@/components/logo";

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#journey", label: "How It Works" },
  { href: "#achievements", label: "Achievements" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-[1180px] px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto]">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label="SafarSafe home">
              <Logo />
            </Link>
            <p className="max-w-[22rem] text-[13.5px] leading-relaxed text-muted-foreground">
              Real-time preventive safety for women commuters in urban India.
            </p>

            <a
              href="https://instagram.com/safarsafe_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SafarSafe on Instagram"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              <InstagramIcon size={14} />
              @safarsafe_
            </a>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-3">
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-foreground/40">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[13.5px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-foreground/40">
              Legal
            </p>
            <ul className="flex flex-col gap-2">
              {LEGAL_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[13.5px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-[12.5px] text-muted-foreground">
            &copy; {year} SafarSafe. All rights reserved.
          </p>
          <p className="text-[12.5px] text-muted-foreground">
            Made with care in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
