import { existsSync } from "node:fs";
import path from "node:path";
import { profile } from "@data/profile";

const resumePdfPath = path.join(process.cwd(), "public", "resume.pdf");

type JsonLd = Record<string, unknown>;

export function getPersonSchema(site: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    email: profile.email,
    url: site,
    jobTitle: profile.role,
    address: {
      "@type": "PostalAddress",
      addressCountry: profile.location,
    },
    sameAs: profile.links
      .map((link) => link.href)
      .filter((href) => href.startsWith("http")),
    ...(existsSync(resumePdfPath)
      ? {
          subjectOf: {
            "@type": "DigitalDocument",
            name: "Resume",
            url: new URL(profile.resumePdfHref, site).href,
          },
        }
      : {}),
  };
}

export function getWebSiteSchema(site: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profile.shortName} Portfolio`,
    url: site,
    description: profile.summary,
    author: {
      "@type": "Person",
      name: profile.name,
      url: site,
    },
  };
}

export function getCreativeWorkSchema(input: {
  site: string;
  title: string;
  description: string;
  slug: string;
  year: number;
  stack: string[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: input.title,
    description: input.description,
    url: new URL(`/projects/${input.slug}/`, input.site).href,
    dateCreated: String(input.year),
    author: {
      "@type": "Person",
      name: profile.name,
      url: input.site,
    },
    keywords: input.stack.join(", "),
  };
}

export function serializeJsonLd(data: JsonLd | JsonLd[]) {
  return JSON.stringify(data);
}