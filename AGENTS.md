# AGENTS.md

## Project Scope

Build and maintain the Deggante web application with Next.js App Router, TypeScript, and Tailwind CSS.

## Package Manager

- Use `npm` only.
- Do not introduce `yarn`, `pnpm`, or other package managers.
- Keep `package-lock.json` authoritative when dependencies are added or updated.

## Allowed Commands

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run test`

Do not add alternate task runners unless the project explicitly requires them.

## Architecture Rules

- Use Next.js App Router conventions.
- Keep page composition in `src/app`.
- Place reusable layout pieces in `src/components/layout`.
- Place page sections in `src/components/sections`.
- Place generic UI primitives in `src/components/ui`.
- Keep static content or structured copy in `src/content`.
- Keep utility code such as SEO helpers in `src/lib`.
- Favor small, focused components over large monolithic files.

## Styling Rules

- Use Tailwind CSS for styling.
- Reuse consistent spacing, typography, and color tokens.
- Avoid inline styles unless there is a clear technical reason.
- Keep layouts responsive on mobile and desktop.
- Prefer clear, restrained interfaces over decorative complexity.

## UX Principles

- Build useful application screens before marketing pages.
- Make primary actions obvious without aggressive calls to action.
- Maintain strong accessibility: semantic structure, keyboard support, color contrast, and descriptive labels.
- Avoid generic placeholder content once product requirements are known.

## SEO Guidelines

- Use semantic HTML with meaningful heading order.
- Keep metadata accurate to Deggante.
- Use descriptive alt text for meaningful images.
- Keep content understandable for both users and search engines.

## Validation Before Commit

Before committing changes:

1. Run `npm run build`.
2. Run `npm run lint`.
3. Run `npm run test`.
4. Check for broken Markdown, invalid headings, and formatting regressions in documentation.
5. Verify no unrelated files or package-manager artifacts were introduced.
