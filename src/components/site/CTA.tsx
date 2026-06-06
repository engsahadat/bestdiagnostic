import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import bg from "@/assets/healthcare-cta.jpg";

export function CTA() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto relative rounded-[2rem] overflow-hidden shadow-elegant">
        <img src={bg} alt="" width={1600} height={900} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-primary/40" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative px-8 md:px-16 py-20 md:py-28 text-center text-background"
        >
          <p className="text-sm uppercase tracking-[0.3em] opacity-80">Book your visit</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            Your health, our <span className="text-primary-glow">priority</span>.
          </h2>
          <p className="mt-5 max-w-xl mx-auto opacity-90">
            Call us or schedule an appointment online — most reports ready the same day.
          </p>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="tel:+8801756441699"
            className="mt-8 inline-flex items-center gap-2 h-14 px-8 rounded-full bg-background text-foreground font-semibold shadow-glow"
          >
            <Calendar className="w-5 h-5 text-primary" /> Book Appointment
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
