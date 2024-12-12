import React from "react";

function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>About Me</h1>
        <p>Hello! My name is Xinjie Zhou.</p>
        <p>
          I’m a <strong>Cognitive Sciences</strong> and <strong>Visual Art</strong> student at UC San Diego, interested in <strong>Human-Computer Interaction</strong> and <strong>Civic Innovation</strong>.
        </p>
        <p>
          I look forward to working on <strong>UI/UX Design</strong>, <strong>Computational Design</strong>, <strong>User Research</strong>, and <strong>Marketing Strategy</strong>.
        </p>
      </div>
      <div className="about-image">
        <img src="https://freight.cargo.site/w/400/h/533/q/75/i/N1721475218520616417747995482641/WechatIMG44645.jpg" alt="Xinjie Zhou" className="profile-pic" />
      </div>
    </div>
  );
}

export default About;
