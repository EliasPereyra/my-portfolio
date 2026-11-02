import { getCollection, type CollectionEntry } from "astro:content";
import { techColors } from "./TechColors";

export interface TagData {
  tagName: string;
  tagIcon: string;
  tagColor: string | undefined;
}

export interface Project {
  title: string;
  slug: string;
  project_img: string;
  description: {
    firstParagraph: string;
    secondParagraph: string;
    thirdParagraph: string;
  };
  tags: TagData[];
  highlightTags: string[];
  live_link: string;
  repo_link: string;
  platform?: "web" | "mobile";
}

export const projects: Project[] = [
  {
    title: "WorkStart",
    slug: "workstart",
    project_img: "/assets/workstart.png",
    description: {
      firstParagraph: "cards.workstart.first-paragraph",
      secondParagraph: "cards.workstart.second-paragraph",
      thirdParagraph: "cards.workstart.third-paragraph",
    },
    tags: [
      {
        tagName: "Next.js",
        tagIcon: "/assets/icons/nextdotjs.svg",
        tagColor: techColors.NextJs.description,
      },
      {
        tagName: "React.js",
        tagIcon: "/assets/icons/react.svg",
        tagColor: techColors.React.description,
      },
      {
        tagName: "TypeScript",
        tagIcon: "/assets/icons/typescript.svg",
        tagColor: techColors.TS.description,
      },
      {
        tagName: "Sanity",
        tagIcon: "/assets/icons/sanity.svg",
        tagColor: techColors.Sanity.description,
      },
      {
        tagName: "Neon",
        tagIcon: "/assets/icons/neon.svg",
        tagColor: techColors.Neon.description,
      },
      {
        tagName: "PostgreSQL",
        tagIcon: "/assets/icons/postgresql.svg",
        tagColor: techColors.PostgreSQL.description,
      },
      {
        tagName: "Vitest",
        tagIcon: "/assets/icons/vitest.svg",
        tagColor: techColors.Vitest.description,
      },
      {
        tagName: "Better Auth",
        tagIcon: "/assets/icons/betterauth.svg",
        tagColor: techColors.BetterAuth.description,
      },
      {
        tagName: "Figma",
        tagIcon: "/assets/icons/figma.svg",
        tagColor: techColors.Figma.description,
      },
    ],
    highlightTags: [
      "Next.js",
      "TypeScript",
      "Sanity",
      "PostgreSQL",
      "Better Auth",
      "Vitest",
    ],
    live_link: "",
    repo_link: "https://github.com/EliasPereyra/job-platform",
  },
  {
    title: "DocHeal",
    slug: "docheal",
    project_img: "/assets/turnos.jpg",
    description: {
      firstParagraph: "cards.turnos.first-paragraph",
      secondParagraph: "cards.turnos.second-paragraph",
      thirdParagraph: "cards.turnos.third-paragraph",
    },
    tags: [
      {
        tagName: "Next.js",
        tagIcon: "/assets/icons/nextdotjs.svg",
        tagColor: techColors.NextJs.description,
      },
      {
        tagName: "React.js",
        tagIcon: "/assets/icons/react.svg",
        tagColor: techColors.React.description,
      },
      {
        tagName: "TypeScript",
        tagIcon: "/assets/icons/typescript.svg",
        tagColor: techColors.TS.description,
      },
      {
        tagName: "Shadcn",
        tagIcon: "/assets/icons/shadcnui.svg",
        tagColor: techColors.ShadcnUI.description,
      },
      {
        tagName: "TailwindCSS",
        tagIcon: "/assets/icons/tailwindcss.svg",
        tagColor: techColors.TailwindCSS.description,
      },
      {
        tagName: "Appwrite",
        tagIcon: "/assets/icons/appwrite.svg",
        tagColor: techColors.Appwrite.description,
      },
      {
        tagName: "React Hook Form",
        tagIcon: "/assets/icons/reacthookform.svg",
        tagColor: techColors.reactHookForm.description,
      },
      {
        tagName: "React Table",
        tagIcon: "/assets/icons/reacttable.svg",
        tagColor: techColors.ReactTable.description,
      },
      {
        tagName: "Zod",
        tagIcon: "/assets/icons/zod.svg",
        tagColor: techColors.DotNet.description,
      },
      {
        tagName: "Playwright",
        tagIcon: "/assets/icons/playwright.svg",
        tagColor: techColors.Playwright.description,
      },
      {
        tagName: "Figma",
        tagIcon: "/assets/icons/figma.svg",
        tagColor: techColors.Figma.description,
      },
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

export const getProjects = async (): Promise<CollectionEntry<"projects">[]> => {
  const projects = await getCollection("projects");

  return projects;
};
