import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCustomActions } from "../../store/actions";
import Action from "../components/Action";

export default class CompletedActionsContainer extends Component {
  constructor(props) {
    super(props);

    this.handleBackButton = this.handleBackButton.bind(this);
  }

  handleBackButton() {

  }

  render() {
    const info = this.props;
    const handleBackButton = this.handleBackButton;

    const exampleAction1 = {
      subject: "Police",
      title: "Example 1",
      url: "https://blacklivesmatter.com/",
      details: "Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example "
    }
    const exampleAction2 = {
      subject: "Police",
      title: "Example 2",
      url: "https://blacklivesmatter.com/",
      details: "Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example "
    }

    //Test vvv
    const actions = [exampleAction1, exampleAction2]

    // Production vvv
    // const actions = info.actionsTaken

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
