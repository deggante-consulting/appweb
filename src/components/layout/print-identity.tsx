import Image from "next/image";

import { images, site } from "@/content/site";

// Ces deux blocs ne sortent qu'à l'impression (`.dg-print-only`).
// L'en-tête et le pied de page du site étant masqués sur papier, ils
// réintroduisent l'identité, les coordonnées et l'URL sur le document.
export function PrintMasthead() {
  return (
    <div className="dg-print-only dg-print-masthead">
      <Image alt="" height={40} src={images.logo} width={40} />
      <span className="dg-print-identity">
        <strong>{site.name}</strong>
        <span>{site.slogan}</span>
      </span>
      <span className="dg-print-url">{site.url.replace("https://", "")}</span>
    </div>
  );
}

export function PrintContactBlock() {
  return (
    <div className="dg-print-only dg-print-contact">
      <p>
        <strong>{site.legalName}</strong> · SIRET {site.siret}
      </p>
      <p>
        {site.addressLines.join(" · ")}
      </p>
      <p>
        {site.phone} · {site.email} · {site.url.replace("https://", "")}
      </p>
    </div>
  );
}
