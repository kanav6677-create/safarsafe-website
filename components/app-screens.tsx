import {
  Search,
  ShieldCheck,
  Navigation,
  Users,
  MapPin,
  Lock,
  Bookmark,
  ChevronRight,
  Phone,
  Share2,
  BadgeCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────────────
   In-app screens, authored in code so they render crisp at any density and
   stay perfectly on-brand with the light theme. Each is sized to sit inside
   the IPhoneMockup frame. Swap for real exported screenshots when available.
   ───────────────────────────────────────────────────────────────────────── */

// ── Map / safe route ────────────────────────────────────────────────────────

export function MapScreen() {
  return (
    <div className="flex h-full flex-col bg-[#eef1f8]">
      {/* Search */}
      <div className="px-3 pb-2 pt-9">
        <div className="flex h-9 items-center gap-2 rounded-full bg-white px-3 shadow-soft">
          <Search size={13} className="text-muted-foreground" />
          <span className="text-[10.5px] font-medium text-muted-foreground">
            Where are you headed?
          </span>
        </div>
      </div>

      {/* Map canvas */}
      <div className="relative flex-1 overflow-hidden">
        <svg
          viewBox="0 0 220 360"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id="ss-route" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>

          {/* Blocks / parks */}
          <rect x="0" y="0" width="220" height="360" fill="#e7ecf6" />
          <rect x="14" y="20" width="78" height="70" rx="9" fill="#eef2fa" />
          <rect x="120" y="16" width="86" height="58" rx="9" fill="#e3efe7" />
          <rect x="22" y="120" width="70" height="84" rx="9" fill="#eef2fa" />
          <rect x="126" y="108" width="80" height="92" rx="9" fill="#eef2fa" />
          <rect x="14" y="236" width="92" height="96" rx="9" fill="#e9eefa" />
          <rect x="132" y="232" width="74" height="104" rx="9" fill="#e3efe7" />

          {/* Roads */}
          <g stroke="#d4dcec" strokeWidth="7" strokeLinecap="round">
            <line x1="0" y1="104" x2="220" y2="104" />
            <line x1="0" y1="220" x2="220" y2="220" />
            <line x1="108" y1="0" x2="108" y2="360" />
          </g>

          {/* Safe zone halo */}
          <circle cx="150" cy="150" r="46" fill="#22c55e" fillOpacity="0.1" />

          {/* Route */}
          <path
            d="M44 300 C 70 250 60 210 108 196 S 160 150 150 110 S 150 70 168 56"
            fill="none"
            stroke="url(#ss-route)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Start */}
          <circle cx="44" cy="300" r="7" fill="#fff" stroke="#2563EB" strokeWidth="3" />
          {/* Destination pin */}
          <g transform="translate(168 56)">
            <path
              d="M0 -14 C-8 -14 -13 -8 -13 -1 C-13 8 0 18 0 18 C0 18 13 8 13 -1 C13 -8 8 -14 0 -14 Z"
              fill="#7C3AED"
            />
            <circle cx="0" cy="-1" r="4.5" fill="#fff" />
          </g>
        </svg>

        {/* Current location chip */}
        <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1.5 shadow-soft backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="text-[9px] font-semibold text-foreground/80">
            Safe area
          </span>
        </div>
      </div>

      {/* Bottom sheet */}
      <div className="rounded-t-3xl bg-white px-4 pb-4 pt-3 shadow-[0_-12px_30px_-18px_rgba(31,41,80,0.25)]">
        <div className="mx-auto mb-3 h-1 w-9 rounded-full bg-black/10" />
        <div className="mb-3 flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10">
            <ShieldCheck size={15} className="text-primary" />
          </div>
          <div className="leading-tight">
            <p className="text-[11.5px] font-semibold text-foreground">
              Safest route found
            </p>
            <p className="text-[9.5px] text-muted-foreground">
              Well-lit · busy streets · 14 min
            </p>
          </div>
        </div>
        <div className="flex h-9 items-center justify-center gap-1.5 rounded-full bg-foreground text-[11px] font-semibold text-background">
          <Navigation size={12} />
          Start journey
        </div>
      </div>
    </div>
  );
}

// ── Profile ─────────────────────────────────────────────────────────────────

const PROFILE_ROWS = [
  { icon: Users, label: "Trusted contacts", tint: "text-primary bg-primary/10" },
  { icon: MapPin, label: "Travel preferences", tint: "text-secondary bg-secondary/10" },
  { icon: Lock, label: "Privacy & sharing", tint: "text-accent bg-accent/10" },
  { icon: Bookmark, label: "Saved places", tint: "text-emerald-600 bg-emerald-500/10" },
] as const;

export function ProfileScreen() {
  return (
    <div className="flex h-full flex-col bg-[#fafbfe]">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/[0.14] via-secondary/[0.1] to-accent/[0.14] px-4 pb-5 pt-10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent text-lg font-semibold text-white shadow-soft">
              A
            </div>
            <BadgeCheck
              size={18}
              className="absolute -bottom-1 -right-1 rounded-full bg-white text-primary"
            />
          </div>
          <div className="leading-tight">
            <p className="font-heading text-[14px] font-semibold text-foreground">
              Aanya Sharma
            </p>
            <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-white/70 px-2 py-0.5 text-[8.5px] font-semibold text-foreground/70">
              Women-first · Verified
            </span>
          </div>
        </div>
      </div>

      {/* Rows */}
      <div className="flex-1 space-y-1.5 px-3 py-3">
        {PROFILE_ROWS.map((row) => (
          <div
            key={row.label}
            className="flex h-12 items-center gap-3 rounded-2xl bg-white px-3 shadow-soft"
          >
            <span
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-xl",
                row.tint,
              )}
            >
              <row.icon size={15} />
            </span>
            <span className="flex-1 text-[11.5px] font-medium text-foreground">
              {row.label}
            </span>
            <ChevronRight size={14} className="text-muted-foreground" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Emergency / trusted contacts ─────────────────────────────────────────────

const CONTACTS = [
  { initial: "M", name: "Maa", relation: "Family", tint: "from-primary to-secondary" },
  { initial: "R", name: "Riya", relation: "Sister", tint: "from-secondary to-accent" },
  { initial: "N", name: "Neha", relation: "Best friend", tint: "from-accent to-primary" },
] as const;

export function EmergencyScreen() {
  return (
    <div className="flex h-full flex-col bg-[#fafbfe]">
      {/* Header */}
      <div className="px-4 pb-3 pt-10">
        <p className="font-heading text-[14px] font-semibold text-foreground">
          Trusted contacts
        </p>
        <p className="text-[9.5px] text-muted-foreground">
          They&apos;re alerted the moment you need help
        </p>
      </div>

      {/* Contacts */}
      <div className="flex-1 space-y-1.5 px-3">
        {CONTACTS.map((c) => (
          <div
            key={c.name}
            className="flex h-[52px] items-center gap-3 rounded-2xl bg-white px-3 shadow-soft"
          >
            <div
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br text-[12px] font-semibold text-white",
                c.tint,
              )}
            >
              {c.initial}
            </div>
            <div className="flex-1 leading-tight">
              <p className="text-[11.5px] font-semibold text-foreground">
                {c.name}
              </p>
              <p className="text-[9px] text-muted-foreground">{c.relation}</p>
            </div>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Phone size={13} />
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/[0.04] text-foreground/60">
              <Share2 size={13} />
            </span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="space-y-2 px-3 pb-4 pt-3">
        <div className="flex h-9 items-center justify-center gap-1.5 rounded-full bg-black/[0.04] text-[10.5px] font-semibold text-foreground/70">
          <Share2 size={12} />
          Share live location
        </div>
        <div
          className="flex h-11 items-center justify-center gap-2 rounded-full text-[12px] font-semibold text-white shadow-soft"
          style={{
            backgroundImage: "linear-gradient(135deg, #EC4899, #F43F5E)",
          }}
        >
          <ShieldCheck size={15} />
          Hold for SOS
        </div>
      </div>
    </div>
  );
}
