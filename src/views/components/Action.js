import React, {Component} from "react"

export default class Action extends Component {

    render() {
        const {action} = this.props
        return (
            action ? (
            <div className = 'action-item'>
                <p className = 'tag'>{action.subject}</p>
                <a href = {action.url}>
                    <h3 className = 'h3 text-grey'>{action.title}</h3>
                </a>
                <p className = 'card-text'>{action.details}</p>
            </div>
            ) : ''
        )
    }
}
