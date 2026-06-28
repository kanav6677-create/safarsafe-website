"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Particles } from "@/components/particles";
import { cn } from "@/lib/utils";

// ─── Animation presets ────────────────────────────────────────────────────────

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number];

const STAGGER: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.25 },
  },
};

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE_OUT_EXPO },
  },
};

// ─── Floating glass badge cards data ─────────────────────────────────────────

type BadgeData = {
  label: string;
  sub: string;
  className: string;
  delay: number;
  floatDuration: number;
  floatDelay: number;
};

const BADGES: BadgeData[] = [
  {
    label: "AI Safety Intelligence",
    sub: "Real-time threat assessment",
    // Floats top-right of the mockup area
    className: "top-10 right-0 sm:-right-4",
    delay: 0.82,
    floatDuration: 6.5,
    floatDelay: 0,
  },
  {
    label: "Community Verified",
    sub: "Trusted by thousands",
    // Floats left-center; hidden on small screens to keep layout clean
    className: "hidden md:flex top-[44%] -translate-y-1/2 left-0",
    delay: 0.95,
    floatDuration: 7.5,
    floatDelay: 1.2,
  },
  {
    label: "Privacy First",
    sub: "Your data stays yours",
    className: "bottom-[88px] right-0 sm:-right-6",
    delay: 1.06,
    floatDuration: 8.2,
    floatDelay: 0.5,
  },
  {
    label: "Real Time Alerts",
    sub: "Stay informed always",
    // Bottom-left; hidden on small screens
    className: "hidden md:flex bottom-10 left-6",
    delay: 1.16,
    floatDuration: 5.8,
    floatDelay: 1.8,
  },
];

// ─── GlassCard subcomponent ───────────────────────────────────────────────────

function GlassCard({ badge }: { badge: BadgeData }) {
  return (
    <motion.div
      className={cn("absolute z-10", badge.className)}
      initial={{ opacity: 0, scale: 0.84, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.52, ease: EASE_OUT_EXPO, delay: badge.delay }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: badge.floatDuration,
          ease: "easeInOut",
          delay: badge.floatDelay,
        }}
        className={cn(
          "flex flex-col gap-[3px] px-3.5 py-2.5 rounded-[14px]",
          "bg-[hsl(222_47%_11%/0.7)] backdrop-blur-2xl",
          "shadow-[0_0_0_1px_rgba(255,255,255,0.09),0_12px_40px_rgba(0,0,0,0.42)]"
        )}
      >
        <span className="whitespace-nowrap text-[11.5px] font-semibold leading-snug text-foreground">
          {badge.label}
        </span>
        <span className="whitespace-nowrap text-[10px] text-muted-foreground">
          {badge.sub}
        </span>
      </motion.div>
    </motion.div>
  );
}

// ─── App mockup subcomponent ──────────────────────────────────────────────────

function AppMockup() {
  return (
    <motion.div
      animate={{ y: [0, -7, 0] }}
      transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      className={cn(
        "relative overflow-hidden rounded-[28px]",
        "bg-[hsl(222_47%_11%/0.82)] backdrop-blur-md",
        "shadow-[0_40px_90px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)]"
      )}
    >
      {/* App top bar */}
      <div className="flex h-[52px] items-center border-b border-white/[0.07] px-5">
        <div className="flex items-center gap-2.5">
          <div className="h-6 w-6 shrink-0 rounded-lg bg-gradient-to-br from-primary to-secondary" />
          <span className="text-[13px] font-semibold tracking-tight text-foreground/90">
            SafarSafe
          </span>
        </div>
        <div className="ml-auto flex gap-1.5">
          <div className="h-7 w-7 rounded-[9px] border border-white/[0.07] bg-white/[0.05]" />
          <div className="h-7 w-7 rounded-[9px] border border-white/[0.07] bg-white/[0.05]" />
        </div>
      </div>

      {/* App body */}
      <div className="flex flex-col gap-3.5 p-5">
        {/* Route / map visualization */}
        <div className="relative h-[110px] overflow-hidden rounded-[18px] border border-white/[0.07] bg-gradient-to-br from-primary/[0.13] via-transparent to-secondary/[0.09]">
          {/* Subtle inner grid */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)," +
                "linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          {/* Route path SVG */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 240 110"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="ss-route-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(221, 83%, 53%)" stopOpacity="0.95" />
                <stop offset="100%" stopColor="hsl(262, 83%, 58%)" stopOpacity="0.95" />
              </linearGradient>
            </defs>
            <path
              d="M 14 90 C 50 90 62 22 102 22 S 162 62 202 54 S 226 46 228 46"
              stroke="url(#ss-route-grad)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="14" cy="90" r="4" fill="hsl(221, 83%, 53%)" />
            <circle cx="228" cy="46" r="4" fill="hsl(262, 83%, 58%)" />
          </svg>
          {/* Safe route badge */}
          <div className="absolute right-3 top-2.5 flex items-center gap-1.5 rounded-[10px] border border-white/[0.09] bg-[hsl(222_47%_11%/0.78)] px-2.5 py-1.5 backdrop-blur-sm">
            <span
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
              style={{ boxShadow: "0 0 6px rgb(52 211 153 / 0.8)" }}
            />
            <span className="text-[10px] font-semibold text-foreground/85">Safe Route</span>
          </div>
        </div>

        {/* Title skeleton */}
        <div className="flex flex-col gap-1.5">
          <div className="h-[10px] w-[58%] rounded-full bg-white/[0.09]" />
          <div className="h-[8px] w-[78%] rounded-full bg-white/[0.06]" />
        </div>

        {/* Safety item rows */}
        {([
          "rgba(52,211,153,0.18)",
          "hsla(221,83%,53%,0.20)",
          "hsla(262,83%,58%,0.20)",
        ] as const).map((accent, i) => (
          <div
            key={i}
            className="flex h-9 items-center gap-3 rounded-[12px] border border-white/[0.06] bg-white/[0.04] px-3"
          >
            <div className="h-5 w-5 shrink-0 rounded-md bg-white/[0.08]" />
            <div className="h-1.5 flex-1 rounded-full bg-white/[0.07]" />
            <div
              className="h-3.5 w-9 shrink-0 rounded-full"
              style={{ background: accent }}
            />
          </div>
        ))}
      </div>

      {/* Bottom nav bar */}
      <div className="flex items-center justify-around border-t border-white/[0.07] px-5 py-3.5">
        {[true, false, false, false].map((active, i) => (
          <div
            key={i}
            className={cn(
              "h-6 w-6 rounded-[9px]",
              active ? "bg-primary/45 shadow-[0_0_10px_hsl(var(--primary)/0.35)]" : "bg-white/[0.07]"
            )}
          />
        ))}
      </div>

      {/* Gradient fade over content */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[hsl(222_47%_11%/0.9)] to-transparent" />
    </motion.div>
  );
}

// ─── Hero section ─────────────────────────────────────────────────────────────

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Mouse parallax — raw values, spring-smoothed
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 44, damping: 24 });
  const springY = useSpring(rawY, { stiffness: 44, damping: 24 });

  // Layered transforms at different depths
  const blob1X = useTransform(springX, (v) => v * 0.55);
  const blob1Y = useTransform(springY, (v) => v * 0.55);
  const blob2X = useTransform(springX, (v) => -v * 0.38);
  const blob2Y = useTransform(springY, (v) => -v * 0.38);
  const mockX = useTransform(springX, (v) => v * 0.28);
  const mockY = useTransform(springY, (v) => v * 0.28);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    rawX.set(((e.clientX - left - width / 2) / width) * 26);
    rawY.set(((e.clientY - top - height / 2) / height) * 26);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-dvh items-center"
    >
      {/* ── Background layer ─────────────────────────────────────── */}

      {/* Blob overflow clip — isolated so content is never clipped */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Primary blue blob — top-left */}
        <motion.div
          style={{ x: blob1X, y: blob1Y }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.22, 0.34, 0.22] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 -top-48 h-[700px] w-[700px] rounded-full bg-primary/25 blur-[140px]"
        />
        {/* Secondary purple blob — bottom-right */}
        <motion.div
          style={{ x: blob2X, y: blob2Y }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.16, 0.26, 0.16] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute -bottom-56 -right-16 h-[820px] w-[820px] rounded-full bg-secondary/20 blur-[160px]"
        />
        {/* Accent pink — center-left */}
        <div className="absolute left-[32%] top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[110px]" />
      </div>

      {/* Dot-grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 hero-grid opacity-[0.22]"
        aria-hidden="true"
      />

      {/* Particle canvas */}
      <Particles />

      {/* ── Content grid ─────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-20 pt-[7.5rem] sm:px-8 lg:flex lg:min-h-dvh lg:items-center lg:px-16 lg:py-0 xl:px-24">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2 lg:gap-10 xl:gap-20">

          {/* ── Left: Copy ───────────────────────────────────────── */}
          <motion.div
            variants={STAGGER}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-7"
          >
            {/* Status pill */}
            <motion.div variants={FADE_UP}>
              <span className="inline-flex h-7 items-center gap-2 rounded-full border border-primary/32 bg-primary/[0.09] px-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary select-none">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                Now accepting beta applications
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={FADE_UP} className="flex flex-col gap-2.5">
              <h1 className="text-[2.5rem] font-bold leading-[1.08] tracking-[-0.025em] text-foreground sm:text-[3rem] lg:text-[3.25rem] xl:text-[3.8rem]">
                AI Powered{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Women&apos;s Travel
                </span>{" "}
                Safety Platform
              </h1>
              <p className="text-xl font-light italic tracking-wide text-muted-foreground sm:text-2xl">
                Har Safar. Thoda Zyada Safe.
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={FADE_UP}
              className="max-w-[500px] text-[15px] leading-[1.8] text-muted-foreground"
            >
              SafarSafe combines AI-powered threat intelligence with a verified community
              network — so every woman can understand the safety landscape before she
              travels, and find support exactly when she needs it most.
            </motion.p>

            {/* CTA row */}
            <motion.div
              variants={FADE_UP}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <Button
                size="lg"
                className="h-12 gap-2 rounded-xl px-7 text-[14px] font-medium shadow-[0_0_24px_hsl(var(--primary)/0.30)] group"
              >
                Join the Beta
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 gap-2 rounded-xl px-6 text-[14px] font-medium group"
              >
                Explore Features
                <ChevronRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Button>
            </motion.div>
          </motion.div>

          {/* ── Right: App mockup ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 38 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: EASE_OUT_EXPO, delay: 0.38 }}
            style={{ x: mockX, y: mockY }}
            className="relative flex h-[560px] items-center justify-center sm:h-[580px] lg:h-[640px] xl:h-[700px]"
          >
            {/* Ambient glow behind the card stack */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
            >
              <div className="h-72 w-72 rounded-full bg-primary/[0.11] blur-[88px]" />
            </div>

            {/* Card stack — back/mid extend above the front using bottom:0 anchor */}
            <div className="relative w-[255px] select-none sm:w-[280px] lg:w-[268px] xl:w-[298px]">
              {/* Card 3 — furthest back */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 7.8, ease: "easeInOut", delay: 1 }}
                className="absolute -top-10 bottom-0 left-10 right-10 rounded-[28px] border border-white/[0.07] bg-gradient-to-b from-secondary/[0.14] to-transparent"
              />
              {/* Card 2 — middle */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 6.8, ease: "easeInOut", delay: 0.4 }}
                className="absolute -top-5 bottom-0 left-5 right-5 rounded-[28px] border border-white/[0.08] bg-gradient-to-b from-primary/[0.11] to-transparent"
              />
              {/* Card 1 — front, determines natural height */}
              <AppMockup />
            </div>

            {/* Floating glass badges */}
            {BADGES.map((badge) => (
              <GlassCard key={badge.label} badge={badge} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
