import { MapPin, AlertTriangle, Navigation } from "lucide-react";

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
            <AlertTriangle className="h-5 w-5" />
          </span>
          <h3 className="mt-5 font-display text-xl font-semibold">Brand &amp; job limits</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Availability depends on VIN, model year, module, controller, software access, security
            gateway rules, immobilizer data, battery condition, network condition, and previous work
            done to the vehicle.
          </p>
          <div className="mt-5 rounded-lg border border-border bg-surface/60 p-4">
            <p className="text-sm text-foreground/90">
              <span className="font-semibold text-foreground">Diagnostics are not offered</span> for
              Volvo, Subaru, Nissan/Infiniti, or Honda/Acura. Programming and tuning may still be
              available for select vehicles after verification.
            </p>
          </div>
          <div className="mt-4 rounded-lg border border-border bg-surface/60 p-4">
            <p className="text-sm text-foreground/90">
              Unsupported emission-delete, readiness-tampering, or illegal road-use tuning requests
              are not accepted. Calibration work is reviewed for supported and compliant use cases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
