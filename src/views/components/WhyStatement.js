import React, { Component } from "react";
import history from "../../history";

export default class WhyStatement extends Component {
  goHome() {
    history.push("/");
  }
  render() {
    const why = this.props.info.whyStatement;
    return (
      <div className="col-2 text-grey why">
        <div className="dash-button button-position">
          <a href="/">
            <button className="button button-yellow button-small">
              Browse ways to ShowUp
            </button>
          </a>
        </div>

        <h2 className="tag margin-bottom">Why I ShowUp</h2>
        {why ? (
          <div>
            <blockquote className="h3 margin-bottom">
              {why}
            </blockquote>
            <p className="small-text italic">
              <a href="/account">edit</a>
            </p>
          </div>
        ) : (
          <h3 className="h3 text-grey">
            <a href="/account">Add a Why Statement</a>
          </h3>
        )}

        <p className="small-text italic">
          This is a marathon, not a sprint. Remind yourself why you’re making
          this commitment.
        </p>
      </div>
    );
  }
}
