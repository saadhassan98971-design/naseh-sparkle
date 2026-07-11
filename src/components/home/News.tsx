import { ArrowUpRight, Calendar } from "lucide-react";
import n1 from "@/assets/news1.jpg";
import n2 from "@/assets/news2.jpg";
import n3 from "@/assets/news3.jpg";
import { Reveal } from "./Reveal";

const ITEMS = [
  { img: n1, date: "Mar 14, 2026", tag: "Academics", title: "Science Fair 2026 celebrates young innovators", excerpt: "Over 120 student projects explored sustainability, AI, and community wellbeing this year." },
  { img: n2, date: "Feb 22, 2026", tag: "Awards", title: "Annual Prize Distribution honors 340 achievers", excerpt: "Families gathered as the Class of 2025 was recognized for academic and civic excellence." },
  { img: n3, date: "Jan 30, 2026", tag: "Sports", title: "Inter-house Sports Week returns bigger than ever", excerpt: "A week of athletics, sportsmanship, and school spirit across all grade levels." },
];

export function News() {
  return (
    <section id="media" className="py-24 md:py-32 bg-surface">
      <div className="container-page">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">News & Events</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-primary text-balance">
              What's happening on campus
            </h2>
          </div>
          <a href="#media" className="inline-flex items-center gap-2 text-primary font-medium story-link">
            View all stories <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={i * 140}>
              <article className="card-glow group flex flex-col rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all h-full">
                <div className="relative overflow-hidden">
                  <img src={it.img} alt={it.title} width={900} height={700} loading="lazy" className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-4 left-4 rounded-full bg-background/95 backdrop-blur text-primary text-xs font-medium px-3 py-1">
                    {it.tag}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {it.date}
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-primary group-hover:text-primary-soft transition-colors">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{it.excerpt}</p>
                  <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium story-link self-start" style={{ color: "var(--terracotta)" }}>
                    Read more <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
