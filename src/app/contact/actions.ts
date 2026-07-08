"use server";

import {
  type ContactFormState,
  parseContactForm,
  validateContactForm,
} from "@/lib/contact-form";

async function sendContactEmail(fields: {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    throw new Error("SERVICE_UNAVAILABLE");
  }

  const subject = fields.company
    ? `Contact MSM — ${fields.name} (${fields.company})`
    : `Contact MSM — ${fields.name}`;

  const text = [
    `Nom : ${fields.name}`,
    fields.company ? `Société : ${fields.company}` : null,
    `Téléphone : ${fields.phone}`,
    `Courriel : ${fields.email}`,
    "",
    fields.message,
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: fields.email,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    throw new Error("SEND_FAILED");
  }
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  if (formData.get("website")) {
    return { status: "success" };
  }

  const fields = parseContactForm(formData);
  const validationError = validateContactForm(fields);

  if (validationError) {
    return { status: "error", message: validationError };
  }

  try {
    await sendContactEmail(fields);
    return { status: "success" };
  } catch (error) {
    if (error instanceof Error && error.message === "SERVICE_UNAVAILABLE") {
      return {
        status: "error",
        message:
          "Le formulaire n'est pas encore configuré. Veuillez nous appeler au (514) 312-1660.",
      };
    }

    return {
      status: "error",
      message: "L'envoi a échoué. Réessayez ou contactez-nous par téléphone.",
    };
  }
}
