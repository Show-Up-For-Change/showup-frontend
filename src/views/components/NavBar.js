import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserLocalStorage } from "../../localStorage";
import { Redirect } from "react-router-dom";

class NavBar extends Component {
  render() {
    const loggedIn = getUserLocalStorage().facebookId;
    return (
      <header className="z-2 position-relative">
        <nav aria-label="main nav" className="main-nav container flex-wrapper">
          <ul className="">
            <li>
              <a href="/" className="h3 text-yellow">
                ShowUp <br />
                <strong className="text-white">For Change</strong>
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
        </nav>
      </header>
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
