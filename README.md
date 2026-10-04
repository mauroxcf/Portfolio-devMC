# Mauricio Contreras — Portfolio

Personal portfolio built with Next.js (App Router), TypeScript and Tailwind CSS. Every page is statically prerendered.

## Getting started

```bash
yarn install
yarn dev        # http://localhost:3000
yarn build && yarn start
```

## Editing content

All content lives in `src/data/`:

- `profile.ts`: summary, about, experience, education, skills, languages, LinkedIn URL.
  - `photo`: put a square image in `public/` (e.g. `public/profile.jpg`) and set `photo: "/profile.jpg"`.
  - `resumePdf`: put your CV in `public/` and set its path to show a "Download CV" button.
- `projects.ts`: projects. Add `url` (live site), `repo` and `image` (in `public/projects/`) to each one. Set `featured: true` to show it on the home page.

## SEO

- Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://yourdomain.com`) in production so canonical URLs, the sitemap and Open Graph tags use your real domain. On Vercel the production URL is detected automatically.
- Included: per-page metadata and canonical URLs, an Open Graph/Twitter image (`src/app/opengraph-image.tsx`), `sitemap.xml`, `robots.txt`, a web manifest and JSON-LD (`Person`, `CollectionPage`).
