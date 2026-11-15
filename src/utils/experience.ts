export interface ExperienceProject {
  id: string;
  name: string;
  tags: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  start: string;
  end: string;
  projects: ExperienceProject[];
}

// One employer, three projects. Project order is deliberate: the agentic work
// goes last because it isn't related to the frontend roles being sought.
export const experience: ExperienceItem[] = [
  {
    company: "Octaflow Labs",
    role: "Frontend Developer",
    start: "2025-06",
    end: "2026-09",
    projects: [
      {
        id: "synkpay",
        name: "SynkPay",
        tags: [
          "React",
          "TypeScript",
          "Tailwind",
          "CVA",
          "Redux Toolkit",
          "GraphQL",
          "Jest",
        ],
      },
      {
        id: "keywallet",
        name: "KeyWallet",
        tags: [
          "React Native",
          "TypeScript",
          "Expo",
          "Tamagui",
          "Zustand",
          "Bitrise",
        ],
      },
      {
        id: "octaflow",
        name: "Agentic Engineering",
        tags: ["Python", "PostgreSQL", "AI Agents", "Paperclip"],
      },
    ],
  },
];

export const formatMonth = (isoMonth: string, lang: string) => {
  const [year, month] = isoMonth.split("-").map(Number);
  return new Intl.DateTimeFormat(lang === "eng" ? "en" : "es", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  })
    .format(new Date(Date.UTC(year, month - 1, 1)))
    .replace(".", "");
};
