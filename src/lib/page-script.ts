type PageCleanup = () => void;
type PageInit = () => PageCleanup | void;

export const initOnPageLoad = (init: PageInit): void => {
  let cleanup: PageCleanup | undefined;

  const run = () => {
    cleanup?.();
    cleanup = init() ?? undefined;
  };

  run();
  document.addEventListener("astro:page-load", run);

  document.addEventListener("astro:before-swap", () => {
    cleanup?.();
    cleanup = undefined;
  });
};
