export const profile = {
  name: "Achmad Fahmi Ainur Ridho",
  shortName: "Achmad Fahmi Ainur Ridho",
  mark: "FR",
  role: "Final-year Information Systems student at ITS",
  location: "Indonesia",
  email: "achmadridho.id@gmail.com",
  emailHref: "mailto:achmadridho.id@gmail.com",
  contactHref: "/#contact",
  resumeRequestHref:
    "mailto:achmadridho.id@gmail.com?subject=Resume%20request%20-%20Achmad%20Fahmi%20Ainur%20Ridho",
  resumePdfHref: "/resume.pdf",
  headline:
    "Practical data products across machine learning, analytics, and backend workflows.",
  summary:
    "I build data products that ship. That includes models, dashboards, and backend workflows that turn raw data into systems teams can use.",
  availability:
    "Open to data/ML engineering, analytics engineering, and backend or data systems roles",
  roleSignal:
    "Looking for data/ML engineering, analytics engineering, or backend and data systems roles.",
  contactPrompt:
    "Best fit for teams that need data workflows turned into shipped, maintainable systems.",
  aboutHook:
    "Based in Indonesia, shipping from internship work and coursework that teams can actually run.",
  lastShippedLabel: "Last shipped",
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
    title: "I start with the workflow",
    summary:
      "I map the business process, data handoffs, and constraints first. Then I pick models, dashboards, or automation that fit the problem.",
  },
  {
    title: "I ship inspectable systems",
    summary:
      "I prioritize working artifacts like deployed apps, dashboards, API flows, and automation so outcomes are easy to verify in review.",
  },
  {
    title: "I build for handoff",
    summary:
      "I document decisions, structure access, and leave maintainable code so teams can own the work after delivery.",
  },
];

export const education = {
  degree: "Bachelor of Information Systems",
  institution: "Institut Teknologi Sepuluh Nopember (ITS)",
  period: "Aug 2022 to expected 2026",
  gpa: "3.62/4.00",
  focus:
    "Technology, business, data, AI/data systems, and enterprise systems.",
};

export const heroProjectSlug = "kpc-ideku-v3-dotnet-stabilization";

export const homeProjectSlugs = [
  "kpc-power-automate-po-automation",
  "kpc-ideku-v3-dotnet-stabilization",
  "scent2me-perfume-recommendation",
  "bank-jatim-performance-dashboard",
] as const;

export const experiences = [
  {
    role: "Software Engineering and Automation Intern",
    organization: "PT Kaltim Prima Coal",
    period: "Feb 2025 to Aug 2025",
    proof: "Power Automate flows, IdeKU V3 stabilization, Power BI embedded",
    relatedProjectSlug: "kpc-ideku-v3-dotnet-stabilization",
    summary:
      "Built Power Automate workflows and stabilized IdeKU V3 on ASP.NET Core, including RBAC fixes, Power BI integration, and performance tuning.",
  },
  {
    role: "Vice Head of Research and Development Department",
    organization: "HMSI ITS",
    period: "2023 to 2024",
    proof: "R&D ops, SOPs, and member project delivery",
    summary:
      "Led member development, innovation projects, process optimization, documentation, and SOP work across the R&D department.",
  },
  {
    role: "Teaching Assistant, Enterprise Systems",
    organization: "Institut Teknologi Sepuluh Nopember",
    period: "2024",
    proof: "50+ students across Odoo ERP modules",
    summary:
      "Guided 50+ students through Odoo ERP modules in Sales, Inventory, HR, and Accounting and graded implementation projects.",
  },
  {
    role: "Expert Staff, Data Science Academy",
    organization: "Information Systems Expo 2024",
    period: "2024",
    proof: "Python assessments and academy curriculum",
    relatedProjectSlug: "la-crime-type-prediction",
    summary:
      "Ran Python assessments, data manipulation challenges, curriculum delivery, and event operations for the academy.",
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
    intro: "Classification, forecasting, data preparation, and model evaluation.",
    logo: "/assets/logos/scikitlearn.svg",
  },
  {
    id: projectCategoryIds[1],
    title: "Decision Support Systems",
    intro: "Optimization and route planning for operational constraints.",
    logo: "/assets/logos/route.svg",
  },
  {
    id: projectCategoryIds[2],
    title: "Deployment & Automation",
    intro: "Apps, APIs, workflow automation, deployment pipelines, and monitoring.",
    logo: "/assets/logos/devops.svg",
  },
  {
    id: projectCategoryIds[3],
    title: "Business Analytics",
    intro: "Dashboards, KPI mapping, and business aligned data storytelling.",
    logo: "/assets/logos/bi.svg",
  },
];

export const focusItems = [
  "Data and ML engineering work",
  "Analytics products with strong technical execution",
  "Backend and workflow automation close to production data",
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
  {
    title: "Odoo ERP teaching assistant",
    issuer: "ITS Enterprise Systems",
    context: "Sales, Inventory, HR, and Accounting modules with implementation grading",
    year: "2024",
  },
  {
    title: "Data Science Academy operations",
    issuer: "Information Systems Expo 2024",
    context: "Python assessments, data manipulation challenges, and curriculum delivery",
    year: "2024",
  },
  {
    title: "HMSI R&D leadership",
    issuer: "HMSI ITS",
    context: "Process optimization, SOPs, documentation, and project delivery",
    year: "2023 to 2024",
  },
];