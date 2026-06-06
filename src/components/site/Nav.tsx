import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/best-logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 sm:h-24 md:h-28 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center group"
          >
            <img
            src={logo}
            alt="BEST Health Diagnostics logo"
            className="h-14 sm:h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground" }}
              className="text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://bestehrbd.com/bts/medical.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-2.5 sm:px-3 md:px-4 h-7 sm:h-8 md:h-9 rounded-full bg-foreground text-background text-[11px] sm:text-xs md:text-sm font-medium hover:opacity-90 transition shadow-soft whitespace-nowrap"
          >
            Collect Report
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Toggle menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} className="md:hidden border-t border-border/60 overflow-hidden">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm">
                {l.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
