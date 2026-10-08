"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/data/portfolio";

export default function Navbar({ ready }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ pointerEvents: ready ? "auto" : "none" }}
      className="fixed inset-x-0 top-4 z-40 flex justify-center px-4"
    >
      <nav
        aria-label="Primary"
        className="relative w-full rounded-full border border-white/10 bg-ink/70 px-2 py-1.5 backdrop-blur md:w-auto"
      >
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-mist transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between px-3 py-1 md:hidden">
          <span className="font-display text-sm">Soumodip Ghosh</span>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
          >
            <span className={`h-px w-5 bg-white transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-white transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden md:hidden"
            >
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-sm text-mist hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
