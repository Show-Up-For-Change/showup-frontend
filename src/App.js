import React from 'react';
import HomePage from "./views/containers/HomePage"

function App() {
  return (
    <div className="App">
      <a href="#main-content" className = "visually-hidden focusable skip-link">
		    Skip to main content
	    </a>
      <HomePage/>
    </div>
  );
}

export default App;
