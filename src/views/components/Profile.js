import React, { Component } from "react";

export default class Profile extends Component {
    render() {
        return (
          <div className="profilePage">
            {this.props.currentUser ? (
              <div>
                <h3>Welcome back, @{this.props.user.name}</h3>
                        
                <Action />
              
        )
      }
    }
const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};
