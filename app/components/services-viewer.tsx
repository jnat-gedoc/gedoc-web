"use client";

import Image from "next/image";
import { MouseEvent, useEffect, useMemo, useState } from "react";

type Service = {
  id: string;
  titulo: string;
  resumen: string;
  descripcion: string;
  incluye: string[];
  resultado: string;
  imagen: string;
};

const servicios: Service[] = [
  {
    id: "asesoria",
    titulo: "Asesoría integral en gestión documental",
    resumen: "Alineación estratégica, normativa y operativa del sistema documental.",
    descripcion:
      "Acompañamos a la organización en el diagnóstico, diseño y fortalecimiento del modelo documental, conectando procesos, normatividad y objetivos institucionales.",
    incluye: [
      "Diagnóstico inicial de madurez documental",
      "Plan de mejora por etapas",
      "Acompañamiento técnico y normativo",
    ],
    resultado: "Mayor control del ciclo de vida documental y mejor toma de decisiones.",
    imagen: "/accounting-1928237_1280.png",
  },
  {
    id: "instrumentos",
    titulo: "Elaboración y actualización de instrumentos archivísticos",
    resumen: "Diseño técnico de instrumentos para control y cumplimiento archivístico.",
    descripcion:
      "Construimos y actualizamos instrumentos archivísticos clave para organizar, clasificar, valorar y controlar la documentación conforme a lineamientos vigentes.",
    incluye: [
      "TRD, TVD, CCD y PGD",
      "Inventario documental y banco terminológico",
      "Ajustes por cambios organizacionales y normativos",
    ],
    resultado: "Procesos documentales estandarizados y cumplimiento regulatorio fortalecidos.",
    imagen: "/Sin-2titulo-1024x985.webp",
  },
  {
    id: "fondos",
    titulo: "Intervención y organización de fondos acumulados",
    resumen: "Tratamiento técnico del archivo histórico y acumulado de la entidad.",
    descripcion:
      "Ejecutamos la intervención por fases para recuperar trazabilidad, estructura y acceso eficiente a documentación acumulada en estado natural.",
    incluye: [
      "Diagnóstico e identificación documental",
      "Organización técnica por principios archivísticos",
      "Inventario consolidado para consulta y control",
    ],
    resultado: "Archivo organizado, recuperable y listo para gestión y consulta oportuna.",
    imagen: "/1Imagen1.png",
  },
  {
    id: "almacenamiento",
    titulo: "Traslado y almacenamiento especializado de documentos",
    resumen: "Custodia física documental con condiciones de seguridad y preservación.",
    descripcion:
      "Gestionamos traslado y almacenamiento especializado con controles de conservación, acceso y trazabilidad para proteger el patrimonio documental.",
    incluye: [
      "Embalaje y transporte controlado",
      "Custodia en espacios adecuados",
      "Control de ingreso, préstamo y consulta",
    ],
    resultado: "Reducción de riesgos de pérdida, deterioro y ocupación ineficiente de espacios.",
    imagen: "/accounting-1928237_1280.png",
  },
  {
    id: "digitalizacion",
    titulo: "Digitalización certificada y expedientes electrónicos",
    resumen: "Conversión digital con criterios técnicos y valor probatorio.",
    descripcion:
      "Digitalizamos documentación con flujos de indexación y organización para facilitar acceso, búsqueda y gestión de expedientes electrónicos.",
    incluye: [
      "Preparación documental previa",
      "Digitalización e indexación por metadatos",
      "Estructuración de expediente electrónico",
    ],
    resultado: "Acceso ágil a la información y soporte para transformación digital documental.",
    imagen: "/Sin-2titulo-1024x985.webp",
  },
  {
    id: "destruccion",
    titulo: "Destrucción certificada de documentos",
    resumen: "Eliminación segura de documentos según tablas de retención y valoración.",
    descripcion:
      "Realizamos destrucción certificada bajo protocolos de seguridad y confidencialidad, garantizando trazabilidad y cumplimiento normativo.",
    incluye: [
      "Validación de series y tiempos de retención",
      "Ejecución segura del proceso",
      "Certificado de destrucción documental",
    ],
    resultado: "Mitigación de riesgo por exposición de información y optimización de espacios.",
    imagen: "/1Imagen1.png",
  },
];

export function ServicesViewer() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeService = useMemo(
    () => servicios.find((servicio) => servicio.id === activeId) ?? null,
    [activeId]
  );

  useEffect(() => {
    if (!activeService) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveId(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeService]);

  function onOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      setActiveId(null);
    }
  }

  return (
    <section id="servicios" className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight text-blue-900">Nuestros servicios</h2>
      <p className="max-w-3xl text-sm leading-6 text-blue-800/80">
        Selecciona un servicio para conocer alcance, metodología y resultados esperados.
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {servicios.map((servicio) => (
          <article key={servicio.id} className="rounded-2xl border border-blue-100 bg-white p-6">
            <div className="overflow-hidden rounded-xl border border-blue-100">
              <Image
                src={servicio.imagen}
                alt={servicio.titulo}
                width={640}
                height={420}
                className="h-36 w-full object-cover"
              />
            </div>
            <p className="text-sm font-semibold leading-6 text-blue-900">{servicio.titulo}</p>
            <p className="mt-2 text-sm leading-6 text-blue-800/80">{servicio.resumen}</p>
            <button
              type="button"
              onClick={() => setActiveId(servicio.id)}
              className="mt-4 inline-flex rounded-full border border-blue-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-800 transition hover:bg-blue-50"
            >
              Ver más información
            </button>
          </article>
        ))}
      </div>

      {activeService ? (
        <div
          className="fixed inset-0 z-40 flex items-end justify-center bg-blue-950/70 p-4 md:items-center"
          onClick={onOverlayClick}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activeService.titulo}
            className="w-full max-w-2xl rounded-3xl border border-blue-100 bg-white p-6 shadow-sm md:p-8"
          >
            <div className="mb-5 overflow-hidden rounded-2xl border border-blue-100">
              <Image
                src={activeService.imagen}
                alt={activeService.titulo}
                width={1024}
                height={640}
                className="h-48 w-full object-cover md:h-56"
              />
            </div>
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-bold tracking-tight text-blue-900">{activeService.titulo}</h3>
              <button
                type="button"
                onClick={() => setActiveId(null)}
                className="rounded-full border border-blue-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800 transition hover:bg-blue-50"
              >
                Cerrar
              </button>
            </div>

            <p className="mt-4 text-sm leading-6 text-blue-800/80">{activeService.descripcion}</p>

            <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/50 p-4">
              <p className="text-sm font-semibold text-blue-900">¿Qué incluye?</p>
              <ul className="mt-2 grid gap-2">
                {activeService.incluye.map((item) => (
                  <li key={item} className="text-sm leading-6 text-blue-800/90">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 rounded-2xl border border-orange-100 bg-orange-50 p-4">
              <p className="text-sm font-semibold text-blue-900">Resultado esperado</p>
              <p className="mt-1 text-sm leading-6 text-blue-800/90">{activeService.resultado}</p>
            </div>

            <a
              href="#contacto"
              onClick={() => setActiveId(null)}
              className="mt-6 inline-flex rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Solicitar este servicio
            </a>
          </div>
        </div>
      ) : null}
    </section>
  );
}
