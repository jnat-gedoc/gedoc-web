"use client";

import Image from "next/image";
import { useState } from "react";

const modulos = [
  {
    titulo: "Sistema de Seguridad",
    icono: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    descripcion: "Control de niveles de acceso del personal al aplicativo. Sistema desarrollado para restringir la entrada de usuarios no autorizados.",
    detalles: ["Gestión de usuarios y claves", "Perfiles y controles personalizados", "Autorización por jefe inmediato", "Registro de accesos"]
  },
  {
    titulo: "Ventanilla Única de Correspondencia",
    icono: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    descripcion: "Recepción, radicación, administración, distribución y respuesta oportuna de comunicaciones oficiales en cumplimiento de la Ley 1755 de 2015.",
    detalles: ["Distribución interna y asignación", "Gestión y seguimiento", "Elaboración y validación de respuestas", "Consultas, Controles y Reportes"]
  },
  {
    titulo: "Expediente Electrónico",
    icono: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    descripcion: "Gestión integral del expediente electrónico con trazabilidad completa y cumplimiento de estándares archivísticos.",
    detalles: ["Organización digital de documentos", "Metadatos automatizados", "Búsqueda avanzada", "Preservación a largo plazo"]
  }
];

const diferenciales = [
  {
    icono: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    titulo: "Automatización con IA",
    descripcion: "Extracción de metadatos sin intervención manual"
  },
  {
    icono: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    titulo: "Interoperabilidad Web",
    descripcion: "Radicación remota accesible para cualquier ciudadano"
  },
  {
    icono: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titulo: "Cumplimiento Normativo",
    descripcion: "Integrado con Ley 1755 de 2015 y lineamientos del AGN"
  },
  {
    icono: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    titulo: "Transparencia y Trazabilidad",
    descripcion: "Flujo de gestión documentado y visible en tiempo real"
  },
  {
    icono: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    titulo: "Gestión Integral",
    descripcion: "Desde la recepción hasta la respuesta, todo en una plataforma"
  }
];

export function NeofileSection() {
  const [moduloActivo, setModuloActivo] = useState(0);

  return (
    <section id="neofile" className="relative overflow-hidden rounded-2xl border border-purple-200/50 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 p-5 text-white shadow-2xl sm:rounded-3xl sm:p-8 md:p-10">
      {/* Decoraciones de fondo */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent blur-3xl" />
      
      {/* Header */}
      <div className="relative mb-8 flex flex-col items-center gap-4 text-center sm:mb-10 md:flex-row md:text-left">
        <div className="flex items-center gap-4">
          <Image
            src="/logos/neofileLogo.png"
            alt="Neofile"
            width={80}
            height={80}
            className="h-16 w-16 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm sm:h-20 sm:w-20"
          />
          <div>
            <span className="mb-1 inline-flex rounded-full border border-purple-400/50 bg-purple-500/20 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-purple-300 sm:text-xs">
              Software Destacado
            </span>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Neofile
            </h2>
            <p className="text-sm text-purple-200/80">Sistema de Gestión Documental</p>
          </div>
        </div>
      </div>

      <p className="relative mb-8 max-w-3xl text-sm leading-relaxed text-purple-100/80 sm:text-base">
        Plataforma integral para la gestión documental que garantiza seguridad, trazabilidad y cumplimiento normativo. 
        Diseñada para organizaciones públicas y privadas que buscan optimizar sus procesos documentales.
      </p>

      {/* Módulos interactivos */}
      <div className="relative mb-8 grid gap-4 md:grid-cols-3">
        {modulos.map((modulo, i) => (
          <button
            key={i}
            onClick={() => setModuloActivo(i)}
            className={`group rounded-xl border p-4 text-left transition-all duration-300 sm:rounded-2xl sm:p-5 ${
              moduloActivo === i
                ? "border-purple-400/50 bg-purple-500/20 shadow-lg shadow-purple-500/10"
                : "border-white/10 bg-white/5 hover:border-purple-400/30 hover:bg-white/10"
            }`}
          >
            <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
              moduloActivo === i ? "bg-purple-500 text-white" : "bg-white/10 text-purple-300 group-hover:bg-purple-500/50"
            }`}>
              {modulo.icono}
            </div>
            <h3 className="text-sm font-semibold sm:text-base">{modulo.titulo}</h3>
            <p className="mt-1 text-xs text-purple-200/70 sm:text-sm">{modulo.descripcion}</p>
          </button>
        ))}
      </div>

      {/* Detalles del módulo activo */}
      <div className="relative mb-8 rounded-xl border border-purple-400/30 bg-purple-500/10 p-4 sm:rounded-2xl sm:p-6">
        <h4 className="mb-3 text-sm font-semibold text-purple-200 sm:text-base">
          Características de {modulos[moduloActivo].titulo}:
        </h4>
        <div className="grid gap-2 sm:grid-cols-2">
          {modulos[moduloActivo].detalles.map((detalle, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-purple-100/80 sm:text-sm">
              <svg className="h-4 w-4 shrink-0 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {detalle}
            </div>
          ))}
        </div>
      </div>

      {/* Diferenciales */}
      <div className="relative">
        <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-purple-300 sm:text-base">
          Diferenciales frente a otras soluciones
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciales.map((diff, i) => (
            <div
              key={i}
              className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:border-purple-400/30 hover:bg-white/10 sm:p-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/20">
                {diff.icono}
              </div>
              <div>
                <p className="text-xs font-semibold sm:text-sm">{diff.titulo}</p>
                <p className="mt-0.5 text-[10px] text-purple-200/70 sm:text-xs">{diff.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <a
          href="#contacto"
          className="rounded-full bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          Solicitar demo de Neofile
        </a>
        <span className="text-xs text-purple-300/60">o contáctanos para más información</span>
      </div>
    </section>
  );
}
