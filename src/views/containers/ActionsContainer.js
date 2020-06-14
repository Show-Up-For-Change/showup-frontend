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
    this.props.getActions();
  }

  handleRefreshButton () {
    this.props.getActions();
  }

  render() {
    const {actions} = this.props
    const handleRefreshButton = this.handleRefreshButton

    return (
      <div className = "background-white container padding-vertical">
        <div className = "col-6">
          <h2 className = "h2 text-grey margin-bottom">Learn and Take Action</h2>
          <button
          className = "button button-yellow margin-bottom"
          type = "button"
          onClick = {handleRefreshButton}
          >
            Show me 3 more
          </button>
        </div>
        <div className = "actions-list col-6 text-grey container">
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

