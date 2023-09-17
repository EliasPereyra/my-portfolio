import { t } from 'i18next'

const reactColor = Symbol("#61DAFB")
const materiaUIColor = Symbol("#007FFF")
const rtkColor = Symbol("#764ABC")
const antDesignColor = Symbol("#0170FE")
const chartJsColor = Symbol("#FF6384")
const typescriptColor = Symbol("#3178C6")
const reactRouterColor = Symbol("#CA4245")
const axiosColor = Symbol("#5A29E4")
const tailwindCssColor = Symbol("#06B6D4")
const expressjsColor = Symbol("#000000")
const sequelizeColor = Symbol("#52B0E7")
const postgreSqlColor = Symbol("#4169E1")

export interface TagData {
  tagName: string;
  tagColor: string;
}

export interface Projects {
  title: string;
  desc: string;
  project_img: string;
  tags: TagData[];
  live_link: string;
  repo_link: string;
}

export const projects: Projects[] = [
  {
    title: "Multishop",
    desc: `${t("projects.multishop")}`,
    project_img: "/assets/multishop.webp",
    tags: [
      { tagName: "React.js", tagColor: reactColor.description },
      { tagName: "TypeScript", tagColor: typescriptColor.description },
      { tagName: "React Router", tagColor: reactRouterColor.description },
      { tagName: "Zustand", tagColor: reactColor.description },
      { tagName: "Axios", tagColor: axiosColor.description },
      { tagName: "TailwindCSS", tagColor: tailwindCssColor.description },
      { tagName: "Express.js", tagColor: expressjsColor.description },
      { tagName: "Sequelize", tagColor: sequelizeColor.description },
      { tagName: "PostgreSQL", tagColor: postgreSqlColor.description },
    ],
    live_link: "https://c12-28-t-node-react-wu3w.vercel.app/",
    repo_link: "https://github.com/No-Country/c12-28-t-node-react"
  },
  {
    title: "Expense Tracker",
    desc: `${t("projects.expense_tracker.desc")}`,
    project_img: "/assets/expense-tracker.webp",
    tags: [
      { tagName: "React.js", tagColor: reactColor.description },
      { tagName: "Material UI", tagColor: materiaUIColor.description },
      { tagName: "Speechly AI", tagColor: "" },
    ],
    live_link: "https://s-expensetracker.netlify.app",
    repo_link: "https://github.com/eliaspereyra/expense-tracker",
  },
  {
    title: "Digcoin News",
    desc: "A SPA app which displays the current price of the most known digital coins currently at the market, and also the latest news about the crypto world.",
    project_img: "/assets/digcoin.webp",
    tags: [
      { tagName: "React.js", tagColor: reactColor.description },
      { tagName: "RTK", tagColor: rtkColor.description },
      { tagName: "Ant Design", tagColor: antDesignColor.description },
      { tagName: "Chart.js", tagColor: chartJsColor.description },
    ],
    live_link: "https://digcoinnews.netlify.app",
    repo_link: "https://github.com/eliaspereyra/cryptocurrency-news",
  }
]
