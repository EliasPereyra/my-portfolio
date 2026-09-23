export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "synkpay",
    company: "Crypto Dashboard",
    role: "Frontend Web Developer",
    start: "2025-08",
    end: "2025-12",
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
    company: "KeyWallet",
    role: "Frontend Mobile Developer",
    start: "2025-12",
    end: "2026-05",
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
    company: "Octaflow Company",
    role: "Agentic Engineering Engineer",
    start: "2026-05",
    end: "2026-09",
    tags: ["Python", "PostgreSQL", "Harness Engineering", "Paperclip"],
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
