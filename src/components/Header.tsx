import { ArrowUpRight } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-[74px] max-w-6xl items-center justify-between px-5 lg:px-8">
        {" "}
        <a
          href="#inicio"
          className="group flex items-center gap-3"
          aria-label="Ir al inicio"
        >
          <span className="flex size-9 items-center justify-center rounded-xl border border-electric/40 bg-electric/10  text-sm font-bold text-electric shadow-[0_0_24px_rgba(86,166,255,0.15)]">
            &lt;/&gt;
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Camila<span className="text-electric">.dev</span>
          </span>
        </a>
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegación principal"
        >
          {["Servicios", "Sobre mí"].map((item) => (
            <a
              key={item}
              href={`#${item === "Sobre mí" ? "sobre-mi" : item.toLowerCase()}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </a>
          ))}
          <a
            href="#contacto"
            className="text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
          >
            Contacto
          </a>
        </nav>
        <a
          href="#contacto"
          className="hidden items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 sm:flex"
        >
          Hablemos <ArrowUpRight className="size-4" />
        </a>
        <MobileMenu />
      </div>
    </header>
  );
}
