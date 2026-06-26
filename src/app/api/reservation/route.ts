import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Service d'envoi non configuré. Veuillez appeler directement." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const body = await request.json();
    const { name, phone, date, time, guests, zone, message } = body;

    if (!name || !phone || !date || !time || !guests || !zone) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    const zoneLabel = zone === "interieur" ? "En salle" : "En terrasse";

    await resend.emails.send({
      from: "Réservation <reservation@brasserie-le-ste-foy.fr>",
      to: "brasserielestefoy@icloud.com",
      subject: `Réservation ${zoneLabel} — ${name} (${guests} pers.)`,
      html: `
        <h2>Nouvelle réservation</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;">
          <tr><td style="padding:8px;font-weight:bold;">Nom</td><td style="padding:8px;">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Téléphone</td><td style="padding:8px;">${phone}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Date</td><td style="padding:8px;">${date}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Heure</td><td style="padding:8px;">${time}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Convives</td><td style="padding:8px;">${guests}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Zone</td><td style="padding:8px;">${zoneLabel}</td></tr>
          ${message ? `<tr><td style="padding:8px;font-weight:bold;">Message</td><td style="padding:8px;">${message}</td></tr>` : ""}
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi. Veuillez réessayer ou appeler directement." },
      { status: 500 }
    );
  }
}
