"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import SafeImage from "./SafeImage";

const strapText = "SOUMODIP GHOSH  ·  DATA & AI/ML  ·  ".repeat(4);

export default function Intro({ onReveal }) {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState("enter"); // enter -> scan -> exit
  const revealed = useRef(false);

  const reveal = () => {
    if (revealed.current) return;
    revealed.current = true;
    try { sessionStorage.setItem("intro-seen", "1"); } catch {}
    onReveal();
  };

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("intro-seen") === "1"; } catch {}
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || reduced) {
      reveal();
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setPhase("scan"), 3000);
    const t2 = setTimeout(() => { setPhase("exit"); reveal(); }, 5600);
    const t3 = setTimeout(() => setVisible(false), 6600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  const skip = () => { reveal(); setVisible(false); };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] overflow-hidden bg-ink"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === "exit" ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="bg-noise pointer-events-none absolute inset-0" aria-hidden />
          <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
          <div
            className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-[110px]"
            aria-hidden
          />

          {/* Drop: lanyard + card fall in, then lift away on exit */}
          <motion.div
            className="absolute inset-x-0 top-0 flex justify-center"
            initial={{ y: "-110%" }}
            animate={phase === "exit" ? { y: "-120%", opacity: 0 } : { y: 0, opacity: 1 }}
            transition={
              phase === "exit"
                ? { duration: 1, ease: [0.5, 0, 0.75, 0] }
                : { type: "spring", stiffness: 60, damping: 11, mass: 1.2 }
            }
          >
            {/* Swing: pendulum motion pivoting from the top of the strap */}
            <motion.div
              style={{ transformOrigin: "top center" }}
              animate={{ rotate: [0, 6, -4.5, 3, -1.8, 0.8, 0] }}
              transition={{ duration: 3.4, delay: 0.9, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              {/* Lanyard strap */}
              <div
                aria-hidden
                className="relative -mt-6 h-[17vh] min-h-24 w-9 overflow-hidden border-x border-dashed border-white/25 bg-gradient-to-b from-[#12327a] via-[#1d4fc4] to-accent shadow-[0_0_24px_-4px_rgba(47,123,255,0.7)]"
              >
                {/* woven texture */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent_0_3px,rgba(0,0,0,0.18)_3px_4px)]" />
                {/* gloss highlight */}
                <div className="absolute inset-y-0 left-1 w-1.5 bg-gradient-to-b from-white/30 to-white/5" />
                {/* printed text */}
                <p
                  className="absolute inset-0 flex items-center justify-center whitespace-pre text-[9px] font-semibold tracking-[0.25em] text-white/75"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {strapText}
                </p>
              </div>

              {/* Strap end stitch */}
              <div aria-hidden className="h-1.5 w-9 bg-gradient-to-b from-[#0b1f52] to-[#12327a]" />

              {/* Metal ring */}
              <div
                aria-hidden
                className="-mt-0.5 h-5 w-5 rounded-full border-[3px] border-zinc-300 bg-transparent shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
              />

              {/* Metal clip */}
              <div
                aria-hidden
                className="relative z-10 -mt-1 -mb-3 h-8 w-10 rounded-md border border-white/40 bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-500 shadow-[0_6px_14px_rgba(0,0,0,0.6)]"
              >
                <span className="absolute left-1/2 top-1.5 h-2 w-5 -translate-x-1/2 rounded-full bg-zinc-800/70" />
                <span className="absolute inset-x-1 bottom-1 h-px bg-white/50" />
              </div>

              {/* ID card */}
              <div
                className={`relative w-[min(68vw,270px)] overflow-hidden rounded-2xl border bg-panel p-4 pt-6 transition-[border-color,box-shadow] duration-700 ${
                  phase === "enter"
                    ? "border-white/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]"
                    : "border-accent/70 shadow-[0_0_60px_-12px_rgba(47,123,255,0.65),0_30px_80px_-20px_rgba(0,0,0,0.9)]"
                }`}
              >
                {/* Slot hole */}
                <span
                  aria-hidden
                  className="absolute left-1/2 top-2 h-1.5 w-12 -translate-x-1/2 rounded-full border border-white/10 bg-ink"
                />

                <div className="mb-3 flex items-center justify-between text-[11px] text-mist">
                  <span>Digital ID</span>
                  <span className="h-1.5 w-7 rounded-full bg-accent/70" />
                </div>

                <SafeImage
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  label="Add your profile photo"
                  className="aspect-square w-full rounded-lg border border-white/10"
                  sizes="270px"
                  priority
                />

                <h1 className="mt-4 font-display text-xl font-semibold tracking-wide">SOUMODIP GHOSH</h1>
                <p className="mt-1 text-xs text-accent-soft">{profile.role}</p>

                <div className="mt-3 space-y-0.5 border-t border-white/10 pt-2.5 text-[11px] text-mist">
                  <p>{profile.degree}</p>
                  <p>{profile.college}</p>
                  <p>
                    {profile.gradYear} · CGPA {profile.cgpa}
                  </p>
                </div>

                {phase === "scan" && (
                  <>
                    <motion.div
                      aria-hidden
                      className="absolute inset-x-0 h-px bg-accent-soft shadow-[0_0_18px_4px_rgba(47,123,255,0.8)]"
                      initial={{ top: "0%", opacity: 0 }}
                      animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
                      transition={{ duration: 2.2, ease: "easeInOut" }}
                    />
                    <motion.div
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ left: "-40%" }}
                      animate={{ left: "130%" }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>

          <motion.p
            className="absolute inset-x-0 bottom-[7vh] text-center text-sm text-mist"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "scan" ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            Entering portfolio
          </motion.p>

          <button
            onClick={skip}
            className="absolute bottom-6 right-6 rounded-full border border-white/10 px-4 py-2 text-xs text-mist transition hover:border-accent/60 hover:text-white"
          >
            Skip intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}