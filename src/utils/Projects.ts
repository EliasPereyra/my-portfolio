import { t } from 'i18next'

const reactColor = Symbol("#61DAFB")
const materiaUIColor = Symbol("#007FFF")
const rtkColor = Symbol("#764ABC")
const antDesignColor = Symbol("#0170FE")
const chartJsColor = Symbol("#FF6384")
const htmlColor = Symbol("#E34F26")
const sassColor = Symbol("#CC6699")
const javaScriptColor = Symbol("#F7DF1E")
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
  },
  {
    title: "yonni.art",
    desc: "A portfolio made for a drawer and designer from Argentina. It was made with HTML, Sass and JavaScript.",
    project_img: "/assets/yonni-art.webp",
    tags: [
      { tagName: "HTML", tagColor: htmlColor.description },
      { tagName: "Sass", tagColor: sassColor.description },
      { tagName: "JavaScript", tagColor: javaScriptColor.description },
    ],
    live_link: "https://www.yonni.art/",
    repo_link: "https://github.com/EliasPereyra/yonni-art",
  },
]
