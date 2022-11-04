/** @type {import('astro-i18next').AstroI18nextConfig} */

export default {
  defaultLanguage: "es",
  supportedLanguages: ["en", "es"],
  i18next: {
    debug: true, // convenient during development to check for missing keys
    resources: {
      en: {
        translation: {
          key: "hello world",
        },
      },
      fr: {
        translation: {
          key: "bonjour le monde",
        },
      },
      backend: {
        loadPath: "./src/locales/{{lng}}.json",
      },
    },
    i18nextPlugins: { fsBackend: "i18next-fs-backend" },
  },
};
