import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (imgRef.current) {
          const y = window.scrollY;
          imgRef.current.style.transform = `translate3d(0, ${y * 0.08}px, 0) scale(1.03)`;
        }
      });
    };
    const onMove = (e: MouseEvent) => {
      const el = heroRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      setMouse({ x, y });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative overflow-hidden isolate"
    >
      {/* Aurora / mesh background */}
      <div aria-hidden className="absolute inset-0 -z-20 overflow-hidden">
        <div
          className="aurora"
          style={{
            transform: `translate3d(${mouse.x * 20}px, ${mouse.y * 20}px, 0)`,
            transition: "transform 400ms ease-out",
          }}
        />
      </div>

      {/* Dot grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in oklab, var(--color-primary) 40%, transparent) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="container-page grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="hero-stagger">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Admissions Open · Session 2026–27
          </span>

          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-primary text-balance leading-[1.02]">
            Education is the{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-shimmer">Father</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 h-3 md:h-4 bg-gold/40 -z-0 rounded-sm"
              />
            </span>{" "}
            of Leadership
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            For over 25 years, Naveed-e-Sahar School has nurtured curious minds
            and courageous hearts in Lalamusa — preparing the next generation
            to lead with knowledge, character, and compassion.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#admissions"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant hover:-translate-y-0.5 transition-all"
            >
              Admissions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 backdrop-blur px-6 py-3.5 text-sm font-medium text-primary hover:bg-muted transition-colors"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-gold text-gold-foreground">
                <Play className="h-3 w-3 fill-current" />
              </span>
              Learn More
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div>
              <div className="font-display text-2xl font-semibold text-primary">A+</div>
              <div>BISE Gujranwala</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-2xl font-semibold text-primary">25+</div>
              <div>Years of trust</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-2xl font-semibold text-primary">K–12</div>
              <div>Full program</div>
            </div>
          </div>
        </div>

        <div
          className="relative animate-fade-in"
          style={{
            transform: `translate3d(${mouse.x * -14}px, ${mouse.y * -14}px, 0)`,
            transition: "transform 500ms ease-out",
          }}
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-elegant border border-border/60">
            <img
              ref={imgRef}
              src={heroImg}
              alt="Naveed-e-Sahar students engaged in a bright classroom"
              width={1600}
              height={1100}
              className="w-full h-[520px] md:h-[600px] object-cover will-change-transform"
              style={{ transform: "scale(1.03)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-background rounded-2xl shadow-elegant border border-border p-5 max-w-[260px]">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-9 w-9 rounded-full border-2 border-background bg-gradient-warm"
                  />
                ))}
              </div>
              <div>
                <div className="font-display text-lg font-semibold text-primary">5,000+</div>
                <div className="text-xs text-muted-foreground">Proud alumni worldwide</div>
              </div>
            </div>
          </div>

          {/* Accent badge */}
          <div className="hidden md:flex absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gold text-gold-foreground items-center justify-center text-center font-display font-semibold text-sm rotate-6 shadow-soft">
            Since<br />1999
          </div>
        </div>
      </div>
    </section>
  );
}
