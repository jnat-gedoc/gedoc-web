import type { Service } from "./types";

export const servicios: Service[] = [
  {
    id: "asesoria",
    titulo: "Asesoría integral en gestión documental",
    resumen: "Alineación estratégica, normativa y operativa del sistema documental.",
    descripcion:
      "Acompañamos a la organización en el diagnóstico, diseño y fortalecimiento del modelo documental, conectando procesos, normatividad y objetivos institucionales para lograr una gestión eficiente y segura.",
    incluye: [
      "Diagnóstico inicial de madurez documental",
      "Plan de mejora por etapas",
      "Acompañamiento técnico y normativo",
    ],
    resultado: "Mayor control del ciclo de vida documental y mejor toma de decisiones.",
    imagen: "/servicios/Asesoria integral.png",
    icono: "📋",
  },
  {
    id: "instrumentos",
    titulo: "Elaboración y actualización de instrumentos archivísticos",
    resumen: "Diseño técnico de instrumentos para control y cumplimiento archivístico.",
    descripcion:
      "Construimos y actualizamos instrumentos archivísticos clave para organizar, clasificar, valorar y controlar la documentación conforme a lineamientos vigentes y mejores prácticas del sector.",
    incluye: [
      "TRD, TVD, CCD y PGD",
      "Inventario documental y banco terminológico",
      "Ajustes por cambios organizacionales y normativos",
    ],
    resultado: "Procesos documentales estandarizados y cumplimiento regulatorio fortalecidos.",
    imagen: "/servicios/Actualizacion de instrumentos.png",
    icono: "📁",
  },
  {
    id: "fondos",
    titulo: "Intervención y organización de fondos acumulados",
    resumen: "Tratamiento técnico del archivo histórico y acumulado de la entidad.",
    descripcion:
      "Ejecutamos la intervención por fases para recuperar trazabilidad, estructura y acceso eficiente a documentación acumulada en estado natural, aplicando principios archivísticos internacionales.",
    incluye: [
      "Diagnóstico e identificación documental",
      "Organización técnica por principios archivísticos",
      "Inventario consolidado para consulta y control",
    ],
    resultado: "Archivo organizado, recuperable y listo para gestión y consulta oportuna.",
    imagen: "/servicios/Fondos acumulados.png",
    icono: "🗄️",
  },
  {
    id: "almacenamiento",
    titulo: "Traslado y almacenamiento especializado",
    resumen: "Custodia física documental con condiciones de seguridad y preservación.",
    descripcion:
      "Gestionamos traslado y almacenamiento especializado con controles de conservación, acceso y trazabilidad para proteger el patrimonio documental de su organización.",
    incluye: [
      "Embalaje y transporte controlado",
      "Custodia en espacios adecuados",
      "Control de ingreso, préstamo y consulta",
    ],
    resultado: "Reducción de riesgos de pérdida, deterioro y ocupación ineficiente de espacios.",
    imagen: "/servicios/Fondos acumulados.png",
    icono: "📦",
  },
  {
    id: "digitalizacion",
    titulo: "Digitalización certificada y expedientes electrónicos",
    resumen: "Conversión digital con criterios técnicos y valor probatorio.",
    descripcion:
      "Digitalizamos documentación con flujos de indexación y organización para facilitar acceso, búsqueda y gestión de expedientes electrónicos con trazabilidad completa.",
    incluye: [
      "Preparación documental previa",
      "Digitalización e indexación por metadatos",
      "Estructuración de expediente electrónico",
    ],
    resultado: "Acceso ágil a la información y soporte para transformación digital documental.",
    imagen: "/servicios/Digitalizacion Certificada.png",
    icono: "💻",
  },
  {
    id: "destruccion",
    titulo: "Destrucción certificada de documentos",
    resumen: "Eliminación segura de documentos según tablas de retención y valoración.",
    descripcion:
      "Realizamos destrucción certificada bajo protocolos de seguridad y confidencialidad, garantizando trazabilidad y cumplimiento normativo en todo el proceso.",
    incluye: [
      "Validación de series y tiempos de retención",
      "Ejecución segura del proceso",
      "Certificado de destrucción documental",
    ],
    resultado: "Mitigación de riesgo por exposición de información y optimización de espacios.",
    imagen: "/servicios/Destruccion.png",
    icono: "🔒",
  },
];
