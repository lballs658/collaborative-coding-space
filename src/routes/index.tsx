import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Coverage } from "@/components/coverage";
import { MobileCta } from "@/components/mobile-cta";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Process />
        <Coverage />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <MobileCta />
    </div>
  );
}
