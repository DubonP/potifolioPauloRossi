import "./projects.css";
import { Card } from "./card/card.jsx";
import { projetos } from "../../../data/projetos";

export function Projects() {
  return (
    <div className="projects">
      <h1>Projetos</h1>
      <div className="projects_cards">
        {projetos.map((projeto) => (
          <Card key={projeto.id} proj={projeto} />
        ))}
      </div>
    </div>
  );
}
