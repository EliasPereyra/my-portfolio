import { getCollection, type CollectionEntry } from "astro:content";

export interface Project {
  title: string;
  slug: string;
  project_img: string;
  description: {
    firstParagraph: string;
    secondParagraph: string;
    thirdParagraph: string;
  };
  solved: string;
  tags: string[];
  highlightTags: string[];
  live_link: string;
  repo_link: string;
  platform?: "web" | "mobile";
}

export const projects: Project[] = [
  {
    title: "SkillUp Campus",
    slug: "skillup",
    project_img: "/assets/skillup-live.webp",
    description: {
      firstParagraph: "cards.skillup.first-paragraph",
      secondParagraph: "cards.skillup.second-paragraph",
      thirdParagraph: "cards.skillup.third-paragraph",
    },
    solved: "cards.skillup.solved",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Zustand",
      "Recharts",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "Zod",
      "Neon",
      "Render",
      "Vercel",
      "GitHub Actions",
      "Claude Code",
    ],
    highlightTags: [
      "React",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "GitHub Actions",
    ],
    live_link: "https://skill-up-campus.vercel.app/",
    repo_link: "https://github.com/Talently-Lab/SkillUp-s2607",
  },
  {
    title: "WorkStart",
    slug: "workstart",
    project_img: "/assets/workstart-live.webp",
    description: {
      firstParagraph: "cards.workstart.first-paragraph",
      secondParagraph: "cards.workstart.second-paragraph",
      thirdParagraph: "cards.workstart.third-paragraph",
    },
    solved: "cards.workstart.solved",
    tags: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Sanity",
      "Neon",
      "PostgreSQL",
      "Vitest",
      "Testing Library",
      "Better Auth",
      "Figma",
    ],
    highlightTags: [
      "Next.js",
      "TypeScript",
      "Sanity",
      "PostgreSQL",
      "Better Auth",
      "Vitest",
    ],
    live_link: "https://job-platform-two.vercel.app/",
    repo_link: "https://github.com/EliasPereyra/job-platform",
  },
  {
    title: "DocHeal",
    slug: "docheal",
    project_img: "/assets/docheal-live.webp",
    description: {
      firstParagraph: "cards.turnos.first-paragraph",
      secondParagraph: "cards.turnos.second-paragraph",
      thirdParagraph: "cards.turnos.third-paragraph",
    },
    solved: "cards.turnos.solved",
    tags: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Shadcn",
      "TailwindCSS",
      "Appwrite",
      "React Hook Form",
      "React Table",
      "Zod",
      "Playwright",
      "Figma",
    ],
    highlightTags: [
      "Next.js",
      "TypeScript",
      "Shadcn",
      "TailwindCSS",
      "Appwrite",
      "React Hook Form",
      "Zod",
      "Playwright",
    ],
    live_link: "https://docheal.vercel.app/",
    repo_link: "https://github.com/EliasPereyra/docheal",
  },
];

export type ProjectLang = "spa" | "eng";

export interface LocalizedProject {
  slug: string;
  entry: CollectionEntry<"projects">;
}

export const getProjects = async (
  lang: ProjectLang,
): Promise<LocalizedProject[]> => {
  const prefix = `${lang}/`;
  const projects = await getCollection("projects", ({ id }) =>
    id.startsWith(prefix),
  );

  return projects.map((entry) => ({
    slug: entry.id.slice(prefix.length),
    entry,
  }));
};
