import React from 'react';
import logo from './logo.svg';
import ActionsContainer from './views/containers/ActionsContainer'
import Header from "./views/components/Header";
import {Quote} from "./views/components/Quote"
import ThoughtLeadersContainer from './views/containers/ThoughtLeaderContainer'

function App() {
  return (
    <div className="App">
      <a href="#main-content" className = "visually-hidden focusable skip-link">
		    Skip to main content
	    </a>
      <div id = "main-content">
      <Header/>
      <ActionsContainer/>
      <Quote/>
      <ThoughtLeadersContainer/>
      </div>
    </div>
  );
}

export default App;
