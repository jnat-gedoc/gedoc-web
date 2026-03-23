"use client";

import { useState } from "react";
import { ServiceCard } from "./service-card";
import { ServiceModal } from "./service-modal";
import { servicios } from "./services-data";

export function ServicesViewer() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeService = servicios.find((s) => s.id === activeId) ?? null;

  return (
    <section id="servicios" className="relative py-2 sm:py-4">
      {/* Decoración de fondo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-gradient-to-br from-blue-100/40 to-transparent blur-3xl sm:-left-40 sm:h-80 sm:w-80" />
        <div className="absolute -right-20 bottom-0 h-40 w-40 rounded-full bg-gradient-to-tl from-orange-100/40 to-transparent blur-3xl sm:-right-40 sm:h-80 sm:w-80" />
      </div>

      {/* Header de la sección */}
      <div className="relative mb-6 text-center sm:mb-10">
        <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-700 sm:mb-3 sm:gap-2 sm:px-4 sm:py-1.5 sm:text-xs">
          <span className="h-1 w-1 animate-pulse rounded-full bg-blue-500 sm:h-1.5 sm:w-1.5" />
          Lo que hacemos
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-blue-900 sm:text-3xl md:text-4xl">
          Nuestros{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Servicios
          </span>
        </h2>
        <p className="mx-auto mt-2 max-w-2xl px-2 text-xs leading-relaxed text-blue-700/70 sm:mt-4 sm:px-0 sm:text-sm md:text-base">
          Soluciones integrales de gestión documental diseñadas para optimizar
          procesos, garantizar cumplimiento y proteger la información de tu
          organización.
        </p>
      </div>

      {/* Grid de servicios */}
      <div className="relative grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {servicios.map((servicio, index) => (
          <ServiceCard
            key={servicio.id}
            service={servicio}
            index={index}
            onSelect={setActiveId}
          />
        ))}
      </div>

      {/* Modal de detalle */}
      {activeService ? (
        <ServiceModal service={activeService} onClose={() => setActiveId(null)} />
      ) : null}
    </section>
  );
}

// Re-export para compatibilidad
export { ServicesViewer as default };
