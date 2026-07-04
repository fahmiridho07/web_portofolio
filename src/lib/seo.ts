import { existsSync } from "node:fs";
import path from "node:path";
import { education, profile } from "@data/profile";
import { defaultOg, personEntity } from "@data/seo";

const resumePdfPath = path.join(process.cwd(), "public", "resume.pdf");
const ITS_URL = "https://www.its.ac.id";

type JsonLd = Record<string, unknown>;

export function absoluteUrl(site: string, pathname: string): string {
  return new URL(pathname, site).href;
}

export function getPersonSchema(site: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl(site, "/#person"),
    name: profile.name,
    alternateName: personEntity.alternateNames,
    givenName: "Achmad Fahmi Ainur",
    familyName: "Ridho",
    description: personEntity.description,
    email: profile.email,
    url: site,
    image: absoluteUrl(site, personEntity.imagePath),
    jobTitle: profile.role,
    knowsAbout: personEntity.knowsAbout,
    address: {
      "@type": "PostalAddress",
      addressCountry: profile.location,
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: education.institution,
      url: ITS_URL,
    },
    sameAs: profile.links
      .map((link) => link.href)
      .filter((href) => href.startsWith("http")),
    ...(existsSync(resumePdfPath)
      ? {
          subjectOf: {
            "@type": "DigitalDocument",
            name: "Resume",
            url: absoluteUrl(site, profile.resumePdfHref),
          },
        }
      : {}),
  };
}

export function getWebSiteSchema(site: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl(site, "/#website"),
    name: `${profile.shortName} Portfolio`,
    url: site,
    description: profile.summary,
    inLanguage: "en",
    publisher: {
      "@id": absoluteUrl(site, "/#person"),
    },
    author: {
      "@id": absoluteUrl(site, "/#person"),
    },
  };
}

export function getProfilePageSchema(site: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: absoluteUrl(site, "/about/"),
    name: `About ${profile.name}`,
    description: personEntity.description,
    inLanguage: "en",
    mainEntity: {
      "@id": absoluteUrl(site, "/#person"),
    },
  };
}

export function getBreadcrumbSchema(
  site: string,
  items: { name: string; path: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(site, item.path),
    })),
  };
}

export function getCollectionPageSchema(input: {
  site: string;
  name: string;
  description: string;
  path: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.site, input.path),
    inLanguage: "en",
    isPartOf: {
      "@id": absoluteUrl(input.site, "/#website"),
    },
    author: {
      "@id": absoluteUrl(input.site, "/#person"),
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
  imagePath?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: input.title,
    description: input.description,
    url: absoluteUrl(input.site, `/projects/${input.slug}/`),
    dateCreated: String(input.year),
    inLanguage: "en",
    author: {
      "@id": absoluteUrl(input.site, "/#person"),
    },
    keywords: input.stack.join(", "),
    ...(input.imagePath
      ? { image: absoluteUrl(input.site, input.imagePath) }
      : {}),
  };
}

export function getOpenGraphImage(
  site: string,
  imagePath = defaultOg.imagePath,
  options?: {
    width?: number;
    height?: number;
    alt?: string;
  },
) {
  return {
    url: absoluteUrl(site, imagePath),
    width: options?.width ?? defaultOg.imageWidth,
    height: options?.height ?? defaultOg.imageHeight,
    alt: options?.alt ?? defaultOg.imageAlt,
  };
}

export function getProjectOpenGraph(project: {
  title: string;
  summary: string;
  coverImage: string;
}) {
  return {
    imagePath: project.coverImage,
    imageAlt: `${project.title} project preview`,
  };
}

export function serializeJsonLd(data: JsonLd | JsonLd[]) {
  return JSON.stringify(data);
}
