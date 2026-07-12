import { useReveal } from "./useReveal";
import { Reveal } from "./Reveal";

const BARS = [
  { label: "Experienced Faculty", value: 95 },
  { label: "Academic Excellence", value: 92 },
  { label: "Parental Satisfaction", value: 97 },
  { label: "Legacy & Trust", value: 96 },
  { label: "Holistic Development", value: 90 },
];

function Bar({ label, value, delay }: { label: string; value: number; delay: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2 text-sm">
        <span className="font-medium text-primary">{label}</span>
        <span
          className={`tabular-nums text-muted-foreground font-medium inline-block ${visible ? "animate-pop" : "opacity-0"}`}
          style={{ animationDelay: `${delay + 400}ms` }}
        >
          {value}%
        </span>
      </div>
      <div className="relative h-2.5 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-warm transition-[width] duration-[1600ms] ease-out relative overflow-hidden"
          style={{ width: visible ? `${value}%` : "0%", transitionDelay: `${delay}ms` }}
        >
          {visible && <span className="progress-sheen" style={{ animationDelay: `${delay + 800}ms` }} />}
        </div>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Drifting decorative blobs */}
      <div
        aria-hidden
        className="blob"
        style={{
          width: 380,
          height: 380,
          top: "10%",
          right: "-140px",
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-terracotta) 45%, transparent), transparent 70%)",
          animationDelay: "-4s",
        }}
      />
      <div
        aria-hidden
        className="blob"
        style={{
          width: 320,
          height: 320,
          bottom: "-80px",
          left: "-100px",
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-gold) 55%, transparent), transparent 70%)",
        }}
      />

      <div className="container-page grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center relative">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Why Choose Us</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-primary text-balance">
            A school parents recommend — and students <span className="text-shimmer">remember</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Our commitment shows in the numbers, but even more in the stories.
            From experienced faculty to a nurturing environment, here's why
            families across Lalamusa choose Naveed-e-Sahar.
          </p>
          <a href="#contact" className="inline-flex items-center mt-8 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:-translate-y-0.5 transition-transform shadow-soft">
            Book a campus tour
          </a>
        </Reveal>
        <Reveal delay={140} className="space-y-6 rounded-3xl bg-card border border-border p-8 md:p-10 shadow-soft card-glow">
          {BARS.map((b, i) => <Bar key={b.label} {...b} delay={i * 120} />)}
        </Reveal>
      </div>
    </section>
  );
}
