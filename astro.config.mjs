import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify/functions";
import mdx from "@astrojs/mdx";
import astroI18next from "astro-i18next";
import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
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
    sentry({
      dsn: "https://b9fbbc7d0c5b527593a49e8b4e96b8f2@o4507285139947520.ingest.us.sentry.io/4507285142700032",
      sourceMapsUploadOptions: {
        project: "javascript-astro",
        authToken: import.meta.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
});
