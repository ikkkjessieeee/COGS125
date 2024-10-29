import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState("Welcome to my portfolio!");

  function handleClick() {
    setMessage("Thanks for visiting my portfolio!");
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>{message}</h1>

      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px', marginBottom: '20px' }}>
        Click Me
      </button>

      <h2>About Me</h2>
      <p>Hello! I'm Jessie, and I'm currently learning React to build interactive websites.</p>

      <h2>My Skills</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>💻 JavaScript</li>
        <li>⚛️ React</li>
        <li>🎨 HTML/CSS</li>
      </ul>
    </div>
  );
}

export default App;
