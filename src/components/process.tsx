const steps = [
  {
    n: "1",
    title: "Send the job details",
    body: "VIN, vehicle, service needed, notes, and location.",
  },
  {
    n: "2",
    title: "We verify support",
    body: "We confirm support, requirements, and feasibility.",
  },
  {
    n: "3",
    title: "Quote and schedule",
    body: "Travel, price, requirements, and service window are set before dispatch.",
  },
];

export function Process() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Booking</p>
          <h2 className="mt-2 font-display text-2xl font-bold">Three steps. No guesswork.</h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-3 rounded-xl border border-border bg-card p-4">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {s.n}
              </span>
              <div>
                <h3 className="font-display text-sm font-semibold">{s.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
