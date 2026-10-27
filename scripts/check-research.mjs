import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
const root = new URL("../", import.meta.url);
const summary = JSON.parse(
  readFileSync(new URL("src/data/fraud-research.json", root), "utf8"),
);
const { checksum, ...content } = summary;
if (
  createHash("sha256").update(JSON.stringify(content)).digest("hex") !==
  checksum
)
  throw new Error("Research summary changed without a source export.");
if (
  !summary.runId ||
  summary.modelKey !== "ae_oversample_tuned" ||
  summary.confusion.tp + summary.confusion.fn !== summary.testFraud
)
  throw new Error("Invalid active research identity or test population.");
const mdx = readFileSync(
  new URL("src/content/projects/fraud-detection-ml-pipeline.mdx", root),
  "utf8",
);
const frontmatter = mdx.split(/^---\s*$/m)[1];
for (const expected of [
  summary.demoUrl,
  summary.averagePrecision.toFixed(3),
  `${(summary.recall * 100).toFixed(1)}%`,
  `${(summary.precision * 100).toFixed(1)}%`,
])
  if (!frontmatter.includes(expected))
    throw new Error(
      `Fraud project metadata disagrees with summary: ${expected}`,
    );
if (!mdx.includes("Earlier Paper Version (Archived)"))
  throw new Error("Historical figures require a version label.");
console.log(`Active research summary verified: ${summary.runId}`);
