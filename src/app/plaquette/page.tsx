import type { Metadata } from "next";
import Image from "next/image";

import {
  audiences,
  consultant,
  employeeLimits,
  employeeSituations,
  images,
  processSteps,
  reasons,
  services,
  site,
  timeline,
  values,
  zones,
} from "@/content/site";

import "./plaquette.css";

// Document de présentation, pas une page du site : il n'apparaît ni dans
// la navigation, ni dans le sitemap, ni dans les moteurs de recherche.
export const metadata: Metadata = {
  title: "Plaquette de présentation",
  description:
    "Document de présentation de DÉGGANTE Consulting : domaines d'intervention, accompagnement des salariés et déroulé d'une intervention.",
  robots: { index: false, follow: false },
};

export default function PlaquettePage() {
  return (
    <div className="pl-doc">
      <CoverPage />
      <ConsultantPage />
      <ServicesPage />
      <ClosingPage />
    </div>
  );
}

function CoverPage() {
  return (
    <section className="pl-page pl-page-dark">
      <div className="pl-cover">
        <div className="pl-brand">
          <Image
            alt=""
            height={44}
            priority
            src={images.logoDark}
            width={44}
          />
          <span>
            <span className="pl-brand-name">DÉGGANTE</span>
            <br />
            <span className="pl-brand-sub">Consulting</span>
          </span>
        </div>

        <h1 className="pl-cover-claim">
          Se comprendre
          <br />
          <span>pour réussir.</span>
        </h1>

        <p className="pl-cover-lead">
          Cabinet indépendant en relations sociales professionnelles en
          Guadeloupe. Conseil, prévention des conflits, dialogue social,
          négociation et accompagnement des salariés — au service des
          employeurs comme de leurs équipes.
        </p>

        <Image
          alt="Échange professionnel autour du dialogue social"
          className="pl-cover-photo"
          height={640}
          priority
          src={images.hero}
          width={960}
        />

        <div className="pl-cover-foot">
          <div>
            <p className="pl-eyebrow">Publics accompagnés</p>
            <div className="pl-cover-audiences" style={{ marginTop: "3mm" }}>
              {audiences.map((audience) => (
                <span className="pl-chip" key={audience}>
                  {audience}
                </span>
              ))}
            </div>
          </div>
          <div className="pl-cover-contact">
            <strong>{site.phone}</strong>
            {site.email}
            <br />
            {site.url.replace("https://", "")}
          </div>
        </div>
      </div>
    </section>
  );
}

function ConsultantPage() {
  return (
    <section className="pl-page">
      <p className="pl-eyebrow">Le consultant</p>
      <h2 className="pl-title">
        Quinze ans de dialogue social, vécus de l&apos;intérieur
      </h2>

      <div className="pl-profile">
        <Image
          alt="Élière Guieba, fondateur de DÉGGANTE Consulting"
          height={1402}
          priority
          src={images.consultantAboutPortrait}
          width={1122}
        />
        <div>
          <p className="pl-profile-name">{consultant.name}</p>
          <p className="pl-profile-role">{consultant.role}</p>
          <p style={{ marginTop: "4mm" }}>{consultant.longBio}</p>
          <p>
            DÉGGANTE Consulting est né de cette conviction : la plupart des
            conflits du travail viennent d&apos;incompréhensions qui auraient pu
            être évitées. D&apos;où le nom, et le slogan.
          </p>
          <blockquote className="pl-quote">« {consultant.quote} »</blockquote>
        </div>
      </div>

      <div className="pl-timeline">
        {timeline.map((entry) => (
          <div key={entry.date}>
            <p className="pl-timeline-date">{entry.date}</p>
            <p>{entry.text}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "12mm" }}>
        <p className="pl-eyebrow">Ce qui distingue l&apos;intervention</p>
        <div className="pl-reasons">
          {reasons.map((reason) => (
            <div className="pl-reason" key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <section className="pl-page">
      <p className="pl-eyebrow">Domaines d&apos;intervention</p>
      <h2 className="pl-title">
        Quatre domaines, un objectif : des relations durables
      </h2>
      <p className="pl-lead">
        Pour les employeurs, directions, responsables RH, managers,
        collectivités et représentants du personnel. Toutes les prestations sont
        proposées sur devis, après un premier échange.
      </p>

      <div className="pl-services">
        {services.map((service) => (
          <article className="pl-service" key={service.id}>
            <div className="pl-service-head">
              <span className="pl-service-number">{service.number}</span>
              <h3>{service.title}</h3>
            </div>
            <p>{service.summary}</p>
            <ul>
              {service.actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
            <p className="pl-service-result">{service.result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ClosingPage() {
  return (
    <section className="pl-page pl-page-4">
      <p className="pl-eyebrow">Accompagnement des salariés</p>
      <h2 className="pl-title">
        Traverser une situation professionnelle difficile, sans rester seul
      </h2>

      <div className="pl-split">
        <h2>Dans quels cas nous solliciter</h2>
        <p>
          Entretien à préparer, conflit, rupture conventionnelle, licenciement,
          arrêt maladie prolongé : comprendre sa situation, préparer ses
          échanges et reprendre le dialogue avec son employeur.
        </p>
        <div className="pl-tags">
          {employeeSituations.map((situation) => (
            <span className="pl-tag" key={situation}>
              {situation}
            </span>
          ))}
        </div>
        <p className="pl-limits">
          <strong>Le cadre de l&apos;intervention :</strong> cet accompagnement
          ne remplace pas {employeeLimits.join(", ")}. Lorsque le dossier relève
          d&apos;une procédure judiciaire ou d&apos;un accompagnement médical,
          nous orientons vers le professionnel adapté.
        </p>
      </div>

      <div style={{ marginTop: "8mm" }}>
        <p className="pl-eyebrow">Déroulé d&apos;une intervention</p>
        <div className="pl-steps">
          {processSteps.map((step, index) => (
            <div className="pl-step" key={step.title}>
              <span className="pl-step-number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pl-values">
        {values.map((value) => (
          <div className="pl-value" key={value.creole}>
            <p className="pl-value-word">{value.creole}</p>
            <p>{value.text}</p>
          </div>
        ))}
      </div>

      <div className="pl-contact">
        <div>
          <p className="pl-contact-label">Contact</p>
          <p>
            {site.phone}
            <br />
            {site.email}
            <br />
            {site.url.replace("https://", "")}
          </p>
        </div>
        <div>
          <p className="pl-contact-label">Adresse</p>
          <p>
            {site.addressLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div>
          <p className="pl-contact-label">Zones d&apos;intervention</p>
          <p>{zones.join(" · ")}</p>
        </div>
      </div>
    </section>
  );
}
