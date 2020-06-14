import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserLocalStorage } from "../../localStorage";
import { Redirect } from "react-router-dom";

class NavBar extends Component {
  render() {
    const loggedIn = getUserLocalStorage().facebookId;
    return (
      <div className="z-2 position-relative">
        <div aria-label="main nav" className="main-nav container flex-wrapper">
          <ul className="">
            <li>
              <a href="/" className="h3 text-white">
                ShowUp <br />
                <strong className="text-yellow">For Change</strong>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="" className="nav-text upper margin-right">
                Login
              </a>
            </li>
            <li>
              <a href="" className="nav-text upper margin-right">
                Signup
              </a>
            </li>
            <li>
              <a href="" className="nav-text upper">
                My Account
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
