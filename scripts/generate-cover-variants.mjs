import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const projectsDir = join(root, "src", "content", "projects");
const publicDir = join(root, "public");
const generatedImagesPath = join(root, "src", "lib", "images.generated.ts");
const variantWidths = [400, 640];

const imagePaths = new Set();

for (const file of readdirSync(projectsDir).filter((name) =>
  name.endsWith(".mdx"),
)) {
  const source = readFileSync(join(projectsDir, file), "utf8");

  const coverMatch = source.match(/^coverImage:\s*"(.+?)"/m);
  if (coverMatch?.[1]?.endsWith(".webp")) {
    imagePaths.add(coverMatch[1]);
  }

  for (const match of source.matchAll(
    /src="(\/assets\/projects\/[^"]+\.webp)"/g,
  )) {
    imagePaths.add(match[1]);
  }
}

const metadata = [];

for (const imagePath of imagePaths) {
  if (/-\d+\.webp$/.test(imagePath)) {
    continue;
  }

  const inputPath = join(publicDir, imagePath.replace(/^\//, ""));
  if (!existsSync(inputPath)) {
    console.warn(`skip missing image: ${imagePath}`);
    continue;
  }

  const baseMeta = await sharp(inputPath).metadata();
  if ((baseMeta.width ?? 0) < 641) {
    continue;
  }

  const dotIndex = imagePath.lastIndexOf(".");
  const base = imagePath.slice(0, dotIndex);
  const ext = imagePath.slice(dotIndex);

  for (const width of variantWidths) {
    if ((baseMeta.width ?? 0) <= width) {
      continue;
    }

    const variantPath = `${base}-${width}${ext}`;
    const outputPath = join(publicDir, variantPath.replace(/^\//, ""));

    if (!existsSync(outputPath)) {
      const outputMeta = await sharp(inputPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(outputPath);

      metadata.push({
        path: variantPath,
        width: outputMeta.width,
        height: outputMeta.height,
      });
      console.log(`wrote ${variantPath}`);
    }
  }
}

const imagesSource = readFileSync(generatedImagesPath, "utf8");
const marker = "export const imageMeta: Record<string, ImageMeta> = {";
const markerIndex = imagesSource.indexOf(marker);

if (markerIndex === -1) {
  throw new Error(`Could not find imageMeta block in ${generatedImagesPath}`);
}

const insertLines = metadata
  .filter((entry) => !imagesSource.includes(`"${entry.path}"`))
  .map(
    (entry) =>
      `  "${entry.path}": { width: ${entry.width}, height: ${entry.height} },`,
  )
  .join("\n");

if (insertLines) {
  const insertAt = markerIndex + marker.length;
  const next = `${imagesSource.slice(0, insertAt)}\n${insertLines}${imagesSource.slice(insertAt)}`;
  writeFileSync(generatedImagesPath, next);
  console.log(`updated ${generatedImagesPath}`);
} else {
  console.log(`${generatedImagesPath} already has responsive variant metadata`);
}
