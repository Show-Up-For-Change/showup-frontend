import React, {Component} from "react"
import {connect} from 'react-redux';
import fetchActions from '../../store/actions'
import Action from '../components/Action'

class ActionsContainer extends Component {

  componentDidMount() {
    // this.props.getActions();
  }

  render() {
    const {actions} = this.props
    const exampleAction1 = {
      subject: 'Podcast',
      title: 'Throughline: The History of Policing in the US',
      details: 'A blurb about what it is. A blurb about what it is. A blurb about what it is. A blurb about what it is. A blurb about what it is. A blurb about what it is. A blurb about what it is. A blurb about what it is. A blurb about what it is. A blurb about what it is. A blurb about what it is. A blurb about what it is.'
    }
    const exampleAction2 = {
      subject: 'Report',
      title: 'New Era of Public Safety Toolkit (PDF)',
      details: 'This toolkit is intended to help activists, organizations, and communities identify and act on solutions to change policing for the better in their own communities.'
    }
    return (
      <div className = "background-white container padding-vertical">
        <div className = "col-4">
          <h2 className ="h2">Learn and Take Action</h2>
          <Action action = {exampleAction1} />
          <Action action = {exampleAction2} />
         {actions ? (
            actions.map(action => <Action action = {action} />)
         ) : (
           ''
         )}
        </div>
      </div>
    )
  }
}

  const mapStateToProps = state => {
    return {
      actions: state.actions.actions
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      getActions: () => dispatch(fetchActions())
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ActionsContainer)

