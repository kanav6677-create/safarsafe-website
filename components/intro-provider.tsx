"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { Splash } from "@/components/splash";

type IntroState = {
  /** True once the splash has settled and the homepage may animate in. */
  ready: boolean;
  /** True only on the very first paint while the splash is playing. */
  introPlaying: boolean;
};

const IntroContext = createContext<IntroState>({
  ready: true,
  introPlaying: false,
});

export function useIntro() {
  return useContext(IntroContext);
}

const SESSION_KEY = "safarsafe:intro-seen";

export function IntroProvider({ children }: { children: ReactNode }) {
  const [showSplash, setShowSplash] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const seen =
      typeof window !== "undefined" &&
      window.sessionStorage.getItem(SESSION_KEY) === "1";

    if (seen || prefersReduced) {
      setReady(true);
      return;
    }

    setShowSplash(true);

    // Homepage begins to fade in as the logo exits (at 2.7 s), creating a soft
    // cross-fade. Timed to the splash timeline: total 3.4 s, exit begins 2.7 s.
    const revealTimer = window.setTimeout(() => setReady(true), 2700);
    return () => window.clearTimeout(revealTimer);
  }, []);

  const handleComplete = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(SESSION_KEY, "1");
    }
    setShowSplash(false);
  };

  return (
    <IntroContext.Provider value={{ ready, introPlaying: showSplash }}>
      {showSplash && <Splash onComplete={handleComplete} />}
      {children}
    </IntroContext.Provider>
  );
}
