# NeatDev - Developer Portfolio

![NeatDev Hero Banner](/public/nd-hero-banner.png)

### A neat, simple one-page portfolio for modern developers.

Showcase your work, projects, blog posts, and more in a clean, fast, and neat format, so you can focus on building, not battling with portfolio templates.

Dive into the code or learn the reasoning behind NeatDev in [this blog post](https://www.jorge-perez.dev/blog/neatdev).

---

## Live Project

[https://neatdev.vercel.app/](https://neatdev.vercel.app/)

---

## Features

- **One-Page Design**: Profile, work history, signature projects, blog posts, newsletter, bookmarks, and contact, all in a scroll.
- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS for styling, Framer Motion for slick animations.
- **Instant Dark Mode**: Eye-friendly, developer-approved.
- **Easy Customization**: All key sections are simple React components—customize in minutes, not hours.
- **Deploys Instantly**: Go live in one click with Vercel.
- **Clean, Responsive UI**: Looks sharp on any device.

---

## Why NeatDev?

Other portfolios are complicated or stuck in the past. NeatDev is intentionally minimal, super fast, and designed for developers who want to show their best work without the fluff.

Every component is practical, reusable, and easy to maintain. Want to update your profile or showcase a new project? Edit a single file and you’re done. Simple.

---

## How to Clone and Run

```bash
git clone https://github.com/JPerez00/neatdev.git
cd neatdev
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Edit & Customize

- **Profile**: Change your name, bio and image in `src/components/ProfileCard.tsx`.
- **Social Links**: Update the URL of all your social links in `src/components/SocialIcons.tsx`.
- **Recent Work / Projects**: Update your job experience in `RecentWork.tsx` & Feature your key projects in `SignatureProjects.tsx`.
- **Blog Posts**: Just placeholder posts, add a more robust articles section, or just fill in the cost data in `FeaturedPost.tsx`.
- **Bookmarks**: Curate favorite tools and resources in `Bookmarks.tsx`, endless carousel thanks to `motion`.
- **Newsletter & Contact**: Newsletter signup is in `Newsletter.tsx`. Edit the contact form in `ContactSection.tsx`.
- **Styling**: Want to update theme, colors, or spacing? Just tweak Tailwind class names in the related components.

> Tip: Every section is a simple react component and has motion added, just update the arrays or text in each component file, and your site updates automatically.

## Packages & Tech Stack

- Next.js 15 – Modern React framework
- TypeScript – Safer code, easier edits
- Tailwind CSS – Utility-first styling
- Framer Motion – Subtle, modern animation
- lucide-react, embla-carousel-react, Vercel and more, see `package.json`

## The End Goal

NeatDev is a starting point for developer portfolios that’s actually pleasant to use. Fork it, customize it, and ship your story to the world in record time. No excuses, no code gymnastics.

## Deploy on Vercel

The easiest way to deploy your Next.js application is to use the [Vercel Platform](https://vercel.com/).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Open Source Project

This project is licensed under the MIT License. See the [LICENSE file](https://github.com/JPerez00/neatdev/blob/main/LICENSE) for details.

Just star the project if you like it and end up using it. Crediting [me](https://www.jorge-perez.dev/) is much appreciated.