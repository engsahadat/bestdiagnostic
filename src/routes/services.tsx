import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { CheckCircle2, FlaskConical, Microscope, HeartPulse, Activity, Droplets, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Tests — Best Health Diagnostic" },
      { name: "description", content: "Full menu of pathology, biochemistry, microbiology, immunology, hormone and serology tests." },
      { property: "og:title", content: "Services & Tests — Best Health Diagnostic" },
      { property: "og:description", content: "Full diagnostic test menu across Haematology, Biochemistry and more." },
    ],
  }),
  component: ServicesPage,
});

const departments = [
  {
    icon: Droplets,
    title: "Haematology",
    items: ["Blood CP", "TC/DC", "Total Eosinophil Count", "Blood ESR", "Haemoglobin (Hb%)", "Blood Grouping", "Platelet Count", "PCV/HCT", "Sickle Cell", "MP", "MF", "RBC Count", "Reticulocyte Count"],
  },
  {
    icon: FlaskConical,
    title: "Biochemistry",
    items: ["FBS / RBS", "2 hours ABF", "OGTT / GTT", "HbA1c", "S. Creatinine", "S. Urea", "Uric Acid", "Lipid Profile", "S. Bilirubin", "SGPT / SGOT", "Alkaline Phosphatase", "S. Electrolytes", "TSH", "FT3 / FT4", "Calcium", "S. Albumin", "Total Protein", "Amylase", "Lactate", "Magnesium"],
  },
  {
    icon: Microscope,
    title: "Serology",
    items: ["Widal Test (S/F)", "VDRL / RPR", "HBsAg (Screening)", "TPHA (Confirmatory)", "Anti HCV", "ICT for Malaria", "Dengue NS1 / IgG / IgM", "CRP", "ASO Titre", "RA Test", "Allergy Anti-bodies"],
  },
  {
    icon: HeartPulse,
    title: "Immunochemistry",
    items: ["Vitamin D (25-OH)", "Vitamin B12", "Anti-HBs / Anti-HBc", "HBV DNA (Quantitative)", "HCV RNA (Quantitative)", "FSH", "LH", "Prolactin", "Estradiol", "Progesterone", "PSA", "Beta hCG"],
  },
  {
    icon: ShieldCheck,
    title: "Microbiology",
    items: ["Urine R/E", "Stool R/E", "Pregnancy Test", "AFB Sputum", "C/S Urine", "C/S Sputum", "C/S Pus", "C/S Stool", "C/S Vaginal Swab", "C/S Semen"],
  },
  {
    icon: Activity,
    title: "Hormone & Other",
    items: ["Thyroid Profile", "Cortisol", "Insulin Fasting", "C-Peptide", "Iron Profile", "Vitamin Profile", "ECG", "X-Ray", "USG Whole Abdomen", "Echocardiography"],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <PageHeader
          eyebrow="Laboratory & Imaging"
          title="A complete menu of"
          highlight="diagnostic tests"
          description="Six dedicated departments, modern Beckman Coulter & Roche analyzers, and same-day reports for most investigations."
        />

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
            {departments.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-3xl border border-border/60 bg-card p-8 shadow-soft hover:shadow-elegant transition overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[image:var(--gradient-primary)] opacity-10 blur-2xl group-hover:opacity-20 transition" />
                <div className="flex items-center gap-4 relative">
                  <span className="grid place-items-center w-12 h-12 rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-glow">
                    <d.icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-2xl font-bold font-display">{d.title}</h3>
                </div>
                <ul className="mt-6 grid sm:grid-cols-2 gap-x-4 gap-y-2 relative">
                  {d.items.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto rounded-[2rem] bg-foreground text-background p-12 md:p-16 text-center shadow-elegant relative overflow-hidden">
            <div className="absolute inset-0 bg-[image:var(--gradient-primary)] opacity-20" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold">Don't see your test?</h2>
              <p className="mt-4 opacity-80 max-w-xl mx-auto">We perform 200+ investigations. Call us — chances are it's on our menu.</p>
              <Link to="/contact" className="mt-8 inline-flex items-center h-12 px-7 rounded-full bg-background text-foreground font-semibold hover:opacity-90 transition">
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
