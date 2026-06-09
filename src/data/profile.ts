export const profile = {
  name: "Achmad Fahmi Ainur Ridho",
  shortName: "Achmad Fahmi Ainur Ridho",
  mark: "FR",
  role: "Final-year Information Systems student at ITS",
  location: "Indonesia",
  email: "achmadridho.id@gmail.com",
  emailHref: "mailto:achmadridho.id@gmail.com",
  contactHref: "mailto:achmadridho.id@gmail.com",
  resumeRequestHref:
    "mailto:achmadridho.id@gmail.com?subject=Resume%20request%20-%20Achmad%20Fahmi%20Ainur%20Ridho",
  headline:
    "Practical data products across machine learning, analytics, and backend workflows.",
  summary:
    "I build practical data products: models, dashboards, and backend workflows that turn raw data into usable systems.",
  availability:
    "Open to data/ML engineering, analytics engineering, and backend/data systems roles",
  roleSignal:
    "Seeking data/ML engineering, analytics engineering, or backend/data systems roles.",
  contactPrompt:
    "Best fit: practical teams that need data workflows turned into shipped, maintainable systems.",
  links: [
    {
      label: "Email",
      href: "mailto:achmadridho.id@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://id.linkedin.com/in/fahmiridho",
    },
    {
      label: "GitHub",
      href: "https://github.com/fahmiridho07",
    },
  ],
};

export const whyMeItems = [
  {
    title: "I show the artifact",
    summary:
      "Projects include screenshots, workflows, dashboards, and case evidence so the work is easy to inspect.",
  },
  {
    title: "I connect data to delivery",
    summary:
      "The portfolio spans models, dashboards, automation, APIs, and deployment, not isolated notebooks.",
  },
  {
    title: "I write for busy reviewers",
    summary:
      "Each project is shaped around context, role, result, and proof so the signal is fast to scan.",
  },
];

export const education = {
  degree: "Bachelor of Information Systems",
  institution: "Institut Teknologi Sepuluh Nopember (ITS)",
  period: "Aug 2022 - Expected 2026",
  gpa: "3.62/4.00",
  focus:
    "Integration of technology, business, data, AI/data systems, and enterprise systems.",
};

export const roleTargets = [
  {
    title: "Data / ML Engineering",
    summary:
      "Modeling, evaluation, data preparation, and reproducible ML workflows.",
  },
  {
    title: "Data Analyst with Engineering Strength",
    summary:
      "Dashboards, KPI mapping, workflow analysis, and business-facing data stories.",
  },
  {
    title: "Backend / Data Systems",
    summary:
      "APIs, deployment pipelines, automation, and practical system delivery.",
  },
];

export const homeProjectSlugs = [
  "kpc-power-automate-po-automation",
  "kpc-ideku-v3-dotnet-stabilization",
  "scent2me-perfume-recommendation",
  "bank-jatim-performance-dashboard",
] as const;

export const proofPoints = [
  "Predictive modeling with clear evaluation metrics",
  "Forecasting and optimization under real constraints",
  "Dashboards and deployed workflows connected to business decisions",
];

export const experiences = [
  {
    role: "Software Engineering and Automation Intern",
    organization: "PT Kaltim Prima Coal",
    summary:
      "Worked with the Business Improvement Department on Microsoft Power Automate workflow digitization and ASP.NET Core IdeKU V3 stabilization, including RBAC hardening, Power BI integration, and performance tuning.",
  },
  {
    role: "Vice Head of Research and Development Department",
    organization: "HMSI ITS",
    summary:
      "Led member development, innovation work, internal process optimization, project delivery, documentation, SOPs, and operational workflows.",
  },
  {
    role: "Teaching Assistant - Enterprise Systems Course",
    organization: "Institut Teknologi Sepuluh Nopember",
    summary:
      "Guided 50+ students through Odoo ERP modules including Sales, Inventory, Human Resources, and Accounting while evaluating implementation projects.",
  },
  {
    role: "Expert Staff of Data Science Academy",
    organization: "Information Systems Expo 2024",
    summary:
      "Supported Python-based assessments, data manipulation challenges, curriculum execution, event operations, and industry collaboration.",
  },
];

export const projectCategoryIds = [
  "machine-learning-data-science",
  "optimization-operations-research",
  "software-engineering-devops",
  "analytics-business-intelligence",
] as const;

export const projectCategories = [
  {
    id: projectCategoryIds[0],
    title: "Predictive Modeling",
    intro:
      "Classification, forecasting, data preparation, and model evaluation.",
    logo: "/assets/logos/scikitlearn.svg",
  },
  {
    id: projectCategoryIds[1],
    title: "Decision Support Systems",
    intro:
      "Optimization and route planning for operational constraints.",
    logo: "/assets/logos/route.svg",
  },
  {
    id: projectCategoryIds[2],
    title: "Deployment & Automation",
    intro:
      "Apps, APIs, workflow automation, deployment pipelines, and monitoring.",
    logo: "/assets/logos/devops.svg",
  },
  {
    id: projectCategoryIds[3],
    title: "Business Analytics",
    intro:
      "Dashboards, KPI mapping, and business-aligned data storytelling.",
    logo: "/assets/logos/bi.svg",
  },
];

export const focusItems = [
  "Data and ML engineering work",
  "Analytics products with strong technical execution",
  "Backend and workflow automation close to real data",
];

export const skillGroups = [
  {
    title: "Backend & Deployment",
    items: [
      "TypeScript",
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "FastAPI",
      "PostgreSQL",
      "REST API",
      "Authentication",
      "Docker",
      "GitHub Actions",
      "AWS EC2",
      "Railway",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    title: "Data & Machine Learning",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "SMOTE",
      "CNN-LSTM",
      "Random Forest",
      "Recommendation Systems",
      "TF-IDF",
    ],
  },
  {
    title: "Analytics & Workflow",
    items: [
      "Power BI",
      "Power BI Embedded",
      "Microsoft Power Automate",
      "SharePoint",
      "IT-BSC",
      "KPI Mapping",
      "Odoo ERP",
      "Sales",
      "Inventory",
      "HR",
      "Accounting",
    ],
  },
];

export const coursesAndCertificates = [
  "Enterprise Systems Course - Teaching Assistant for Odoo ERP modules",
  "Data Science Academy - Python assessments and data manipulation curriculum support",
];
