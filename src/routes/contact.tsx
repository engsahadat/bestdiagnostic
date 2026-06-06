import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Best Health Diagnostic" },
      { name: "description", content: "Visit our Dhaka center, call us, or send a message. We respond within 24 hours." },
      { property: "og:title", content: "Contact Best Health Diagnostic" },
      { property: "og:description", content: "Visit, call or message us — we respond within 24 hours." },
    ],
  }),
  component: ContactPage,
});

const info = [
  { icon: MapPin, label: "Address", value: "53/2, Naya Paltan / Fakirapool, D.I.T Extension Road, Dhaka-1000" },
  { icon: Phone, label: "Phone", value: "+880 1756-441699", href: "tel:+8801756441699" },
  { icon: Mail, label: "Email", value: "best.diagnostic.bd@gmail.com", href: "mailto:best.diagnostic.bd@gmail.com" },
  { icon: Clock, label: "Hours", value: "Sat – Thu, 9:00 AM – 9:00 PM (Friday closed)" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <PageHeader
          eyebrow="Get in touch"
          title="We'd love to"
          highlight="hear from you"
          description="Questions about a test, a report, or an appointment? Our team replies within 24 hours."
        />

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-4"
            >
              {info.map((it, i) => {
                const Inner = (
                  <div className="flex items-start gap-4 p-6 rounded-3xl border border-border bg-card shadow-soft hover:shadow-elegant transition">
                    <span className="grid place-items-center w-12 h-12 rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-glow flex-shrink-0">
                      <it.icon className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">{it.label}</p>
                      <p className="mt-1 text-foreground font-medium">{it.value}</p>
                    </div>
                  </div>
                );
                return (
                  <motion.div
                    key={it.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    {it.href ? <a href={it.href}>{Inner}</a> : Inner}
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 md:p-10 shadow-elegant"
            >
              <h2 className="text-3xl font-bold tracking-tight">Send us a message</h2>
              <p className="mt-2 text-muted-foreground">We typically reply within a few hours.</p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" placeholder="Your full name" />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              </div>
              <Field label="Subject" name="subject" placeholder="What is this regarding?" className="mt-4" />
              <div className="mt-4">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us how we can help…"
                  className="mt-2 w-full rounded-2xl bg-background border border-border px-4 py-3 text-sm outline-none focus:border-primary transition"
                />
              </div>
              <button type="submit" className="mt-6 inline-flex items-center gap-2 h-12 px-7 rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground font-medium shadow-elegant hover:shadow-glow transition">
                <Send className="w-4 h-4" /> {sent ? "Message sent" : "Send message"}
              </button>
            </motion.form>
          </div>
        </section>

        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-elegant border border-border">
            <iframe
              title="Best Health Diagnostic location"
              src="https://www.google.com/maps?q=Fakirapool,+DIT+Extension+Road,+Dhaka&output=embed"
              loading="lazy"
              className="w-full h-[440px] border-0"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text", placeholder, className = "" }: { label: string; name: string; type?: string; placeholder?: string; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full h-12 rounded-full bg-background border border-border px-5 text-sm outline-none focus:border-primary transition"
      />
    </div>
  );
}
