import { Check, Wrench, ClipboardCheck, Route, ShieldCheck } from "lucide-react";

const points = [
  "Mobile service for shops, dealers, body shops, performance shops, and approved private clients",
  "VIN-based verification before quoting or dispatch",
  "OEM software workflows where supported",
  "Module replacement programming, coding, and cloning",
  "Controller support and security requirements checked upfront",
  "Clear limits before pricing so bad jobs do not waste your bay",
];

const differentiators = [
  {
    icon: ClipboardCheck,
    title: "Scoped before dispatch",
    body: "You send the VIN and request first. We verify feasibility before quoting so the job starts with a plan.",
  },
  {
    icon: Wrench,
    title: "Computer-side specialty",
    body: "The work is focused on programming, cloning, calibration, coding, and electronics support, not general mechanical repair.",
  },
  {
    icon: Route,
    title: "Mobile shop support",
    body: "We come to the bay, lot, dealer, or approved location. Travel cost is confirmed before the appointment.",
  },
  {
    icon: ShieldCheck,
    title: "Firm pricing upfront",
    body: "Travel, labor, and programming are quoted before dispatch, so shops and clients know exactly what a job costs before we roll.",
  },
];

export function WhyUs() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Why call Auto Lab Solutions
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              A better result starts before the appointment.
            </h2>
            <p className="mt-4 text-muted-foreground">
              The strongest lead filter is honesty. The site now makes clear who should call, what
              to send, what is supported, and what will be rejected before anyone wastes time.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3.5"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => (
            <article key={item.title} className="rounded-xl border border-border bg-card p-5">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
