import { Cpu, Copy, Gauge, Stethoscope, KeyRound, Settings2, AlertTriangle } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "OEM programming & flashing",
    body: "Replacement setup, coding, configuration, software updates, and OEM workflows where supported.",
  },
  {
    icon: Copy,
    title: "ECU / TCU cloning",
    body: "Original-to-replacement module cloning when the controller and target module are compatible.",
  },
  {
    icon: Gauge,
    title: "Aftermarket software & tuning",
    body: "Supported ECU and TCU software or calibration work, reviewed case by case.",
  },
  {
    icon: Stethoscope,
    title: "Qualified diagnostics",
    body: "Computer-side fault finding for supported brands and qualified jobs.",
  },
  {
    icon: KeyRound,
    title: "Keys & immobilizer programming",
    body: "Key, immobilizer, and security-related programming for supported vehicles and brands.",
  },
  {
    icon: Settings2,
    title: "Coding & service functions",
    body: "Supported adaptations, relearns, coding, and electronic service procedures.",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="grid gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div className="max-w-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Services</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Computer-side work for most brands.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Support depends on the vehicle, module, software access, and job condition. Send the VIN
            and request first so availability and pricing can be confirmed before dispatch.
          </p>
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-primary/35 bg-primary/10 p-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm leading-relaxed text-foreground/90">
              <strong>Volvo, Subaru, Nissan, and Honda:</strong> diagnostics are not offered.
              Programming or tuning may be available for some cases.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 font-display text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
