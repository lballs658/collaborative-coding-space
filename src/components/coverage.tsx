import { MapPin, Clock, Building2, CarFront, Route } from "lucide-react";

const areas = [
  "Bergen County, NJ",
  "Hudson County, NJ",
  "Essex County, NJ",
  "Passaic County, NJ",
  "Union County, NJ",
  "Morris County, NJ",
  "Manhattan, NY",
  "Brooklyn, NY",
  "Staten Island, NY",
];

export function Coverage() {
  return (
    <section id="coverage" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Service area
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Where we work & who we serve
        </h2>
        <p className="mt-4 text-muted-foreground">
          Mobile only — we come to your shop or location. No public walk-in.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {/* Coverage map card */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-card lg:col-span-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <MapPin className="h-4 w-4" /> Counties covered
          </div>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {areas.map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-sm text-foreground/90"
              >
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {a}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl border border-border bg-surface/60 p-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold">Hours</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Mon – Sat · 9 AM – 7 PM
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-surface/60 p-4">
              <Route className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold">Outside the area?</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Travel farther when costs are covered. Quoted up front.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Who we serve card */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <Building2 className="h-4 w-4" /> Who we serve
          </div>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3 rounded-xl border border-border bg-surface/60 p-4">
              <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm">Repair, body, performance shops & dealers</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-border bg-surface/60 p-4">
              <CarFront className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm">Qualified private clients with a defined request</span>
            </li>
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Not a general mobile mechanic. Scope is limited to supported automotive electronics,
            software, modules, keys, and qualified diagnostics.
          </p>
        </div>
      </div>
    </section>
  );
}
