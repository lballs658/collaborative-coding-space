const steps = [
  {
    n: "01",
    title: "Send the job details",
    body: "Send the VIN, year/make/model, location, service needed, module part numbers if available, and any fault codes or shop notes.",
  },
  {
    n: "02",
    title: "We verify support",
    body: "Controller family, software access, security gateway rules, immobilizer requirements, and module compatibility are checked before pricing.",
  },
  {
    n: "03",
    title: "Quote and schedule",
    body: "Once the job is approved, travel pricing, service window, requirements, and expected outcome are confirmed before dispatch.",
  },
  {
    n: "04",
    title: "Complete and document",
    body: "The programming, cloning, calibration, or diagnostic workflow is completed on site, then the result and next steps are clearly explained.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            How booking works
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            No VIN, no real quote. That protects both sides.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A serious electronics job needs verification before anyone promises a price or outcome.
            This keeps the schedule clean and prevents wasted travel.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-xl border border-border bg-card p-7">
              <span className="font-display text-4xl font-bold text-primary/30">{s.n}</span>
              <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
