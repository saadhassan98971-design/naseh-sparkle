import { Sparkles, BrainCircuit, Compass } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import { Reveal } from "./Reveal";

const FEATURES = [
  {
    icon: Sparkles,
    title: "Holistic Development",
    text: "We nurture academics, arts, athletics, and ethics — shaping students who thrive in every arena of life.",
  },
  {
    icon: BrainCircuit,
    title: "Innovative Learning",
    text: "Inquiry-led classrooms, modern labs, and project-based work sharpen critical thinking from day one.",
  },
  {
    icon: Compass,
    title: "Career & Alumni Support",
    text: "Mentorship from a 5,000-strong alumni network guides students from graduation to their calling.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Drifting decorative blobs */}
      <div
        aria-hidden
        className="blob"
        style={{
          width: 360,
          height: 360,
          top: "-80px",
          left: "-120px",
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-gold) 60%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="blob"
        style={{
          width: 420,
          height: 420,
          bottom: "-140px",
          right: "-120px",
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-primary-soft) 55%, transparent), transparent 70%)",
          animationDelay: "-6s",
        }}
      />

      <div className="container-page grid lg:grid-cols-2 gap-14 lg:gap-20 items-center relative">
        <Reveal className="relative">
          <div className="rounded-[2rem] overflow-hidden border border-border shadow-elegant">
            <img src={aboutImg} alt="Naveed-e-Sahar campus" width={1200} height={900} loading="lazy" className="w-full h-[460px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-4 md:-right-8 bg-gold text-gold-foreground rounded-2xl p-5 md:p-6 shadow-elegant max-w-[240px]">
            <div className="font-display text-3xl font-semibold leading-none">A Legacy</div>
            <div className="mt-2 text-sm">of shaping tomorrow's leaders since 1999.</div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            About Our School
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-primary text-balance">
            A community rooted in <em className="not-italic text-shimmer">character</em>, driven by <em className="not-italic text-shimmer">curiosity</em>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Nestled in the heart of Lalamusa and affiliated with BISE Gujranwala,
            Naveed-e-Sahar School blends rigorous academics with values-based
            education. Our mission is simple: prepare each child to think
            deeply, act kindly, and lead courageously.
          </p>

          <div className="mt-8 space-y-4">
            {FEATURES.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={200 + i * 120}>
                <div className="card-glow group flex gap-4 p-5 rounded-2xl border border-border bg-card hover:shadow-soft hover:-translate-y-0.5 transition-all">
                  <span className="shrink-0 grid h-11 w-11 place-items-center rounded-xl bg-primary/8 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold text-primary">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
