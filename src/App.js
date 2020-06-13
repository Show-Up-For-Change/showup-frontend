import React from 'react';
import logo from './logo.svg';
import './App.css';
import ActionsContainer from './views/containers/ActionsContainer'
import Header from "./views/components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ActionsContainer/>
    </div>
  );
}

export default App;
