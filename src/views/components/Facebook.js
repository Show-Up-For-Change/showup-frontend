import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import {setUserLocalStorage, removeUserLocalStorage} from '../../localStorage'
import {login} from '../../store/user'
import {connect} from 'react-redux'

class Facebook extends Component {

  responseFacebook = async (response) => {
    if (response.name && response.email && response.facebookId) {
      setUserLocalStorage(response.email, response.userID, response.name)
      this.props.setUserStore(response.email, response.userID, response.name)
    }
  };

  handleLogout () {
    removeUserLocalStorage()
  }

  render() {
    let fbContent;
    const handleLogout = this.handleLogout

    if (this.props.name) {
      fbContent = (
        <div className="nav-text upper margin-right">
        <button onClick = {handleLogout} type = "submit">
          Logout
        </button>
        </div>
      );
    } else {
      fbContent = (
        <div className="nav-text upper margin-right">
          <FacebookLogin
            appId="256209082150971"
            autoLoad={false}
            fields="name,email"
            callback={this.responseFacebook}
          />
        </div>
      );
    }

    return <div>{fbContent}</div>;
  }
}

const mapStateToProps = state => {
  return {
    name: state.user.name,
    email: state.user.email
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUserStore: (email, facebookId, name)=>{dispatch(login(email, facebookId, name))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Facebook)
