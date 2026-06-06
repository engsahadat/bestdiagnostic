import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Directors } from "@/components/site/Directors";
import { PageHeader } from "@/components/site/PageHeader";
import { Users, Award, Globe2, HeartPulse } from "lucide-react";
import equipment from "@/assets/equipment.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Best Health Diagnostic & Medical" },
      { name: "description", content: "25 years of trusted diagnostic care. Meet the team and learn what drives Best Health." },
      { property: "og:title", content: "About Best Health Diagnostic & Medical" },
      { property: "og:description", content: "25 years of trusted diagnostic care in Dhaka." },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { icon: Award, n: "25", l: "Years of experience" },
  { icon: Users, n: "300K+", l: "Satisfied patients" },
  { icon: HeartPulse, n: "6", l: "Lab departments" },
  { icon: Globe2, n: "25+", l: "Countries served" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <PageHeader
          eyebrow="Who we are"
          title="Welcome to"
          highlight="Best Health"
          description="Founded 25 years ago, our diagnostic team comprises highly skilled and knowledgeable professionals. We all share a common goal — helping you."
        />

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-[image:var(--gradient-primary)] opacity-15 blur-3xl rounded-full" />
              <img src={equipment} alt="Our laboratory" loading="lazy" className="relative rounded-3xl shadow-elegant w-full h-[480px] object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">Our story</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">Sharing health tips for a <span className="text-gradient">healthy mind</span></h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                We are always with you. Best Health Diagnostic & Medical Limited's professionals — physicians, nurses, pharmacists and health technicians — work across specialized branches: cardiology, pulmonology, neurology, sports medicine, research and public health.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                As a prerequisite to employment in Asia, Europe and Gulf countries, Bangladeshi nationals are required to be examined and issued a Medical Fitness Certificate — we serve passengers travelling to Libya, Bahrain, Dubai, Singapore, Malaysia, Qatar, Lebanon, Jordan, Iraq, Saudi Arabia, Oman, Kuwait, Maldives, Korea, Mauritius, Ireland, UK, Spain, USA, Canada, Sweden, Cyprus, Ukraine, Greece, Brunei, Italy, Vietnam and Romania.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-6 bg-secondary/50">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-3xl p-8 border border-border shadow-soft text-center"
              >
                <span className="inline-grid place-items-center w-14 h-14 rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground mb-5 shadow-glow">
                  <s.icon className="w-6 h-6" />
                </span>
                <div className="text-4xl font-bold font-display text-gradient">{s.n}</div>
                <div className="text-sm text-muted-foreground mt-2">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <Directors />
      </main>
      <Footer />
    </div>
  );
}
