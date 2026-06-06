import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

type Props = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  crumb?: string;
};

export function PageHeader({ eyebrow, title, highlight, description, crumb }: Props) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-mesh">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs text-muted-foreground"
        >
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{crumb ?? title}</span>
        </motion.div>

        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-sm font-semibold text-primary uppercase tracking-[0.2em]"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-3 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          {title}{" "}
          {highlight && <span className="text-gradient">{highlight}</span>}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
