import React, {Component} from 'react'
import { fetchLeaders } from '../../store/leaders'
import { connect } from 'react-redux'
import ThoughtLeader from '../components/ThoughtLeader'

class ThoughtLeadersContainer extends Component {

  componentDidMount() {
    // this.props.getLeaders();
  }

  render () {
    const { leaders } = this.props

    const exampleThoughtLeader1 = {
      handle: "blklivesmatter",
      image_url: "https://scontent-lga3-1.cdninstagram.com/v/t51.2885-19/s150x150/62506483_2047623088866232_6427818759221673984_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_ohc=-iNsPSFBRx4AX_Xcs78&oh=c2259cfaf4f1e1dfa776be5d71e8aad7&oe=5F0DF02F"
    }
    const exampleThoughtLeader2 = {
      handle: "laylafsaad",
      image_url: "https://scontent-lga3-1.cdninstagram.com/v/t51.2885-19/s150x150/76875179_951648338567728_6274958678428745728_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_ohc=lTkDmOViCF8AX_0-QJv&oh=6e76170007f872e1278948e2e15d515a&oe=5F105D7C"
    }
    const exampleThoughtLeader3 = {
      handle: "ibramxk",
      image_url: "https://scontent-lga3-1.cdninstagram.com/v/t51.2885-19/s150x150/21878922_689494101258888_8074140016529375232_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_ohc=KKPwv-E7qmkAX-2-1B8&oh=696c7499a0ee1e59af8f51ddb6a9deea&oe=5F1072BE"
    }

    return (
      <div className = "background-black padding-vertical">
        <div className = "container">
        <h2 className = "h2 text-white">Thought Leaders to Follow</h2>
          <ThoughtLeader leader = {exampleThoughtLeader1}/>
          <ThoughtLeader leader = {exampleThoughtLeader2}/>
          <ThoughtLeader leader = {exampleThoughtLeader3}/>
        {leaders ? (
          leaders.map(leader => <ThoughtLeader leader = {leader}/>)
        ) : (
          ""
        )
      }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    leaders: state.leaders.leaders
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getLeaders: () => {dispatch(fetchLeaders())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThoughtLeadersContainer)
