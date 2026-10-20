"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { useIntro } from "@/components/intro-provider";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

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
  const { ready } = useIntro();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -28, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : { y: -28, opacity: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="fixed inset-x-0 top-3 z-50 flex justify-center px-4 sm:top-4"
      >
        <div
          className={cn(
            "flex h-[52px] w-full max-w-[1120px] items-center justify-between rounded-full pl-4 pr-2.5",
            "transition-all duration-500 ease-out",
            scrolled
              ? "bg-white/70 shadow-soft ring-1 ring-black/[0.05] backdrop-blur-xl backdrop-saturate-150"
              : "bg-white/45 ring-1 ring-white/40 backdrop-blur-md",
          )}
        >
          {/* Logo lockup */}
          <Link
            href="/"
            aria-label="SafarSafe home"
            className="shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Logo
              markClassName="h-9 w-9"
              wordmarkClassName="text-[1.08rem]"
              priority
            />
          </Link>

          {/* Desktop links */}
          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-[13.5px] font-medium text-muted-foreground",
                  "transition-colors duration-200 hover:bg-black/[0.04] hover:text-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-1.5">
            <Button
              variant="primary"
              size="sm"
              className="hidden h-9 px-5 sm:inline-flex"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Join Beta
            </Button>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full text-foreground/80 lg:hidden",
                "transition-colors duration-200 hover:bg-black/[0.05]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              )}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -40, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 40, opacity: 0 }}
                    transition={{ duration: 0.16 }}
                    className="flex"
                  >
                    <X size={18} strokeWidth={2} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 40, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -40, opacity: 0 }}
                    transition={{ duration: 0.16 }}
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

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-foreground/5 backdrop-blur-[2px] lg:hidden"
              aria-hidden="true"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              key="sheet"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.24, ease: EASE }}
              className={cn(
                "fixed inset-x-4 top-[72px] z-40 overflow-hidden rounded-3xl lg:hidden",
                "bg-white/85 shadow-card ring-1 ring-black/[0.05] backdrop-blur-xl",
              )}
            >
              <nav className="flex flex-col gap-0.5 p-3" aria-label="Mobile">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.035, duration: 0.26 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center rounded-2xl px-4 py-3 text-[15px] font-medium text-foreground/80 transition-colors hover:bg-black/[0.04] hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-1.5 px-1 pb-1 pt-2">
                  <Button
                    variant="primary"
                    className="h-11 w-full"
                    onClick={() => {
                      setMenuOpen(false);
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Join Beta
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
