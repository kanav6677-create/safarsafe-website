"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number];

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#journey", label: "Journey" },
  { href: "#achievements", label: "Achievements" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when viewport widens past lg breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* ── Floating header bar ─────────────────────────────────── */}
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.72, ease: EASE_OUT_EXPO }}
        className={cn(
          "fixed top-4 left-4 right-4 z-50 rounded-2xl",
          "md:left-6 md:right-6 lg:left-8 lg:right-8",
          "transition-all duration-500 ease-out",
          scrolled
            ? [
                "bg-[hsl(231_63%_5%/0.75)] backdrop-blur-2xl",
                "border border-[hsl(217_33%_18%/0.7)]",
                "shadow-[0_8px_48px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)]",
              ].join(" ")
            : [
                "bg-white/[0.03] backdrop-blur-sm",
                "border border-white/[0.07]",
              ].join(" ")
        )}
      >
        <div className="flex h-[60px] items-center justify-between px-4 md:px-5">
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
          >
            {/* Logomark */}
            <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-[10px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent" />
              {/* Inner highlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="relative z-10 h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M12 3C8 3 5 6 5 9c0 5 7 12 7 12s7-7 7-12c0-3-2.686-6-7-6Z"
                  fill="white"
                  fillOpacity="0.95"
                />
              </svg>
            </div>
            <span className="text-[15px] font-semibold tracking-tight text-foreground">
              SafarSafe
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3.5 py-2 rounded-xl text-[13px] font-medium",
                  "text-muted-foreground hover:text-foreground",
                  "hover:bg-white/[0.06] transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: CTA + mobile trigger */}
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className={cn(
                "hidden sm:inline-flex h-9 rounded-xl px-5 text-[13px] font-medium",
                "shadow-[0_0_20px_hsl(var(--primary)/0.25)]"
              )}
            >
              Join Beta
            </Button>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className={cn(
                "lg:hidden flex h-9 w-9 items-center justify-center rounded-xl",
                "text-muted-foreground hover:text-foreground",
                "hover:bg-white/[0.07] transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    className="flex"
                  >
                    <X size={18} strokeWidth={2} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 45, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -45, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    className="flex"
                  >
                    <Menu size={18} strokeWidth={2} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile menu drawer ──────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.24, ease: EASE_OUT_EXPO }}
            className={cn(
              "fixed left-4 right-4 z-40 overflow-hidden rounded-2xl",
              "md:left-6 md:right-6",
              "top-[80px]",
              "border border-[hsl(var(--border)/0.6)]",
              "bg-[hsl(222_47%_11%/0.88)] backdrop-blur-2xl",
              "shadow-[0_24px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04)]"
            )}
          >
            <nav className="flex flex-col gap-0.5 p-3" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.28, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "flex items-center px-4 py-3 rounded-xl",
                      "text-sm font-medium text-muted-foreground",
                      "hover:text-foreground hover:bg-white/[0.06]",
                      "transition-all duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: NAV_LINKS.length * 0.04 + 0.06, duration: 0.28 }}
                className="mt-1.5 border-t border-[hsl(var(--border)/0.5)] pt-3"
              >
                <Button className="h-11 w-full rounded-xl font-medium">
                  Join Beta
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop to close menu when tapping outside */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 lg:hidden"
            aria-hidden="true"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
