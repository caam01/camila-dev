"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="rounded-lg p-2 text-muted-foreground"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      {menuOpen && (
        <nav
          className="absolute inset-x-0 top-[74px] border-t border-b border-white/[0.07] bg-background px-5 py-4"
          aria-label="Menú móvil"
        >
          {["Servicios", "Sobre mí"].map((item) => (
            <a
              key={item}
              href={`#${item === "Sobre mí" ? "sobre-mi" : item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/[0.06] py-3 text-sm text-muted-foreground"
            >
              {item}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-sm font-bold text-muted-foreground"
          >
            Contacto
          </a>
        </nav>
      )}
    </div>
  );
}