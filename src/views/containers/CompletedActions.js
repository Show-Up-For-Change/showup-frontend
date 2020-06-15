import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCustomActions } from "../../store/actions";
import Action from "../components/Action";

export default class CompletedActionsContainer extends Component {

  render() {
    const info = this.props;

    const exampleAction1 = {
      subject: "TEXT AND SIGN",
      title: "Resist Bot - Contact your representatives in under 2 minutes",
      url: "https://blacklivesmatter.com/",
      details: "Text the word RESIST to me on iMessage, Messenger, Twitter, Telegram, or to 50409 on SMS*res"
    }
    const exampleAction2 = {
      subject: "CHALLENGE INJUSTICE",
      title: "Contact Minneapolis Representatives",
      url: "https://blacklivesmatter.com/",
      details: "Write a letter demanding justice to Minneapolis Mayor Jacob Frey. Demand County Attorney Mike Freeman charge the officers with murder by calling him at 612-348-5550."
    }

    //Test vvv
    // const actions = [exampleAction1, exampleAction2]

    // Production vvv
    const actions = info.actionsTaken

    return (
      <div class="col-6">
			<h2 class="h2 text-grey completed-items">Completed Items</h2>
      {actions ? (
        actions.map(action => {
          return (
            <article class="action-item completed position-relative margin-bottom">
            <span class="checkmark position-absolute">&#10004;</span>
			      <span class="checkmark-square background-yellow position-absolute"></span>
            <Action action = {action}/>
            </article>
          )
        })
      ) : (
        <p>None yet!</p>
      )}
      </div>
    );
  }
}
