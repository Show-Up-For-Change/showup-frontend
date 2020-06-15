import React, { Component } from "react";
import history from "../../history";

export default class WhyStatement extends Component {
  goHome() {
    history.push("/");
  }
  render() {
    return (
      <div className="col-2 text-grey why">
        <div className="dash-button button-position">
          <a href="/">
          <button
            className="button button-yellow button-small"
          >
            Browse ways to ShowUp
          </button>
          </a>
        </div>

        <h2 className="tag margin-bottom">Why I ShowUp</h2>
        <blockquote className="h3 margin-bottom">
          “I’m committing to becoming more antiracist because my nieces deserve
          a country where every opportunity is available to them.”
        </blockquote>

        <p className="small-text italic">
          This is a marathon, not a sprint. Remind yourself why you’re making
          this commitment.
        </p>
        <p className="small-text italic">
          <a href="/account">edit</a>
        </p>
      </div>
    );
  }
}
