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
            Como Engenheiro Químico, possuo experiência em gestão de equipes e
            desenvolvimento de metas. Atualmente, estou buscando uma transição
            para a área de Desenvolvimento Frontend/QA. Estou em busca de uma
            posição que me permita aplicar e aprimorar minhas habilidades
            tecnológicas, além de colaborar com uma equipe dinâmica. Possuo um
            conhecimento avançado em inglês, sou uma pessoa proativa, com
            facilidade de aprendizado e habilidades comprovadas em liderança.
            Estou em busca de oportunidades para aprimorar meus conhecimentos e
            contribuir para o sucesso da empresa.
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
