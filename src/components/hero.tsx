import { Phone, MessageSquare, MapPin, Cpu, Clock } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden gradient-hero pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-9 px-5 py-12 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <Cpu className="h-3.5 w-3.5 text-primary" />
            Mobile automotive electronics · NJ &amp; NYC
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Dealer-level <span className="text-gradient">automotive electronics</span>, delivered to
            you.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Mobile programming, module cloning, supported tuning, and qualified diagnostics for
            repair shops, body shops, performance shops, dealers, and qualified private clients.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="tel:+15513201730"
              className="inline-flex items-center gap-2 rounded-full gradient-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              <Phone className="h-4 w-4" />
              Call 551-320-1730
            </a>
            <a
              href="sms:+15513201730?&body=VIN:%0AYear/make/model:%0AService needed:%0AFault codes or notes:%0ALocation:"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              <MessageSquare className="h-4 w-4 text-primary" />
              Text job details
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Mobile service only
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" /> 9 AM–7 PM
            </span>
            <span className="inline-flex items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" /> Support verified by VIN
            </span>
          </div>
        </div>

        <div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-card">
            <img
              src={heroImg}
              alt="Automotive electronics technician using a rugged diagnostic laptop connected to a vehicle in a dark professional workshop"
              width={1600}
              height={1200}
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
