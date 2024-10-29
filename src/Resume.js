import React from "react";
import "./styles.css";

function Resume() {
  return (
    <div className="container">
      <h1>Resume</h1>
      <p>
        Download my resume{" "}
        <a href="path/to/resume.pdf" download>
          here
        </a>
        .
      </p>
    </div>
  );
}

export default Resume;
