"use client";

import { ExternalLink, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="scroll-mt-24 border-t border-white/[0.07] bg-card/25"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="section-kicker">04 / Contacto</p>
          <h2 className="section-title">
            Trabajemos juntos en tu{" "}
            <span className="text-gradient">próximo proyecto.</span>
          </h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Cuéntame qué tienes en mente. Te responderé con claridad,
                próximos pasos y una propuesta sin vueltas.
              </p>
              <div className="mt-9 space-y-4">
                <a
                  href="mailto:camilamedina377@gmail.com"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-electric"
                >
                  <Mail className="size-4 text-electric" />{" "}
                  camilamedina377@gmail.com
                </a>

                <a
                  href="https://www.linkedin.com/in/camila-medina-fignoni-97b473200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-electric"
                >
                  <ExternalLink className="size-4 text-electric" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}