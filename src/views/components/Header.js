import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="background-black transparecy padding-vertical position-relative hero">
        <span className = "background-img position-absolute"></span>
        <div className="container">
          <div className="flex-wrapper flex-center">
            <div className="col-4 text-white z-2">
              <h1 className="h1 text-yellow">
                Show Up <br />
                <strong className="text-white">For Change</strong>
              </h1>
            </div>

            <div className="col-7 text-white position-relative z-2">
              <p className="intro">
                <strong>Show Up for Change</strong> is a place to set goals,
                track growth and keep going in your journey to fight systemic
                racism.
              </p>

              <p>
                Browse resources where you can support antiracist policies,
                learn how you can adopt antiracist behaviors and connect with
                resources and community. This work is not easy, and we can do it
                if we commit to keep showing up. So make the commitment, set
                some goals and get started.
              </p>

              <p>Let’s keep showing up together.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
