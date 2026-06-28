"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isOpen) {
      videoRef.current?.pause();
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm"
            aria-hidden="true"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-1/2 z-[201] -translate-y-1/2 sm:inset-x-auto sm:left-1/2 sm:w-full sm:max-w-3xl sm:-translate-x-1/2"
            role="dialog"
            aria-modal="true"
            aria-label="SafarSafe demo video"
          >
            <div className="overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10">
              {/* Close button */}
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[13px] font-medium text-white/60">SafarSafe Demo</span>
                <button
                  onClick={onClose}
                  aria-label="Close video"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white"
                >
                  <X size={16} strokeWidth={2} />
                </button>
              </div>

              <video
                ref={videoRef}
                src="/videos/demo.mp4"
                controls
                autoPlay
                playsInline
                className="w-full"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
