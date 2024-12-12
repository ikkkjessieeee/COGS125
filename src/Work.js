import React from "react";
import "./styles.css";

function Work() {
  return (
    <div className="container">
      <h1 className="header">My Work</h1>
      <div className="project-gallery">
        <a
          href="https://xinjiezhou.cargo.site/untitled-page"
          target="_blank"
          rel="noopener noreferrer"
          className="project"
        >
          <h3>Social Platform Petkeley</h3>
          <p>A virtual campus with your own virtual pet that aligns with your interests and syncs with your daily life.</p>
        </a>
        <a
          href="https://rhythmeet.framer.website/"
          target="_blank"
          rel="noopener noreferrer"
          className="project"
        >
          <h3>RhythMeet</h3>
          <p>A social app aims to connecting dancers of all skill levels, styles and backgrounds.</p>
        </a>
        {/* Add more projects as needed */}
      </div>
    </div>
  );
}

export default Work;
