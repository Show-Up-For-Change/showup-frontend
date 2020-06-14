import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserLocalStorage} from '../../localStorage'
import {Redirect} from 'react-router-dom'
import NavBar from "../components/NavBar"
import ProfileHeader from '../components/ProfileHeader'
import {fetchInfo} from '../../store/user'

class ProfilePage extends Component {
  componentDidMount() {
    const id = getUserLocalStorage().facebookId
    this.props.getUserInfo(id)
  }

  render() {
    const loggedIn = getUserLocalStorage().facebookId
    return (
      loggedIn ? (
        <div className="background-black transparecy padding-vertical position-relative hero">
          <ProfileHeader info = {this.props.info}/>
        </div>

      ) : (
        <Redirect to="/"/>
      )
    )
  }
}

const mapStateToProps = (state) => {
  return {
    info: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (userID) => dispatch(fetchInfo(userID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
