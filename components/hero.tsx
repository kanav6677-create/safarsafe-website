"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight, PlayCircle, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { IPhoneMockup } from "@/components/iphone-mockup";
import { MapScreen, ProfileScreen, EmergencyScreen } from "@/components/app-screens";
import { useIntro } from "@/components/intro-provider";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const COPY: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const ITEM: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const ASSURANCES = ["Free during beta", "Privacy-first", "Built women-first"];

export function Hero() {
  const { ready } = useIntro();
  const stageRef = useRef<HTMLDivElement>(null);

  // Subtle, purposeful parallax — a gentle 3D tilt of the phone cluster.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotY = useSpring(useTransform(px, [-1, 1], [7, -7]), {
    stiffness: 60,
    damping: 18,
  });
  const rotX = useSpring(useTransform(py, [-1, 1], [-5, 5]), {
    stiffness: 60,
    damping: 18,
  });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set(((e.clientX - r.left) / r.width) * 2 - 1);
    py.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };

  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center overflow-hidden"
    >
      <div className="mx-auto grid w-full max-w-[1180px] items-center gap-14 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-24 lg:pt-28 xl:gap-16">
        {/* ── Copy ─────────────────────────────────────────────── */}
        <motion.div
          variants={COPY}
          initial="hidden"
          animate={ready ? "show" : "hidden"}
          className="flex flex-col items-start"
        >
          {/* Eyebrow */}
          <motion.span
            variants={ITEM}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-[12px] font-semibold text-foreground/70 shadow-soft ring-1 ring-black/[0.04] backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
            Women-first travel safety
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={ITEM}
            className="mt-6 text-balance text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-[3.2rem] lg:text-[3.4rem] xl:text-[3.9rem]"
          >
            Plan safer journeys,{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              before you ever leave.
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={ITEM}
            className="mt-5 flex items-center gap-3 text-[1.05rem] font-medium text-foreground/75"
          >
            <span className="h-5 w-px bg-foreground/20" />
            Har Safar. Thoda Zyada Safe.
          </motion.p>

          {/* Description */}
          <motion.p
            variants={ITEM}
            className="mt-5 max-w-[30rem] text-[15.5px] leading-[1.75] text-muted-foreground"
          >
            SafarSafe helps women understand how safe a place really is before
            the trip begins. Check your route, share your journey with people you
            trust, and reach them the moment something doesn&apos;t feel right.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={ITEM} className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="primary" size="lg" className="group gap-2">
              Join Beta
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <PlayCircle size={16} className="text-primary" />
              See How It Works
            </Button>
          </motion.div>

          {/* Assurances */}
          <motion.ul
            variants={ITEM}
            className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            {ASSURANCES.map((a) => (
              <li
                key={a}
                className="flex items-center gap-1.5 text-[12.5px] font-medium text-muted-foreground"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-600">
                  <Check size={11} strokeWidth={3} />
                </span>
                {a}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* ── Phone showcase ───────────────────────────────────── */}
        <div
          ref={stageRef}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="relative flex min-h-[440px] items-center justify-center lg:min-h-[560px]"
          style={{ perspective: 1200 }}
        >
          {/* Soft ambient stage light (subtle, not neon) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <div
              className="h-[360px] w-[360px] rounded-full opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 40% 35%, rgba(37,99,235,0.16), transparent 60%), radial-gradient(circle at 65% 70%, rgba(236,72,153,0.14), transparent 60%)",
              }}
            />
          </div>

          <motion.div
            className="relative"
            style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
          >
            {/* Left — Emergency (behind) */}
            <motion.div
              className="absolute left-[-104px] top-14 z-10 hidden lg:block"
              initial={{ opacity: 0, y: 26 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                style={{ rotate: -9 }}
              >
                <IPhoneMockup className="w-[196px] opacity-95">
                  <EmergencyScreen />
                </IPhoneMockup>
              </motion.div>
            </motion.div>

            {/* Right — Profile (behind) */}
            <motion.div
              className="absolute right-[-104px] top-24 z-10 hidden lg:block"
              initial={{ opacity: 0, y: 26 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE, delay: 0.42 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 9,
                  ease: "easeInOut",
                  delay: 1,
                }}
                style={{ rotate: 9 }}
              >
                <IPhoneMockup className="w-[196px] opacity-95">
                  <ProfileScreen />
                </IPhoneMockup>
              </motion.div>
            </motion.div>

            {/* Center — Map (front) */}
            <motion.div
              className="relative z-20"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.9, ease: EASE, delay: 0.18 }}
            >
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              >
                <IPhoneMockup className="w-[230px] sm:w-[244px]">
                  <MapScreen />
                </IPhoneMockup>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
