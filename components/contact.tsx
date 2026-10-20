"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, Phone } from "lucide-react";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const CONTACT_LINKS = [
  { href: "mailto:teamsafarsafe@gmail.com", icon: Mail, label: "teamsafarsafe@gmail.com", external: false },
  { href: "tel:+917973873754", icon: Phone, label: "+91 79738 73754", external: false },
] as const;

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", gender: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setForm({ name: "", email: "", message: "", gender: "" });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again in a few minutes.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative py-14 sm:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Left — info */}
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
              Contact
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-6 text-balance text-[2.1rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-[2.6rem]"
            >
              Join the{" "}
              <span className="bg-[linear-gradient(115deg,#7C3AED_0%,#DB2777_52%,#EC4899_100%)] bg-clip-text text-transparent">
                Beta.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[26rem] text-[15.5px] leading-[1.85] text-muted-foreground"
            >
              Be{" "}
              <span className="font-semibold text-foreground/90">among the first</span> to
              experience SafarSafe. We&apos;re onboarding a{" "}
              <span className="font-semibold text-foreground/90">small group of early users</span>{" "}
              across India.
            </motion.p>

            {/* Contact links */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3">
              {CONTACT_LINKS.map(({ href, icon: Icon, label, external }) => (
                <a
                  key={href}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex items-center gap-3 text-[14.5px] font-medium text-foreground/70 transition-colors hover:text-foreground"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-white/60 shadow-soft">
                    <Icon size={15} strokeWidth={1.7} />
                  </span>
                  {label}
                </a>
              ))}
            </motion.div>

            {/* Social cards — Instagram + LinkedIn */}
            <motion.div variants={fadeUp} className="mt-6 flex flex-col gap-3">
              <a
                href="https://instagram.com/safarsafe_"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-2xl border border-border bg-white/60 px-5 py-4 shadow-soft backdrop-blur transition-shadow hover:shadow-card"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/15 to-purple-500/15 text-pink-500">
                  <InstagramIcon size={18} />
                </span>
                <div>
                  <p className="text-[13.5px] font-semibold text-foreground">@safarsafe_</p>
                  <p className="text-[12px] text-muted-foreground">Follow us on Instagram</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/company/safarsafe"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-2xl border border-border bg-white/60 px-5 py-4 shadow-soft backdrop-blur transition-shadow hover:shadow-card"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/15 to-sky-500/15 text-blue-600">
                  <LinkedinIcon size={18} />
                </span>
                <div>
                  <p className="text-[13.5px] font-semibold text-foreground">SafarSafe</p>
                  <p className="text-[12px] text-muted-foreground">Connect on LinkedIn</p>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex h-full min-h-[320px] flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-white/50 p-10 text-center shadow-soft backdrop-blur"
              >
                <CheckCircle2 size={36} strokeWidth={1.4} className="text-secondary" />
                <h3 className="text-[17px] font-semibold text-foreground">
                  Thank you for joining the SafarSafe Beta.
                </h3>
                <p className="max-w-sm text-[14px] leading-relaxed text-muted-foreground">
                  We&apos;ve received your request successfully. Our team will verify your
                  submission and add you to the beta community soon. We&apos;ll contact you using
                  the email you provided with the next steps.
                </p>
              </motion.div>
            ) : (
              <motion.form
                variants={fadeUp}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 rounded-2xl border border-border bg-white/50 p-8 shadow-soft backdrop-blur sm:p-10"
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[12.5px] font-medium text-foreground/60">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-border bg-white/70 px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground/50 outline-none ring-0 transition focus:ring-2 focus:ring-secondary/30"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[12.5px] font-medium text-foreground/60">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-border bg-white/70 px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground/50 outline-none ring-0 transition focus:ring-2 focus:ring-secondary/30"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="gender" className="text-[12.5px] font-medium text-foreground/60">
                    Gender <span className="text-foreground/40">(required)</span>
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    required
                    value={form.gender}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-white/70 px-4 py-3 text-[14px] text-foreground outline-none ring-0 transition focus:ring-2 focus:ring-secondary/30"
                  >
                    <option value="" disabled>Select gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[12.5px] font-medium text-foreground/60">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us a bit about yourself..."
                    className="w-full resize-none rounded-xl border border-border bg-white/70 px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground/50 outline-none ring-0 transition focus:ring-2 focus:ring-secondary/30"
                  />
                </div>

                {error && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-600">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3.5 text-[14px] font-semibold text-background shadow-soft transition hover:opacity-90 active:scale-[0.98] disabled:opacity-60"
                >
                  {loading ? (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-background/30 border-t-background" />
                  ) : (
                    <Send size={14} strokeWidth={2} />
                  )}
                  Join Beta
                </button>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
