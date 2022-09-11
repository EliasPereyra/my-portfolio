import Card from "../../components/Card.astro";

import "./styles.css";
import "../../styles/global.css";

export default function Portfolio() {
  const projects = [
    {
      title: "Expense Tracker",
      desc: "This is a description for this particular project. It was made with such technologies.",
      project_img: "/assets/expense-tracker.webp",
      tags: ["React.js ", "Material UI ", "Speechly AI"],
      live: "https://s-expensetracker.netlify.app",
      repo: "https://github.com/eliaspereyra/expense-tracker",
    },
    {
      title: "Memories",
      desc: "This is a description for this particular project. It was made with such technologies.",
      project_img: "/assets/memories-app.webp",
      tags: ["React.js ", "Node.js ", "Express.js ", "MongoDB ", "Material UI"],
      live: "https://imagery-app.netlify.app",
      repo: "https://github.com/eliaspereyra/memories-project",
    },
    {
      title: "Portfolio",
      desc: "A portfolio made for a drawer and designer from Argentina. It was made with HTML, Sass and JavaScript.",
      project_img: "/assets/yonni-art.webp",
      tags: ["HTML", "Sass", "JavaScript"],
      live: "https://www.yonni.art/",
      repo: "https://github.com/EliasPereyra/yonni-art",
    },
  ];

  return (
    <main id="portfolio">
      <h2>My Recent Projects</h2>
      <ul></ul>
      <a
        id="btn-more"
        href="https://github.com/EliasPereyra"
        target="_blank"
        referrerpolicy="no-referrer"
      >
        <b>Ver más</b>
      </a>
    </main>
  );
}
