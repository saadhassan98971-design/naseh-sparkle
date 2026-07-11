import { Clock, Users } from "lucide-react";
import c1 from "@/assets/class1.jpg";
import c2 from "@/assets/class2.jpg";
import c3 from "@/assets/class3.jpg";

const CLASSES = [
  { img: c1, level: "Primary · Grades 1–5", title: "Foundations of Wonder", teacher: "Ms. Amina Rauf", students: 24 },
  { img: c2, level: "Middle · Grades 6–8", title: "Discover & Build", teacher: "Mr. Faisal Ahmed", students: 28 },
  { img: c3, level: "Secondary · Grades 9–12", title: "Sciences & Humanities", teacher: "Dr. Hina Malik", students: 22 },
];

export function Classes() {
  return (
    <section id="classes" className="py-24 md:py-32">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our Classes</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-primary text-balance">
            A pathway from Grade 1 to graduation
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Every stage is designed to meet children where they are — with the challenge, care, and community they need to grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {CLASSES.map((c) => (
            <div key={c.title} className="group rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-elegant transition-all">
              <div className="overflow-hidden">
                <img src={c.img} alt={c.title} width={900} height={700} loading="lazy" className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-7">
                <div className="text-xs uppercase tracking-widest text-gold font-semibold">{c.level}</div>
                <h3 className="mt-2 font-display text-2xl font-semibold text-primary">{c.title}</h3>
                <div className="mt-5 flex items-center gap-5 text-sm text-muted-foreground border-t border-border pt-4">
                  <span className="inline-flex items-center gap-1.5"><Users className="h-4 w-4" /> {c.students} students</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> Full-day</span>
                </div>
                <div className="mt-4 text-sm text-foreground">
                  Lead by <span className="font-semibold text-primary">{c.teacher}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
