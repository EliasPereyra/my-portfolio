import { techColors } from "./TechColors";

export interface TagData {
  tagName: string;
  tagIcon: string;
  tagColor: string | undefined;
}

export interface Project {
  title: string;
  project_img: string;
  tags: TagData[];
  live_link: string;
  repo_link: string;
}

export const projects: Project[] = [
  {
    title: "DocHeal",
    project_img: "/assets/turnos.jpg",
    tags: [
      {
        tagName: "React.js",
        tagIcon: "/assets/icons/react.svg",
        tagColor: techColors.React.description,
      },
      {
        tagName: "Next.js",
        tagIcon: "/assets/icons/nextdotjs.svg",
        tagColor: techColors.NextJs.description,
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
        tagColor: techColors.Appwrite.color.description,
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
        tagName: "TypeScript",
        tagIcon: "/assets/icons/typescript.svg",
        tagColor: techColors.TS.description,
      },
    ],
    live_link: "https://docheal.vercel.app/",
    repo_link: "https://github.com/EliasPereyra/docheal",
  },
];
