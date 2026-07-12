import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What should I send before booking?",
    a: "Send the VIN, year/make/model, service needed, module numbers or fault codes when available, and the vehicle location.",
  },
  {
    q: "Do you have a shop I can visit?",
    a: "No. Auto Lab Solutions is mobile only and does not have a public walk-in location.",
  },
  {
    q: "Are all services available for every brand?",
    a: "No. Support depends on the vehicle and job. Diagnostics are not offered for Volvo, Subaru, Nissan, or Honda; programming or tuning may be available for some cases.",
  },
  {
    q: "How does travel pricing work?",
    a: "Travel pricing varies by distance, tolls, parking access, job type, and scheduling route. It is confirmed before dispatch.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">FAQ</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Common questions</h2>
      </div>

      <div className="mt-8 space-y-3">
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
