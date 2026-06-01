# Achmad Fahmi Ainur Ridho Portfolio

A static-first personal portfolio built with Astro, TypeScript, Tailwind CSS, MDX, and Astro Content Collections.

## Design Direction

This portfolio uses a dark-first editorial interface with muted mint accents, subtle borders, strong typography, and category-based project sections. The direction is closer to a premium technical case-study website than a generic developer template.

Applied principles:

- Clear navigation and static routes for recruiter scanning.
- Project cards that expose role, status, year, stack, and summary.
- MDX case studies with consistent sections: Context, Problem, My Role, Approach, Key Decisions, Tech Stack, Result, and What I'd Improve.
- Restrained motion and no runtime framework unless future interaction truly needs it.
- Content collections for validated project frontmatter and long-term maintainability.

## Project Structure

```text
src/
  components/            Reusable Astro UI components
  content/projects/      MDX project case studies
  data/                  Profile, experience, skills, categories
  layouts/               Shared page shell
  lib/                   Content query helpers
  pages/                 Static and generated routes
  styles/                Global CSS and design tokens
public/
  assets/logos/          Small visual marks
  assets/marks/          Personal mark
  assets/profile/        Profile photo
  assets/projects/       Real project screenshots and evidence
  covers/                Generated project cover visuals
```

## Project Screenshots

Put real screenshots, charts, dashboard captures, route maps, or deployment evidence here:

```text
public/assets/projects/
  la-crime-type-prediction/screenshots/
  juanda-airport-visitor-forecasting/screenshots/
  orphanage-inspection-route-optimization/screenshots/
  devops-tasktracker/screenshots/
  bank-jatim-performance-dashboard/screenshots/
```

Recommended filenames:

- `overview.webp`
- `model-comparison.webp`
- `evaluation-metrics.webp`
- `route-map.webp`
- `dashboard-overview.webp`
- `deployment-pipeline.webp`

Reference them in MDX or Astro as:

```md
![Deployment pipeline](/assets/projects/devops-tasktracker/screenshots/deployment-pipeline.webp)
```

## Add a Project

Copy `docs/project-template.mdx` into `src/content/projects/`, rename it, then update the frontmatter and body.

Required frontmatter:

```yaml
title: "Project Title"
slug: "project-title"
summary: "One or two sentences about the problem and result."
category: "machine-learning-data-science"
status: "Prototype"
year: 2026
role: "Your role"
stack:
  - Astro
  - TypeScript
links:
  - label: "Repository"
    href: "https://example.com/project"
featured: true
coverImage: "/covers/project-cover.svg"
logo: "/assets/logos/case-study.svg"
result: "A concise result or learning from the work."
metric: "0.94 AUC"
priority: 4
```

Then write the case study sections in the body.

## Local Development

```bash
npm install
npm run dev
npm run build
```

## Cloudflare Pages

Use the static build output:

- Build command: `npm run build`
- Build directory: `dist`
- Node version: `24`

No Cloudflare adapter is needed because the site is static-first.
