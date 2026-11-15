export interface StackGroup {
  id: string;
  items: string[];
}

export const stack: StackGroup[] = [
  { id: "web", items: ["TypeScript", "React", "Next.js", "Astro"] },
  { id: "mobile", items: ["React Native", "Expo", "Tamagui"] },
  {
    id: "styling",
    items: ["TailwindCSS", "Base UI", "Shadcn", "CVA", "DaisyUI"],
  },
  {
    id: "backend",
    items: ["Express.js", "Hono.js", "GraphQL", "PostgreSQL", "Python"],
  },
  { id: "testing", items: ["Vitest", "Jest", "MSW", "Playwright"] },
  { id: "state", items: ["Zustand", "Redux Toolkit"] },
  {
    id: "tooling",
    items: ["GitHub Actions", "Docker", "ESLint", "Prettier"],
  },
];
