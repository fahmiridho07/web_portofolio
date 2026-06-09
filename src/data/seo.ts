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
    "Achmad Fahmi Ainur Ridho is a final-year Information Systems student at Institut Teknologi Sepuluh Nopember (ITS) who builds practical data products across machine learning, analytics dashboards, and backend workflows.",
  knowsAbout: [
    "Data Engineering",
    "Machine Learning",
    "Python",
    "Power BI",
    "ASP.NET Core",
    "SQL Server",
    "Analytics Engineering",
    "Workflow Automation",
    "Backend Development",
  ],
};

export const pageSeo = {
  home: {
    title: "Achmad Fahmi Ainur Ridho | Data & ML Engineering Portfolio",
    description:
      "Portfolio of Achmad Fahmi Ainur Ridho, a final-year Information Systems student at ITS focused on data products, machine learning models, analytics dashboards, and backend workflows.",
  },
  about: {
    title: "About",
    description:
      "About Achmad Fahmi Ainur Ridho, an ITS Information Systems student, KPC software engineering intern, and builder of practical ML, analytics, and backend data systems.",
    ogImagePath: "/assets/profile/profile_photo.webp",
    ogImageAlt: "Portrait of Achmad Fahmi Ainur Ridho",
  },
  projects: {
    title: "Projects",
    description:
      "Project archive by Achmad Fahmi Ainur Ridho covering predictive modeling, decision support, business analytics, and deployment automation.",
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