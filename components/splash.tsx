"use client";

import { motion } from "framer-motion";

import { LogoMark } from "@/components/logo";

/**
 * Launch animation: Apple / Arc / Linear style.
 *
 * Pure white background. Only the official transparent SVG logo.
 * No glow, no shadow, no particles, no blur bursts, no colored background.
 *
 * Timeline  (TOTAL = 3.4 s):
 *   0.0 s – 1.8 s   logo fades in,  scale 0.88 → 1.00   (T[1] = 0.53)
 *   1.8 s – 2.7 s   logo holds perfectly still            (T[2] = 0.79)
 *   2.7 s – 3.4 s   logo fades out toward navbar          (T[3] = 1.00)
 *
 * Skipped entirely under prefers-reduced-motion (handled in IntroProvider).
 */

// Total duration in seconds.
const TOTAL = 3.4;

// Normalised keyframe stops (each ÷ TOTAL).
//  0.0 s = 0.00  |  1.8 s = 0.53  |  2.7 s = 0.79  |  3.4 s = 1.00
const T = [0, 0.53, 0.79, 1] as const;

export function Splash({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{
        duration: TOTAL,
        times: [0, T[2], 1],
        ease: "easeInOut",
      }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 0 }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0.88, 1, 1, 0.44],
          y: [0, 0, 0, -180],
        }}
        transition={{
          duration: TOTAL,
          times: [...T],
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* h-64 = 256 px ≈ 45 % larger than the previous h-44 = 176 px */}
        <LogoMark className="h-64 w-64" sizes="280px" priority />
      </motion.div>
    </motion.div>
  );
}
