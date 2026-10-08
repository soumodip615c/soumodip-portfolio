import { skills } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28 md:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">SKILLS</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-xl border border-white/10 bg-panel/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_0_40px_-12px_rgba(47,123,255,0.6)]">
                <h3 className="font-display text-lg transition group-hover:text-accent-soft">{group.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-md bg-white/[0.04] px-2.5 py-1 text-sm text-mist transition hover:bg-accent/20 hover:text-white"
                    >
                      {s}
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
