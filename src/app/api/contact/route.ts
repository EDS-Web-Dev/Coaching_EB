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

  // Email de confirmation à l'utilisateur — nécessite un domaine vérifié sur Resend
  // À activer une fois le domaine ktlcoaching.com configuré dans le dashboard Resend
  // et le `from` mis à jour avec l'adresse du domaine vérifié.
  //
  // await resend.emails.send({
  //   from: "KTL Running Coach <contact@ktlcoaching.com>",
  //   to: email,
  //   subject: "Votre demande a bien été reçue — KTL Running Coach",
  //   html: `
  //     <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e8e8e8">
  //       <div style="background:#1B3A2D;padding:32px 40px;text-align:center">
  //         <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:#E87722">KTL Running Coach</p>
  //         <h1 style="margin:0;font-family:Arial,sans-serif;font-size:22px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#ffffff">Message reçu !</h1>
  //       </div>
  //       <div style="padding:36px 40px">
  //         <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:#1a1a1a;font-weight:600">Bonjour ${nom},</p>
  //         <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;color:#555;line-height:1.7">
  //           Merci pour ta demande ! J'ai bien reçu ton message et je reviendrai vers toi sous <strong>24h</strong> pour organiser notre appel découverte.
  //         </p>
  //         <div style="background:#f7f7f5;border-radius:10px;padding:20px 24px;margin-bottom:28px">
  //           <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#E87722">Récapitulatif</p>
  //           <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#1a1a1a;line-height:1.7">
  //             <strong>Objectif :</strong> ${objectifLabels[objectif] ?? objectif}
  //             ${message ? `<br/><strong>Message :</strong> ${message}` : ""}
  //           </p>
  //         </div>
  //         <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#555;line-height:1.7">
  //           À très vite sur les sentiers,<br/>
  //           <strong style="color:#1B3A2D">Éric — KTL Running Coach</strong>
  //         </p>
  //       </div>
  //       <div style="background:#f7f7f5;padding:20px 40px;text-align:center;border-top:1px solid #e8e8e8">
  //         <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#999;letter-spacing:1px">KTL Running Coach — Kiffe Ta Life</p>
  //       </div>
  //     </div>
  //   `,
  // });

  return NextResponse.json({ success: true });
}
