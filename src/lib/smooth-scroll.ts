import { useEffect } from "react";

// Route header nav / CTA labels that don't have their own section to a real one.
const ALIASES: Record<string, string> = {
  admissions: "contact",
  careers: "contact",
  alumni: "testimonials",
};

function resolveTarget(rawId: string): HTMLElement | null {
  const id = rawId.replace(/^#/, "");
  if (!id) return null;
  return (
    document.getElementById(id) ||
    (ALIASES[id] ? document.getElementById(ALIASES[id]) : null)
  );
}

function scrollToEl(el: HTMLElement) {
  const header = document.querySelector("header");
  const offset = (header?.getBoundingClientRect().height ?? 0) + 12;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top, behavior: prefersReduced ? "auto" : "smooth" });
}

export function useSmoothAnchors() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      e.preventDefault();

      if (href === "#" || href === "#!") return; // placeholder links: no-op

      const el = resolveTarget(href);
      if (el) {
        scrollToEl(el);
        history.replaceState(null, "", `#${el.id}`);
      }
    };
    document.addEventListener("click", onClick);

    // Handle initial hash on load
    if (window.location.hash) {
      const el = resolveTarget(window.location.hash);
      if (el) setTimeout(() => scrollToEl(el), 60);
    }

    return () => document.removeEventListener("click", onClick);
  }, []);
}
