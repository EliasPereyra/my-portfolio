import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";
import mdx from "@astrojs/mdx";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  site: "https://eliaspereyra.netlify.app",
  adapter: netlify(),
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
