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
        <header>
          <h1>
            <Link to="/COGS125">XINJIE ZHOU</Link>
          </h1>
          <nav>
            <Link to="COGS125">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/resume">Resume</Link>
          </nav>
        </header>

        <Routes>
          <Route index={true} path="/COGS125" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route
            path="/resume"
            element={
              <Resume
                resumeLink="https://docs.google.com/document/d/1_OpaGs4rTvlkyczRWl0D9MfdKGkihOKEVCE3CvgblMk/edit?tab=t.0"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
