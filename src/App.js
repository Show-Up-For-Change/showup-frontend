import React from 'react';
import logo from './logo.svg';
import ActionsContainer from './views/containers/ActionsContainer'
import Header from "./views/components/Header";
import {Quote} from "./views/components/Quote"

function App() {
  return (
    <div className="App">
      <Header />
      <ActionsContainer/>
      <Quote/>
    </div>
  );
}

export default App;
