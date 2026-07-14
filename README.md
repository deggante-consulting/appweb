# DÉGGANTE Consulting

Site vitrine Next.js de production pour DÉGGANTE Consulting.

URL cible : `https://degganteconsulting.fr`

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvrir `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run test
npm run typecheck
npm run build
```

## Structure

```text
src/
├─ app/                  # routes App Router, metadata, sitemap, robots
├─ components/
│  ├─ forms/             # formulaire Netlify Forms
│  ├─ layout/            # header, footer
│  ├─ patterns/          # motifs graphiques
│  └─ shared/            # composants réutilisables
├─ content/site.ts       # contenus, coordonnées, navigation, services, SEO
└─ lib/metadata.ts       # helper metadata par page
```

## Modifier les contenus

La majorité des textes récurrents sont centralisés dans `src/content/site.ts` :

- coordonnées
- navigation
- services
- zones d'intervention
- valeurs
- parcours d'Élière Guieba
- métadonnées par page
- chemins d'images

Les textes très spécifiques à une page sont dans le fichier `page.tsx` de la route concernée.

## Images

Les assets utiles de la maquette ont été copiés dans `public/images/` avec des noms propres.

Le portrait définitif d'Élière Guieba n'est pas inventé. Le site utilise un placeholder neutre dans `ConsultantProfile`. Quand la photo professionnelle sera disponible :

1. ajouter l'image dans `public/images/photos/portrait-eliere-guieba.jpg` ;
2. remplacer le placeholder dans `src/components/shared/consultant-profile.tsx` par un `next/image` ;
3. conserver un alt descriptif sobre.

Le favicon utilise `src/app/icon.png`, issu du symbole du logo avec fond transparent.

## Formulaire

Le formulaire de contact utilise Netlify Forms :

- nom du formulaire : `contact`
- honeypot : `bot-field`
- destination à configurer dans Netlify : `contact@degganteconsulting.fr`

Aucune base de données, aucun secret et aucune pièce jointe ne sont utilisés.

Variable documentaire :

```bash
CONTACT_FORM_TO=contact@degganteconsulting.fr
```

## Déploiement Netlify

Le fichier `netlify.toml` définit :

- commande : `npm run build`
- dossier publié : `.next`
- Node : `24`

Après connexion du dépôt dans Netlify :

1. activer la détection des formulaires, puis redéployer le site ;
2. vérifier que le site build correctement et que le formulaire `contact` apparaît dans Netlify Forms ;
3. activer les notifications du formulaire `contact` vers `contact@degganteconsulting.fr` ;
4. connecter le domaine `degganteconsulting.fr` ;
5. vérifier que `https://degganteconsulting.fr/sitemap.xml` et `/robots.txt` répondent.

## Pages légales

- Mentions légales : `/mentions-legales`
- Politique de confidentialité : `/confidentialite`

La date de dernière mise à jour de la confidentialité est dans `src/content/site.ts`.
