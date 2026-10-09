"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import SafeImage from "./SafeImage";

const ease = [0.16, 1, 0.3, 1];
const container = { hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } } };
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } };

const links = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "LeetCode", href: profile.leetcode },
  { label: "Email", href: `mailto:${profile.email}` },
];

export default function Hero({ ready }) {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-x-clip px-6 pb-16 pt-28 md:px-12">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="bg-noise pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate={ready ? "show" : "hidden"}>
          <motion.p variants={item} className="sr-only">
            {profile.name}
          </motion.p>
          <motion.h2
            variants={item}
            aria-hidden
            className="font-display text-[clamp(1.9rem,5vw,4rem)] font-semibold leading-[0.95] tracking-tight"
          >
            SOUMODIP  GHOSH
          </motion.h2>
          <motion.p variants={item} className="mt-6 font-display text-lg text-accent-soft md:text-xl">
            {profile.role}
          </motion.p>
          <motion.p variants={item} className="mt-6 max-w-lg text-base leading-relaxed text-mist md:text-lg">
            {profile.statement}
          </motion.p>
          <motion.ul variants={item} className="mt-10 flex flex-wrap gap-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:border-accent hover:bg-accent/10 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={ready ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="mx-auto w-full max-w-[260px] lg:max-w-[320px]"
        >
          <div className="relative rounded-2xl border border-accent/40 bg-panel p-3 shadow-[0_0_70px_-15px_rgba(47,123,255,0.55)]">
            <span className="absolute -left-px -top-px h-5 w-5 rounded-tl-2xl border-l-2 border-t-2 border-accent" aria-hidden />
            <span className="absolute -bottom-px -right-px h-5 w-5 rounded-br-2xl border-b-2 border-r-2 border-accent" aria-hidden />

            <div className="relative overflow-hidden rounded-xl">
              <SafeImage
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                label="Add your profile photo"
                className="aspect-[4/5] w-full"
                sizes="(min-width:1024px) 320px, 260px"
                priority
              />
              <div className="light-sweep pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 to-transparent p-4 pt-12 text-xs leading-relaxed text-mist">
                <p className="text-white">{profile.degree}</p>
                <p>
                  {profile.college} · 2023–{profile.gradYear}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}