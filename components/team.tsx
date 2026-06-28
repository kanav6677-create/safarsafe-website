"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export function Team() {
  return (
    <section id="team" className="relative py-14 sm:py-20">
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
            The Team
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-balance text-[2.1rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-[2.6rem]"
          >
            Built by people who{" "}
            <span className="bg-[linear-gradient(115deg,#7C3AED_0%,#DB2777_52%,#EC4899_100%)] bg-clip-text text-transparent">
              care deeply.
            </span>
          </motion.h2>
        </motion.div>

        {/* Single founder card — centred */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 flex justify-center"
        >
          <motion.div
            variants={fadeUp}
            className="flex w-full max-w-sm flex-col items-center rounded-2xl border border-border bg-white/50 px-10 py-12 shadow-soft backdrop-blur"
          >
            <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-border">
              <Image
                src="/images/team/kanav-gupta.png"
                alt="Kanav Gupta"
                fill
                sizes="112px"
                className="origin-top scale-[1.25] object-cover object-[50%_6%]"
              />
            </div>
            <h3 className="mt-6 text-[17px] font-semibold text-foreground">Kanav Gupta</h3>
            <p className="mt-1 text-[13.5px] text-muted-foreground">Founder &amp; Director</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
