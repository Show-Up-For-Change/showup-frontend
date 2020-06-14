import React from "react";
import logo from "./logo.svg";
import ActionsContainer from "./views/containers/ActionsContainer";
import Header from "./views/components/Header";
import { Quote } from "./views/components/Quote";
import ThoughtLeadersContainer from "./views/containers/ThoughtLeaderContainer";
import ThoughtLeader from "./views/components/ThoughtLeader";
import ProfilePage from "./views/containers/ProfilePage";

function App() {
  return (
    <div className="App">
      <ProfilePage />
      <Header />
      <ActionsContainer />
      <Quote />
      <ThoughtLeadersContainer />
    </div>
  );
}

export default App;
