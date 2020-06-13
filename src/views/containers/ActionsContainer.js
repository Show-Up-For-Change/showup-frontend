import React, {Component} from "react"
import {connect} from 'react-redux';
import fetchActions from '../../store/actions'
import Action from '../components/Action'

class HashtagsContainer extends Component {

  componentDidMount() {
    this.props.getActions();
  }

  render() {
    const {actions} = this.props
    return (
      <div>
        {actions ? (
          actions.map(action => <Action action = {action} />)
        ) : (
          ''
        )}
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

  export default connect(mapStateToProps, mapDispatchToProps)(HashtagsContainer)

