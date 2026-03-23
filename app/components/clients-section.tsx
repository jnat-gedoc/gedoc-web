"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const clientes = [
  { src: "/logos/Imagen1.jpg", alt: "Cliente 1" },
  { src: "/logos/Imagen3.png", alt: "Cliente 2" },
  { src: "/logos/Imagen4.png", alt: "Cliente 3" },
  { src: "/logos/Imagen5.png", alt: "Cliente 4" },
  { src: "/logos/Imagen6.png", alt: "Cliente 5" },
  { src: "/logos/Imagen7.png", alt: "Cliente 6" },
  { src: "/logos/Imagen8.png", alt: "Cliente 7" },
  { src: "/logos/Imagen9.png", alt: "Cliente 8" },
  { src: "/logos/Imagen10.png", alt: "Cliente 9" },
];

export function ClientsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="relative py-8 sm:py-12 md:py-16" id="clientes">
      {/* Header */}
      <div className="mb-8 text-center sm:mb-12">
        <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-700 sm:mb-3 sm:gap-2 sm:px-4 sm:py-1.5 sm:text-xs">
          <span className="h-1 w-1 rounded-full bg-blue-500 sm:h-1.5 sm:w-1.5" />
          Confían en nosotros
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-blue-900 sm:text-3xl md:text-4xl">
          Clientes{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Satisfechos
          </span>
        </h2>
        <p className="mx-auto mt-2 max-w-xl px-4 text-xs leading-relaxed text-blue-700/70 sm:mt-4 sm:px-0 sm:text-sm md:text-base">
          Organizaciones que han transformado su gestión documental con nuestro acompañamiento
        </p>
      </div>

      {/* Logos con animación de scroll infinito y drag */}
      <div 
        ref={scrollRef}
        className="relative cursor-grab overflow-x-auto scrollbar-hide select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Gradientes laterales para efecto fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent sm:w-24" />

        {/* Track de logos con animación */}
        <div className={`flex items-center gap-6 py-4 sm:gap-12 sm:py-8 ${isDragging ? '' : 'animate-scroll-left'}`}>
          {/* Primera tanda */}
          {clientes.map((cliente, i) => (
            <div
              key={`a-${i}`}
              className="group flex h-14 w-28 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-white px-3 py-2 shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-lg sm:h-20 sm:w-40 sm:rounded-2xl sm:px-6 sm:py-4"
            >
              <Image
                src={cliente.src}
                alt={cliente.alt}
                width={140}
                height={70}
                className="h-auto max-h-10 w-auto max-w-full object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-14"
                draggable={false}
              />
            </div>
          ))}
          {/* Duplicado para loop continuo */}
          {clientes.map((cliente, i) => (
            <div
              key={`b-${i}`}
              className="group flex h-14 w-28 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-white px-3 py-2 shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-lg sm:h-20 sm:w-40 sm:rounded-2xl sm:px-6 sm:py-4"
            >
              <Image
                src={cliente.src}
                alt={cliente.alt}
                width={140}
                height={70}
                className="h-auto max-h-10 w-auto max-w-full object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-14"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Stats minimalistas */}
      <div className="mt-8 grid grid-cols-2 gap-2 sm:mt-12 sm:gap-4 md:grid-cols-4">
        {[
          { valor: "50+", label: "Proyectos completados" },
          { valor: "30+", label: "Clientes activos" },
          { valor: "10+", label: "Años de experiencia" },
          { valor: "100%", label: "Satisfacción" },
        ].map((stat, i) => (
          <div
            key={i}
            className="rounded-xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/50 p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-2xl sm:p-5"
          >
            <p className="text-xl font-bold text-orange-500 sm:text-2xl md:text-3xl">{stat.valor}</p>
            <p className="mt-0.5 text-[10px] font-medium text-blue-700/70 sm:mt-1 sm:text-xs">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
