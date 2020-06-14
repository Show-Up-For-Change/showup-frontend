import React, {Component} from "react"
import {connect} from 'react-redux';
import {fetchActions} from '../../store/actions'
import Action from '../components/Action'

class ActionsContainer extends Component {

  constructor(props){
    super(props)

    this.handleRefreshButton = this.handleRefreshButton.bind(this)
  }

  componentDidMount() {
    // this.props.getActions();
  }

  handleRefreshButton () {
    // this.props.getActions();
  }

  render() {
    const {actions} = this.props
    const handleRefreshButton = this.handleRefreshButton

    const exampleAction1 = {
      subject: 'Podcast',
      title: 'Throughline: The History of Policing in the US',
      details: 'A blurb about what it is. A blurb about what it is. A blurb about what it is. A blurb about what it is. A blurb about what it is. A blurb about what it is. A blurb about what it is. A blurb about what it is. A blurb about what it is. A blurb about what it is. A blurb about what it is. A blurb about what it is.',
      url: "https://blacklivesmatter.com/"
    }
    const exampleAction2 = {
      subject: 'Report',
      title: 'New Era of Public Safety Toolkit (PDF)',
      details: 'This toolkit is intended to help activists, organizations, and communities identify and act on solutions to change policing for the better in their own communities.',
      url: "https://blacklivesmatter.com/"
    }
    return (
      <div className = "background-white container padding-vertical">
        <div className = "flex-wrapper actions-list">
          <h2 className = "h2 text-grey">Learn and Take Action</h2>
          <button
          className = "button button-yellow"
          type = "button"
          onClick = {handleRefreshButton}
          >
            Show me 3 more
          </button>
        </div>
        <div className = "col-4">
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

