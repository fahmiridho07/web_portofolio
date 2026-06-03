# Achmad Fahmi Ainur Ridho - Portfolio

![Astro](https://img.shields.io/badge/Astro-6.3.7-111827?style=flat-square&logo=astro)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-2563eb?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)
![MDX](https://img.shields.io/badge/MDX-Case_Studies-f59e0b?style=flat-square&logo=mdx&logoColor=white)

A static-first portfolio website for Achmad Fahmi Ainur Ridho, focused on practical data products across machine learning, analytics, workflow automation, optimization, and backend/data systems.

The site is designed as structured proof of work: fast to scan, easy to maintain, and clear enough for recruiters, reviewers, or collaborators to understand the context, role, stack, and result behind each project.

## Overview

- **Owner:** Achmad Fahmi Ainur Ridho
- **Role focus:** Data / ML Engineering, Data Analytics, Backend / Data Systems
- **Education:** Final-year Information Systems student at Institut Teknologi Sepuluh Nopember
- **Built with:** Astro 6, TypeScript, Tailwind CSS 4, MDX, Astro Content Collections
- **Deployment target:** Cloudflare Pages static hosting

## Site Features

- Dark editorial hero with profile positioning and target-role signals
- Flagship project section driven by content priority
- Filterable project index with grid and list views
- Dedicated project case-study pages generated from MDX content
- About page with education, experience, skill groups, and profile highlights
- Project evidence assets, cover visuals, logos, and screenshot galleries in `public/`
- Cloudflare Pages CI/CD workflow for production and preview deployments

## Routes

```txt
/                         Home page with flagship work and project index
/about/                   Profile, education, experience, and skills
/projects/                Full filterable project index
/projects/[slug]/         Generated case-study pages
/projects/kpc-internship/ Alias for the KPC automation case study
```

## Case Studies

| Project                                           | Area                          | Evidence signal                                                                                         |
| ------------------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------- |
| KPC Operational Supervisor Appointment Automation | Workflow Automation           | Digital intake, document verification, generated letters, B-Simpel distribution, and 3 user tests       |
| IdeKU V3 ASP.NET Core Stabilization               | Backend / Full Stack          | RBAC fixes, runtime stabilization, new features, performance work, Power BI integration, and 31 commits |
| LA Crime Type Prediction                          | Machine Learning              | Multi-class prediction across 138 modeled classes with SVM baseline evaluation                          |
| Juanda Airport Visitor Forecasting                | Time Series Forecasting       | Random Forest result with R2 0.869 on the documented split                                              |
| Scent2Me Perfume Recommendation Platform          | Recommendation Systems        | FastAPI recommendation service, TF-IDF similarity, auth, wishlist persistence, and Railway deployment   |
| Orphanage Inspection Route Optimization           | Operations Research           | Ant Colony Optimization with service-time and 09-17 time-window constraints                             |
| DevOps TaskTracker                                | Software Engineering / DevOps | Electron, TypeScript, Docker, GitHub Actions, AWS EC2, Prometheus, and Grafana                          |
| Bank Jatim Performance Dashboard                  | Business Intelligence         | Power BI dashboard mapped to IT Balanced Scorecard perspectives                                         |
| MediMate Medicine Reminder App                    | Mobile App Development        | Flutter CRUD app with local reminder scheduling and debug APK verification                              |

## Tech Stack

```txt
Node 24
Astro 6.3.7
TypeScript 6.0.3
Tailwind CSS 4.1.17
@astrojs/mdx 5.0.4
Astro Content Collections
Cloudflare Pages
```

## Project Structure

```txt
.github/workflows/       Cloudflare Pages validation and deployment workflow
docs/                    Project content templates
public/
  assets/logos/          Tool, category, and project logos
  assets/marks/          Personal identity mark
  assets/profile/        Profile image and asset notes
  assets/projects/       Project screenshots and evidence
  covers/                Project cover visuals
src/
  components/            Reusable Astro UI components
  content/projects/      MDX case studies
  content.config.ts      Content collection schema
  data/                  Profile, education, experience, skills, categories
  layouts/               Shared page shell
  lib/                   Project sorting and logo helpers
  pages/                 Static and dynamic routes
  styles/                Global styles and design tokens
```

## Getting Started

Use Node 24, matching `.node-version`.

```bash
npm ci
npm run dev
```

The development server binds to `127.0.0.1` by default.

## Scripts

| Command            | Purpose                                                 |
| ------------------ | ------------------------------------------------------- |
| `npm run dev`      | Start the Astro development server                      |
| `npm run check`    | Run Astro type and content checks                       |
| `npm run build`    | Build the static site into `dist/`                      |
| `npm run preview`  | Preview the production build locally                    |
| `npm run validate` | Run `astro check` and `astro build`                     |
| `npm run format`   | Format source, docs, README, and public markdown assets |

## Content Workflow

Projects live in `src/content/projects/` as MDX files. Each project combines frontmatter metadata with a case-study body.

To add a project:

1. Copy `docs/project-template.mdx`.
2. Rename it inside `src/content/projects/`.
3. Update the frontmatter.
4. Write the case-study sections.
5. Add screenshots or evidence under `public/assets/projects/`.
6. Set `coverImage` to a public asset path.
7. Run `npm run validate`.

Required frontmatter fields:

```yaml
title: "Project Title"
slug: "project-slug"
summary: "One concise sentence about the problem, method, and result."
category: "machine-learning-data-science"
status: "Completed"
year: 2026
role: "Your role"
stack:
  - Python
  - Pandas
  - Scikit-learn
links:
  - label: "Repository"
    href: "https://example.com/project"
featured: false
coverImage: "/covers/project-cover.svg"
result: "The clearest outcome, metric, or learning from the work."
metric: "0.94 AUC"
priority: 6
```

Optional frontmatter fields:

```yaml
logo: "/assets/logos/case-study.svg"
proof:
  - "Short proof point"
  - "Another proof point"
```

Valid category IDs are defined in `src/data/profile.ts`:

```txt
machine-learning-data-science
optimization-operations-research
software-engineering-devops
analytics-business-intelligence
```

## Deployment

This is a static Astro site, so no server adapter is required.

Cloudflare Pages settings:

```txt
Project name: web-portofolio
Production branch: main
Build command: npm run build
Build output directory: dist
Node version: 24
```

The GitHub Actions workflow in `.github/workflows/cloudflare-pages.yml` runs:

1. `npm ci`
2. `npm run validate`
3. Cloudflare Pages direct upload with Wrangler

Pushes to `main` and manual workflow dispatches deploy production. Pull requests from this repository create preview deployments.

Required repository secrets:

```txt
CLOUDFLARE_ACCOUNT_ID
CLOUDFLARE_API_TOKEN
```

The Cloudflare API token needs `Account > Cloudflare Pages > Edit` permission.

## Maintenance Notes

- Keep project slugs unique because they become route params.
- Use absolute public paths for `coverImage`, `logo`, and project screenshots.
- Use fully valid URLs in `links`; the content schema validates them with `URL.canParse`.
- Lower `priority` values appear earlier in project lists.
- Set `featured: true` for projects that should be treated as primary portfolio evidence.
- Run `npm run validate` before deploying or opening a pull request.
