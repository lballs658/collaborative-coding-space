import { Cpu, Copy, Gauge, Stethoscope, Settings2, Network } from "lucide-react";
import ecuImg from "@/assets/ecu.jpg";

const services = [
  {
    icon: Cpu,
    title: "OEM programming & flashing",
    body: "Module programming, replacement setup, coding, configuration, software updates, VIN writing, and immobilizer-related setup where supported.",
  },
  {
    icon: Copy,
    title: "ECU / TCU cloning",
    body: "Original-to-replacement ECM and TCM cloning when the controller family, read/write method, immobilizer data, and target module are compatible.",
  },
  {
    icon: Gauge,
    title: "Supported tuning & calibration",
    body: "ECU and TCU calibration support through OBD, bench, or boot workflows. Legal compliance, controller support, and vehicle condition are verified first.",
  },
  {
    icon: Stethoscope,
    title: "Qualified diagnostics",
    body: "Diagnostics for programming customers, repair shops, body shops, and repeat clients. General diagnostic-only requests are reviewed before booking.",
  },
  {
    icon: Settings2,
    title: "Electronic service functions",
    body: "Battery registration, steering angle calibration, throttle relearn, injector coding, ABS bleed, EPB service, and related adaptations where supported.",
  },
  {
    icon: Network,
    title: "Network & communication faults",
    body: "CAN/LIN communication checks, module wake-up issues, power/ground verification, oscilloscope support, and no-communication fault direction for qualified jobs.",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Services
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            The electronics side of the vehicle, handled correctly.
          </h2>
          <p className="mt-5 text-muted-foreground">
            The site should sell the outcome, not the tool list. Shops call because a module needs
            to be programmed, a replacement ECU needs to work, a collision job needs calibration, or
            a vehicle is stuck because the computer-side work is outside normal mechanical repair.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Every quote depends on VIN, module, controller, software access, security requirements,
            and vehicle condition. Unsupported requests are rejected before dispatch.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
            <img
              src={ecuImg}
              alt="ECU circuit board connected to a bench programming tool"
              width={1200}
              height={1008}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
