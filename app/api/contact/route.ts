import { NextResponse } from "next/server";

type ContactPayload = {
  nombre: string;
  empresa?: string;
  email: string;
  telefono?: string;
  mensaje: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(text: string) {
  return text.trim().replace(/\s+/g, " ");
}

function validatePayload(payload: ContactPayload) {
  const nombre = sanitize(payload.nombre || "");
  const email = sanitize(payload.email || "");
  const mensaje = sanitize(payload.mensaje || "");

  if (!nombre || nombre.length < 3) {
    return "El nombre debe tener al menos 3 caracteres.";
  }

  if (!EMAIL_REGEX.test(email)) {
    return "El correo electrónico no es válido.";
  }

  if (!mensaje || mensaje.length < 10) {
    return "El mensaje debe tener al menos 10 caracteres.";
  }

  return null;
}

async function sendWithResend(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "no-reply@gedoc-web.local";

  if (!apiKey || !to) {
    return { sent: false, reason: "missing-config" as const };
  }

  const html = `
    <h2>Nuevo contacto GeDoc</h2>
    <p><strong>Nombre:</strong> ${payload.nombre}</p>
    <p><strong>Empresa:</strong> ${payload.empresa || "No indicada"}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Teléfono:</strong> ${payload.telefono || "No indicado"}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${payload.mensaje.replace(/\n/g, "<br/>")}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Nuevo contacto web de ${payload.nombre}`,
      html,
      reply_to: payload.email,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend error: ${errorText}`);
  }

  return { sent: true as const };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const payload: ContactPayload = {
      nombre: sanitize(body.nombre || ""),
      empresa: sanitize(body.empresa || ""),
      email: sanitize(body.email || ""),
      telefono: sanitize(body.telefono || ""),
      mensaje: sanitize(body.mensaje || ""),
    };

    const validationError = validatePayload(payload);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    try {
      const result = await sendWithResend(payload);

      if (!result.sent) {
        console.info("[contact] Mensaje recibido (sin proveedor de email configurado)", payload);
      }
    } catch (emailError) {
      console.error("[contact] Error enviando email:", emailError);

      return NextResponse.json(
        { error: "No fue posible enviar el mensaje en este momento. Intenta nuevamente." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Error procesando solicitud:", error);
    return NextResponse.json(
      { error: "Solicitud inválida. Verifica la información e inténtalo de nuevo." },
      { status: 400 }
    );
  }
}
