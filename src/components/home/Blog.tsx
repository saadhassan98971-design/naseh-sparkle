import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const POSTS = [
  { tag: "Parenting", date: "Apr 04, 2026", title: "5 ways to build a reading habit that lasts", excerpt: "Small daily rituals that turn reluctant readers into lifelong learners." },
  { tag: "Learning", date: "Mar 22, 2026", title: "Why curiosity matters more than answers", excerpt: "How inquiry-based classrooms are reshaping what students remember." },
  { tag: "Wellbeing", date: "Mar 08, 2026", title: "Supporting teenagers through exam season", excerpt: "Practical tips from our counselors on balance, sleep, and study." },
];

export function Blog() {
  return (
    <section id="blogs" className="py-24 md:py-32 bg-surface">
      <div className="container-page">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">From the Journal</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-primary text-balance">
              Ideas, insights & school life
            </h2>
          </div>
          <a href="#blogs" className="inline-flex items-center gap-2 text-primary font-medium story-link">
            All posts <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 140}>
              <a href="#" className="card-glow group block rounded-3xl bg-card border border-border p-8 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all h-full">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-primary/8 text-primary px-2.5 py-0.5 font-medium">{p.tag}</span>
                  <span className="text-muted-foreground">{p.date}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-primary leading-snug group-hover:text-primary-soft transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
