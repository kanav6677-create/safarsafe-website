"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Navigation,
  Sparkles,
  PhoneCall,
  LocateFixed,
  UserCheck,
  MessageSquare,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const FEATURES: { icon: React.ElementType; title: string; body: React.ReactNode }[] = [
  {
    icon: Navigation,
    title: "Safe Route Recommendations",
    body: (
      <>
        Get AI-powered route suggestions ranked by{" "}
        <span className="font-semibold text-foreground/90">safety, not just speed</span>.
      </>
    ),
  },
  {
    icon: Sparkles,
    title: "AI Safety Score",
    body: (
      <>
        Understand the{" "}
        <span className="font-semibold text-foreground/90">safety profile</span> of any destination
        before you arrive.
      </>
    ),
  },
  {
    icon: PhoneCall,
    title: "Emergency SOS",
    body: (
      <>
        Alert your trusted contacts{" "}
        <span className="font-semibold text-foreground/90">instantly</span> when something feels
        wrong.
      </>
    ),
  },
  {
    icon: LocateFixed,
    title: "Live Location Sharing",
    body: (
      <>
        Share your{" "}
        <span className="font-semibold text-foreground/90">real-time journey</span> with people who
        care about your safety.
      </>
    ),
  },
  {
    icon: UserCheck,
    title: "Emergency Contacts",
    body: (
      <>
        Add trusted contacts who receive alerts{" "}
        <span className="font-semibold text-foreground/90">the moment you need help</span>.
      </>
    ),
  },
  {
    icon: MessageSquare,
    title: "Community Reports",
    body: (
      <>
        <span className="font-semibold text-foreground/90">Verified safety reports</span> from
        women who&apos;ve travelled these routes.
      </>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-14 sm:py-20">
      {/* Subtle section divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.01em] text-foreground/70 shadow-soft ring-1 ring-black/[0.04] backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-secondary to-accent" />
            Features
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-balance text-[2.1rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-[2.6rem]"
          >
            Everything you need to{" "}
            <span className="bg-[linear-gradient(115deg,#7C3AED_0%,#DB2777_52%,#EC4899_100%)] bg-clip-text text-transparent">
              travel safely.
            </span>
          </motion.h2>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-white/50 p-7 shadow-soft backdrop-blur transition-shadow duration-300 hover:shadow-card"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 text-secondary">
                <Icon size={18} strokeWidth={1.7} />
              </span>
              <div>
                <h3 className="text-[14.5px] font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.75] text-muted-foreground">{body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
