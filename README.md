# Achmad Fahmi Ainur Ridho - Portfolio

![Astro](https://img.shields.io/badge/Astro-6.3-111827?style=flat-square&logo=astro)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-2563eb?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)
![MDX](https://img.shields.io/badge/MDX-Case_Studies-f59e0b?style=flat-square&logo=mdx&logoColor=white)

A static-first portfolio website for presenting practical data products across machine learning, analytics, optimization, and backend workflows.

This project is designed to be more than a personal site. It works as a structured proof of work: fast to scan, easy to maintain, and clear enough for recruiters or collaborators to understand the context behind each project.

## Overview

- **Owner:** Achmad Fahmi Ainur Ridho
- **Role focus:** Data / ML Engineering, Data Analytics, Backend / Data Systems
- **Built with:** Astro, TypeScript, Tailwind CSS, MDX, Astro Content Collections
- **Content style:** Case-study based portfolio with project context, role, approach, stack, result, and future improvements
- **Deployment target:** Static hosting, optimized for Cloudflare Pages

## Featured Work

| Project                                 | Area                          | Signal                                                                |
| --------------------------------------- | ----------------------------- | --------------------------------------------------------------------- |
| LA Crime Type Prediction                | Machine Learning              | Imbalanced classification, model comparison, ROC-AUC evaluation       |
| Juanda Airport Visitor Forecasting      | Time Series Forecasting       | CNN-LSTM benchmarked against Random Forest and Linear Regression      |
| Orphanage Inspection Route Optimization | Operations Research           | Ant Colony Optimization with time-window and service-time constraints |
| DevOps TaskTracker                      | Software Engineering / DevOps | Electron, TypeScript, Docker, GitHub Actions, AWS EC2, monitoring     |
| Bank Jatim Performance Dashboard        | Business Intelligence         | Power BI dashboard mapped to IT Balanced Scorecard KPIs               |

## Design Notes

The interface follows a quiet editorial direction: light surface, restrained mint accent, subtle borders, compact typography, and project groups arranged by problem type.

The main goal is scanability. A visitor should quickly understand:

- who the portfolio represents,
- what roles the owner is targeting,
- which projects are strongest,
- what technologies were used,
- and what each project proves.

## Tech Stack

```txt
Astro 6
TypeScript
Tailwind CSS 4
MDX
Astro Content Collections
Static-first routing
```

## Project Structure

```txt
src/
  components/            Reusable Astro UI components
  content/projects/      MDX case studies
  data/                  Profile, skills, experience, project categories
  layouts/               Shared layout shell
  lib/                   Project query helpers
  pages/                 Static and dynamic routes
  styles/                Global styles and design tokens

public/
  assets/logos/          Category and project marks
  assets/marks/          Personal identity mark
  assets/profile/        Profile image
  assets/projects/       Project screenshots and evidence
  covers/                Project cover visuals
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Validate the project:

```bash
npm run validate
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Content Workflow

Projects live in `src/content/projects/` as MDX files. Each project uses frontmatter for metadata and a case-study body for the narrative.

To add a project:

1. Copy `docs/project-template.mdx`.
2. Rename it inside `src/content/projects/`.
3. Update the frontmatter.
4. Write the case study sections.
5. Add screenshots or evidence under `public/assets/projects/`.

Required frontmatter fields:

```yaml
title: "Project Title"
slug: "project-title"
summary: "Short project summary."
category: "machine-learning-data-science"
status: "Completed"
year: 2026
role: "Project role"
stack:
  - Python
  - Scikit-learn
links:
  - label: "Repository"
    href: "https://example.com"
featured: true
coverImage: "/covers/project-cover.svg"
result: "Main result or learning."
metric: "Key metric"
priority: 1
```

## Deployment

This site is static-first, so no server adapter is required.

Cloudflare Pages setup:

```txt
Build command: npm run build
Build directory: dist
Node version: 24
```

## Why This Repo Exists

This repository documents both the final portfolio and the thinking behind it: how projects are selected, structured, and presented as evidence of real technical capability.

Simple site. Clear proof. Built to be read.
