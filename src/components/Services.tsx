import {
  ArrowUpRight,
  Globe2,
  Layers3,
  PackageCheck,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Globe2,
    number: "01",
    title: "Muestra tus servicios",
    description:
      "Páginas enfocadas en mostrar tu informacion y/o servicios de manera clara y atractiva.",
  },
  {
    icon: PackageCheck,
    number: "02",
    title: "Tiendas (E-commerce)",
    description:
      "Desarrollo de tiendas online rápidas, seguras y adaptables, listas para procesar pagos y escalar tus ventas.",
  },
  {
    icon: Layers3,
    number: "03",
    title: "Control de stock",
    description:
      "Sistemas web intuitivos para administrar inventarios en tiempo real, automatizar reportes y optimizar tu operativa.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Soluciones a medida",
    description:
      "Plataformas y herramientas web personalizadas, construidas desde cero para resolver necesidades específicas de tu negocio.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 lg:px-8"
    >
      <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="section-kicker">01 / Servicios</p>
          <h2 className="section-title">
            De la idea al <span className="text-electric">producto.</span>
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Construyo experiencias digitales que se sienten bien, funcionan
          mejor y ayudan a que tu negocio crezca.
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {services.map(({ icon: Icon, number, title, description }) => (
          <article
            key={title}
            className="group rounded-2xl border border-white/10 bg-card/45 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-electric/40 hover:bg-card/80"
          >
            <div className="mb-12 flex items-start justify-between">
              <div className="flex size-11 items-center justify-center rounded-xl border border-electric/20 bg-electric/10 text-electric">
                <Icon className="size-5" />
              </div>
              <span className=" text-xs text-muted-foreground">
                {number}
              </span>
            </div>
            <h3 className="mb-3 text-2xl font-medium tracking-tight">
              {title}
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
           
          </article>
        ))}
      </div>
    </section>
  );
}