import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { projectCategoryIds } from "./data/profile";

const projectLink = z.object({
  label: z.string(),
  href: z.string().refine((value) => URL.canParse(value), {
    message: "Expected a valid URL.",
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    category: z.enum(projectCategoryIds),
    status: z.string(),
    year: z.number(),
    updatedAt: z.coerce.date().optional(),
    role: z.string(),
    stack: z.array(z.string()),
    links: z.array(projectLink),
    coverImage: z.string(),
    logo: z.string().optional(),
    result: z.string().optional(),
    metric: z.string().optional(),
    proof: z.array(z.string()).optional(),
    priority: z.number(),
  }),
});

export const collections = { projects };
