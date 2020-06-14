import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import {setUserLocalStorage} from '../../localStorage'
import {login} from '../../store/user'
import {connect} from 'react-redux'

class Facebook extends Component {

  responseFacebook = async (response) => {
    if (response.name && response.email && response.facebookId) {
      setUserLocalStorage(response.email, response.userID, response.name)
      this.props.setUserStore(response.email, response.userID, response.name)
    }
  };

  componentClicked = () => console.log("clicked");
  render() {
    let fbContent;

    if (this.props.name) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px",
          }}
        >
          <h2>Welcome {this.props.name}</h2>
          Email: {this.props.email}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="256209082150971"
          autoLoad={false}
          fields="name,email"
          callback={this.responseFacebook}
        />
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
