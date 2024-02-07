import { t } from 'i18next'

const reactColor = Symbol("#61DAFB")
const typescriptColor = Symbol("#007ACC")
const reactRouterColor = Symbol("#CA4245")
const axiosColor = Symbol("#5A29E4")
const tailwindCssColor = Symbol("#2298BD")
const expressjsColor = Symbol("#fff")
const sequelizeColor = Symbol("#52B0E7")
const postgreSqlColor = Symbol("#4169E1")
const reactHookFormColor = Symbol("#EC5990")
const dotNetColor = Symbol("#512BD4")
const sqlServerColor = Symbol("#CC2927")

export interface TagData {
  tagName: string;
  tagColor: string | undefined;
}

export interface Project {
  title: string;
  desc: string;
  project_img: string;
  tags: TagData[];
  live_link: string;
  repo_link: string;
}

export const projects: Project[] = [
  {
    title:"Red Comunidad", 
    desc: "Red Comunidad es una Web de reclamos vecinales y ciudadanos, donde se podrá reportar y visibilizar problemáticas ciudadanas y/o de infraestructura comunes a todos.",
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
    desc: "Este es una aplicación fullstack de un e-commerce multi-cliente donde tantos vendedores pueden publicar y vender sus productos como los clientes pueden encontrar productos de todo tipo.",
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
