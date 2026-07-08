export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export const initialContactFormState: ContactFormState = { status: "idle" };

export type ContactFormFields = {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
};

export function parseContactForm(formData: FormData): ContactFormFields {
  return {
    name: String(formData.get("name") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };
}

export function validateContactForm(fields: ContactFormFields): string | null {
  if (!fields.name) return "Le nom est obligatoire.";
  if (!fields.phone) return "Le téléphone est obligatoire.";
  if (!fields.email) return "Le courriel est obligatoire.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return "Le courriel n'est pas valide.";
  }
  if (!fields.message) return "Le message est obligatoire.";
  if (fields.message.length > 5000) return "Le message est trop long.";
  return null;
}
