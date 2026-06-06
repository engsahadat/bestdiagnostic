import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Bento } from "@/components/site/Bento";
import { Directors } from "@/components/site/Directors";
import { HowWeHelp } from "@/components/site/HowWeHelp";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Health Diagnostic & Medical — Committed to Improve Healthcare" },
      { name: "description", content: "Precision diagnostics, certified pathologists and fast reports. Medical fitness center for overseas employment and everyday care in Dhaka." },
      { property: "og:title", content: "Best Health Diagnostic & Medical" },
      { property: "og:description", content: "Modern diagnostic care, fast reports and a complete medical fitness center." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Bento />
        <Directors />
        <HowWeHelp />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
