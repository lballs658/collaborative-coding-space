import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What should I send before booking?",
    a: "Send the VIN, year/make/model, service needed, module part numbers if available, fault codes or shop notes, and the service location. Without that information, a real quote is not possible.",
  },
  {
    q: "Do you work with repair shops and body shops?",
    a: "Yes. The service is built for repair shops, body shops, performance shops, dealers, and approved private clients that need mobile electronics, programming, cloning, tuning, or diagnostics support.",
  },
  {
    q: "Which brands are excluded from diagnostics?",
    a: "Diagnostics are not offered for Volvo, Subaru, Nissan/Infiniti, or Honda/Acura. Programming and tuning may still be available for select vehicles in those brands after verification.",
  },
  {
    q: "Is diagnostics available to every customer?",
    a: "No. Diagnostics are available for qualified programming customers, repair shops, body shops, and repeat clients. General diagnostic-only requests are reviewed before booking.",
  },
  {
    q: "What determines whether a vehicle can be serviced?",
    a: "Availability depends on the VIN, model year, module, controller, software access, security gateway rules, immobilizer data, battery condition, network condition, and previous work done to the vehicle.",
  },
  {
    q: "Do you do mechanical repairs?",
    a: "Not as a general service. The focus is computer-side automotive work: programming, cloning, calibration, coding, electronic service functions, and electronics diagnostics for qualified jobs.",
  },
  {
    q: "How does travel pricing work?",
    a: "Travel pricing varies by distance, tolls, parking access, job type, and scheduling route. It is confirmed before dispatch.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-24">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">FAQ</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Common questions</h2>
        <p className="mt-4 text-muted-foreground">
          Clear answers create better inquiries and fewer wasted calls.
        </p>
      </div>

      <div className="mt-12 space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="overflow-hidden rounded-xl border border-border bg-card">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-base font-semibold">{f.q}</span>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              {isOpen && (
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
