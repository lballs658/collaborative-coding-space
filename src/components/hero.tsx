import { Phone, MessageSquare, ShieldCheck, MapPin, Cpu, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

const intakeItems = ["VIN", "Year / make / model", "Service needed", "Fault codes or shop notes", "Vehicle location"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden gradient-hero pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <Cpu className="h-3.5 w-3.5 text-primary" />
            Mobile automotive electronics · NJ &amp; NYC
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Mobile <span className="text-gradient">ECU programming</span>, cloning, tuning &amp;
            diagnostics for shops and serious clients.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Auto Lab Solutions handles the computer-side work most shops should not waste time
            fighting: OEM programming, module setup, ECU/TCU cloning, supported calibration work,
            and focused diagnostics. We verify support before dispatch so the job is scoped before
            anyone loses a bay.
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

          <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-3 py-2">
              <ShieldCheck className="h-4 w-4 shrink-0 text-primary" /> VIN-verified quotes
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-3 py-2">
              <Cpu className="h-4 w-4 shrink-0 text-primary" /> OEM workflows
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-3 py-2">
              <MapPin className="h-4 w-4 shrink-0 text-primary" /> Mobile service only
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border shadow-card">
            <img
              src={heroImg}
              alt="Technician running automotive programming software on a laptop connected to a vehicle"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-4 hidden w-64 rounded-xl border border-border bg-card/95 p-4 shadow-card backdrop-blur sm:block">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Send this first
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-foreground/90">
              {intakeItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
