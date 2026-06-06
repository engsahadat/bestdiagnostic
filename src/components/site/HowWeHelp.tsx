import { motion } from "motion/react";
import { Check } from "lucide-react";
import equipment from "@/assets/equipment.jpg";

const services = ["Haematology", "Biochemistry", "Immunology", "Ultrasound & X-Ray", "ECG", "Immunochemistry", "Cardiology", "Pathology"];

export function HowWeHelp() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-[image:var(--gradient-primary)] opacity-15 blur-3xl rounded-full" />
          <img src={equipment} alt="Lab equipment" width={1200} height={1200} loading="lazy" className="relative rounded-3xl shadow-elegant w-full h-[520px] object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">How we can help</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">A wide range of <span className="text-gradient">procedures</span></h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Our team of physicians, pathologists and allied professionals delivers complete checkup services across specialized branches — cardiology, pathology, neurology, sports medicine, research and public health.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3">
            {services.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-secondary border border-border"
              >
                <span className="grid place-items-center w-6 h-6 rounded-full bg-primary text-primary-foreground">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="text-sm font-medium">{s}</span>
              </motion.li>
            ))}
          </ul>
          <a href="#contact" className="mt-8 inline-flex items-center h-12 px-6 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition">
            Learn more
          </a>
        </motion.div>
      </div>
    </section>
  );
}
