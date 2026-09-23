export const freeCodeCampProfile =
  "https://www.freecodecamp.org/espanol/news/author/elias-pereyra/";

export interface Contribution {
  title: string;
  originalAuthor: string;
  date: string;
  url: string;
}

export const contributions: Contribution[] = [
  {
    title: "Cómo funciona internamente la autenticación SSH con GitHub",
    originalAuthor: "Vivek Agrawal",
    date: "2025-04-15",
    url: "https://www.freecodecamp.org/espanol/news/como-funciona-internamente-la-autenticacion-ssh-con-github/",
  },
  {
    title: "Gitting Things Done – Una guía visual y práctica para Git",
    originalAuthor: "Omer Rosenbaum",
    date: "2024-10-10",
    url: "https://www.freecodecamp.org/espanol/news/gitting-things-done-una-guia-visual-y-practica-para-git-libro-completo/",
  },
  {
    title:
      "Aprender Linux para Principiantes: Desde las Bases a Técnicas Avanzadas",
    originalAuthor: "Zaira Hira",
    date: "2024-10-09",
    url: "https://www.freecodecamp.org/espanol/news/learn-linux-for-beginners-from-basics-to-advanced-techniques-full-book/",
  },
];
