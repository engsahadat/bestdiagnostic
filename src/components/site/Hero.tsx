import { motion } from "motion/react";
import { ArrowRight, Phone, ShieldCheck, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-lab.jpg";

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-mesh">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-xs font-medium text-secondary-foreground"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Trusted diagnostic care since 2010
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Committed to <span className="text-gradient">improve</span> healthcare.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl"
          >
            Precision diagnostics, certified pathologists and fast reports — a complete medical fitness center for overseas employment and everyday care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground font-medium shadow-elegant hover:shadow-glow transition-all">
              Book Appointment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+8801000000000" className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-border bg-card hover:bg-secondary transition">
              <Phone className="w-4 h-4 text-primary" /> +880 1756-441699
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { n: "50K+", l: "Patients served" },
              { n: "25+", l: "Countries" },
              { n: "98%", l: "Accuracy" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl md:text-3xl font-bold font-display text-foreground">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-[image:var(--gradient-primary)] opacity-20 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border/60">
            <img src={heroImg} alt="Diagnostic lab" width={1600} height={1200} className="w-full h-[520px] object-cover" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-elegant border border-border p-4 flex items-center gap-3 max-w-[240px]"
          >
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-primary/30 animate-pulse-ring" />
              <span className="relative grid place-items-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                <ShieldCheck className="w-5 h-5" />
              </span>
            </div>
            <div>
              <div className="text-sm font-semibold">ISO Certified</div>
              <div className="text-xs text-muted-foreground">Approved by GAMCA</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
