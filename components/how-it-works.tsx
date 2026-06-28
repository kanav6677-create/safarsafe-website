"use client";

import React from "react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const STEPS: { step: string; title: string; body: React.ReactNode }[] = [
  {
    step: "01",
    title: "Choose Destination",
    body: (
      <>
        Enter where you want to go. SafarSafe immediately begins{" "}
        <span className="font-semibold text-foreground/90">analysing your options</span>.
      </>
    ),
  },
  {
    step: "02",
    title: "Compare Safer Routes",
    body: (
      <>
        Review routes ranked by{" "}
        <span className="font-semibold text-foreground/90">safety score</span>, not just distance
        or time.
      </>
    ),
  },
  {
    step: "03",
    title: "Share Your Journey",
    body: (
      <>
        Let trusted contacts follow your trip{" "}
        <span className="font-semibold text-foreground/90">in real time</span> before you set off.
      </>
    ),
  },
  {
    step: "04",
    title: "Travel Safely",
    body: (
      <>
        Navigate with confidence, knowing{" "}
        <span className="font-semibold text-foreground/90">help is always one tap away</span>.
      </>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="journey" className="relative py-14 sm:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">

        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.01em] text-foreground/70 shadow-soft ring-1 ring-black/[0.04] backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-secondary to-accent" />
            How It Works
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-balance text-[2.1rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-[2.6rem]"
          >
            From destination to{" "}
            <span className="bg-[linear-gradient(115deg,#7C3AED_0%,#DB2777_52%,#EC4899_100%)] bg-clip-text text-transparent">
              safe arrival.
            </span>
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-4"
        >
          {STEPS.map(({ step, title, body }, i) => (
            <motion.div
              key={step}
              variants={fadeUp}
              className="relative flex flex-col gap-5 rounded-2xl bg-white/50 p-8 ring-1 ring-border backdrop-blur"
            >
              {/* Connector line (hidden on last) */}
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute right-0 top-10 hidden h-px w-px translate-x-full lg:block"
                />
              )}

              {/* Step number */}
              <span className="font-numeric text-[2.4rem] font-semibold leading-none tracking-[-0.04em] text-foreground/10">
                {step}
              </span>

              <div>
                <h3 className="text-[15px] font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.75] text-muted-foreground">{body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
