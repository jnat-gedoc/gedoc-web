"use client";

import Image from "next/image";
import type { Service } from "./types";

type ServiceCardProps = {
  service: Service;
  index: number;
  onSelect: (id: string) => void;
};

export function ServiceCard({ service, index, onSelect }: ServiceCardProps) {
  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/50 sm:rounded-3xl sm:hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Imagen con overlay gradient */}
      <div className="relative h-36 overflow-hidden sm:h-48">
        <Image
          src={service.imagen}
          alt={service.titulo}
          width={640}
          height={420}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent" />
        
        {/* Icono flotante */}
        <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 sm:bottom-4 sm:left-4 sm:h-12 sm:w-12 sm:rounded-2xl">
          <span className="text-xl sm:text-2xl">{service.icono}</span>
        </div>

        {/* Badge de categoría */}
        <div className="absolute right-3 top-3 rounded-full bg-orange-500/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white shadow-lg backdrop-blur-sm sm:right-4 sm:top-4 sm:px-3 sm:py-1 sm:text-xs">
          Servicio
        </div>
      </div>

      {/* Contenido */}
      <div className="relative p-4 sm:p-6">
        {/* Línea decorativa animada */}
        <div className="absolute left-4 right-4 top-0 h-0.5 -translate-y-1/2 overflow-hidden rounded-full bg-gradient-to-r from-blue-200 via-orange-300 to-blue-200 sm:left-6 sm:right-6 sm:h-1">
          <div className="h-full w-1/3 animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </div>

        <h3 className="text-sm font-bold leading-tight text-blue-900 transition-colors duration-300 group-hover:text-orange-600 sm:text-lg">
          {service.titulo}
        </h3>
        
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-blue-700/70 sm:mt-3 sm:text-sm">
          {service.resumen}
        </p>

        {/* Tags de características - ocultos en móvil pequeño */}
        <div className="mt-3 hidden flex-wrap gap-1.5 sm:mt-4 sm:flex sm:gap-2">
          {service.incluye.slice(0, 2).map((item, i) => (
            <span
              key={i}
              className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-600 sm:px-2.5 sm:py-1 sm:text-xs"
            >
              {item.length > 20 ? item.slice(0, 20) + "…" : item}
            </span>
          ))}
        </div>

        {/* Botón de acción */}
        <button
          type="button"
          onClick={() => onSelect(service.id)}
          className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:from-orange-500 hover:to-orange-600 hover:shadow-orange-500/25 sm:mt-5 sm:gap-2 sm:rounded-2xl sm:px-5 sm:py-3 sm:text-sm"
        >
          <span>Conocer más</span>
          <svg
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>

      {/* Efecto de brillo en hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -inset-full top-0 z-10 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />
      </div>
    </article>
  );
}
