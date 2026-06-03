const logoByLabel: Record<string, string> = {
  ".net hosted service": "/assets/logos/dotnet.svg",
  "asp.net core": "/assets/logos/dotnet.svg",
  "asp.net core mvc": "/assets/logos/dotnet.svg",
  "aws ec2": "/assets/logos/amazonaws.svg",
  android: "/assets/logos/android.svg",
  astro: "/assets/logos/astro.svg",
  "c#": "/assets/logos/csharp.svg",
  dart: "/assets/logos/dart.svg",
  docker: "/assets/logos/docker.svg",
  "electron.js": "/assets/logos/electron.svg",
  fastapi: "/assets/logos/fastapi.svg",
  flutter: "/assets/logos/flutter.svg",
  github: "/assets/logos/github.svg",
  "github actions": "/assets/logos/githubactions.svg",
  gmail: "/assets/logos/gmail.svg",
  grafana: "/assets/logos/grafana.svg",
  linkedin: "/assets/logos/linkedin.svg",
  "microsoft power automate": "/assets/logos/powerautomate.svg",
  "microsoft sharepoint": "/assets/logos/microsoftsharepoint.svg",
  "microsoft word": "/assets/logos/microsoftword.svg",
  nextjs: "/assets/logos/nextdotjs.svg",
  "next.js": "/assets/logos/nextdotjs.svg",
  numpy: "/assets/logos/numpy.svg",
  odoo: "/assets/logos/odoo.svg",
  "odoo erp": "/assets/logos/odoo.svg",
  onedrive: "/assets/logos/onedrive.svg",
  "onedrive request files": "/assets/logos/onedrive.svg",
  pandas: "/assets/logos/pandas.svg",
  postgresql: "/assets/logos/postgresql.svg",
  "power automate": "/assets/logos/powerautomate.svg",
  "power bi": "/assets/logos/powerbi.svg",
  "power bi embedded": "/assets/logos/powerbi.svg",
  prometheus: "/assets/logos/prometheus.svg",
  python: "/assets/logos/python.svg",
  railway: "/assets/logos/railway.svg",
  "scikit-learn": "/assets/logos/scikitlearn.svg",
  "sharepoint list": "/assets/logos/microsoftsharepoint.svg",
  "sql server": "/assets/logos/microsoftsqlserver.svg",
  tensorflow: "/assets/logos/tensorflow.svg",
  typescript: "/assets/logos/typescript.svg",
  vercel: "/assets/logos/vercel.svg",
  "word template": "/assets/logos/microsoftword.svg",
};

export type LogoItem = {
  label: string;
  logo?: string;
};

export function getLogoForLabel(label: string) {
  return logoByLabel[label.trim().toLowerCase()];
}

export function getLogoItems(items: string[]): LogoItem[] {
  return items.map((label) => ({
    label,
    logo: getLogoForLabel(label),
  }));
}
