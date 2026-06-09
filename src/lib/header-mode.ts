export const isDarkHeroPath = (path: string): boolean => {
  const normalized =
    path === "/index.html"
      ? "/"
      : path.endsWith("/") && path.length > 1
        ? path.slice(0, -1)
        : path;

  return (
    normalized === "/" ||
    /^\/about\/?$/.test(normalized) ||
    /^\/projects(\/|$)/.test(normalized) ||
    /\/404\/?$/.test(normalized) ||
    normalized.endsWith("/404.html")
  );
};

export const shouldUseDarkHeader = (options: {
  theme: string;
  pathname: string;
  scrollY: number;
  onHero: boolean;
  inTransition: boolean;
  currentHeaderDark: boolean;
  destinationDarkHero?: boolean;
}): boolean => {
  const {
    theme,
    pathname,
    scrollY,
    onHero,
    inTransition,
    currentHeaderDark,
    destinationDarkHero = false,
  } = options;

  if (theme === "dark" || onHero) {
    return true;
  }

  if (scrollY < 120 && isDarkHeroPath(pathname)) {
    return true;
  }

  if (inTransition && (currentHeaderDark || destinationDarkHero)) {
    return true;
  }

  return false;
};