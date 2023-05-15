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
    title: "Digcoin News",
    desc: "A SPA app which displays the current price of the most known digital coins currently at the market, and also the latest news about the crypto world.",
    project_img: "/assets/digcoin.webp",
    tags: ["React.js ", "Redux Toolkit", "Ant Design", "Chart.js"],
    live_link: "https://digcoinnews.netlify.app",
    repo_link: "https://github.com/eliaspereyra/cryptocurrency-news",
  },
  {
    title: "yonni.art",
    desc: "A portfolio made for a drawer and designer from Argentina. It was made with HTML, Sass and JavaScript.",
    project_img: "/assets/yonni-art.webp",
    tags: ["HTML", "Sass", "JavaScript"],
    live_link: "https://www.yonni.art/",
    repo_link: "https://github.com/EliasPereyra/yonni-art",
  },
]
