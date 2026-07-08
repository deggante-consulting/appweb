"use client";

import { FormEvent, useMemo, useState } from "react";

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

  const disabled = status === "sending";
  const fieldClass = useMemo(
    () =>
      "min-h-11 rounded-[var(--radius-field)] border-[1.5px] border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--dark)] outline-none transition focus:border-[var(--accent)]",
    [],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors: Record<string, string> = {};

    const requiredFields = ["firstName", "lastName", "email", "requestType", "message", "consent"];

    for (const field of requiredFields) {
      if (!formData.get(field)) {
        nextErrors[field] = "Champ obligatoire.";
      }
    }

    const email = String(formData.get("email") ?? "");
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
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      form.reset();
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
      method="POST"
      name="contact"
      netlify-honeypot="bot-field"
      noValidate
      onSubmit={handleSubmit}
    >
      <input name="form-name" type="hidden" value="contact" />
      <p className="hidden">
        <label>
          Ne pas remplir ce champ <input name="bot-field" tabIndex={-1} />
        </label>
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field error={errors.firstName} label="Prénom" name="firstName" required>
          <input className={fieldClass} id="firstName" maxLength={80} name="firstName" required type="text" />
        </Field>
        <Field error={errors.lastName} label="Nom" name="lastName" required>
          <input className={fieldClass} id="lastName" maxLength={80} name="lastName" required type="text" />
        </Field>
        <Field error={errors.email} label="Email" name="email" required>
          <input className={fieldClass} id="email" maxLength={160} name="email" required type="email" />
        </Field>
        <Field label="Téléphone" name="phone">
          <input className={fieldClass} id="phone" maxLength={40} name="phone" type="tel" />
        </Field>
      </div>
      <Field error={errors.requestType} label="Type de demande" name="requestType" required>
        <select className={fieldClass} defaultValue="" id="requestType" name="requestType" required>
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
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Structure" name="organization">
          <input className={fieldClass} id="organization" maxLength={120} name="organization" type="text" />
        </Field>
        <Field label="Fonction" name="role">
          <input className={fieldClass} id="role" maxLength={120} name="role" type="text" />
        </Field>
        <Field label="Service recherché" name="service">
          <select className={fieldClass} id="service" name="service">
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Préférence de contact" name="contactPreference">
          <select className={fieldClass} id="contactPreference" name="contactPreference">
            {contactPreferences.map((preference) => (
              <option key={preference} value={preference}>
                {preference}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field error={errors.message} label="Message" name="message" required>
        <textarea
          className={`${fieldClass} min-h-36 resize-y`}
          id="message"
          maxLength={1800}
          name="message"
          required
        />
      </Field>
      <div className="rounded-[var(--radius-panel)] border border-[var(--border)] bg-[var(--background)] p-4 text-sm leading-7 text-[var(--text-soft)]">
        Ne transmettez pas immédiatement d'informations médicales détaillées, de
        documents judiciaires, de données personnelles concernant des tiers ou
        d'informations confidentielles sensibles.
      </div>
      <label className="flex gap-3 text-sm leading-6 text-[var(--text-soft)]">
        <input className="mt-1 size-5 accent-[var(--accent-dark)]" name="consent" required type="checkbox" />
        <span>
          J'accepte que mes données soient utilisées pour traiter ma demande,
          conformément à la politique de confidentialité.
          {errors.consent ? (
            <span className="block font-bold text-red-700">{errors.consent}</span>
          ) : null}
        </span>
      </label>
      <div className="flex flex-col gap-4 border-t border-[var(--line)] pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-[var(--text-soft)]">
          Le formulaire ne réserve pas automatiquement un rendez-vous. DÉGGANTE
          Consulting étudie la demande avant de recontacter la personne.
        </p>
        <button
          className="min-h-12 rounded-full bg-[var(--accent-dark)] px-6 text-sm font-extrabold text-white transition hover:bg-[var(--accent-deep)] disabled:cursor-not-allowed disabled:opacity-60"
          disabled={disabled}
          type="submit"
        >
          {disabled ? "Envoi en cours..." : "Envoyer ma demande"}
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
  required = false,
}: Readonly<{
  children: React.ReactNode;
  error?: string;
  label: string;
  name: string;
  required?: boolean;
}>) {
  return (
    <label className="flex flex-col gap-2" htmlFor={name}>
      <span className="text-sm font-extrabold text-[var(--dark-soft)]">
        {label}
        {required ? " *" : ""}
      </span>
      {children}
      {error ? <span className="text-sm font-bold text-red-700">{error}</span> : null}
    </label>
  );
}
