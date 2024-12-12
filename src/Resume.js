import React from "react";

function Resume({ resumeLink }) {
  return (
    <div className="container">
      <h1 className="header">Resume</h1>
      <p>
        Click the button below to view my resume on Google Docs:
      </p>
      <a
        href={resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
      >
        View Resume
      </a>
    </div>
  );
}

export default Resume;
