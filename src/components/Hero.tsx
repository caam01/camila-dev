import { Check, ChevronDown, Code2, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[760px] max-w-6xl items-center px-5 pb-20 pt-36 lg:px-8 lg:pt-40">
      {/* Resplandor optimizado usando gradiente radial en vez de filter: blur */}
      <div 
        className="pointer-events-none absolute -left-40 top-24 size-[300px] sm:size-[520px] rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(var(--electric-rgb, 59, 130, 246), 0.35) 0%, transparent 70%)"
        }}
      />

      <div className="relative max-w-4xl">
        <h1 className="max-w-4xl text-[clamp(3.2rem,8vw,7.4rem)] font-semibold leading-[0.95] tracking-[-0.07em]">
          Desarrollo web <span className="text-gradient">a medida</span> para
          llevar tu idea al siguiente nivel.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
          Especialista en frontend y soluciones digitales personalizadas.
          Entregas rápidas, código limpio y diseño enfocado en una experiencia
          que convierte.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium transition-colors hover:border-white/35 hover:bg-white/[0.04]"
          >
            Ver servicios <ChevronDown className="size-4" />
          </a>
        </div>
        <div className="mt-16 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/10 pt-6 text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <Zap className="size-3.5 text-neon" /> Entrega rápida
          </span>
          <span className="flex items-center gap-2">
            <Code2 className="size-3.5 text-electric" /> Código limpio
          </span>
          <span className="flex items-center gap-2">
            <Check className="size-3.5 text-violet" /> 100% responsive
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-20 right-0 hidden w-58 rotate-6 lg:block">
        {/* Reemplazado backdrop-blur por un fondo semi-transparente sólido */}
        <div className="rounded-2xl border border-white/10 bg-card/90 p-4 shadow-2xl">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground">
              BUILD / 2026
            </span>
            <span className="size-2 rounded-full bg-neon shadow-[0_0_12px_#b8ff6a]" />
          </div>
          <div className="space-y-2 text-[10px] text-muted-foreground">
            <p>
              <span className="text-violet">const</span> idea ={" "}
              <span className="text-neon">&apos;tu negocio&apos;</span>;
            </p>
            <p>
              <span className="text-violet">return</span> &lt;
              <span className="text-electric">
                Impact project={"{idea}"} /&gt;
              </span>
              ;
            </p>
          </div>
          <div className="mt-5 h-1 rounded-full bg-white/10">
            <div className="h-full w-4/5 rounded-full bg-electric" />
          </div>
        </div>
      </div>
    </section>
  );
}