"use client";

import { FormEvent, useMemo, useState } from "react";

type ContactFormData = {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  mensaje: string;
};

const initialForm: ContactFormData = {
  nombre: "",
  empresa: "",
  email: "",
  telefono: "",
  mensaje: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const formIsValid = useMemo(() => {
    return (
      data.nombre.trim().length >= 3 &&
      EMAIL_REGEX.test(data.email.trim()) &&
      data.mensaje.trim().length >= 10
    );
  }, [data]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (!formIsValid) {
      setError("Completa nombre, correo válido y un mensaje de mínimo 10 caracteres.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "No fue posible enviar la solicitud.");
      }

      setSuccess("Mensaje enviado correctamente. Te contactaremos pronto.");
      setData(initialForm);
    } catch (submitError) {
      const message =
        submitError instanceof Error
          ? submitError.message
          : "Ocurrió un error inesperado. Intenta nuevamente.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-3 text-left sm:mt-8 sm:gap-4 md:grid-cols-2">
      <label className="space-y-1">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-blue-100 sm:text-xs">Nombre *</span>
        <input
          value={data.nombre}
          onChange={(event) => setData((prev) => ({ ...prev, nombre: event.target.value }))}
          className="w-full rounded-lg border border-blue-300/40 bg-blue-950/40 px-3 py-2 text-xs text-white outline-none placeholder:text-blue-200/60 focus:border-orange-300 sm:rounded-xl sm:text-sm"
          placeholder="Tu nombre"
          required
          minLength={3}
        />
      </label>

      <label className="space-y-1">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-blue-100 sm:text-xs">Email *</span>
        <input
          value={data.email}
          onChange={(event) => setData((prev) => ({ ...prev, email: event.target.value }))}
          type="email"
          className="w-full rounded-lg border border-blue-300/40 bg-blue-950/40 px-3 py-2 text-xs text-white outline-none placeholder:text-blue-200/60 focus:border-orange-300 sm:rounded-xl sm:text-sm"
          placeholder="tu@empresa.com"
          required
        />
      </label>

      <label className="space-y-1">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-blue-100 sm:text-xs">Empresa</span>
        <input
          value={data.empresa}
          onChange={(event) => setData((prev) => ({ ...prev, empresa: event.target.value }))}
          className="w-full rounded-lg border border-blue-300/40 bg-blue-950/40 px-3 py-2 text-xs text-white outline-none placeholder:text-blue-200/60 focus:border-orange-300 sm:rounded-xl sm:text-sm"
          placeholder="Nombre de la organización"
        />
      </label>

      <label className="space-y-1">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-blue-100 sm:text-xs">Teléfono</span>
        <input
          value={data.telefono}
          onChange={(event) => setData((prev) => ({ ...prev, telefono: event.target.value }))}
          className="w-full rounded-lg border border-blue-300/40 bg-blue-950/40 px-3 py-2 text-xs text-white outline-none placeholder:text-blue-200/60 focus:border-orange-300 sm:rounded-xl sm:text-sm"
          placeholder="+57 300 000 0000"
        />
      </label>

      <label className="space-y-1 md:col-span-2">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-blue-100 sm:text-xs">Mensaje *</span>
        <textarea
          value={data.mensaje}
          onChange={(event) => setData((prev) => ({ ...prev, mensaje: event.target.value }))}
          className="min-h-24 w-full rounded-lg border border-blue-300/40 bg-blue-950/40 px-3 py-2 text-xs text-white outline-none placeholder:text-blue-200/60 focus:border-orange-300 sm:min-h-32 sm:rounded-xl sm:text-sm"
          placeholder="Cuéntanos sobre tu necesidad documental"
          required
          minLength={10}
        />
      </label>

      <div className="md:col-span-2">
        {error ? <p className="text-xs text-orange-300 sm:text-sm">{error}</p> : null}
        {success ? <p className="text-xs text-emerald-300 sm:text-sm">{success}</p> : null}
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 sm:px-6 sm:py-3 sm:text-sm"
        >
          {loading ? "Enviando..." : "Solicitar asesoría"}
        </button>
      </div>
    </form>
  );
}
