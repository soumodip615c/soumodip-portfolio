# Soumodip Ghosh — Portfolio

An interactive personal portfolio built with Next.js. It opens with a lanyard ID-card intro, then moves through About, Skills, Experience, Projects, Certifications, and Contact.

**Live site:** https://soumodip-portfolio-sigma.vercel.app/

## Features

- Lanyard ID-card opening animation (plays once per session, with a skip button)
- Dark theme with an electric-blue accent
- Scroll-triggered reveals and an animated experience timeline
- Projects shown one by one, with a sticky `01 / 04` progress indicator and animated metrics
- Floating navigation with a mobile menu
- Contact form that opens the visitor's email app
- Responsive layout for desktop, tablet, and mobile
- Respects `prefers-reduced-motion`
- Image placeholders when a screenshot is missing

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router) and React 18
- JavaScript
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- Deployed on [Vercel](https://vercel.com/)

## Getting Started

```bash
git clone https://github.com/soumodip615c/soumodip-portfolio.git
cd soumodip-portfolio
npm install
npm run dev
```

Open http://localhost:3000.

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
```

## Project Structure

```
soumodip-portfolio/
├── app/
│   ├── layout.js          # fonts, metadata
│   ├── page.js            # page composition
│   └── globals.css        # global styles
├── components/
│   ├── Intro.js           # lanyard ID-card intro
│   ├── Navbar.js
│   ├── Hero.js
│   ├── About.js
│   ├── Skills.js
│   ├── Experience.js
│   ├── Projects.js
│   ├── Certifications.js
│   ├── Contact.js
│   ├── Footer.js
│   ├── Reveal.js          # scroll-reveal wrapper
│   └── SafeImage.js       # image with placeholder fallback
├── data/
│   └── portfolio.js       # all site content
├── public/images/         # profile photo and project screenshots
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.js
└── jsconfig.json
```

## Customizing

All content (name, links, about text, skills, experience, projects, certifications) lives in `data/portfolio.js`. Edit that file; the components don't need to change.

Images go in `public/images/`:

```
public/images/
├── profile.jpg
└── projects/
    ├── agriguru-1.png, agriguru-2.png
    ├── chlorophyll-1.png, chlorophyll-2.png
    ├── meeting-1.png, meeting-2.png
    └── gym-1.png, gym-2.png
```

If an image is missing, a placeholder showing the expected file path appears instead.

To replay the intro while testing, run this in the browser console and refresh:

```js
sessionStorage.removeItem("intro-seen")
```

## Deployment

The site is deployed on Vercel and connected to this repository. Every push to `main` triggers a new deployment automatically.

## Contact

- Email: soumodip615c@gmail.com
- LinkedIn: https://www.linkedin.com/in/soumodip-ghosh-615c2005
- GitHub: https://github.com/soumodip615c
- LeetCode: https://leetcode.com/u/soumodip615c/

© 2026 Soumodip Ghosh
