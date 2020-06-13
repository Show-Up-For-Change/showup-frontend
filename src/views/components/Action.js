import {Component} from "react"

export default class Action extends Component {

    render() {
        const {action} = this.props
        return (
            <div className = 'action-item'>
                <p className = 'tag'>{action.subject}</p>
                <h3 className = 'h3 text-grey'>{action.title}</h3>
                <p className = 'card-text'>{action.details}</p>
            </div>
        )
    }
}
