import React from "react";
import "./styles.css";

function About() {
  return (
    <div className="container">
      <h1>About Me</h1>
      <p>Hello! My name is Xinjie Zhou.</p>
      <p>
        I’m a <strong>Cognitive Sciences</strong> and{" "}
        <strong>Visual Art</strong> student at UC San Diego, interested in{" "}
        <strong>Human-Computer Interaction</strong> and{" "}
        <strong>Civic Innovation</strong>.
      </p>
      <p>
        Particularly, I look forward to working on <strong>UI/UX Design</strong>
        , <strong>Computational Design</strong>, <strong>User Research</strong>,
        and <strong>Marketing Strategy</strong>.
      </p>
      <img src="path/to/your/profile.jpg" alt="Xinjie Zhou" />
    </div>
  );
}

export default About;
