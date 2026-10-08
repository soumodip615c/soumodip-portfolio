"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experience } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="px-6 py-28 md:px-12">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">EXPERIENCE</h2>
        </Reveal>

        <div ref={ref} className="relative mt-14 space-y-12 pl-8 md:pl-12">
          <div className="absolute left-0 top-0 h-full w-px bg-line" aria-hidden />
          <motion.div
            aria-hidden
            style={{ scaleY, originY: 0 }}
            className="absolute left-0 top-0 h-full w-px bg-accent shadow-[0_0_12px_#2f7bff]"
          />

          {experience.map((job) => (
            <Reveal key={job.company}>
              <div className="relative rounded-xl border border-white/10 bg-panel/60 p-6 md:p-8">
                <span className="absolute -left-[37px] top-8 h-3 w-3 rounded-full bg-accent shadow-[0_0_14px_#2f7bff] md:-left-[53px]" aria-hidden />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display text-2xl">{job.company}</h3>
                    <p className="text-accent-soft">{job.role}</p>
                  </div>
                  <p className="text-sm text-mist">{job.period}</p>
                </div>
                <ul className="mt-6 space-y-3 text-mist">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
