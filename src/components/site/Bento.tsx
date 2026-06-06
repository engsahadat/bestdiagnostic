import { motion } from "motion/react";
import { Stethoscope, Microscope, FileCheck, Clock, Heart, FlaskConical } from "lucide-react";

const items = [
  { icon: Stethoscope, title: "Best Pathology Doctors", desc: "Senior pathologists examine every report personally.", cls: "md:col-span-2 md:row-span-2 bg-[image:var(--gradient-primary)] text-primary-foreground" },
  { icon: Microscope, title: "Quick Examination", desc: "Fast-track service for urgent diagnostic needs.", cls: "bg-card" },
  { icon: FileCheck, title: "Quick Report", desc: "Reports delivered same-day or within 24 hours.", cls: "bg-card" },
  { icon: Clock, title: "24/7 Support", desc: "We are here when you need answers.", cls: "bg-secondary" },
  { icon: Heart, title: "Patient First", desc: "Comfort and confidentiality, always.", cls: "bg-secondary" },
  { icon: FlaskConical, title: "Modern Equipment", desc: "Latest Beckman Coulter & Roche analyzers.", cls: "md:col-span-2 bg-foreground text-background" },
];

export function Bento() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-12"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">What we offer</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Diagnostics built around <span className="text-gradient">your care</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 md:auto-rows-[180px] gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`group relative rounded-3xl border border-border/60 p-6 overflow-hidden shadow-soft ${it.cls}`}
            >
              <it.icon className="w-8 h-8 mb-4 opacity-90" />
              <h3 className="text-xl font-semibold font-display">{it.title}</h3>
              <p className="mt-2 text-sm opacity-80 max-w-sm">{it.desc}</p>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-white/10 group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
