import { motion } from "motion/react";
import mdShahjalal from "@/assets/directors/md-shahjalal.jpg";
import shakikul from "@/assets/directors/shakikul.jpg";
import shabnam from "@/assets/directors/shabnam.jpg";
import abdusSamad from "@/assets/directors/abdus-samad.jpg";

const directors = [
  { name: "MD Shahjalal", role: "Managing Director", image: mdShahjalal },
  { name: "Shakikul Hossain Biswas", role: "Chairman", image: shakikul },
  { name: "Shabnam Shobhan", role: "Vice Chairman", image: shabnam },
  { name: "Md. Abdus Samad (Sakir)", role: "Director", image: abdusSamad },
];

export function Directors() {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Leadership</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">Meet our board of directors</h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {directors.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-card rounded-3xl p-6 border border-border shadow-soft hover:shadow-elegant transition"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[image:var(--gradient-primary)] shadow-glow">
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-5 text-center">
                <h3 className="font-semibold text-lg">{d.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{d.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
