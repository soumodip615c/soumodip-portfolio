"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import SafeImage from "./SafeImage";

const ease = [0.16, 1, 0.3, 1];

export default function Intro({ onReveal }) {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState("enter"); // enter -> scan -> exit
  const wide = useRef(true);
  const revealed = useRef(false);

  const reveal = () => {
    if (revealed.current) return;
    revealed.current = true;
    try { sessionStorage.setItem("intro-seen", "1"); } catch {}
    onReveal();
  };

  useEffect(() => {
    wide.current = window.innerWidth >= 1024;
    let seen = false;
    try { seen = sessionStorage.getItem("intro-seen") === "1"; } catch {}
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || reduced) {
      reveal();
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setPhase("scan"), 2800);
    const t2 = setTimeout(() => { setPhase("exit"); reveal(); }, 5800);
    const t3 = setTimeout(() => setVisible(false), 6800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  const skip = () => { reveal(); setVisible(false); };

  const cardState =
    phase === "exit"
      ? { opacity: 0, x: wide.current ? "-30vw" : 0, y: wide.current ? 0 : "-14vh", scale: 0.82, rotate: 0, filter: "blur(4px)" }
      : { opacity: 1, x: 0, y: 0, scale: 1, rotate: -1.5, filter: "blur(0px)" };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === "exit" ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="bg-noise pointer-events-none absolute inset-0" aria-hidden />
          <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />

          <motion.div
            initial={{ opacity: 0, y: -240, rotate: -8, scale: 0.86, filter: "blur(14px)" }}
            animate={cardState}
            transition={{ duration: phase === "exit" ? 1.1 : 1.6, ease }}
            className={`relative w-[min(86vw,360px)] overflow-hidden rounded-2xl border bg-panel p-5 transition-[border-color,box-shadow] duration-700 ${
              phase === "enter"
                ? "border-white/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]"
                : "border-accent/70 shadow-[0_0_60px_-12px_rgba(47,123,255,0.65),0_30px_80px_-20px_rgba(0,0,0,0.9)]"
            }`}
          >
            <div className="mb-4 flex items-center justify-between text-xs text-mist">
              <span>Digital ID</span>
              <span className="h-1.5 w-8 rounded-full bg-accent/70" />
            </div>

            <SafeImage
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              label="Add your profile photo"
              className="aspect-square w-full rounded-lg border border-white/10"
              sizes="360px"
              priority
            />

            <h1 className="mt-5 font-display text-2xl font-semibold tracking-wide">SOUMODIP GHOSH</h1>
            <p className="mt-1 text-sm text-accent-soft">{profile.role}</p>

            <div className="mt-4 space-y-0.5 border-t border-white/10 pt-3 text-xs text-mist">
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
                  transition={{ duration: 2.4, ease: "easeInOut" }}
                />
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ left: "-40%" }}
                  animate={{ left: "130%" }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                />
              </>
            )}
          </motion.div>

          <motion.p
            className="absolute bottom-[14vh] text-sm text-mist"
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