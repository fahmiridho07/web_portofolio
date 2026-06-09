import { isDarkHeroPath } from "./header-mode";

export const THEME_STORAGE_KEY = "portfolio-theme";

export type ThemeMode = "light" | "dark";

export const getStoredTheme = (): ThemeMode => {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);

  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const getThemeColor = (theme: ThemeMode, headerDark = false): string =>
  theme === "dark" || headerDark ? "#07111e" : "#f3f6fb";

export const syncThemeColor = (headerDark?: boolean): void => {
  const root = document.documentElement;
  const theme = (root.dataset.theme as ThemeMode | undefined) ?? getStoredTheme();
  const isHeaderDark = headerDark ?? root.dataset.headerDark === "true";
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');

  if (meta) {
    meta.content = getThemeColor(theme, isHeaderDark);
  }
};

export const applyTheme = (
  theme: ThemeMode,
  options: { persist?: boolean; dispatchEvent?: boolean } = {},
): void => {
  const { persist = false, dispatchEvent = false } = options;
  const root = document.documentElement;
  const previousTheme = root.dataset.theme;

  root.dataset.theme = theme;

  if (persist) {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }

  syncThemeColor();

  if (dispatchEvent && previousTheme !== theme) {
    window.dispatchEvent(new Event("themechange"));
  }
};

export const getInitialHeaderDark = (theme: ThemeMode, pathname: string): boolean =>
  theme === "dark" || isDarkHeroPath(pathname);

export const applyHeaderDarkForPath = (theme: ThemeMode, pathname: string): void => {
  document.documentElement.dataset.headerDark = getInitialHeaderDark(theme, pathname)
    ? "true"
    : "false";
};

export const readActiveTheme = (): ThemeMode => {
  const datasetTheme = document.documentElement.dataset.theme;

  if (datasetTheme === "light" || datasetTheme === "dark") {
    return datasetTheme;
  }

  return getStoredTheme();
};

export const applyStoredTheme = (): ThemeMode => {
  const theme = getStoredTheme();
  applyTheme(theme);
  return theme;
};

const isViewTransitionActive = (): boolean =>
  document.documentElement.hasAttribute("data-astro-transition");

const getThemeSwitchRoots = (): HTMLElement[] =>
  Array.from(document.querySelectorAll<HTMLElement>("[data-theme-switch]"));

const indicatorOffset = (theme: ThemeMode): string =>
  theme === "dark" ? "translateX(100%)" : "translateX(0)";

const isTogglePainted = (switchRoot: HTMLElement, theme: ThemeMode): boolean =>
  switchRoot.dataset.activeTheme === theme &&
  switchRoot.classList.contains("is-dark-active") === (theme === "dark");

let paintedToggleTheme: ThemeMode | null = null;
let toggleTransitionFrozen = false;
let themeSwitchReady = false;
let transitionObserverReady = false;

const paintThemeSwitch = (theme: ThemeMode, options: { animate?: boolean; lock?: boolean } = {}): void => {
  const { animate = false, lock = false } = options;

  paintedToggleTheme = theme;

  getThemeSwitchRoots().forEach((switchRoot) => {
    if (!lock && !animate && isTogglePainted(switchRoot, theme)) {
      return;
    }

    const indicator = switchRoot.querySelector<HTMLElement>(".theme-switch-indicator");

    switchRoot.dataset.activeTheme = theme;
    switchRoot.classList.toggle("is-dark-active", theme === "dark");
    switchRoot.setAttribute("aria-checked", String(theme === "dark"));

    if (indicator) {
      indicator.style.setProperty("transform", indicatorOffset(theme), lock ? "important" : "");
    }

    if (animate) {
      switchRoot.classList.add("is-animating");
      window.setTimeout(() => switchRoot.classList.remove("is-animating"), 320);
    }
  });
};

export const syncThemeSwitch = (options: { animate?: boolean; force?: boolean } = {}): ThemeMode => {
  const { animate = false, force = false } = options;
  const theme = getStoredTheme();

  if (!force && (toggleTransitionFrozen || isViewTransitionActive())) {
    return paintedToggleTheme ?? theme;
  }

  if (!force && paintedToggleTheme === theme) {
    return theme;
  }

  paintThemeSwitch(theme, { animate });
  return theme;
};

export const freezeThemeSwitch = (): void => {
  toggleTransitionFrozen = true;
  document.documentElement.classList.add("theme-switch-frozen");
  paintThemeSwitch(getStoredTheme(), { lock: true });
};

export const unfreezeThemeSwitch = (): void => {
  toggleTransitionFrozen = false;
  document.documentElement.classList.remove("theme-switch-frozen");
  paintThemeSwitch(getStoredTheme());
};

export const initThemeTransitionGuard = (): void => {
  if (transitionObserverReady) {
    return;
  }

  transitionObserverReady = true;

  document.addEventListener("astro:before-preparation", freezeThemeSwitch);
  document.addEventListener("astro:after-swap", () => {
    paintThemeSwitch(getStoredTheme(), { lock: true });
  });

  const root = document.documentElement;
  const observer = new MutationObserver(() => {
    if (!root.hasAttribute("data-astro-transition") && toggleTransitionFrozen) {
      unfreezeThemeSwitch();
    }
  });

  observer.observe(root, { attributes: true, attributeFilter: ["data-astro-transition"] });
};

let swapDestinationPath = typeof window === "undefined" ? "/" : window.location.pathname;

export const setSwapDestination = (pathname: string): void => {
  swapDestinationPath = pathname;
};

export const prepareThemeForSwap = (newDocument: Document): void => {
  const theme = getStoredTheme();
  const newRoot = newDocument.documentElement;
  const headerDark = getInitialHeaderDark(theme, swapDestinationPath);

  newRoot.dataset.theme = theme;
  newRoot.dataset.headerDark = headerDark ? "true" : "false";

  const meta = newDocument.querySelector<HTMLMetaElement>('meta[name="theme-color"]');

  if (meta) {
    meta.content = getThemeColor(theme, headerDark);
  }

  newDocument.querySelectorAll<HTMLElement>("[data-theme-switch]").forEach((switchRoot) => {
    const indicator = switchRoot.querySelector<HTMLElement>(".theme-switch-indicator");

    switchRoot.dataset.activeTheme = theme;
    switchRoot.classList.toggle("is-dark-active", theme === "dark");
    switchRoot.setAttribute("aria-checked", String(theme === "dark"));

    if (indicator) {
      indicator.style.setProperty("transform", indicatorOffset(theme), "important");
    }
  });
};

export const lockDocumentTheme = (pathname = window.location.pathname): ThemeMode => {
  const theme = applyStoredTheme();
  applyHeaderDarkForPath(theme, pathname);
  syncThemeColor();
  return theme;
};

export const lockStoredTheme = (pathname = window.location.pathname): ThemeMode => {
  return lockDocumentTheme(pathname);
};

export const initThemeSwitch = (): void => {
  initThemeTransitionGuard();

  const switchRoots = getThemeSwitchRoots();

  if (switchRoots.length === 0) {
    return;
  }

  const theme = getStoredTheme();
  paintedToggleTheme = theme;

  if (!switchRoots.every((switchRoot) => isTogglePainted(switchRoot, theme))) {
    paintThemeSwitch(theme);
  }

  if (themeSwitchReady) {
    return;
  }

  themeSwitchReady = true;

  switchRoots.forEach((switchRoot) => {
    switchRoot.addEventListener("click", () => {
      const nextTheme: ThemeMode = getStoredTheme() === "dark" ? "light" : "dark";

      paintThemeSwitch(nextTheme, { animate: true });
      applyTheme(nextTheme, { persist: true, dispatchEvent: true });
    });
  });
};