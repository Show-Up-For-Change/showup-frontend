import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserLocalStorage } from "../../localStorage";
import { Redirect } from "react-router-dom";
import NavBar from "../components/NavBar";
import ProfileHeader from "../components/ProfileHeader";
import { fetchInfo } from "../../store/user";
import history from "../../history";
import WhyStatement from "../components/WhyStatement";
import CompletedActions from '../containers/CompletedActions'
import Quote from '../components/Quote'

class ProfilePage extends Component {
  componentDidMount() {
    const id = getUserLocalStorage().facebookId;
    this.props.getUserInfo(id);
  }

  goHome() {
    history.push("/");
  }

  render() {
    const loggedIn = getUserLocalStorage().facebookId;
    return true ? (
      <main id="main-content dashboard">
        <div className="background-black transparecy padding-vertical position-relative hero">
          <ProfileHeader info={this.props.info} />
        </div>
        <div className="background-white container padding-vertical">
          <div className="flex-wrapper position-relative">
            <WhyStatement info={this.props.info}/>
          <CompletedActions/>
          </div>
        </div>
          <Quote/>
          <footer className="footer background-black padding-vertical"></footer>
      </main>
    ) : (
      <div>{this.goHome()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    info: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (userID) => dispatch(fetchInfo(userID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
