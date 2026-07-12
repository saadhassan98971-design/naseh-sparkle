import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const QUOTES = [
  {
    quote: "The teachers here don't just teach — they mentor. My daughter has grown in confidence, curiosity, and character in ways I never expected.",
    name: "Farhana Iqbal",
    role: "Parent · Grade 7",
  },
  {
    quote: "Naveed-e-Sahar gave our son a foundation of discipline and warmth that carried him all the way to medical school in Karachi.",
    name: "Dr. Zaheer Abbas",
    role: "Parent · Alumnus '19",
  },
  {
    quote: "It feels like family. Every teacher knows my child by name, and the values taught at home are reinforced every day at school.",
    name: "Sadia Kamran",
    role: "Parent · Grades 3 & 5",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_0%,color-mix(in_oklab,var(--color-gold)_18%,transparent),transparent_70%)]" />
      <div aria-hidden className="blob float-slow" style={{ width: 340, height: 340, top: "-80px", right: "-120px", background: "radial-gradient(circle, color-mix(in oklab, var(--color-gold) 45%, transparent), transparent 70%)" }} />
      <div aria-hidden className="blob float-slow" style={{ width: 300, height: 300, bottom: "-100px", left: "-80px", background: "radial-gradient(circle, color-mix(in oklab, var(--color-terracotta) 35%, transparent), transparent 70%)", animationDelay: "-5s" }} />
      <div className="container-page relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Parent Voices</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-balance">
            Trusted by families across Lalamusa
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={i * 140}>
              <figure className="card-glow rounded-3xl bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 p-8 flex flex-col hover:bg-primary-foreground/10 transition-colors h-full">
                <Quote className="h-8 w-8 text-gold" />
                <blockquote className="mt-4 text-lg leading-relaxed text-primary-foreground/95 flex-1">
                  "{q.quote}"
                </blockquote>
                <div className="mt-6 flex items-center gap-1 text-gold">
                  {[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <figcaption className="mt-4 pt-4 border-t border-primary-foreground/15">
                  <div className="font-display text-lg font-semibold">{q.name}</div>
                  <div className="text-sm text-primary-foreground/70">{q.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
