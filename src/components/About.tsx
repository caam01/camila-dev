import { Sparkles } from "lucide-react";

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 lg:px-8"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="section-kicker">03 / Sobre mí</p>
          <h2 className="section-title">
            Código con <span className="text-neon">eficiencia.</span>
          </h2>
        </div>
        <div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Soy web frontend y me gusta convertir problemas complejos en
            interfaces claras, rápidas y escalables. Cada pagina podra verla
            en dispositivos moviles como celulares y tablets o en su
            computadora.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-card/45 p-6">
              <p className="text-5xl font-semibold text-foreground">
                3<span className="text-electric">+</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Años construyendo para la web
              </p>
            </div>
            <div className="flex gap-2 rounded-2xl border border-white/10 bg-card/45 p-6">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-violet/15 text-violet">
                <Sparkles className="size-4" />
              </div>
              <div>
                <p className="text-sm font-medium">
                  Formación en Desarrollo de Software
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Facultad de Ingeniería - Analista en tecnologías de la
                  información.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}