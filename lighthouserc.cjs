module.exports = {
  ci: {
    collect: {
      staticDistDir: "./dist",
      url: [
        "http://localhost/",
        "http://localhost/about/",
        "http://localhost/projects/",
        "http://localhost/projects/kpc-power-automate-po-automation/",
        "http://localhost/404.html",
      ],
      settings: {
        preset: "desktop",
      },
      numberOfRuns: 1,
    },
    assert: {
      assertions: {
        // Measured mobile baseline: perf 0.93, a11y/BP/SEO 1.0. Budgets sit a
        // little under that so a real regression trips the warning instead
        // of hiding inside a permissive threshold.
        "categories:performance": ["warn", { minScore: 0.85 }],
        "categories:accessibility": ["warn", { minScore: 0.95 }],
        "categories:best-practices": ["warn", { minScore: 0.95 }],
        "categories:seo": ["warn", { minScore: 0.95 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
