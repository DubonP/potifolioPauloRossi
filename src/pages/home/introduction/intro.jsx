import React from "react";
import "./intro.css";
import cartoonpng from "../../../img/cartoonpng.png";

function Intro() {
  return (
    <div className="intro">
      <div className="intro_header">
        <p>
          Esse site foi produzido utilizando: Sass, Bootstrap, Router Dom,
          Framer Motion
        </p>
      </div>
      <div className="intro_base">
        <div className="intro_text">
          <p>
            Sou engenheiro químico por formação e atualmente, estou em transição
            de carreira para a área de desenvolvedor frontend/Qa. Minha área de
            maior interesse é a de Qa, no entanto, estou aberto à novas
            experiências, pois acredito que posso gostar e aprender muito em
            outras áreas.
          </p>
        </div>
        <div className="intro_image">
          <img src={cartoonpng} alt="Paulo Rossi Cartoon" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
