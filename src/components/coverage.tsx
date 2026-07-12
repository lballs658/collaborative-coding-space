import { MapPin, Clock, Navigation, PhoneCall, BadgeCheck } from "lucide-react";

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
    <section id="coverage" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Service area
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Mobile coverage across North Jersey and NYC.
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            We come to repair shops, body shops, performance shops, dealers, and approved private
            client locations. Travel pricing changes by distance, tolls, parking access, and job
            type.
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

          <div className="mt-8 rounded-xl border border-border bg-card p-5">
            <div className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <Navigation className="h-4 w-4" />
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Best-fit jobs are scheduled during 9:00 AM – 7:00 PM service hours. Same-day service
                depends on job type, support verification, current route, and distance.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
            <BadgeCheck className="h-5 w-5" />
          </span>
          <h3 className="mt-5 font-display text-xl font-semibold">What to expect when you call</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Every job starts with a quick verification so we show up prepared and priced correctly.
            Share the VIN and vehicle history if you have it, and we handle the rest.
          </p>
          <div className="mt-5 space-y-3">
            <div className="flex items-start gap-3 rounded-lg border border-border bg-surface/60 p-4">
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <PhoneCall className="h-4 w-4" />
              </span>
              <p className="text-sm text-foreground/90">
                <span className="font-semibold text-foreground">No calls without a VIN or vehicle details.</span>{" "}
                A VIN, year, make, model, and a short description of the concern let us confirm
                feasibility and quote accurately on the first call.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-border bg-surface/60 p-4">
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <Clock className="h-4 w-4" />
              </span>
              <p className="text-sm text-foreground/90">
                <span className="font-semibold text-foreground">Same-day slots when the route allows.</span>{" "}
                Book early in the day for the best chance of same-day dispatch across NJ and NYC.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-border bg-surface/60 p-4">
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <BadgeCheck className="h-4 w-4" />
              </span>
              <p className="text-sm text-foreground/90">
                <span className="font-semibold text-foreground">Firm pricing, no bay time wasted.</span>{" "}
                Travel, labor, and programming are quoted up front, so shops and clients know
                exactly what the job costs before we roll.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
