# Zepra Tech Website

Premium multi-page agency website built with Next.js, Tailwind CSS, and shadcn-style UI primitives.

## Stack

- Next.js App Router
- Tailwind CSS
- Reusable UI components
- Contact inquiry flow with SMTP email support

## Pages

- `/`
- `/about`
- `/services`
- `/team`
- `/website-development`
- `/social-media-marketing`
- `/thumbnail-designing`
- `/contact`

## Prerequisites

Install Node.js LTS on your machine, then verify:

```bash
node -v
npm -v
```

## Local setup

1. Open the project folder.
2. Copy the sample environment file:

```bash
copy .env.example .env
```

3. Update the values in `.env` with your real SMTP details.
4. Install dependencies:

```bash
npm install
```

5. Run the development server:

```bash
npm run dev
```

6. Open the site at `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Contact form configuration

The contact API in `app/api/contact/route.js` sends email through SMTP using the following environment variables:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `CONTACT_TO`

Your `.env` file should include the real values for your chosen mail provider.
