# Deggante Web App AGENT

AI Workflow Version: v1

Use this file as the local entrypoint for AI work in this repository.

## Loading Order

1. Read this `AGENT.md`.
2. Read mandatory context:
   - `ai/context/stack.md`
   - `ai/context/architecture.md`
   - `ai/context/conventions.md`
3. Read `ai/context/product.md` when the task affects copy, SEO, UX, or user-facing behavior.
4. Read only the relevant rule files under `ai/rules/`.
5. Read `ai/playbooks/task-dispatch.md`.
6. Select exactly one task playbook under `ai/playbooks/`.
7. Select exactly one primary skill from the local `ai-skills/` library when present.
8. Discover and run repository-native validation before concluding.

## Mandatory Context

- `ai/context/stack.md`
- `ai/context/architecture.md`
- `ai/context/conventions.md`

## Optional Context

- `ai/context/product.md`: required for product intent, content fidelity, SEO, IA, and user-facing UX decisions.

## Local Workflow Notes

- `ai/playbooks/*` is the canonical local interface for task routing in this repository.
- `ai-skills/` is optional local reusable skill material. Reference it when present instead of copying skill content into project docs.
- Keep the workflow lightweight: load only what the task needs.

## Validation Path

Use the repository's real commands when they apply to the task:

- `npm run build`
- `npm run lint`
- `npm run test`

Also verify that:

- the app remains aligned with the Deggante product scope
- user-facing copy is clear and specific instead of generic filler
- semantic structure, accessibility, and SEO metadata remain intact
