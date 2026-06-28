"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { IPhoneMockup } from "@/components/iphone-mockup";
import { useIntro } from "@/components/intro-provider";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

/** Official app screenshots — exact filenames as uploaded to the repository. */
const SCREENS = {
  map: { src: "/images/app/App ss 1.jpg", alt: "SafarSafe home map with safe route" },
  profile: { src: "/images/app/app ss 2.jpg", alt: "SafarSafe profile screen" },
  emergency: {
    src: "/images/app/app ss 3.jpg",
    alt: "SafarSafe emergency contacts screen",
  },
} as const;

const COPY: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const ITEM: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const ASSURANCES = ["Free during beta", "Privacy-first", "Built women-first"];

export function Hero() {
  const { ready } = useIntro();
  const stageRef = useRef<HTMLDivElement>(null);

  // A single, slow, purposeful 3D tilt of the phone cluster toward the cursor.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotY = useSpring(useTransform(px, [-1, 1], [5, -5]), {
    stiffness: 40,
    damping: 22,
  });
  const rotX = useSpring(useTransform(py, [-1, 1], [-4, 4]), {
    stiffness: 40,
    damping: 22,
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
      {/* Subtle static film grain */}
      <div
        aria-hidden="true"
        className="grain pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1180px] items-center gap-14 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24 lg:pt-28 xl:gap-16">
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
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.01em] text-foreground/70 shadow-soft ring-1 ring-black/[0.04] backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-secondary to-accent" />
            Women-first travel safety
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={ITEM}
            className="mt-7 text-balance text-[2.7rem] font-semibold leading-[1.04] tracking-[-0.035em] text-foreground sm:text-[3.3rem] lg:text-[3.5rem] xl:text-[4rem]"
          >
            Travel safer.{" "}
            <span className="bg-[linear-gradient(115deg,#7C3AED_0%,#DB2777_52%,#EC4899_100%)] bg-clip-text text-transparent">
              Before your journey begins.
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={ITEM}
            className="mt-6 flex items-center gap-3 text-[1.1rem] font-medium text-foreground/75"
          >
            <span className="h-5 w-px bg-foreground/20" />
            Har Safar. Thoda Zyada Safe.
          </motion.p>

          {/* Description */}
          <motion.p
            variants={ITEM}
            className="mt-6 max-w-[31rem] text-[15.5px] leading-[1.8] text-muted-foreground"
          >
            SafarSafe helps women understand how safe a place really is before
            the trip begins — so you can plan your route, share your journey with
            people you trust, and reach them the moment something feels off.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={ITEM}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button variant="pink" size="lg" className="group gap-2">
              Join the Beta
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Button>
            <Button variant="outline" size="lg" className="gap-2.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground/8">
                <Play size={9} className="ml-px fill-foreground/70 text-foreground/70" />
              </span>
              See How It Works
            </Button>
          </motion.div>

          {/* Assurances */}
          <motion.ul
            variants={ITEM}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            {ASSURANCES.map((a, i) => (
              <li
                key={a}
                className="flex items-center gap-2 text-[12.5px] font-medium text-muted-foreground"
              >
                {i > 0 && (
                  <span className="mr-4 hidden h-1 w-1 rounded-full bg-foreground/20 sm:inline-block" />
                )}
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-secondary to-accent" />
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
          className="relative flex min-h-[460px] items-center justify-center lg:min-h-[580px]"
          style={{ perspective: 1300 }}
        >
          {/* Soft contact shadow grounding the cluster */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[62%] h-14 w-[58%] -translate-x-1/2 rounded-[50%] bg-foreground/12 blur-2xl"
          />

          <motion.div
            className="relative"
            style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
          >
            {/* Left — Profile (rear) */}
            <motion.div
              className="absolute left-[-118px] top-[78px] z-10 hidden lg:block"
              initial={{ opacity: 0, x: 26, y: 14 }}
              animate={ready ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 1.1, ease: EASE, delay: 0.45 }}
            >
              <div style={{ transform: "rotate(-9deg)" }}>
                <IPhoneMockup
                  className="w-[186px] blur-[0.4px]"
                  screenshot={SCREENS.profile}
                />
              </div>
            </motion.div>

            {/* Right — Emergency Contacts (third) */}
            <motion.div
              className="absolute right-[-118px] top-[104px] z-10 hidden lg:block"
              initial={{ opacity: 0, x: -26, y: 14 }}
              animate={ready ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 1.1, ease: EASE, delay: 0.58 }}
            >
              <div style={{ transform: "rotate(9deg)" }}>
                <IPhoneMockup
                  className="w-[186px] blur-[0.4px]"
                  screenshot={SCREENS.emergency}
                />
              </div>
            </motion.div>

            {/* Center — Map (front) */}
            <motion.div
              className="relative z-20"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
            >
              <IPhoneMockup
                className="w-[232px] sm:w-[248px]"
                screenshot={SCREENS.map}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
