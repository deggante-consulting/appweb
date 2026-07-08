import { describe, expect, it } from "vitest";

import {
  consultant,
  employeeLimits,
  employeeSituations,
  organizationJsonLd,
  services,
  site,
  values,
  zones,
} from "./site";

describe("site content contract", () => {
  it("keeps the client identity and legal contact details centralized", () => {
    expect(site.name).toBe("DÉGGANTE Consulting");
    expect(site.email).toBe("contact@degganteconsulting.fr");
    expect(site.phone).toBe("+590 691 25 99 00");
    expect(site.siret).toBe("105 312 276 00014");
    expect(site.publisher).toBe("Élière Guieba");
  });

  it("presents Élière Guieba with the approved role", () => {
    expect(consultant.name).toBe("Élière Guieba");
    expect(consultant.role).toBe(
      "Consultant en relations sociales professionnelles",
    );
  });

  it("keeps the four approved service domains", () => {
    expect(services.map((service) => service.title)).toEqual([
      "Diagnostic et conseil en relations sociales",
      "Prévention et gestion des conflits",
      "Dialogue social, médiation et négociation",
      "Accompagnement et formation des managers",
    ]);
  });

  it("keeps the employee support situations and limits explicit", () => {
    expect(employeeSituations).toEqual(
      expect.arrayContaining([
        "Rupture conventionnelle",
        "Licenciement pour inaptitude",
        "Licenciement économique",
        "Accident du travail",
        "Orientation vers un nouveau projet professionnel",
      ]),
    );

    expect(employeeLimits).toEqual(
      expect.arrayContaining([
        "un avocat",
        "un syndicat",
        "un psychologue",
        "la médecine du travail",
        "un professionnel de santé",
      ]),
    );
  });

  it("keeps the four values from the brief without folkloric expansion", () => {
    expect(values.map((value) => value.creole)).toEqual([
      "Rèspé",
      "Nou vré",
      "Gadé pli lwen",
      "Bokantaj",
    ]);
  });

  it("does not introduce prohibited claims or fake guarantees", () => {
    const content = JSON.stringify({
      consultant,
      organizationJsonLd,
      services,
      site,
      values,
      zones,
    }).toLocaleLowerCase("fr-FR");

    expect(content).not.toContain("avocat");
    expect(content).not.toContain("juriste diplômé");
    expect(content).not.toContain("expert médical");
    expect(content).not.toContain("médiateur certifié");
    expect(content).not.toContain("équipe de consultants");
    expect(content).not.toContain("résultat garanti");
    expect(content).not.toContain("diagnostic gratuit complet");
  });

  it("uses service structured data without reviews or invented ratings", () => {
    expect(organizationJsonLd["@type"]).toBe("ProfessionalService");
    expect(organizationJsonLd.founder.name).toBe("Élière Guieba");
    expect(organizationJsonLd.areaServed).toContain("Guadeloupe");
    expect(organizationJsonLd).not.toHaveProperty("aggregateRating");
    expect(organizationJsonLd).not.toHaveProperty("review");
  });
});
