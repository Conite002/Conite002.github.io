<h1 align="center">
 Astro Theme OpenBLOG
</h1>

<div align="center">

<img src="public/project.jpg" alt="Screenshot" />

<hr/>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdanielcgilibert%2Fblog-template)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/danielcgilibert/blog-template)

</div>

## 💻 Demo

Échale un vistazo a la [Demo](https://blog-template-gray.vercel.app/), alojada en Vercel

## ⚙️ Stack

- [**ASTRO** + **Typescript**](https://astro.build/) - Astro es el framework web todo en uno diseñado para la velocidad.
- [**Tailwind CSS** + **Tailwind-Merge** + **clsx**](https://tailwindcss.com/) - Tailwind CSS es un framework de CSS de tipo utility-first.
- [**Tabler Icons**](https://tabler-icons.io/i/) - Iconos SVG de código abierto..

## ✅ Features:

- ✅ Estilo mínimo
- ✅ Compatible con dispositivos móviles
- ✅ Rendimiento 100/100 en Lighthouse
- ✅ Amigable con SEO mediante URLs canónicas y datos OpenGraph
- ✅ Soporte para sitemap
- ✅ Soporte para feeds RSS
- ✅ Soporte para Markdown y MDX
- ✅ Resaltado de sintaxis
- ✅ Optimización de imágenes
- ✅ Tabla de contenidos
- ✅ Modo oscuro
- ✅ Tiempo de lectura
- ✅ [Pagefind](https://pagefind.app/) static search library integration
- ✅ Posts relacionados
- ✅ Compartir posts (Linkedin, twitter)

## 🛣️ Roadmap

- ❌ Botón para copiar código

## 🚀 Getting Started

**Extensiones recomendadas para VSCode:**

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).
- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode).

1. Clona o haz un [fork](https://github.com/danielcgilibert/blog-template/fork) del repositorio:

```bash
git@github.com:danielcgilibert/blog-template.git
```

2. Instala las dependencias:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Ejecuta el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## 🗂️ Estructura del proyecto

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── data/
│   ├── utils/
│   ├── styles/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

## 👋 Contribuciones

<a href="https://github.com/danielcgilibert/blog-template/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=danielcgilibert/blog-template" />
</a>


# ----------------------------------------------------------------------------------------
**`How to use and config astro theme`**
# ----------------------------------------------------------------------------------------

## 📐 Configure

- Edit the configuration file **src/data/site.config.ts** for the basic blog metadata.
- Update the **astro.config.mjs** file at the root of the project with your own domain.
- Modify the files in the **/public** folder:
  - favicon
  - robots.txt -> update the Sitemap url to your own domain
  - open-graph -> the open-graph is the image that will be displayed when sharing the blog link. For posts, the preview image is the post cover.
- Edit the social networks in the Header component - **src/components/Header.astro**, change the URL to your social network.

## 🗂️ Adding a category

To add a new category to your blog, simply go to the src/data/categories.ts file and add it to the array.

Example:

```ts
export  const  CATEGORIES  =  [
'JavaScript',
'React',
'new category here'  <---
]  as  const
```

> 🚨 Zod checks whether the category is not correctly written or does not exist in the properties of the markdown document. **It will throw an error when building the application.** 🚨

## 📄 Adding a post

Adding a post is as simple as adding a .md or .mdx file to the blog folder at the path **src/content/blog**. The filename will be used to create the slug/URL of the page.

For example, if you have a file named **jsx-and-react.md**, it will be transformed into: **http://yourdomain.com/post/jsx-and-react/**

## 📝 Activating draft mode

To activate draft mode, add the property **draft: true** to the file, and it will no longer be displayed on the blog.

Example :

```ts
title: MacBook Pro 2022
description: 'The new MacBook Pro 2022 is here. With the Apple M2 chip, a new design, and more, the new MacBook Pro is the best laptop Apple has ever made.'
pubDate: 'Jul 02 2022'
heroImage: '../../assets/bg.jpg'
category: 'Category 1'
tags: ['JavaScript', 'css', 'HTML5', 'GitHub']
draft: true <---
```

## ⚡️ Frontmatter

## Required properties:

- Title 
- Description
- pubDate
- heroImage (post cover) 
- category (Choose a category from src/data/categories.ts)

## Optional properties:

- draft (no need to include it, by default it's false)
- tags -

> The schema for posts is located at src/content/config.ts. You can modify any parameter, for example, by adding a maximum of 80 characters for titles: title: z.string().max(80).
> For more information, refer to the zod documentation.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                                                                                                           |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm install`          | Installs dependencies                                                                                                            |
| `pnpm run dev`          | Starts local dev server at `localhost:3000`                                                                                      |
| `pnpm run build`        | Build your production site to `./dist/`                                                                                          |
| `pnpm run preview`      | Preview your build locally, before deploying                                                                                     |
| `pnpm run format:check` | Check code format with Prettier                                                                                                  |
| `pnpm run format`       | Format codes with Prettier                                                                                                       |
| `pnpm run sync`         | Generates TypeScript types for all Astro modules. [Learn more](https://docs.astro.build/en/reference/cli-reference/#astro-sync). |
| `pnpm run lint`         | Lint with ESLint                                                                                                                 |

