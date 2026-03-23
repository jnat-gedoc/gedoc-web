import Image from "next/image";
import { ClientsSection } from "./components/clients-section";
import { ContactForm } from "./components/contact-form";
import { NeofileSection } from "./components/neofile-section";
import { ServicesViewer } from "./components/services";

export default function Home() {
  const instrumentos = [
    "TRD",
    "TVD",
    "PGD",
    "PINAR",
    "CCD",
    "Inventario Documental",
    "Banco Terminológico",
    "TCA",
    "SIC",
    "RIA",
    "RAI",
    "MoReq",
  ];

  const fases = [
    {
      titulo: "Fase 1 · Diagnóstico documental",
      descripcion:
        "Identificación y preparación de la documentación en cada instalación para evaluar el estado real del archivo.",
    },
    {
      titulo: "Fase 2 · Intervención del fondo acumulado",
      descripcion:
        "Organización técnica del archivo conforme a estándares archivísticos y necesidades de la entidad.",
    },
    {
      titulo: "Fase 3 · Inventario en estado natural",
      descripcion:
        "Levantamiento y consolidación del inventario documental para control, consulta y trazabilidad.",
    },
  ];

  const beneficios = [
    "Optimización y aprovechamiento de espacios",
    "Conservación y preservación física documental",
    "Seguridad de la información",
    "Consulta eficiente y oportuna",
    "Reducción de consumo de elementos de oficina",
    "Garantía del ciclo de vida documental",
  ];

  return (
    <div className="min-h-screen bg-white text-blue-950">
      {/* Navegación fija con blur */}
      <nav className="sticky top-0 z-30 border-b border-blue-100/50 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 md:px-10 lg:px-16">
          <Image
            src="/logos/logo-gedoc-horizontal.png"
            alt="GeDoc"
            width={230}
            height={58}
            priority
            className="h-auto w-[140px] sm:w-[180px] md:w-[200px]"
          />
          <a
            href="#contacto"
            className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-105 hover:shadow-xl sm:px-5 sm:text-sm"
          >
            Solicitar propuesta
          </a>
        </div>
      </nav>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-8 sm:gap-16 sm:px-6 sm:py-10 md:px-10 lg:px-16">

        {/* Hero Section con imagen de fondo */}
        <section className="group relative overflow-hidden rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 shadow-2xl shadow-blue-900/20 sm:rounded-3xl">
          {/* Imagen de fondo con overlay */}
          <div className="absolute inset-0">
            <Image
              src="/logos/Organizado Archivo Gedoc.png"
              alt="Archivo organizado GeDoc"
              fill
              className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-800/40 to-blue-900/50" />
            {/* Decoración circular animada */}
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gradient-to-br from-orange-500/20 to-transparent blur-3xl animate-rotate-slow" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-gradient-to-tr from-blue-400/20 to-transparent blur-3xl" />
          </div>

          <div className="relative grid gap-6 p-6 sm:gap-8 sm:p-8 md:grid-cols-2 md:p-10 lg:p-12">
            <div className="space-y-4 sm:space-y-6">
              <Image
                src="/logos/logo-gedoc-horizontal.png"
                alt="GeDoc Gestión Documental de Colombia S.A.S"
                width={400}
                height={80}
                className="h-auto w-full max-w-[200px] brightness-0 invert sm:max-w-[280px] md:max-w-[350px]"
              />
            <p className="inline-flex rounded-full border border-orange-400/50 bg-orange-500/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-orange-300 backdrop-blur-sm sm:text-xs">
              Portafolio de servicios
            </p>
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Gestión integral de la información para organizaciones públicas y privadas.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-blue-100/90 sm:text-base sm:leading-7">
              En GeDOC S.A.S impulsamos una administración documental eficaz,
              segura y alineada con estándares nacionales e internacionales para
              fortalecer productividad, rentabilidad y sostenibilidad.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <a
                href="#servicios"
                className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl sm:px-5 sm:py-3 sm:text-sm"
              >
                Ver servicios
              </a>
              <a
                href="#contacto"
                className="rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 sm:px-5 sm:py-3 sm:text-sm"
              >
                Contáctanos
              </a>
            </div>
          </div>
          
          {/* Cards informativas con estilo glass */}
          <div className="grid gap-3 text-sm sm:gap-4">
            <article className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 sm:rounded-2xl sm:p-4">
              <p className="text-sm font-semibold text-white sm:text-base">¿Quiénes somos?</p>
              <p className="mt-1 text-xs text-blue-100/80 sm:text-sm">
                Empresa colombiana especializada en gestión integral de la
                información y administración documental. Garantizamos el cumplimiento
                de los más altos estándares nacionales e internacionales en la administración de documentos, basándonos en un
                equipo humano altamente calificado y tecnología de vanguardia.
              </p>
            </article>
            <article className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 sm:rounded-2xl sm:p-4">
              <p className="text-sm font-semibold text-white sm:text-base">Propósito superior</p>
              <p className="mt-1 text-xs text-blue-100/80 sm:text-sm">
                Ser aliado estratégico de organizaciones para una gestión de
                información confiable y de alto valor.
              </p>
            </article>
            <article className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 sm:rounded-2xl sm:p-4">
              <p className="text-sm font-semibold text-white sm:text-base">Cumplimiento normativo</p>
              <p className="mt-1 text-xs text-blue-100/80 sm:text-sm">
                Metodologías alineadas con lineamientos archivísticos y
                requisitos legales vigentes.
              </p>
            </article>
          </div>
          </div>
        </section>

        <ServicesViewer />

        <NeofileSection />

        <section className="rounded-2xl border border-blue-100 bg-blue-50/40 p-5 sm:rounded-3xl sm:p-8 md:p-10">
          <h2 className="text-xl font-bold tracking-tight text-blue-900 sm:text-2xl">
            Instrumentos archivísticos
          </h2>
          <p className="mt-2 max-w-3xl text-xs leading-relaxed text-blue-800/80 sm:text-sm sm:leading-6">
            Diseñamos, actualizamos e implementamos instrumentos técnicos
            archivísticos ajustados a la operación y al cumplimiento documental de
            cada organización.
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
            {instrumentos.map((instrumento) => (
              <span
                key={instrumento}
                className="rounded-full border border-blue-200 bg-white px-2.5 py-0.5 text-[10px] font-semibold text-blue-800 transition-all duration-300 hover:border-orange-300 hover:bg-orange-50 sm:px-3 sm:py-1 sm:text-xs"
              >
                {instrumento}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-orange-100 bg-orange-50/70 p-5 sm:rounded-3xl sm:p-8 md:p-10">
          <h2 className="text-xl font-bold tracking-tight text-blue-900 sm:text-2xl">
            Fases de intervención y organización
          </h2>
          <div className="mt-4 grid gap-3 sm:mt-6 sm:gap-4 md:grid-cols-3">
            {fases.map((fase, index) => (
              <div
                key={fase.titulo}
                className="rounded-xl border border-orange-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-2xl sm:p-5"
              >
                <p className="text-[10px] font-semibold text-orange-700 sm:text-xs">
                  Paso {index + 1}
                </p>
                <p className="mt-1.5 text-sm font-semibold leading-snug text-blue-900 sm:mt-2 sm:text-base sm:leading-6">
                  {fase.titulo}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-blue-800/80 sm:text-sm sm:leading-6">
                  {fase.descripcion}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4 sm:space-y-6" id="beneficios">
          <h2 className="text-xl font-bold tracking-tight text-blue-900 sm:text-2xl">
            Beneficios del almacenamiento especializado
          </h2>
          <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-3">
            {beneficios.map((beneficio) => (
              <article
                key={beneficio}
                className="rounded-xl border border-blue-100 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-2xl sm:p-5"
              >
                <p className="text-xs font-medium leading-relaxed text-blue-900 sm:text-sm sm:leading-6">
                  {beneficio}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-blue-100 bg-white p-5 sm:rounded-3xl sm:p-8 md:p-10">
          <h2 className="text-xl font-bold tracking-tight text-blue-900 sm:text-2xl">
            Servicios en modalidad outsourcing
          </h2>
          <p className="mt-2 max-w-3xl text-xs leading-relaxed text-blue-800/80 sm:text-sm sm:leading-6">
            Operamos dentro de las instalaciones del cliente con talento humano
            especializado para fortalecer correspondencia, archivo central e
            histórico, digitalización y administración del sistema de información
            documental.
          </p>
        </section>

        <ClientsSection />

        {/* Sección de Contacto */}
        <section
          id="contacto"
          className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 p-5 text-white shadow-lg sm:rounded-3xl sm:p-6 md:p-8"
        >
          <div className="text-center">
            <h2 className="text-lg font-bold tracking-tight sm:text-xl md:text-2xl">
              ¿Listo para fortalecer la gestión documental de tu organización?
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs leading-relaxed text-blue-100/80 sm:text-sm">
              Diseñamos una propuesta alineada a tu operación, volumen documental
              y objetivos institucionales.
            </p>
            
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-blue-100 py-6 sm:py-8">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-3">
              <Image
                src="/logos/logo-gedoc-horizontal.png"
                alt="GeDoc"
                width={120}
                height={30}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-xs text-blue-600/60">© {new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
