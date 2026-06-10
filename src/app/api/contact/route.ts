import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { nom, email, telephone, objectif, message } = await req.json();

  if (!nom || !email || !objectif) {
    return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
  }

  const objectifLabels: Record<string, string> = {
    trail: "Trail — Compétition / Ultra",
    route: "Route — Marathon / Semi",
    sante: "Santé — Reprise / Bien-être",
    decouverte: "Découverte de la course à pied",
  };

  // Notification à Eric
  const { error } = await resend.emails.send({
    from: "KTL Running Coach <onboarding@resend.dev>",
    to: "ktl.running@gmail.com",
    replyTo: email,
    subject: `Nouvelle demande de coaching — ${nom}`,
    html: `
      <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e8e8e8">

        <!-- Header -->
        <div style="background:#1B3A2D;padding:32px 40px;text-align:center">
          <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:#E87722">KTL Running Coach</p>
          <h1 style="margin:0;font-family:Arial,sans-serif;font-size:22px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#ffffff">Nouvelle demande</h1>
        </div>

        <!-- Body -->
        <div style="padding:36px 40px">
          <p style="margin:0 0 24px;font-family:Arial,sans-serif;font-size:14px;color:#555;line-height:1.6">
            Tu as reçu une nouvelle demande de coaching via le formulaire de contact.
          </p>

          <!-- Info cards -->
          <div style="background:#f7f7f5;border-radius:10px;padding:24px;margin-bottom:24px">
            <table style="width:100%;border-collapse:collapse">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e8e8e8;font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#E87722;width:130px">Nom</td>
                <td style="padding:10px 0;border-bottom:1px solid #e8e8e8;font-family:Arial,sans-serif;font-size:14px;color:#1a1a1a;font-weight:600">${nom}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e8e8e8;font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#E87722">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #e8e8e8;font-family:Arial,sans-serif;font-size:14px"><a href="mailto:${email}" style="color:#1B3A2D;font-weight:600;text-decoration:none">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e8e8e8;font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#E87722">Téléphone</td>
                <td style="padding:10px 0;border-bottom:1px solid #e8e8e8;font-family:Arial,sans-serif;font-size:14px;color:#1a1a1a">${telephone || "Non renseigné"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#E87722">Objectif</td>
                <td style="padding:10px 0;font-family:Arial,sans-serif;font-size:14px;color:#1a1a1a">${objectifLabels[objectif] ?? objectif}</td>
              </tr>
            </table>
          </div>

          ${message ? `
          <div style="border-left:3px solid #E87722;padding:16px 20px;background:#fff8f4;border-radius:0 8px 8px 0;margin-bottom:24px">
            <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#E87722">Message</p>
            <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#1a1a1a;line-height:1.7">${message}</p>
          </div>` : ""}

          <!-- CTA -->
          <div style="text-align:center;margin-top:28px">
            <a href="mailto:${email}" style="display:inline-block;background:#E87722;color:#ffffff;font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:14px 32px;border-radius:50px">
              Répondre à ${nom} →
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background:#f7f7f5;padding:20px 40px;text-align:center;border-top:1px solid #e8e8e8">
          <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#999;letter-spacing:1px">KTL Running Coach — Kiffe Ta Life</p>
        </div>

      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }

  // Email de confirmation à l'utilisateur
  const { error: confirmError } = await resend.emails.send({
    from: "KTL Running Coach <contact@ktl-running.com>",
    to: email,
    replyTo: "ktl.running@gmail.com",
    subject: "Votre demande a bien été reçue — KTL Running Coach",
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border-radius:0;overflow:hidden">

        <!-- Header vert foncé avec bande orange -->
        <div style="background:#1B3A2D;padding:0">
          <div style="height:4px;background:#E87722"></div>
          <div style="padding:32px 40px;text-align:center">
            <p style="margin:0 0 6px;font-size:10px;font-weight:700;letter-spacing:5px;text-transform:uppercase;color:#E87722">
              KTL Running Coach
            </p>
            <h1 style="margin:0;font-size:26px;font-weight:900;letter-spacing:3px;text-transform:uppercase;color:#ffffff">
              DEMANDE REÇUE
            </h1>
            <p style="margin:10px 0 0;font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase">
              Kiffe Ta Life
            </p>
          </div>
        </div>

        <!-- Corps -->
        <div style="padding:40px 40px 32px">

          <!-- Salutation -->
          <p style="margin:0 0 8px;font-size:20px;font-weight:700;color:#1B3A2D;text-transform:uppercase;letter-spacing:1px">
            Bonjour ${nom},
          </p>
          <p style="margin:0 0 28px;font-size:14px;color:#555;line-height:1.8">
            Merci pour ta demande de coaching ! J'ai bien reçu ton message et je reviendrai vers toi dans les <strong style="color:#1B3A2D">24 heures</strong> pour organiser notre entretien découverte.
          </p>

          <!-- Séparateur orange -->
          <div style="width:40px;height:3px;background:#E87722;border-radius:2px;margin-bottom:28px"></div>

          <!-- Récapitulatif -->
          <div style="background:#f5f5f3;border-left:3px solid #E87722;border-radius:0 8px 8px 0;padding:20px 24px;margin-bottom:28px">
            <p style="margin:0 0 12px;font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#E87722">
              Récapitulatif de ta demande
            </p>
            <table style="width:100%;border-collapse:collapse">
              <tr>
                <td style="padding:6px 0;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#999;width:110px">Objectif</td>
                <td style="padding:6px 0;font-size:13px;color:#1a1a1a;font-weight:600">${objectifLabels[objectif] ?? objectif}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding:6px 0;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#999;vertical-align:top">Message</td>
                <td style="padding:6px 0;font-size:13px;color:#555;line-height:1.6">${message}</td>
              </tr>` : ""}
            </table>
          </div>

          <!-- Message final -->
          <p style="margin:0 0 32px;font-size:14px;color:#555;line-height:1.8">
            En attendant, tu peux découvrir mes offres de coaching sur le site ou parcourir mon parcours.<br/>
            À très vite sur les sentiers !
          </p>

          <!-- CTA -->
          <div style="text-align:center">
            <a href="https://ktl-running.com/offres"
               style="display:inline-block;background:#E87722;color:#ffffff;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;text-decoration:none;padding:14px 36px;border-radius:50px">
              VOIR MES OFFRES →
            </a>
          </div>
        </div>

        <!-- Signature -->
        <div style="padding:24px 40px;border-top:1px solid #ebebeb">
          <p style="margin:0;font-size:13px;color:#1B3A2D;font-weight:700">Éric Bitsch</p>
          <p style="margin:2px 0 0;font-size:11px;color:#999;letter-spacing:1px;text-transform:uppercase">Coach Trail & Running — KTL Running Coach</p>
        </div>

        <!-- Footer -->
        <div style="background:#1B3A2D;padding:16px 40px;text-align:center">
          <p style="margin:0;font-size:10px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">
            ktl-running.com
          </p>
        </div>

      </div>
    `,
  });

  if (confirmError) {
    console.error("Erreur email confirmation:", confirmError);
  }

  return NextResponse.json({ success: true });
}
