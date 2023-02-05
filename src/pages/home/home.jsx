import React from "react";
import Intro from "./introduction/intro";
import { Projects } from "./projects/projects";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Intro />
      <Projects />
    </div>
  );
}

export default Home;
