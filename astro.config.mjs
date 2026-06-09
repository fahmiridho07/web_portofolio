import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://fahmiridho.me",
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
