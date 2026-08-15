import type { Metadata } from "next";
import Image from "next/image";

import {
  audiences,
  consultant,
  employeeSituations,
  images,
  processSteps,
  reasons,
  services,
  site,
  situations,
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

const TOTAL_PAGES = 6;

// Plaquette destinée à être remise en main propre : 6 pages, soit trois
// feuilles A4 imprimées recto/verso et agrafées. Elle remplace le site
// pour un lecteur qui ne peut pas le consulter en ligne, donc elle en
// reprend tout le contenu — rien n'y est réécrit : chaque texte vient de
// `@/content/site` ou de la page correspondante.
//
// Le nombre de pages suit le contenu, pas l'inverse : mieux vaut six
// pages aérées que quatre pages tassées en corps 8.
//
// Fonds clairs uniquement — un aplat sombre pleine page laisse une
// bordure blanche sur les imprimantes sans fond perdu, et vide les
// cartouches.
export default function PlaquettePage() {
  return (
    <div className="pl-doc">
      <CoverPage />
      <ConsultantPage />
      <VisionPage />
      <ServicesPage />
      <ServicesPageTwo />
      <ClosingPage />
    </div>
  );
}

function PageHeader({ page }: { page: number }) {
  return (
    <header className="pl-head">
      <div className="pl-brand">
        <Image alt="" height={40} priority src={images.logo} width={40} />
        <span>
          <span className="pl-brand-name">DÉGGANTE</span>
          <br />
          <span className="pl-brand-sub">Consulting</span>
        </span>
      </div>
      <p className="pl-head-meta">
        Cabinet de conseil en
        <br />
        relations sociales professionnelles
        <span className="pl-head-folio">
          {page} / {TOTAL_PAGES}
        </span>
      </p>
    </header>
  );
}

function CoverPage() {
  return (
    <section className="pl-page">
      <PageHeader page={1} />

      <h1 className="pl-claim">
        Se comprendre
        <br />
        <span>pour réussir.</span>
      </h1>

      <p className="pl-lead">
        L&apos;expérience du dialogue social au service des employeurs et de
        leurs équipes. DÉGGANTE Consulting aide directions, managers, salariés
        et collectivités à prévenir les tensions, restaurer le dialogue et
        préparer les négociations en Guadeloupe et dans la Caraïbe.
      </p>

      <div className="pl-stats">
        <div>
          <p className="pl-stat-title">Depuis 2010</p>
          <p>une pratique de terrain du dialogue social</p>
        </div>
        <div>
          <p className="pl-stat-title">Toutes les parties</p>
          <p>directions, managers, représentants, salariés</p>
        </div>
        <div>
          <p className="pl-stat-title">Guadeloupe &amp; Caraïbe</p>
          <p>et interventions à distance</p>
        </div>
      </div>

      <div className="pl-audiences">
        <p className="pl-eyebrow">Publics accompagnés</p>
        <div className="pl-chips">
          {audiences.map((audience) => (
            <span className="pl-chip" key={audience}>
              {audience}
            </span>
          ))}
        </div>
      </div>

      <div className="pl-situations">
        <p className="pl-eyebrow">Quand intervenir</p>
        <h2>Ces situations vous parlent ?</h2>
        <ul>
          {situations.map((situation) => (
            <li key={situation}>{situation}</li>
          ))}
        </ul>
        <p className="pl-situations-note">
          <strong>Plus une tension est prise tôt,</strong> plus le dialogue est
          simple à restaurer.
        </p>
      </div>

      <p className="pl-folio">
        {site.legalName} · SIRET {site.siret} · Document non contractuel
      </p>
    </section>
  );
}

function ConsultantPage() {
  return (
    <section className="pl-page">
      <PageHeader page={2} />

      <p className="pl-eyebrow pl-section-start">À propos</p>
      <h2 className="pl-title">{consultant.name}</h2>
      <p className="pl-subtitle">
        {consultant.role} — fondateur de DÉGGANTE Consulting
      </p>

      <div className="pl-profile">
        <Image
          alt="Élière Guieba, fondateur de DÉGGANTE Consulting"
          height={1402}
          priority
          src={images.consultantAboutPortrait}
          width={1122}
        />
        <div>
          <p>
            Professionnel de santé de formation, Élière Guieba a passé plus de
            quinze ans au cœur du dialogue social du secteur privé de la santé
            en Guadeloupe. Son expertise s&apos;est construite sur le terrain,
            au fil de négociations collectives, d&apos;élections
            professionnelles, de restructurations et de situations de conflit
            complexes.
          </p>
          <p>
            Cette expérience lui permet aujourd&apos;hui de comprendre les
            contraintes, les attentes et les modes de fonctionnement de chaque
            partie, tout en intervenant dans un cadre indépendant, confidentiel
            et impartial.
          </p>
          <p>
            DÉGGANTE Consulting est né de cette conviction : la plupart des
            conflits du travail viennent d&apos;incompréhensions qui auraient pu
            être évitées. D&apos;où le nom, et le slogan :{" "}
            <strong>se comprendre pour réussir</strong>.
          </p>
        </div>
      </div>

      {/* Espaces insécables : les guillemets français ne doivent pas se
          retrouver seuls en début ou en fin de ligne. */}
      <blockquote className="pl-quote">
        {`« ${consultant.quote} »`}
      </blockquote>

      <div className="pl-parcours-block">
        <p className="pl-eyebrow">Parcours</p>
        <h3 className="pl-subtitle-strong">Quinze ans de terrain</h3>
        <div className="pl-parcours">
          {timeline.map((entry) => (
            <div key={entry.date}>
              <p className="pl-parcours-date">{entry.date}</p>
              <p>{entry.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionPage() {
  return (
    <section className="pl-page">
      <PageHeader page={3} />

      <p className="pl-eyebrow pl-section-start">Sa vision</p>
      <h2 className="pl-title">
        Le dialogue n&apos;est pas un risque. C&apos;est une méthode.
      </h2>
      <p className="pl-lead pl-lead-tight">
        Son expérience lui permet de comprendre les contraintes, les attentes et
        les responsabilités de chaque partie. Quand chaque partie comprend les
        contraintes de l&apos;autre, la plupart des conflits deviennent des
        problèmes solubles. Le rôle du consultant n&apos;est pas de donner
        raison, mais de créer les conditions pour que les parties se parlent et
        se comprennent.
      </p>

      <div className="pl-section">
        <p className="pl-eyebrow">Les valeurs</p>
        <div className="pl-values">
          {values.map((value) => (
            <div key={value.creole}>
              <p className="pl-value-word">{value.creole}</p>
              <p className="pl-value-label">{value.label}</p>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pl-section pl-reasons-block">
        <p className="pl-eyebrow">Ce qui distingue l&apos;intervention</p>
        <div className="pl-reasons">
          {reasons.map((reason) => (
            <div key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <article className="pl-service">
      <div className="pl-service-head">
        <span className="pl-service-number">{service.number}</span>
        <h3>{service.title}</h3>
      </div>
      <p className="pl-service-intro">{service.intro}</p>
      <p className="pl-service-actions-label">Ce que comprend l&apos;accompagnement</p>
      <ul>
        {service.actions.map((action) => (
          <li key={action}>{action}</li>
        ))}
      </ul>
      <p className="pl-service-result">{service.result}</p>
    </article>
  );
}

function ServicesPage() {
  return (
    <section className="pl-page">
      <PageHeader page={4} />

      <p className="pl-eyebrow pl-section-start">
        Domaines d&apos;intervention
      </p>
      <h2 className="pl-title">
        Quatre domaines d&apos;intervention, un objectif : des relations
        durables
      </h2>
      <p className="pl-subtitle">
        Pour les employeurs, directions, responsables RH, managers,
        collectivités et représentants du personnel. Toutes les prestations sont
        proposées sur devis, après un premier échange.
      </p>

      <div className="pl-services">
        {services.slice(0, 2).map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

function ServicesPageTwo() {
  return (
    <section className="pl-page">
      <PageHeader page={5} />

      <p className="pl-eyebrow pl-section-start">
        Domaines d&apos;intervention (suite)
      </p>

      <div className="pl-services pl-services-continued">
        {services.slice(2).map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <p className="pl-services-note">
        <strong>Pas de méthode générique.</strong>{" "}
        Chaque mission débute par une analyse de la situation. Le cadre, les
        objectifs, les parties concernées et les modalités d&apos;intervention
        sont ensuite définis avant toute proposition d&apos;accompagnement.
      </p>
    </section>
  );
}

function ClosingPage() {
  return (
    <section className="pl-page">
      <PageHeader page={6} />

      <p className="pl-eyebrow pl-section-start">Accompagnement des salariés</p>
      <h2 className="pl-title">
        Traverser une situation professionnelle difficile, sans rester seul
      </h2>
      <p className="pl-subtitle">
        Entretien à préparer, conflit, rupture conventionnelle, licenciement,
        arrêt maladie prolongé : DÉGGANTE Consulting vous aide à comprendre
        votre situation, préparer vos échanges et reprendre le dialogue avec
        votre employeur.
      </p>

      <div className="pl-chips pl-chips-tight">
        {employeeSituations.map((situation) => (
          <span className="pl-chip" key={situation}>
            {situation}
          </span>
        ))}
      </div>

      <div className="pl-frame">
        <h3>Le cadre de l&apos;intervention</h3>
        <p>
          Cet accompagnement ne remplace pas un avocat, un syndicat, un
          psychologue, la médecine du travail ou un professionnel de santé.
        </p>
        <p>
          L&apos;intervention de DÉGGANTE Consulting s&apos;arrête lorsque le
          dossier nécessite une procédure judiciaire, ou relève d&apos;un
          accompagnement médical ou psychologique. Dans ce cas, nous vous
          orientons vers le professionnel adapté.
        </p>
      </div>

      <div className="pl-section">
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

      <div className="pl-contact">
        <div className="pl-contact-cols">
          <div>
            <p className="pl-contact-label">Contact</p>
            <p className="pl-contact-phone">{site.phone}</p>
            <p className="pl-contact-line">{site.email}</p>
            <p className="pl-contact-line">
              {site.url.replace("https://", "")}
            </p>
          </div>
          <div>
            <p className="pl-contact-label">Adresse</p>
            <p className="pl-contact-line">
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
            <p className="pl-contact-line">{zones.join(" · ")}</p>
          </div>
        </div>

        <div className="pl-qr">
          <Image
            alt="QR code vers la page contact de degganteconsulting.fr"
            height={120}
            src="/images/brand/qr-contact.svg"
            unoptimized
            width={120}
          />
          <p>
            Scannez pour
            <br />
            nous écrire
          </p>
        </div>
      </div>
    </section>
  );
}
