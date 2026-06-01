# ACON Academy Website

Marketing website for ACON Academy — a French language academy in Surrey &
Kelowna, BC.

## Stack

- **Vite 7** + **React 19** + **TypeScript**
- **Tailwind CSS v4** with Radix UI / shadcn-style components
- **wouter** for client-side routing
- **Express** thin static server (used for `pnpm start`; not needed on Vercel)
- **Vitest** for unit tests
- Package manager: **pnpm**

## Prerequisites

- Node.js 20+
- pnpm 10+ (`corepack enable` or `npm i -g pnpm`)

## Local development

```bash
pnpm install
pnpm dev          # Vite dev server on http://localhost:3000
```

## Scripts

| Command        | Description                                          |
| -------------- | ---------------------------------------------------- |
| `pnpm dev`     | Start the Vite dev server                            |
| `pnpm build`   | Build the client to `dist/public` and bundle the server |
| `pnpm start`   | Serve the production build via Express (port 3000)   |
| `pnpm preview` | Preview the production build with Vite               |
| `pnpm check`   | Type-check with `tsc --noEmit`                       |
| `pnpm test`    | Run the Vitest suite                                 |
| `pnpm format`  | Format with Prettier                                 |

## Deploying to Vercel

The repo includes `vercel.json`, so importing the GitHub repo into Vercel works
without extra setup:

- **Framework:** Vite
- **Build command:** `pnpm run build`
- **Output directory:** `dist/public`
- SPA rewrites send all routes to `index.html` so client-side routes resolve on
  direct navigation and refresh.

No environment variables are required for a basic deploy.

### Optional analytics

The site can use [Umami](https://umami.is/) analytics. It's disabled by default.
To enable it, add an analytics `<script>` to `client/index.html` driven by your
own endpoint and website id (e.g. `VITE_ANALYTICS_ENDPOINT` /
`VITE_ANALYTICS_WEBSITE_ID` env vars configured in Vercel).
