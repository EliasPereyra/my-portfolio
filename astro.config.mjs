import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";
import astroI18next from 'astro-i18next'

// https://astro.build/config
export default defineConfig({
  site: "https://eliaspereyra.netlify.app",
  adapter: netlify(),
  integrations: [astroI18next()],
});
