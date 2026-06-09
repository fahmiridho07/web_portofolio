import { statSync } from "node:fs";
import path from "node:path";
import { getCollection } from "astro:content";

const SITE = "https://fahmiridho.me";
const contentDir = path.join(process.cwd(), "src", "content", "projects");

function formatLastmod(value: Date | string) {
  const date = value instanceof Date ? value : new Date(value);
  return date.toISOString().slice(0, 10);
}

function entry(pathname: string, priority: string, lastmod?: string) {
  return [
    "  <url>",
    `    <loc>${new URL(pathname, SITE).href}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    "    <changefreq>monthly</changefreq>",
    `    <priority>${priority}</priority>`,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");
}

function getProjectLastmod(projectId: string, year: number) {
  const filePath = path.join(contentDir, `${projectId}.mdx`);

  try {
    return formatLastmod(statSync(filePath).mtime);
  } catch {
    return formatLastmod(`${year}-06-01`);
  }
}

export async function GET() {
  const projects = await getCollection("projects");
  const buildDate = formatLastmod(new Date());
  const urls = [
    entry("/", "1.0", buildDate),
    entry("/projects/", "0.9", buildDate),
    entry("/about/", "0.8", buildDate),
    ...projects.map((project) =>
      entry(
        `/projects/${project.data.slug}/`,
        "0.7",
        getProjectLastmod(project.id, project.data.year),
      ),
    ),
  ];

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
}