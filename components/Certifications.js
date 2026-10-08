import { certifications } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">CERTIFICATIONS</h2>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <li key={c.title}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <div className="h-full rounded-lg border border-white/10 bg-panel/60 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/60">
                  <p className="font-display">{c.title}</p>
                  <p className="mt-1 text-sm text-mist">{c.issuer}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
