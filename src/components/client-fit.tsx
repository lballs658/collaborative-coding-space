import { Building2, CarFront, ShieldCheck, Sparkles } from "lucide-react";

const goodFit = [
  "Repair shops needing module programming or coding after replacement",
  "Body shops finishing collision jobs that require electronics setup",
  "Performance shops that need supported ECU/TCU calibration workflows",
  "Dealers and specialty shops that need mobile computer-side support",
  "Private clients with clear VIN, vehicle details, and a defined request",
];

const advantages = [
  {
    title: "Fast, VIN-verified quotes",
    body: "Send the VIN and a short description of the job. You get a clear feasibility answer and a firm price before anyone is dispatched.",
  },
  {
    title: "We come to your bay",
    body: "Mobile service to your shop, lot, or approved location means the vehicle never has to leave your workflow or your customer's timeline.",
  },
  {
    title: "Real specialists, not generalists",
    body: "Programming, cloning, coding, and calibration are our full-time focus. That means fewer surprises and a cleaner handoff on every job.",
  },
  {
    title: "Backed by proper tooling",
    body: "OEM software workflows, bench and boot support, and network-level diagnostic tools when the job needs more than a scan tool.",
  },
];

export function ClientFit() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Client fit
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Built for shops that need the job finished, not guessed at.
          </h2>
          <p className="mt-4 text-muted-foreground">
            This is not a general mobile mechanic service. Auto Lab Solutions is for electronics,
            software, module replacement, controller work, and vehicle network problems where the
            right tooling and workflow matter.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4">
              <Building2 className="h-5 w-5 text-primary" />
              <span className="text-sm text-foreground/90">Shop, dealer, and body shop friendly</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4">
              <CarFront className="h-5 w-5 text-primary" />
              <span className="text-sm text-foreground/90">Approved private clients accepted</span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:col-span-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold">Good-fit jobs</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {goodFit.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {advantages.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
