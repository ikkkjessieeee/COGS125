import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Work from "./Work";
import Resume from "./Resume";
import "./styles.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">About Me</Link>
          <Link to="/work">Work</Link>
          <Link to="/resume">Resume</Link>
        </nav>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
