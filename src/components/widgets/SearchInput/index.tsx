import "./styles.css"
import { Project, projects } from "../../../utils/Projects"

export default function SearchInput() {
  const techs = [
    "html", "css", "javascript"
  ]

  return (
    <div className="search-container">
      <input className="search-container__input-element" type="text" placeholder="Buscar por categoría" />
      <p className="search-container__tech-tags">
        {techs.map((tech, i) => <small key={i}>{tech}</small>)}
      </p>
    </div>
    )
}