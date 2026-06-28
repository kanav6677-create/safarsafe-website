"use client";

import { motion } from "framer-motion";

import { LogoMark } from "@/components/logo";

/**
 * Launch animation: on a clean white field the mark fades in and scales
 * from 80% to 100% with a soft blue/pink glow blooming behind it, holds
 * briefly, then shrinks upward as the whole field dissolves to reveal the
 * homepage. Softer and calmer than a Netflix/Apple launch, but the same
 * idea — one deliberate gesture, no noise.
 */
export function Splash({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 1, 0] }}
      transition={{ duration: 2.0, times: [0, 0.5, 0.82, 1], ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      <div className="relative flex items-center justify-center">
        {/* Soft blue + pink glow bloom */}
        <motion.div
          className="pointer-events-none absolute h-[260px] w-[260px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 38% 38%, rgba(37,99,235,0.30), transparent 62%), radial-gradient(circle at 66% 64%, rgba(236,72,153,0.28), transparent 60%)",
          }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.7, 1.05, 1.05, 0.85] }}
          transition={{
            duration: 2.0,
            times: [0, 0.32, 0.76, 1],
            ease: "easeInOut",
          }}
        />

        {/* The mark itself */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8, y: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.8, 1, 1, 0.42],
            y: [0, 0, 0, -116],
          }}
          transition={{
            duration: 2.0,
            times: [0, 0.3, 0.74, 1],
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <LogoMark
            gradientId="ss-splash-gradient"
            className="h-24 w-24 drop-shadow-[0_16px_40px_rgba(124,58,237,0.28)]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
