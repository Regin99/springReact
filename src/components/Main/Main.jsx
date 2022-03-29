import "./style.css";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import React from "react";
const Main = () => {
  return (
    <div className="main">
      <div className="centered-container">
        <section className="main_section">
          <h1>Projects</h1>
          <p>
            From configuration to security, web apps to big data—whatever the
            infrastructure needs of your application may be, there is a Spring
            Project to help you build it. Start small and use just what you
            need—Spring is modular by design.
          </p>
        </section>
      </div>
      <div className="contetnt_container">
        <ProjectContainer />
      </div>
    </div>
  );
};

export default Main;
