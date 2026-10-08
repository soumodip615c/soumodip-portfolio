"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "soumodip-ghosh", href: profile.linkedin },
  { label: "GitHub", value: "soumodip615c", href: profile.github },
  { label: "LeetCode", value: "Profile", href: profile.leetcode },
];

const field =
  "w-full rounded-lg border border-white/10 bg-panel/60 px-4 py-3 text-white placeholder:text-mist/60 transition focus:border-accent focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32 md:px-12">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              LET&apos;S BUILD SOMETHING USEFUL.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-mist">
              Interested in working together, discussing a project, or simply connecting?
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-10 space-y-4">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-baseline gap-4 border-b border-white/10 pb-3 transition hover:border-accent"
                  >
                    <span className="w-20 text-sm text-mist">{l.label}</span>
                    <span className="break-all transition group-hover:text-accent-soft">{l.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={submit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-mist">Name</label>
              <input id="name" required value={form.name} onChange={update("name")} className={field} autoComplete="name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-mist">Email</label>
              <input id="email" type="email" required value={form.email} onChange={update("email")} className={field} autoComplete="email" />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-mist">Message</label>
              <textarea id="message" rows={5} required value={form.message} onChange={update("message")} className={field} />
            </div>
            <button
              type="submit"
              className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-white transition hover:bg-accent-soft hover:text-ink"
            >
              Send Message
            </button>
            <p className="min-h-5 text-sm text-mist" aria-live="polite">
              {sent ? "Your email app should open with the message ready to send." : ""}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
