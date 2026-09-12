# Sensus Vitae

Sensus Vitae is a multilingual educational project about psychology, psychobiology, philosophy and critical thinking. The site is designed as a growing knowledge library for students and interested readers.

## Current content

- Languages: Russian (RU), Dutch (NL), English (EN) and Spanish (ES)
- Psychobiology and genetics & behaviour
- Robert Sapolsky book-club materials: chapters 1–18
- Chapter illustrations currently available for chapters 1–16
- Psychology and critical-thinking learning materials
- Knowledge library and contact form
- Responsive desktop and mobile interface

## Architecture

The project runs on OpenAI Sites using a vinext/Next.js-style application structure. Source code is stored in this GitHub repository. Cloudflare D1/Drizzle are used for database-backed features where configured.

Important: GitHub contains source code, schema and migrations. Production database records, visitor messages, publication/domain configuration and environment-secret values remain in the Sites environment and are not stored in this repository.

## Secrets and contact notifications

The contact form can send notifications through Resend. Credentials such as `RESEND_API_KEY` and other environment values must never be committed to GitHub. The application references environment-variable names only; actual values belong in the deployment environment.

## Development

Prerequisites:

- Node.js `>=22.13.0`
- Linux with `flock`, `curl`, and GNU `timeout` for the Sites helper scripts

Useful commands:

- `npm run dev` — start the development server
- `npm run build` — build the deployable application
- `npm test` — run the project verification tests
- `npm run db:generate` — generate Drizzle migrations after schema changes

The remote Sites builder runs `npm run build` against the selected source revision. Project-scoped runtime/cache data under `.sites-runtime/` is disposable and ignored by Git.

## Repository safety

The published site and the GitHub repository are separate states. Before any synchronization or restoration, verify the intended direction and preserve a known-good backup. Never overwrite a newer Sites version with an older GitHub revision without an explicit comparison.

## Project status

The repository was synchronized with the current Sites version on 12 September 2026. At that point the project included all 18 Sapolsky chapter texts in RU/NL/EN/ES and illustrations for chapters 1–16. Illustrations for chapters 17–18 are intentionally still pending.
