export type CaseStudySection = {
  id: string;
  label: string;
};

const sectionIdByLabel: Record<string, string> = {
  context: "context",
  problem: "problem",
  "my role": "my-role",
  evidence: "evidence",
  validation: "validation",
  "source evidence": "source-evidence",
  approach: "approach",
  "key decisions": "key-decisions",
  result: "result",
  "what i'd improve": "what-id-improve",
  "responsible use note": "responsible-use-note",
  "api surface": "api-surface",
  "delivery signal": "delivery-signal",
};

const navSectionOrder = ["Problem", "Evidence", "Approach", "Result"] as const;

function slugifyHeading(label: string) {
  return label
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getSectionId(label: string) {
  const normalized = label.trim().toLowerCase();
  return sectionIdByLabel[normalized] ?? slugifyHeading(label);
}

export function extractCaseStudyHeadings(body: string) {
  return [...body.matchAll(/^##\s+(.+)$/gm)].map((match) => match[1].trim());
}

export function getCaseStudyNavSections(body: string): CaseStudySection[] {
  const headings = new Set(extractCaseStudyHeadings(body));

  return navSectionOrder
    .filter((label) => headings.has(label))
    .map((label) => ({
      id: getSectionId(label),
      label,
    }));
}

export function getCaseStudySectionMap(body: string): CaseStudySection[] {
  return extractCaseStudyHeadings(body).map((label) => ({
    id: getSectionId(label),
    label,
  }));
}
