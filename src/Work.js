import React from "react";
import "./styles.css";

function Work() {
  return (
    <div className="container">
      <h1>My Work</h1>
      <div className="project-gallery">
        <div className="project">
          <img src="path/to/project1.jpg" alt="Project 1" />
          <h3>Project Title 1</h3>
          <p>Brief description of project 1.</p>
        </div>
        <div className="project">
          <img src="path/to/project2.jpg" alt="Project 2" />
          <h3>Project Title 2</h3>
          <p>Brief description of project 2.</p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </div>
  );
}

export default Work;
