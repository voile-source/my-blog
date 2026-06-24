# Astro + MDX Blog

A personal blog built with **Astro**, **MDX**, and deployed to **Vercel**.

## Features

- 🚀 **Astro** — Static site generation with zero JS by default
- 📝 **MDX** — Write JSX components directly in markdown
- 🏷️ **Tags** — Filter posts by tags
- 🌓 **Dark Mode** — Automatic dark/light mode via CSS
- 📡 **RSS** — Built-in RSS feed generation
- 📱 **Responsive** — Mobile-first design

## Project Structure

```
├── public/
├── src/
│   ├── components/     # Reusable Astro components
│   ├── content/          # MDX blog posts
│   ├── layouts/          # Page layouts
│   ├── pages/            # Route pages
│   └── styles/           # Global CSS
├── astro.config.mjs
└── package.json
```

## Commands

| Command | Action |
|--------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Deploy to Vercel

1. Push to GitHub
2. Import repo on [Vercel](https://vercel.com)
3. Select `Astro` framework preset
4. Deploy!

---

Built with ❤️ using Astro.
