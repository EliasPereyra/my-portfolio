import Layers from "reicon-astro/icons/Layers.astro";
import Mobile from "reicon-astro/icons/Mobile.astro";
import Monitor from "reicon-astro/icons/Monitor.astro";
import Palette from "reicon-astro/icons/Palette.astro";
import Rocket from "reicon-astro/icons/Rocket.astro";
import Server from "reicon-astro/icons/Server.astro";
import TestTube from "reicon-astro/icons/TestTube.astro";

export interface StackGroup {
  id: string;
  icon: typeof Monitor;
  items: string[];
}

export const stack: StackGroup[] = [
  { id: "web", icon: Monitor, items: ["Astro", "Next.js", "React"] },
  { id: "mobile", icon: Mobile, items: ["Expo", "React Native"] },
  {
    id: "styling",
    icon: Palette,
    items: ["TailwindCSS", "Base UI", "Shadcn", "CVA", "DaisyUI"],
  },
  { id: "backend", icon: Server, items: ["Express.js", "Hono.js"] },
  {
    id: "testing",
    icon: TestTube,
    items: ["Vitest", "Jest", "MSW", "Playwright"],
  },
  { id: "state", icon: Layers, items: ["Zustand"] },
  {
    id: "tooling",
    icon: Rocket,
    items: ["GitHub Actions", "Docker", "ESLint", "Prettier"],
  },
];
