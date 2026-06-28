"use client";

import { motion } from "framer-motion";

import { LogoMark } from "@/components/logo";

/**
 * Launch animation — clean and brand-only.
 *
 * White field, only the official logo. It fades in while scaling 0.9 → 1,
 * pauses briefly, then shrinks upward toward the navbar as the field
 * dissolves and the homepage fades in. No glow, no neon, no particles.
 *
 * Skipped entirely under prefers-reduced-motion (handled in IntroProvider).
 */
export function Splash({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 1, 0] }}
      transition={{ duration: 1.4, times: [0, 0.6, 0.82, 1], ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 0 }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0.9, 1, 1, 0.46],
          y: [0, 0, 0, -118],
        }}
        transition={{
          duration: 1.4,
          times: [0, 0.32, 0.66, 1],
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <LogoMark className="h-24 w-24" priority />
      </motion.div>
    </motion.div>
  );
}
