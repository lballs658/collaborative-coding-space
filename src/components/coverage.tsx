import { MapPin, Clock, Building2, CarFront } from "lucide-react";

const areas = ["North New Jersey", "Manhattan", "Brooklyn", "Staten Island"];

export function Coverage() {
  return (
    <section id="coverage" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Service area
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Mobile coverage across North Jersey and NYC.
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Mobile service only. No public shop or walk-in location.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {areas.map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground/90"
              >
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {a}
              </span>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-border bg-card p-4">
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Hours: 9 AM–7 PM. Travel pricing varies by distance, tolls, parking, and job type.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Who we serve
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold">
            Trade-focused, private clients welcome.
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-lg border border-border bg-surface/60 p-4">
              <Building2 className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm">Repair, body, performance shops, and dealers</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-surface/60 p-4">
              <CarFront className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm">Qualified private clients with a defined request</span>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            This is not a general mobile mechanic service. Work is limited to supported automotive
            electronics, software, modules, keys, and qualified diagnostics.
          </p>
        </div>
      </div>
    </section>
  );
}
