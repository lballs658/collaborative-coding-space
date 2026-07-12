import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Coverage", href: "#coverage" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg gradient-accent font-display text-sm font-bold text-primary-foreground shadow-glow">
            AL
          </span>
          <span className="font-display text-base font-semibold tracking-tight">
            Auto Lab Solutions
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+15513201730"
          className="inline-flex items-center gap-2 rounded-full gradient-accent px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">551-320-1730</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
