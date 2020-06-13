import {Component} from "react"
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
      <div className = "background-white container padding-vertical">
        <div className = "col-4">
          <h2 className ="h2">Learn and Take Action</h2>
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

  export default connect(mapStateToProps, mapDispatchToProps)(HashtagsContainer)

