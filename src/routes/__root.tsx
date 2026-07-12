import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";


const serviceAreas = [
  "North New Jersey",
  "Bergen County NJ",
  "Hudson County NJ",
  "Essex County NJ",
  "Passaic County NJ",
  "Union County NJ",
  "Morris County NJ",
  "Manhattan NY",
  "Brooklyn NY",
  "Staten Island NY",
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Auto Lab Solutions",
  description:
    "Mobile automotive electronics service specializing in OEM programming, ECU and TCU cloning, supported tuning, coding, electronic service functions, and qualified diagnostics across North New Jersey and New York City.",
  telephone: "+15513201730",
  priceRange: "Varies by distance, vehicle, controller, and job type",
  areaServed: serviceAreas,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "OEM module programming" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "ECU and TCU cloning" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Supported ECU and TCU tuning" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Qualified automotive diagnostics" } },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should I send before booking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Send the VIN, year/make/model, service needed, module part numbers if available, fault codes or shop notes, and the service location.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with repair shops and body shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The service is built for repair shops, body shops, performance shops, dealers, and approved private clients that need mobile electronics support.",
      },
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Auto Lab Solutions | Mobile ECU Programming, Cloning, Tuning & Diagnostics" },
      {
        name: "description",
        content:
          "Mobile automotive electronics for OEM programming, ECU/TCU cloning, supported tuning, coding, and qualified diagnostics across North New Jersey, Manhattan, Brooklyn, and Staten Island.",
      },
      { name: "author", content: "Auto Lab Solutions" },
      {
        property: "og:title",
        content: "Auto Lab Solutions | Mobile ECU Programming, Cloning & Diagnostics",
      },
      {
        property: "og:description",
        content:
          "Mobile programming, cloning, tuning, coding, and qualified diagnostics for repair shops, body shops, dealers, performance shops, and approved private clients across NJ & NYC.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#151923" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
