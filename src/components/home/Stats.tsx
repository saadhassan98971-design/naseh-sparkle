import { useEffect, useState } from "react";
import { useReveal } from "./useReveal";
import { Award, Users, GraduationCap, Globe2 } from "lucide-react";

const STATS = [
  { icon: Award, value: 25, suffix: "+", label: "Years of Excellence" },
  { icon: Users, value: 2000, suffix: "+", label: "Students Enrolled" },
  { icon: GraduationCap, value: 100, suffix: "+", label: "Faculty Members" },
  { icon: Globe2, value: 5000, suffix: "+", label: "Alumni Network" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, target]);
  return (
    <div ref={ref} className="font-display text-4xl md:text-5xl font-semibold text-primary tabular-nums">
      {n.toLocaleString()}
      <span className="text-gold">{suffix}</span>
    </div>
  );
}

function StatItem({ Icon, value, suffix, label, delay }: { Icon: typeof Award; value: number; suffix: string; label: string; delay: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`text-center lg:text-left flex flex-col items-center lg:items-start ${visible ? "animate-pop" : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-foreground/10 text-gold mb-3 icon-pulse">
        <Icon className="h-5 w-5" />
      </span>
      <div className="text-primary-foreground">
        <Counter target={value} suffix={suffix} />
      </div>
      <div className="mt-1.5 text-sm text-primary-foreground/70 tracking-wide">
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative">
      <div className="container-page">
        <div className="stats-gradient rounded-3xl text-primary-foreground shadow-elegant px-6 md:px-10 py-10 md:py-14 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              background:
                "radial-gradient(50% 80% at 100% 0%, color-mix(in oklab, var(--color-gold) 25%, transparent), transparent 60%)",
            }}
          />
          {STATS.map(({ icon, value, suffix, label }, i) => (
            <StatItem key={label} Icon={icon} value={value} suffix={suffix} label={label} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

