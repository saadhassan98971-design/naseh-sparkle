import { useReveal } from "./useReveal";

const BARS = [
  { label: "Experienced Faculty", value: 95 },
  { label: "Academic Excellence", value: 92 },
  { label: "Parental Satisfaction", value: 97 },
  { label: "Holistic Development", value: 90 },
  { label: "Legacy & Trust", value: 96 },
];

function Bar({ label, value }: { label: string; value: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2 text-sm">
        <span className="font-medium text-primary">{label}</span>
        <span className="tabular-nums text-muted-foreground font-medium">{value}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-warm transition-[width] duration-[1600ms] ease-out"
          style={{ width: visible ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Why Choose Us</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-primary text-balance">
            A school parents recommend — and students remember.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Our commitment shows in the numbers, but even more in the stories.
            From experienced faculty to a nurturing environment, here's why
            families across Lalamusa choose Naveed-e-Sahar.
          </p>
          <a href="#contact" className="inline-flex items-center mt-8 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:-translate-y-0.5 transition-transform shadow-soft">
            Book a campus tour
          </a>
        </div>
        <div className="space-y-6 rounded-3xl bg-card border border-border p-8 md:p-10 shadow-soft">
          {BARS.map((b) => <Bar key={b.label} {...b} />)}
        </div>
      </div>
    </section>
  );
}
