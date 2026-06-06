import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import hero from "@/assets/hero-lab.jpg";
import equipment from "@/assets/equipment.jpg";
import cta from "@/assets/healthcare-cta.jpg";

const images = [
  { src: hero, alt: "Laboratory analyzers", cls: "md:col-span-2 md:row-span-2" },
  { src: equipment, alt: "Diagnostic equipment", cls: "" },
  { src: cta, alt: "Patient care", cls: "" },
  { src: equipment, alt: "Centrifuge", cls: "" },
  { src: hero, alt: "Reagents & samples", cls: "md:col-span-2" },
  { src: cta, alt: "Reception area", cls: "" },
  { src: hero, alt: "Microscope station", cls: "" },
  { src: equipment, alt: "Sample processing", cls: "md:col-span-2" },
  { src: cta, alt: "Doctor consultation", cls: "" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Best Health Diagnostic" },
      { name: "description", content: "A look inside our laboratory, equipment and patient experience." },
      { property: "og:title", content: "Gallery — Best Health Diagnostic" },
      { property: "og:description", content: "Inside our lab and patient experience." },
      { property: "og:image", content: hero },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <PageHeader
          eyebrow="Inside our facility"
          title="A look inside our"
          highlight="diagnostic lab"
          description="Modern analyzers, calm patient spaces and a team that treats every sample like it matters — because it does."
        />

        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 md:auto-rows-[200px] gap-4">
            {images.map((img, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
                whileHover={{ y: -4 }}
                className={`group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition ${img.cls}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-background bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition">
                  {img.alt}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
