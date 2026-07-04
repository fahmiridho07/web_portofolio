export const siteBrand = "Achmad Fahmi Ainur Ridho";

export const defaultOg = {
  imagePath: "/og-image.png",
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt:
    "Achmad Fahmi Ainur Ridho portfolio preview for data products, machine learning systems, and workflow automation.",
  locale: "en_US",
  type: "website" as const,
};

export const personEntity = {
  alternateNames: ["fahmiridho", "Fahmi Ridho"],
  imagePath: "/assets/profile/profile_avatar-160.webp",
  description:
    "Achmad Fahmi Ainur Ridho is a final-year Information Systems student at Institut Teknologi Sepuluh Nopember (ITS), a full-stack .NET engineer going deep into machine learning, from production ASP.NET Core systems to a fraud detection ML pipeline.",
  knowsAbout: [
    "Software Engineering",
    "Machine Learning",
    "Fraud Detection",
    "Python",
    "ASP.NET Core",
    "SQL Server",
    "LightGBM",
    "Power BI",
    "Workflow Automation",
  ],
};

export const pageSeo = {
  home: {
    title: "Achmad Fahmi Ainur Ridho | Software Engineering & AI/ML Portfolio",
    description:
      "Portfolio of Achmad Fahmi Ainur Ridho, a full-stack .NET engineer going deep into machine learning: production ASP.NET Core work, workflow automation, and a fraud detection ML pipeline at 0.855 PR-AUC.",
  },
  about: {
    title: "About",
    description:
      "About Achmad Fahmi Ainur Ridho, an ITS Information Systems student, KPC software engineering intern, and builder of production software and machine learning systems.",
    ogImagePath: "/assets/profile/profile_photo.webp",
    ogImageAlt: "Portrait of Achmad Fahmi Ainur Ridho",
  },
  projects: {
    title: "Projects",
    description:
      "Project archive by Achmad Fahmi Ainur Ridho covering machine learning, production software engineering, decision support, and business analytics.",
  },
  notFound: {
    title: "Page Not Found",
    description:
      "The page you requested is not available on the Achmad Fahmi Ainur Ridho portfolio site.",
    robots: "noindex, nofollow",
  },
} as const;

export function formatDocumentTitle(title: string): string {
  if (title.includes(siteBrand)) {
    return title;
  }

  return `${title} | ${siteBrand}`;
}
