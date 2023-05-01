import { t } from 'i18next'

export interface Projects {
  title: string;
  desc: string;
  project_img: string;
  tags: string[];
  live_link: string;
  repo_link: string;
}

export const projects: Projects[] = [
  {
    title: "Expense Tracker",
    desc: `${t("projects.expense_tracker.desc")}`,
    project_img: "/assets/expense-tracker.webp",
    tags: ["React.js ", "Material UI ", "Speechly AI"],
    live_link: "https://s-expensetracker.netlify.app",
    repo_link: "https://github.com/eliaspereyra/expense-tracker",
  },
  {
    title: "Memories",
    desc: "This app was made with the MERN stack. Allows you to share memories with the people, attaching an image. A memory is a post which has a title and a description of you like, altogether with a photo or an image.",
    project_img: "/assets/memories-app.webp",
    tags: ["React.js ", "Node.js ", "Express.js ", "MongoDB ", "Material UI"],
    live_link: "https://imagery-app.netlify.app",
    repo_link: "https://github.com/eliaspereyra/memories-project",
  },
  {
    title: "Portfolio",
    desc: "A portfolio made for a drawer and designer from Argentina. It was made with HTML, Sass and JavaScript.",
    project_img: "/assets/yonni-art.webp",
    tags: ["HTML", "Sass", "JavaScript"],
    live_link: "https://www.yonni.art/",
    repo_link: "https://github.com/EliasPereyra/yonni-art",
  },
]
