export interface PageConfig {
  description: string;
  author: string;
}

export const PageConfig: PageConfig = {
  description:
    "Soy Elías Pereyra, desarrollador fullstack enfocado en el frontend web y mobile, de Argentina. Mirá mi experiencia, mis proyectos y cómo contactarme.",
  author: "Elias Pereyra Gomez",
};

export const socialNetworks = {
  linkedinProfile: "https://www.linkedin.com/in/elias-pereyra-gomez/",
  githubProfile: "https://github.com/EliasPereyra",
  emailAddress: "eliaspereyra_gomez@hotmail.com",
};

const cvFiles = {
  spa: "/assets/elias-pereyra-cv-spa.pdf",
  eng: "/assets/elias-pereyra-cv-eng.pdf",
};

export const getCvHref = (lang: string) =>
  lang === "eng" ? cvFiles.eng : cvFiles.spa;
