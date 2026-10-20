"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Shield } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const CARDS = [
  {
    icon: MapPin,
    label: "AI Route Intelligence",
    desc: "Smarter routes based on real safety data and live conditions.",
  },
  {
    icon: Users,
    label: "Community Verified",
    desc: "Insights from women who travel these same routes every day.",
  },
  {
    icon: Shield,
    label: "Privacy First",
    desc: "Your identity stays protected while you travel and share.",
  },
];

const VALUES: { title: string; body: React.ReactNode }[] = [
  {
    title: "AI Intelligence",
    body: (
      <>
        SafarSafe analyses{" "}
        <span className="font-semibold text-foreground/90">multiple travel factors</span> before
        recommending safer routes.
      </>
    ),
  },
  {
    title: "Community Powered",
    body: (
      <>
        <span className="font-semibold text-foreground/90">Verified reports</span> help everyone
        make better travel decisions.
      </>
    ),
  },
  {
    title: "Privacy First",
    body: (
      <>
        Your{" "}
        <span className="font-semibold text-foreground/90">identity stays protected</span> while
        travelling and sharing safety information.
      </>
    ),
  },
];

export function About() {
  return (
    <section id="about" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">

        {/* ── Two-column split ──────────────────────────────── */}
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Left — copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white/70 px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.01em] text-foreground/70 shadow-soft ring-1 ring-black/[0.04] backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-secondary to-accent" />
              About SafarSafe
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-6 text-balance text-[2.1rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-[2.6rem]"
            >
              Helping women travel{" "}
              <span className="bg-[linear-gradient(115deg,#7C3AED_0%,#DB2777_52%,#EC4899_100%)] bg-clip-text text-transparent">
                with more confidence.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[30rem] text-[15.5px] leading-[1.85] text-muted-foreground"
            >
              SafarSafe helps women make{" "}
              <span className="font-semibold text-foreground/90">safer travel decisions</span>{" "}
              before and during every journey. Instead of reacting after something goes wrong,
              SafarSafe combines{" "}
              <span className="font-semibold text-foreground/90">AI-powered route intelligence</span>
              , trusted community insights and{" "}
              <span className="font-semibold text-foreground/90">real-time safety information</span>{" "}
              so users can choose safer routes, stay connected and reach help when needed.
            </motion.p>

            <motion.blockquote
              variants={fadeUp}
              className="mt-10 border-l-2 border-secondary/40 pl-5"
            >
              <p className="text-[15px] font-medium italic leading-relaxed text-foreground/70">
                &ldquo;We believe every journey should begin with confidence.&rdquo;
              </p>
            </motion.blockquote>
          </motion.div>

          {/* Right — interface cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-4 lg:pt-10"
          >
            {CARDS.map(({ icon: Icon, label, desc }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex items-start gap-4 rounded-2xl border border-border bg-white/60 px-5 py-4 shadow-soft backdrop-blur"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 text-secondary">
                  <Icon size={16} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[13.5px] font-semibold text-foreground">{label}</p>
                  <p className="mt-0.5 text-[12.5px] leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Value blocks ─────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-20 grid gap-5 sm:grid-cols-3"
        >
          {VALUES.map(({ title, body }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-white/40 px-7 py-8 backdrop-blur"
            >
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-foreground/50">
                {title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.75] text-muted-foreground">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
