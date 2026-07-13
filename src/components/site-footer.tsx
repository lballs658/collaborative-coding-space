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
        <p className="text-center text-xs text-muted-foreground">
          Mobile automotive electronics · NJ &amp; NYC ·{" "}
          <a href="mailto:info@autolabsolutions.net" className="underline hover:text-foreground">
            info@autolabsolutions.net
          </a>{" "}
          · Mobile service only, no walk-ins
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Auto Lab Solutions
        </p>
      </div>
    </footer>
  );
}
