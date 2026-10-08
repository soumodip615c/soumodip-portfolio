import { about } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-28 md:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">ABOUT ME</h2>
        </Reveal>

        <div className="space-y-10">
          <Reveal delay={0.1}>
            <p className="font-display text-xl leading-snug md:text-3xl">{about.intro}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-xl text-base leading-relaxed text-mist md:text-lg">{about.detail}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="border-l-2 border-accent pl-6">
              <p className="font-display text-lg">{about.education.degree}</p>
              <p className="mt-1 text-mist">{about.education.school}</p>
              <p className="mt-3 text-sm text-mist">
                {about.education.years} · {about.education.cgpa}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
