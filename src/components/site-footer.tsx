import { Instagram, MapPin } from "lucide-react";

const GOOGLE_MAPS_URL =
  "https://www.google.com/search?q=Auto+Lab+Solutions&stick=H4sIAAAAAAAA_-NgU1IxqEgyM0lKNU62MEo2trA0NrQyqDAyNk5NSTO0SEsySDYzSU1dxCrkWFqSr-CTmKQQnJ9TWpKZn1cMAGlXEf49AAAA&hl=en&mat=CQsoVtQPueA1ElcBa0lj_9CKL9tS4A6lylhMqISc1uKu2HNAmxAldAtgpBoaQAHGsWbfWq5ZScV6mE0qGsPEZXjVY8sAyPgpdy9E_sDwiVYain3GrjTP8i10YNAdgtmb18c&authuser=4";

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
          <span>· Mobile service only, no walk-ins ·</span>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline hover:text-foreground"
          >
            <MapPin className="h-3.5 w-3.5" />
            Find us on Google Maps
          </a>
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Auto Lab Solutions
        </p>



      </div>
    </footer>
  );
}
