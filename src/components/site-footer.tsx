import { Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg gradient-accent font-display text-xs font-bold text-primary-foreground">
            AL
          </span>
          <span className="font-display text-sm font-semibold">Auto Lab Solutions</span>
        </div>
        <p className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-center text-xs text-muted-foreground">
          <span>Mobile automotive electronics · NJ &amp; NYC ·</span>
          <a href="mailto:info@autolabsolutions.net" className="underline hover:text-foreground">
            info@autolabsolutions.net
          </a>
          <span>·</span>
          <a
            href="https://instagram.com/autolabllc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline hover:text-foreground"
          >
            <Instagram className="h-3.5 w-3.5" />
            @autolabllc
          </a>
          <span>· Mobile service only, no walk-ins</span>
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Auto Lab Solutions
        </p>
        <a
          href="https://websitelaunches.com/site/autolabsolutions.net"
          target="_blank"
          rel="noopener"
          className="opacity-60 transition-opacity hover:opacity-100"
          aria-label="Established online - Public launch record"
        >
          <img
            src="https://websitelaunches.com/badge/autolabsolutions.net.svg?theme=dark"
            alt="Established online - Public launch record"
            width="255"
            height="55"
            loading="lazy"
          />
        </a>

      </div>
    </footer>
  );
}
