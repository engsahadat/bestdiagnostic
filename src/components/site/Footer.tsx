import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/best-logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src={logo} alt="Best Health Diagnostic" className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
          <p className="mt-4 text-sm opacity-70 max-w-sm">
            A medical check-up center, specially for foreign passengers and everyday diagnostic care.
          </p>
          <div className="mt-6 space-y-2 text-sm opacity-80">
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary-glow" /> 1/A DIT Extension Road, Fakirapool, Dhaka-1000</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary-glow" /> +880 1756-441699</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary-glow" /> best.diagnostic.bd@gmail.com</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Working Hours</h4>
          <p className="text-sm opacity-80 flex items-center gap-2"><Clock className="w-4 h-4 text-primary-glow" /> Sat – Thu</p>
          <p className="text-sm opacity-80 mt-1">9:00 AM – 9:00 PM</p>
          <p className="text-sm opacity-60 mt-3">Friday closed</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <form className="flex flex-col gap-2">
            <input type="email" placeholder="Your email" className="bg-white/10 border border-white/20 rounded-full px-4 h-11 text-sm placeholder:text-white/50 outline-none focus:border-primary-glow" />
            <button className="h-11 rounded-full bg-[image:var(--gradient-primary)] font-medium text-sm hover:opacity-90 transition">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-14 pt-6 border-t border-white/10 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Best Health Diagnostic & Medical. All rights reserved.
      </div>
    </footer>
  );
}
