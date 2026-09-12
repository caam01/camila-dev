import { ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main
      id="inicio"
      className="min-h-screen overflow-hidden bg-background text-foreground"
    >
      {/* <Header />
      <Hero />
      <Services />
      <About />
      <Contact /> */}

      <footer className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© 2026 Camila.dev.</p>
        <div className="flex items-center gap-5">
          <a href="#servicios" className="hover:text-foreground">
            Servicios
          </a>
          <a href="#contacto" className="hover:text-foreground">
            Contacto
          </a>
          <a
            href="#inicio"
            aria-label="Volver arriba"
            className="rounded-full border border-white/10 p-2 transition-colors hover:border-white/30 hover:text-foreground"
          >
            <ExternalLink className="size-3" />
          </a>
        </div>
      </footer>
    </main>
  );
}