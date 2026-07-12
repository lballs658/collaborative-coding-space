import { MessageSquare, Phone } from "lucide-react";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 py-3 shadow-card backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-sm grid-cols-2 gap-3">
        <a
          href="tel:+15513201730"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground"
        >
          <Phone className="h-4 w-4 text-primary" />
          Call
        </a>
        <a
          href="sms:+15513201730?&body=VIN:%0AYear/make/model:%0AService needed:%0AFault codes or notes:%0ALocation:"
          className="inline-flex items-center justify-center gap-2 rounded-full gradient-accent px-4 py-3 text-sm font-semibold text-primary-foreground"
        >
          <MessageSquare className="h-4 w-4" />
          Text VIN
        </a>
      </div>
    </div>
  );
}
