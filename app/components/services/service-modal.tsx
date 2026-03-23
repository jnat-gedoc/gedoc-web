"use client";

import Image from "next/image";
import { MouseEvent, useEffect, useRef } from "react";
import type { Service } from "./types";

type ServiceModalProps = {
  service: Service;
  onClose: () => void;
};

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", onKeyDown);

    // Focus trap
    modalRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  function onOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-2 sm:p-4 md:items-center md:p-6"
      onClick={onOverlayClick}
    >
      {/* Backdrop con blur */}
      <div className="absolute inset-0 animate-fade-in bg-blue-950/80 backdrop-blur-sm" />

      {/* Modal container */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={service.titulo}
        tabIndex={-1}
        className="relative z-10 max-h-[95vh] w-full max-w-3xl animate-modal-enter overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl sm:max-h-[90vh] sm:rounded-3xl"
      >
        {/* Header con imagen */}
        <div className="relative h-40 overflow-hidden sm:h-56 md:h-64">
          <Image
            src={service.imagen}
            alt={service.titulo}
            width={1024}
            height={640}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/60 to-transparent" />

          {/* Icono y título sobre la imagen */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/95 text-2xl shadow-xl backdrop-blur-sm sm:h-14 sm:w-14 sm:rounded-2xl sm:text-3xl">
                {service.icono}
              </div>
              <div className="min-w-0 flex-1">
                <p className="mb-1 inline-flex rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white sm:px-3 sm:py-1 sm:text-xs">
                  Servicio GeDoc
                </p>
                <h3 className="text-base font-bold leading-tight text-white sm:text-xl md:text-2xl">{service.titulo}</h3>
              </div>
            </div>
          </div>

          {/* Botón cerrar */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-blue-900 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white sm:right-4 sm:top-4 sm:h-10 sm:w-10"
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Contenido scrolleable */}
        <div className="max-h-[55vh] overflow-y-auto p-4 sm:max-h-[50vh] sm:p-6 md:p-8">
          {/* Descripción */}
          <p className="text-sm leading-relaxed text-blue-800/80 sm:text-base">{service.descripcion}</p>

          {/* Grid de características */}
          <div className="mt-4 grid gap-3 sm:mt-6 sm:gap-4 md:grid-cols-2">
            {/* ¿Qué incluye? */}
            <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4 sm:rounded-2xl sm:p-5">
              <div className="mb-2 flex items-center gap-2 sm:mb-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-600 text-white sm:h-8 sm:w-8 sm:rounded-xl">
                  <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-sm font-bold text-blue-900 sm:text-base">¿Qué incluye?</h4>
              </div>
              <ul className="space-y-1.5 sm:space-y-2">
                {service.incluye.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-blue-700/80 sm:text-sm"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-orange-400 sm:h-1.5 sm:w-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resultado esperado */}
            <div className="rounded-xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-4 sm:rounded-2xl sm:p-5">
              <div className="mb-2 flex items-center gap-2 sm:mb-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-orange-500 text-white sm:h-8 sm:w-8 sm:rounded-xl">
                  <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-sm font-bold text-blue-900 sm:text-base">Resultado esperado</h4>
              </div>
              <p className="text-xs leading-relaxed text-blue-700/80 sm:text-sm">{service.resultado}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 flex flex-col gap-2 rounded-xl border border-blue-100 bg-blue-900 p-4 text-center sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:rounded-2xl sm:p-5 sm:text-left">
            <div>
              <p className="text-sm font-semibold text-white sm:text-base">¿Te interesa este servicio?</p>
              <p className="text-xs text-blue-200 sm:text-sm">Solicita una asesoría personalizada sin costo</p>
            </div>
            <a
              href="#contacto"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
            >
              <span>Solicitar ahora</span>
              <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
