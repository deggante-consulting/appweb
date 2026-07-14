"use client";

import { FormEvent, useState } from "react";

const requestTypes = [
  "employeur",
  "collectivité",
  "manager ou responsable RH",
  "représentant du personnel",
  "salarié",
  "autre",
];

const serviceOptions = [
  "Je ne sais pas encore",
  "Diagnostic et conseil",
  "Prévention / gestion de conflit",
  "Dialogue social, médiation, négociation",
  "Formation des managers",
  "Accompagnement salarié",
];

const contactPreferences = ["Email ou téléphone", "Email", "Téléphone"];

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [consentAccepted, setConsentAccepted] = useState(false);

  const sending = status === "sending";
  const submitDisabled = sending;
  const fieldClass = "dg-field";
  const selectClass = "dg-field dg-select";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors: Record<string, string> = {};

    const requiredFields = ["lastName", "requestType", "message", "consent"];

    for (const field of requiredFields) {
      if (!formData.get(field)) {
        nextErrors[field] = "Champ obligatoire.";
      }
    }

    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    if (!email && !phone) {
      nextErrors.email = "Indiquez au moins un email ou un téléphone.";
      nextErrors.phone = "Indiquez au moins un email ou un téléphone.";
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Adresse email invalide.";
    }

    const message = String(formData.get("message") ?? "");
    if (message.length > 1800) {
      nextErrors.message = "Le message doit rester sous 1800 caractères.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      formData.set("form-name", "contact");
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      form.reset();
      setConsentAccepted(false);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      action="/contact"
      className="dg-card flex flex-col gap-5 p-6 sm:p-9"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="POST"
      name="contact"
      noValidate
      onSubmit={handleSubmit}
    >
      <input name="form-name" type="hidden" value="contact" />
      <p aria-hidden="true" className="sr-only">
        <label>
          Ne pas remplir ce champ <input autoComplete="off" name="bot-field" tabIndex={-1} />
        </label>
      </p>
      <div>
        <h2 className="text-base font-extrabold text-[var(--dark-soft)]">Champs essentiels</h2>
        <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
          Nom, moyen de contact, type de demande et situation.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Prénom" name="firstName" optionalText="facultatif">
          <input className={fieldClass} id="firstName" maxLength={80} name="firstName" placeholder="Votre prénom" type="text" />
        </Field>
        <Field error={errors.lastName} label="Nom" name="lastName" required>
          <input aria-describedby={errors.lastName ? "lastName-error" : undefined} aria-invalid={Boolean(errors.lastName)} className={fieldClass} id="lastName" maxLength={80} name="lastName" placeholder="Votre nom" required type="text" />
        </Field>
        <Field error={errors.email} label="Email" name="email">
          <input aria-describedby={errors.email ? "email-error" : undefined} aria-invalid={Boolean(errors.email)} className={fieldClass} id="email" maxLength={160} name="email" placeholder="vous@exemple.fr" type="email" />
        </Field>
        <Field error={errors.phone} label="Téléphone" name="phone">
          <input aria-describedby={errors.phone ? "phone-error" : undefined} aria-invalid={Boolean(errors.phone)} className={fieldClass} id="phone" maxLength={40} name="phone" placeholder="+590 ..." type="tel" />
        </Field>
      </div>
      <Field error={errors.requestType} label="Type de demande" name="requestType" required>
        <select aria-describedby={errors.requestType ? "requestType-error" : undefined} aria-invalid={Boolean(errors.requestType)} className={selectClass} defaultValue="" id="requestType" name="requestType" required>
          <option disabled value="">
            Sélectionner
          </option>
          {requestTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>
      <Field error={errors.message} label="Votre situation, en quelques lignes" name="message" required>
        <textarea
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={Boolean(errors.message)}
          className={`${fieldClass} min-h-40 resize-y`}
          id="message"
          maxLength={1800}
          name="message"
          placeholder="Décrivez le contexte général. Inutile de transmettre des documents ou des informations sensibles à ce stade."
          required
        />
      </Field>
      <div className="border-t border-[var(--line)] pt-5">
        <h2 className="text-base font-extrabold text-[var(--dark-soft)]">Informations facultatives</h2>
        <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
          Elles peuvent aider à préparer le premier échange.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Structure" name="organization" optionalText="facultatif">
          <input className={fieldClass} id="organization" maxLength={120} name="organization" placeholder="Nom de votre structure" type="text" />
        </Field>
        <Field label="Fonction" name="role" optionalText="facultatif">
          <input className={fieldClass} id="role" maxLength={120} name="role" placeholder="Votre fonction" type="text" />
        </Field>
        <Field label="Service recherché" name="service" optionalText="facultatif">
          <select className={selectClass} id="service" name="service">
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Préférence de contact" name="contactPreference" optionalText="facultatif">
          <select className={selectClass} id="contactPreference" name="contactPreference">
            {contactPreferences.map((preference) => (
              <option key={preference} value={preference}>
                {preference}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <label className="flex cursor-pointer gap-3 text-sm leading-6 text-[var(--text-soft)]">
        <input
          aria-describedby={errors.consent ? "consent-error" : undefined}
          aria-invalid={Boolean(errors.consent)}
          checked={consentAccepted}
          className="mt-1 size-5 cursor-pointer accent-[var(--accent-dark)]"
          name="consent"
          onChange={(event) => setConsentAccepted(event.currentTarget.checked)}
          required
          type="checkbox"
        />
        <span>
          J'accepte que mes données soient utilisées pour traiter ma demande,
          conformément à la politique de confidentialité.
          {errors.consent ? (
            <span className="block font-bold text-red-700" id="consent-error">{errors.consent}</span>
          ) : null}
        </span>
      </label>
      <div className="flex flex-col gap-4 border-t border-[var(--line)] pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-sm leading-6 text-[var(--muted-soft)]">
          Merci de ne pas transmettre d'informations médicales, judiciaires ou
          concernant d'autres personnes à ce stade. Le formulaire ne réserve pas
          automatiquement un rendez-vous.
        </p>
        <button
          className="inline-flex dg-cta dg-cta-dark min-h-12 w-full shrink-0 px-8 sm:w-auto"
          disabled={submitDisabled}
          type="submit"
        >
          {sending ? "Envoi en cours..." : "Envoyer ma demande"}
        </button>
      </div>
      <div aria-live="polite">
        {status === "success" ? (
          <p className="rounded-[var(--radius-field)] bg-[var(--soft)] p-4 text-sm font-bold text-[var(--accent-dark)]">
            Votre demande a été préparée pour transmission. DÉGGANTE Consulting
            reviendra vers vous après étude.
          </p>
        ) : null}
        {status === "error" && Object.keys(errors).length === 0 ? (
          <p className="rounded-[var(--radius-field)] bg-red-50 p-4 text-sm font-bold text-red-700">
            L'envoi n'a pas abouti. Vous pouvez écrire directement à
            contact@degganteconsulting.fr.
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  children,
  error,
  label,
  name,
  optionalText,
  required = false,
}: Readonly<{
  children: React.ReactNode;
  error?: string;
  label: string;
  name: string;
  optionalText?: string;
  required?: boolean;
}>) {
  return (
    <label className="flex flex-col gap-2" htmlFor={name}>
      <span className="text-sm font-extrabold text-[var(--dark-soft)]">
        {label}
        {required ? " *" : ""}
        {optionalText ? (
          <span className="ml-1 font-semibold text-[var(--muted-soft)]">({optionalText})</span>
        ) : null}
      </span>
      {children}
      {error ? <span className="text-sm font-bold text-red-700" id={`${name}-error`}>{error}</span> : null}
    </label>
  );
}
