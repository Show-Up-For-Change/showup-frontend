import React, {Component} from "react"
import {connect} from 'react-redux';
import {fetchActions, fetchCustomActions} from '../../store/actions'
import Action from '../components/Action'

class ActionsContainer extends Component {

  constructor(props){
    super(props)

    this.handleRefreshButton = this.handleRefreshButton.bind(this)
  }

  componentDidMount() {
    this.props.userId ? this.props.getCustomActions(this.props.userId) : this.props.getActions()
  }

  handleRefreshButton () {
    this.props.userId ? this.props.getCustomActions(this.props.userId) : this.props.getActions()
  }

  render() {
    const {actions} = this.props
    const handleRefreshButton = this.handleRefreshButton

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
      actions: state.actions.actions,
      userId: state.user.facebookId
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      getActions: () => dispatch(fetchActions()),
      getCustomActions: (id) => dispatch(fetchCustomActions(id))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ActionsContainer)

