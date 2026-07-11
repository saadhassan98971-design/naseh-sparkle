import { Facebook, Instagram, Youtube, Linkedin, GraduationCap } from "lucide-react";

const LINKS = {
  School: ["About Us", "Admissions", "Faculty", "Careers"],
  Community: ["Alumni Network", "Parent Portal", "Events", "Blog"],
  Support: ["Contact", "FAQ", "Privacy", "Policies"],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-8">
      <div className="container-page">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 pb-14 border-b border-primary-foreground/15">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold text-gold-foreground">
                <GraduationCap className="h-6 w-6" />
              </span>
              <div>
                <div className="font-display text-xl font-semibold">Naveed-e-Sahar</div>
                <div className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">
                  School · Lalamusa
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
              A community-rooted, values-driven K–12 school shaping thoughtful,
              courageous leaders since 1999. Affiliated with BISE Gujranwala.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-gold-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <h4 className="font-display text-lg font-semibold mb-4">{group}</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/75">
                {items.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-gold transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Naveed-e-Sahar School. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
