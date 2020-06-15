import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUserLocalStorage,
  removeUserLocalStorage,
  generateUser
} from "../../localStorage";
import { Redirect } from "react-router-dom";
import Facebook from "./Facebook";

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
            {loggedIn ? (
              <div>
                <li>
                  <a
                    href=""
                    className="nav-text upper margin-right"
                    onClick={removeUserLocalStorage}
                  >
                    Log Out
                  </a>
                </li>
                <li>
                  <a href="/account" className="nav-text upper">
                    My Account
                  </a>
                </li>
              </div>
            ) : (
              <li>
                {/* <Facebook /> */}
                <a href='' className="nav-text upper" onClick={generateUser}>Login</a>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
