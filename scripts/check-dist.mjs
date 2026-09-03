import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const projectsDir = join(root, "src", "content", "projects");
const distDir = join(root, "dist");
const errors = [];

function expectFile(pathname, description) {
  const diskPath = join(distDir, pathname.replaceAll("/", "\\"));
  if (!existsSync(diskPath)) {
    errors.push(`missing ${description}: ${pathname}`);
  }
}

expectFile("index.html", "homepage");
expectFile("projects/index.html", "project archive");
expectFile("404.html", "404 page");
expectFile("sitemap.xml", "sitemap");

for (const filename of readdirSync(projectsDir).filter((name) =>
  name.endsWith(".mdx"),
)) {
  const source = readFileSync(join(projectsDir, filename), "utf8");
  const slug = source.match(/^slug:\s*["']([^"']+)["']/m)?.[1];
  if (slug) {
    expectFile(`projects/${slug}/index.html`, `project page '${slug}'`);
  }
}

const homepage = readFileSync(join(distDir, "index.html"), "utf8");
const sitemap = readFileSync(join(distDir, "sitemap.xml"), "utf8");
if (!homepage.includes('<link rel="canonical"')) {
  errors.push("homepage is missing a canonical link");
}
if (!homepage.includes('type="application/ld+json"')) {
  errors.push("homepage is missing JSON-LD structured data");
}
if (
  !sitemap.includes("<urlset") ||
  !sitemap.includes("https://fahmiridho.me/")
) {
  errors.push(
    "sitemap does not contain a valid URL set for the production site",
  );
}

if (errors.length > 0) {
  console.error(`Distribution check failed with ${errors.length} issue(s):`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exitCode = 1;
} else {
  console.log(
    "Distribution check passed: core routes, project routes, canonical metadata, JSON-LD, and sitemap are present.",
  );
}
