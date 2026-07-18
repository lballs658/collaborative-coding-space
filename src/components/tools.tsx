import { Flag, Globe2, Compass, Wrench } from "lucide-react";

const cards = [
  {
    icon: Flag,
    title: "American OEM Platforms",
    items: [
      "Ford — IDS, FDRS and FJDS",
      "General Motors — Techline Connect and Tech2Win",
      "FCA / Stellantis — wiTECH and CDA 6",
    ],
  },
  {
    icon: Globe2,
    title: "European OEM Platforms",
    items: [
      "BMW / MINI — ISTA, INPA, E-Sys and WinKFP",
      "Volkswagen / Audi — ODIS",
      "Porsche — PT4G",
      "Jaguar / Land Rover — SDD",
      "Volvo — VIDA",
    ],
  },
  {
    icon: Compass,
    title: "Asian OEM Platforms",
    items: [
      "Toyota / Lexus — Techstream and ISTA",
      "Honda / Acura — HDS",
      "Nissan / Infiniti — CONSULT",
      "Mazda — IDS and MADRS",
    ],
  },
  {
    icon: Wrench,
    title: "Primary Tuning Platforms",
    items: ["Alientech — KESS3", "AutoTuner", "MAGICMOTORSPORT — FLEX"],
    footer:
      "Additional specialized platforms may be used when a primary system does not support the vehicle or controller.",
  },
];

export function Tools() {
  return (
    <section id="tools" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Professional platforms
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Factory software and professional tuning tools.
        </h2>
        <p className="mt-4 text-muted-foreground">
          We use manufacturer-specific software, supported vehicle interfaces, and professional
          ECU and TCU programming platforms selected for each vehicle, module, and job.
        </p>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <article
            key={c.title}
            className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
          >
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <c.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-3 font-display text-base font-semibold">{c.title}</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {c.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {c.footer && (
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{c.footer}</p>
            )}
          </article>
        ))}
      </div>

      <p className="mt-8 text-xs leading-relaxed text-muted-foreground/80">
        Platform availability and supported procedures depend on the VIN, vehicle configuration,
        module, software access, and job condition. All product and manufacturer names are
        trademarks of their respective owners. Auto Lab Solutions is an independent service
        provider and is not affiliated with the listed manufacturers.
      </p>
    </section>
  );
}
