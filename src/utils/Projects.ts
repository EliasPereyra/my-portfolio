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
const expressjsColor = Symbol("#fff")
const sequelizeColor = Symbol("#52B0E7")
const postgreSqlColor = Symbol("#4169E1")
const reactHookFormColor = Symbol("#EC5990")
const dotNetColor = Symbol("#512BD4")
const sqlServerColor = Symbol("#CC2927")

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
    title: "Red Comunidad",
    desc: `${t("projects.redco.desc")}`,
    project_img: "/assets/redco.webp",
    tags: [
      { tagName: "React.js", tagColor: reactColor.description },
      { tagName: "TailwindCSS", tagColor: tailwindCssColor.description },
      { tagName: "Axios", tagColor: axiosColor.description },
      { tagName: "React Hook Form", tagColor: reactHookFormColor.description },
      { tagName: "Cloudinary", tagColor: reactColor.description },
      { tagName: ".Net", tagColor: dotNetColor.description },
      { tagName: "SQL Server", tagColor: sqlServerColor.description },
    ],
    live_link: "https://s10nc.somee.com/",
    repo_link: "https://github.com/No-Country/s10-20-t-csharp-react"
  },
  {
    title: "Multishop",
    desc: `${t("projects.multishop.desc")}`,
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
  }
]
