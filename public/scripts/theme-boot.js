// Keep html theme in sync with src/lib/theme.ts. Toggle boot runs inline in ThemeToggle.astro.
(() => {
  const KEY = "portfolio-theme";
  const stored = localStorage.getItem(KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored === "light" || stored === "dark" ? stored : prefersDark ? "dark" : "light";

  const path = window.location.pathname;
  const normalized =
    path === "/index.html"
      ? "/"
      : path.endsWith("/") && path.length > 1
        ? path.slice(0, -1)
        : path;
  const onDarkHero =
    normalized === "/" ||
    /^\/about\/?$/.test(normalized) ||
    /^\/projects(\/|$)/.test(normalized) ||
    /\/404\/?$/.test(normalized) ||
    normalized.endsWith("/404.html");

  document.documentElement.dataset.theme = theme;
  document.documentElement.dataset.headerDark = theme === "dark" || onDarkHero ? "true" : "false";

  const headerDark = theme === "dark" || onDarkHero;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", headerDark ? "#07111e" : "#f3f6fb");
  }
})();