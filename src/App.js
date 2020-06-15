import React from 'react';
import HomePage from "./views/containers/HomePage"
import ProfilePage from "./views/containers/ProfilePage"
import {Route, Switch} from 'react-router-dom'
import NavBar from './views/components/NavBar'

function App() {
  return (
    <div className="App">
      <a href="#main-content" className = "visually-hidden focusable skip-link">
		    Skip to main content
	    </a>
      <NavBar/>
      <Switch>
        <Route exact path='/account' component={ProfilePage}/>
        <Route exact path = '/' component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
