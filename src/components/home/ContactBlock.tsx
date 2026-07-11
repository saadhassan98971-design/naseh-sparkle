import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  subject: z.string().trim().min(2, "Please add a subject").max(120),
  message: z.string().trim().min(10, "Message is too short").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function ContactBlock() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [nlEmail, setNlEmail] = useState("");
  const [nlOk, setNlOk] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Errors = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as keyof Errors] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-page grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
        {/* Newsletter + info */}
        <div className="flex flex-col gap-8">
          <div className="rounded-3xl bg-gradient-primary text-primary-foreground p-8 md:p-10 shadow-elegant">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Newsletter</span>
            <h3 className="mt-3 font-display text-3xl font-semibold text-balance">
              Get school updates, events & stories.
            </h3>
            <p className="mt-3 text-primary-foreground/80">
              One thoughtful email per month. No spam, ever.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (/^\S+@\S+\.\S+$/.test(nlEmail)) {
                  setNlOk(true);
                  setNlEmail("");
                  setTimeout(() => setNlOk(false), 3500);
                }
              }}
              className="mt-6 flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={nlEmail}
                onChange={(e) => setNlEmail(e.target.value)}
                className="flex-1 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-gold"
              />
              <button className="rounded-full bg-gold text-gold-foreground px-6 py-3 text-sm font-semibold hover:brightness-105 transition">
                Subscribe
              </button>
            </form>
            {nlOk && (
              <div className="mt-3 inline-flex items-center gap-2 text-sm text-gold">
                <CheckCircle2 className="h-4 w-4" /> You're subscribed. Welcome!
              </div>
            )}
          </div>

          <div className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-soft space-y-5">
            <h3 className="font-display text-2xl font-semibold text-primary">Visit or reach us</h3>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/8 text-primary"><MapPin className="h-4 w-4" /></span>
                <div>
                  <div className="font-medium text-primary">Campus</div>
                  <div className="text-muted-foreground">Kharian Road, Lalamusa, Punjab 50250, Pakistan</div>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/8 text-primary"><Phone className="h-4 w-4" /></span>
                <div>
                  <div className="font-medium text-primary">Phone</div>
                  <div className="text-muted-foreground">+92 53 111 000 000</div>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/8 text-primary"><Mail className="h-4 w-4" /></span>
                <div>
                  <div className="font-medium text-primary">Email</div>
                  <div className="text-muted-foreground">hello@naveedesahar.edu.pk</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="rounded-3xl bg-card border border-border p-8 md:p-12 shadow-elegant">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Get in touch</span>
          <h3 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-primary text-balance">
            Have a question? We'd love to help.
          </h3>

          <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-5" aria-live="polite">
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Your name" name="name" error={errors.name}>
                <input name="name" maxLength={80} className={inputCls(!!errors.name)} placeholder="Amina Rauf" />
              </Field>
              <Field label="Email" name="email" error={errors.email}>
                <input name="email" type="email" maxLength={160} className={inputCls(!!errors.email)} placeholder="you@email.com" />
              </Field>
            </div>
            <Field label="Subject" name="subject" error={errors.subject}>
              <input name="subject" maxLength={120} className={inputCls(!!errors.subject)} placeholder="Admissions inquiry" />
            </Field>
            <Field label="Message" name="message" error={errors.message}>
              <textarea name="message" rows={5} maxLength={1000} className={inputCls(!!errors.message) + " resize-none"} placeholder="Tell us how we can help…" />
            </Field>

            <div className="flex items-center justify-between gap-4 flex-wrap">
              <p className="text-xs text-muted-foreground">
                We typically reply within one business day.
              </p>
              <button className="rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm font-medium shadow-soft hover:-translate-y-0.5 transition-transform">
                Send message
              </button>
            </div>

            {sent && (
              <div className="rounded-xl bg-primary/8 border border-primary/15 text-primary px-4 py-3 text-sm inline-flex items-center gap-2 animate-fade-in">
                <CheckCircle2 className="h-4 w-4 text-gold" /> Thanks! Your message has been received.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function inputCls(hasError: boolean) {
  return `w-full rounded-xl bg-background border ${
    hasError ? "border-destructive" : "border-input"
  } px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition`;
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={name} className="block">
      <span className="block text-sm font-medium text-primary mb-1.5">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
