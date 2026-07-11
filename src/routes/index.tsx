import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Naveed-e-Sahar School · Lalamusa | K–12 Education Since 1999" },
      {
        name: "description",
        content:
          "A leading K–12 private school in Lalamusa, Pakistan. 25+ years of academic excellence, holistic learning, and character-driven education. Affiliated with BISE Gujranwala.",
      },
      { property: "og:title", content: "Naveed-e-Sahar School · Lalamusa" },
      {
        property: "og:description",
        content:
          "Empowering the next generation of leaders through holistic K–12 education in Lalamusa, Pakistan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
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
