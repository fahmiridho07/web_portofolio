import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const projectsDir = join(root, "src", "content", "projects");
const publicDir = join(root, "public");
const profilePath = join(root, "src", "data", "profile.ts");
const requiredFields = [
  "title",
  "slug",
  "summary",
  "category",
  "status",
  "year",
  "role",
  "stack",
  "links",
  "coverImage",
  "priority",
];

const errors = [];
const projects = readdirSync(projectsDir)
  .filter((name) => name.endsWith(".mdx"))
  .sort();
const profileSource = readFileSync(profilePath, "utf8");
const categoryBlock = profileSource.match(
  /export const projectCategoryIds = \[([\s\S]*?)\] as const/,
);
const categories = new Set(
  [...(categoryBlock?.[1].matchAll(/"([^"]+)"/g) ?? [])].map(
    (match) => match[1],
  ),
);
const seenSlugs = new Map();
const referencedAssets = new Map();

function fieldValue(frontmatter, name) {
  const match = frontmatter.match(
    new RegExp(`^${name}:\\s*(?:"([^"]*)"|'([^']*)'|([^\\s#]+))`, "m"),
  );

  return match?.[1] ?? match?.[2] ?? match?.[3];
}

function addError(file, message) {
  errors.push(`${relative(root, file)}: ${message}`);
}

function recordAsset(file, assetPath) {
  if (!assetPath || !assetPath.startsWith("/")) {
    return;
  }

  const diskPath = join(publicDir, ...assetPath.slice(1).split("/"));
  if (!existsSync(diskPath)) {
    addError(file, `missing public asset ${assetPath}`);
    return;
  }

  referencedAssets.set(assetPath, file);
}

for (const filename of projects) {
  const file = join(projectsDir, filename);
  const source = readFileSync(file, "utf8");
  const frontmatterMatch = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);

  if (!frontmatterMatch) {
    addError(file, "frontmatter block is missing");
    continue;
  }

  const frontmatter = frontmatterMatch[1];
  for (const field of requiredFields) {
    if (!new RegExp(`^${field}:`, "m").test(frontmatter)) {
      addError(file, `required frontmatter field '${field}' is missing`);
    }
  }

  if (/^featured:/m.test(frontmatter)) {
    addError(
      file,
      "unsupported frontmatter field 'featured'; use homeProjectSlugs instead",
    );
  }

  const slug = fieldValue(frontmatter, "slug");
  if (slug) {
    const previous = seenSlugs.get(slug);
    if (previous) {
      addError(
        file,
        `duplicate slug '${slug}' also used by ${relative(root, previous)}`,
      );
    } else {
      seenSlugs.set(slug, file);
    }

    if (filename !== `${slug}.mdx`) {
      addError(file, `filename must match slug '${slug}'`);
    }
  }

  const category = fieldValue(frontmatter, "category");
  if (category && !categories.has(category)) {
    addError(file, `unknown category '${category}'`);
  }

  const year = fieldValue(frontmatter, "year");
  if (year && !/^\d{4}$/.test(year)) {
    addError(file, `year must be a four-digit number, received '${year}'`);
  }

  const priority = fieldValue(frontmatter, "priority");
  if (priority && !/^\d+(\.\d+)?$/.test(priority)) {
    addError(file, `priority must be numeric, received '${priority}'`);
  }

  for (const match of frontmatter.matchAll(/^href:\s*["']([^"']+)["']/gm)) {
    if (!URL.canParse(match[1])) {
      addError(file, `invalid link URL '${match[1]}'`);
    }
  }

  for (const match of source.matchAll(
    /(?:coverImage:\s*["']|logo:\s*["']|src=["'])(\/[^"]+?)(?:["'])/g,
  )) {
    recordAsset(file, match[1]);
  }
}

if (errors.length > 0) {
  console.error(`Content check failed with ${errors.length} issue(s):`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exitCode = 1;
} else {
  console.log(
    `Content check passed: ${projects.length} projects, ${seenSlugs.size} unique slugs, ${referencedAssets.size} assets.`,
  );
}
