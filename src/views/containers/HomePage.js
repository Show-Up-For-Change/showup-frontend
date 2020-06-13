import React, {Component} from 'react'
import {connect} from 'react-redux'

import ActionsContainer from './ActionsContainer'
import Header from "../components/Header";
import {Quote} from "../components/Quote"
import ThoughtLeadersContainer from './ThoughtLeaderContainer'
import Facebook from "../components/Facebook";

import {getUserLocalStorage} from '../../localStorage'
import {login} from '../../store/user'

class HomePage extends Component {

  syncToLS () {
    const user = getUserLocalStorage()
    if (user.email && user.facebookId && user.name){
      this.props.setUser(user.email, user.facebookId, user.name)
    }
  }

  componentDidMount () {
    this.syncToLS()
  }

  render () {
    return (
      <div id = "main-content">
        <Facebook />
        <Header/>
        <ActionsContainer/>
        <Quote/>
        <ThoughtLeadersContainer/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: (email, facebookId, name) => {dispatch(login(email, facebookId, name))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
