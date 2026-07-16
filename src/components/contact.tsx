import { useState } from "react";
import { Phone, MessageSquare, Mail, Instagram, Clock, Send, CheckCircle2, AlertCircle, MapPin } from "lucide-react";

import { ServiceAreaMap } from "@/components/service-area-map";

function encode(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      "form-name": "callback-request",
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      vin: String(data.get("vin") || ""),
      vehicle: String(data.get("vehicle") || ""),
      service: String(data.get("service") || ""),
      location: String(data.get("location") || ""),
      notes: String(data.get("notes") || ""),
      "bot-field": String(data.get("bot-field") || ""),
    };

    setStatus("sending");

    try {
      const response = await fetch("/forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });

      if (!response.ok) throw new Error("Form submission failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-9 px-5 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Send the VIN and service request.
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Include the vehicle, job, notes, and location. Texting is the fastest option.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <a
              href="tel:+15513201730"
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/50"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Call</span>
                <span className="font-display text-lg font-semibold">551-320-1730</span>
              </span>
            </a>
            <a
              href="sms:+15513201730?&body=VIN:%0AYear/make/model:%0AService needed:%0AFault codes or notes:%0ALocation:"
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/50"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <MessageSquare className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Text</span>
                <span className="font-display text-lg font-semibold">
                  VIN &amp; service request
                </span>
              </span>
            </a>
            <a
              href="mailto:info@autolabsolutions.net"
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/50"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-muted-foreground">Email</span>
                <span className="block truncate font-display text-base font-semibold sm:text-lg">
                  info@autolabsolutions.net
                </span>
              </span>
            </a>
            <a
              href="https://instagram.com/autolabllc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/50"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Instagram className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-muted-foreground">Instagram</span>
                <span className="block truncate font-display text-base font-semibold sm:text-lg">
                  @autolabllc
                </span>
                <span className="block text-xs text-muted-foreground">See recent work</span>
              </span>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 sm:col-span-2 lg:col-span-1">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Hours</span>
                <span className="font-display text-lg font-semibold">Mon – Sat · 9:00 AM – 7:00 PM</span>
              </span>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <ServiceAreaMap />
            <a
              href="https://www.google.com/search?q=Auto+Lab+Solutions&stick=H4sIAAAAAAAA_-NgU1IxqEgyM0lKNU62MEo2trA0NrQyqDAyNk5NSTO0SEsySDYzSU1dxCrkWFqSr-CTmKQQnJ9TWpKZn1cMAGlXEf49AAAA&hl=en&mat=CQsoVtQPueA1ElcBa0lj_9CKL9tS4A6lylhMqISc1uKu2HNAmxAldAtgpBoaQAHGsWbfWq5ZScV6mE0qGsPEZXjVY8sAyPgpdy9E_sDwiVYain3GrjTP8i10YNAdgtmb18c&authuser=4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 border-t border-border px-4 py-3 text-sm text-foreground/90 transition-colors hover:bg-surface/60"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Find us on Google Maps
              </span>
              <span className="text-xs text-muted-foreground">
                Mobile service · NJ &amp; NYC
              </span>
            </a>
          </div>
        </div>


        <form
          name="callback-request"
          action="/forms.html"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-5 shadow-card sm:p-7"
        >
          <input type="hidden" name="form-name" value="callback-request" />
          <p className="hidden">
            <label>
              Do not fill this out: <input name="bot-field" />
            </label>
          </p>

          <h3 className="font-display text-xl font-semibold">Request a callback</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            This form is for qualified jobs. Texting is still the fastest option.
          </p>

          {status === "sent" && (
            <div className="mt-5 flex items-start gap-3 rounded-lg border border-primary/40 bg-primary/10 p-4 text-sm text-foreground">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Request received. For urgent jobs, call or text the VIN directly.
            </div>
          )}

          {status === "error" && (
            <div className="mt-5 flex items-start gap-3 rounded-lg border border-primary/40 bg-primary/10 p-4 text-sm text-foreground">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              The form did not submit. Call or text 551-320-1730 with the VIN and service request.
            </div>
          )}

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field name="name" label="Name" placeholder="Jane Doe" />
            <Field name="phone" label="Phone" placeholder="(551) 320-1730" type="tel" />
            <Field
              name="vin"
              label="VIN"
              placeholder="17-character VIN preferred"
              className="sm:col-span-2"
              required={false}
            />
            <Field
              name="vehicle"
              label="Vehicle"
              placeholder="Year / make / model"
              className="sm:col-span-2"
            />
            <Field
              name="service"
              label="Service needed"
              placeholder="ECU cloning, module programming, tuning..."
              className="sm:col-span-2"
            />
            <Field
              name="location"
              label="Mobile service location"
              placeholder="City, state"
              className="sm:col-span-2"
            />
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm font-medium text-foreground/90">
                Fault codes, notes, or module part numbers
              </span>
              <textarea
                name="notes"
                rows={3}
                placeholder="Add codes, symptoms, module numbers, or shop notes"
                className="w-full rounded-lg border border-input bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
          >
            <Send className="h-4 w-4" />
            {status === "sending" ? "Sending…" : "Request callback"}
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            VIN is optional on the form, but required before a final quote or dispatch.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  className = "",
  required = true,
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  className?: string;
  required?: boolean;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm font-medium text-foreground/90">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-input bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
    </label>
  );
}
