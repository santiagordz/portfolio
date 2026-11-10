# Personal Portfolio

A Next.js portfolio site for past, present, and future work.

### Authors

- [@santiagordz](https://www.github.com/santiagordz)

## Development

```bash
cp .env.example .env
# Edit .env and set PAYLOAD_SECRET (at least 32 characters)
npm install
npm run dev
```

- Site: [http://localhost:3000](http://localhost:3000)
- Payload admin: [http://localhost:3000/admin](http://localhost:3000/admin) (create the first user on first visit)

Content is managed in Payload:

- **Site Settings** global — profile, contact links, theme, about copy, portfolio heading/images
- **Projects** collection — portfolio cards (draft/publish via versions)
- **Media** collection — uploads for images

The frontend falls back to bundled defaults in `lib/defaults.ts` until CMS content is saved.

## Build

```bash
npm run build
```

After changing `payload.config.ts` or admin components, run `npm run generate:types` and `npm run generate:importmap` before building.

## Screenshots

<img src="https://images2.imgbox.com/5f/19/ITcHSyXg_o.png" alt="image host"/>
