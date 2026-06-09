export type OrganizationLogoMeta = {
  slug: string;
  src: string;
  srcset: string;
  width: number;
  height: number;
};

const organizationLogoBySlug: Record<string, OrganizationLogoMeta> = {
  hmsi: {
    slug: "hmsi",
    src: "/assets/logos/organization/hmsi-128.webp",
    srcset:
      "/assets/logos/organization/hmsi-64.webp 64w, /assets/logos/organization/hmsi-128.webp 128w",
    width: 128,
    height: 128,
  },
  its: {
    slug: "its",
    src: "/assets/logos/organization/its-h128.webp",
    srcset:
      "/assets/logos/organization/its-h64.webp 143w, /assets/logos/organization/its-h128.webp 286w",
    width: 286,
    height: 128,
  },
  kpc: {
    slug: "kpc",
    src: "/assets/logos/organization/kpc-128.webp",
    srcset:
      "/assets/logos/organization/kpc-64.webp 64w, /assets/logos/organization/kpc-128.webp 128w",
    width: 128,
    height: 128,
  },
};

const organizationLogoByName: Record<string, string> = {
  "pt kaltim prima coal": "kpc",
  "hmsi its": "hmsi",
  "institut teknologi sepuluh nopember": "its",
  "institut teknologi sepuluh nopember (its)": "its",
  "information systems expo 2024": "its",
};

export function getOrganizationLogo(name: string) {
  const slug = organizationLogoByName[name.trim().toLowerCase()];

  return slug ? organizationLogoBySlug[slug] : undefined;
}