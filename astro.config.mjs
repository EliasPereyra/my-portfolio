import { defineConfig } from "astro/config";
import react from '@astrojs/react';
import netlify from "@astrojs/netlify/functions";
import astroI18next from 'astro-i18next'

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [react(), astroI18next()],
});
