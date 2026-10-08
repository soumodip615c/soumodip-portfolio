"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { projects } from "@/data/portfolio";
import SafeImage from "./SafeImage";

const ease = [0.16, 1, 0.3, 1];
const pad = (n) => String(n).padStart(2, "0");

function CountUp({ to, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) { setN(to); return; }
    const controls = animate(0, to, { duration: 1.4, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return (
    <span ref={ref}>
      {prefix}
      {n.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

function Project({ p, i }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);

  return (
    <article
      ref={ref}
      data-project={i}
      className="relative flex min-h-screen flex-col justify-center gap-12 py-20"
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute top-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[110px] ${
          i % 2 ? "left-0" : "right-0"
        }`}
      />

      <p className="font-display text-5xl text-accent md:hidden">{pad(i + 1)}</p>

      <motion.div
        initial={{ opacity: 0, x: reduce ? 0 : 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.9, ease }}
        className="relative"
      >
        <motion.div style={{ y }} className="relative">
          <SafeImage
            src={p.images[0]}
            alt={`${p.name} screenshot`}
            label={`${p.name} — add screenshot`}
            className="aspect-[16/10] w-full rounded-xl border border-white/10 shadow-[0_30px_80px_-30px_rgba(47,123,255,0.45)]"
            sizes="(min-width:768px) 900px, 100vw"
          />
          {p.images[1] && (
            <SafeImage
              src={p.images[1]}
              alt={`${p.name} secondary screenshot`}
              label="Add second screenshot"
              className="absolute -bottom-6 right-4 hidden aspect-video w-2/5 rounded-lg border border-accent/40 sm:block"
              sizes="360px"
            />
          )}
        </motion.div>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
        >
          <h3 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">{p.name}</h3>
          <p className="mt-2 font-display text-accent-soft">{p.tagline}</p>
          <p className="mt-6 max-w-xl leading-relaxed text-mist">{p.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <li key={t} className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-mist">
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
        >
          <dl className="grid grid-cols-2 gap-6">
            {p.metrics.map((m) => (
              <div key={m.label}>
                <dt className="order-2 text-sm text-mist">{m.label}</dt>
                <dd className="font-display text-3xl text-white md:text-4xl">
                  {m.text ? m.text : <CountUp to={m.to} prefix={m.prefix} suffix={m.suffix} />}
                </dd>
              </div>
            ))}
          </dl>

          {p.highlights.length > 0 && (
            <ul className="mt-8 space-y-2 text-mist">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
          )}

          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full border border-accent/60 px-6 py-3 text-sm transition hover:bg-accent hover:text-white"
          >
            View on GitHub
          </a>
        </motion.div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const els = document.querySelectorAll("[data-project]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.project));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="projects" className="overflow-x-clip px-6 py-28 md:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">PROJECTS</h2>

        <div className="mt-10 grid gap-10 md:grid-cols-[200px_1fr]">
          <aside className="sticky top-0 hidden h-screen flex-col justify-center self-start md:flex" aria-hidden>
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="font-display text-[7rem] leading-none text-accent"
              >
                {pad(active + 1)}
              </motion.p>
            </AnimatePresence>
            <p className="mt-4 font-display text-sm tabular-nums text-mist">
              {pad(active + 1)} / {pad(projects.length)}
            </p>
            <div className="mt-4 flex gap-2">
              {projects.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-px transition-all duration-500 ${idx === active ? "w-12 bg-accent" : "w-5 bg-white/20"}`}
                />
              ))}
            </div>
          </aside>

          <div>
            {projects.map((p, i) => (
              <Project key={p.name} p={p} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
