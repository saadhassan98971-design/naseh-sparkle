import { createFileRoute } from "@tanstack/react-router";
import { useSmoothAnchors } from "@/lib/smooth-scroll";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { About } from "@/components/home/About";
import { News } from "@/components/home/News";
import { Classes } from "@/components/home/Classes";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Blog } from "@/components/home/Blog";
import { ContactBlock } from "@/components/home/ContactBlock";
import { Footer } from "@/components/home/Footer";
import ogImage from "@/assets/nss-og.jpg.asset.json";

const SITE_URL = "https://project--ba1e0edf-bff2-4c18-8601-4e890aaa71ae.lovable.app";
const OG_IMAGE = `${SITE_URL}${ogImage.url}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Naveed-e-Sahar School · Where Bright Futures Begin" },
      {
        name: "description",
        content:
          "Lalamusa's trusted K–12 school since 1999. Where curious minds meet courageous hearts — nurturing tomorrow's leaders through excellence, character, and care.",
      },
      { property: "og:title", content: "Naveed-e-Sahar School · Where Bright Futures Begin" },
      {
        property: "og:description",
        content:
          "25+ years of shaping Lalamusa's brightest minds. K–12 excellence, holistic learning, and character-driven education — affiliated with BISE Gujranwala.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Naveed-e-Sahar School · Where Bright Futures Begin" },
      {
        name: "twitter:description",
        content:
          "Lalamusa's trusted K–12 school since 1999 — nurturing tomorrow's leaders.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Index,
});

function Index() {
  useSmoothAnchors();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <News />
        <Classes />
        <Testimonials />
        <WhyChooseUs />
        <Blog />
        <ContactBlock />
      </main>
      <Footer />
    </div>
  );
}
