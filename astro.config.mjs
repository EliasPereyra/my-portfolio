import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";
import mdx from "@astrojs/mdx";
import astroI18next from "astro-i18next";

export default defineConfig({
  output: "static",
  site: "https://eliaspereyra.netlify.app",
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
  integrations: [
    astroI18next(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        experimentalThemes: {
          light: "github-dark",
          dark: "github-dark",
        },
        wrap: true,
      },
      drafts: true,
    }),
  ],
});
