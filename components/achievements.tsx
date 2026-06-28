"use client";

import React from "react";
import Image from "next/image";
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

type Award = {
  label: string;
  title: string;
  description: React.ReactNode;
  photos: readonly { src: string; alt: string }[];
};

const AWARDS: Award[] = [
  {
    label: "Startup Arena",
    title: "Startup Arena Winner",
    description: (
      <>
        SafarSafe was selected as a winner at Startup Arena, a competitive entrepreneurship showcase
        where student ventures pitch to a panel of industry experts and investors. Competing against
        teams from across Delhi, SafarSafe stood out for its{" "}
        <span className="font-semibold text-foreground/90">real-world impact</span>, product
        clarity, and strong user validation. The win marked an early proof of concept that the
        problem we are solving genuinely matters.
      </>
    ),
    photos: [
      { src: "/images/achievements/startup-arena-1.png", alt: "SafarSafe team at Startup Arena with banner" },
      { src: "/images/achievements/startup-arena-2.png", alt: "SafarSafe presenting at Startup Arena" },
      { src: "/images/achievements/startup-arena-3.png", alt: "Audience at SafarSafe Startup Arena stall" },
      { src: "/images/achievements/startup-arena-4.png", alt: "SafarSafe team receiving recognition" },
      { src: "/images/achievements/startup-arena-5.png", alt: "Judges speaking with the SafarSafe team" },
    ],
  },
  {
    label: "Hansraj College",
    title: "Hansraj Entrepreneurship Winner",
    description: (
      <>
        At the Hansraj College Entrepreneurship Competition, SafarSafe competed among the top student
        startups across Delhi University colleges. We presented the full product vision, from
        AI-powered route recommendations to community-verified safety data, and were{" "}
        <span className="font-semibold text-foreground/90">awarded first place</span>. This
        recognition reinforced our belief that combining technology with lived experience creates
        solutions that resonate.
      </>
    ),
    photos: [
      { src: "/images/achievements/hansraj-1.png", alt: "SafarSafe team with Hansraj certificates" },
      { src: "/images/achievements/hansraj-2.png", alt: "SafarSafe presentation at Hansraj College" },
    ],
  },
  {
    label: "Hult Prize",
    title: "Hult Prize Campus Winner",
    description: (
      <>
        SafarSafe advanced through the{" "}
        <span className="font-semibold text-foreground/90">Hult Prize campus round</span>, one of
        the world&apos;s most prestigious student entrepreneurship competitions. The Hult Prize
        challenges teams to solve a significant social problem at scale, and SafarSafe&apos;s
        approach to preventive women&apos;s safety earned us the campus title. This placed us among
        the{" "}
        <span className="font-semibold text-foreground/90">top 80 national teams</span> competing
        for the global prize.
      </>
    ),
    photos: [
      { src: "/images/achievements/hult-1.png", alt: "Kanav Gupta at IIT Bombay for Hult Prize" },
      { src: "/images/achievements/hult-2.png", alt: "Hult Prize India Nationals 2026 venue" },
      { src: "/images/achievements/hult-3.png", alt: "SafarSafe team at IIT Bombay for Hult Prize" },
    ],
  },
];

const STATS = [
  { value: "3+", label: "Competition Wins" },
  { value: "50+", label: "Beta Users" },
  { value: "150K+", label: "Instagram Reach" },
  { value: "Top 80", label: "National Teams" },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-14 sm:py-20">
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
            Achievements
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-balance text-[2.1rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-[2.6rem]"
          >
            Recognition that{" "}
            <span className="bg-[linear-gradient(115deg,#7C3AED_0%,#DB2777_52%,#EC4899_100%)] bg-clip-text text-transparent">
              drives us forward.
            </span>
          </motion.h2>
        </motion.div>

        {/* Per-award blocks */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 flex flex-col gap-14"
        >
          {AWARDS.map(({ label, title, description, photos }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-white/40 p-8 backdrop-blur sm:p-10"
            >
              {/* Label + title */}
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-3 py-1 text-[11.5px] font-semibold tracking-[0.06em] uppercase text-foreground/50 shadow-soft">
                {label}
              </span>
              <h3 className="mt-3 text-[1.25rem] font-semibold leading-snug tracking-[-0.025em] text-foreground sm:text-[1.4rem]">
                {title}
              </h3>
              <div className="mt-3 max-w-3xl text-[14.5px] leading-[1.85] text-muted-foreground">
                {description}
              </div>

              {/* Photos */}
              {photos.length > 0 && (
                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {photos.map((photo) => (
                    <div
                      key={photo.src}
                      className="relative overflow-hidden rounded-xl bg-muted shadow-soft"
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4"
        >
          {STATS.map(({ value, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="flex flex-col items-center gap-1 rounded-2xl border border-border bg-white/40 px-6 py-8 text-center backdrop-blur"
            >
              <span className="font-numeric text-[2.2rem] font-semibold tracking-[-0.04em] text-foreground">
                {value}
              </span>
              <span className="text-[13px] font-medium text-muted-foreground">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
